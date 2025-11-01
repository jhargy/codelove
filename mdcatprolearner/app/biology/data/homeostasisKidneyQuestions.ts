
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
 export const homeostasisKidneyQuestions: Question[] = [
 {
  id: 'kidney-1',
  question: "What is the main driving force for glomerular filtration?",
  options: ["Osmotic pressure of plasma proteins", "Hydrostatic pressure in glomerular capillaries", "Peritubular capillary pressure", "Bowman’s capsule secretion"],
  correctAnswer: 1,
  explanation: "Glomerular filtration is mainly driven by hydrostatic pressure in glomerular capillaries."
},
{
  id: 'kidney-2',
  question: "Which structure acts as the filtration barrier in kidneys?",
  options: ["Podocytes", "Proximal tubule cells", "Loop of Henle cells", "Collecting duct lining"],
  correctAnswer: 0,
  explanation: "Podocytes form part of the filtration barrier along with basement membrane and endothelium."
},
{
  id: 'kidney-3',
  question: "Which molecules are normally not filtered through the glomerulus?",
  options: ["Glucose", "Water", "Plasma proteins", "Urea"],
  correctAnswer: 2,
  explanation: "Large plasma proteins and blood cells are not filtered due to size and charge."
},
{
  id: 'kidney-4',
  question: "Selective reabsorption primarily occurs in which part of nephron?",
  options: ["Proximal convoluted tubule", "Distal convoluted tubule", "Loop of Henle", "Collecting duct"],
  correctAnswer: 0,
  explanation: "Most water, glucose, amino acids, and ions are reabsorbed in the proximal convoluted tubule."
},
{
  id: 'kidney-5',
  question: "Which substance is completely reabsorbed under normal conditions?",
  options: ["Glucose", "Urea", "Creatinine", "Ammonia"],
  correctAnswer: 0,
  explanation: "Glucose is completely reabsorbed in proximal tubule unless renal threshold is exceeded."
},
{
  id: 'kidney-6',
  question: "Tubular secretion is important for removal of?",
  options: ["Glucose", "Amino acids", "Drugs and H+ ions", "Na+ ions"],
  correctAnswer: 2,
  explanation: "Tubular secretion helps eliminate drugs, toxins, and maintain pH by secreting H+ ions."
},
{
  id: 'kidney-7',
  question: "Which ion is secreted into the tubular fluid to regulate blood pH?",
  options: ["Sodium", "Potassium", "Hydrogen", "Calcium"],
  correctAnswer: 2,
  explanation: "Hydrogen ions are secreted in distal tubule and collecting duct for acid-base balance."
},
{
  id: 'kidney-8',
  question: "What is the normal glomerular filtration rate (GFR) in adults?",
  options: ["25 ml/min", "125 ml/min", "250 ml/min", "500 ml/min"],
  correctAnswer: 1,
  explanation: "Normal GFR in healthy adults is about 125 ml/min."
},
{
  id: 'kidney-9',
  question: "Which pressure opposes glomerular filtration?",
  options: ["Bowman’s capsule hydrostatic pressure", "Glomerular capillary hydrostatic pressure", "Arterial blood pressure", "Efferent arteriole resistance"],
  correctAnswer: 0,
  explanation: "Hydrostatic pressure in Bowman’s capsule resists the filtration process."
},
{
  id: 'kidney-10',
  question: "In selective reabsorption, most Na+ ions are reabsorbed with?",
  options: ["Glucose", "Urea", "Creatinine", "Proteins"],
  correctAnswer: 0,
  explanation: "Sodium ions are actively reabsorbed with glucose and amino acids in proximal tubule."
},
{
  id: 'kidney-11',
  question: "Which hormone increases water reabsorption in collecting ducts?",
  options: ["Aldosterone", "Insulin", "ADH", "Cortisol"],
  correctAnswer: 2,
  explanation: "Antidiuretic hormone (ADH) makes collecting ducts permeable to water, increasing reabsorption."
},
{
  id: 'kidney-12',
  question: "Which part of nephron reabsorbs maximum water?",
  options: ["Distal tubule", "Proximal tubule", "Collecting duct", "Loop of Henle"],
  correctAnswer: 1,
  explanation: "About 65% of filtered water is reabsorbed in proximal convoluted tubule."
},
{
  id: 'kidney-13',
  question: "Tubular secretion of potassium mainly occurs under influence of?",
  options: ["ADH", "Aldosterone", "Insulin", "Glucagon"],
  correctAnswer: 1,
  explanation: "Aldosterone stimulates K+ secretion in distal tubule and collecting duct."
},
{
  id: 'kidney-14',
  question: "Which waste product is neither reabsorbed nor secreted significantly?",
  options: ["Urea", "Glucose", "Creatinine", "Na+"],
  correctAnswer: 2,
  explanation: "Creatinine is filtered but neither reabsorbed nor secreted significantly, so used to estimate GFR."
},
{
  id: 'kidney-15',
  question: "Counter-current mechanism mainly helps in?",
  options: ["Filtration", "Reabsorption of glucose", "Concentration of urine", "Tubular secretion"],
  correctAnswer: 2,
  explanation: "Counter-current mechanism in loop of Henle maintains osmotic gradient for concentrated urine."
},
{
  id: 'kidney-16',
  question: "What happens to glucose if renal threshold is crossed?",
  options: ["Excess is secreted in tubules", "Excess is excreted in urine", "Excess is reabsorbed in loop", "Excess binds to proteins"],
  correctAnswer: 1,
  explanation: "When glucose exceeds renal threshold (~180 mg/dL), it appears in urine (glycosuria)."
},
{
  id: 'kidney-17',
  question: "Selective reabsorption of water in distal nephron is controlled by?",
  options: ["Insulin", "Glucagon", "ADH", "TSH"],
  correctAnswer: 2,
  explanation: "ADH regulates reabsorption of water in distal tubule and collecting duct."
},
{
  id: 'kidney-18',
  question: "Which pressure favors glomerular filtration?",
  options: ["Capsular hydrostatic pressure", "Plasma colloid osmotic pressure", "Glomerular hydrostatic pressure", "Tubular secretion pressure"],
  correctAnswer: 2,
  explanation: "Glomerular hydrostatic pressure favors movement of fluid into Bowman’s capsule."
},
{
  id: 'kidney-19',
  question: "Most amino acids are reabsorbed in?",
  options: ["Loop of Henle", "Proximal tubule", "Distal tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Proximal tubule reabsorbs nearly all amino acids from the filtrate."
},
{
  id: 'kidney-20',
  question: "Which process adds substances from blood into tubular fluid?",
  options: ["Filtration", "Reabsorption", "Secretion", "Excretion"],
  correctAnswer: 2,
  explanation: "Tubular secretion transfers substances like drugs, K+, and H+ from blood into tubular fluid."
},
{
  id: 'kidney-21',
  question: "Which blood vessel enters the glomerulus?",
  options: ["Afferent arteriole", "Efferent arteriole", "Renal vein", "Peritubular capillary"],
  correctAnswer: 0,
  explanation: "The afferent arteriole brings blood into the glomerulus for filtration."
},
{
  id: 'kidney-22',
  question: "Which blood vessel exits the glomerulus?",
  options: ["Afferent arteriole", "Efferent arteriole", "Renal artery", "Vasa recta"],
  correctAnswer: 1,
  explanation: "The efferent arteriole carries blood away from the glomerulus."
},
{
  id: 'kidney-23',
  question: "Which type of epithelium lines the proximal convoluted tubule?",
  options: ["Simple squamous", "Simple cuboidal with microvilli", "Stratified cuboidal", "Transitional"],
  correctAnswer: 1,
  explanation: "Proximal convoluted tubule has simple cuboidal epithelium with brush border to increase absorption."
},
{
  id: 'kidney-24',
  question: "Which ion is most actively reabsorbed in the nephron?",
  options: ["Na+", "K+", "Ca2+", "Cl-"],
  correctAnswer: 0,
  explanation: "Sodium ions are actively reabsorbed and drive reabsorption of other substances."
},
{
  id: 'kidney-25',
  question: "The driving pressure that favors filtration is approximately?",
  options: ["55 mmHg", "25 mmHg", "10 mmHg", "70 mmHg"],
  correctAnswer: 0,
  explanation: "Glomerular hydrostatic pressure is about 55 mmHg, favoring filtration."
},
{
  id: 'kidney-26',
  question: "Where does obligatory water reabsorption occur?",
  options: ["Loop of Henle", "Proximal tubule", "Collecting duct", "Distal tubule"],
  correctAnswer: 1,
  explanation: "Obligatory water reabsorption occurs in proximal tubule along with solutes."
},
{
  id: 'kidney-27',
  question: "Which hormone increases Na+ reabsorption in the nephron?",
  options: ["Aldosterone", "ADH", "Insulin", "Glucagon"],
  correctAnswer: 0,
  explanation: "Aldosterone increases sodium reabsorption in distal tubule and collecting duct."
},
{
  id: 'kidney-28',
  question: "Where is the juxtaglomerular apparatus located?",
  options: ["Between afferent arteriole and distal tubule", "In Bowman’s capsule", "At collecting duct", "In renal pelvis"],
  correctAnswer: 0,
  explanation: "The juxtaglomerular apparatus lies between the afferent arteriole and distal tubule for BP regulation."
},
{
  id: 'kidney-29',
  question: "Which part of nephron establishes medullary osmotic gradient?",
  options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Loop of Henle establishes medullary gradient via countercurrent mechanism."
},
{
  id: 'kidney-30',
  question: "Which nitrogenous waste is primarily secreted into tubules?",
  options: ["Urea", "Ammonia", "Glucose", "Albumin"],
  correctAnswer: 1,
  explanation: "Ammonia is secreted into the tubule to maintain acid-base balance."
},
{
  id: 'kidney-31',
  question: "Filtration membrane in glomerulus consists of?",
  options: ["Endothelium, basement membrane, podocytes", "Endothelium only", "Cuboidal epithelium", "Smooth muscle"],
  correctAnswer: 0,
  explanation: "Filtration barrier has 3 layers: fenestrated endothelium, basement membrane, and podocytes."
},
{
  id: 'kidney-32',
  question: "Tubular secretion occurs mainly in?",
  options: ["Proximal and distal tubules", "Bowman’s capsule", "Glomerulus only", "Loop of Henle"],
  correctAnswer: 0,
  explanation: "Tubular secretion occurs mainly in proximal and distal tubules."
},
{
  id: 'kidney-33',
  question: "Reabsorption of bicarbonate ions helps maintain?",
  options: ["Oxygen transport", "Acid-base balance", "Blood clotting", "Temperature regulation"],
  correctAnswer: 1,
  explanation: "Reabsorption of bicarbonate maintains blood pH (acid-base balance)."
},
{
  id: 'kidney-34',
  question: "Which pressure pulls water back into capillaries?",
  options: ["Plasma colloid osmotic pressure", "Glomerular hydrostatic pressure", "Capsular hydrostatic pressure", "Secretion pressure"],
  correctAnswer: 0,
  explanation: "Plasma proteins create colloid osmotic pressure pulling water back into blood."
},
{
  id: 'kidney-35',
  question: "Which substance is used as a clinical measure of renal plasma flow?",
  options: ["Creatinine", "Inulin", "PAH (para-aminohippuric acid)", "Glucose"],
  correctAnswer: 2,
  explanation: "PAH clearance is used to measure renal plasma flow."
},
{
  id: 'kidney-36',
  question: "Which nephron type has longer loops of Henle?",
  options: ["Cortical nephron", "Juxtamedullary nephron", "Both same length", "None"],
  correctAnswer: 1,
  explanation: "Juxtamedullary nephrons have long loops of Henle for concentrated urine formation."
},
{
  id: 'kidney-37',
  question: "Which process ensures glucose does not appear in urine normally?",
  options: ["Tubular secretion", "Selective reabsorption", "Filtration", "Excretion"],
  correctAnswer: 1,
  explanation: "Glucose is reabsorbed completely in proximal tubule under normal conditions."
},
{
  id: 'kidney-38',
  question: "The renal threshold for glucose is approximately?",
  options: ["90 mg/dl", "120 mg/dl", "180 mg/dl", "250 mg/dl"],
  correctAnswer: 2,
  explanation: "Renal threshold for glucose is about 180 mg/dl."
},
{
  id: 'kidney-39',
  question: "Which part of nephron reabsorbs water without solutes?",
  options: ["Descending limb of loop of Henle", "Ascending limb of loop of Henle", "Distal tubule", "Collecting duct"],
  correctAnswer: 0,
  explanation: "Descending limb is permeable to water but not solutes."
},
{
  id: 'kidney-40',
  question: "Which part of nephron actively transports Na+ but is impermeable to water?",
  options: ["Descending limb", "Ascending limb of loop of Henle", "Proximal tubule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Ascending limb is impermeable to water but actively reabsorbs Na+, K+, Cl-."
},
{
  id: 'kidney-41',
  question: "Increased ADH release results in?",
  options: ["Dilute urine", "Concentrated urine", "No effect on urine", "Proteinuria"],
  correctAnswer: 1,
  explanation: "ADH increases water reabsorption, leading to concentrated urine."
},
{
  id: 'kidney-42',
  question: "Which hormone regulates calcium reabsorption in kidneys?",
  options: ["Aldosterone", "ADH", "Parathyroid hormone", "Insulin"],
  correctAnswer: 2,
  explanation: "Parathyroid hormone increases calcium reabsorption in distal tubule."
},
{
  id: 'kidney-43',
  question: "Which ion is secreted to maintain potassium balance?",
  options: ["Na+", "Cl-", "K+", "Ca2+"],
  correctAnswer: 2,
  explanation: "Potassium is secreted in distal tubule under influence of aldosterone."
},
{
  id: 'kidney-44',
  question: "Filtrate formed per day in kidneys is about?",
  options: ["1 liter", "10 liters", "180 liters", "500 liters"],
  correctAnswer: 2,
  explanation: "About 180 liters of filtrate are formed daily in kidneys."
},
{
  id: 'kidney-45',
  question: "Which cells of juxtaglomerular apparatus secrete renin?",
  options: ["Macula densa cells", "Granular (JG) cells", "Podocytes", "Mesangial cells"],
  correctAnswer: 1,
  explanation: "Granular cells of JGA secrete renin to regulate BP."
},
{
  id: 'kidney-46',
  question: "Which pressure is increased when efferent arteriole constricts?",
  options: ["Capsular hydrostatic pressure", "Glomerular hydrostatic pressure", "Colloid osmotic pressure", "None"],
  correctAnswer: 1,
  explanation: "Constriction of efferent arteriole increases glomerular hydrostatic pressure, enhancing filtration."
},
{
  id: 'kidney-47',
  question: "Which transport mechanism is used for glucose reabsorption?",
  options: ["Simple diffusion", "Facilitated diffusion", "Active transport with Na+", "Osmosis"],
  correctAnswer: 2,
  explanation: "Glucose is reabsorbed by secondary active transport with sodium."
},
{
  id: 'kidney-48',
  question: "Where does secretion of H+ ions mainly occur?",
  options: ["Loop of Henle", "Distal convoluted tubule", "Bowman’s capsule", "Proximal tubule only"],
  correctAnswer: 1,
  explanation: "Secretion of H+ occurs mainly in distal tubule to regulate pH."
},
{
  id: 'kidney-49',
  question: "Which mechanism prevents excessive loss of Na+ in urine?",
  options: ["Tubular secretion", "Selective reabsorption", "Filtration", "Osmosis"],
  correctAnswer: 1,
  explanation: "Selective reabsorption of sodium in proximal and distal tubules prevents its loss."
},
{
  id: 'kidney-50',
  question: "Which part of nephron is impermeable to water in presence of ADH?",
  options: ["Proximal tubule", "Loop of Henle descending limb", "Loop of Henle ascending limb", "Collecting duct"],
  correctAnswer: 2,
  explanation: "Ascending limb is impermeable to water, regardless of ADH."
},
{
  id: 'kidney-51',
  question: "Which solute is secreted in distal nephron for acid-base regulation?",
  options: ["Na+", "K+", "H+", "Cl-"],
  correctAnswer: 2,
  explanation: "Hydrogen ions are secreted in distal nephron for maintaining blood pH."
},
{
  id: 'kidney-52',
  question: "Inulin clearance is a measure of?",
  options: ["Renal blood flow", "Glomerular filtration rate", "Tubular secretion", "Selective reabsorption"],
  correctAnswer: 1,
  explanation: "Inulin clearance is the gold standard for measuring GFR."
},
{
  id: 'kidney-53',
  question: "Which pressure drives water back into peritubular capillaries?",
  options: ["Glomerular hydrostatic pressure", "Plasma oncotic pressure", "Bowman’s pressure", "Secretion pressure"],
  correctAnswer: 1,
  explanation: "Plasma oncotic (colloid osmotic) pressure draws water into capillaries."
},
{
  id: 'kidney-54',
  question: "Which hormone reduces urine volume?",
  options: ["ADH", "Aldosterone", "Both ADH and Aldosterone", "Insulin"],
  correctAnswer: 2,
  explanation: "Both ADH and Aldosterone reduce urine volume by increasing reabsorption."
},
{
  id: 'kidney-55',
  question: "Which solute reabsorption is linked with water in proximal tubule?",
  options: ["Na+", "Proteins", "Creatinine", "Ammonia"],
  correctAnswer: 0,
  explanation: "Water follows sodium ions osmotically in proximal tubule."
},
{
  id: 'kidney-56',
  question: "Which enzyme is secreted by kidney for BP regulation?",
  options: ["Pepsin", "Renin", "Amylase", "Trypsin"],
  correctAnswer: 1,
  explanation: "Renin is secreted by JG cells to regulate blood pressure."
},
{
  id: 'kidney-57',
  question: "Which part of nephron is responsible for fine regulation of ions?",
  options: ["Proximal tubule", "Distal tubule", "Loop of Henle", "Glomerulus"],
  correctAnswer: 1,
  explanation: "Distal tubule finely regulates ions like Na+, K+, and Ca2+ under hormones."
},
{
  id: 'kidney-58',
  question: "Which capillaries surround the loop of Henle?",
  options: ["Peritubular capillaries", "Vasa recta", "Glomerular capillaries", "Venules"],
  correctAnswer: 1,
  explanation: "Vasa recta surrounds loop of Henle, helping in counter-current exchange."
},
{
  id: 'kidney-59',
  question: "Urea is partly reabsorbed in?",
  options: ["Loop of Henle", "Proximal tubule", "Distal tubule", "Bowman’s capsule"],
  correctAnswer: 1,
  explanation: "Urea is partially reabsorbed in proximal tubule but most is excreted."
},
{
  id: 'kidney-60',
  question: "Which pressure must remain higher for filtration to continue?",
  options: ["Colloid osmotic pressure", "Net filtration pressure", "Capsular hydrostatic pressure", "Venous pressure"],
  correctAnswer: 1,
  explanation: "Net filtration pressure must remain positive to continue filtration."
},
{
  id: 'kidney-61',
  question: "Which part of nephron contributes most to reabsorption?",
  options: ["Proximal tubule", "Distal tubule", "Loop of Henle", "Collecting duct"],
  correctAnswer: 0,
  explanation: "Proximal tubule reabsorbs ~65% of filtered water and solutes."
},
{
  id: 'kidney-62',
  question: "Which hormone increases K+ secretion?",
  options: ["ADH", "Aldosterone", "PTH", "Calcitonin"],
  correctAnswer: 1,
  explanation: "Aldosterone stimulates K+ secretion in distal tubule."
},
{
  id: 'kidney-63',
  question: "Filtrate in Bowman’s capsule is free of?",
  options: ["Proteins and cells", "Na+ and glucose", "Water and ions", "Urea"],
  correctAnswer: 0,
  explanation: "Filtrate is free of proteins and blood cells due to filtration barrier."
},
{
  id: 'kidney-64',
  question: "Tubular secretion is essential for excretion of?",
  options: ["Glucose", "Creatinine", "H+ and drugs", "Proteins"],
  correctAnswer: 2,
  explanation: "Tubular secretion eliminates H+, K+, and drugs from blood."
},
{
  id: 'kidney-65',
  question: "Which hormone increases water permeability in collecting ducts?",
  options: ["Insulin", "ADH", "Aldosterone", "PTH"],
  correctAnswer: 1,
  explanation: "ADH increases water permeability in collecting ducts."
},
{
  id: 'kidney-66',
  question: "Which factor reduces GFR?",
  options: ["Increased efferent constriction", "Increased afferent constriction", "High glomerular pressure", "Increased cardiac output"],
  correctAnswer: 1,
  explanation: "Constriction of afferent arteriole reduces GFR."
},
{
  id: 'kidney-67',
  question: "Which solute is handled by counter-current multiplier system?",
  options: ["NaCl", "Glucose", "Proteins", "Bicarbonate"],
  correctAnswer: 0,
  explanation: "NaCl handling in loop of Henle establishes osmotic gradient."
},
{
  id: 'kidney-68',
  question: "Which substance is used as a clinical marker of GFR?",
  options: ["Urea", "Inulin", "Glucose", "Na+"],
  correctAnswer: 1,
  explanation: "Inulin clearance is ideal measure of GFR as it is filtered but not reabsorbed/secreted."
},
{
  id: 'kidney-69',
  question: "Which part of nephron is impermeable to urea?",
  options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"],
  correctAnswer: 2,
  explanation: "Distal tubule is impermeable to urea, so it remains in filtrate."
},
{
  id: 'kidney-70',
  question: "Which ion is essential for secondary active transport of glucose?",
  options: ["K+", "Na+", "Cl-", "Ca2+"],
  correctAnswer: 1,
  explanation: "Na+ gradient provides energy for glucose reabsorption in proximal tubule."
},
  {
    "id": "kidney-71",
    "question": "What are the two primary functions of the kidneys?",
    "options": [
      "Pumping blood and producing hormones",
      "Digesting fats and absorbing nutrients",
      "Excretion and osmoregulation",
      "Producing bile and filtering lymph"
    ],
    "correctAnswer": 2,
    "explanation": "The kidneys have two core functions: 1) Excretion: the removal of nitrogenous wastes (like urea) and other toxins from the blood. 2) Osmoregulation: the maintenance of water and salt balance (electrolyte balance) in the body fluids."
  },
  {
    "id": "kidney-72",
    "question": "The functional unit of the kidney responsible for both excretion and osmoregulation is the:",
    "options": [
      "Neuron",
      "Nephron",
      "Alveolus",
      "Hepatocyte"
    ],
    "correctAnswer": 1,
    "explanation": "The nephron is the microscopic structural and functional unit of the kidney. Each kidney contains about one million nephrons, each capable of forming urine by performing the processes of filtration, reabsorption, and secretion."
  },
  {
    "id": "kidney-73",
    "question": "Which of the following is a nitrogenous waste product excreted by the kidneys?",
    "options": [
      "Glucose",
      "Urea",
      "Amino acids",
      "Sodium ions"
    ],
    "correctAnswer": 1,
    "explanation": "Urea is the main nitrogenous waste product in human urine. It is formed in the liver from the breakdown of amino acids and proteins. Excreting urea is a key excretory function of the kidneys."
  },
  {
    "id": "kidney-74",
    "question": "The process by which water and solutes are forced from the blood in the glomerulus into the Bowman's capsule is called:",
    "options": [
      "Secretion",
      "Reabsorption",
      "Filtration",
      "Excretion"
    ],
    "correctAnswer": 2,
    "explanation": "Glomerular filtration is the first step in urine formation. It is a non-selective, passive process where blood pressure forces water, ions, glucose, amino acids, and waste products out of the glomerular capillaries and into the Bowman's capsule, forming filtrate."
  },
  {
    "id": "kidney-75",
    "question": "Osmoregulation primarily involves the control of:",
    "options": [
      "Body temperature",
      "Blood glucose levels",
      "Water and solute concentrations",
      "Heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Osmoregulation is the homeostatic control of the water and electrolyte (ionic solute) balance in bodily fluids. The kidneys adjust the volume and concentration of urine to maintain this balance, which is crucial for cellular function."
  },
  {
    "id": "kidney-76",
    "question": "The movement of useful substances (like glucose, water, ions) from the filtrate back into the blood is called:",
    "options": [
      "Filtration",
      "Secretion",
      "Reabsorption",
      "Digestion"
    ],
    "correctAnswer": 2,
    "explanation": "Tubular reabsorption is the highly selective process where the nephron reclaims water and essential solutes from the filtrate and returns them to the peritubular capillaries. This prevents the loss of valuable nutrients and helps in osmoregulation."
  },
  {
    "id": "kidney-77",
    "question": "The active movement of substances from the blood into the filtrate is called:",
    "options": [
      "Filtration",
      "Reabsorption",
      "Secretion",
      "Diffusion"
    ],
    "correctAnswer": 2,
    "explanation": "Tubular secretion is the active process of moving substances (such as H+ ions, K+ ions, and certain drugs like penicillin) from the blood in the peritubular capillaries into the filtrate. It is crucial for eliminating unwanted substances and fine-tuning blood pH."
  },
  {
    "id": "kidney-78",
    "question": "The hormone ADH (Antidiuretic Hormone) is directly involved in:",
    "options": [
      "Increasing blood pressure by vasoconstriction",
      "Promoting water reabsorption in the collecting duct",
      "Increasing sodium reabsorption in the distal tubule",
      "Stimulating red blood cell production"
    ],
    "correctAnswer": 1,
    "explanation": "ADH, released by the posterior pituitary, makes the walls of the collecting duct more permeable to water. When ADH is present, more water is reabsorbed from the filtrate back into the blood, producing a small volume of concentrated urine. This is a key mechanism of osmoregulation."
  },
  {
    "id": "kidney-79",
    "question": "If a person consumes a large volume of water, the kidneys will respond by producing:",
    "options": [
      "A small volume of concentrated urine",
      "A large volume of dilute urine",
      "No urine",
      "Urine with high glucose content"
    ],
    "correctAnswer": 1,
    "explanation": "To maintain osmoregulation after high water intake, osmoreceptors detect the diluted blood plasma. This inhibits the release of ADH. Without ADH, the collecting ducts are impermeable to water, so less water is reabsorbed, resulting in the excretion of a large volume of dilute urine."
  },
  {
    "id": "kidney-80",
    "question": "The main driving force for glomerular filtration is:",
    "options": [
      "Osmotic pressure in the glomerulus",
      "Blood pressure in the glomerular capillaries",
      "Active transport in the proximal convoluted tubule",
      "The pumping action of the heart"
    ],
    "correctAnswer": 1,
    "explanation": "Glomerular filtration is driven by hydrostatic pressure from the blood within the glomerulus. This pressure is high because the afferent arteriole is wider than the efferent arteriole, creating a pressure head that forces fluid out of the capillary and into the Bowman's capsule."
  },
  {
    "id": "kidney-81",
    "question": "Which part of the nephron is primarily responsible for the reabsorption of water and nutrients?",
    "options": [
      "Glomerulus",
      "Loop of Henle",
      "Proximal Convoluted Tubule (PCT)",
      "Distal Convoluted Tubule (DCT)"
    ],
    "correctAnswer": 2,
    "explanation": "The Proximal Convoluted Tubule (PCT) is the primary site for the reabsorption of water, ions, and all essential nutrients like glucose and amino acids. About 65-70% of filtrate volume is reabsorbed here, and it is a site of obligatory water reabsorption."
  },
  {
    "id": "kidney-82",
    "question": "The countercurrent multiplier system in the nephron involves the:",
    "options": [
      "Glomerulus and Bowman's capsule",
      "Proximal and distal convoluted tubules",
      "Loop of Henle and vasa recta",
      "Collecting duct and bladder"
    ],
    "correctAnswer": 2,
    "explanation": "The countercurrent multiplier is a system established by the Loop of Henle. Its descending and ascending limbs have different permeabilities, which creates a concentration gradient in the renal medulla. The vasa recta (the blood supply) acts as a countercurrent exchanger to maintain this gradient, which is crucial for concentrating urine."
  },
  {
    "id": "kidney-83",
    "question": "Aldosterone, a hormone from the adrenal cortex, primarily affects the nephron by:",
    "options": [
      "Increasing water reabsorption",
      "Increasing sodium reabsorption and potassium secretion",
      "Decreasing blood pressure",
      "Stimulating glucose reabsorption"
    ],
    "correctAnswer": 1,
    "explanation": "Aldosterone acts on the distal convoluted tubule (DCT) and collecting duct. It stimulates the reabsorption of Na+ ions from the filtrate and the secretion of K+ ions into it. Water follows the sodium osmotically, so aldosterone also indirectly increases water reabsorption and blood volume/pressure."
  },
  {
    "id": "kidney-84",
    "question": "The presence of glucose in the urine (glycosuria) indicates a problem with:",
    "options": [
      "Glomerular filtration",
      "Tubular secretion",
      "Tubular reabsorption",
      "Urine storage"
    ],
    "correctAnswer": 2,
    "explanation": "Normally, all filtered glucose is reabsorbed in the proximal convoluted tubule. Glycosuria occurs when the transport maximum for glucose is exceeded, meaning the reabsorption mechanisms are saturated. This is a classic sign of diabetes mellitus, where high blood glucose levels overwhelm the nephron's reabsorptive capacity."
  },
  {
    "id": "kidney-85",
    "question": "The juxtaglomerular apparatus (JGA) is involved in:",
    "options": [
      "Producing urine",
      "Regulating the glomerular filtration rate (GFR) and blood pressure",
      "Filtering blood cells",
      "Secreting ADH"
    ],
    "correctAnswer": 1,
    "explanation": "The JGA is a specialized region where the distal convoluted tubule touches the afferent arteriole. It contains cells that sense blood pressure and NaCl concentration in the filtrate. It secretes renin, which triggers the Renin-Angiotensin-Aldosterone System (RAAS) to regulate GFR and increase blood pressure."
  },
  {
    "id": "kidney-86",
    "question": "The Renin-Angiotensin-Aldosterone System (RAAS) is activated in response to:",
    "options": [
      "High blood pressure",
      "Low blood pressure or low sodium levels",
      "High blood glucose levels",
      "Low blood oxygen levels"
    ],
    "correctAnswer": 1,
    "explanation": "RAAS is a hormone cascade activated when the juxtaglomerular cells detect low blood pressure (low GFR) or low NaCl concentration. Renin release leads to the production of angiotensin II, which causes vasoconstriction and aldosterone release, ultimately increasing blood volume and pressure."
  },
  {
    "id": "kidney-87",
    "question": "Which substance is NOT typically found in the filtrate of a healthy nephron?",
    "options": [
      "Water",
      "Sodium ions",
      "Urea",
      "Blood cells and proteins"
    ],
    "correctAnswer": 3,
    "explanation": "The glomerular filtration membrane acts as a selective filter based on size. While water, ions, glucose, and urea easily pass through, formed elements like blood cells and large proteins are too large and are not filtered. Their presence in urine (hematuria, proteinuria) indicates kidney damage."
  },
  {
    "id": "kidney-88",
    "question": "The process of osmoregulation ensures the stability of the __________ of blood plasma.",
    "options": [
      "Temperature",
      "Osmolarity",
      "Color",
      "Glucose concentration"
    ],
    "correctAnswer": 1,
    "explanation": "Osmolarity refers to the total concentration of solutes (ions, proteins, etc.) in a solution. A primary goal of osmoregulation is to maintain blood plasma osmolarity within a narrow range (around 300 mOsm/L) to prevent cells from shrinking or swelling due to osmotic imbalances."
  },
  {
    "id": "kidney-89",
    "question": "The descending limb of the Loop of Henle is permeable to __________, while the ascending limb is permeable to __________.",
    "options": [
      "Salt; water",
      "Water; salt",
      "Urea; glucose",
      "Glucose; urea"
    ],
    "correctAnswer": 1,
    "explanation": "The descending limb is highly permeable to water but not to salt. As filtrate descends, water leaves by osmosis, concentrating the filtrate. The ascending limb is impermeable to water but actively pumps out NaCl, diluting the filtrate as it ascends. This countercurrent flow is key to building the medullary gradient."
  },
  {
    "id": "kidney-90",
    "question": "Diuretics are substances that:",
    "options": [
      "Decrease urine output",
      "Increase urine output",
      "Increase water reabsorption",
      "Stimulate ADH release"
    ],
    "correctAnswer": 1,
    "explanation": "Diuretics (e.g., caffeine, alcohol) promote water loss in urine. They often work by inhibiting sodium reabsorption (e.g., in the ascending limb). Where sodium goes, water follows. If less sodium is reabsorbed, more water remains in the filtrate and is excreted, increasing urine volume."
  },
  {
    "id": "kidney-91",
    "question": "The final concentration of urine is determined in the:",
    "options": [
      "Proximal Convoluted Tubule",
      "Loop of Henle",
      "Distal Convoluted Tubule",
      "Collecting Duct"
    ],
    "correctAnswer": 3,
    "explanation": "The collecting duct passes through the concentration gradient established by the Loop of Henle. The permeability of the collecting duct to water is controlled by ADH. This allows the body to fine-tune how much water is reabsorbed from the filtrate, making the final urine either concentrated or dilute."
  },
  {
    "id": "kidney-92",
    "question": "Which of the following is a direct excretory product removed by the kidneys?",
    "options": [
      "Creatinine",
      "Glucose",
      "Amino acids",
      "Albumin"
    ],
    "correctAnswer": 0,
    "explanation": "Creatinine is a waste product generated from the breakdown of creatine phosphate in muscle tissue. It is freely filtered by the glomerulus and is not reabsorbed. Its level in blood and urine is a key clinical marker for assessing kidney function (e.g., in a creatinine clearance test)."
  },
  {
    "id": "kidney-93",
    "question": "The reabsorption of water in the collecting duct is an example of:",
    "options": [
      "Obligatory reabsorption",
      "Facultative reabsorption",
      "Active secretion",
      "Pressure filtration"
    ],
    "correctAnswer": 1,
    "explanation": "Facultative water reabsorption is the reabsorption of water that is regulated by hormones, specifically ADH. This is in contrast to obligatory water reabsorption (which occurs in the PCT and descending LoH), which is not regulated and always happens."
  },
  {
    "id": "kidney-94",
    "question": "If blood pressure drops, the kidney will respond by:",
    "options": [
      "Dilating the afferent arteriole",
      "Constricting the afferent arteriole",
      "Increasing renin secretion",
      "Inhibiting aldosterone release"
    ],
    "correctAnswer": 2,
    "explanation": "A drop in blood pressure is detected by the juxtaglomerular apparatus (JGA). In response, the JGA cells (granular cells) increase the secretion of the enzyme renin. Renin initiates the RAAS pathway, which leads to vasoconstriction and water/Na+ retention to raise blood pressure."
  },
  {
    "id": "kidney-95",
    "question": "The 'myogenic mechanism' of renal autoregulation involves:",
    "options": [
      "The stretching of the afferent arteriole wall",
      "The detection of NaCl by the macula densa",
      "The release of ADH",
      "The secretion of hydrogen ions"
    ],
    "correctAnswer": 0,
    "explanation": "The myogenic mechanism is an intrinsic property of vascular smooth muscle. When systemic blood pressure rises, it stretches the wall of the afferent arteriole. In response, the arteriole constricts to prevent excessive blood flow into the glomerulus, thus keeping the GFR relatively constant."
  },
  {
    "id": "kidney-96",
    "question": "The tubular fluid becomes increasingly concentrated as it moves down the descending limb of the Loop of Henle because:",
    "options": [
      "Salt is actively pumped out",
      "Water diffuses out into the hyperosmotic medulla",
      "Urea is secreted into it",
      "Glucose is reabsorbed"
    ],
    "correctAnswer": 1,
    "explanation": "The interstitial fluid of the renal medulla has a high osmolarity due to the countercurrent multiplier. The descending limb is permeable to water. As filtrate flows down, water moves out osmotically into the surrounding hyperosmotic tissue, concentrating the filtrate inside the tubule."
  },
  {
    "id": "kidney-97",
    "question": "Angiotensin II has which of the following effects?",
    "options": [
      "Vasodilation and decreased thirst",
      "Vasoconstriction and stimulation of aldosterone release",
      "Inhibition of ADH release",
      "Decreased sodium reabsorption"
    ],
    "correctAnswer": 1,
    "explanation": "Angiotensin II is a potent vasoconstrictor, which directly increases blood pressure. It also stimulates the adrenal cortex to release aldosterone, which promotes Na+ and water reabsorption in the kidneys, further increasing blood volume and pressure. It also stimulates thirst."
  },
  {
    "id": "kidney-98",
    "question": "Atrial Natriuretic Peptide (ANP) is a hormone that __________ blood pressure by __________ sodium reabsorption.",
    "options": [
      "Increases; promoting",
      "Decreases; inhibiting",
      "Decreases; promoting",
      "Increases; inhibiting"
    ],
    "correctAnswer": 1,
    "explanation": "ANP is released by the heart's atria in response to high blood volume and pressure. It opposes RAAS. ANP inhibits sodium reabsorption in the collecting ducts, leading to increased sodium and water excretion (natriuresis and diuresis), which reduces blood volume and pressure."
  },
  {
    "id": "kidney-99",
    "question": "The kidneys contribute to acid-base balance by:",
    "options": [
      "Exhaling CO2",
      "Secreting H+ ions and reabsorbing HCO3- ions",
      "Producing hydrochloric acid",
      "Breaking down proteins into urea"
    ],
    "correctAnswer": 1,
    "explanation": "While the lungs excrete volatile acids (as CO2), the kidneys manage non-volatile acids. They secrete hydrogen ions (H+) into the filtrate and simultaneously reabsorb bicarbonate ions (HCO3-), which is a key blood buffer. This process helps to regulate the pH of the blood."
  },
  {
    "id": "kidney-100",
    "question": "The ultimate justification for the kidney's role in osmoregulation is to:",
    "options": [
      "Produce as much urine as possible",
      "Maintain the stable internal environment required for cellular functions",
      "Remove all solutes from the blood",
      "Increase blood pressure at all times"
    ],
    "correctAnswer": 1,
    "explanation": "The core principle of homeostasis is maintaining a stable internal environment. Osmoregulation by the kidneys is a quintessential example of this. By precisely regulating water and electrolyte balance, the kidneys ensure that the osmolarity and volume of extracellular fluids remain constant, which is absolutely critical for the normal functioning of all cells in the body."
  },
  {
    "id": "kidney-101",
    "question": "The movement of water out of the filtrate in the proximal convoluted tubule is best described as:",
    "options": [
      "Active transport",
      "Obligatory water reabsorption following solute movement",
      "Facultative water reabsorption",
      "Secretion"
    ],
    "correctAnswer": 1,
    "explanation": "In the PCT, the reabsorption of Na+, glucose, and other solutes creates an osmotic gradient. Water follows these solutes passively via osmosis. This is called obligatory water reabsorption because it is directly tied to solute reabsorption and is not hormonally regulated.",
    
  },
  {
    "id": "kidney-102",
    "question": "A patient with uncontrolled diabetes insipidus would likely produce:",
    "options": [
      "A small volume of highly concentrated urine",
      "A large volume of highly dilute urine",
      "Urine with high glucose content",
      "No urine at all"
    ],
    "correctAnswer": 1,
    "explanation": "Diabetes insipidus is caused by a deficiency of ADH (or a lack of response to it). Without ADH, the collecting ducts remain impermeable to water. Therefore, large amounts of dilute filtrate pass through without water reabsorption, resulting in the production of a large volume of very dilute urine and intense thirst."
  },
  {
    "id": "kidney-103",
    "question": "The vasa recta's function is to:",
    "options": [
      "Filter blood",
      "Supply oxygen to the nephron",
      "Reabsorb nutrients in the PCT",
      "Maintain the medullary concentration gradient by countercurrent exchange"
    ],
    "correctAnswer": 3,
    "explanation": "The vasa recta are long, looping capillaries that run parallel to the Loop of Henle. They function as countercurrent exchangers. They remove reabsorbed water and solutes from the medulla without washing away the critical concentration gradient established by the Loop of Henle."
  },
  {
    "id": "kidney-104",
    "question": "The macula densa cells of the JGA are sensitive to changes in the:",
    "options": [
      "pH of the filtrate",
      "Flow rate and NaCl concentration of the filtrate in the DCT",
      "Oxygen levels in the blood",
      "Level of glucose in the blood"
    ],
    "correctAnswer": 1,
    "explanation": "Macula densa cells are located in the wall of the distal convoluted tubule where it touches the JGA. They monitor the NaCl content and flow rate of the filtrate. If flow is too high or NaCl is too high, they trigger vasoconstriction of the afferent arteriole to reduce GFR (tubuloglomerular feedback)."
  },
  {
    "id": "kidney-105",
    "question": "The reabsorption of sodium in the distal convoluted tubule and collecting duct is primarily stimulated by:",
    "options": [
      "Antidiuretic Hormone (ADH)",
      "Aldosterone",
      "Atrial Natriuretic Peptide (ANP)",
      "Renin"
    ],
    "correctAnswer": 1,
    "explanation": "Aldosterone is the primary hormone regulating sodium reabsorption. It acts on the principal cells of the DCT and collecting duct, stimulating the synthesis of Na+ channels and Na+/K+ pumps, thereby increasing Na+ reabsorption (and K+ secretion)."
  },
  {
    "id": "kidney-106",
    "question": "The clearance of which substance is used to estimate the Glomerular Filtration Rate (GFR)?",
    "options": [
      "Glucose",
      "Sodium",
      "Creatinine",
      "Albumin"
    ],
    "correctAnswer": 2,
    "explanation": "Creatinine clearance is a common clinical test to estimate GFR. Creatinine is freely filtered, not reabsorbed, and only slightly secreted. Therefore, the rate at which the kidneys clear creatinine from the blood (excrete it in urine) provides a good approximation of the GFR."
  },
  {
    "id": "kidney-107",
    "question": "Urea recycling in the nephron is important because it:",
    "options": [
      "Provides energy for the nephron",
      "Helps maintain the osmotic gradient in the medulla",
      "Converts urea back into usable amino acids",
      "Prevents water reabsorption"
    ],
    "correctAnswer": 1,
    "explanation": "A portion of urea is reabsorbed from the collecting duct into the medullary interstitial fluid. This recycled urea contributes significantly to the high osmolarity of the medulla, which is essential for the kidney's ability to concentrate urine and conserve water."
  },
  {
    "id": "kidney-108",
    "question": "The primary role of the kidneys in excretion is to remove wastes while:",
    "options": [
      "Conserving essential solutes and water",
      "Increasing blood volume",
      "Decreasing blood pressure",
      "Producing enzymes for digestion"
    ],
    "correctAnswer": 0,
    "explanation": "The kidney's excretory function is highly selective. It is designed to efficiently remove metabolic wastes (urea, creatinine, uric acid) and foreign chemicals while simultaneously conserving essential substances like water, glucose, ions, and amino acids through reabsorption. This dual role links excretion directly to osmoregulation."
  },
  {
    "id": "kidney-109",
    "question": "In which part of the nephron is the filtrate osmolarity the highest?",
    "options": [
      "Bowman's capsule",
      "End of the proximal convoluted tubule",
      "Tip (bottom) of the Loop of Henle",
      "Beginning of the distal convoluted tubule"
    ],
    "correctAnswer": 2,
    "explanation": "The filtrate reaches its maximum concentration at the hairpin turn (tip) of the Loop of Henle in the deepest part of the medulla. This is because the descending limb has lost water to the hyperosmotic interstitium, concentrating all remaining solutes."
  },
  {
    "id": "kidney-110",
    "question": "The justification for the high blood flow to the kidneys (20-25% of cardiac output) is to:",
    "options": [
      "Provide oxygen for active transport processes",
      "Maintain a high pressure for filtration and process large volumes of plasma",
      "Help with thermoregulation",
      "Store excess blood"
    ],
    "correctAnswer": 1,
    "explanation": "The high renal blood flow is necessary to maintain the high hydrostatic pressure in the glomerulus required for efficient filtration. It also ensures that a large volume of plasma is continuously processed, allowing the kidneys to precisely and rapidly regulate the composition and volume of the blood."
  },
  {
    "id": "kidney-111",
    "question": "Secretion of potassium ions (K+) into the filtrate occurs mainly in the:",
    "options": [
      "Proximal Convoluted Tubule",
      "Descending Loop of Henle",
      "Distal Convoluted Tubule and Collecting Duct",
      "Glomerulus"
    ],
    "correctAnswer": 2,
    "explanation": "Potassium secretion is a regulated process that occurs primarily in the distal nephron (DCT and collecting duct). It is driven by the Na+/K+ pump and is influenced by aldosterone levels. This secretion is crucial for maintaining potassium balance in the body."
  },
  {
    "id": "kidney-112",
    "question": "The reabsorption of bicarbonate ions (HCO3-) is critical for the kidney's role in:",
    "options": [
      "Blood glucose regulation",
      "Blood pressure regulation",
      "Acid-base balance",
      "Nitrogen excretion"
    ],
    "correctAnswer": 2,
    "explanation": "Bicarbonate is a major blood buffer. The kidneys regulate blood pH by reabsorbing filtered HCO3- and generating new HCO3- to replace what is used up in buffering metabolic acids. This process is intimately linked with the secretion of H+ ions."
  },
  {
    "id": "kidney-113",
    "question": "If the osmolarity of the blood increases above normal, the osmoreceptors in the hypothalamus will trigger:",
    "options": [
      "Decreased thirst and increased ADH release",
      "Increased thirst and increased ADH release",
      "Decreased thirst and decreased ADH release",
      "Increased thirst and decreased ADH release"
    ],
    "correctAnswer": 1,
    "explanation": "An increase in blood osmolarity (e.g., due to dehydration) is detected by osmoreceptors. They stimulate both thirst (to promote water intake) and the release of ADH from the posterior pituitary (to promote water reabsorption in the kidneys). Both mechanisms work to dilute the blood and restore normal osmolarity."
  },
  {
    "id": "kidney-114",
    "question": "The term 'obligatory' water loss refers to the water:",
    "options": [
      "Lost in urine regardless of hydration state",
      "Lost through sweating during exercise",
      "Consumed in food and drink",
      "Reabsorbed in the collecting duct"
    ],
    "correctAnswer": 0,
    "explanation": "Obligatory water loss is the minimum volume of water that must be excreted in urine each day to rid the body of metabolic wastes (like urea and solutes). This is approximately 400-500 mL/day. It cannot be prevented, even in severe dehydration, justifying the constant need for water intake."
  },
  {
    "id": "kidney-115",
    "question": "The simultaneous processes of filtration, reabsorption, and secretion in the nephron justify that the kidney is not just a simple filter but a:",
    "options": [
      "Simple sieve",
      "Sophisticated processing plant",
      "Storage organ",
      "Primary digestive organ"
    ],
    "correctAnswer": 1,
    "explanation": "The nephron's function is highly complex. Filtration is non-selective, but reabsorption and secretion are highly selective and regulated processes. This allows the kidneys to dynamically adjust the composition of urine and blood, acting as sophisticated processing plants that maintain homeostasis, not just passive filters."
  },
  {
    "id": "kidney-116",
    "question": "The reabsorption of glucose in the nephron involves:",
    "options": [
      "Simple diffusion",
      "Facilitated diffusion with carrier proteins",
      "Active transport coupled with sodium reabsorption",
      "Osmosis"
    ],
    "correctAnswer": 2,
    "explanation": "Glucose reabsorption in the PCT is an excellent example of secondary active transport. Sodium is actively pumped out of the tubule cell, creating a gradient. Sodium then diffuses back into the cell from the filtrate through a symporter carrier protein that brings glucose with it against its gradient."
  },
  {
    "id": "kidney-117",
    "question": "The ability of the kidneys to automatically maintain a nearly constant GFR over a wide range of blood pressures is called:",
    "options": [
      "Tubuloglomerular feedback",
      "Renal autoregulation",
      "The myogenic mechanism",
      "Osmoregulation"
    ],
    "correctAnswer": 1,
    "explanation": "Renal autoregulation is the collective term for the intrinsic mechanisms (myogenic mechanism and tubuloglomerular feedback) that keep the renal blood flow and GFR relatively constant despite changes in systemic arterial pressure. This ensures the kidneys can function effectively without being overwhelmed by momentary changes in blood pressure."
  },
  {
    "id": "kidney-118",
    "question": "The justification for excreting nitrogen as urea rather than ammonia is that urea is:",
    "options": [
      "More toxic",
      "Less soluble in water",
      "Less toxic and can be concentrated safely",
      "A usable source of energy"
    ],
    "correctAnswer": 2,
    "explanation": "Ammonia (NH3) is highly toxic and soluble. Urea is far less toxic and less soluble, allowing it to be concentrated in the urine without damaging the kidney tissues. This enables the body to excrete nitrogenous waste while conserving water, a key adaptation for terrestrial life."
  },
  {
    "id": "kidney-119",
    "question": "The hormone erythropoietin, which stimulates red blood cell production, is produced by the:",
    "options": [
      "Liver",
      "Heart",
      "Kidneys",
      "Bone marrow"
    ],
    "correctAnswer": 2,
    "explanation": "The kidneys produce and release erythropoietin in response to low oxygen levels in the blood (hypoxia). This endocrine function is separate from but complementary to its excretory and osmoregulatory roles, as it ensures adequate oxygen-carrying capacity of the blood."
  },
  {
    "id": "kidney-120",
    "question": "The final justification for the immense complexity of kidney function is its central role in:",
    "options": [
      "Pumping blood",
      "Maintaining homeostasis for overall health",
      "Producing vitamins",
      "Breaking down hormones"
    ],
    "correctAnswer": 1,
    "explanation": "Every intricate process of the nephron—filtration, reabsorption, secretion, and hormone response—is ultimately dedicated to one supreme physiological goal: maintaining the homeostasis of the internal environment. By regulating waste removal, water balance, electrolyte concentrations, and blood pressure, the kidneys are fundamental to the health and survival of the entire organism."
  },
  {
  id: 'kidney-121',
  question: "What is the primary function of glomerular capillaries?",
  options: ["Reabsorption", "Filtration", "Secretion", "Excretion"],
  correctAnswer: 1,
  explanation: "Glomerular capillaries are specialized for filtration of blood plasma into Bowman’s capsule."
},
{
  id: 'kidney-122',
  question: "Which kidney capillary bed has higher hydrostatic pressure?",
  options: ["Peritubular capillaries", "Vasa recta", "Glomerular capillaries", "Both have equal pressure"],
  correctAnswer: 2,
  explanation: "Glomerular capillaries maintain high hydrostatic pressure to drive filtration."
},
{
  id: 'kidney-123',
  question: "Which capillaries are mainly involved in selective reabsorption?",
  options: ["Glomerular", "Peritubular", "Hepatic", "Pulmonary"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries reabsorb useful substances from renal tubules."
},
{
  id: 'kidney-124',
  question: "The glomerular capillaries are located between:",
  options: ["Two arterioles", "An artery and a vein", "Two veins", "Venule and capillary"],
  correctAnswer: 0,
  explanation: "Glomerular capillaries are unique as they are between afferent and efferent arterioles."
},
{
  id: 'kidney-125',
  question: "Peritubular capillaries primarily function in:",
  options: ["Filtration", "Gas exchange", "Reabsorption and secretion", "Excretion"],
  correctAnswer: 2,
  explanation: "They reabsorb nutrients and secrete wastes into tubular fluid."
},
{
  id: 'kidney-126',
  question: "Which structure surrounds the proximal and distal convoluted tubules?",
  options: ["Glomerular capillaries", "Peritubular capillaries", "Bowman's capsule", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries surround PCT and DCT to exchange substances."
},
{
  id: 'kidney-127',
  question: "Why do glomerular capillaries not reabsorb nutrients?",
  options: ["They lack transport proteins", "Their pressure favors filtration only", "They are impermeable", "They lack basement membrane"],
  correctAnswer: 1,
  explanation: "High hydrostatic pressure favors only filtration, not reabsorption."
},
{
  id: 'kidney-128',
  question: "The peritubular capillaries arise from:",
  options: ["Afferent arteriole", "Efferent arteriole", "Renal vein", "Renal artery"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries originate from efferent arteriole after glomerulus."
},
{
  id: 'kidney-129',
  question: "What is the role of peritubular capillaries in acid-base balance?",
  options: ["Filtration of acids", "Reabsorption of bicarbonate and secretion of H⁺", "Excretion of acids", "Production of bicarbonate"],
  correctAnswer: 1,
  explanation: "They maintain pH by reabsorbing HCO₃⁻ and secreting H⁺ into tubule."
},
{
  id: 'kidney-130',
  question: "Which capillaries help concentrate urine via counter-current exchange?",
  options: ["Peritubular", "Glomerular", "Vasa recta", "Renal sinus capillaries"],
  correctAnswer: 2,
  explanation: "Vasa recta (specialized peritubular capillaries of juxtamedullary nephrons) maintain osmotic gradient."
},
{
  id: 'kidney-131',
  question: "The first step of urine formation occurs at:",
  options: ["Peritubular capillaries", "Glomerular capillaries", "Collecting duct", "Ureter"],
  correctAnswer: 1,
  explanation: "Urine formation begins with filtration at glomerular capillaries."
},
{
  id: 'kidney-132',
  question: "Low hydrostatic pressure is a feature of:",
  options: ["Glomerular capillaries", "Peritubular capillaries", "Arteries", "Renal vein"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries have low pressure favoring reabsorption."
},
{
  id: 'kidney-133',
  question: "Which capillaries form part of the renal portal system?",
  options: ["Peritubular capillaries", "Glomerular capillaries", "Both glomerular and peritubular", "None"],
  correctAnswer: 2,
  explanation: "Both capillary beds exist in series, making kidney circulation unique."
},
{
  id: 'kidney-134',
  question: "Glomerular filtration barrier excludes:",
  options: ["Ions", "Small solutes", "Proteins and cells", "Glucose"],
  correctAnswer: 2,
  explanation: "The filtration barrier prevents passage of proteins and blood cells."
},
{
  id: 'kidney-135',
  question: "Which of these favors reabsorption into peritubular capillaries?",
  options: ["High osmotic pressure", "High hydrostatic pressure", "Low oncotic pressure", "Negative filtration"],
  correctAnswer: 0,
  explanation: "Plasma proteins create high colloid osmotic pressure aiding reabsorption."
},
{
  id: 'kidney-136',
  question: "Which vessels drain into renal vein after collecting reabsorbed substances?",
  options: ["Glomerular capillaries", "Peritubular capillaries", "Afferent arterioles", "Efferent arterioles"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries collect reabsorbed nutrients and drain into renal vein."
},
{
  id: 'kidney-137',
  question: "Filtration occurs because of:",
  options: ["High osmotic pressure in peritubular capillaries", "High hydrostatic pressure in glomerular capillaries", "High venous return", "High interstitial pressure"],
  correctAnswer: 1,
  explanation: "High hydrostatic pressure in glomerulus forces plasma into Bowman’s capsule."
},
{
  id: 'kidney-138',
  question: "Peritubular capillaries are adapted for:",
  options: ["High-pressure filtration", "Exchange and reabsorption", "Gas exchange", "Blood storage"],
  correctAnswer: 1,
  explanation: "Their structure supports reabsorption of nutrients and ions from tubules."
},
{
  id: 'kidney-139',
  question: "Glomerular capillaries are fenestrated to allow:",
  options: ["Reabsorption of water", "Rapid filtration of plasma", "Gas exchange", "Protein absorption"],
  correctAnswer: 1,
  explanation: "Fenestrations permit rapid filtration of water and small solutes."
},
{
  id: 'kidney-140',
  question: "Which statement best compares both capillary beds?",
  options: ["Glomerular filters, peritubular reabsorbs", "Both filter equally", "Both reabsorb equally", "Neither has filtration role"],
  correctAnswer: 0,
  explanation: "Glomerular capillaries perform filtration, while peritubular capillaries reabsorb."
},
{
  id: 'kidney-141',
  question: "Why are glomerular capillaries considered high-pressure capillaries?",
  options: ["Because of afferent arteriole being wider than efferent arteriole", "Because they are surrounded by Bowman’s capsule", "Because they lack basement membrane", "Because they have thin walls"],
  correctAnswer: 0,
  explanation: "The afferent arteriole is wider, creating higher pressure in glomerular capillaries."
},
{
  id: 'kidney-142',
  question: "Peritubular capillaries are best suited for:",
  options: ["Rapid filtration", "Slow reabsorption and secretion", "Protein transport", "Gas exchange"],
  correctAnswer: 1,
  explanation: "They have low pressure and high surface area for efficient reabsorption and secretion."
},
{
  id: 'kidney-143',
  question: "Which pressure mainly drives fluid into Bowman’s capsule?",
  options: ["Oncotic pressure", "Hydrostatic pressure in glomerulus", "Tubular pressure", "Venous return"],
  correctAnswer: 1,
  explanation: "Glomerular hydrostatic pressure is the main force for filtration."
},
{
  id: 'kidney-144',
  question: "Which capillary bed helps in secretion of drugs and toxins?",
  options: ["Peritubular capillaries", "Glomerular capillaries", "Hepatic sinusoids", "Pulmonary capillaries"],
  correctAnswer: 0,
  explanation: "Peritubular capillaries secrete drugs, toxins, and ions into the tubule."
},
{
  id: 'kidney-145',
  question: "Where does ultrafiltration occur?",
  options: ["Collecting duct", "Peritubular capillaries", "Glomerular capillaries", "Vasa recta"],
  correctAnswer: 2,
  explanation: "Ultrafiltration occurs in glomerular capillaries across the filtration barrier."
},
{
  id: 'kidney-146',
  question: "Which force opposes filtration in glomerular capillaries?",
  options: ["Hydrostatic pressure of glomerulus", "Oncotic pressure of plasma proteins", "Venous return pressure", "Osmotic gradient of urine"],
  correctAnswer: 1,
  explanation: "Oncotic pressure of plasma proteins resists fluid leaving the blood."
},
{
  id: 'kidney-147',
  question: "Which vessels provide nutrients to renal tubules?",
  options: ["Afferent arterioles", "Glomerular capillaries", "Peritubular capillaries", "Renal artery"],
  correctAnswer: 2,
  explanation: "Peritubular capillaries supply oxygen and nutrients to renal tubules."
},
{
  id: 'kidney-148',
  question: "Why do peritubular capillaries favor reabsorption?",
  options: ["They have high hydrostatic pressure", "They have low hydrostatic pressure and high oncotic pressure", "They are fenestrated", "They lack endothelium"],
  correctAnswer: 1,
  explanation: "Low hydrostatic pressure and high colloid osmotic pressure draw water and solutes in."
},
{
  id: 'kidney-149',
  question: "Glomerular capillaries directly drain into:",
  options: ["Renal vein", "Peritubular capillaries", "Afferent arteriole", "Collecting duct"],
  correctAnswer: 1,
  explanation: "They drain into efferent arteriole which gives rise to peritubular capillaries."
},
{
  id: 'kidney-150',
  question: "In cortical nephrons, the peritubular capillaries are most abundant around:",
  options: ["Collecting duct", "Glomerulus", "Proximal and distal convoluted tubules", "Loop of Henle"],
  correctAnswer: 2,
  explanation: "Peritubular capillaries surround PCT and DCT in cortical nephrons."
},
{
  id: 'kidney-151',
  question: "What type of capillaries are glomerular capillaries?",
  options: ["Continuous", "Fenestrated", "Sinusoidal", "Discontinuous"],
  correctAnswer: 1,
  explanation: "They are fenestrated to allow rapid passage of plasma filtrate."
},
{
  id: 'kidney-152',
  question: "The efferent arteriole has what effect on glomerular pressure?",
  options: ["Decreases pressure", "Increases pressure by narrowing", "No effect", "Equalizes pressure"],
  correctAnswer: 1,
  explanation: "Narrow efferent arteriole raises glomerular hydrostatic pressure for filtration."
},
{
  id: 'kidney-153',
  question: "Which capillaries directly assist in removal of CO₂ from renal tissue?",
  options: ["Glomerular", "Peritubular", "Vasa recta", "Bowman’s capsule capillaries"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries supply O₂ and remove CO₂ from tubular cells."
},
{
  id: 'kidney-154',
  question: "What is the fate of water filtered in glomerular capillaries?",
  options: ["All excreted", "All reabsorbed in PCT", "Most reabsorbed by peritubular capillaries", "Stored in renal pelvis"],
  correctAnswer: 2,
  explanation: "Most filtered water is reabsorbed by peritubular capillaries."
},
{
  id: 'kidney-155',
  question: "Which capillary bed contributes to urine concentration gradient?",
  options: ["Peritubular of cortical nephrons", "Glomerular capillaries", "Vasa recta", "Renal sinus capillaries"],
  correctAnswer: 2,
  explanation: "Vasa recta in juxtamedullary nephrons help maintain medullary concentration gradient."
},
{
  id: 'kidney-156',
  question: "Glomerular filtration is mainly a:",
  options: ["Selective process", "Non-selective process", "Active transport", "Osmotic transport"],
  correctAnswer: 1,
  explanation: "Filtration is largely non-selective, based on size and charge."
},
{
  id: 'kidney-157',
  question: "Which capillary bed secretes potassium and hydrogen ions?",
  options: ["Glomerular capillaries", "Peritubular capillaries", "Renal vein", "Renal artery"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries help secrete K⁺ and H⁺ into renal tubules."
},
{
  id: 'kidney-158',
  question: "What percentage of plasma is filtered by glomerular capillaries?",
  options: ["100%", "20%", "50%", "10%"],
  correctAnswer: 1,
  explanation: "Around 20% of plasma entering glomerulus is filtered."
},
{
  id: 'kidney-159',
  question: "Which capillaries are adapted for high blood flow with minimal resistance?",
  options: ["Glomerular", "Peritubular", "Pulmonary", "Hepatic"],
  correctAnswer: 0,
  explanation: "Glomerular capillaries allow high blood flow for efficient filtration."
},
{
  id: 'kidney-160',
  question: "Where does reabsorption of glucose primarily occur?",
  options: ["Glomerular capillaries", "Peritubular capillaries surrounding PCT", "Loop of Henle", "Collecting duct"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries around PCT reabsorb almost all glucose."
},
{
  id: 'kidney-161',
  question: "What ensures that filtration occurs continuously in glomeruli?",
  options: ["High osmotic pressure", "Sustained high hydrostatic pressure", "Negative pressure gradient", "Lymphatic drainage"],
  correctAnswer: 1,
  explanation: "Continuous high hydrostatic pressure in glomerulus drives constant filtration."
},
{
  id: 'kidney-162',
  question: "Peritubular capillaries in medulla are modified as:",
  options: ["Glomeruli", "Vasa recta", "Fenestrated sinusoids", "Loop vessels"],
  correctAnswer: 1,
  explanation: "In juxtamedullary nephrons, peritubular capillaries extend as vasa recta."
},
{
  id: 'kidney-163',
  question: "Which factor favors filtration in glomerular capillaries?",
  options: ["High efferent flow", "High hydrostatic pressure", "High oncotic pressure", "Low afferent flow"],
  correctAnswer: 1,
  explanation: "High hydrostatic pressure in glomeruli favors filtration of plasma."
},
{
  id: 'kidney-164',
  question: "Peritubular capillaries play a vital role in:",
  options: ["O₂ exchange only", "Nutrient absorption and waste secretion", "Gas transport only", "Filtration only"],
  correctAnswer: 1,
  explanation: "They both absorb nutrients and secrete wastes."
},
{
  id: 'kidney-165',
  question: "Glomerular capillaries are surrounded by:",
  options: ["Renal vein", "Bowman’s capsule", "Collecting duct", "Renal pelvis"],
  correctAnswer: 1,
  explanation: "They are enclosed by Bowman’s capsule for filtration."
},
{
  id: 'kidney-166',
  question: "Which blood vessels provide the filtrate that becomes urine?",
  options: ["Renal artery", "Peritubular capillaries", "Glomerular capillaries", "Renal vein"],
  correctAnswer: 2,
  explanation: "Filtrate originates from glomerular capillaries."
},
{
  id: 'kidney-167',
  question: "Which capillary network has higher oncotic pressure after filtration?",
  options: ["Peritubular capillaries", "Glomerular capillaries", "Renal artery", "Vasa recta"],
  correctAnswer: 0,
  explanation: "Protein-rich blood enters peritubular capillaries, giving them high oncotic pressure."
},
{
  id: 'kidney-168',
  question: "Filtration rate in glomerulus depends on:",
  options: ["Systemic venous pressure", "Balance of hydrostatic and oncotic pressures", "Tubular secretion", "pH of urine"],
  correctAnswer: 1,
  explanation: "Filtration is governed by net filtration pressure (hydrostatic minus oncotic and capsular pressures)."
},
{
  id: 'kidney-169',
  question: "Which structure ensures efficient reabsorption after glomerular filtration?",
  options: ["Renal pelvis", "Peritubular capillaries", "Collecting ducts", "Ureters"],
  correctAnswer: 1,
  explanation: "Peritubular capillaries reabsorb substances from filtrate."
},
{
  id: 'kidney-170',
  question: "Comparing the two: which capillaries are high pressure vs. low pressure?",
  options: ["Glomerular high, Peritubular low", "Both low", "Both high", "Glomerular low, Peritubular high"],
  correctAnswer: 0,
  explanation: "Glomerular capillaries are high-pressure for filtration; peritubular are low-pressure for reabsorption."
},
{
  id: 'kidney-171',
  question: "What are kidney stones primarily composed of?",
  options: ["Calcium salts", "Lipids", "Proteins", "Glucose crystals"],
  correctAnswer: 0,
  explanation: "Most kidney stones are composed of calcium oxalate or calcium phosphate."
},
{
  id: 'kidney-172',
  question: "Which of the following is a major cause of kidney stone formation?",
  options: ["Dehydration", "Low protein intake", "Excessive sleep", "Viral infection"],
  correctAnswer: 0,
  explanation: "Dehydration concentrates urine, increasing the risk of stone formation."
},
{
  id: 'kidney-173',
  question: "High intake of which compound increases the risk of uric acid stones?",
  options: ["Purines", "Lipids", "Vitamin D", "Starch"],
  correctAnswer: 0,
  explanation: "Purines from red meat and seafood increase uric acid concentration, promoting stones."
},
{
  id: 'kidney-174',
  question: "Which symptom is most common in patients with kidney stones?",
  options: ["Severe flank pain", "Coughing", "Blurred vision", "Skin rashes"],
  correctAnswer: 0,
  explanation: "Kidney stones cause sharp flank pain, often radiating to the groin."
},
{
  id: 'kidney-175',
  question: "Which diagnostic tool is most accurate for detecting kidney stones?",
  options: ["CT scan", "Ultrasound", "X-ray", "Blood test"],
  correctAnswer: 0,
  explanation: "CT scan without contrast is the most accurate diagnostic method."
},
{
  id: 'kidney-176',
  question: "What role does citrate play in preventing kidney stones?",
  options: ["Inhibits crystal formation", "Increases calcium absorption", "Causes dehydration", "Stimulates uric acid production"],
  correctAnswer: 0,
  explanation: "Citrate binds calcium and prevents crystal aggregation."
},
{
  id: 'kidney-177',
  question: "Which dietary change helps reduce the risk of calcium oxalate stones?",
  options: ["Reduce oxalate-rich foods", "Increase salt intake", "Reduce water intake", "Avoid vitamin C"],
  correctAnswer: 0,
  explanation: "Reducing foods high in oxalates (like spinach) lowers stone risk."
},
{
  id: 'kidney-178',
  question: "Which treatment is commonly used for large kidney stones?",
  options: ["Lithotripsy", "Antibiotics", "Chemotherapy", "Insulin injection"],
  correctAnswer: 0,
  explanation: "Lithotripsy uses shock waves to break large stones into smaller fragments."
},
{
  id: 'kidney-179',
  question: "Struvite stones are often associated with which condition?",
  options: ["Urinary tract infection", "Dehydration", "Diabetes", "Hypertension"],
  correctAnswer: 0,
  explanation: "Struvite stones form due to recurrent urinary tract infections with urease-producing bacteria."
},
{
  id: 'kidney-180',
  question: "Which vitamin, when taken in excess, can lead to kidney stone formation?",
  options: ["Vitamin C", "Vitamin A", "Vitamin K", "Vitamin B12"],
  correctAnswer: 0,
  explanation: "Excess vitamin C is metabolized to oxalate, increasing stone risk."
},
{
  id: 'kidney-181',
  question: "Kidney stones cause hematuria because:",
  options: ["They damage urinary tract lining", "They increase blood pressure", "They reduce filtration rate", "They increase plasma volume"],
  correctAnswer: 0,
  explanation: "Sharp stones can scrape and injure urinary tract tissues, causing blood in urine."
},
{
  id: 'kidney-182',
  question: "Which factor reduces the chance of kidney stone recurrence?",
  options: ["Adequate hydration", "High protein diet", "Sedentary lifestyle", "Low fluid intake"],
  correctAnswer: 0,
  explanation: "Drinking sufficient water dilutes urine and prevents stone formation."
},
{
  id: 'kidney-183',
  question: "Which of the following stones are radiolucent (not visible on X-ray)?",
  options: ["Uric acid stones", "Calcium oxalate stones", "Struvite stones", "Cystine stones"],
  correctAnswer: 0,
  explanation: "Uric acid stones are radiolucent and often missed on X-ray."
},
{
  id: 'kidney-184',
  question: "Which surgical method removes very large or complex kidney stones?",
  options: ["Percutaneous nephrolithotomy", "Dialysis", "Appendectomy", "Endoscopy"],
  correctAnswer: 0,
  explanation: "Percutaneous nephrolithotomy involves surgical removal of large stones."
},
{
  id: 'kidney-185',
  question: "Excessive salt intake promotes kidney stone formation by:",
  options: ["Increasing calcium excretion", "Reducing water absorption", "Increasing citrate levels", "Inhibiting uric acid"],
  correctAnswer: 0,
  explanation: "High salt increases calcium excretion in urine, promoting stones."
},
{
  id: 'kidney-186',
  question: "Which gender is generally more prone to kidney stones?",
  options: ["Males", "Females", "Both equally", "Children only"],
  correctAnswer: 0,
  explanation: "Males are more frequently affected due to dietary and metabolic factors."
},
{
  id: 'kidney-187',
  question: "Which lifestyle habit increases kidney stone risk?",
  options: ["Low water intake", "Regular exercise", "Adequate sleep", "Balanced diet"],
  correctAnswer: 0,
  explanation: "Low water intake leads to concentrated urine, increasing risk."
},
{
  id: 'kidney-188',
  question: "Which condition increases the risk of cystine stones?",
  options: ["Genetic defect in amino acid transport", "Diabetes", "Obesity", "Vitamin deficiency"],
  correctAnswer: 0,
  explanation: "Cystinuria, a genetic disorder, causes cystine accumulation leading to stones."
},
{
  id: 'kidney-189',
  question: "Why is pain intermittent during kidney stone movement?",
  options: ["Stones move along ureter", "Blood pressure fluctuates", "Urine is alkaline", "Nerves adapt quickly"],
  correctAnswer: 0,
  explanation: "Pain occurs as stones intermittently block ureteral flow."
},
{
  id: 'kidney-190',
  question: "Which of the following is NOT a preventive measure for kidney stones?",
  options: ["High salt diet", "Hydration", "Balanced calcium intake", "Limiting oxalate-rich food"],
  correctAnswer: 0,
  explanation: "High salt intake promotes calcium excretion and increases stone risk."
},
{
  id: 'kidney-191',
  question: "What is the role of potassium citrate in stone prevention?",
  options: ["Alkalinizes urine", "Increases protein absorption", "Stimulates oxalate production", "Blocks uric acid metabolism"],
  correctAnswer: 0,
  explanation: "Potassium citrate alkalinizes urine, preventing uric acid and cystine stones."
},
{
  id: 'kidney-192',
  question: "Which condition favors formation of uric acid stones?",
  options: ["Acidic urine", "Alkaline urine", "Dilute urine", "Neutral urine"],
  correctAnswer: 0,
  explanation: "Uric acid stones form in persistently acidic urine."
},
{
  id: 'kidney-193',
  question: "Which test can confirm hematuria in kidney stone patients?",
  options: ["Urine analysis", "ECG", "Liver function test", "Spirometry"],
  correctAnswer: 0,
  explanation: "Urine analysis detects presence of red blood cells in urine."
},
{
  id: 'kidney-194',
  question: "Which factor is least likely to cause kidney stones?",
  options: ["Low protein diet", "Dehydration", "Excess oxalate intake", "High salt diet"],
  correctAnswer: 0,
  explanation: "Low protein diet does not increase stone risk."
},
{
  id: 'kidney-195',
  question: "Which treatment uses sound waves to break kidney stones?",
  options: ["Extracorporeal shock wave lithotripsy", "Dialysis", "Surgery", "Chemotherapy"],
  correctAnswer: 0,
  explanation: "Shock wave lithotripsy breaks stones into passable fragments."
},
{
  id: 'kidney-196',
  question: "What is the main danger of untreated kidney stones?",
  options: ["Blockage of urinary tract", "Improved urine flow", "Reduced urination frequency", "Increased blood pH"],
  correctAnswer: 0,
  explanation: "Stones can obstruct urine flow and damage kidneys."
},
{
  id: 'kidney-197',
  question: "Which mineral is most often involved in kidney stones?",
  options: ["Calcium", "Iron", "Magnesium", "Zinc"],
  correctAnswer: 0,
  explanation: "About 80% of stones are calcium-based."
},
{
  id: 'kidney-198',
  question: "What is the initial treatment for small kidney stones?",
  options: ["Increased fluid intake", "Immediate surgery", "Chemotherapy", "Blood transfusion"],
  correctAnswer: 0,
  explanation: "Small stones often pass naturally with adequate hydration."
},
{
  id: 'kidney-199',
  question: "Which urine condition promotes calcium oxalate stone formation?",
  options: ["Concentrated and acidic urine", "Dilute and neutral urine", "Alkaline urine", "Neutral and dilute urine"],
  correctAnswer: 0,
  explanation: "Concentrated and acidic urine favors calcium oxalate stone growth."
},
{
  id: 'kidney-200',
  question: "Why do recurrent kidney stones require metabolic evaluation?",
  options: ["To identify underlying abnormalities", "To check heart rate", "To assess lung function", "To monitor brain activity"],
  correctAnswer: 0,
  explanation: "Recurrent stones may indicate underlying metabolic or genetic disorders."
},
{
  id: 'kidney-201',
  question: "Which organ is most directly affected by kidney stones?",
  options: ["Kidney", "Liver", "Pancreas", "Lungs"],
  correctAnswer: 0,
  explanation: "Kidney stones originate and cause damage within the kidneys."
},
{
  id: 'kidney-202',
  question: "In which condition are calcium phosphate stones more common?",
  options: ["Alkaline urine", "Acidic urine", "Neutral urine", "Dilute urine"],
  correctAnswer: 0,
  explanation: "Calcium phosphate stones form in alkaline urine."
},
{
  id: 'kidney-203',
  question: "Which factor is most important in stone prevention?",
  options: ["Adequate hydration", "High protein intake", "Low calcium intake", "Sedentary lifestyle"],
  correctAnswer: 0,
  explanation: "Hydration is the single most important preventive measure."
},
{
  id: 'kidney-204',
  question: "Which enzyme-producing bacteria cause struvite stones?",
  options: ["Urease-producing bacteria", "Amylase-producing bacteria", "Protease-producing bacteria", "Lipase-producing bacteria"],
  correctAnswer: 0,
  explanation: "Urease-producing bacteria increase ammonia, leading to struvite stones."
},
{
  id: 'kidney-205',
  question: "Which dietary habit may increase oxalate stones?",
  options: ["Excess spinach intake", "High banana intake", "High wheat intake", "High protein intake"],
  correctAnswer: 0,
  explanation: "Spinach is rich in oxalates, predisposing to stone formation."
},
{
  id: 'kidney-206',
  question: "What is the first symptom of kidney stones in many cases?",
  options: ["Severe back pain", "Fever", "Swelling in legs", "Jaundice"],
  correctAnswer: 0,
  explanation: "Renal colic (sharp back or flank pain) is the first symptom."
},
{
  id: 'kidney-207',
  question: "What is the mechanism of uric acid stone formation?",
  options: ["Excess uric acid crystallizes in acidic urine", "Excess glucose accumulates", "Excess calcium binds phosphate", "Dehydration produces cholesterol crystals"],
  correctAnswer: 0,
  explanation: "Uric acid stones form when urine is persistently acidic and concentrated."
},
{
  id: 'kidney-208',
  question: "Which procedure directly removes stones through urethra?",
  options: ["Ureteroscopy", "Appendectomy", "Dialysis", "Endoscopy"],
  correctAnswer: 0,
  explanation: "Ureteroscopy involves using a scope through the urethra to remove stones."
},
{
  id: 'kidney-209',
  question: "Which kidney stone complication may cause infection?",
  options: ["Urinary stasis", "Increased GFR", "High blood pH", "Reduced oxygen"],
  correctAnswer: 0,
  explanation: "Urinary stasis due to obstruction predisposes to infection."
},
{
  id: 'kidney-210',
  question: "Which stone type forms in genetic disorder cystinuria?",
  options: ["Cystine stones", "Calcium oxalate stones", "Uric acid stones", "Struvite stones"],
  correctAnswer: 0,
  explanation: "Cystine stones are linked with defective transport of cystine amino acid."
},
{
  id: 'kidney-211',
  question: "What is the main goal of kidney stone treatment?",
  options: ["Relieve obstruction and prevent recurrence", "Increase body weight", "Improve lung capacity", "Enhance vision"],
  correctAnswer: 0,
  explanation: "Treatment aims to clear blockage and stop new stone formation."
},
{
  id: 'kidney-212',
  question: "Which hormone imbalance increases calcium stone risk?",
  options: ["Hyperparathyroidism", "Hypothyroidism", "Insulin deficiency", "Growth hormone deficiency"],
  correctAnswer: 0,
  explanation: "Hyperparathyroidism raises blood calcium levels, promoting stone formation."
},
{
  id: 'kidney-213',
  question: "Why are small kidney stones sometimes left untreated?",
  options: ["They can pass naturally", "They dissolve instantly", "They improve GFR", "They protect against infections"],
  correctAnswer: 0,
  explanation: "Small stones often pass naturally with increased fluid intake."
},
{
  id: 'kidney-214',
  question: "Which pain medication is often used in kidney stone patients?",
  options: ["NSAIDs", "Antibiotics", "Insulin", "Anticoagulants"],
  correctAnswer: 0,
  explanation: "NSAIDs help control the severe pain of renal colic."
},
{
  id: 'kidney-215',
  question: "Which type of urine favors cystine stone formation?",
  options: ["Acidic urine", "Alkaline urine", "Neutral urine", "Dilute urine"],
  correctAnswer: 0,
  explanation: "Cystine stones typically form in acidic urine."
},
{
  id: 'kidney-216',
  question: "What lifestyle measure helps prevent uric acid stones?",
  options: ["Low-purine diet", "High salt intake", "Excessive vitamin C", "Low water intake"],
  correctAnswer: 0,
  explanation: "A diet low in purines prevents uric acid buildup."
},
{
  id: 'kidney-217',
  question: "Which condition worsens uric acid stone risk?",
  options: ["Gout", "Asthma", "Tuberculosis", "Hypertension"],
  correctAnswer: 0,
  explanation: "Gout increases uric acid levels, raising risk of uric acid stones."
},
{
  id: 'kidney-218',
  question: "What is a common long-term complication of recurrent stones?",
  options: ["Chronic kidney disease", "Liver cirrhosis", "Diabetes", "Asthma"],
  correctAnswer: 0,
  explanation: "Recurrent stones damage nephrons and may lead to chronic kidney disease."
},
{
  id: 'kidney-219',
  question: "Which population is at higher risk for struvite stones?",
  options: ["Women with recurrent UTIs", "Men with gout", "Children with asthma", "Elderly with hypertension"],
  correctAnswer: 0,
  explanation: "Struvite stones commonly occur in women with frequent urinary tract infections."
},
{
  id: 'kidney-220',
  question: "What is the main preventive measure against all types of kidney stones?",
  options: ["Adequate water intake", "Low fat diet", "Excess vitamin supplements", "Low calorie diet"],
  correctAnswer: 0,
  explanation: "Hydration helps dilute urine and prevent all stone types."
},
{
  id: 'kidney-121',
  question: "Which of the following is a common cause of chronic kidney failure?",
  options: ["Diabetes mellitus", "Asthma", "Arthritis", "Anemia"],
  correctAnswer: 0,
  explanation: "Diabetes is a major long-term cause of chronic kidney failure."
},
{
  id: 'kidney-122',
  question: "High blood pressure causes kidney failure by:",
  options: ["Damaging blood vessels in kidneys", "Increasing urine volume", "Raising urea absorption", "Stimulating filtration rate"],
  correctAnswer: 0,
  explanation: "Hypertension damages renal capillaries, reducing kidney function."
},
{
  id: 'kidney-123',
  question: "Acute kidney failure is often due to:",
  options: ["Sudden loss of blood flow", "Gradual protein loss", "Increased filtration rate", "Normal dehydration"],
  correctAnswer: 0,
  explanation: "Acute kidney injury occurs from sudden reduction in blood flow."
},
{
  id: 'kidney-124',
  question: "Which infection can lead to kidney failure?",
  options: ["Glomerulonephritis", "Pneumonia", "Tuberculosis of lungs", "Skin rash"],
  correctAnswer: 0,
  explanation: "Glomerulonephritis causes inflammation of kidney filters leading to damage."
},
{
  id: 'kidney-125',
  question: "Obstruction in urinary tract can cause kidney failure due to:",
  options: ["Back pressure on nephrons", "Increased oxygen supply", "Increased filtration rate", "Reduced salt loss"],
  correctAnswer: 0,
  explanation: "Obstructions create back pressure, impairing kidney function."
},
{
  id: 'kidney-126',
  question: "Long-term use of which drugs can damage kidneys?",
  options: ["NSAIDs", "Antibiotics", "Painkillers", "All of these"],
  correctAnswer: 3,
  explanation: "Prolonged use of NSAIDs, some antibiotics, and analgesics causes nephrotoxicity."
},
{
  id: 'kidney-127',
  question: "Polycystic kidney disease leads to failure because:",
  options: ["Cysts replace normal tissue", "Kidneys enlarge for filtration", "Nephrons multiply excessively", "Renal arteries dilate"],
  correctAnswer: 0,
  explanation: "Cysts gradually destroy normal nephron structure, leading to failure."
},
{
  id: 'kidney-128',
  question: "Which metabolic disorder commonly causes kidney failure?",
  options: ["Diabetes", "Asthma", "Rickets", "Hypothyroidism"],
  correctAnswer: 0,
  explanation: "High blood sugar damages kidney filters over time."
},
{
  id: 'kidney-129',
  question: "Which condition leads to prerenal kidney failure?",
  options: ["Severe dehydration", "Kidney stone", "Glomerulonephritis", "Polycystic kidney disease"],
  correctAnswer: 0,
  explanation: "Severe dehydration reduces renal blood flow, causing prerenal failure."
},
{
  id: 'kidney-130',
  question: "Postrenal kidney failure occurs due to:",
  options: ["Urinary obstruction", "Low blood supply", "Diabetes", "Hypertension"],
  correctAnswer: 0,
  explanation: "Blockage of urine outflow causes postrenal kidney failure."
},
{
  id: 'kidney-131',
  question: "Which occupational hazard increases risk of kidney failure?",
  options: ["Lead poisoning", "Sunlight exposure", "Noise pollution", "Dust inhalation"],
  correctAnswer: 0,
  explanation: "Heavy metal poisoning damages kidney tissues."
},
{
  id: 'kidney-132',
  question: "Sepsis can cause kidney failure because:",
  options: ["Toxins damage nephrons", "It increases oxygen supply", "It lowers body temperature", "It increases blood sugar"],
  correctAnswer: 0,
  explanation: "Severe infections release toxins that damage kidney tissues."
},
{
  id: 'kidney-133',
  question: "Which autoimmune disease can cause kidney failure?",
  options: ["Lupus nephritis", "Asthma", "Psoriasis", "Arthritis"],
  correctAnswer: 0,
  explanation: "Lupus causes inflammation and scarring in kidneys."
},
{
  id: 'kidney-134',
  question: "Kidney failure due to shock is classified as:",
  options: ["Prerenal failure", "Postrenal failure", "Chronic failure", "Congenital failure"],
  correctAnswer: 0,
  explanation: "Shock reduces blood supply, causing prerenal failure."
},
{
  id: 'kidney-135',
  question: "Long-standing urinary infections may result in:",
  options: ["Chronic kidney failure", "Improved filtration", "Increased urine output", "Stronger nephrons"],
  correctAnswer: 0,
  explanation: "Repeated infections scar kidneys and lead to chronic failure."
},
{
  id: 'kidney-136',
  question: "Which lifestyle factor increases kidney failure risk?",
  options: ["Smoking", "Low water intake", "High salt diet", "All of these"],
  correctAnswer: 3,
  explanation: "Smoking, dehydration, and high salt increase kidney strain."
},
{
  id: 'kidney-137',
  question: "Kidney failure due to blockage of renal arteries is called:",
  options: ["Renal artery stenosis", "Nephritis", "Cystic degeneration", "Glomerular expansion"],
  correctAnswer: 0,
  explanation: "Renal artery narrowing reduces perfusion and causes failure."
},
{
  id: 'kidney-138',
  question: "Which hormone imbalance contributes to kidney failure?",
  options: ["Excess aldosterone", "Low insulin", "High thyroxine", "Low adrenaline"],
  correctAnswer: 0,
  explanation: "Excess aldosterone causes hypertension and kidney damage."
},
{
  id: 'kidney-139',
  question: "Prolonged kidney obstruction leads to:",
  options: ["Hydronephrosis", "Polyuria", "Increased reabsorption", "Increased GFR"],
  correctAnswer: 0,
  explanation: "Obstruction dilates renal pelvis and damages tissue (hydronephrosis)."
},
{
  id: 'kidney-140',
  question: "Which condition can cause congenital kidney failure?",
  options: ["Polycystic kidney disease", "Vitamin D deficiency", "Asthma", "Appendicitis"],
  correctAnswer: 0,
  explanation: "Polycystic kidney disease is an inherited cause of kidney failure."
},
{
  id: 'kidney-141',
  question: "Long-term uncontrolled hypertension leads to:",
  options: ["Nephrosclerosis", "Nephron multiplication", "Ureter dilation", "Improved GFR"],
  correctAnswer: 0,
  explanation: "Hypertension thickens and scars renal vessels, causing nephrosclerosis."
},
{
  id: 'kidney-142',
  question: "Which viral infection can contribute to kidney failure?",
  options: ["Hepatitis B", "Influenza", "Measles", "Rabies"],
  correctAnswer: 0,
  explanation: "Hepatitis B can cause immune-mediated glomerular damage."
},
{
  id: 'kidney-143',
  question: "Obstructive kidney failure may result from:",
  options: ["Kidney stones", "Tumors", "Prostate enlargement", "All of these"],
  correctAnswer: 3,
  explanation: "Any urinary obstruction can lead to kidney failure."
},
{
  id: 'kidney-144',
  question: "Which deficiency is linked with kidney failure risk?",
  options: ["Vitamin D", "Vitamin C", "Iron", "Iodine"],
  correctAnswer: 0,
  explanation: "Low vitamin D impairs calcium balance and worsens renal health."
},
{
  id: 'kidney-145',
  question: "Renal ischemia causes failure because:",
  options: ["Nephrons lack oxygen", "GFR increases", "Urea is reabsorbed", "Filtration is improved"],
  correctAnswer: 0,
  explanation: "Ischemia deprives nephrons of oxygen, leading to tissue death."
},
{
  id: 'kidney-146',
  question: "Kidney failure due to heavy alcohol intake is linked to:",
  options: ["Liver damage affecting kidneys", "Improved filtration", "Excess salt removal", "Vitamin C buildup"],
  correctAnswer: 0,
  explanation: "Liver-kidney interaction in alcoholism contributes to renal failure."
},
{
  id: 'kidney-147',
  question: "Which bacterial toxin can cause acute kidney failure?",
  options: ["E. coli toxin", "Salmonella toxin", "Clostridium toxin", "Diphtheria toxin"],
  correctAnswer: 0,
  explanation: "E. coli toxins can cause hemolytic uremic syndrome and renal failure."
},
{
  id: 'kidney-148',
  question: "Renal papillary necrosis is often caused by:",
  options: ["Prolonged analgesic use", "Vitamin D deficiency", "High water intake", "Exercise"],
  correctAnswer: 0,
  explanation: "Overuse of analgesics damages renal papillae, causing necrosis."
},
{
  id: 'kidney-149',
  question: "Which systemic disease often leads to kidney failure?",
  options: ["Hypertension", "Asthma", "Tuberculosis", "Arthritis"],
  correctAnswer: 0,
  explanation: "Hypertension is a leading cause of chronic renal failure."
},
{
  id: 'kidney-150',
  question: "Which kidney condition is most linked to autoimmune disorders?",
  options: ["Glomerulonephritis", "Hydronephrosis", "Kidney stones", "Pyelonephritis"],
  correctAnswer: 0,
  explanation: "Glomerulonephritis can result from autoimmune conditions."
},
{
  id: 'kidney-151',
  question: "Injury-induced kidney failure is classified as:",
  options: ["Acute renal failure", "Chronic renal failure", "Postrenal failure", "Congenital failure"],
  correctAnswer: 0,
  explanation: "Physical trauma can cause acute renal failure."
},
{
  id: 'kidney-152',
  question: "Which cancer may lead to kidney failure?",
  options: ["Prostate cancer", "Skin cancer", "Lung cancer", "Oral cancer"],
  correctAnswer: 0,
  explanation: "Prostate cancer blocks urinary flow, leading to renal damage."
},
{
  id: 'kidney-153',
  question: "Excess protein in urine indicates:",
  options: ["Glomerular damage", "Improved filtration", "Dehydration", "Tubular dilation"],
  correctAnswer: 0,
  explanation: "Proteinuria is a sign of kidney filter damage."
},
{
  id: 'kidney-154',
  question: "Kidney failure due to immune system attack is seen in:",
  options: ["Goodpasture’s syndrome", "Asthma", "Hypertension", "Rickets"],
  correctAnswer: 0,
  explanation: "Goodpasture’s syndrome damages glomerular basement membranes."
},
{
  id: 'kidney-155',
  question: "Which toxic habit strongly increases risk of renal failure?",
  options: ["Smoking", "Excess tea", "Eating fruits", "Sun exposure"],
  correctAnswer: 0,
  explanation: "Smoking increases kidney stress and accelerates failure."
},
{
  id: 'kidney-156',
  question: "Chronic pyelonephritis can cause:",
  options: ["Permanent kidney failure", "Increased GFR", "Thicker ureters", "Better filtration"],
  correctAnswer: 0,
  explanation: "Long-term kidney infection damages tissue permanently."
},
{
  id: 'kidney-157',
  question: "What is a common postrenal cause of kidney failure in elderly men?",
  options: ["Prostate enlargement", "Asthma", "Arthritis", "Hernia"],
  correctAnswer: 0,
  explanation: "Benign prostatic hypertrophy causes urinary obstruction."
},
{
  id: 'kidney-158',
  question: "Which habit reduces kidney failure risk?",
  options: ["Drinking water regularly", "High salt diet", "Smoking", "Overuse of analgesics"],
  correctAnswer: 0,
  explanation: "Adequate hydration helps maintain kidney function."
},
{
  id: 'kidney-159',
  question: "Sudden drop in blood pressure during surgery may cause:",
  options: ["Acute kidney failure", "Chronic kidney failure", "Postrenal failure", "Congenital failure"],
  correctAnswer: 0,
  explanation: "Low blood pressure reduces perfusion, causing acute failure."
},
{
  id: 'kidney-160',
  question: "Kidney failure due to stones is classified as:",
  options: ["Postrenal failure", "Prerenal failure", "Chronic failure", "Congenital failure"],
  correctAnswer: 0,
  explanation: "Stones obstruct urine flow, leading to postrenal failure."
},
{
  id: 'kidney-161',
  question: "Kidney failure due to untreated diabetes is due to:",
  options: ["Diabetic nephropathy", "Hydronephrosis", "Glomerulonephritis", "Nephrosclerosis"],
  correctAnswer: 0,
  explanation: "Diabetic nephropathy damages glomeruli over time."
},
{
  id: 'kidney-162',
  question: "Prolonged starvation may cause kidney failure due to:",
  options: ["Protein breakdown products", "Improved GFR", "Low urine output", "Salt retention"],
  correctAnswer: 0,
  explanation: "Excess protein breakdown products accumulate and harm kidneys."
},
{
  id: 'kidney-163',
  question: "Which common childhood disease can cause kidney damage?",
  options: ["Streptococcal infection", "Asthma", "Measles", "Mumps"],
  correctAnswer: 0,
  explanation: "Post-streptococcal infection can lead to glomerulonephritis."
},
{
  id: 'kidney-164',
  question: "Which part of nephron is most affected in glomerulonephritis?",
  options: ["Glomerulus", "Loop of Henle", "Collecting duct", "Distal tubule"],
  correctAnswer: 0,
  explanation: "Glomerulonephritis primarily damages glomeruli."
},
{
  id: 'kidney-165',
  question: "Which electrolyte imbalance is common in kidney failure?",
  options: ["High potassium", "Low calcium", "Low sodium", "High iodine"],
  correctAnswer: 0,
  explanation: "Kidney failure causes potassium retention (hyperkalemia)."
},
{
  id: 'kidney-166',
  question: "Why does anemia occur in kidney failure?",
  options: ["Reduced erythropoietin production", "Increased blood loss", "Bone marrow suppression", "Iron overload"],
  correctAnswer: 0,
  explanation: "Damaged kidneys cannot produce enough erythropoietin."
},
{
  id: 'kidney-167',
  question: "Which food habit worsens kidney failure risk?",
  options: ["Excess salt intake", "Moderate water intake", "Balanced protein", "Fresh fruits"],
  correctAnswer: 0,
  explanation: "High salt worsens hypertension and damages kidneys."
},
{
  id: 'kidney-168',
  question: "Chronic kidney failure is characterized by:",
  options: ["Gradual loss of nephron function", "Sudden blockage of urine", "Temporary dehydration", "Acute trauma"],
  correctAnswer: 0,
  explanation: "It involves progressive, long-term nephron damage."
},
{
  id: 'kidney-169',
  question: "Which disease strongly increases the risk of renal artery stenosis?",
  options: ["Atherosclerosis", "Tuberculosis", "Pneumonia", "Mumps"],
  correctAnswer: 0,
  explanation: "Atherosclerosis narrows renal arteries, reducing blood supply."
},
{
  id: 'kidney-170',
  question: "What is the ultimate result of untreated kidney failure?",
  options: ["End-stage renal disease", "Improved GFR", "Increased urine volume", "Kidney enlargement"],
  correctAnswer: 0,
  explanation: "Untreated failure progresses to ESRD requiring dialysis or transplant."
},
{
  id: 'kidney-171',
  question: "What are kidney stones medically called?",
  options: ["Nephrolithiasis", "Nephritis", "Cystitis", "Glomerulonephritis"],
  correctAnswer: 0,
  explanation: "Kidney stones are also known as nephrolithiasis."
},
{
  id: 'kidney-172',
  question: "Which mineral compound most commonly forms kidney stones?",
  options: ["Calcium oxalate", "Sodium chloride", "Potassium bicarbonate", "Magnesium sulfate"],
  correctAnswer: 0,
  explanation: "Most kidney stones are made of calcium oxalate crystals."
},
{
  id: 'kidney-173',
  question: "Which factor increases the risk of kidney stone formation?",
  options: ["Dehydration", "Excess water intake", "Low salt diet", "High carbohydrate diet"],
  correctAnswer: 0,
  explanation: "Dehydration concentrates urine and promotes crystal formation."
},
{
  id: 'kidney-174',
  question: "Pain caused by kidney stones is known as:",
  options: ["Renal colic", "Peritonitis", "Neuralgia", "Muscle spasm"],
  correctAnswer: 0,
  explanation: "Severe flank pain from kidney stones is called renal colic."
},
{
  id: 'kidney-175',
  question: "Which of the following is a symptom of kidney stones?",
  options: ["Fever only", "Sharp flank pain and blood in urine", "Skin rash", "Loss of vision"],
  correctAnswer: 1,
  explanation: "Typical symptoms include sharp pain and hematuria."
},
{
  id: 'kidney-176',
  question: "Excess intake of which nutrient can increase kidney stone risk?",
  options: ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin K"],
  correctAnswer: 1,
  explanation: "High vitamin C intake increases oxalate formation leading to stones."
},
{
  id: 'kidney-177',
  question: "Which type of kidney stones are associated with urinary tract infections?",
  options: ["Uric acid stones", "Struvite stones", "Cystine stones", "Calcium oxalate stones"],
  correctAnswer: 1,
  explanation: "Struvite stones form due to chronic UTIs caused by urease-producing bacteria."
},
{
  id: 'kidney-178',
  question: "Family history of kidney stones increases risk because of:",
  options: ["Genetic predisposition", "Blood type", "Infections", "Nutrient deficiency"],
  correctAnswer: 0,
  explanation: "Genetic factors can predispose individuals to stone formation."
},
{
  id: 'kidney-179',
  question: "Which diagnostic test is most commonly used for kidney stones?",
  options: ["X-ray KUB", "Ultrasound", "CT scan", "MRI"],
  correctAnswer: 2,
  explanation: "Non-contrast CT scan is the most accurate test for detecting stones."
},
{
  id: 'kidney-180',
  question: "Which lifestyle change helps prevent kidney stones?",
  options: ["Drinking plenty of water", "Reducing physical activity", "Avoiding protein", "Skipping meals"],
  correctAnswer: 0,
  explanation: "Adequate hydration dilutes urine and prevents stone formation."
},
{
  id: 'kidney-181',
  question: "Which metabolic disorder is linked to uric acid stones?",
  options: ["Diabetes mellitus", "Gout", "Hypertension", "Anemia"],
  correctAnswer: 1,
  explanation: "Gout causes elevated uric acid, increasing risk of uric acid stones."
},
{
  id: 'kidney-182',
  question: "Which food can increase oxalate levels and stone risk?",
  options: ["Spinach", "Apples", "Rice", "Bananas"],
  correctAnswer: 0,
  explanation: "Spinach contains high oxalate content, increasing stone risk."
},
{
  id: 'kidney-183',
  question: "Cystine stones are caused by:",
  options: ["Genetic defect in amino acid transport", "High calcium intake", "Vitamin C deficiency", "Urinary infection"],
  correctAnswer: 0,
  explanation: "Cystinuria, a genetic disorder, leads to cystine stone formation."
},
{
  id: 'kidney-184',
  question: "Which symptom differentiates kidney stones from urinary infections?",
  options: ["Burning urination", "Severe colicky flank pain", "Frequent urination", "Cloudy urine"],
  correctAnswer: 1,
  explanation: "Severe colicky pain is characteristic of kidney stones."
},
{
  id: 'kidney-185',
  question: "Lithotripsy is a treatment that:",
  options: ["Surgically removes kidney", "Uses shock waves to break stones", "Dissolves stones chemically", "Prevents infection"],
  correctAnswer: 1,
  explanation: "Extracorporeal shock wave lithotripsy (ESWL) breaks stones into small pieces."
},
{
  id: 'kidney-186',
  question: "Which size of kidney stone is most likely to pass naturally?",
  options: ["<5 mm", "5–10 mm", "10–20 mm", ">20 mm"],
  correctAnswer: 0,
  explanation: "Stones smaller than 5 mm usually pass on their own."
},
{
  id: 'kidney-187',
  question: "Which medicine is used to prevent uric acid stone formation?",
  options: ["Allopurinol", "Antibiotics", "Calcium tablets", "Diuretics"],
  correctAnswer: 0,
  explanation: "Allopurinol lowers uric acid levels and prevents uric acid stones."
},
{
  id: 'kidney-188',
  question: "A patient with recurrent calcium stones should avoid:",
  options: ["Low water intake", "High salt and high oxalate foods", "Milk only", "Protein supplements only"],
  correctAnswer: 1,
  explanation: "High salt and oxalate-rich foods promote calcium oxalate stones."
},
{
  id: 'kidney-189',
  question: "Which condition increases the risk of calcium phosphate stones?",
  options: ["Hyperparathyroidism", "Hypothyroidism", "Hypertension", "Asthma"],
  correctAnswer: 0,
  explanation: "Overactive parathyroid glands increase calcium levels, causing stones."
},
{
  id: 'kidney-190',
  question: "Why does dehydration cause kidney stones?",
  options: ["Concentrated urine favors crystal formation", "It dilutes solutes", "It increases blood calcium", "It increases kidney size"],
  correctAnswer: 0,
  explanation: "Dehydration leads to concentrated urine, allowing crystals to form."
},
{
  id: 'kidney-171',
  question: "What are kidney stones primarily composed of?",
  options: ["Calcium salts", "Lipids", "Proteins", "Glucose crystals"],
  correctAnswer: 0,
  explanation: "Most kidney stones are composed of calcium oxalate or calcium phosphate."
},
{
  id: 'kidney-172',
  question: "Which of the following is a major cause of kidney stone formation?",
  options: ["Dehydration", "Low protein intake", "Excessive sleep", "Viral infection"],
  correctAnswer: 0,
  explanation: "Dehydration concentrates urine, increasing the risk of stone formation."
},
{
  id: 'kidney-173',
  question: "High intake of which compound increases the risk of uric acid stones?",
  options: ["Purines", "Lipids", "Vitamin D", "Starch"],
  correctAnswer: 0,
  explanation: "Purines from red meat and seafood increase uric acid concentration, promoting stones."
},
{
  id: 'kidney-174',
  question: "Which symptom is most common in patients with kidney stones?",
  options: ["Severe flank pain", "Coughing", "Blurred vision", "Skin rashes"],
  correctAnswer: 0,
  explanation: "Kidney stones cause sharp flank pain, often radiating to the groin."
},
{
  id: 'kidney-175',
  question: "Which diagnostic tool is most accurate for detecting kidney stones?",
  options: ["CT scan", "Ultrasound", "X-ray", "Blood test"],
  correctAnswer: 0,
  explanation: "CT scan without contrast is the most accurate diagnostic method."
},
{
  id: 'kidney-176',
  question: "What role does citrate play in preventing kidney stones?",
  options: ["Inhibits crystal formation", "Increases calcium absorption", "Causes dehydration", "Stimulates uric acid production"],
  correctAnswer: 0,
  explanation: "Citrate binds calcium and prevents crystal aggregation."
},
{
  id: 'kidney-177',
  question: "Which dietary change helps reduce the risk of calcium oxalate stones?",
  options: ["Reduce oxalate-rich foods", "Increase salt intake", "Reduce water intake", "Avoid vitamin C"],
  correctAnswer: 0,
  explanation: "Reducing foods high in oxalates (like spinach) lowers stone risk."
},
{
  id: 'kidney-178',
  question: "Which treatment is commonly used for large kidney stones?",
  options: ["Lithotripsy", "Antibiotics", "Chemotherapy", "Insulin injection"],
  correctAnswer: 0,
  explanation: "Lithotripsy uses shock waves to break large stones into smaller fragments."
},
{
  id: 'kidney-179',
  question: "Struvite stones are often associated with which condition?",
  options: ["Urinary tract infection", "Dehydration", "Diabetes", "Hypertension"],
  correctAnswer: 0,
  explanation: "Struvite stones form due to recurrent urinary tract infections with urease-producing bacteria."
},
{
  id: 'kidney-180',
  question: "Which vitamin, when taken in excess, can lead to kidney stone formation?",
  options: ["Vitamin C", "Vitamin A", "Vitamin K", "Vitamin B12"],
  correctAnswer: 0,
  explanation: "Excess vitamin C is metabolized to oxalate, increasing stone risk."
},
{
  id: 'kidney-181',
  question: "Kidney stones cause hematuria because:",
  options: ["They damage urinary tract lining", "They increase blood pressure", "They reduce filtration rate", "They increase plasma volume"],
  correctAnswer: 0,
  explanation: "Sharp stones can scrape and injure urinary tract tissues, causing blood in urine."
},
{
  id: 'kidney-182',
  question: "Which factor reduces the chance of kidney stone recurrence?",
  options: ["Adequate hydration", "High protein diet", "Sedentary lifestyle", "Low fluid intake"],
  correctAnswer: 0,
  explanation: "Drinking sufficient water dilutes urine and prevents stone formation."
},
{
  id: 'kidney-183',
  question: "Which of the following stones are radiolucent (not visible on X-ray)?",
  options: ["Uric acid stones", "Calcium oxalate stones", "Struvite stones", "Cystine stones"],
  correctAnswer: 0,
  explanation: "Uric acid stones are radiolucent and often missed on X-ray."
},
{
  id: 'kidney-184',
  question: "Which surgical method removes very large or complex kidney stones?",
  options: ["Percutaneous nephrolithotomy", "Dialysis", "Appendectomy", "Endoscopy"],
  correctAnswer: 0,
  explanation: "Percutaneous nephrolithotomy involves surgical removal of large stones."
},
{
  id: 'kidney-185',
  question: "Excessive salt intake promotes kidney stone formation by:",
  options: ["Increasing calcium excretion", "Reducing water absorption", "Increasing citrate levels", "Inhibiting uric acid"],
  correctAnswer: 0,
  explanation: "High salt increases calcium excretion in urine, promoting stones."
},
{
  id: 'kidney-186',
  question: "Which gender is generally more prone to kidney stones?",
  options: ["Males", "Females", "Both equally", "Children only"],
  correctAnswer: 0,
  explanation: "Males are more frequently affected due to dietary and metabolic factors."
},
{
  id: 'kidney-187',
  question: "Which lifestyle habit increases kidney stone risk?",
  options: ["Low water intake", "Regular exercise", "Adequate sleep", "Balanced diet"],
  correctAnswer: 0,
  explanation: "Low water intake leads to concentrated urine, increasing risk."
},
{
  id: 'kidney-188',
  question: "Which condition increases the risk of cystine stones?",
  options: ["Genetic defect in amino acid transport", "Diabetes", "Obesity", "Vitamin deficiency"],
  correctAnswer: 0,
  explanation: "Cystinuria, a genetic disorder, causes cystine accumulation leading to stones."
},
{
  id: 'kidney-189',
  question: "Why is pain intermittent during kidney stone movement?",
  options: ["Stones move along ureter", "Blood pressure fluctuates", "Urine is alkaline", "Nerves adapt quickly"],
  correctAnswer: 0,
  explanation: "Pain occurs as stones intermittently block ureteral flow."
},
{
  id: 'kidney-190',
  question: "Which of the following is NOT a preventive measure for kidney stones?",
  options: ["High salt diet", "Hydration", "Balanced calcium intake", "Limiting oxalate-rich food"],
  correctAnswer: 0,
  explanation: "High salt intake promotes calcium excretion and increases stone risk."
},
{
  id: 'kidney-191',
  question: "What is the role of potassium citrate in stone prevention?",
  options: ["Alkalinizes urine", "Increases protein absorption", "Stimulates oxalate production", "Blocks uric acid metabolism"],
  correctAnswer: 0,
  explanation: "Potassium citrate alkalinizes urine, preventing uric acid and cystine stones."
},
{
  id: 'kidney-192',
  question: "Which condition favors formation of uric acid stones?",
  options: ["Acidic urine", "Alkaline urine", "Dilute urine", "Neutral urine"],
  correctAnswer: 0,
  explanation: "Uric acid stones form in persistently acidic urine."
},
{
  id: 'kidney-193',
  question: "Which test can confirm hematuria in kidney stone patients?",
  options: ["Urine analysis", "ECG", "Liver function test", "Spirometry"],
  correctAnswer: 0,
  explanation: "Urine analysis detects presence of red blood cells in urine."
},
{
  id: 'kidney-194',
  question: "Which factor is least likely to cause kidney stones?",
  options: ["Low protein diet", "Dehydration", "Excess oxalate intake", "High salt diet"],
  correctAnswer: 0,
  explanation: "Low protein diet does not increase stone risk."
},
{
  id: 'kidney-195',
  question: "Which treatment uses sound waves to break kidney stones?",
  options: ["Extracorporeal shock wave lithotripsy", "Dialysis", "Surgery", "Chemotherapy"],
  correctAnswer: 0,
  explanation: "Shock wave lithotripsy breaks stones into passable fragments."
},
{
  id: 'kidney-196',
  question: "What is the main danger of untreated kidney stones?",
  options: ["Blockage of urinary tract", "Improved urine flow", "Reduced urination frequency", "Increased blood pH"],
  correctAnswer: 0,
  explanation: "Stones can obstruct urine flow and damage kidneys."
},
{
  id: 'kidney-197',
  question: "Which mineral is most often involved in kidney stones?",
  options: ["Calcium", "Iron", "Magnesium", "Zinc"],
  correctAnswer: 0,
  explanation: "About 80% of stones are calcium-based."
},
{
  id: 'kidney-198',
  question: "What is the initial treatment for small kidney stones?",
  options: ["Increased fluid intake", "Immediate surgery", "Chemotherapy", "Blood transfusion"],
  correctAnswer: 0,
  explanation: "Small stones often pass naturally with adequate hydration."
},
{
  id: 'kidney-199',
  question: "Which urine condition promotes calcium oxalate stone formation?",
  options: ["Concentrated and acidic urine", "Dilute and neutral urine", "Alkaline urine", "Neutral and dilute urine"],
  correctAnswer: 0,
  explanation: "Concentrated and acidic urine favors calcium oxalate stone growth."
},
{
  id: 'kidney-200',
  question: "Why do recurrent kidney stones require metabolic evaluation?",
  options: ["To identify underlying abnormalities", "To check heart rate", "To assess lung function", "To monitor brain activity"],
  correctAnswer: 0,
  explanation: "Recurrent stones may indicate underlying metabolic or genetic disorders."
},
{
  id: 'kidney-201',
  question: "Which organ is most directly affected by kidney stones?",
  options: ["Kidney", "Liver", "Pancreas", "Lungs"],
  correctAnswer: 0,
  explanation: "Kidney stones originate and cause damage within the kidneys."
},
{
  id: 'kidney-202',
  question: "In which condition are calcium phosphate stones more common?",
  options: ["Alkaline urine", "Acidic urine", "Neutral urine", "Dilute urine"],
  correctAnswer: 0,
  explanation: "Calcium phosphate stones form in alkaline urine."
},
{
  id: 'kidney-203',
  question: "Which factor is most important in stone prevention?",
  options: ["Adequate hydration", "High protein intake", "Low calcium intake", "Sedentary lifestyle"],
  correctAnswer: 0,
  explanation: "Hydration is the single most important preventive measure."
},
{
  id: 'kidney-204',
  question: "Which enzyme-producing bacteria cause struvite stones?",
  options: ["Urease-producing bacteria", "Amylase-producing bacteria", "Protease-producing bacteria", "Lipase-producing bacteria"],
  correctAnswer: 0,
  explanation: "Urease-producing bacteria increase ammonia, leading to struvite stones."
},
{
  id: 'kidney-205',
  question: "Which dietary habit may increase oxalate stones?",
  options: ["Excess spinach intake", "High banana intake", "High wheat intake", "High protein intake"],
  correctAnswer: 0,
  explanation: "Spinach is rich in oxalates, predisposing to stone formation."
},
{
  id: 'kidney-206',
  question: "What is the first symptom of kidney stones in many cases?",
  options: ["Severe back pain", "Fever", "Swelling in legs", "Jaundice"],
  correctAnswer: 0,
  explanation: "Renal colic (sharp back or flank pain) is the first symptom."
},
{
  id: 'kidney-207',
  question: "What is the mechanism of uric acid stone formation?",
  options: ["Excess uric acid crystallizes in acidic urine", "Excess glucose accumulates", "Excess calcium binds phosphate", "Dehydration produces cholesterol crystals"],
  correctAnswer: 0,
  explanation: "Uric acid stones form when urine is persistently acidic and concentrated."
},
{
  id: 'kidney-208',
  question: "Which procedure directly removes stones through urethra?",
  options: ["Ureteroscopy", "Appendectomy", "Dialysis", "Endoscopy"],
  correctAnswer: 0,
  explanation: "Ureteroscopy involves using a scope through the urethra to remove stones."
},
{
  id: 'kidney-209',
  question: "Which kidney stone complication may cause infection?",
  options: ["Urinary stasis", "Increased GFR", "High blood pH", "Reduced oxygen"],
  correctAnswer: 0,
  explanation: "Urinary stasis due to obstruction predisposes to infection."
},
{
  id: 'kidney-210',
  question: "Which stone type forms in genetic disorder cystinuria?",
  options: ["Cystine stones", "Calcium oxalate stones", "Uric acid stones", "Struvite stones"],
  correctAnswer: 0,
  explanation: "Cystine stones are linked with defective transport of cystine amino acid."
},
{
  id: 'kidney-211',
  question: "What is the main goal of kidney stone treatment?",
  options: ["Relieve obstruction and prevent recurrence", "Increase body weight", "Improve lung capacity", "Enhance vision"],
  correctAnswer: 0,
  explanation: "Treatment aims to clear blockage and stop new stone formation."
},
{
  id: 'kidney-212',
  question: "Which hormone imbalance increases calcium stone risk?",
  options: ["Hyperparathyroidism", "Hypothyroidism", "Insulin deficiency", "Growth hormone deficiency"],
  correctAnswer: 0,
  explanation: "Hyperparathyroidism raises blood calcium levels, promoting stone formation."
},
{
  id: 'kidney-213',
  question: "Why are small kidney stones sometimes left untreated?",
  options: ["They can pass naturally", "They dissolve instantly", "They improve GFR", "They protect against infections"],
  correctAnswer: 0,
  explanation: "Small stones often pass naturally with increased fluid intake."
},
{
  id: 'kidney-214',
  question: "Which pain medication is often used in kidney stone patients?",
  options: ["NSAIDs", "Antibiotics", "Insulin", "Anticoagulants"],
  correctAnswer: 0,
  explanation: "NSAIDs help control the severe pain of renal colic."
},
{
  id: 'kidney-215',
  question: "Which type of urine favors cystine stone formation?",
  options: ["Acidic urine", "Alkaline urine", "Neutral urine", "Dilute urine"],
  correctAnswer: 0,
  explanation: "Cystine stones typically form in acidic urine."
},
{
  id: 'kidney-216',
  question: "What lifestyle measure helps prevent uric acid stones?",
  options: ["Low-purine diet", "High salt intake", "Excessive vitamin C", "Low water intake"],
  correctAnswer: 0,
  explanation: "A diet low in purines prevents uric acid buildup."
},
{
  id: 'kidney-217',
  question: "Which condition worsens uric acid stone risk?",
  options: ["Gout", "Asthma", "Tuberculosis", "Hypertension"],
  correctAnswer: 0,
  explanation: "Gout increases uric acid levels, raising risk of uric acid stones."
},
{
  id: 'kidney-218',
  question: "What is a common long-term complication of recurrent stones?",
  options: ["Chronic kidney disease", "Liver cirrhosis", "Diabetes", "Asthma"],
  correctAnswer: 0,
  explanation: "Recurrent stones damage nephrons and may lead to chronic kidney disease."
},
{
  id: 'kidney-219',
  question: "Which population is at higher risk for struvite stones?",
  options: ["Women with recurrent UTIs", "Men with gout", "Children with asthma", "Elderly with hypertension"],
  correctAnswer: 0,
  explanation: "Struvite stones commonly occur in women with frequent urinary tract infections."
},
{
  id: 'kidney-220',
  question: "What is the main preventive measure against all types of kidney stones?",
  options: ["Adequate water intake", "Low fat diet", "Excess vitamin supplements", "Low calorie diet"],
  correctAnswer: 0,
  explanation: "Hydration helps dilute urine and prevent all stone types."
},
]
 
