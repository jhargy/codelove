export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}export const thermoregulationQuestions = [
 {
  id: 'Thermo-1',
  question: "What is thermoregulation?",
  options: ["Control of body temperature", "Regulation of blood sugar", "Balance of water levels", "Control of heart rate"],
  correctAnswer: 0,
  explanation: "Thermoregulation is the process of maintaining stable body temperature."
},
{
  id: 'Thermo-2',
  question: "Which part of the brain regulates body temperature?",
  options: ["Hypothalamus", "Cerebellum", "Medulla oblongata", "Pons"],
  correctAnswer: 0,
  explanation: "The hypothalamus acts as the body’s thermostat."
},
{
  id: 'Thermo-3',
  question: "Normal human body temperature is approximately:",
  options: ["37°C", "35°C", "39°C", "41°C"],
  correctAnswer: 0,
  explanation: "Normal temperature is around 37°C."
},
{
  id: 'Thermo-4',
  question: "Which mechanism reduces body temperature when overheated?",
  options: ["Sweating", "Shivering", "Increased metabolic rate", "Vasoconstriction"],
  correctAnswer: 0,
  explanation: "Sweating and vasodilation help cool the body."
},
{
  id: 'Thermo-5',
  question: "Which mechanism increases body temperature in cold?",
  options: ["Vasodilation", "Shivering", "Sweating", "Evaporation"],
  correctAnswer: 1,
  explanation: "Shivering generates heat through muscle activity."
},
{
  id: 'Thermo-6',
  question: "Fever occurs due to:",
  options: ["Infection raising hypothalamic set-point", "Heat stroke", "Low blood sugar", "Cold exposure"],
  correctAnswer: 0,
  explanation: "Fever is caused by pyrogens raising the hypothalamic set-point."
},
{
  id: 'Thermo-7',
  question: "Which hormone increases metabolic rate and heat production?",
  options: ["Thyroxine", "Insulin", "Cortisol", "Aldosterone"],
  correctAnswer: 0,
  explanation: "Thyroxine raises metabolic rate, increasing heat."
},
{
  id: 'Thermo-8',
  question: "Heat loss by radiation occurs through:",
  options: ["Infrared rays", "Sweat evaporation", "Direct contact", "Air movement"],
  correctAnswer: 0,
  explanation: "Radiation is heat loss via infrared rays."
},
{
  id: 'Thermo-9',
  question: "Which is a symptom of hypothermia?",
  options: ["Shivering", "Excess sweating", "High fever", "Flushed skin"],
  correctAnswer: 0,
  explanation: "Hypothermia causes shivering to generate heat."
},
{
  id: 'Thermo-10',
  question: "Which is a symptom of heat stroke?",
  options: ["High body temperature and no sweating", "Low temperature", "Cold shivering", "Slow pulse"],
  correctAnswer: 0,
  explanation: "Heat stroke features very high temperature and absence of sweating."
},
{
  id: 'Thermo-11',
  question: "Why is thermoregulation important?",
  options: ["Enzyme activity depends on temperature", "Heart rate control", "Water balance only", "Nerve impulse conduction only"],
  correctAnswer: 0,
  explanation: "Enzymes work efficiently only in a narrow temperature range."
},
{
  id: 'Thermo-12',
  question: "Which blood vessels constrict in cold to conserve heat?",
  options: ["Skin arterioles", "Pulmonary veins", "Renal arteries", "Coronary arteries"],
  correctAnswer: 0,
  explanation: "Skin arterioles constrict to reduce heat loss."
},
{
  id: 'Thermo-13',
  question: "Goosebumps are caused by contraction of:",
  options: ["Arrector pili muscles", "Cardiac muscle", "Skeletal muscle", "Smooth muscle of bladder"],
  correctAnswer: 0,
  explanation: "Arrector pili contraction raises hair to trap air and conserve heat."
},
{
  id: 'Thermo-14',
  question: "Evaporative cooling mainly occurs through:",
  options: ["Sweating", "Shivering", "Radiation", "Conduction"],
  correctAnswer: 0,
  explanation: "Sweating uses evaporation to release heat."
},
{
  id: 'Thermo-15',
  question: "Which population group is most vulnerable to heat stroke?",
  options: ["Elderly and infants", "Teenagers", "Athletes", "Middle-aged adults"],
  correctAnswer: 0,
  explanation: "Elderly and infants have weaker thermoregulatory control."
},
{
  id: 'Thermo-16',
  question: "What happens to urine output in cold weather?",
  options: ["Increases", "Decreases", "No change", "Stops completely"],
  correctAnswer: 0,
  explanation: "Cold causes diuresis due to vasoconstriction and reduced sweating."
},
{
  id: 'Thermo-17',
  question: "Heat exhaustion is caused by:",
  options: ["Excessive sweating leading to fluid loss", "Sudden infection", "Brain injury", "Low oxygen"],
  correctAnswer: 0,
  explanation: "Heat exhaustion is due to dehydration from excessive sweating."
},
{
  id: 'Thermo-18',
  question: "Which is a treatment for hypothermia?",
  options: ["Gradual warming", "Rapid ice bath", "Fasting", "Cold air exposure"],
  correctAnswer: 0,
  explanation: "Hypothermia requires slow rewarming to avoid shock."
},
{
  id: 'Thermo-19',
  question: "Brown adipose tissue helps in thermoregulation by:",
  options: ["Non-shivering thermogenesis", "Sweating", "Radiation", "Evaporation"],
  correctAnswer: 0,
  explanation: "Brown fat generates heat without shivering."
},
{
  id: 'Thermo-20',
  question: "Which neurotransmitter helps regulate sweating?",
  options: ["Acetylcholine", "Dopamine", "Adrenaline", "Serotonin"],
  correctAnswer: 0,
  explanation: "Sweat glands are stimulated by acetylcholine from sympathetic nerves."
},
{
  id: 'Thermo-21',
  question: "Which process transfers heat by direct contact?",
  options: ["Conduction", "Convection", "Radiation", "Evaporation"],
  correctAnswer: 0,
  explanation: "Conduction occurs when heat is transferred directly from one molecule to another."
},
{
  id: 'Thermo-22',
  question: "Convection transfers heat by:",
  options: ["Movement of air or fluids", "Direct contact", "Infrared rays", "Sweating"],
  correctAnswer: 0,
  explanation: "Convection involves heat transfer by fluid or air currents."
},
{
  id: 'Thermo-23',
  question: "Which organ helps in thermoregulation by increasing metabolic rate?",
  options: ["Thyroid gland", "Pancreas", "Adrenal medulla", "Pituitary gland"],
  correctAnswer: 0,
  explanation: "Thyroid hormones increase metabolism and heat production."
},
{
  id: 'Thermo-24',
  question: "Which symptom indicates mild hypothermia?",
  options: ["Shivering", "Heat stroke", "No sweating with high temperature", "Skin burns"],
  correctAnswer: 0,
  explanation: "Shivering is an early sign of mild hypothermia."
},
{
  id: 'Thermo-25',
  question: "What is the main danger of heat stroke?",
  options: ["Failure of sweating mechanism", "Shivering", "Fever reduction", "Increased urine output"],
  correctAnswer: 0,
  explanation: "In heat stroke, sweating stops and body temperature rises uncontrollably."
},
{
  id: 'Thermo-26',
  question: "Why do enzymes stop working at very high body temperatures?",
  options: ["They denature", "They freeze", "They multiply", "They get coated with salts"],
  correctAnswer: 0,
  explanation: "High heat denatures enzymes and makes them inactive."
},
{
  id: 'Thermo-27',
  question: "Why is fever sometimes beneficial?",
  options: ["It enhances immune activity", "It always damages tissues", "It prevents sweating", "It increases urine output"],
  correctAnswer: 0,
  explanation: "Fever enhances the immune system by inhibiting pathogen growth."
},
{
  id: 'Thermo-28',
  question: "Which sweat gland type is important in thermoregulation?",
  options: ["Eccrine glands", "Sebaceous glands", "Apocrine glands", "Ceruminous glands"],
  correctAnswer: 0,
  explanation: "Eccrine sweat glands are widespread and vital for temperature control."
},
{
  id: 'Thermo-29',
  question: "Which ion is mainly lost during sweating?",
  options: ["Sodium", "Potassium", "Calcium", "Magnesium"],
  correctAnswer: 0,
  explanation: "Sweating leads to significant sodium ion loss."
},
{
  id: 'Thermo-30',
  question: "Which group is at higher risk of hypothermia?",
  options: ["Newborns", "Athletes", "Teenagers", "Office workers"],
  correctAnswer: 0,
  explanation: "Newborns have poor thermoregulation and higher hypothermia risk."
},
{
  id: 'Thermo-31',
  question: "Which response conserves body heat?",
  options: ["Vasoconstriction", "Sweating", "Vasodilation", "Increased heart rate"],
  correctAnswer: 0,
  explanation: "Skin vasoconstriction reduces heat loss."
},
{
  id: 'Thermo-32',
  question: "What happens to pulse in hypothermia?",
  options: ["Slows down", "Speeds up", "Remains constant", "Becomes irregular but fast"],
  correctAnswer: 0,
  explanation: "Hypothermia decreases heart rate due to metabolic slowing."
},
{
  id: 'Thermo-33',
  question: "Why is drinking cold water in hot weather important?",
  options: ["Replaces fluid loss", "Increases shivering", "Prevents hypothermia", "Increases fat metabolism"],
  correctAnswer: 0,
  explanation: "Cold water restores fluid lost through sweating and prevents dehydration."
},
{
  id: 'Thermo-34',
  question: "Which factor increases risk of heat exhaustion?",
  options: ["Prolonged exercise in hot climate", "Sitting in cold room", "Eating salty foods", "Drinking cold water"],
  correctAnswer: 0,
  explanation: "Prolonged exercise in heat leads to dehydration and exhaustion."
},
{
  id: 'Thermo-35',
  question: "Thermoregulation maintains homeostasis of:",
  options: ["Body temperature", "Blood glucose", "Blood pH", "Blood pressure"],
  correctAnswer: 0,
  explanation: "It specifically regulates temperature balance."
},
{
  id: 'Thermo-36',
  question: "What is the first aid for heat stroke?",
  options: ["Rapid cooling", "Gradual warming", "Sweating suppression", "Shivering induction"],
  correctAnswer: 0,
  explanation: "Immediate rapid cooling is required in heat stroke."
},
{
  id: 'Thermo-37',
  question: "Which animals are warm-blooded?",
  options: ["Birds and mammals", "Amphibians", "Reptiles", "Fish"],
  correctAnswer: 0,
  explanation: "Birds and mammals regulate internal temperature actively."
},
{
  id: 'Thermo-38',
  question: "Which animals are cold-blooded?",
  options: ["Reptiles and amphibians", "Mammals", "Birds", "Humans"],
  correctAnswer: 0,
  explanation: "Reptiles and amphibians rely on environment for body temperature."
},
{
  id: 'Thermo-39',
  question: "Which condition involves dangerously low body temperature?",
  options: ["Hypothermia", "Hyperthermia", "Fever", "Heat exhaustion"],
  correctAnswer: 0,
  explanation: "Hypothermia occurs when core temperature falls below 35°C."
},
{
  id: 'Thermo-40',
  question: "Which condition is defined as elevated body temperature due to environment?",
  options: ["Hyperthermia", "Hypothermia", "Fever", "Shivering"],
  correctAnswer: 0,
  explanation: "Hyperthermia results from overheating, not infection."
},
{
  id: 'Thermo-41',
  question: "How does vasodilation help thermoregulation?",
  options: ["Increases heat loss", "Prevents sweating", "Conserves heat", "Increases shivering"],
  correctAnswer: 0,
  explanation: "Vasodilation brings more blood to skin surface, enhancing heat loss."
},
{
  id: 'Thermo-42',
  question: "Which environmental factor most affects thermoregulation?",
  options: ["Ambient temperature", "Noise", "Light", "Air pressure"],
  correctAnswer: 0,
  explanation: "Surrounding temperature directly affects heat balance."
},
{
  id: 'Thermo-43',
  question: "Why do athletes sometimes suffer heat exhaustion?",
  options: ["Loss of water and salts through sweating", "Cold environment", "Low heart rate", "Lack of oxygen"],
  correctAnswer: 0,
  explanation: "Excessive sweating depletes water and salts."
},
{
  id: 'Thermo-44',
  question: "Which organ besides skin helps thermoregulation by evaporation?",
  options: ["Lungs", "Liver", "Kidneys", "Pancreas"],
  correctAnswer: 0,
  explanation: "Evaporation from lungs contributes to cooling."
},
{
  id: 'Thermo-45',
  question: "Why is thermoregulation vital for survival?",
  options: ["Maintains enzyme activity", "Maintains eye vision", "Improves hearing", "Controls sleep"],
  correctAnswer: 0,
  explanation: "Stable body temperature ensures enzymes function properly."
},
{
  id: 'Thermo-46',
  question: "Which blood component helps regulate heat?",
  options: ["Plasma", "Red blood cells", "White blood cells", "Platelets"],
  correctAnswer: 0,
  explanation: "Plasma circulates heat across the body."
},
{
  id: 'Thermo-47',
  question: "What does prolonged cold exposure cause?",
  options: ["Hypothermia", "Hyperthermia", "Fever", "Heat stroke"],
  correctAnswer: 0,
  explanation: "Continuous cold exposure leads to hypothermia."
},
{
  id: 'Thermo-48',
  question: "What does prolonged hot exposure cause?",
  options: ["Hyperthermia", "Hypothermia", "Pneumonia", "Cough"],
  correctAnswer: 0,
  explanation: "Long exposure to heat leads to hyperthermia."
},
{
  id: 'Thermo-49',
  question: "Which factor makes elderly prone to hypothermia?",
  options: ["Reduced metabolic rate", "Excess sweating", "High thyroid hormones", "Increased shivering"],
  correctAnswer: 0,
  explanation: "Older adults have slower metabolism and poor heat regulation."
},
{
  id: 'Thermo-50',
  question: "Why do infants lose heat quickly?",
  options: ["Large surface area to volume ratio", "Low blood flow", "Excess sweating", "Small lungs"],
  correctAnswer: 0,
  explanation: "Their high surface-to-volume ratio causes rapid heat loss."
},
{
  id: 'Thermo-51',
  question: "Which type of clothing prevents heat loss in cold?",
  options: ["Woolen clothes", "Cotton clothes", "Silk clothes", "Wet clothes"],
  correctAnswer: 0,
  explanation: "Woolen clothes trap air and act as insulators."
},
{
  id: 'Thermo-52',
  question: "Which condition involves fatigue and dizziness due to dehydration?",
  options: ["Heat exhaustion", "Heat stroke", "Hypothermia", "Shivering"],
  correctAnswer: 0,
  explanation: "Heat exhaustion results from dehydration and salt loss."
},
{
  id: 'Thermo-53',
  question: "What prevents hypothermia in newborns?",
  options: ["Wrapping in warm clothes", "Giving cold bath", "Placing under fan", "Keeping uncovered"],
  correctAnswer: 0,
  explanation: "Wrapping newborns helps prevent excessive heat loss."
},
{
  id: 'Thermo-54',
  question: "How does sweating regulate body temperature?",
  options: ["Evaporation removes heat", "It increases blood pressure", "It increases enzyme activity", "It decreases metabolism"],
  correctAnswer: 0,
  explanation: "Sweat evaporates, removing heat and cooling the body."
},
{
  id: 'Thermo-55',
  question: "Which chemical messengers assist in thermoregulation?",
  options: ["Thyroxine and adrenaline", "Insulin and glucagon", "Renin and angiotensin", "Estrogen and progesterone"],
  correctAnswer: 0,
  explanation: "Thyroxine and adrenaline enhance heat production."
},
{
  id: 'Thermo-56',
  question: "What happens in frostbite?",
  options: ["Tissues freeze due to low temperature", "Tissues burn", "Blood becomes acidic", "Excessive sweating"],
  correctAnswer: 0,
  explanation: "Frostbite occurs when body tissues freeze in extreme cold."
},
{
  id: 'Thermo-57',
  question: "Why does shivering stop in severe hypothermia?",
  options: ["Muscles become exhausted", "Too much heat is produced", "Skin gets warmer", "Blood pressure increases"],
  correctAnswer: 0,
  explanation: "In severe hypothermia, muscles cannot sustain shivering."
},
{
  id: 'Thermo-58',
  question: "Which environmental factor increases heat loss?",
  options: ["Wind", "Darkness", "Noise", "Low oxygen"],
  correctAnswer: 0,
  explanation: "Wind enhances convection and heat loss."
},
{
  id: 'Thermo-59',
  question: "What does acclimatization mean in thermoregulation?",
  options: ["Adjusting body functions to climate", "Failure of sweating", "Increase in metabolism only", "Permanent fever"],
  correctAnswer: 0,
  explanation: "Acclimatization is adapting to temperature changes over time."
},
{
  id: 'Thermo-60',
  question: "Why does skin become red in heat?",
  options: ["Vasodilation increases blood flow", "Sweat blocks pores", "Skin cells multiply", "Muscles contract"],
  correctAnswer: 0,
  explanation: "In heat, vasodilation increases blood flow to skin, making it red."
},
{
  id: 'Thermo-61',
  question: "Which part of the brain adjusts thermoregulatory responses to fever?",
  options: ["Hypothalamus", "Cerebellum", "Medulla oblongata", "Thalamus"],
  correctAnswer: 0,
  explanation: "The hypothalamus resets the body’s set point during fever."
},
{
  id: 'Thermo-62',
  question: "What is the primary danger of hypothermia?",
  options: ["Uncontrolled bleeding", "Loss of consciousness", "Cardiac arrest", "Muscle fatigue"],
  correctAnswer: 2,
  explanation: "Hypothermia reduces electrical activity in the heart, leading to cardiac arrest."
},
{
  id: 'Thermo-63',
  question: "Which hormone is released to increase heat during cold stress?",
  options: ["Thyroxine", "Insulin", "Aldosterone", "Parathyroid hormone"],
  correctAnswer: 0,
  explanation: "Thyroxine boosts metabolic rate, helping in thermogenesis."
},
{
  id: 'Thermo-64',
  question: "Sweat evaporation is most effective in which environment?",
  options: ["High humidity", "Dry air", "Cold climate", "Underwater"],
  correctAnswer: 1,
  explanation: "Evaporation is rapid in dry air, enhancing cooling."
},
{
  id: 'Thermo-65',
  question: "What is the main symptom of heat stroke?",
  options: ["Cold skin", "Profuse sweating", "Very high body temperature", "Goosebumps"],
  correctAnswer: 2,
  explanation: "Heat stroke is marked by dangerously high body temperature and failure of sweating."
},
{
  id: 'Thermo-66',
  question: "Peripheral vasodilation causes which effect?",
  options: ["Increased heat retention", "Decreased blood flow to skin", "Increased heat loss", "Muscle contraction"],
  correctAnswer: 2,
  explanation: "Vasodilation increases skin blood flow, promoting heat dissipation."
},
{
  id: 'Thermo-67',
  question: "Which risk factor contributes most to hypothermia?",
  options: ["Prolonged exposure to cold water", "Excessive sugar intake", "Lack of sleep", "High protein diet"],
  correctAnswer: 0,
  explanation: "Cold water rapidly removes body heat, increasing hypothermia risk."
},
{
  id: 'Thermo-68',
  question: "Which organ generates most heat during rest?",
  options: ["Liver", "Heart", "Lungs", "Skin"],
  correctAnswer: 0,
  explanation: "The liver has a high metabolic rate and generates the majority of heat at rest."
},
{
  id: 'Thermo-69',
  question: "Which mineral deficiency affects thermoregulation?",
  options: ["Iron", "Iodine", "Zinc", "Calcium"],
  correctAnswer: 1,
  explanation: "Iodine deficiency impairs thyroxine synthesis, reducing metabolic heat production."
},
{
  id: 'Thermo-70',
  question: "Which behavior is a thermoregulatory response?",
  options: ["Wearing warm clothes", "Yawning", "Stretching", "Chewing food"],
  correctAnswer: 0,
  explanation: "Humans use behavior, like clothing, to aid thermoregulation."
},
{
  id: 'Thermo-71',
  question: "What is the normal core body temperature in °C?",
  options: ["34°C", "36-37°C", "39°C", "41°C"],
  correctAnswer: 1,
  explanation: "Normal core body temperature is maintained around 36-37°C."
},
{
  id: 'Thermo-72',
  question: "Which part of the nervous system activates sweating?",
  options: ["Parasympathetic", "Sympathetic", "Somatic", "Cerebellar"],
  correctAnswer: 1,
  explanation: "Sweating is triggered by sympathetic cholinergic fibers."
},
{
  id: 'Thermo-73',
  question: "Why is thermoregulation vital for enzyme function?",
  options: ["Enzymes require high pressure", "Enzymes are stable in cold only", "Enzymes work within a narrow temperature range", "Enzymes use heat as fuel"],
  correctAnswer: 2,
  explanation: "Most enzymes function optimally within a narrow temperature range, around 37°C."
},
{
  id: 'Thermo-74',
  question: "Which cooling response involves blood moving closer to skin?",
  options: ["Vasodilation", "Vasoconstriction", "Shivering", "Thermogenesis"],
  correctAnswer: 0,
  explanation: "Vasodilation increases blood flow to skin, enhancing heat loss."
},
{
  id: 'Thermo-75',
  question: "Which system provides insulation against cold?",
  options: ["Skeletal system", "Muscular system", "Integumentary system", "Circulatory system"],
  correctAnswer: 2,
  explanation: "The integumentary system (skin + fat) provides insulation."
},
{
  id: 'Thermo-76',
  question: "What is the treatment for heat exhaustion?",
  options: ["Gradual cooling and hydration", "Surgery", "High-protein diet", "Blood transfusion"],
  correctAnswer: 0,
  explanation: "Cooling the body and replacing fluids are the key treatments for heat exhaustion."
},
{
  id: 'Thermo-77',
  question: "Which gland regulates metabolic rate affecting body heat?",
  options: ["Thyroid", "Adrenal cortex", "Pituitary posterior lobe", "Parathyroid"],
  correctAnswer: 0,
  explanation: "Thyroid gland releases thyroxine, regulating metabolism and heat production."
},
{
  id: 'Thermo-78',
  question: "Which heat loss mechanism occurs without direct contact?",
  options: ["Conduction", "Radiation", "Evaporation", "Convection"],
  correctAnswer: 1,
  explanation: "Radiation allows heat loss through infrared waves."
},
{
  id: 'Thermo-79',
  question: "Why does the elderly population face greater risk in thermoregulation?",
  options: ["Thinner skin and slower metabolism", "Faster metabolism", "Thicker fat layer", "High enzyme activity"],
  correctAnswer: 0,
  explanation: "Aging reduces insulation and metabolic efficiency, impairing thermoregulation."
},
{
  id: 'Thermo-80',
  question: "Which immediate measure prevents hypothermia?",
  options: ["Immersion in cold water", "Wearing insulating clothes", "Fasting", "Exercising without food"],
  correctAnswer: 1,
  explanation: "Insulating clothing reduces heat loss, preventing hypothermia."
},
{
  id: 'Thermo-81',
  question: "Which blood vessels constrict during cold?",
  options: ["Skin arterioles", "Pulmonary veins", "Hepatic portal vein", "Coronary arteries"],
  correctAnswer: 0,
  explanation: "Skin arterioles constrict, reducing heat loss in cold."
},
{
  id: 'Thermo-82',
  question: "How does fever aid the immune system?",
  options: ["Reduces oxygen transport", "Destroys red cells", "Increases enzyme denaturation", "Inhibits pathogen growth"],
  correctAnswer: 3,
  explanation: "Fever slows pathogen replication, supporting immune defenses."
},
{
  id: 'Thermo-83',
  question: "Which hormone supports thermogenesis during stress?",
  options: ["Adrenaline", "Insulin", "Estrogen", "Cortisol"],
  correctAnswer: 0,
  explanation: "Adrenaline increases metabolic activity, enhancing heat production."
},
{
  id: 'Thermo-84',
  question: "What is the effect of dehydration on thermoregulation?",
  options: ["Increases sweating", "Prevents sweating", "Increases shivering", "Improves cooling"],
  correctAnswer: 1,
  explanation: "Dehydration reduces sweat production, impairing cooling."
},
{
  id: 'Thermo-85',
  question: "What happens to enzymes during hyperthermia?",
  options: ["They speed up indefinitely", "They denature", "They remain unaffected", "They form new bonds"],
  correctAnswer: 1,
  explanation: "Extreme heat denatures enzymes, halting biochemical reactions."
},
{
  id: 'Thermo-86',
  question: "Which is the safest way to rewarm a hypothermia patient?",
  options: ["Rapid hot bath", "Gradual warming with blankets", "Direct sun exposure", "Cold IV fluids"],
  correctAnswer: 1,
  explanation: "Gradual rewarming prevents shock and arrhythmia."
},
{
  id: 'Thermo-87',
  question: "Which is a behavioral response to heat?",
  options: ["Seeking shade", "Vasoconstriction", "Shivering", "Thyroxine release"],
  correctAnswer: 0,
  explanation: "Seeking shade helps in external cooling."
},
{
  id: 'Thermo-88',
  question: "Which neurotransmitter activates sweat glands?",
  options: ["Acetylcholine", "Dopamine", "Serotonin", "Adrenaline"],
  correctAnswer: 0,
  explanation: "Sweat glands are activated by sympathetic cholinergic fibers releasing acetylcholine."
},
{
  id: 'Thermo-89',
  question: "Which type of fat aids in heat production in infants?",
  options: ["White fat", "Brown fat", "Visceral fat", "Subcutaneous fat"],
  correctAnswer: 1,
  explanation: "Brown fat generates heat by non-shivering thermogenesis."
},
{
  id: 'Thermo-90',
  question: "Which environmental factor reduces sweating efficiency?",
  options: ["High humidity", "Low temperature", "Dry air", "Wind"],
  correctAnswer: 0,
  explanation: "High humidity prevents sweat evaporation, reducing efficiency."
},
{
  id: 'Thermo-91',
  question: "Which vitamin supports thermoregulation indirectly?",
  options: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  correctAnswer: 0,
  explanation: "Vitamin D supports calcium metabolism, essential for muscle contraction and shivering."
},
{
  id: 'Thermo-92',
  question: "Which response reduces core temperature after exercise?",
  options: ["Vasoconstriction", "Sweating", "Shivering", "Increased appetite"],
  correctAnswer: 1,
  explanation: "Sweating dissipates excess heat generated during exercise."
},
{
  id: 'Thermo-93',
  question: "Which risk is linked to excessive cold exposure?",
  options: ["Heat rash", "Hypothermia", "Heat cramps", "Sunburn"],
  correctAnswer: 1,
  explanation: "Cold exposure lowers body temperature, causing hypothermia."
},
{
  id: 'Thermo-94',
  question: "What role does skin play in thermoregulation?",
  options: ["Gas exchange", "Heat exchange", "Blood filtration", "Oxygen storage"],
  correctAnswer: 1,
  explanation: "Skin controls heat loss through vasodilation, vasoconstriction, and sweating."
},
{
  id: 'Thermo-95',
  question: "Which response happens when core temperature rises?",
  options: ["Shivering", "Vasodilation", "Increased thyroxine release", "Brown fat activation"],
  correctAnswer: 1,
  explanation: "Vasodilation enhances heat loss in response to rising core temperature."
},
{
  id: 'Thermo-96',
  question: "Which ion balance is disrupted by heat stroke?",
  options: ["Sodium and potassium", "Calcium and phosphate", "Iron and zinc", "Magnesium and chloride"],
  correctAnswer: 0,
  explanation: "Heat stroke causes dehydration and disrupts sodium-potassium balance."
},
{
  id: 'Thermo-97',
  question: "Which term describes the body's ability to maintain constant temperature?",
  options: ["Homeostasis", "Metabolism", "Thermogenesis", "Adaptation"],
  correctAnswer: 0,
  explanation: "Homeostasis maintains internal stability, including temperature."
},
{
  id: 'Thermo-98',
  question: "What is the main symptom of frostbite?",
  options: ["Red skin", "Blistering and tissue damage", "Excess sweating", "Rapid heart rate"],
  correctAnswer: 1,
  explanation: "Frostbite causes tissue freezing, leading to blistering and necrosis."
},
{
  id: 'Thermo-99',
  question: "What is the immediate response to sudden cold?",
  options: ["Sweating", "Vasoconstriction", "Sleepiness", "Fever"],
  correctAnswer: 1,
  explanation: "Vasoconstriction preserves heat during sudden cold."
},
{
  id: 'Thermo-100',
  question: "Which lifestyle habit aids thermoregulation?",
  options: ["Regular exercise", "Excessive caffeine", "Irregular sleep", "Starvation"],
  correctAnswer: 0,
  explanation: "Exercise strengthens cardiovascular efficiency, supporting thermoregulation."
}

];
 