/* Expects (in sequence):
 * - Course
 * - Team Number
 * - Student Email
 */

const memberCSVData = 
`MIST.6010-081,Team_0,test_user1@student.uml.edu,Luvai, Motiwalla
MIST.6010-081,Team_0,test_user2@student.uml.edu, Sunder, Pinchai
MIST.6010-081,Team_0,test_user3@student.uml.edu, Ruilin, Wang
MIST.6010-081,Team_1,steven_hong@student.uml.edu,Steven,Hong
MIST.6010-081,Team_1,megan_krueger@student.uml.edu,Megan,Krueger
MIST.6010-081,Team_1,gregory_vanover@student.uml.edu,Gregory,Vanover
MIST.6010-081,Team_1,jasmine_le@student.uml.edu,Jasmine,Le
MIST.6010-081,Team_1,holly_lewis@student.uml.edu,Holly,Lewis
MIST.6010-081,Team_1,gloria_ngo@student.uml.edu,Gloria,Ngo
MIST.6010-081,Team_1,joel_walker@student.uml.edu,Joel,Walker
MIST.6010-081,Team_2,anthony_blunt@student.uml.edu,Anthony,Blunt
MIST.6010-081,Team_2,hayden_speak@student.uml.edu,Hayden,Speak
MIST.6010-081,Team_2,rebekka_ryan@student.uml.edu,Rebekka,Ryan
MIST.6010-081,Team_2,michaela_martinez@student.uml.edu,Michaela,Martinez
MIST.6010-081,Team_2,melyssa_bennett@student.uml.edu,Melyssa,Bennett
MIST.6010-081,Team_2,kyle_shanley@student.uml.edu,Kyle,Shanley
MIST.6010-081,Team_2,logan_jacques@student.uml.edu,Logan,Jacques
MIST.6010-081,Team_3,william_cloutier@student.uml.edu,Bill,Cloutier
MIST.6010-081,Team_3,alexandria_grasso@student.uml.edu,Alexandria,Grasso
MIST.6010-081,Team_3,kevin_mclaughlin1@student.uml.edu,Kevin,McLaughlin
MIST.6010-081,Team_3,kayla_biles@student.uml.edu,Kayla,Biles
MIST.6010-081,Team_3,vijayanand_selvaraj@student.uml.edu,Vijay Anand,Selvaraj
MIST.6010-081,Team_3,david_macdonald2@student.uml.edu,David,Macdonald
MIST.6010-081,Team_4,teri_ewaschuk@student.uml.edu,Teri,Ewaschuk
MIST.6010-081,Team_4,joseph_ayoka@student.uml.edu,Joseph,ayoka
MIST.6010-081,Team_4,luisa_rodriguezcolorado@student.uml.edu,Luisa,Rodriguez
MIST.6010-081,Team_4,stella_cortese@student.uml.edu,Stella,Cortese
MIST.6010-081,Team_4,isac_jonsson@student.uml.edu,Isac,Jonsson
MIST.6010-081,Team_4,christian_poindexter@student.uml.edu,Christian,Poindexter
MIST.6010-081,Team_4,benjamin_greco@student.uml.edu,Ben,Greco
MIST.6010-081,Team_5,michael_evans1@student.uml.edu,Mike,Evans
MIST.6010-081,Team_5,caimin_cradock@student.uml.edu,Caimin,Cradock
MIST.6010-081,Team_5,alexander_brierley@student.uml.edu,Alexander,Brierley
MIST.6010-081,Team_5,kris_bolden@student.uml.edu,Kris,Bolden
MIST.6010-081,Team_5,mahua_bangia@student.uml.edu,Mahua,Bangia
MIST.6010-081,Team_5,dustin_nguyen3@student.uml.edu,Dustin,Nguyen
MIST.6010-081,Team_6,jeremy_dodge1@student.uml.edu,Jeremy,Dodge
MIST.6010-081,Team_6,eric_sowersby@student.uml.edu,Eric,Sowersby
MIST.6010-081,Team_6,adam_maienza@student.uml.edu,Adam,Maienza
MIST.6010-081,Team_6,patrick_senier@student.uml.edu,Patrick,Senier
MIST.6010-081,Team_6,patrick_berry@student.uml.edu,Patrick,Berry
MIST.6010-081,Team_6,patrick_crews@uml.edu,Patrick,Crews`
