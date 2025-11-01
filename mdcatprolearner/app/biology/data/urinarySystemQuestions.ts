
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
 export const urinarySystemQuestions: Question[] = [
 { 
  id: 'Urinary1', 
 "question": 'Which organ is the primary site of urine formation?', 
 
  "options": ["Ureter", "Kidney", "Bladder", "Urethra"], 
  correctAnswer: 1, 
  explanation: "Kidneys filter blood and form urine, while ureter, bladder, and urethra only transport or store it." 
},

{ 
  id: 'Urinary2', 
 "question": 'The functional unit of the kidney is?', 
 
  "options": ["Neuron", "Nephron", "Glomerulus", "Collecting duct"], 
  correctAnswer: 1, 
  explanation: "Nephron is the structural and functional unit of kidney where filtration, reabsorption and secretion occur." 
},

{ 
  id: 'Urinary3', 
 "question": 'Which structure carries urine from kidney to urinary bladder?', 
 
  "options": ["Ureter", "Urethra", "Nephron", "Loop of Henle"], 
  correctAnswer: 0, 
  explanation: "The ureter transports urine from the renal pelvis to the bladder." 
},

{ 
  id: 'Urinary4', 
 "question": 'Bowman’s capsule surrounds which structure?', 
 
  "options": ["Loop of Henle", "Glomerulus", "Collecting duct", "Renal artery"], 
  correctAnswer: 1, 
  explanation: "Bowman’s capsule surrounds the glomerulus where ultrafiltration occurs." 
},

{ 
  id: 'Urinary5', 
 "question": 'Which region of kidney contains renal pyramids?', 
 
  "options": ["Renal cortex", "Renal medulla", "Renal pelvis", "Renal hilum"], 
  correctAnswer: 1, 
  explanation: "Renal medulla contains pyramids that drain urine into calyces." 
},

{ 
  id: 'Urinary6', 
 "question": 'Urine leaves the bladder through?', 
 
  "options": ["Ureter", "Urethra", "Collecting duct", "Renal vein"], 
  correctAnswer: 1, 
  explanation: "The urethra carries urine from the bladder to the outside of the body." 
},

{ 
  id: 'Urinary7', 
 "question": 'Which blood vessel carries filtered blood away from kidney?', 
 
  "options": ["Renal artery", "Renal vein", "Glomerular capillaries", "Afferent arteriole"], 
  correctAnswer: 1, 
  explanation: "Renal vein carries deoxygenated, filtered blood back to systemic circulation." 
},

{ 
  id: 'Urinary8', 
 "question": 'Loop of Henle is mainly involved in?', 
 
  "options": ["Blood filtration", "Water reabsorption", "Urea secretion", "Glucose oxidation"], 
  correctAnswer: 1, 
  explanation: "Loop of Henle concentrates urine by reabsorbing water and salts." 
},

{ 
  id: 'Urinary9', 
 "question": 'Which part of nephron is responsible for selective reabsorption of glucose?', 
 
  "options": ["Distal convoluted tubule", "Proximal convoluted tubule", "Loop of Henle", "Collecting duct"], 
  correctAnswer: 1, 
  explanation: "Proximal convoluted tubule reabsorbs almost all glucose, amino acids and water." 
},

{ 
  id: 'Urinary10', 
 "question": 'Urine is temporarily stored in?', 
 
  "options": ["Urethra", "Bladder", "Renal pelvis", "Nephron"], 
  correctAnswer: 1, 
  explanation: "Bladder stores urine until micturition (urination) occurs." 
},

{ 
  id: 'Urinary11', 
 "question": 'Which artery brings blood into kidney for filtration?', 
 
  "options": ["Renal artery", "Renal vein", "Hepatic artery", "Pulmonary artery"], 
  correctAnswer: 0, 
  explanation: "Renal artery carries oxygenated blood to kidney for filtration." 
},

{ 
  id: 'Urinary12', 
 "question": 'What is the main nitrogenous waste excreted in human urine?', 
 
  "options": ["Uric acid", "Ammonia", "Urea", "Creatinine"], 
  correctAnswer: 2, 
  explanation: "Urea is the main nitrogenous waste excreted by humans, produced in the liver." 
},

{ 
  id: 'Urinary13', 
 "question": 'Which structure collects urine from renal pyramids?', 
 
  "options": ["Renal pelvis", "Minor calyx", "Renal cortex", "Glomerulus"], 
  correctAnswer: 1, 
  explanation: "Minor calyces collect urine from renal pyramids and pass it to major calyces." 
},

{ 
  id: 'Urinary14', 
 "question": 'Which part of nephron adjusts pH of urine by secreting ions?', 
 
  "options": ["Proximal tubule", "Loop of Henle", "Distal convoluted tubule", "Collecting duct"], 
  correctAnswer: 2, 
  explanation: "Distal convoluted tubule helps maintain acid–base balance by secreting H+ and K+ ions." 
},

{ 
  id: 'Urinary15', 
 "question": 'Which hormone increases water reabsorption in collecting ducts?', 
 
  "options": ["Aldosterone", "ADH", "Renin", "Erythropoietin"], 
  correctAnswer: 1, 
  explanation: "Antidiuretic hormone (ADH) increases permeability of collecting ducts to water." 
},

{ 
  id: 'Urinary16', 
 "question": 'Which part of kidney contains the glomeruli?', 
 
  "options": ["Renal pelvis", "Renal cortex", "Renal medulla", "Ureter"], 
  correctAnswer: 1, 
  explanation: "Glomeruli are present in the renal cortex where ultrafiltration starts." 
},

{ 
  id: 'Urinary17', 
 "question": 'Renal pelvis is directly continuous with?', 
 
  "options": ["Ureter", "Renal vein", "Renal cortex", "Glomerulus"], 
  correctAnswer: 0, 
  explanation: "Renal pelvis collects urine and leads into the ureter." 
},

{ 
  id: 'Urinary18', 
 "question": 'Juxtaglomerular apparatus regulates?', 
 
  "options": ["Blood glucose", "Blood pressure", "Urine pH", "Urea synthesis"], 
  correctAnswer: 1, 
  explanation: "Juxtaglomerular apparatus releases renin to regulate blood pressure." 
},

{ 
  id: 'Urinary19', 
 "question": 'Which vessel enters glomerulus?', 
 
  "options": ["Efferent arteriole", "Renal vein", "Afferent arteriole", "Renal artery"], 
  correctAnswer: 2, 
  explanation: "Afferent arteriole brings blood into glomerulus for filtration." 
},

{ 
  id: 'Urinary20', 
 "question": 'Which structure exits the glomerulus?', 
 
  "options": ["Renal vein", "Afferent arteriole", "Efferent arteriole", "Loop of Henle"], 
  correctAnswer: 2, 
  explanation: "Efferent arteriole carries blood away from glomerulus to peritubular capillaries." 
},

{ 
  id: 'Urinary21', 
 "question": 'Renal cortex appears granular because of?', 
 
  "options": ["Renal pyramids", "Nephrons and glomeruli", "Renal pelvis", "Calyces"], 
  correctAnswer: 1, 
  explanation: "Renal cortex appears granular due to presence of glomeruli and convoluted tubules." 
},

{ 
  id: 'Urinary22', 
 "question": 'Which structure is longest: male or female urethra?', 
  "options": ["Male urethra", "Female urethra", "Both equal", "Depends on age"], 
  correctAnswer: 0, 
  explanation: "Male urethra is longer (~20 cm) than female urethra (~4 cm)." 
},
{ 
  id: 'Urinary23', 
 "question": 'What prevents backflow of urine from bladder to ureter?', 
  "options": ["Sphincter muscles", "Valves at ureteric opening", "Renal pelvis", "Mucosal folds"], 
  correctAnswer: 1, 
  explanation: "Valves at the ureter-bladder junction prevent backflow of urine." 
},
{ 
  id: 'Urinary24', 
  "question": 'Which ion is actively reabsorbed in ascending limb of loop of Henle?', 
  
  "options": ["Sodium", "Potassium", "Calcium", "Chloride"], 
  correctAnswer: 0, 
  explanation: "Ascending limb actively reabsorbs sodium ions but is impermeable to water." 
},

{ 
  id: 'Urinary25', 
  "question": "Urinary bladder wall is made up of which muscle type?", 
  
  "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Mixed muscle"], 
  correctAnswer: 1, 
  explanation: "Urinary bladder wall has smooth muscle (detrusor muscle) for involuntary control." 
},
{
  id: 'Urinary26',
  question: "Which part of nephron plays the major role in regulating potassium levels?",
  options: ["Loop of Henle", "Distal convoluted tubule", "Bowman’s capsule", "Proximal tubule"],
  correctAnswer: 1,
  explanation: "Distal convoluted tubule actively regulates potassium, sodium, and calcium ions."
},
{
  id: 'Urinary27',
  question: "Which structure drains urine from collecting ducts?",
  options: ["Renal pelvis", "Ureter", "Calyx", "Loop of Henle"],
  correctAnswer: 2,
  explanation: "Minor calyces receive urine from collecting ducts and transport it to renal pelvis."
},
{
  id: 'Urinary28',
  question: "The outer layer of the kidney is called:",
  options: ["Medulla", "Cortex", "Pelvis", "Capsule"],
  correctAnswer: 3,
  explanation: "Kidney is covered by a fibrous capsule providing protection."
},
{
  id: 'Urinary29',
  question: "The inner pyramidal region of kidney is known as:",
  options: ["Cortex", "Medulla", "Capsule", "Renal pelvis"],
  correctAnswer: 1,
  explanation: "Renal medulla contains pyramids with loops of Henle and collecting ducts."
},
{
  id: 'Urinary30',
  question: "Renal pelvis directly continues as:",
  options: ["Renal artery", "Ureter", "Calyx", "Renal vein"],
  correctAnswer: 1,
  explanation: "Renal pelvis collects urine and continues as ureter."
},
{
  id: 'Urinary31',
  question: "Which capillaries surround the nephron tubules?",
  options: ["Vasa recta", "Peritubular capillaries", "Glomerulus", "Pulmonary capillaries"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries surround nephron tubules for exchange of substances."
},
{
  id: 'Urinary32',
  question: "Which of these substances is normally absent in urine?",
  options: ["Urea", "Glucose", "Water", "Ions"],
  correctAnswer: 1,
  explanation: "Glucose is completely reabsorbed under normal conditions."
},
{
  id: 'Urinary33',
  question: "Which hormone increases sodium reabsorption in distal tubules?",
  options: ["ADH", "Aldosterone", "Insulin", "Cortisol"],
  correctAnswer: 1,
  explanation: "Aldosterone promotes sodium reabsorption and potassium excretion."
},
{
  id: 'Urinary34',
  question: "The glomerular filtration barrier consists of:",
  options: ["Podocytes, basement membrane, endothelium", "Cortex, medulla, pelvis", "Artery, vein, ureter", "Nephron, ureter, bladder"],
  correctAnswer: 0,
  explanation: "Filtration occurs through fenestrated endothelium, basement membrane, and podocytes."
},
{
  id: 'Urinary35',
  question: "Which nitrogenous waste is most abundant in urine?",
  options: ["Urea", "Uric acid", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Urea is the main nitrogenous waste excreted in human urine."
},
{
  id: 'Urinary36',
  question: "The renal medulla is organized into structures called:",
  options: ["Pyramids", "Capsules", "Columns", "Calyces"],
  correctAnswer: 0,
  explanation: "Renal pyramids are cone-shaped structures of the medulla."
},
{
  id: 'Urinary37',
  question: "Which structure prevents backflow of urine from bladder to ureters?",
  options: ["Renal pelvis", "Sphincter muscles", "Ureteral openings", "Papilla"],
  correctAnswer: 2,
  explanation: "Ureteral openings have valves that prevent urine reflux."
},
{
  id: 'Urinary38',
  question: "The narrow end of renal pyramid that opens into minor calyx is:",
  options: ["Papilla", "Hilum", "Pelvis", "Cortex"],
  correctAnswer: 0,
  explanation: "Renal papilla projects into minor calyx for urine drainage."
},
{
  id: 'Urinary39',
  question: "The site of ultrafiltration in the kidney is:",
  options: ["Proximal tubule", "Loop of Henle", "Glomerulus", "Collecting duct"],
  correctAnswer: 2,
  explanation: "Ultrafiltration occurs in glomerulus within Bowman’s capsule."
},
{
  id: 'Urinary40',
  question: "The urethral sphincter under voluntary control is:",
  options: ["Internal sphincter", "External sphincter", "Both sphincters", "None"],
  correctAnswer: 1,
  explanation: "External urethral sphincter is skeletal muscle under voluntary control."
},
{
  id: 'Urinary41',
  question: "Creatinine in urine is a by-product of:",
  options: ["Fat metabolism", "Protein metabolism", "Muscle metabolism", "Carbohydrate metabolism"],
  correctAnswer: 2,
  explanation: "Creatinine is produced from breakdown of creatine phosphate in muscles."
},
{
  id: 'Urinary42',
  question: "The hilum of kidney gives passage to:",
  options: ["Renal artery, vein, ureter", "Only renal vein", "Only renal artery", "Only ureter"],
  correctAnswer: 0,
  explanation: "Hilum allows entry/exit of renal artery, vein, and ureter."
},
{
  id: 'Urinary43',
  question: "The main nitrogenous waste in humans is:",
  options: ["Ammonia", "Uric acid", "Urea", "Creatinine"],
  correctAnswer: 2,
  explanation: "Humans excrete urea as the major nitrogenous waste."
},
{
  id: 'Urinary44',
  question: "The process of emptying urinary bladder is called:",
  options: ["Micturition", "Defecation", "Filtration", "Secretion"],
  correctAnswer: 0,
  explanation: "Micturition refers to urination, controlled by reflex and voluntary action."
},
{
  id: 'Urinary45',
  question: "The portion of nephron responsible for counter-current mechanism is:",
  options: ["Proximal tubule", "Loop of Henle", "Bowman’s capsule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Loop of Henle establishes counter-current mechanism for urine concentration."
},
{
  id: 'Urinary46',
  question: "Which of the following is a function of kidneys?",
  options: ["Regulation of blood pH", "Regulation of blood volume", "Excretion of wastes", "All of these"],
  correctAnswer: 3,
  explanation: "Kidneys regulate pH, volume, electrolytes, and excrete wastes."
},
{
  id: 'Urinary47',
  question: "Which hormone is secreted by kidney for red blood cell production?",
  options: ["Renin", "Erythropoietin", "ADH", "Aldosterone"],
  correctAnswer: 1,
  explanation: "Erythropoietin stimulates bone marrow to produce RBCs."
},
{
  id: 'Urinary48',
  question: "Renin released from kidneys plays a role in:",
  options: ["Glucose metabolism", "Blood pressure regulation", "Urea excretion", "Water digestion"],
  correctAnswer: 1,
  explanation: "Renin activates RAAS pathway to regulate blood pressure."
},
{
  id: 'Urinary49',
  question: "The pH of normal urine is usually:",
  options: ["Acidic (around 6)", "Neutral (7)", "Strongly alkaline (8–9)", "Variable 10–12"],
  correctAnswer: 0,
  explanation: "Normal urine is slightly acidic with pH ~6."
},
{
  id: 'Urinary50',
  question: "Which structure collects urine from renal pyramids?",
  options: ["Calyx", "Pelvis", "Ureter", "Capsule"],
  correctAnswer: 0,
  explanation: "Minor calyces collect urine from pyramids and pass it to major calyces."
},
{
  id: 'Urinary51',
  question: "Which organ excretes the majority of metabolic wastes?",
  options: ["Liver", "Kidneys", "Skin", "Lungs"],
  correctAnswer: 1,
  explanation: "Kidneys are the major excretory organs removing urea and other wastes."
},
{
  id: 'Urinary52',
  question: "Which type of epithelium lines the urinary bladder?",
  options: ["Simple squamous", "Simple columnar", "Transitional", "Cuboidal"],
  correctAnswer: 2,
  explanation: "Bladder is lined with transitional epithelium allowing expansion."
},
{
  id: 'Urinary53',
  question: "The blood vessel leaving the glomerulus is:",
  options: ["Afferent arteriole", "Efferent arteriole", "Renal vein", "Vasa recta"],
  correctAnswer: 1,
  explanation: "Efferent arteriole carries blood away from the glomerulus."
},
{
  id: 'Urinary54',
  question: "The glomerular filtrate is similar to plasma except it lacks:",
  options: ["Water", "Glucose", "Proteins", "Ions"],
  correctAnswer: 2,
  explanation: "Proteins and blood cells are absent in glomerular filtrate."
},
{
  id: 'Urinary55',
  question: "Which vitamin is activated by kidneys?",
  options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
  correctAnswer: 1,
  explanation: "Kidneys convert Vitamin D into its active form (calcitriol)."
},
{
  id: 'Urinary56',
  question: "Renal columns are extensions of:",
  options: ["Medulla into cortex", "Cortex into medulla", "Pelvis into ureter", "Capsule into pelvis"],
  correctAnswer: 1,
  explanation: "Renal columns are cortical tissue extending between pyramids."
},
{
  id: 'Urinary57',
  question: "Which part of nephron is impermeable to water?",
  options: ["Descending limb of Loop of Henle", "Ascending limb of Loop of Henle", "Proximal tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Ascending limb of Loop of Henle is impermeable to water."
},
{
  id: 'Urinary58',
  question: "The hormone renin is secreted by:",
  options: ["Juxtaglomerular cells", "Podocytes", "Macula densa", "Collecting duct"],
  correctAnswer: 0,
  explanation: "Juxtaglomerular cells of afferent arteriole secrete renin."
},
{
  id: 'Urinary59',
  question: "Which part of nephron contains podocytes?",
  options: ["Bowman's capsule", "Loop of Henle", "Collecting duct", "Distal tubule"],
  correctAnswer: 0,
  explanation: "Podocytes form visceral layer of Bowman’s capsule aiding filtration."
},
{
  id: 'Urinary60',
  question: "Which muscle contracts during urination?",
  options: ["Detrusor muscle", "Diaphragm", "Intercostal muscles", "Psoas muscle"],
  correctAnswer: 0,
  explanation: "Detrusor smooth muscle contracts to expel urine from bladder."
},
{
  id: 'Urinary61',
  question: "The average daily urine output in a healthy adult is:",
  options: ["200–400 mL", "500–800 mL", "1–2 liters", "3–4 liters"],
  correctAnswer: 2,
  explanation: "A normal adult produces about 1–2 liters of urine per day."
},
{
  id: 'Urinary62',
  question: "Which nephron type has loops of Henle extending deep into medulla?",
  options: ["Cortical nephron", "Juxtamedullary nephron", "Mixed nephron", "None"],
  correctAnswer: 1,
  explanation: "Juxtamedullary nephrons have long loops of Henle for concentrated urine."
},
{
  id: 'Urinary63',
  question: "Which ions are reabsorbed in exchange for potassium in distal tubule?",
  options: ["Chloride", "Calcium", "Sodium", "Magnesium"],
  correctAnswer: 2,
  explanation: "Sodium reabsorption occurs in exchange for potassium secretion."
},
{
  id: 'Urinary64',
  question: "Normal urine does NOT contain:",
  options: ["Urea", "Creatinine", "Glucose", "Salts"],
  correctAnswer: 2,
  explanation: "Glucose is normally absent; its presence indicates diabetes."
},
{
  id: 'Urinary65',
  question: "The structural and functional unit of kidney is:",
  options: ["Neuron", "Nephron", "Neurilemma", "Lobule"],
  correctAnswer: 1,
  explanation: "Nephron is the unit where filtration, reabsorption, and secretion occur."
},
{
  id: 'Urinary66',
  question: "The juxtaglomerular apparatus regulates:",
  options: ["Urine color", "Blood pressure", "Urine volume", "Bladder capacity"],
  correctAnswer: 1,
  explanation: "Juxtaglomerular apparatus controls blood pressure via renin secretion."
},
{
  id: 'Urinary67',
  question: "Which vessel has the smallest diameter in nephron blood supply?",
  options: ["Renal vein", "Efferent arteriole", "Afferent arteriole", "Vasa recta"],
  correctAnswer: 1,
  explanation: "Efferent arteriole is narrower, creating pressure for filtration."
},
{
  id: 'Urinary68',
  question: "In which part of nephron does maximum water reabsorption occur?",
  options: ["Loop of Henle", "Proximal convoluted tubule", "Distal convoluted tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Proximal tubule reabsorbs about 65% of filtered water."
},
{
  id: 'Urinary69',
  question: "Urinary bladder capacity in adults is approximately:",
  options: ["50 mL", "150 mL", "500 mL", "2000 mL"],
  correctAnswer: 2,
  explanation: "The bladder can hold about 400–600 mL comfortably."
},
{
  id: 'Urinary70',
  question: "Which nitrogenous waste is least soluble in water?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Uric acid is poorly soluble and can form kidney stones."
},
{
  id: 'Urinary71',
  question: "Which structure regulates blood flow into glomerulus?",
  options: ["Renal vein", "Renal artery", "Afferent arteriole", "Ureter"],
  correctAnswer: 2,
  explanation: "Afferent arteriole regulates blood flow into glomerulus."
},
{
  id: 'Urinary72',
  question: "The longest portion of nephron is:",
  options: ["Bowman’s capsule", "Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule"],
  correctAnswer: 1,
  explanation: "Proximal tubule is the longest segment where most reabsorption occurs."
},
{
  id: 'Urinary73',
  question: "The renal cortex mainly contains:",
  options: ["Glomeruli and convoluted tubules", "Loops of Henle", "Collecting ducts", "Renal pyramids"],
  correctAnswer: 0,
  explanation: "Glomeruli and convoluted tubules are located in the cortex."
},
{
  id: 'Urinary74',
  question: "Renal medulla mainly contains:",
  options: ["Glomeruli", "Bowman’s capsule", "Loops of Henle and collecting ducts", "Ureters"],
  correctAnswer: 2,
  explanation: "Medulla contains loops of Henle and collecting ducts forming pyramids."
},
{
  id: 'Urinary75',
  question: "Which pressure favors filtration in glomerulus?",
  options: ["Capsular hydrostatic pressure", "Blood colloid osmotic pressure", "Glomerular blood hydrostatic pressure", "All of these"],
  correctAnswer: 2,
  explanation: "Glomerular blood hydrostatic pressure drives filtration."
},
{
  id: 'Urinary76',
  question: "The final adjustment of water balance occurs in:",
  options: ["Proximal tubule", "Loop of Henle", "Distal tubule and collecting duct", "Glomerulus"],
  correctAnswer: 2,
  explanation: "Distal tubule and collecting duct adjust water balance under ADH."
},
{
  id: 'Urinary77',
  question: "Which structure of nephron is closely related to blood pressure control?",
  options: ["Bowman’s capsule", "Juxtaglomerular apparatus", "Loop of Henle", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Juxtaglomerular apparatus secretes renin to regulate blood pressure."
},
{
  id: 'Urinary78',
  question: "Which part of nephron is mainly involved in acid–base balance?",
  options: ["Loop of Henle", "Distal tubule", "Collecting duct", "Glomerulus"],
  correctAnswer: 1,
  explanation: "Distal tubule regulates acid–base balance by secreting hydrogen ions."
},
{
  id: 'Urinary79',
  question: "The hormone ADH is released by:",
  options: ["Pituitary gland", "Kidneys", "Adrenal gland", "Pancreas"],
  correctAnswer: 0,
  explanation: "ADH is released by posterior pituitary and acts on kidneys."
},
{
  id: 'Urinary80',
  question: "Which muscle surrounds the urethra at bladder outlet?",
  options: ["Diaphragm", "Internal urethral sphincter", "External oblique", "Detrusor"],
  correctAnswer: 1,
  explanation: "Internal sphincter surrounds bladder outlet for involuntary control."
},
{
  id: 'Urinary81',
  question: "Which ion reabsorption is linked to water balance in nephron?",
  options: ["Sodium", "Calcium", "Potassium", "Magnesium"],
  correctAnswer: 0,
  explanation: "Sodium reabsorption drives water reabsorption by osmosis."
},
{
  id: 'Urinary82',
  question: "The collecting ducts merge and open into:",
  options: ["Minor calyces", "Renal pelvis", "Ureters", "Cortex"],
  correctAnswer: 0,
  explanation: "Collecting ducts drain into minor calyces via renal papilla."
},
{
  id: 'Urinary83',
  question: "Which factor reduces glomerular filtration rate?",
  options: ["Constriction of efferent arteriole", "Dilation of afferent arteriole", "Constriction of afferent arteriole", "Increased blood pressure"],
  correctAnswer: 2,
  explanation: "Constriction of afferent arteriole reduces blood flow and GFR."
},
{
  id: 'Urinary84',
  question: "Which waste product results from nucleic acid metabolism?",
  options: ["Urea", "Creatinine", "Uric acid", "Ammonia"],
  correctAnswer: 2,
  explanation: "Uric acid is produced from breakdown of nucleic acids."
},
{
  id: 'Urinary85',
  question: "Renal threshold for glucose is approximately:",
  options: ["100 mg/dL", "180 mg/dL", "250 mg/dL", "300 mg/dL"],
  correctAnswer: 1,
  explanation: "Glucose appears in urine if plasma glucose exceeds ~180 mg/dL."
},
{
  id: 'Urinary86',
  question: "Which structure directly drains into renal pelvis?",
  options: ["Collecting ducts", "Major calyces", "Minor calyces", "Ureters"],
  correctAnswer: 1,
  explanation: "Major calyces drain into renal pelvis before urine enters ureter."
},
{
  id: 'Urinary87',
  question: "Normal urine mainly consists of:",
  options: ["Urea, salts, water", "Only water", "Only proteins", "Only glucose"],
  correctAnswer: 0,
  explanation: "Urine mainly contains water (~95%), salts, and urea."
},
{
  id: 'Urinary88',
  question: "The renal artery arises from:",
  options: ["Aorta", "Renal vein", "Hepatic artery", "Vena cava"],
  correctAnswer: 0,
  explanation: "Renal arteries branch directly from abdominal aorta."
},
{
  id: 'Urinary89',
  question: "Which structure in nephron is most responsible for selective reabsorption?",
  options: ["Proximal tubule", "Glomerulus", "Ureter", "Urethra"],
  correctAnswer: 0,
  explanation: "Proximal tubule reabsorbs glucose, amino acids, ions, and water selectively."
},
{
  id: 'Urinary90',
  question: "The medullary rays in kidney consist of:",
  options: ["Glomeruli", "Straight tubules and collecting ducts", "Calyces", "Arteries"],
  correctAnswer: 1,
  explanation: "Medullary rays contain straight tubules and collecting ducts extending into cortex."
},
{
  id: 'Urinary91',
  question: "Which organ excretes excess water and salts through sweat?",
  options: ["Liver", "Kidney", "Skin", "Lungs"],
  correctAnswer: 2,
  explanation: "Skin excretes water and salts via sweat glands."
},
{
  id: 'Urinary92',
  question: "Which condition occurs when kidneys fail to excrete wastes?",
  options: ["Anemia", "Uremia", "Leukemia", "Edema"],
  correctAnswer: 1,
  explanation: "Uremia is accumulation of nitrogenous wastes in blood due to kidney failure."
},
{
  id: 'Urinary93',
  question: "The presence of albumin in urine indicates:",
  options: ["Normal kidney function", "Kidney damage", "Diabetes insipidus", "Low blood pressure"],
  correctAnswer: 1,
  explanation: "Albuminuria indicates damage to glomerular filtration barrier."
},
{
  id: 'Urinary94',
  question: "The functional role of vasa recta is:",
  options: ["Urine storage", "Counter-current exchange", "Blood filtration", "Hormone secretion"],
  correctAnswer: 1,
  explanation: "Vasa recta maintain osmotic gradient in medulla by counter-current exchange."
},
{
  id: 'Urinary95',
  question: "The urethra length is longer in:",
  options: ["Females", "Males", "Equal in both", "Children only"],
  correctAnswer: 1,
  explanation: "Male urethra is longer (about 20 cm) compared to female urethra (~4 cm)."
},
{
  id: 'Urinary96',
  question: "Which part of nephron is located entirely in cortex?",
  options: ["Bowman’s capsule", "Loop of Henle", "Collecting ducts", "Vasa recta"],
  correctAnswer: 0,
  explanation: "Bowman’s capsule is present only in renal cortex."
},
{
  id: 'Urinary97',
  question: "What is the main function of urethra?",
  options: ["Filtration of blood", "Carrying urine out of the body", "Absorbing water", "Producing urea"],
  correctAnswer: 1,
  explanation: "Urethra conducts urine from bladder to outside."
},
{
  id: 'Urinary98',
  question: "Which structure detects sodium concentration in distal tubule?",
  options: ["Podocytes", "Macula densa", "Juxtaglomerular cells", "Papilla"],
  correctAnswer: 1,
  explanation: "Macula densa cells sense sodium levels and regulate renin secretion."
},
{
  id: 'Urinary99',
  question: "Which of the following is NOT a function of kidneys?",
  options: ["Regulating blood pH", "Secreting insulin", "Excreting nitrogenous wastes", "Maintaining water balance"],
  correctAnswer: 1,
  explanation: "Kidneys do not secrete insulin; that is the function of pancreas."
},
{
  id: 'Urinary100',
  question: "The opening through which renal artery, vein, and ureter pass is called:",
  options: ["Hilum", "Papilla", "Calyx", "Capsule"],
  correctAnswer: 0,
  explanation: "Hilum is the concave opening for entry/exit of vessels and ureter."
},
{
  id: 'Urinary101',
  question: "Which structure drains urine from the renal papilla into minor calyx?",
  options: ["Renal pelvis", "Collecting duct", "Renal medulla", "Renal cortex"],
  correctAnswer: 1,
  explanation: "The collecting ducts carry urine to the renal papilla, where it passes into the minor calyx."
},
{
  id: 'Urinary102',
  question: "Which type of epithelium lines the urinary bladder?",
  options: ["Simple squamous", "Simple cuboidal", "Transitional epithelium", "Stratified columnar"],
  correctAnswer: 2,
  explanation: "Urinary bladder has transitional epithelium that stretches to accommodate urine volume."
},
{
  id: 'Urinary103',
  question: "What is the main nitrogenous waste excreted in human urine?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Urea is the chief nitrogenous waste in humans, formed in the liver from protein metabolism."
},
{
  id: 'Urinary104',
  question: "Which hormone stimulates sodium reabsorption in distal tubule?",
  options: ["ADH", "Aldosterone", "Insulin", "Glucagon"],
  correctAnswer: 1,
  explanation: "Aldosterone promotes sodium reabsorption and potassium excretion in the distal nephron."
},
{
  id: 'Urinary105',
  question: "Renal corpuscle is made up of:",
  options: ["Glomerulus and Bowman’s capsule", "Loop of Henle and PCT", "DCT and collecting duct", "Renal vein and artery"],
  correctAnswer: 0,
  explanation: "Renal corpuscle consists of glomerulus enclosed in Bowman’s capsule, where ultrafiltration occurs."
},
{
  id: 'Urinary106',
  question: "In humans, how many kidneys are normally present?",
  options: ["One", "Two", "Three", "Four"],
  correctAnswer: 1,
  explanation: "Normally humans have two kidneys, each responsible for blood filtration and urine formation."
},
{
  id: 'Urinary107',
  question: "What is the approximate length of ureter in adults?",
  options: ["5 cm", "15 cm", "25 cm", "50 cm"],
  correctAnswer: 2,
  explanation: "Each ureter is about 25–30 cm long, carrying urine from kidney to bladder."
},
{
  id: 'Urinary108',
  question: "Which part of nephron creates the osmotic gradient essential for urine concentration?",
  options: ["PCT", "Loop of Henle", "DCT", "Bowman’s capsule"],
  correctAnswer: 1,
  explanation: "Loop of Henle generates osmotic gradient in medulla, crucial for water reabsorption."
},
{
  id: 'Urinary109',
  question: "Which vessel directly drains into the glomerulus?",
  options: ["Renal artery", "Afferent arteriole", "Efferent arteriole", "Renal vein"],
  correctAnswer: 1,
  explanation: "Afferent arteriole delivers blood into glomerulus for filtration."
},
{
  id: 'Urinary110',
  question: "Which structure connects the bladder to the external environment?",
  options: ["Ureter", "Urethra", "Collecting duct", "Minor calyx"],
  correctAnswer: 1,
  explanation: "Urethra conducts urine from bladder to outside during micturition."
},
{
  id: 'Urinary111',
  question: "Which region of kidney contains glomeruli?",
  options: ["Renal cortex", "Renal medulla", "Renal pelvis", "Renal pyramid"],
  correctAnswer: 0,
  explanation: "Glomeruli are located in the renal cortex where ultrafiltration begins."
},
{
  id: 'Urinary112',
  question: "Which structure acts as a funnel for urine flowing to the ureter?",
  options: ["Renal cortex", "Renal pelvis", "Renal pyramid", "Bowman’s capsule"],
  correctAnswer: 1,
  explanation: "Renal pelvis collects urine from calyces and channels it into the ureter."
},
{
  id: 'Urinary113',
  question: "The capillaries surrounding the loop of Henle are called:",
  options: ["Vasa recta", "Peritubular capillaries", "Efferent arteriole", "Glomerulus"],
  correctAnswer: 0,
  explanation: "Vasa recta are specialized capillaries that maintain medullary osmotic gradient."
},
{
  id: 'Urinary114',
  question: "What prevents backflow of urine from bladder into ureters?",
  options: ["Renal pelvis", "Ureteral sphincter", "Valve-like folds", "Loop of Henle"],
  correctAnswer: 2,
  explanation: "Valve-like folds at the ureter-bladder junction prevent backflow of urine."
},
{
  id: 'Urinary115',
  question: "The urethra in females is approximately:",
  options: ["2 cm", "4 cm", "20 cm", "30 cm"],
  correctAnswer: 1,
  explanation: "Female urethra is about 4 cm long, while male urethra is much longer."
},
{
  id: 'Urinary116',
  question: "Which blood vessel carries blood away from the glomerulus?",
  options: ["Afferent arteriole", "Renal vein", "Efferent arteriole", "Vasa recta"],
  correctAnswer: 2,
  explanation: "Efferent arteriole drains blood from glomerulus to peritubular capillaries or vasa recta."
},
{
  id: 'Urinary117',
  question: "Which ion is actively secreted into the urine by distal convoluted tubule?",
  options: ["Na+", "K+", "Cl–", "Ca2+"],
  correctAnswer: 1,
  explanation: "Potassium ions are secreted into urine by the distal convoluted tubule."
},
{
  id: 'Urinary118',
  question: "Renin is secreted by:",
  options: ["Liver", "Glomerulus", "Juxtaglomerular cells", "Adrenal cortex"],
  correctAnswer: 2,
  explanation: "Juxtaglomerular cells of kidney secrete renin, regulating blood pressure."
},
{
  id: 'Urinary119',
  question: "Which hormone is secreted in response to low oxygen levels and stimulates RBC production?",
  options: ["ADH", "Aldosterone", "Erythropoietin", "Calcitonin"],
  correctAnswer: 2,
  explanation: "Erythropoietin, secreted by kidneys, increases RBC production in bone marrow."
},
{
  id: 'Urinary120',
  question: "Urinary bladder opening into urethra is guarded by:",
  options: ["Internal urethral sphincter", "External urethral sphincter", "Both A and B", "Detrusor muscle"],
  correctAnswer: 2,
  explanation: "Bladder outlet has internal (involuntary) and external (voluntary) sphincters."
},
{
  id: 'Urinary121',
  question: "Renal columns are extensions of:",
  options: ["Renal cortex", "Renal medulla", "Renal pelvis", "Renal capsule"],
  correctAnswer: 0,
  explanation: "Renal columns are inward extensions of the cortex separating medullary pyramids."
},
{
  id: 'Urinary122',
  question: "Which enzyme converts angiotensin I to angiotensin II?",
  options: ["Renin", "ACE", "Pepsin", "Amylase"],
  correctAnswer: 1,
  explanation: "Angiotensin-converting enzyme (ACE) converts angiotensin I into active angiotensin II."
},
{
  id: 'Urinary123',
  question: "What is the main role of angiotensin II?",
  options: ["Dilates blood vessels", "Increases blood pressure", "Decreases aldosterone secretion", "Reduces thirst"],
  correctAnswer: 1,
  explanation: "Angiotensin II is a vasoconstrictor that increases blood pressure and stimulates aldosterone release."
},
{
  id: 'Urinary124',
  question: "Urinary bladder capacity in adults is approximately:",
  options: ["50–100 ml", "300–500 ml", "1 liter", "2 liters"],
  correctAnswer: 1,
  explanation: "The bladder can comfortably store 300–500 ml of urine."
},
{
  id: 'Urinary125',
  question: "The part of kidney where pyramids open into calyces is called:",
  options: ["Renal papilla", "Renal pelvis", "Renal capsule", "Renal cortex"],
  correctAnswer: 0,
  explanation: "Renal papilla are the tips of pyramids that drain into minor calyces."
},
{
  id: 'Urinary126',
  question: "Which capillary bed allows filtration of plasma in the kidney?",
  options: ["Peritubular capillaries", "Glomerulus", "Vasa recta", "Efferent arteriole"],
  correctAnswer: 1,
  explanation: "Glomerulus is a tuft of capillaries specialized for filtration."
},
{
  id: 'Urinary127',
  question: "Which process returns glucose and amino acids back to blood?",
  options: ["Filtration", "Reabsorption", "Secretion", "Excretion"],
  correctAnswer: 1,
  explanation: "Reabsorption in the proximal convoluted tubule recovers essential nutrients."
},
{
  id: 'Urinary128',
  question: "Which vitamin is activated by kidney?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin K"],
  correctAnswer: 2,
  explanation: "Kidneys convert inactive vitamin D into active calcitriol."
},
{
  id: 'Urinary129',
  question: "Which part of nephron is impermeable to water?",
  options: ["Descending loop of Henle", "Ascending loop of Henle", "Proximal tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Ascending loop of Henle is impermeable to water but reabsorbs salts."
},
{
  id: 'Urinary130',
  question: "The triangular area at bladder base with three openings is called:",
  options: ["Papilla", "Hilum", "Trigone", "Pelvis"],
  correctAnswer: 2,
  explanation: "Trigone is a smooth triangular region formed by two ureteric and one urethral opening."
},
{
  id: 'Urinary131',
  question: "What type of capillaries are present in glomerulus?",
  options: ["Continuous", "Fenestrated", "Sinusoidal", "Closed"],
  correctAnswer: 1,
  explanation: "Glomerular capillaries are fenestrated, allowing filtration of plasma solutes."
},
{
  id: 'Urinary132',
  question: "Which urinary structure is shortest in females compared to males?",
  options: ["Ureter", "Urethra", "Bladder", "Renal pelvis"],
  correctAnswer: 1,
  explanation: "Female urethra is short (about 4 cm) compared to male urethra (20 cm)."
},
{
  id: 'Urinary133',
  question: "Main nitrogenous waste in birds and reptiles is:",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Birds and reptiles excrete uric acid as a paste to conserve water."
},
{
  id: 'Urinary134',
  question: "Which pressure drives filtration in the glomerulus?",
  options: ["Osmotic pressure", "Hydrostatic pressure", "Oncotic pressure", "Atmospheric pressure"],
  correctAnswer: 1,
  explanation: "Glomerular hydrostatic pressure forces plasma into Bowman’s capsule."
},
{
  id: 'Urinary135',
  question: "Which structure connects minor calyces to ureter?",
  options: ["Renal cortex", "Renal pelvis", "Renal pyramid", "Renal capsule"],
  correctAnswer: 1,
  explanation: "Renal pelvis collects urine from calyces and drains into ureter."
},
{
  id: 'Urinary136',
  question: "Which urinary organ has voluntary control?",
  options: ["Kidney", "Bladder", "Ureter", "Urethra (external sphincter)"],
  correctAnswer: 3,
  explanation: "External urethral sphincter provides voluntary control of urination."
},
{
  id: 'Urinary137',
  question: "In which part of nephron does maximum water reabsorption occur?",
  options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"],
  correctAnswer: 0,
  explanation: "Proximal tubule reabsorbs about 65% of filtered water."
},
{
  id: 'Urinary138',
  question: "Creatinine in urine is a result of breakdown of:",
  options: ["Proteins", "Nucleic acids", "Muscle creatine phosphate", "Lipids"],
  correctAnswer: 2,
  explanation: "Creatinine is produced from creatine phosphate metabolism in muscles."
},
{
  id: 'Urinary139',
  question: "Which organ is directly anterior to kidneys?",
  options: ["Liver and stomach", "Heart and lungs", "Brain and spinal cord", "Pancreas and spleen"],
  correctAnswer: 0,
  explanation: "The liver lies in front of the right kidney, and stomach/spleen in front of the left."
},
{
  id: 'Urinary140',
  question: "Which nephron type has long loops of Henle extending deep into medulla?",
  options: ["Cortical nephron", "Juxtamedullary nephron", "Mixed nephron", "Subcortical nephron"],
  correctAnswer: 1,
  explanation: "Juxtamedullary nephrons have long loops essential for concentrating urine."
},
{
  id: 'Urinary141',
  question: "Which structure surrounds the kidney externally?",
  options: ["Renal capsule", "Renal cortex", "Renal pelvis", "Renal sinus"],
  correctAnswer: 0,
  explanation: "Renal capsule is a fibrous covering protecting the kidney."
},
{
  id: 'Urinary142',
  question: "Urinary bladder muscle responsible for contraction during urination is:",
  options: ["Trigone muscle", "Detrusor muscle", "Pelvic diaphragm", "External sphincter"],
  correctAnswer: 1,
  explanation: "Detrusor smooth muscle contracts to expel urine during micturition."
},
{
  id: 'Urinary143',
  question: "Which blood vessel carries filtered blood to the inferior vena cava?",
  options: ["Renal vein", "Renal artery", "Efferent arteriole", "Vasa recta"],
  correctAnswer: 0,
  explanation: "Renal vein drains filtered blood into the inferior vena cava."
},
{
  id: 'Urinary144',
  question: "What is the approximate weight of each adult kidney?",
  options: ["20 g", "50 g", "150 g", "500 g"],
  correctAnswer: 2,
  explanation: "Each kidney weighs about 150 g in adults."
},
{
  id: 'Urinary145',
  question: "Which urinary structure is longer in males than females?",
  options: ["Ureter", "Urethra", "Bladder", "Renal pelvis"],
  correctAnswer: 1,
  explanation: "Male urethra is much longer (20 cm) compared to female urethra (4 cm)."
},
{
  id: 'Urinary146',
  question: "Which hormone increases calcium reabsorption in kidneys?",
  options: ["Parathyroid hormone", "Aldosterone", "ADH", "Insulin"],
  correctAnswer: 0,
  explanation: "Parathyroid hormone enhances calcium reabsorption in distal tubule."
},
{
  id: 'Urinary147',
  question: "In which structure does counter-current multiplication occur?",
  options: ["Glomerulus", "Loop of Henle", "Proximal tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Loop of Henle establishes counter-current mechanism for urine concentration."
},
{
  id: 'Urinary148',
  question: "Which ion mainly determines the osmolarity of extracellular fluid regulated by kidney?",
  options: ["Potassium", "Sodium", "Calcium", "Chloride"],
  correctAnswer: 1,
  explanation: "Sodium concentration is the major determinant of extracellular osmolarity."
},
{
  id: 'Urinary149',
  question: "The hilum of kidney allows passage of:",
  options: ["Renal artery, vein and ureter", "Only renal vein", "Only renal artery", "Only ureter"],
  correctAnswer: 0,
  explanation: "The hilum is the entry/exit site for renal artery, renal vein, and ureter."
},
{
  id: 'Urinary150',
  question: "Which hormone deficiency causes diabetes insipidus with dilute urine?",
  options: ["Aldosterone", "ADH", "Renin", "Erythropoietin"],
  correctAnswer: 1,
  explanation: "ADH deficiency leads to diabetes insipidus with excessive dilute urine."
},


 ]
