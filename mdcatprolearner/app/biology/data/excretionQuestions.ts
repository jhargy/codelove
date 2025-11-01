export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}export const excretionQuestions = [
    {
  id: 'Nitrogen-1',
  question: "Which nitrogenous waste is the primary excretory product in humans?",
  options: ["Uric acid", "Ammonia", "Urea", "Creatinine"],
  correctAnswer: 2,
  explanation: "Humans excrete mainly urea, formed in the liver through the urea cycle."
},
{
  id: 'Nitrogen-2',
  question: "Which compound is the most toxic nitrogenous waste?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Ammonia is highly toxic and must be quickly converted into urea or uric acid."
},
{
  id: 'Nitrogen-3',
  question: "Birds and reptiles mainly excrete which nitrogenous compound?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Birds and reptiles are uricotelic, excreting uric acid as a paste to conserve water."
},
{
  id: 'Nitrogen-4',
  question: "Which nitrogenous compound gives urine its characteristic odor?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Urea breakdown produces ammonia, which gives urine its smell."
},
{
  id: 'Nitrogen-5',
  question: "Creatinine is formed as a byproduct of metabolism in which tissue?",
  options: ["Liver", "Kidney", "Muscle", "Pancreas"],
  correctAnswer: 2,
  explanation: "Creatinine is produced from creatine phosphate metabolism in muscles."
},
{
  id: 'Nitrogen-6',
  question: "Which waste product is produced in largest quantity in humans?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Urea is the dominant nitrogenous waste in humans."
},
{
  id: 'Nitrogen-7',
  question: "Ammonia excretion requires large amounts of what?",
  options: ["Oxygen", "Water", "Carbon dioxide", "Sodium"],
  correctAnswer: 1,
  explanation: "Ammonia is soluble and requires large volumes of water for safe excretion."
},
{
  id: 'Nitrogen-8',
  question: "Which nitrogenous waste is least soluble in water?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Uric acid is poorly soluble and precipitates easily, conserving water."
},
{
  id: 'Nitrogen-9',
  question: "Which nitrogenous compound is commonly measured to assess kidney function?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 3,
  explanation: "Creatinine levels in blood indicate the filtration efficiency of kidneys."
},
{
  id: 'Nitrogen-10',
  question: "The urea cycle occurs in which organ?",
  options: ["Kidney", "Liver", "Lungs", "Pancreas"],
  correctAnswer: 1,
  explanation: "The liver carries out the urea cycle to detoxify ammonia."
},
{
  id: 'Nitrogen-11',
  question: "Which nitrogenous waste is produced from nucleic acid metabolism?",
  options: ["Creatinine", "Uric acid", "Urea", "Ammonia"],
  correctAnswer: 1,
  explanation: "Purine metabolism produces uric acid as a nitrogenous waste."
},
{
  id: 'Nitrogen-12',
  question: "Fish mainly excrete nitrogen in the form of?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Most aquatic animals are ammonotelic and excrete ammonia directly into water."
},
{
  id: 'Nitrogen-13',
  question: "What percentage of nitrogenous waste in human urine is urea?",
  options: ["10%", "50%", "80-90%", "100%"],
  correctAnswer: 2,
  explanation: "Urea constitutes about 80-90% of nitrogenous wastes in human urine."
},
{
  id: 'Nitrogen-14',
  question: "Which nitrogenous compound is relatively non-toxic and soluble?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Urea is less toxic and water-soluble, making it safer for transport and excretion."
},
{
  id: 'Nitrogen-15',
  question: "Which nitrogenous compound is excreted in the smallest amount in humans?",
  options: ["Uric acid", "Creatinine", "Urea", "Ammonia"],
  correctAnswer: 0,
  explanation: "Uric acid is excreted in small amounts in humans as a result of nucleic acid breakdown."
},
{
  id: 'Nitrogen-16',
  question: "Which nitrogenous waste can crystallize and cause gout?",
  options: ["Ammonia", "Uric acid", "Urea", "Creatinine"],
  correctAnswer: 1,
  explanation: "High uric acid levels lead to urate crystals, causing gout."
},
{
  id: 'Nitrogen-17',
  question: "Which process converts ammonia to urea?",
  options: ["Uricotelism", "Ureotelism", "Amination", "Deamination"],
  correctAnswer: 1,
  explanation: "Ureotelism is the process by which ammonia is detoxified into urea."
},
{
  id: 'Nitrogen-18',
  question: "Ammonia is produced in the body mainly by?",
  options: ["Protein metabolism", "Fat metabolism", "Carbohydrate metabolism", "Vitamin metabolism"],
  correctAnswer: 0,
  explanation: "Deamination of amino acids releases ammonia as a waste product."
},
{
  id: 'Nitrogen-19',
  question: "Which compound is excreted through sweat as a minor nitrogenous waste?",
  options: ["Creatinine", "Urea", "Uric acid", "Ammonia"],
  correctAnswer: 1,
  explanation: "Urea is present in sweat in small quantities, contributing to nitrogen excretion."
},
{
  id: 'Nitrogen-20',
  question: "In mammals, nitrogenous wastes are primarily eliminated via?",
  options: ["Skin", "Lungs", "Kidneys", "Liver"],
  correctAnswer: 2,
  explanation: "Kidneys filter blood and remove nitrogenous wastes in urine."
},
{
  id: 'Nitrogen-21',
  question: "Which nitrogenous waste is excreted immediately by aquatic animals due to its toxicity?",
  options: ["Urea", "Uric acid", "Ammonia", "Creatinine"],
  correctAnswer: 2,
  explanation: "Ammonia is directly excreted into water by aquatic animals."
},
{
  id: 'Nitrogen-22',
  question: "Why do desert animals excrete uric acid instead of urea?",
  options: ["It is more toxic", "It conserves water", "It requires less energy", "It is more soluble"],
  correctAnswer: 1,
  explanation: "Uric acid requires minimal water for excretion, which helps conserve water in deserts."
},
{
  id: 'Nitrogen-23',
  question: "Which of the following is not a nitrogenous waste?",
  options: ["Urea", "Carbon dioxide", "Creatinine", "Uric acid"],
  correctAnswer: 1,
  explanation: "Carbon dioxide is a respiratory waste, not a nitrogenous waste."
},
{
  id: 'Nitrogen-24',
  question: "The presence of high urea in blood is called?",
  options: ["Uremia", "Anemia", "Glycosuria", "Hematuria"],
  correctAnswer: 0,
  explanation: "Uremia is the accumulation of urea in the blood due to kidney failure."
},
{
  id: 'Nitrogen-25',
  question: "Which nitrogenous compound is excreted by insects?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Insects conserve water by excreting uric acid as solid waste."
},
{
  id: 'Nitrogen-26',
  question: "Which nitrogenous waste is a byproduct of creatine phosphate breakdown?",
  options: ["Creatinine", "Urea", "Ammonia", "Uric acid"],
  correctAnswer: 0,
  explanation: "Creatinine results from creatine phosphate breakdown in muscle tissues."
},
{
  id: 'Nitrogen-27',
  question: "Excessive uric acid in blood is termed?",
  options: ["Hyperuricemia", "Uremia", "Acidosis", "Alkalosis"],
  correctAnswer: 0,
  explanation: "Hyperuricemia is elevated uric acid levels, often leading to gout."
},
{
  id: 'Nitrogen-28',
  question: "Which nitrogenous waste requires the least water for excretion?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Uric acid is excreted as a paste, conserving maximum water."
},
{
  id: 'Nitrogen-29',
  question: "Which nitrogenous waste gives urine its yellow color?",
  options: ["Uric acid", "Urobilinogen", "Creatinine", "Ammonia"],
  correctAnswer: 1,
  explanation: "Urobilinogen, derived from hemoglobin breakdown, imparts yellow color to urine."
},
{
  id: 'Nitrogen-30',
  question: "What is the main advantage of urea over ammonia?",
  options: ["More toxic", "Less soluble", "Less toxic and easily transported", "Requires more water"],
  correctAnswer: 2,
  explanation: "Urea is less toxic and soluble, making it safe for transport in blood."
},
{
  id: 'Nitrogen-31',
  question: "Which group of animals are ammonotelic?",
  options: ["Amphibians", "Birds", "Mammals", "Reptiles"],
  correctAnswer: 0,
  explanation: "Amphibians primarily excrete nitrogen as ammonia."
},
{
  id: 'Nitrogen-32',
  question: "Which nitrogenous waste is an indicator of muscle metabolism?",
  options: ["Uric acid", "Creatinine", "Ammonia", "Urea"],
  correctAnswer: 1,
  explanation: "Creatinine directly reflects muscle metabolism rate."
},
{
  id: 'Nitrogen-33',
  question: "Which nitrogenous compound is excreted through both urine and feces in small amounts?",
  options: ["Uric acid", "Ammonia", "Urea", "Creatinine"],
  correctAnswer: 0,
  explanation: "Some uric acid is eliminated in feces in addition to urine."
},
{
  id: 'Nitrogen-34',
  question: "Which organ converts ammonia to urea?",
  options: ["Kidney", "Pancreas", "Liver", "Stomach"],
  correctAnswer: 2,
  explanation: "The liver detoxifies ammonia into urea for safe excretion."
},
{
  id: 'Nitrogen-35',
  question: "In humans, minor nitrogenous wastes other than urea include?",
  options: ["Creatinine and uric acid", "Glucose and fatty acids", "Carbon dioxide and bile", "Oxygen and nitrogen gas"],
  correctAnswer: 0,
  explanation: "Creatinine and uric acid are excreted in small amounts along with urea."
},
{
  id: 'Nitrogen-36',
  question: "Which nitrogenous waste is linked to kidney stones when crystallized?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Uric acid crystals can accumulate and form kidney stones."
},
{
  id: 'Nitrogen-37',
  question: "Which nitrogenous compound is excreted via urine as well as sweat?",
  options: ["Urea", "Ammonia", "Creatinine", "Uric acid"],
  correctAnswer: 0,
  explanation: "Urea appears in both urine and sweat in small amounts."
},
{
  id: 'Nitrogen-38',
  question: "Which waste forms the white paste-like excretion of birds?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Bird droppings contain uric acid as the major nitrogenous waste."
},
{
  id: 'Nitrogen-39',
  question: "In which form is nitrogen excreted by amphibians during their aquatic stage?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Aquatic amphibians excrete ammonia directly into the surrounding water."
},
{
  id: 'Nitrogen-40',
  question: "Which nitrogenous waste is formed continuously and excreted in urine daily?",
  options: ["Ammonia", "Uric acid", "Urea", "Creatinine"],
  correctAnswer: 3,
  explanation: "Creatinine is produced steadily by muscles and excreted daily in urine."
},
{
  id: 'Nitrogen-41',
  question: "Which compound is responsible for the pungent smell of stale urine?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 2,
  explanation: "Urea breaks down into ammonia, causing a pungent odor in stale urine."
},
{
  id: 'Nitrogen-42',
  question: "What is the condition when uric acid precipitates in joints?",
  options: ["Arthritis", "Gout", "Rickets", "Uremia"],
  correctAnswer: 1,
  explanation: "Deposition of uric acid crystals in joints leads to gout."
},
{
  id: 'Nitrogen-43',
  question: "Why is urea considered safer than ammonia for excretion?",
  options: ["It is less soluble", "It is less toxic", "It is more toxic", "It requires more energy"],
  correctAnswer: 1,
  explanation: "Urea is less toxic than ammonia, allowing safe transport in blood."
},
{
  id: 'Nitrogen-44',
  question: "Which excretory waste arises from purine metabolism?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 2,
  explanation: "Purines are broken down into uric acid for excretion."
},
{
  id: 'Nitrogen-45',
  question: "Which nitrogenous waste is found in highest concentration in urine?",
  options: ["Creatinine", "Urea", "Uric acid", "Ammonia"],
  correctAnswer: 1,
  explanation: "Urea makes up the largest proportion of nitrogenous waste in urine."
},
{
  id: 'Nitrogen-46',
  question: "Which nitrogenous waste is excreted in trace amounts through lungs?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Small amounts of ammonia can diffuse out through the lungs."
},
{
  id: 'Nitrogen-47',
  question: "Excretion of nitrogenous wastes is essential to maintain?",
  options: ["pH balance", "Temperature", "Blood glucose", "Blood clotting"],
  correctAnswer: 0,
  explanation: "Excretion of nitrogenous wastes helps maintain acid-base balance."
},
{
  id: 'Nitrogen-48',
  question: "Which of the following is a nitrogenous waste excreted in urine?",
  options: ["Glucose", "Bile salts", "Creatinine", "Lactic acid"],
  correctAnswer: 2,
  explanation: "Creatinine is a normal nitrogenous waste present in urine."
},
{
  id: 'Nitrogen-49',
  question: "Which nitrogenous compound in urine arises from amino acid breakdown?",
  options: ["Uric acid", "Urea", "Creatinine", "Ammonia"],
  correctAnswer: 1,
  explanation: "Urea is the chief product of amino acid deamination."
},
{
  id: 'Nitrogen-50',
  question: "Which nitrogenous waste requires the least toxic management?",
  options: ["Uric acid", "Urea", "Creatinine", "Ammonia"],
  correctAnswer: 1,
  explanation: "Urea is relatively non-toxic, so it requires minimal detoxification management."
},
{
  id: 'Nitrogen-51',
  question: "Which nitrogenous compound is excreted in the smallest amount in humans?",
  options: ["Uric acid", "Ammonia", "Urea", "Creatinine"],
  correctAnswer: 0,
  explanation: "Uric acid is excreted in smaller amounts compared to urea, but it is important in purine metabolism."
},
{
  id: 'Nitrogen-52',
  question: "Excess ammonia in the body is toxic because it?",
  options: ["Alters blood pH", "Provides energy", "Strengthens muscles", "Increases oxygen transport"],
  correctAnswer: 0,
  explanation: "Ammonia is alkaline and disrupts normal blood pH balance, leading to toxicity."
},
{
  id: 'Nitrogen-53',
  question: "What is the major route of nitrogen excretion in humans?",
  options: ["Urea formation", "Ammonia release", "Uric acid excretion", "Sweat"],
  correctAnswer: 0,
  explanation: "Most nitrogen is excreted through urea in the urine."
},
{
  id: 'Nitrogen-54',
  question: "Creatinine is primarily produced from?",
  options: ["Muscle metabolism", "Liver proteins", "Nucleic acids", "Carbohydrates"],
  correctAnswer: 0,
  explanation: "Creatinine is a waste product formed from creatine phosphate metabolism in muscles."
},
{
  id: 'Nitrogen-55',
  question: "Birds primarily excrete nitrogen in the form of?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Birds excrete uric acid, which conserves water and is excreted as a paste."
},
{
  id: 'Nitrogen-56',
  question: "In reptiles, the main nitrogenous waste is?",
  options: ["Uric acid", "Ammonia", "Urea", "Nitrites"],
  correctAnswer: 0,
  explanation: "Reptiles conserve water by excreting nitrogen as uric acid."
},
{
  id: 'Nitrogen-57',
  question: "The process converting ammonia into less toxic urea is called?",
  options: ["Urea cycle", "Krebs cycle", "Glycolysis", "Photosynthesis"],
  correctAnswer: 0,
  explanation: "Ammonia is converted into urea in the liver via the urea cycle."
},
{
  id: 'Nitrogen-58',
  question: "Which nitrogenous waste requires the most water for excretion?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Ammonia is highly soluble and requires large amounts of water to be safely excreted."
},
{
  id: 'Nitrogen-59',
  question: "Which compound is least toxic among nitrogenous wastes?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 1,
  explanation: "Urea is less toxic compared to ammonia and is soluble, making it suitable for excretion."
},
{
  id: 'Nitrogen-60',
  question: "Gout is caused by the accumulation of?",
  options: ["Uric acid crystals", "Urea", "Creatinine", "Ammonia"],
  correctAnswer: 0,
  explanation: "Excess uric acid forms crystals in joints, leading to gout."
},
{
  id: 'Nitrogen-61',
  question: "Which organ is primarily responsible for excreting nitrogenous compounds?",
  options: ["Kidney", "Heart", "Lungs", "Skin"],
  correctAnswer: 0,
  explanation: "Kidneys filter and excrete nitrogenous wastes like urea, uric acid, and creatinine."
},
{
  id: 'Nitrogen-62',
  question: "Ammonotelic animals excrete?",
  options: ["Ammonia", "Urea", "Uric acid", "All three"],
  correctAnswer: 0,
  explanation: "Ammonotelic animals like fish excrete nitrogen mainly as ammonia."
},
{
  id: 'Nitrogen-63',
  question: "Ureotelic animals excrete primarily?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Ureotelic animals like humans excrete nitrogen mostly in the form of urea."
},
{
  id: 'Nitrogen-64',
  question: "Uricotelic animals conserve water by excreting?",
  options: ["Uric acid", "Ammonia", "Urea", "Creatinine"],
  correctAnswer: 0,
  explanation: "Uricotelic animals like birds and reptiles conserve water by excreting uric acid."
},
{
  id: 'Nitrogen-65',
  question: "Which nitrogenous waste has the highest solubility in water?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Ammonia dissolves easily in water, but this requires dilution to prevent toxicity."
},
{
  id: 'Nitrogen-66',
  question: "Which nitrogenous waste is measured in clinical kidney function tests?",
  options: ["Creatinine", "Ammonia", "Uric acid", "Urea"],
  correctAnswer: 0,
  explanation: "Creatinine levels in blood are used to assess kidney filtration efficiency."
},
{
  id: 'Nitrogen-67',
  question: "Excessive urea in blood is termed?",
  options: ["Uremia", "Hyperuricemia", "Azotemia", "Nephritis"],
  correctAnswer: 0,
  explanation: "Uremia is the condition when urea accumulates in the blood due to kidney failure."
},
{
  id: 'Nitrogen-68',
  question: "High uric acid levels in blood are known as?",
  options: ["Hyperuricemia", "Uremia", "Alkalosis", "Acidosis"],
  correctAnswer: 0,
  explanation: "Hyperuricemia refers to abnormally high uric acid concentration in blood."
},
{
  id: 'Nitrogen-69',
  question: "Which nitrogenous waste contributes to the smell of urine?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 1,
  explanation: "Ammonia produced from urea breakdown gives urine its characteristic smell."
},
{
  id: 'Nitrogen-70',
  question: "Which nitrogenous compound is a byproduct of nucleic acid metabolism?",
  options: ["Uric acid", "Urea", "Creatinine", "Ammonia"],
  correctAnswer: 0,
  explanation: "Uric acid is produced when purine nucleotides are broken down."
},
{
  id: 'Nitrogen-71',
  question: "Which nitrogenous compound directly results from amino acid deamination?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Deamination of amino acids releases ammonia, which is toxic and must be converted to safer compounds."
},
{
  id: 'Nitrogen-72',
  question: "In liver disease, which nitrogenous waste may accumulate abnormally?",
  options: ["Ammonia", "Urea", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Ammonia may accumulate in liver disease because the urea cycle is impaired."
},
{
  id: 'Nitrogen-73',
  question: "Why is urea a preferred excretory product in humans?",
  options: ["It is less toxic and soluble", "It provides energy", "It requires no water", "It increases blood pressure"],
  correctAnswer: 0,
  explanation: "Urea is less toxic than ammonia and is soluble, making it easier to excrete in urine."
},
{
  id: 'Nitrogen-74',
  question: "What is the daily average urea excretion in humans?",
  options: ["About 25–30 g", "About 1 g", "About 50 g", "Less than 0.5 g"],
  correctAnswer: 0,
  explanation: "Humans excrete approximately 25–30 grams of urea per day depending on protein intake."
},
{
  id: 'Nitrogen-75',
  question: "Which nitrogenous waste is produced in the breakdown of creatine phosphate?",
  options: ["Creatinine", "Urea", "Ammonia", "Uric acid"],
  correctAnswer: 0,
  explanation: "Creatinine is a byproduct of creatine phosphate metabolism in muscles."
},
{
  id: 'Nitrogen-76',
  question: "Fish that live in freshwater are usually?",
  options: ["Ammonotelic", "Ureotelic", "Uricotelic", "Creatinolytic"],
  correctAnswer: 0,
  explanation: "Freshwater fish excrete nitrogen mainly as ammonia due to abundant water availability."
},
{
  id: 'Nitrogen-77',
  question: "Mammals excrete nitrogen mostly as?",
  options: ["Urea", "Ammonia", "Uric acid", "Nitrites"],
  correctAnswer: 0,
  explanation: "Mammals are ureotelic and excrete nitrogen primarily as urea."
},
{
  id: 'Nitrogen-78',
  question: "Reptiles reduce water loss by excreting?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Reptiles excrete uric acid in a semi-solid form to conserve water."
},
{
  id: 'Nitrogen-79',
  question: "Which nitrogenous waste contributes to kidney stone formation when excessive?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Excess uric acid can crystallize and form kidney stones."
},
{
  id: 'Nitrogen-80',
  question: "In mammals, which organ is responsible for converting ammonia into urea?",
  options: ["Liver", "Kidney", "Lungs", "Pancreas"],
  correctAnswer: 0,
  explanation: "The liver detoxifies ammonia by converting it into urea via the urea cycle."
},
{
  id: 'Nitrogen-81',
  question: "What percentage of urinary nitrogen is in the form of urea?",
  options: ["About 80–90%", "About 10%", "About 50%", "Less than 5%"],
  correctAnswer: 0,
  explanation: "Around 80–90% of urinary nitrogen is excreted as urea."
},
{
  id: 'Nitrogen-82',
  question: "Which nitrogenous waste is excreted in sweat in small amounts?",
  options: ["Urea", "Ammonia", "Uric acid", "Creatinine"],
  correctAnswer: 0,
  explanation: "Small quantities of urea are lost through sweat glands."
},
{
  id: 'Nitrogen-83',
  question: "Which condition results from defective uric acid metabolism?",
  options: ["Gout", "Uremia", "Acidosis", "Nephritis"],
  correctAnswer: 0,
  explanation: "Gout is caused by defective uric acid metabolism leading to deposition in joints."
},
{
  id: 'Nitrogen-84',
  question: "Amphibians excrete nitrogen mainly as?",
  options: ["Ammonia and urea", "Uric acid only", "Creatinine", "Nitrites"],
  correctAnswer: 0,
  explanation: "Amphibians excrete ammonia in water and switch to urea when on land."
},
{
  id: 'Nitrogen-85',
  question: "Creatinine clearance test is used to measure?",
  options: ["Glomerular filtration rate", "Liver enzyme activity", "Blood pressure", "Oxygen saturation"],
  correctAnswer: 0,
  explanation: "Creatinine clearance is a clinical test for assessing kidney glomerular filtration rate."
},
{
  id: 'Nitrogen-86',
  question: "Excess protein intake increases excretion of?",
  options: ["Urea", "Ammonia", "Uric acid", "Nitric oxide"],
  correctAnswer: 0,
  explanation: "High protein intake raises amino acid breakdown, increasing urea excretion."
},
{
  id: 'Nitrogen-87',
  question: "Which nitrogenous compound is excreted in semi-solid form by desert animals?",
  options: ["Uric acid", "Ammonia", "Urea", "Creatinine"],
  correctAnswer: 0,
  explanation: "Desert animals conserve water by excreting uric acid as a paste."
},
{
  id: 'Nitrogen-88',
  question: "Which nitrogenous waste is an indicator of muscle breakdown?",
  options: ["Creatinine", "Uric acid", "Ammonia", "Urea"],
  correctAnswer: 0,
  explanation: "Creatinine is released during muscle metabolism and used as a diagnostic indicator."
},
{
  id: 'Nitrogen-89',
  question: "Why is ammonia unsuitable for terrestrial animals?",
  options: ["Requires too much water for excretion", "Not soluble", "Provides energy", "Strengthens tissues"],
  correctAnswer: 0,
  explanation: "Ammonia is highly toxic and needs excess water for excretion, making it unsuitable for land animals."
},
{
  id: 'Nitrogen-90',
  question: "The enzyme carbamoyl phosphate synthetase is involved in?",
  options: ["Urea cycle", "Krebs cycle", "Glycolysis", "Photosynthesis"],
  correctAnswer: 0,
  explanation: "Carbamoyl phosphate synthetase is a key enzyme in the urea cycle."
},
{
  id: 'Nitrogen-91',
  question: "Which waste product is formed during purine breakdown?",
  options: ["Uric acid", "Urea", "Creatinine", "Ammonia"],
  correctAnswer: 0,
  explanation: "Purine metabolism produces uric acid as a nitrogenous waste."
},
{
  id: 'Nitrogen-92',
  question: "Why do aquatic invertebrates excrete ammonia directly?",
  options: ["Abundant water dilutes toxicity", "Ammonia provides energy", "They lack kidneys", "It reduces pH"],
  correctAnswer: 0,
  explanation: "Aquatic invertebrates excrete ammonia directly as they have abundant water for dilution."
},
{
  id: 'Nitrogen-93',
  question: "Which nitrogenous waste is the most energy-expensive to produce?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Uric acid synthesis requires more energy but conserves water."
},
{
  id: 'Nitrogen-94',
  question: "The presence of creatinine in blood indicates?",
  options: ["Kidney filtration efficiency", "Liver function", "Lung activity", "Pancreatic secretion"],
  correctAnswer: 0,
  explanation: "Serum creatinine levels are used clinically to monitor kidney function."
},
{
  id: 'Nitrogen-95',
  question: "Which nitrogenous compound is associated with uricotelic mode of excretion?",
  options: ["Uric acid", "Ammonia", "Urea", "Nitrites"],
  correctAnswer: 0,
  explanation: "Uricotelic animals excrete nitrogen primarily as uric acid."
},
{
  id: 'Nitrogen-96',
  question: "Ammonia is detoxified in the liver to prevent?",
  options: ["Neurotoxicity", "Muscle fatigue", "Oxygen transport", "Bone weakness"],
  correctAnswer: 0,
  explanation: "Excess ammonia is toxic to the nervous system, so the liver converts it into urea."
},
{
  id: 'Nitrogen-97',
  question: "The end product of amino acid catabolism in humans is mainly?",
  options: ["Urea", "Uric acid", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Most nitrogen from amino acid catabolism is converted into urea."
},
{
  id: 'Nitrogen-98',
  question: "Which nitrogenous waste may crystallize in joints causing inflammation?",
  options: ["Uric acid", "Urea", "Ammonia", "Creatinine"],
  correctAnswer: 0,
  explanation: "Deposition of uric acid crystals in joints causes gouty arthritis."
},
{
  id: 'Nitrogen-99',
  question: "Why is urea cycle essential for humans?",
  options: ["It detoxifies ammonia", "It produces ATP", "It stores nitrogen", "It makes hemoglobin"],
  correctAnswer: 0,
  explanation: "The urea cycle detoxifies ammonia by converting it into urea for safe excretion."
},
{
  id: 'Nitrogen-100',
  question: "Which organ excretes uric acid and creatinine through urine?",
  options: ["Kidney", "Liver", "Skin", "Heart"],
  correctAnswer: 0,
  explanation: "Kidneys excrete uric acid, creatinine, and urea as major nitrogenous wastes."
}

];