const tallyScoreHeader = `Class,Group,Student First Name,Student Last Name,Student Email,Student Score,Evaluation Submitted,Student Feedback (if provided)`;
var tallyScoreCSV = tallyScoreHeader;
(async () => {
  const response = await fetch("/api/scoring");
  const data = await response.json();

  const tallyValues = data.tallyValues;
  const commentValues = data.commentValues;
  const rawValues = data.rawValues;

  var tableBuffer = "";
  tallyValues.reverse().forEach(tallyValue => {
    tallyValue.comment = tallyValue.comments.length > 0 ?
      tallyValue.comments[0].comment.replaceAll('\n', ' ').replaceAll(/\s\s+/g, ' ') : "N/A";
    tallyValue.submitted = tallyValue.scores.length > 0 ? "Y" : "N";

    tableBuffer += `
            <tr>\
            <td>${tallyValue._id.class}</td>\
            <td>${tallyValue._id.group}</td>\
            <td>${tallyValue._id.student}</td>\
            <td>${tallyValue.score.toFixed(2)}</td>\
            <td>${tallyValue.submitted}</td>\
            <td>${tallyValue.comment}</td>\
            </tr>`;

    tallyScoreCSV += `\n"${tallyValue._id.class}","${tallyValue._id.group}","${tallyValue._id.student.split("@")[0].split("_")[0]}","${tallyValue._id.student.split("@")[0].split("_")[1]}","${tallyValue._id.student}",${tallyValue.score.toFixed(2)},"${tallyValue.submitted}","${tallyValue.comment}"`;
  });
  document.getElementById("tally").innerHTML += `<tbody>${tableBuffer}</tbody>`;
  tableBuffer = "";
  commentValues.reverse().forEach(commentValue => {
    tableBuffer += `
            <tr>\
            <td>${commentValue.class}</td>\
            <td>${commentValue.group}</td>\
            <td>${commentValue.reviewer}</td>\
            <td>${commentValue.comment}</td>\
            </tr>`;
  });
  document.getElementById("feedback").innerHTML += `<tbody>${tableBuffer}</tbody>`;
  tableBuffer = "";
  rawValues.reverse().forEach(rawValue => {
    tableBuffer += `
            <tr>\
            <td>${rawValue.class}</td>\
            <td>${rawValue.group}</td>\
            <td>${rawValue.student}</td>\
            <td>${rawValue.reviewer}</td>\
            <td>${rawValue.score}</td>\
            <td>${rawValue._id.getTimestamp()}</td>\
            </tr>`;
  });
  document.getElementById("raw").innerHTML += `<tbody>${tableBuffer}</tbody>`;

  const downloadlink = document.getElementById("req-scoring-overview");
  downloadlink.href = URL.createObjectURL(new Blob([tallyScoreCSV], { type: "text/csv" }));
  downloadlink.download = `PeerEvaluations-${(new Date()).toISOString()}.csv`;
  downloadlink.hidden = false;

  (await scores.aggregate([
    {
      "$group": {
        "_id": "$class"
      }
    }
  ])).sort().map(classObject => classObject._id).forEach(classString => {
    var tallyScoreCSV = tallyScoreHeader;

    tallyValues.reverse().filter(tallyValue => tallyValue._id.class == classString).forEach(tallyValue => {
      tallyValue.comment = tallyValue.comments.length > 0 ?
        tallyValue.comments[0].comment.replaceAll('\n', ' ').replaceAll(/\s\s+/g, ' ') : "N/A";
      tallyValue.submitted = tallyValue.scores.length > 0 ? "Y" : "N";

      tallyScoreCSV += `\n"${tallyValue._id.class}","${tallyValue._id.group}","${tallyValue._id.student.split("@")[0].split("_")[0]}","${tallyValue._id.student.split("@")[0].split("_")[1]}","${tallyValue._id.student}",${tallyValue.score.toFixed(2)},"${tallyValue.submitted}","${tallyValue.comment}"`;
    });

    document.getElementById("req-scoring-byclass").innerHTML +=
      `<a 
                class="btn btn-secondary"
                href=${URL.createObjectURL(new Blob([tallyScoreCSV], { type: "text/csv" }))}
                download="PeerEvaluations-${classString}-${(new Date()).toISOString()}.csv"
            >
                Export Scoring for ${classString}
            </a>`;
  });

  const deleteData = document.getElementById("delete-scoring-data");
  deleteData.onclick = async () => {
    await fetch("/api/scoring", {
      method: "DELETE"
    });
    window.location.reload();
  };
  deleteData.hidden = false;

  $('#tally').DataTable();
  $('#feedback').DataTable();
  $('#raw').DataTable();
})();
