export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const digestiveSystemQuestions: Question[] = 
[
  {
    "id": "digestive-1",
    "question": "The process of breaking down large, insoluble food molecules into small, water-soluble molecules is called:",
    "options": [
      "Ingestion",
      "Digestion",
      "Absorption",
      "Egestion"
    ],
    "correctAnswer": 1,
    "explanation": "Digestion is the mechanical and chemical breakdown of food into smaller components that can be absorbed into the bloodstream. It involves processes like chewing, churning, and enzymatic action."
  },
  {
    "id": "digestive-2",
    "question": "Which of the following is the correct sequence of organs that food passes through in the digestive tract?",
    "options": [
      "Mouth → Stomach → Esophagus → Small Intestine → Large Intestine",
      "Mouth → Esophagus → Stomach → Small Intestine → Large Intestine",
      "Esophagus → Mouth → Stomach → Large Intestine → Small Intestine",
      "Mouth → Stomach → Esophagus → Large Intestine → Small Intestine"
    ],
    "correctAnswer": 1,
    "explanation": "The correct alimentary canal sequence is: Mouth (ingestion) → Pharynx → Esophagus (conduit) → Stomach (churning) → Small Intestine (digestion & absorption) → Large Intestine (water absorption) → Rectum → Anus (egestion)."
  },
  {
    "id": "digestive-3",
    "question": "The wave-like muscular contractions that propel food through the digestive system are called:",
    "options": [
      "Diffusion",
      "Peristalsis",
      "Emulsification",
      "Segmentation"
    ],
    "correctAnswer": 1,
    "explanation": "Peristalsis is the involuntary constriction and relaxation of muscles in the intestine or another canal, creating wavelike movements that push the contents forward. It occurs from the esophagus to the rectum."
  },
  {
    "id": "digestive-4",
    "question": "The primary function of the stomach is to:",
    "options": [
      "Absorb most nutrients",
      "Store food, mix it with gastric juices, and begin protein digestion",
      "Produce bile for fat emulsification",
      "Reabsorb water and electrolytes"
    ],
    "correctAnswer": 1,
    "explanation": "The stomach acts as a storage bag, mechanically churns food into chyme, and chemically digests it. Gastric glands secrete hydrochloric acid and pepsinogen, initiating the digestion of proteins."
  },
  {
    "id": "digestive-5",
    "question": "Bile, which is important for the digestion of fats, is produced by the:",
    "options": [
      "Gallbladder",
      "Liver",
      "Pancreas",
      "Stomach"
    ],
    "correctAnswer": 1,
    "explanation": "Bile is synthesized and secreted by the liver. It is then stored and concentrated in the gallbladder. The pancreas produces digestive enzymes, not bile."
  },
  {
    "id": "digestive-6",
    "question": "The enzyme salivary amylase, found in saliva, begins the chemical digestion of:",
    "options": [
      "Proteins",
      "Fats",
      "Carbohydrates",
      "Nucleic acids"
    ],
    "correctAnswer": 2,
    "explanation": "Salivary amylase (ptyalin) is an enzyme secreted by the salivary glands. It hydrolyzes starch (a polysaccharide) into smaller molecules like maltose, initiating carbohydrate digestion in the mouth."
  },
  {
    "id": "digestive-7",
    "question": "The finger-like projections lining the small intestine that greatly increase its surface area for absorption are called:",
    "options": [
      "Villi",
      "Alveoli",
      "Nephrons",
      "Cilia"
    ],
    "correctAnswer": 0,
    "explanation": "Villi are small, finger-like projections that extend into the lumen of the small intestine. Each villus contains capillaries and a lymphatic lacteal, and is covered with microvilli, creating a huge surface area for efficient absorption of nutrients."
  },
  {
    "id": "digestive-8",
    "question": "The largest gland in the human body is the:",
    "options": [
      "Pancreas",
      "Salivary gland",
      "Liver",
      "Gallbladder"
    ],
    "correctAnswer": 2,
    "explanation": "The liver is the largest internal organ and the largest gland in the human body. It has over 500 functions, including bile production, detoxification, storage of glycogen and vitamins, and metabolism of proteins, fats, and carbohydrates."
  },
  {
    "id": "digestive-9",
    "question": "The acidic pH of the stomach is primarily due to the secretion of:",
    "options": [
      "Pepsin",
      "Mucus",
      "Hydrochloric Acid (HCl)",
      "Bicarbonate"
    ],
    "correctAnswer": 2,
    "explanation": "Parietal cells in the gastric glands secrete hydrochloric acid (HCl). This strong acid creates a very low pH (around 1.5-3.5) in the stomach, which denatures proteins, kills ingested microbes, and activates pepsinogen to pepsin."
  },
  {
    "id": "digestive-10",
    "question": "The tube that connects the pharynx to the stomach is the:",
    "options": [
      "Trachea",
      "Ureter",
      "Esophagus",
      "Duodenum"
    ],
    "correctAnswer": 2,
    "explanation": "The esophagus is a muscular tube that serves as a passageway for food. It uses peristalsis to move the bolus of food from the pharynx down into the stomach. The trachea is for air, and the ureter is for urine."
  },
  {
    "id": "digestive-11",
    "question": "The primary site for the absorption of digested nutrients into the bloodstream is the:",
    "options": [
      "Stomach",
      "Large Intestine",
      "Small Intestine",
      "Esophagus"
    ],
    "correctAnswer": 2,
    "explanation": "The small intestine is specially adapted for absorption with its great length, circular folds, villi, and microvilli. Over 90% of nutrient absorption (including sugars, amino acids, fatty acids, vitamins) occurs here."
  },
  {
    "id": "digestive-12",
    "question": "Which of the following is NOT a function of the liver?",
    "options": [
      "Production of bile",
      "Storage of glycogen",
      "Detoxification of blood",
      "Production of insulin"
    ],
    "correctAnswer": 3,
    "explanation": "The liver produces bile, stores glycogen and vitamins, filters and detoxifies blood, synthesizes plasma proteins, and processes nutrients. Insulin is produced by the beta cells of the Islets of Langerhans in the pancreas."
  },
  {
    "id": "digestive-13",
    "question": "The enzyme pepsin, which digests proteins, is active in the:",
    "options": [
      "Mouth",
      "Stomach",
      "Small Intestine",
      "Large Intestine"
    ],
    "correctAnswer": 1,
    "explanation": "Pepsin is the main proteolytic (protein-digesting) enzyme of the stomach. It is secreted as an inactive precursor, pepsinogen, which is activated to pepsin by the acidic environment created by HCl."
  },
  {
    "id": "digestive-14",
    "question": "The pouch-like organ that stores and concentrates bile is the:",
    "options": [
      "Liver",
      "Appendix",
      "Gallbladder",
      "Pancreas"
    ],
    "correctAnswer": 2,
    "explanation": "The gallbladder is a small, pear-shaped sac located beneath the liver. Its primary function is to store and concentrate bile that is produced by the liver. When fatty food enters the duodenum, the gallbladder contracts to release bile."
  },
  {
    "id": "digestive-15",
    "question": "The first part of the small intestine, where chyme from the stomach mixes with bile and pancreatic juices, is the:",
    "options": [
      "Jejunum",
      "Ileum",
      "Duodenum",
      "Cecum"
    ],
    "correctAnswer": 2,
    "explanation": "The duodenum is the shortest, widest, and first section (about 25 cm long) of the small intestine. It is a crucial 'mixing bowl' where chyme is neutralized by bicarbonate and mixed with bile and pancreatic enzymes."
  },
  {
    "id": "digestive-16",
    "question": "The process by which bile breaks down large fat globules into smaller droplets is called:",
    "options": [
      "Digestion",
      "Emulsification",
      "Absorption",
      "Peristalsis"
    ],
    "correctAnswer": 1,
    "explanation": "Emulsification is a physical process, not chemical digestion. Bile salts act as detergents, breaking large fat globules into a fine emulsion of smaller droplets. This greatly increases the surface area for the enzyme lipase to work on."
  },
  {
    "id": "digestive-17",
    "question": "Water absorption is the primary function of the:",
    "options": [
      "Stomach",
      "Small Intestine",
      "Large Intestine",
      "Pancreas"
    ],
    "correctAnswer": 2,
    "explanation": "The large intestine (colon) primarily reabsorbs water, salts, and some vitamins from the indigestible food matter that passes from the small intestine. This process converts liquid chyme into semi-solid feces."
  },
  {
    "id": "digestive-18",
    "question": "The rhythmic, local constrictions of the intestine that mix food with digestive juices are called:",
    "options": [
      "Peristalsis",
      "Segmentation",
      "Emulsification",
      "Mass movements"
    ],
    "correctAnswer": 1,
    "explanation": "Segmentation is the primary mixing movement in the small intestine. It involves alternating contractions and relaxations of circular muscles that chop the chyme, mixing it thoroughly with intestinal, pancreatic, and biliary secretions."
  },
  {
    "id": "digestive-19",
    "question": "Which of the following is an accessory organ of the digestive system?",
    "options": [
      "Stomach",
      "Esophagus",
      "Pancreas",
      "Small Intestine"
    ],
    "correctAnswer": 2,
    "explanation": "Accessory organs are those that contribute to digestion but are not part of the alimentary canal (the tube from mouth to anus). They include the teeth, tongue, salivary glands, liver, gallbladder, and pancreas."
  },
  {
    "id": "digestive-20",
    "question": "Hydrochloric acid (HCl) in the stomach activates which enzyme precursor?",
    "options": [
      "Trypsinogen",
      "Pepsinogen",
      "Procarboxypeptidase",
      "Chymotrypsinogen"
    ],
    "correctAnswer": 1,
    "explanation": "Pepsinogen, secreted by chief cells, is inactive. The low pH provided by HCl causes pepsinogen to cleave itself, forming the active protease enzyme pepsin. The other options are pancreatic enzymes activated in the small intestine."
  },
  {
    "id": "digestive-21",
    "question": "The wavelike movement that moves food through the esophagus is called:",
    "options": [
      "Churning",
      "Segmentation",
      "Peristalsis",
      "Emulsification"
    ],
    "correctAnswer": 2,
    "explanation": "Peristalsis is the coordinated, rhythmic contraction of smooth muscles that propels the food bolus in one direction through the esophagus and the rest of the digestive tract."
  },
  {
    "id": "digestive-22",
    "question": "The enzyme secreted by the pancreas that breaks down fats is:",
    "options": [
      "Amylase",
      "Trypsin",
      "Lipase",
      "Nuclease"
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatic lipase is the key enzyme that hydrolyzes dietary triglycerides (fats) into monoglycerides and free fatty acids. It works on the surface of emulsified fat droplets."
  },
  {
    "id": "digestive-23",
    "question": "The part of the digestive system that is responsible for the compaction of undigested material into feces is the:",
    "options": [
      "Small intestine",
      "Stomach",
      "Large intestine",
      "Rectum"
    ],
    "correctAnswer": 2,
    "explanation": "The large intestine compacts the indigestible residues, bacteria, and unabsorbed materials by absorbing water and ions, forming solid or semi-solid feces for elimination."
  },
  {
    "id": "digestive-24",
    "question": "Which of the following is a function of the mucus secreted in the stomach?",
    "options": [
      "Activate pepsin",
      "Digest proteins",
      "Protect the stomach lining from acid and enzymes",
      "Emulsify fats"
    ],
    "correctAnswer": 2,
    "explanation": "Goblet cells in the stomach lining secrete a thick, alkaline mucus that coats the stomach wall. This mucosal barrier protects the epithelial cells from being digested by the corrosive HCl and the enzyme pepsin."
  },
  {
    "id": "digestive-25",
    "question": "The common passage for both food and air is the:",
    "options": [
      "Trachea",
      "Larynx",
      "Pharynx",
      "Esophagus"
    ],
    "correctAnswer": 2,
    "explanation": "The pharynx is a muscular funnel that serves as a common passageway for both food (heading to the esophagus) and air (heading to the larynx and trachea). The epiglottis acts as a flap to prevent food from entering the airway."
  },
  
  {
    "id": "digestive-26",
    "question": "The final part of the small intestine, which empties into the large intestine at the ileocecal valve, is the:",
    "options": [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Cecum"
    ],
    "correctAnswer": 2,
    "explanation": "The ileum is the longest and final section of the small intestine. It is primarily responsible for the absorption of vitamin B12, bile salts, and any remaining nutrients. It ends at the ileocecal valve, which controls entry into the large intestine."
  },
  {
    "id": "digestive-27",
    "question": "Which pancreatic enzyme is secreted in an inactive form to prevent autodigestion of the pancreas?",
    "options": [
      "Amylase",
      "Lipase",
      "Trypsin",
      "Nuclease"
    ],
    "correctAnswer": 2,
    "explanation": "Trypsin is secreted as trypsinogen. It is activated in the duodenum by the enzyme enterokinase (enteropeptidase). This prevents the powerful protease from digesting the pancreatic tissue itself. Once activated, trypsin then activates other pancreatic zymogens."
  },
  {
    "id": "digestive-28",
    "question": "The hormone that stimulates the stomach to secrete gastric juice is:",
    "options": [
      "Secretin",
      "Gastrin",
      "Cholecystokinin (CCK)",
      "Insulin"
    ],
    "correctAnswer": 1,
    "explanation": "Gastrin is a hormone released by G-cells in the stomach lining in response to the presence of food (especially peptides and amino acids). It stimulates gastric glands to secrete HCl and pepsinogen, and promotes gastric motility."
  },
  {
    "id": "digestive-29",
    "question": "The small, finger-like pouch attached to the cecum is the:",
    "options": [
      "Appendix",
      "Jejunum",
      "Ileum",
      "Duodenum"
    ],
    "correctAnswer": 0,
    "explanation": "The appendix is a narrow, finger-like tube attached to the cecum, the first part of the large intestine. Its function in humans is not entirely clear but it may play a role in housing gut bacteria. Inflammation of the appendix is called appendicitis."
  },
  {
    "id": "digestive-30",
    "question": "Bile salts are important for the digestion and absorption of:",
    "options": [
      "Carbohydrates",
      "Proteins",
      "Fats",
      "Nucleic acids"
    ],
    "correctAnswer": 2,
    "explanation": "Bile salts are not enzymes; they are biological detergents. They emulsify dietary fats, breaking them into tiny droplets. This increases the surface area for the enzyme pancreatic lipase to act upon, and they also help in the absorption of the products of fat digestion."
  },
  {
    "id": "digestive-31",
    "question": "The middle portion of the small intestine, where the majority of nutrient absorption occurs, is the:",
    "options": [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Colon"
    ],
    "correctAnswer": 1,
    "explanation": "The jejunum is the middle section of the small intestine. It is the primary site for absorption of the end products of digestion, such as sugars (monosaccharides), amino acids, and fatty acids, due to its highly folded surface with villi and microvilli."
  },
  {
    "id": "digestive-32",
    "question": "The hormone that stimulates the pancreas to secrete a bicarbonate-rich fluid to neutralize acidic chyme is:",
    "options": [
      "Gastrin",
      "Secretin",
      "Cholecystokinin (CCK)",
      "Gastric inhibitory peptide (GIP)"
    ],
    "correctAnswer": 1,
    "explanation": "Secretin is released by the duodenum in response to the acidity of chyme arriving from the stomach. It signals the pancreas to release bicarbonate ions (HCO₃⁻), which neutralize the acid, creating a pH suitable for pancreatic and intestinal enzymes to function."
  },
  {
    "id": "digestive-33",
    "question": "The process of taking food into the mouth is called:",
    "options": [
      "Digestion",
      "Absorption",
      "Ingestion",
      "Egestion"
    ],
    "correctAnswer": 2,
    "explanation": "Ingestion is simply the act of taking in food through the mouth. It is the first step of the digestive process."
  },
  {
    "id": "digestive-34",
    "question": "The enzyme that begins the chemical digestion of starch in the mouth is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Salivary amylase",
      "Lipase"
    ],
    "correctAnswer": 2,
    "explanation": "Salivary amylase, also known as ptyalin, is secreted by the salivary glands. It hydrolyzes starch (a polysaccharide) into smaller molecules like maltose and dextrins. Its action continues in the stomach until it is inactivated by the acidic pH."
  },
  {
    "id": "digestive-35",
    "question": "The muscular organ that manipulates food during chewing and helps in swallowing is the:",
    "options": [
      "Epiglottis",
      "Uvula",
      "Tongue",
      "Pharynx"
    ],
    "correctAnswer": 2,
    "explanation": "The tongue is a strong, muscular organ that moves food around the mouth for chewing (mastication), mixes it with saliva to form a bolus, and then pushes the bolus into the pharynx to initiate swallowing."
  },
  {
    "id": "digestive-36",
    "question": "The sphincter that controls the passage of chyme from the stomach into the duodenum is the:",
    "options": [
      "Cardiac sphincter",
      "Ileocecal sphincter",
      "Pyloric sphincter",
      "Anal sphincter"
    ],
    "correctAnswer": 2,
    "explanation": "The pyloric sphincter is a powerful ring of smooth muscle at the junction between the stomach and the duodenum. It regulates the release of partially digested food (chyme) from the stomach into the small intestine in small amounts."
  },
  {
    "id": "digestive-37",
    "question": "Which of the following is NOT a section of the large intestine?",
    "options": [
      "Cecum",
      "Jejunum",
      "Colon",
      "Rectum"
    ],
    "correctAnswer": 1,
    "explanation": "The jejunum is part of the small intestine. The large intestine consists of the cecum, appendix, colon (ascending, transverse, descending, sigmoid), rectum, and anal canal."
  },
  {
    "id": "digestive-38",
    "question": "The hormone that stimulates the gallbladder to contract and release bile is:",
    "options": [
      "Gastrin",
      "Secretin",
      "Cholecystokinin (CCK)",
      "Insulin"
    ],
    "correctAnswer": 2,
    "explanation": "Cholecystokinin (CCK) is secreted by the duodenum in response to the presence of fats and proteins. Its main actions are to stimulate the gallbladder to contract and eject bile into the duodenum, and to stimulate the pancreas to secrete digestive enzymes."
  },
  {
    "id": "digestive-39",
    "question": "The process of eliminating indigestible substances from the body is called:",
    "options": [
      "Ingestion",
      "Digestion",
      "Absorption",
      "Defecation (Egestion)"
    ],
    "correctAnswer": 3,
    "explanation": "Defecation, or egestion, is the final act of digestion, where waste material (feces) is eliminated from the body through the anus."
  },
  {
    "id": "digestive-40",
    "question": "The lymphatic vessel found in the center of each intestinal villus, which absorbs dietary fats, is called a:",
    "options": [
      "Capillary",
      "Lacteal",
      "Venule",
      "Arteriole"
    ],
    "correctAnswer": 1,
    "explanation": "The lacteal is a specialized lymphatic capillary located in the core of each villus. It is responsible for absorbing large fat particles (like chylomicrons) and fat-soluble vitamins that are too large to enter the blood capillaries directly."
  },
  {
    "id": "digestive-41",
    "question": "The pancreatic juice contains enzymes that digest all major types of:",
    "options": [
      "Minerals only",
      "Macromolecules",
      "Vitamins only",
      "Water only"
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatic juice is a complete digestive juice. It contains enzymes for all macronutrients: pancreatic amylase (carbs), trypsin, chymotrypsin, carboxypeptidase (proteins), lipase (fats), and nucleases (nucleic acids)."
  },
  {
    "id": "digestive-42",
    "question": "The flap of elastic cartilage that closes over the glottis during swallowing to prevent food from entering the trachea is the:",
    "options": [
      "Uvula",
      "Tongue",
      "Epiglottis",
      "Pharynx"
    ],
    "correctAnswer": 2,
    "explanation": "The epiglottis is a leaf-shaped flap of cartilage located behind the tongue. During swallowing, it folds down to cover the opening of the larynx (glottis), ensuring that food and liquid enter the esophagus and not the airway."
  },
  {
    "id": "digestive-43",
    "question": "The hardest substance in the human body, which covers the crown of a tooth, is:",
    "options": [
      "Dentin",
      "Pulp",
      "Enamel",
      "Cementum"
    ],
    "correctAnswer": 2,
    "explanation": "Tooth enamel is the hard, outer layer of the crown. It is the hardest substance in the human body and is highly mineralized, primarily with hydroxyapatite crystals. It protects the tooth from wear and tear."
  },
  {
    "id": "digestive-44",
    "question": "Which of the following is a function of the large intestine?",
    "options": [
      "Complete protein digestion",
      "Synthesis of vitamin K and some B vitamins by bacteria",
      "Production of bile",
      "Secretion of most digestive enzymes"
    ],
    "correctAnswer": 1,
    "explanation": "The large intestine houses a vast population of symbiotic bacteria (gut flora). These bacteria ferment indigestible carbohydrates, and in the process, synthesize certain vitamins, most notably vitamin K and several B vitamins, which are then absorbed by the host."
  },
  {
    "id": "digestive-45",
    "question": "The sphincter that controls the exit of feces from the body is the:",
    "options": [
      "Cardiac sphincter",
      "Pyloric sphincter",
      "Ileocecal valve",
      "Anal sphincter"
    ],
    "correctAnswer": 3,
    "explanation": "The anal sphincters (internal and external) are rings of muscle that control the opening and closing of the anus. The external anal sphincter is under voluntary control, allowing for the conscious decision to defecate."
  },
  {
    "id": "digestive-46",
    "question": "The part of the tooth that contains blood vessels and nerves is the:",
    "options": [
      "Enamel",
      "Dentin",
      "Pulp",
      "Crown"
    ],
    "correctAnswer": 2,
    "explanation": "The pulp is the soft tissue located in the central cavity of the tooth. It contains connective tissue, blood vessels, and nerves, which provide nourishment and sensation to the tooth."
  },
  {
    "id": "digestive-47",
    "question": "The process of chewing is known as:",
    "options": [
      "Deglutition",
      "Mastication",
      "Peristalsis",
      "Segmentation"
    ],
    "correctAnswer": 1,
    "explanation": "Mastication is the mechanical process of chewing, where food is torn and ground into smaller pieces by the teeth. This increases the surface area of the food for enzymes to work on more effectively."
  },
  {
    "id": "digestive-48",
    "question": "The main function of the esophagus is to:",
    "options": [
      "Digest proteins",
      "Absorb water",
      "Transport food from the pharynx to the stomach",
      "Produce mucus"
    ],
    "correctAnswer": 2,
    "explanation": "The esophagus is a muscular tube that functions solely as a conduit. It uses peristaltic waves to propel the food bolus from the back of the throat (pharynx) down into the stomach. No significant digestion or absorption occurs here."
  },
  {
    "id": "digestive-49",
    "question": "Which of the following is NOT a salivary gland?",
    "options": [
      "Parotid",
      "Sublingual",
      "Submandibular",
      "Pancreas"
    ],
    "correctAnswer": 3,
    "explanation": "The three pairs of major salivary glands are the parotid (in front of the ears), submandibular (under the jaw), and sublingual (under the tongue). The pancreas is an accessory digestive gland but is not a salivary gland."
  },
  {
    "id": "digestive-50",
    "question": "The term 'chyme' refers to:",
    "options": [
      "The food bolus after chewing",
      "The semi-liquid mixture of partially digested food and gastric juices in the stomach",
      "The emulsified fats in the small intestine",
      "The waste material in the large intestine"
    ],
    "correctAnswer": 1,
    "explanation": "Chyme is the thick, semi-fluid mass of partially digested food and gastric secretions that is expelled from the stomach into the duodenum. It is highly acidic and is the result of the mechanical and chemical digestion that occurs in the stomach."
  },
  
  {
    "id": "digestive-51",
    "question": "The part of the pharynx that food passes through is the:",
    "options": [
      "Nasopharynx",
      "Oropharynx",
      "Laryngopharynx",
      "Both Oropharynx and Laryngopharynx"
    ],
    "correctAnswer": 3,
    "explanation": "Food passes through the oropharynx (behind the mouth) and the laryngopharynx (behind the larynx) on its way to the esophagus. The nasopharynx, located behind the nasal cavity, is for air only."
  },
  {
    "id": "digestive-52",
    "question": "Which of the following is a function of the liver?",
    "options": [
      "Production of glucagon",
      "Storage of bile",
      "Conversion of ammonia to urea",
      "Secretion of insulin"
    ],
    "correctAnswer": 2,
    "explanation": "The liver plays a crucial role in protein metabolism. It detoxifies ammonia, a harmful byproduct of protein breakdown, by converting it into urea, which is then excreted by the kidneys. The pancreas produces insulin and glucagon."
  },
  {
    "id": "digestive-53",
    "question": "The layer of the alimentary canal that is responsible for peristalsis and segmentation is the:",
    "options": [
      "Mucosa",
      "Submucosa",
      "Muscularis externa",
      "Serosa"
    ],
    "correctAnswer": 2,
    "explanation": "The muscularis externa typically consists of an inner layer of circular muscle and an outer layer of longitudinal muscle. The coordinated contractions of these muscle layers produce the movements of peristalsis and segmentation that mix and propel food."
  },
  {
    "id": "digestive-54",
    "question": "The enzyme that breaks down peptides into amino acids is:",
    "options": [
      "Amylase",
      "Lipase",
      "Pepsin",
      "Peptidase"
    ],
    "correctAnswer": 3,
    "explanation": "Peptidases (including exopeptidases like carboxypeptidase and dipeptidases) are enzymes that hydrolyze peptide bonds, breaking down peptides into their constituent amino acids. They are found in the pancreatic juice and on the brush border of the small intestine."
  },
  {
    "id": "digestive-55",
    "question": "The sphincter that prevents reflux of stomach acid into the esophagus is the:",
    "options": [
      "Pyloric sphincter",
      "Ileocecal valve",
      "Lower esophageal (cardiac) sphincter",
      "Anal sphincter"
    ],
    "correctAnswer": 2,
    "explanation": "The lower esophageal sphincter (LES), or cardiac sphincter, is a ring of muscle at the junction of the esophagus and stomach. It relaxes to allow food into the stomach and then contracts to prevent the backflow (reflux) of acidic gastric contents."
  },
  {
    "id": "digestive-56",
    "question": "The 'brush border' of the small intestine refers to:",
    "options": [
      "The villi",
      "The microvilli",
      "The circular folds (plicae circulares)",
      "The lacteals"
    ],
    "correctAnswer": 1,
    "explanation": "The microvilli are tiny, finger-like projections on the apical surface of the absorptive cells (enterocytes) that line each villus. This dense covering gives the intestinal lining a fuzzy appearance under the microscope, known as the brush border, and dramatically increases the surface area for absorption."
  },
  {
    "id": "digestive-57",
    "question": "Which vitamin requires intrinsic factor, produced in the stomach, for its absorption in the ileum?",
    "options": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C",
      "Vitamin D"
    ],
    "correctAnswer": 1,
    "explanation": "Vitamin B12 (cobalamin) is a large, charged molecule that cannot be absorbed on its own. Parietal cells in the stomach secrete intrinsic factor, which binds to B12. This complex is then recognized and absorbed by specific receptors in the ileum."
  },
  {
    "id": "digestive-58",
    "question": "The hormone that inhibits gastric secretion and motility when the small intestine is full of chyme is:",
    "options": [
      "Gastrin",
      "Secretin",
      "Gastric Inhibitory Peptide (GIP)",
      "Cholecystokinin (CCK)"
    ],
    "correctAnswer": 2,
    "explanation": "Gastric Inhibitory Peptide (GIP) is released by the duodenum in response to the presence of fats and glucose. It acts to slow down gastric emptying and secretion, giving the small intestine more time to process the nutrient-rich chyme."
  },
  {
    "id": "digestive-59",
    "question": "The main function of the colon is to:",
    "options": [
      "Digest proteins",
      "Absorb water and electrolytes",
      "Produce bile",
      "Secrete digestive enzymes"
    ],
    "correctAnswer": 1,
    "explanation": "The primary function of the colon (large intestine) is to absorb water, ions, and vitamins (like vitamin K produced by bacteria) from the remaining indigestible food matter, converting liquid chyme into semi-solid feces for elimination."
  },
  {
    "id": "digestive-60",
    "question": "The pouch that forms the first part of the large intestine is the:",
    "options": [
      "Appendix",
      "Cecum",
      "Rectum",
      "Sigmoid colon"
    ],
    "correctAnswer": 1,
    "explanation": "The cecum is a pouch-like structure that constitutes the first part of the large intestine. It receives chyme from the ileum through the ileocecal valve and is the area to which the appendix is attached."
  },
  {
    "id": "digestive-61",
    "question": "The process of swallowing is also known as:",
    "options": [
      "Mastication",
      "Deglutition",
      "Peristalsis",
      "Segmentation"
    ],
    "correctAnswer": 1,
    "explanation": "Deglutition is the medical term for the act of swallowing. It is a complex process involving voluntary and involuntary muscle contractions to move the bolus from the mouth to the stomach."
  },
  {
    "id": "digestive-62",
    "question": "Pancreatic juice is delivered to the:",
    "options": [
      "Stomach",
      "Jejunum",
      "Duodenum",
      "Ileum"
    ],
    "correctAnswer": 2,
    "explanation": "The main pancreatic duct joins the common bile duct to form the hepatopancreatic ampulla (of Vater), which opens into the duodenum. This delivers both pancreatic juice and bile directly into the duodenum."
  },
  {
    "id": "digestive-63",
    "question": "Bile is composed of all of the following EXCEPT:",
    "options": [
      "Bile salts",
      "Cholesterol",
      "Bilirubin",
      "Digestive enzymes"
    ],
    "correctAnswer": 3,
    "explanation": "Bile is an excretory product and a digestive secretion. It contains water, bile salts, cholesterol, phospholipids, bile pigments (bilirubin), and electrolytes. It does not contain digestive enzymes; its role is emulsification, not enzymatic digestion."
  },
  {
    "id": "digestive-64",
    "question": "The cells in the gastric glands that secrete pepsinogen are the:",
    "options": [
      "Parietal cells",
      "Chief cells",
      "Mucous cells",
      "G-cells"
    ],
    "correctAnswer": 1,
    "explanation": "Chief cells (or zymogenic cells) are located in the gastric glands of the stomach. They secrete pepsinogen, the inactive precursor of the protein-digesting enzyme pepsin."
  },
  {
    "id": "digestive-65",
    "question": "The longest part of the alimentary canal is the:",
    "options": [
      "Esophagus",
      "Stomach",
      "Small intestine",
      "Large intestine"
    ],
    "correctAnswer": 2,
    "explanation": "The small intestine is the longest part of the digestive tube, measuring about 6-7 meters (20 feet) in length in an adult. This great length provides a massive surface area for the completion of digestion and absorption of nutrients."
  },
  {
    "id": "digestive-66",
    "question": "The breakdown of large fat droplets into smaller ones is a function of:",
    "options": [
      "Pancreatic lipase",
      "Bile salts",
      "Gastric lipase",
      "Colipase"
    ],
    "correctAnswer": 1,
    "explanation": "Bile salts are amphipathic molecules that act as biological detergents. They surround fat droplets and break them apart into a fine suspension of smaller droplets (emulsification), which greatly increases the surface area available for lipase enzymes to act upon."
  },
  {
    "id": "digestive-67",
    "question": "The part of the tooth embedded in the jawbone is the:",
    "options": [
      "Crown",
      "Neck",
      "Root",
      "Enamel"
    ],
    "correctAnswer": 2,
    "explanation": "The root of the tooth is the part below the gum line that is embedded in the alveolar bone of the jaw. It is covered by a bone-like tissue called cementum, which helps anchor the tooth in place via the periodontal ligament."
  },
  {
    "id": "digestive-68",
    "question": "Which of the following is absorbed directly into the bloodstream from the small intestine?",
    "options": [
      "Monosaccharides and amino acids",
      "Triglycerides and cholesterol",
      "Fat-soluble vitamins",
      "All of the above"
    ],
    "correctAnswer": 0,
    "explanation": "The products of carbohydrate (monosaccharides) and protein (amino acids) digestion are water-soluble. They are absorbed by the enterocytes and then pass directly into the capillaries within the intestinal villi to be carried away by the hepatic portal vein."
  },
  {
    "id": "digestive-69",
    "question": "The valve that regulates the flow of material from the small intestine to the large intestine is the:",
    "options": [
      "Pyloric sphincter",
      "Cardiac sphincter",
      "Ileocecal valve",
      "Anal sphincter"
    ],
    "correctAnswer": 2,
    "explanation": "The ileocecal valve is a sphincter muscle situated at the junction of the ileum (last part of the small intestine) and the cecum (first part of the large intestine). It prevents the backflow of fecal material from the colon into the small intestine."
  },
  {
    "id": "digestive-70",
    "question": "The 'good' bacteria that reside in the large intestine are important for:",
    "options": [
      "Producing vitamin K",
      "Crowding out harmful bacteria",
      "Fermenting indigestible carbohydrates",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "The gut microbiota (flora) perform several beneficial functions: they synthesize certain vitamins (like vitamin K and biotin), prevent colonization by pathogens, and help break down indigestible dietary fibers through fermentation, producing short-chain fatty acids that can be absorbed."
  },
  {
    "id": "digestive-71",
    "question": "The process by which nutrients pass through the intestinal wall into the blood or lymph is called:",
    "options": [
      "Digestion",
      "Absorption",
      "Assimilation",
      "Egestion"
    ],
    "correctAnswer": 1,
    "explanation": "Absorption is the process by which the end products of digestion (e.g., glucose, amino acids, fatty acids, vitamins, minerals, water) pass through the lining of the small intestine and into the blood or lymphatic vessels."
  },
  {
    "id": "digestive-72",
    "question": "The layer of the alimentary canal that contains blood vessels, lymphatic vessels, and nerves is the:",
    "options": [
      "Mucosa",
      "Submucosa",
      "Muscularis externa",
      "Serosa"
    ],
    "correctAnswer": 1,
    "explanation": "The submucosa is a dense layer of connective tissue that lies just outside the mucosa. It contains a rich network of blood vessels, lymphatic vessels, and nerve fibers (submucosal plexus) that serve the digestive organs."
  },
  {
    "id": "digestive-73",
    "question": "Which of the following is NOT a component of saliva?",
    "options": [
      "Water",
      "Mucus",
      "Salivary amylase",
      "Hydrochloric acid"
    ],
    "correctAnswer": 3,
    "explanation": "Saliva is produced by salivary glands and is composed of about 99% water. It also contains mucus (to lubricate food), salivary amylase (to digest starch), electrolytes, and lysozyme (an antibacterial enzyme). Hydrochloric acid is secreted in the stomach."
  },
  {
    "id": "digestive-74",
    "question": "The part of the digestive system that has no digestive function but is a site for water absorption is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Pancreas"
    ],
    "correctAnswer": 2,
    "explanation": "The large intestine has little or no digestive function, as most digestion and absorption are completed in the small intestine. Its primary role is to absorb water, salts, and some vitamins from the indigestible material, forming solid feces."
  },
  {
    "id": "digestive-75",
    "question": "The enzyme that is activated by enterokinase and then activates other pancreatic proteases is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Chymotrypsin",
      "Carboxypeptidase"
    ],
    "correctAnswer": 1,
    "explanation": "Enterokinase (or enteropeptidase), an enzyme secreted by the duodenal mucosa, converts the inactive trypsinogen into active trypsin. Trypsin then activates the other pancreatic zymogens: chymotrypsinogen to chymotrypsin, procarboxypeptidase to carboxypeptidase, etc."
  },
  {
    "id": "digestive-76",
    "question": "The sight, smell, or thought of food can trigger the:",
    "options": [
      "Gastric phase",
      "Cephalic phase",
      "Intestinal phase",
      "Colonic phase"
    ],
    "correctAnswer": 1,
    "explanation": "The cephalic phase is the earliest phase of digestion, which begins before food enters the stomach. It is triggered by sensory stimuli (sight, smell, taste) and prepares the body to eat by stimulating gastric secretion via the vagus nerve."
  },
  {
    "id": "digestive-77",
    "question": "The breakdown of food molecules by enzymatic hydrolysis is known as:",
    "options": [
      "Mechanical digestion",
      "Chemical digestion",
      "Absorption",
      "Propulsion"
    ],
    "correctAnswer": 1,
    "explanation": "Chemical digestion involves the breaking of covalent chemical bonds in food molecules through the addition of water (hydrolysis). This process is catalyzed by specific enzymes (e.g., amylase, protease, lipase) and converts large polymers into their monomer subunits."
  },
  {
    "id": "digestive-78",
    "question": "The cells in the gastric glands that secrete hydrochloric acid are the:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "Mucous cells",
      "G-cells"
    ],
    "correctAnswer": 1,
    "explanation": "Parietal cells (or oxyntic cells) are found in the gastric glands. They are responsible for secreting hydrochloric acid (HCl), which creates the acidic environment of the stomach, and intrinsic factor, which is necessary for vitamin B12 absorption."
  },
  {
    "id": "digestive-79",
    "question": "The part of the large intestine that is 'S'-shaped and leads to the rectum is the:",
    "options": [
      "Ascending colon",
      "Transverse colon",
      "Descending colon",
      "Sigmoid colon"
    ],
    "correctAnswer": 3,
    "explanation": "The sigmoid colon is the S-shaped last part of the colon. It connects the descending colon to the rectum. Its name comes from the Greek letter 'sigma' (ς)."
  },
  {
    "id": "digestive-80",
    "question": "Which of the following is true about the absorption of fats?",
    "options": [
      "They are absorbed directly into the bloodstream.",
      "They are absorbed as monoglycerides and fatty acids into lacteals.",
      "They are absorbed in the stomach.",
      "They are not digested and are egested."
    ],
    "correctAnswer": 1,
    "explanation": "After digestion by lipase, fats are absorbed as monoglycerides and free fatty acids. Inside the enterocytes, they are resynthesized into triglycerides, packaged into chylomicrons (lipoprotein particles), and then exocytosed. Because they are too large to enter capillaries, they enter the lacteals (lymphatic capillaries) instead and are transported via the lymphatic system to the bloodstream."
  },
  {
    "id": "digestive-81",
    "question": "The nervous system that controls the digestive system and is located in the walls of the alimentary canal is the:",
    "options": [
      "Central nervous system",
      "Enteric nervous system",
      "Somatic nervous system",
      "Parasympathetic nervous system"
    ],
    "correctAnswer": 1,
    "explanation": "The enteric nervous system (ENS) is a complex network of neurons that governs the function of the gastrointestinal tract. It is often called the 'second brain' because it can operate independently of the central nervous system, controlling motility, secretion, and blood flow."
  },
  {
    "id": "digestive-82",
    "question": "The hormone secretin is released in response to:",
    "options": [
      "Fats in the duodenum",
      "Proteins in the stomach",
      "Acid in the duodenum",
      "Carbohydrates in the mouth"
    ],
    "correctAnswer": 2,
    "explanation": "Secretin is released by the S-cells of the duodenum when the pH of the chyme entering from the stomach is very low (acidic). Its primary action is to stimulate the pancreas to secrete a bicarbonate-rich fluid to neutralize the acid."
  },
  {
    "id": "digestive-83",
    "question": "The part of the tooth visible above the gum is the:",
    "options": [
      "Root",
      "Crown",
      "Neck",
      "Pulp"
    ],
    "correctAnswer": 1,
    "explanation": "The crown is the part of the tooth that is visible above the gum line (gingiva). It is covered by enamel. The neck is the constricted region where the crown meets the root, and the root is embedded in the jawbone."
  },
  {
    "id": "digestive-84",
    "question": "The enzyme that breaks down maltose into glucose is:",
    "options": [
      "Maltase",
      "Sucrase",
      "Lactase",
      "Amylase"
    ],
    "correctAnswer": 0,
    "explanation": "Maltase is a brush border enzyme found on the surface of enterocytes in the small intestine. It specifically hydrolyzes the disaccharide maltose into two molecules of glucose."
  },
  {
    "id": "digestive-85",
    "question": "The vessel that carries nutrient-rich blood from the digestive organs to the liver is the:",
    "options": [
      "Aorta",
      "Hepatic artery",
      "Hepatic portal vein",
      "Hepatic vein"
    ],
    "correctAnswer": 2,
    "explanation": "The hepatic portal vein is a major blood vessel that drains blood from the spleen, stomach, pancreas, and intestines. It carries nutrient-rich (but often oxygen-poor) blood directly to the liver for processing before the blood enters the general circulation."
  },
  {
    "id": "digestive-86",
    "question": "The phase of gastric secretion that is stimulated by the distension of the stomach and the presence of peptides is the:",
    "options": [
      "Cephalic phase",
      "Gastric phase",
      "Intestinal phase",
      "Colonic phase"
    ],
    "correctAnswer": 1,
    "explanation": "The gastric phase is the period of gastric secretion that occurs once food enters the stomach. It is triggered by stomach distension (stretch receptors) and the chemical nature of the chyme (especially peptides and amino acids), leading to the release of gastrin."
  },
  {
    "id": "digestive-87",
    "question": "The yellow-green pigment that gives bile its color and is a waste product of hemoglobin breakdown is:",
    "options": [
      "Bilirubin",
      "Cholesterol",
      "Bile salts",
      "Secretin"
    ],
    "correctAnswer": 0,
    "explanation": "Bilirubin is a yellow-orange pigment formed from the breakdown of the heme portion of hemoglobin from old red blood cells. It is secreted into bile, giving it its characteristic color, and is eventually converted in the intestine to urobilinogen, which gives feces its brown color."
  },
  {
    "id": "digestive-88",
    "question": "The rhythmic movements of the digestive tract that propel food forward are called:",
    "options": [
      "Segmentation",
      "Peristalsis",
      "Emulsification",
      "Mastication"
    ],
    "correctAnswer": 1,
    "explanation": "Peristalsis involves coordinated waves of contraction and relaxation of the circular and longitudinal muscles in the walls of the digestive organs. It pushes the food bolus (or chyme) forward in a one-way movement from the esophagus to the anus."
  },
  {
    "id": "digestive-89",
    "question": "The part of the digestive system where both digestion and absorption occur most extensively is the:",
    "options": [
      "Mouth",
      "Stomach",
      "Small intestine",
      "Large intestine"
    ],
    "correctAnswer": 2,
    "explanation": "The small intestine is the primary site for both chemical digestion (completed by pancreatic and brush border enzymes) and nutrient absorption. Its structure is highly adapted for these functions with its great length, villi, and microvilli."
  },
  {
    "id": "digestive-90",
    "question": "The enzyme that breaks down sucrose into glucose and fructose is:",
    "options": [
      "Maltase",
      "Sucrase",
      "Lactase",
      "Amylase"
    ],
    "correctAnswer": 1,
    "explanation": "Sucrase is a brush border enzyme that hydrolyzes the disaccharide sucrose into its monomers: one molecule of glucose and one molecule of fructose."
  },
  {
    "id": "digestive-91",
    "question": "The condition characterized by the backflow of stomach acid into the esophagus is:",
    "options": [
      "Ulcer",
      "Appendicitis",
      "GERD (Gastroesophageal Reflux Disease)",
      "Jaundice"
    ],
    "correctAnswer": 2,
    "explanation": "GERD occurs when the lower esophageal sphincter (LES) weakens or relaxes inappropriately, allowing stomach acid to wash back up (reflux) into the esophagus. This causes irritation and the classic symptom of heartburn."
  },
  {
    "id": "digestive-92",
    "question": "The hormone cholecystokinin (CCK) is released in response to:",
    "options": [
      "Acid in the duodenum",
      "Fats and proteins in the duodenum",
      "Stretch in the stomach",
      "The thought of food"
    ],
    "correctAnswer": 1,
    "explanation": "Cholecystokinin (CCK) is secreted by the I-cells of the duodenum and jejunum in response to the presence of fatty acids and peptides/amino acids in the chyme. It stimulates gallbladder contraction and pancreatic enzyme secretion."
  },
  {
    "id": "digestive-93",
    "question": "The layer of the alimentary canal that is exposed to the lumen and involved in secretion and absorption is the:",
    "options": [
      "Serosa",
      "Muscularis externa",
      "Submucosa",
      "Mucosa"
    ],
    "correctAnswer": 3,
    "explanation": "The mucosa is the innermost layer, lining the lumen of the alimentary canal. It consists of an epithelium (where secretion and absorption occur), a layer of connective tissue (lamina propria), and a thin muscle layer (muscularis mucosae)."
  },
  {
    "id": "digestive-94",
    "question": "The enzyme that breaks down lactose into glucose and galactose is:",
    "options": [
      "Maltase",
      "Sucrase",
      "Lactase",
      "Amylase"
    ],
    "correctAnswer": 2,
    "explanation": "Lactase is the brush border enzyme responsible for digesting the disaccharide lactose (milk sugar) into glucose and galactose. Lactose intolerance results from a deficiency of this enzyme."
  },
  {
    "id": "digestive-95",
    "question": "The part of the large intestine that travels across the abdominal cavity is the:",
    "options": [
      "Ascending colon",
      "Transverse colon",
      "Descending colon",
      "Sigmoid colon"
    ],
    "correctAnswer": 1,
    "explanation": "The transverse colon is the longest and most mobile part of the colon. It runs horizontally across the abdominal cavity, from the right hepatic flexure to the left splenic flexure."
  },
  {
    "id": "digestive-96",
    "question": "The process of moving nutrients from the bloodstream into the body cells for use is called:",
    "options": [
      "Digestion",
      "Absorption",
      "Assimilation",
      "Egestion"
    ],
    "correctAnswer": 2,
    "explanation": "Assimilation is the process by which absorbed nutrients are taken up by the cells of the body and used for energy, growth, and cell repair. It occurs after absorption into the bloodstream."
  },
  {
    "id": "digestive-97",
    "question": "The cells in the gastric glands that secrete the hormone gastrin are the:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "Mucous cells",
      "G-cells"
    ],
    "correctAnswer": 3,
    "explanation": "G-cells are endocrine cells located in the pyloric region of the stomach. They secrete the hormone gastrin into the bloodstream in response to the presence of food, which then stimulates gastric acid secretion and motility."
  },
  {
    "id": "digestive-98",
    "question": "The part of the digestive system that is responsible for the storage of feces before defecation is the:",
    "options": [
      "Cecum",
      "Colon",
      "Rectum",
      "Anus"
    ],
    "correctAnswer": 2,
    "explanation": "The rectum is the final straight portion of the large intestine, just before the anus. Its function is to temporarily store feces until the pressure triggers the defecation reflex and the waste is expelled through the anus."
  },
  {
    "id": "digestive-99",
    "question": "The enzyme that begins the digestion of triglycerides in the stomach is:",
    "options": [
      "Pancreatic lipase",
      "Lingual lipase",
      "Gastric lipase",
      "Bile salt-stimulated lipase"
    ],
    "correctAnswer": 2,
    "explanation": "Gastric lipase is secreted by chief cells in the stomach. It accounts for about 10-30% of fat digestion, particularly breaking down short-chain and medium-chain triglycerides. It works best in the acidic pH of the stomach."
  },
  {
    "id": "digestive-100",
    "question": "The part of the peritoneum that attaches the small intestine to the posterior abdominal wall is the:",
    "options": [
      "Greater omentum",
      "Lesser omentum",
      "Mesentery",
      "Falciform ligament"
    ],
    "correctAnswer": 2,
    "explanation": "The mesentery is a fan-shaped double layer of peritoneum that attaches the jejunum and ileum to the posterior abdominal wall. It provides a pathway for blood vessels, nerves, and lymphatic vessels to reach the intestines."
  },
  {
    "id": "digestive-101",
    "question": "The disorder characterized by inflammation of the liver, often caused by viruses, is:",
    "options": [
      "Cirrhosis",
      "Hepatitis",
      "Jaundice",
      "Cholecystitis"
    ],
    "correctAnswer": 1,
    "explanation": "Hepatitis is the general term for inflammation of the liver. It can be caused by viruses (hepatitis A, B, C, etc.), alcohol, toxins, or autoimmune diseases. It impairs liver function and can lead to jaundice."
  },
  {
    "id": "digestive-102",
    "question": "The enzyme that breaks down nucleic acids (DNA and RNA) into nucleotides is:",
    "options": [
      "Amylase",
      "Lipase",
      "Protease",
      "Nuclease"
    ],
    "correctAnswer": 3,
    "explanation": "Nucleases are enzymes that hydrolyze the phosphodiester bonds between nucleotides in nucleic acids. Pancreatic nucleases (DNase and RNase) break down DNA and RNA into oligonucleotides, which are further broken down by brush border enzymes."
  },
  {
    "id": "digestive-103",
    "question": "The part of the tooth that is harder than bone but softer than enamel is:",
    "options": [
      "Pulp",
      "Dentin",
      "Cementum",
      "Crown"
    ],
    "correctAnswer": 1,
    "explanation": "Dentin is the calcified tissue that makes up the majority of the tooth structure, lying underneath the enamel and cementum. It is harder than bone but not as hard as enamel, and it surrounds the pulp cavity."
  },
  {
    "id": "digestive-104",
    "question": "The phase of gastric secretion that inhibits gastric activity when the intestine is distended or acidic is the:",
    "options": [
      "Cephalic phase",
      "Gastric phase",
      "Intestinal phase",
      "Esophageal phase"
    ],
    "correctAnswer": 2,
    "explanation": "The intestinal phase is triggered by the entry of chyme into the duodenum. It primarily has an inhibitory effect, slowing gastric emptying and secretion via hormones like secretin, CCK, and GIP. This allows time for the small intestine to process the chyme."
  },
  {
    "id": "digestive-105",
    "question": "The condition where pouches form in the wall of the large intestine is called:",
    "options": [
      "Diverticulosis",
      "Appendicitis",
      "Ulcerative colitis",
      "Crohn's disease"
    ],
    "correctAnswer": 0,
    "explanation": "Diverticulosis is a condition characterized by the presence of small, bulging pouches (diverticula) that can form in the lining of the digestive system, most commonly in the colon. Inflammation of these pouches is called diverticulitis."
  },
  {
    "id": "digestive-106",
    "question": "The enzyme that activates trypsinogen to trypsin is:",
    "options": [
      "Enterokinase",
      "Pepsin",
      "HCl",
      "Carboxypeptidase"
    ],
    "correctAnswer": 0,
    "explanation": "Enterokinase (or enteropeptidase) is an enzyme produced by the brush border of the duodenum. It is the master switch for pancreatic protease activation. It cleaves a small peptide from trypsinogen, converting it into the active enzyme trypsin."
  },
  {
    "id": "digestive-107",
    "question": "The part of the peritoneum that hangs like an apron over the abdominal organs is the:",
    "options": [
      "Mesentery",
      "Lesser omentum",
      "Greater omentum",
      "Falciform ligament"
    ],
    "correctAnswer": 2,
    "explanation": "The greater omentum is a large, fatty, apron-like fold of peritoneum that drapes down from the greater curvature of the stomach, covering the transverse colon and coils of the small intestine. It contains fat and has an immune function, often walling off infections."
  },
  {
    "id": "digestive-108",
    "question": "The yellowing of the skin and eyes due to a buildup of bilirubin is called:",
    "options": [
      "Cyanosis",
      "Jaundice",
      "Pallor",
      "Erythema"
    ],
    "correctAnswer": 1,
    "explanation": "Jaundice (or icterus) is a condition characterized by a yellow discoloration of the skin, sclerae (whites of the eyes), and other tissues. It results from high levels of bilirubin in the blood, which can be caused by liver disease, bile duct obstruction, or excessive red blood cell breakdown."
  },
  {
    "id": "digestive-109",
    "question": "The enzyme that breaks down starch in the small intestine is:",
    "options": [
      "Salivary amylase",
      "Gastric amylase",
      "Pancreatic amylase",
      "Maltase"
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatic amylase is secreted by the pancreas into the duodenum. It continues the digestion of starch that was started by salivary amylase, breaking it down into disaccharides (maltose, isomaltose) and trisaccharides."
  },
  {
    "id": "digestive-110",
    "question": "The part of the large intestine that travels down the left side of the abdomen is the:",
    "options": [
      "Ascending colon",
      "Transverse colon",
      "Descending colon",
      "Sigmoid colon"
    ],
    "correctAnswer": 2,
    "explanation": "The descending colon runs down the left side of the abdominal cavity, from the left colic flexure (splenic flexure) to the sigmoid colon. It stores feces that are to be emptied into the rectum."
  },
  {
    "id": "digestive-111",
    "question": "The condition of having gallstones is called:",
    "options": [
      "Cholelithiasis",
      "Cholecystitis",
      "Cholangitis",
      "Cirrhosis"
    ],
    "correctAnswer": 0,
    "explanation": "Cholelithiasis is the medical term for the presence of gallstones, which are hardened deposits of bile that can form in the gallbladder. These stones can block the bile ducts, causing pain (biliary colic) and inflammation."
  },
  {
    "id": "digestive-112",
    "question": "The cells that secrete mucus throughout the digestive tract are called:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "Goblet cells",
      "Enteroendocrine cells"
    ],
    "correctAnswer": 2,
    "explanation": "Goblet cells are simple columnar epithelial cells that are specialized for secreting mucus. They are scattered among the other epithelial cells lining the entire digestive tract. Mucus lubricates the passage of food and protects the lining from digestion and abrasion."
  },
  {
    "id": "digestive-113",
    "question": "The part of the digestive system that has both endocrine and exocrine functions is the:",
    "options": [
      "Liver",
      "Pancreas",
      "Gallbladder",
      "Stomach"
    ],
    "correctAnswer": 1,
    "explanation": "The pancreas is a mixed gland. Its exocrine function (acinar cells) is to produce and secrete pancreatic juice containing digestive enzymes into the duodenum. Its endocrine function (Islets of Langerhans) is to secrete the hormones insulin and glucagon directly into the bloodstream to regulate blood sugar."
  },
  {
    "id": "digestive-114",
    "question": "The enzyme that breaks down peptides in the small intestine is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Amylase",
      "Lipase"
    ],
    "correctAnswer": 1,
    "explanation": "Trypsin is a powerful protease secreted by the pancreas. It hydrolyzes peptide bonds on the carboxyl side of the amino acids lysine and arginine, breaking down proteins and large peptides into smaller peptides."
  },
  {
    "id": "digestive-115",
    "question": "The part of the large intestine that travels up the right side of the abdomen is the:",
    "options": [
      "Ascending colon",
      "Transverse colon",
      "Descending colon",
      "Sigmoid colon"
    ],
    "correctAnswer": 0,
    "explanation": "The ascending colon is the first main part of the large intestine. It travels upward on the right side of the abdomen from the cecum to the right colic flexure (hepatic flexure) near the liver."
  },
  {
    "id": "digestive-116",
    "question": "The condition of inflammation of the appendix is called:",
    "options": [
      "Diverticulitis",
      "Appendicitis",
      "Peritonitis",
      "Gastritis"
    ],
    "correctAnswer": 1,
    "explanation": "Appendicitis is the acute inflammation of the appendix, usually caused by a blockage (e.g., by fecalith). It is a medical emergency because if the appendix ruptures, it can lead to a life-threatening infection of the peritoneum (peritonitis)."
  },
  {
    "id": "digestive-117",
    "question": "The cells in the pancreas that secrete glucagon are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "Acinar cells"
    ],
    "correctAnswer": 0,
    "explanation": "The endocrine pancreas contains clusters of cells called Islets of Langerhans. Alpha (α) cells secrete glucagon, which raises blood glucose levels. Beta (β) cells secrete insulin, which lowers blood glucose levels."
  },
  {
    "id": "digestive-118",
    "question": "The enzyme that breaks down lipids in the small intestine is:",
    "options": [
      "Pancreatic lipase",
      "Salivary lipase",
      "Gastric lipase",
      "Lingual lipase"
    ],
    "correctAnswer": 0,
    "explanation": "Pancreatic lipase is the primary enzyme responsible for the digestion of dietary fats (triglycerides). It is secreted by the pancreas into the duodenum and works on the surface of emulsified fat droplets to break them down into fatty acids and monoglycerides."
  },
  {
    "id": "digestive-119",
    "question": "The part of the digestive system that is a common passage for air and food is the:",
    "options": [
      "Larynx",
      "Trachea",
      "Pharynx",
      "Esophagus"
    ],
    "correctAnswer": 2,
    "explanation": "The pharynx is a muscular tube that serves as a common passageway for both the respiratory and digestive systems. Air passes through it to the larynx and trachea, while food passes through it to the esophagus."
  },
  {
    "id": "digestive-120",
    "question": "The condition of open sores in the lining of the stomach or duodenum is called:",
    "options": [
      "GERD",
      "Peptic ulcer",
      "Diverticulitis",
      "Hepatitis"
    ],
    "correctAnswer": 1,
    "explanation": "A peptic ulcer is an erosion in the lining of the stomach (gastric ulcer) or the duodenum (duodenal ulcer). It is often caused by the bacterium Helicobacter pylori or by long-term use of NSAIDs, which break down the protective mucosal barrier."
  },
  {
    "id": "digestive-121",
    "question": "The cells in the pancreas that secrete digestive enzymes are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "Acinar cells"
    ],
    "correctAnswer": 3,
    "explanation": "The exocrine portion of the pancreas is made up of acinar cells. These cells synthesize, store, and secrete a wide range of digestive enzymes (amylase, lipase, proteases, nucleases) into tiny ducts that eventually form the pancreatic duct."
  },
  {
    "id": "digestive-122",
    "question": "The enzyme that breaks down proteins in the stomach is:",
    "options": [
      "Trypsin",
      "Pepsin",
      "Chymotrypsin",
      "Carboxypeptidase"
    ],
    "correctAnswer": 1,
    "explanation": "Pepsin is the main proteolytic enzyme in the stomach. It is secreted as pepsinogen by chief cells and activated by HCl. It breaks proteins down into smaller polypeptides by cleaving peptide bonds adjacent to aromatic amino acids."
  },
  {
    "id": "digestive-123",
    "question": "The part of the digestive system that is responsible for the initial mechanical breakdown of food is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Mouth",
      "Esophagus"
    ],
    "correctAnswer": 2,
    "explanation": "The mouth is the site of ingestion and the initial mechanical breakdown of food through the process of mastication (chewing). The teeth tear and grind food into smaller pieces, increasing the surface area for enzymatic action."
  },
  {
    "id": "digestive-124",
    "question": "The condition of inflammation of the gallbladder is called:",
    "options": [
      "Cholelithiasis",
      "Cholecystitis",
      "Cholangitis",
      "Cirrhosis"
    ],
    "correctAnswer": 1,
    "explanation": "Cholecystitis is inflammation of the gallbladder, most commonly caused by gallstones obstructing the cystic duct. Symptoms include severe pain in the upper right abdomen, nausea, and vomiting."
  },
  {
    "id": "digestive-125",
    "question": "The cells in the pancreas that secrete insulin are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "Acinar cells"
    ],
    "correctAnswer": 1,
    "explanation": "Beta (β) cells are the most abundant cell type in the Islets of Langerhans. They produce and secrete the hormone insulin, which promotes the uptake of glucose by cells, thereby lowering blood glucose levels."
  },
  {
    "id": "digestive-126",
    "question": "The enzyme that breaks down nucleotides into nitrogenous bases, pentose sugars, and phosphate ions is:",
    "options": [
      "Nuclease",
      "Nucleosidase",
      "Nucleotidase",
      "Peptidase"
    ],
    "correctAnswer": 1,
    "explanation": "Nucleosidases are brush border enzymes that hydrolyze nucleotides (e.g., from nucleic acid digestion) into their components: a nitrogenous base (adenine, guanine, etc.) and a pentose sugar (ribose or deoxyribose). Phosphatases remove the phosphate group."
  },
  {
    "id": "digestive-127",
    "question": "The part of the digestive system that has no known essential function in humans is the:",
    "options": [
      "Stomach",
      "Appendix",
      "Pancreas",
      "Liver"
    ],
    "correctAnswer": 1,
    "explanation": "The appendix is a vestigial organ in humans, meaning it has lost most of its original function. It may play a minor role in immune function by housing beneficial gut bacteria, but it is not essential for digestion or survival."
  },
  {
    "id": "digestive-128",
    "question": "The condition of chronic liver damage leading to scarring and liver failure is called:",
    "options": [
      "Hepatitis",
      "Cirrhosis",
      "Jaundice",
      "Cholecystitis"
    ],
    "correctAnswer": 1,
    "explanation": "Cirrhosis is the late stage of scarring (fibrosis) of the liver caused by many forms of liver diseases and conditions, such as hepatitis and chronic alcoholism. The scar tissue impairs the liver's ability to function properly."
  },
  {
    "id": "digestive-129",
    "question": "The cells that secrete hormones into the bloodstream in the digestive tract are called:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "Goblet cells",
      "Enteroendocrine cells"
    ],
    "correctAnswer": 3,
    "explanation": "Enteroendocrine cells are specialized cells scattered within the epithelium of the stomach and intestines. They secrete various gastrointestinal hormones (e.g., gastrin, secretin, CCK, GIP) directly into the bloodstream in response to chemical or mechanical stimuli from the gut lumen."
  },
  {
    "id": "digestive-130",
    "question": "The enzyme that breaks down hydrogen peroxide produced by intestinal bacteria into water and oxygen is:",
    "options": [
      "Amylase",
      "Catalase",
      "Pepsin",
      "Trypsin"
    ],
    "correctAnswer": 1,
    "explanation": "Catalase is an enzyme found in nearly all living organisms. It catalyzes the decomposition of hydrogen peroxide (H₂O₂), a potentially harmful byproduct of metabolic processes, into harmless water and oxygen."
  },
  {
    "id": "digestive-131",
    "question": "The part of the digestive system that is primarily involved in the absorption of water and electrolytes is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Pancreas"
    ],
    "correctAnswer": 2,
    "explanation": "While the small intestine absorbs the majority of water ingested, the large intestine is crucial for absorbing the remaining water and electrolytes from the indigestible food residue, solidifying it into feces."
  },
  {
    "id": "digestive-132",
    "question": "The condition of inability to digest lactose due to deficiency of lactase is called:",
    "options": [
      "Lactose intolerance",
      "Celiac disease",
      "Crohn's disease",
      "Ulcerative colitis"
    ],
    "correctAnswer": 0,
    "explanation": "Lactose intolerance is a common condition where the body produces low levels of the enzyme lactase. This leads to an inability to fully digest the sugar (lactose) in milk products, causing symptoms like bloating, diarrhea, and gas after consumption."
  },
  {
    "id": "digestive-133",
    "question": "The cells that secrete a watery fluid in the salivary glands are the:",
    "options": [
      "Serous cells",
      "Mucous cells",
      "Parietal cells",
      "Chief cells"
    ],
    "correctAnswer": 0,
    "explanation": "Salivary glands contain two main types of secretory cells. Serous cells secrete a watery fluid containing enzymes like salivary amylase and lysozyme. Mucous cells secrete a thicker, viscous mucus for lubrication."
  },
  {
    "id": "digestive-134",
    "question": "The enzyme that breaks down dipeptides into amino acids is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Dipeptidase",
      "Enterokinase"
    ],
    "correctAnswer": 2,
    "explanation": "Dipeptidases are brush border enzymes that hydrolyze dipeptides (two amino acids linked together) into their individual amino acids, which are then absorbed into the intestinal cells."
  },
  {
    "id": "digestive-135",
    "question": "The part of the digestive system that produces intrinsic factor is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Pancreas",
      "Liver"
    ],
    "correctAnswer": 0,
    "explanation": "Intrinsic factor is a glycoprotein secreted by the parietal cells of the stomach lining. It is essential for the absorption of vitamin B12 in the ileum of the small intestine. A lack of intrinsic factor leads to pernicious anemia."
  },
  {
    "id": "digestive-136",
    "question": "The condition of inflammation of the peritoneum is called:",
    "options": [
      "Appendicitis",
      "Peritonitis",
      "Diverticulitis",
      "Gastritis"
    ],
    "correctAnswer": 1,
    "explanation": "Peritonitis is the inflammation of the peritoneum, the thin membrane that lines the inner wall of the abdomen and covers the abdominal organs. It is a serious, often fatal condition that can result from a ruptured appendix, perforated ulcer, or other abdominal trauma or infection."
  },
  {
    "id": "digestive-137",
    "question": "The cells that secrete a thick, viscous mucus in the salivary glands are the:",
    "options": [
      "Serous cells",
      "Mucous cells",
      "Acinar cells",
      "Duct cells"
    ],
    "correctAnswer": 1,
    "explanation": "Mucous cells in the salivary glands (particularly the sublingual and submandibular glands) secrete mucus, a thick, slippery fluid that lubricates food and helps bind it into a smooth bolus for swallowing."
  },
  {
    "id": "digestive-138",
    "question": "The enzyme that breaks down trypsinogen into trypsin is:",
    "options": [
      "Pepsin",
      "Enterokinase",
      "HCl",
      "Chymotrypsin"
    ],
    "correctAnswer": 1,
    "explanation": "Enterokinase (enteropeptidase) is the key activator. It is an enzyme embedded in the brush border of the duodenal mucosa. It cleaves a small peptide from the N-terminus of trypsinogen, converting it into the active protease, trypsin."
  },
  {
    "id": "digestive-139",
    "question": "The part of the digestive system that stores and concentrates bile is the:",
    "options": [
      "Liver",
      "Gallbladder",
      "Pancreas",
      "Duodenum"
    ],
    "correctAnswer": 1,
    "explanation": "The gallbladder is a small, pear-shaped organ that stores and concentrates bile between meals. When food, especially fatty food, enters the duodenum, the gallbladder contracts and ejects the concentrated bile through the bile duct."
  },
  {
    "id": "digestive-140",
    "question": "The condition of autoimmune disorder damaging the small intestine lining in response to gluten is called:",
    "options": [
      "Lactose intolerance",
      "Celiac disease",
      "Crohn's disease",
      "Irritable bowel syndrome"
    ],
    "correctAnswer": 1,
    "explanation": "Celiac disease is an autoimmune disorder where the ingestion of gluten (a protein found in wheat, barley, rye) leads to damage in the small intestine. This damage flattens the villi (villous atrophy), impairing nutrient absorption."
  },
  {
    "id": "digestive-141",
    "question": "The cells that secrete hydrochloric acid in the stomach are the:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "Goblet cells",
      "G-cells"
    ],
    "correctAnswer": 1,
    "explanation": "Parietal cells (or oxyntic cells) are found in the gastric glands of the stomach mucosa. They have a unique proton pump (H+/K+ ATPase) that actively secretes hydrogen ions into the stomach lumen, creating a very acidic environment."
  },
  {
    "id": "digestive-142",
    "question": "The enzyme that breaks down emulsified fats into fatty acids and monoglycerides is:",
    "options": [
      "Bile salts",
      "Pancreatic lipase",
      "Gastric lipase",
      "Colipase"
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatic lipase is the primary fat-digesting enzyme. It hydrolyzes the ester bonds in triglycerides (fats), breaking them down into two free fatty acids and one monoglyceride. It requires bile salts for emulsification and colipase as a cofactor."
  },
  {
    "id": "digestive-143",
    "question": "The part of the digestive system that is the primary site for vitamin B12 absorption is the:",
    "options": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "correctAnswer": 3,
    "explanation": "The ileum, the final section of the small intestine, has specific receptors that recognize and absorb the complex of vitamin B12 bound to intrinsic factor (which is produced in the stomach)."
  },
  {
    "id": "digestive-144",
    "question": "The condition of chronic inflammation of the digestive tract, often affecting the ileum, is called:",
    "options": [
      "Celiac disease",
      "Crohn's disease",
      "Ulcerative colitis",
      "Diverticulitis"
    ],
    "correctAnswer": 1,
    "explanation": "Crohn's disease is a type of inflammatory bowel disease (IBD) that can affect any part of the GI tract from mouth to anus, but it most commonly affects the end of the small intestine (ileum) and the beginning of the colon. It involves transmural inflammation (through all layers of the intestinal wall)."
  },
  {
    "id": "digestive-145",
    "question": "The cells that secrete pepsinogen in the stomach are the:",
    "options": [
      "Parietal cells",
      "Chief cells",
      "Mucous cells",
      "Enteroendocrine cells"
    ],
    "correctAnswer": 1,
    "explanation": "Chief cells (or zymogenic cells) are located in the basal regions of the gastric glands. They secrete the inactive protease precursor, pepsinogen, which is then activated to pepsin by the acidic environment of the stomach."
  },
  {
    "id": "digestive-146",
    "question": "The enzyme that breaks down starch into maltose in the mouth is:",
    "options": [
      "Pancreatic amylase",
      "Salivary amylase",
      "Maltase",
      "Lactase"
    ],
    "correctAnswer": 1,
    "explanation": "Salivary amylase (ptyalin) is produced by the serous cells of the salivary glands. It begins the chemical digestion of carbohydrates in the mouth by hydrolyzing starch into smaller molecules like maltose and dextrins."
  },
  {
    "id": "digestive-147",
    "question": "The part of the digestive system that receives bile and pancreatic juice is the:",
    "options": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "correctAnswer": 1,
    "explanation": "The duodenum is the initial C-shaped segment of the small intestine. It receives chyme from the stomach and is the entry point for bile (from the liver/gallbladder) and pancreatic juice (from the pancreas) through the hepatopancreatic ampulla."
  },
  {
    "id": "digestive-148",
    "question": "The condition of inflammation of the stomach lining is called:",
    "options": [
      "Gastritis",
      "Enteritis",
      "Colitis",
      "Hepatitis"
    ],
    "correctAnswer": 0,
    "explanation": "Gastritis is the inflammation, irritation, or erosion of the stomach lining (gastric mucosa). It can be caused by infection (e.g., H. pylori), excessive alcohol use, chronic vomiting, stress, or certain medications like NSAIDs."
  },
  {
    "id": "digestive-149",
    "question": "The cells that secrete gastrin in the stomach are the:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "G-cells",
      "Mucous cells"
    ],
    "correctAnswer": 2,
    "explanation": "G-cells are endocrine cells located primarily in the pyloric antrum of the stomach. They secrete the hormone gastrin into the bloodstream in response to food distension and certain chemicals. Gastrin then stimulates HCl secretion by parietal cells."
  },
  {
    "id": "digestive-150",
    "question": "The enzyme that breaks down proteins into peptides in the small intestine is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Amylase",
      "Lipase"
    ],
    "correctAnswer": 1,
    "explanation": "Trypsin is a major pancreatic protease. It is secreted into the duodenum and is responsible for cleaving peptide bonds, breaking down proteins and large polypeptides into smaller peptides. It also activates other pancreatic zymogens."
  },
  {
    "id": "digestive-151",
    "question": "The part of the digestive system that has rugae when empty is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "correctAnswer": 0,
    "explanation": "The inner lining of the stomach is thrown into large, longitudinal folds called rugae. These folds allow the stomach to expand when full and flatten out. They also increase the surface area for secretion."
  },
  {
    "id": "digestive-152",
    "question": "The condition of inflammation of the liver is called:",
    "options": [
      "Hepatitis",
      "Cirrhosis",
      "Cholecystitis",
      "Pancreatitis"
    ],
    "correctAnswer": 0,
    "explanation": "Hepatitis is the general term for inflammation of the liver. It can be acute or chronic and has various causes, including viruses (hepatitis A, B, C, etc.), alcohol, drugs, toxins, and autoimmune diseases."
  },
  {
    "id": "digestive-153",
    "question": "The cells that secrete bicarbonate ions to neutralize acid in the small intestine are found in the:",
    "options": [
      "Liver",
      "Pancreas",
      "Gallbladder",
      "Duodenal glands"
    ],
    "correctAnswer": 1,
    "explanation": "The pancreas has duct cells that secrete a bicarbonate-rich solution. This alkaline secretion is stimulated by the hormone secretin and is crucial for neutralizing the highly acidic chyme that enters the duodenum from the stomach, creating a pH optimum for pancreatic and intestinal enzymes."
  },
  {
    "id": "digestive-154",
    "question": "The enzyme that breaks down sucrose into glucose and fructose is:",
    "options": [
      "Maltase",
      "Sucrase",
      "Lactase",
      "Amylase"
    ],
    "correctAnswer": 1,
    "explanation": "Sucrase is a brush border enzyme embedded in the membranes of the microvilli in the small intestine. It hydrolyzes the disaccharide sucrose into its two monosaccharide components: glucose and fructose."
  },
  {
    "id": "digestive-155",
    "question": "The part of the digestive system that has haustra is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "correctAnswer": 2,
    "explanation": "Haustra are the sac-like pouches that give the colon its segmented appearance. They are formed because the teniae coli (three bands of longitudinal muscle) are shorter than the colon, causing it to pouch out between them."
  },
  {
    "id": "digestive-156",
    "question": "The condition of inflammation of the pancreas is called:",
    "options": [
      "Hepatitis",
      "Cholecystitis",
      "Pancreatitis",
      "Gastritis"
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatitis is the inflammation of the pancreas. It occurs when digestive enzymes become activated while still inside the pancreas, causing the organ to digest itself. It can be acute or chronic and is often caused by gallstones or alcohol abuse."
  },
  {
    "id": "digestive-157",
    "question": "The cells that secrete mucus in the stomach are the:",
    "options": [
      "Chief cells",
      "Parietal cells",
      "Mucous neck cells",
      "G-cells"
    ],
    "correctAnswer": 2,
    "explanation": "Mucous neck cells are found in the upper, neck region of the gastric glands. They secrete a thin, acidic mucus that is different from the mucus secreted by the surface epithelial cells. This mucus helps protect the stomach lining."
  },
  {
    "id": "digestive-158",
    "question": "The enzyme that breaks down lactose into glucose and galactose is:",
    "options": [
      "Maltase",
      "Sucrase",
      "Lactase",
      "Amylase"
    ],
    "correctAnswer": 2,
    "explanation": "Lactase is the brush border enzyme responsible for digesting lactose, the sugar found in milk. It hydrolyzes lactose into its two monosaccharides: glucose and galactose. A deficiency in lactase causes lactose intolerance."
  },
  {
    "id": "digestive-159",
    "question": "The part of the digestive system that has Peyer's patches is the:",
    "options": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "correctAnswer": 3,
    "explanation": "Peyer's patches are large clusters of lymphoid tissue found predominantly in the wall of the ileum. They are part of the gut-associated lymphoid tissue (GALT) and play a key role in monitoring intestinal bacteria and preventing the growth of pathogenic bacteria."
  },
  {
    "id": "digestive-160",
    "question": "The condition of stones in the salivary glands is called:",
    "options": [
      "Cholelithiasis",
      "Sialolithiasis",
      "Nephrolithiasis",
      "Pancreolithiasis"
    ],
    "correctAnswer": 1,
    "explanation": "Sialolithiasis is the formation of calculi (stones) in the salivary glands or ducts. These stones can obstruct the flow of saliva, causing pain and swelling, particularly before meals when salivary flow is stimulated."
  },
  {
    "id": "digestive-161",
    "question": "The cells that secrete a hormone that inhibits gastric secretion and emptying are the:",
    "options": [
      "G-cells in the stomach",
      "S-cells in the duodenum",
      "I-cells in the duodenum",
      "K-cells in the duodenum"
    ],
    "correctAnswer": 3,
    "explanation": "K-cells are enteroendocrine cells located in the mucosa of the duodenum and jejunum. They secrete Gastric Inhibitory Peptide (GIP) in response to fat and glucose in the duodenum. GIP inhibits gastric acid secretion and slows gastric emptying."
  },
  {
    "id": "digestive-162",
    "question": "The enzyme that breaks down maltose into glucose is:",
    "options": [
      "Maltase",
      "Sucrase",
      "Lactase",
      "Amylase"
    ],
    "correctAnswer": 0,
    "explanation": "Maltase is a brush border enzyme that specifically catalyzes the hydrolysis of the disaccharide maltose into two molecules of glucose."
  },
  {
    "id": "digestive-163",
    "question": "The part of the digestive system that has teniae coli is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "correctAnswer": 2,
    "explanation": "The teniae coli are three distinct bands of longitudinal smooth muscle that run along the length of the large intestine (except the rectum). Their tone is responsible for the haustra, the puckered sacs of the colon."
  },
  {
    "id": "digestive-164",
    "question": "The condition of inflammation of the small intestine is called:",
    "options": [
      "Gastritis",
      "Enteritis",
      "Colitis",
      "Hepatitis"
    ],
    "correctAnswer": 1,
    "explanation": "Enteritis is inflammation of the small intestine. It is often caused by infection (bacterial or viral), leading to symptoms like abdominal pain, cramping, diarrhea, and nausea. Severe or prolonged enteritis can lead to malabsorption."
  },
  {
    "id": "digestive-165",
    "question": "The cells that secrete the hormone secretin are the:",
    "options": [
      "G-cells in the stomach",
      "S-cells in the duodenum",
      "I-cells in the duodenum",
      "K-cells in the duodenum"
    ],
    "correctAnswer": 1,
    "explanation": "S-cells are enteroendocrine cells located in the mucosa of the duodenum. They secrete the hormone secretin in response to the acidity (low pH) of chyme entering from the stomach. Secretin stimulates the pancreas to secrete bicarbonate."
  },
  {
    "id": "digestive-166",
    "question": "The enzyme that breaks down nucleic acids into nucleotides is:",
    "options": [
      "Nuclease",
      "Nucleosidase",
      "Nucleotidase",
      "Peptidase"
    ],
    "correctAnswer": 0,
    "explanation": "Nucleases are enzymes that hydrolyze the phosphodiester bonds between nucleotides in DNA and RNA. Pancreatic nucleases (DNase and RNase) break down dietary nucleic acids into oligonucleotides and mononucleotides."
  },
  {
    "id": "digestive-167",
    "question": "The part of the digestive system that has circular folds (plicae circulares) is the:",
    "options": [
      "Stomach",
      "Small intestine",
      "Large intestine",
      "Esophagus"
    ],
    "correctAnswer": 1,
    "explanation": "Circular folds (or valves of Kerckring) are permanent, deep folds of the mucosa and submucosa in the small intestine, especially the jejunum. They slow the passage of food and greatly increase the surface area for digestion and absorption."
  },
  {
    "id": "digestive-168",
    "question": "The condition of inflammation of the colon is called:",
    "options": [
      "Gastritis",
      "Enteritis",
      "Colitis",
      "Hepatitis"
    ],
    "correctAnswer": 2,
    "explanation": "Colitis is inflammation of the colon. It can have many causes, including infection, inflammatory bowel disease (like ulcerative colitis), ischemic colitis, and microscopic colitis. Symptoms often include diarrhea, which may contain blood, and abdominal pain."
  },
  {
    "id": "digestive-169",
    "question": "The cells that secrete the hormone cholecystokinin (CCK) are the:",
    "options": [
      "G-cells in the stomach",
      "S-cells in the duodenum",
      "I-cells in the duodenum",
      "K-cells in the duodenum"
    ],
    "correctAnswer": 2,
    "explanation": "I-cells are enteroendocrine cells found in the duodenal and jejunal mucosa. They secrete cholecystokinin (CCK) in response to the presence of fatty acids and peptides. CCK stimulates gallbladder contraction and pancreatic enzyme secretion."
  },
  {
    "id": "digestive-170",
    "question": "The enzyme that breaks down peptides into amino acids in the small intestine is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Carboxypeptidase",
      "Amylase"
    ],
    "correctAnswer": 2,
    "explanation": "Carboxypeptidase is a pancreatic protease. It is an exopeptidase that cleaves off amino acids from the carboxyl (C-) end of peptides, working in concert with other proteases like trypsin and chymotrypsin to break down proteins into free amino acids."
  },
  {
    "id": "digestive-171",
    "question": "The part of the digestive system that is a storage site for glycogen is the:",
    "options": [
      "Stomach",
      "Pancreas",
      "Liver",
      "Gallbladder"
    ],
    "correctAnswer": 2,
    "explanation": "The liver plays a central role in carbohydrate metabolism. After a meal, it takes up glucose from the blood and converts it into glycogen for storage (glycogenesis). Between meals, it breaks down glycogen (glycogenolysis) to release glucose back into the blood."
  },
  {
    "id": "digestive-172",
    "question": "The condition of difficulty in swallowing is called:",
    "options": [
      "Dysphagia",
      "Dyspepsia",
      "Diarrhea",
      "Constipation"
    ],
    "correctAnswer": 0,
    "explanation": "Dysphagia is the medical term for difficulty swallowing. It can feel like food is stuck in the throat or chest and can be caused by neurological disorders, muscular problems, or obstructions in the esophagus."
  },
  {
    "id": "digestive-173",
    "question": "The cells that secrete a watery fluid rich in enzymes in the pancreas are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "Acinar cells"
    ],
    "correctAnswer": 3,
    "explanation": "Acinar cells are the exocrine secretory cells of the pancreas. They are arranged in grape-like clusters (acini) and secrete pancreatic juice, which is a watery fluid containing a wide array of digestive enzymes (proteases, amylase, lipase, nucleases) and is delivered to the duodenum."
  },
  {
    "id": "digestive-174",
    "question": "The enzyme that breaks down emulsified fats is assisted by a coenzyme called:",
    "options": [
      "Enterokinase",
      "Colipase",
      "Pepsinogen",
      "Trypsinogen"
    ],
    "correctAnswer": 1,
    "explanation": "Colipase is a protein cofactor secreted by the pancreas. Bile salts can inhibit pancreatic lipase by displacing it from the fat droplet surface. Colipase binds to the droplet and to lipase, anchoring the lipase to its substrate and restoring its activity in the presence of bile salts."
  },
  {
    "id": "digestive-175",
    "question": "The part of the digestive system that produces urea is the:",
    "options": [
      "Stomach",
      "Pancreas",
      "Liver",
      "Kidneys"
    ],
    "correctAnswer": 2,
    "explanation": "The liver is the primary site of the urea cycle, a series of biochemical reactions that convert toxic ammonia (a waste product of protein metabolism) into urea, which is much less toxic. Urea is then excreted from the body by the kidneys."
  },
  {
    "id": "digestive-176",
    "question": "The condition of infrequent or difficult bowel movements is called:",
    "options": [
      "Diarrhea",
      "Constipation",
      "Dyspepsia",
      "Dysphagia"
    ],
    "correctAnswer": 1,
    "explanation": "Constipation refers to infrequent bowel movements (typically fewer than three per week) or difficult passage of stools that persists for several weeks or longer. It often results from slow movement of stool through the colon, allowing too much water to be absorbed."
  },
  {
    "id": "digestive-177",
    "question": "The cells that secrete bicarbonate ions in the pancreas are the:",
    "options": [
      "Acinar cells",
      "Duct cells",
      "Alpha cells",
      "Beta cells"
    ],
    "correctAnswer": 1,
    "explanation": "The epithelial cells lining the pancreatic ducts secrete a bicarbonate-rich fluid. This secretion is stimulated by the hormone secretin and is crucial for neutralizing the acidic chyme that enters the duodenum from the stomach."
  },
  {
    "id": "digestive-178",
    "question": "The enzyme that breaks down proteins into peptides in the stomach is:",
    "options": [
      "Trypsin",
      "Pepsin",
      "Chymotrypsin",
      "Carboxypeptidase"
    ],
    "correctAnswer": 1,
    "explanation": "Pepsin is the principal protease of the stomach. Secreted as inactive pepsinogen and activated by HCl, it breaks down dietary proteins into a mixture of smaller polypeptides. It works best in the highly acidic environment of the stomach."
  },
  {
    "id": "digestive-179",
    "question": "The part of the digestive system that detoxifies many drugs and chemicals is the:",
    "options": [
      "Stomach",
      "Pancreas",
      "Liver",
      "Kidneys"
    ],
    "correctAnswer": 2,
    "explanation": "The liver is the body's primary detoxification organ. Hepatocytes contain enzymes that metabolize and inactivate many drugs, toxins, and hormones, making them easier to excrete from the body via bile or urine."
  },
  {
    "id": "digestive-180",
    "question": "The condition of frequent, loose, or watery bowel movements is called:",
    "options": [
      "Constipation",
      "Diarrhea",
      "Dyspepsia",
      "Dysphagia"
    ],
    "correctAnswer": 1,
    "explanation": "Diarrhea is characterized by the passage of loose, watery stools three or more times a day. It occurs when the small intestine and colon do not absorb enough water, or when they secrete excess fluid. It can be caused by infections, food intolerances, or various diseases."
  },
  {
    "id": "digestive-181",
    "question": "The cells that secrete glucagon in the pancreas are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "Acinar cells"
    ],
    "correctAnswer": 0,
    "explanation": "Alpha (α) cells are one of the cell types found in the Islets of Langerhans in the pancreas. They secrete the hormone glucagon in response to low blood glucose levels. Glucagon stimulates the liver to break down glycogen into glucose, raising blood sugar."
  },
  {
    "id": "digestive-182",
    "question": "The enzyme that breaks down starch into maltose in the small intestine is:",
    "options": [
      "Salivary amylase",
      "Pancreatic amylase",
      "Maltase",
      "Lactase"
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatic amylase is secreted by the acinar cells of the pancreas into the duodenum. It continues the digestion of starch and glycogen that was started in the mouth, breaking them down into disaccharides (primarily maltose and isomaltose)."
  },
  {
    "id": "digestive-183",
    "question": "The part of the digestive system that produces plasma proteins like albumin is the:",
    "options": [
      "Stomach",
      "Pancreas",
      "Liver",
      "Bone marrow"
    ],
    "correctAnswer": 2,
    "explanation": "The liver synthesizes and secretes most of the plasma proteins found in the blood, including albumin (which maintains osmotic pressure), clotting factors (fibrinogen, prothrombin), and carrier proteins."
  },
  {
    "id": "digestive-184",
    "question": "The condition of heartburn due to acid reflux is called:",
    "options": [
      "GERD",
      "Peptic ulcer",
      "Gastritis",
      "Diverticulitis"
    ],
    "correctAnswer": 0,
    "explanation": "Gastroesophageal Reflux Disease (GERD) is a chronic condition where stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) can irritate the lining of your esophagus and cause a burning sensation known as heartburn."
  },
  {
    "id": "digestive-185",
    "question": "The cells that secrete insulin in the pancreas are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "Acinar cells"
    ],
    "correctAnswer": 1,
    "explanation": "Beta (β) cells are the most abundant cells in the Islets of Langerhans. They produce and secrete the hormone insulin in response to elevated blood glucose levels (e.g., after a meal). Insulin promotes the uptake of glucose by cells, lowering blood sugar."
  },
  {
    "id": "digestive-186",
    "question": "The enzyme that breaks down nucleotides into nucleosides and phosphate is:",
    "options": [
      "Nuclease",
      "Nucleosidase",
      "Nucleotidase",
      "Peptidase"
    ],
    "correctAnswer": 2,
    "explanation": "Nucleotidases are phosphatases that remove the phosphate group from nucleotides, converting them into nucleosides. This is one of the final steps in the digestion of nucleic acids."
  },
  {
    "id": "digestive-187",
    "question": "The part of the digestive system that stores feces temporarily is the:",
    "options": [
      "Cecum",
      "Colon",
      "Rectum",
      "Anus"
    ],
    "correctAnswer": 2,
    "explanation": "The rectum is the final section of the large intestine. It serves as a temporary storage site for feces. When the rectum becomes distended, it triggers the defecation reflex, leading to the expulsion of feces through the anus."
  },
  {
    "id": "digestive-188",
    "question": "The condition of inflammation of the bile ducts is called:",
    "options": [
      "Cholelithiasis",
      "Cholecystitis",
      "Cholangitis",
      "Hepatitis"
    ],
    "correctAnswer": 2,
    "explanation": "Cholangitis is inflammation of the bile duct system, usually caused by a bacterial infection secondary to bile duct obstruction (e.g., by a gallstone). It is a serious condition that can be life-threatening if not treated promptly."
  },
  {
    "id": "digestive-189",
    "question": "The cells that secrete somatostatin in the pancreas are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "PP cells"
    ],
    "correctAnswer": 2,
    "explanation": "Delta (δ) cells in the pancreatic islets secrete the hormone somatostatin. Somatostatin has a paracrine inhibitory effect; it suppresses the secretion of both insulin and glucagon from the neighboring beta and alpha cells, respectively, as well as other digestive secretions."
  },
  {
    "id": "digestive-190",
    "question": "The enzyme that breaks down nucleosides into nitrogenous bases and pentose sugars is:",
    "options": [
      "Nuclease",
      "Nucleosidase",
      "Nucleotidase",
      "Peptidase"
    ],
    "correctAnswer": 1,
    "explanation": "Nucleosidases are brush border enzymes that complete the digestion of nucleic acids. They hydrolyze nucleosides (which consist of a nitrogenous base bound to a sugar) into their separate components: a free nitrogenous base and a pentose sugar (ribose or deoxyribose)."
  },
  {
    "id": "digestive-191",
    "question": "The part of the digestive system that is controlled by both voluntary and involuntary sphincters is the:",
    "options": [
      "Esophagus",
      "Stomach",
      "Small intestine",
      "Anus"
    ],
    "correctAnswer": 3,
    "explanation": "The anus has two sphincters. The internal anal sphincter is composed of smooth muscle and is under involuntary control. The external anal sphincter is composed of skeletal muscle and is under voluntary control, allowing us to consciously decide when to defecate."
  },
  {
    "id": "digestive-192",
    "question": "The condition of abnormal, premature activation of pancreatic enzymes within the pancreas itself is:",
    "options": [
      "Hepatitis",
      "Cholecystitis",
      "Pancreatitis",
      "Gastritis"
    ],
    "correctAnswer": 2,
    "explanation": "Pancreatitis occurs when the digestive enzymes produced by the pancreas (e.g., trypsin) become activated prematurely while still inside the pancreatic acinar cells. This leads to autodigestion and inflammation of the pancreatic tissue."
  },
  {
    "id": "digestive-193",
    "question": "The cells that secrete pancreatic polypeptide in the pancreas are the:",
    "options": [
      "Alpha cells",
      "Beta cells",
      "Delta cells",
      "PP cells"
    ],
    "correctAnswer": 3,
    "explanation": "PP cells (or F cells) are found in the Islets of Langerhans, particularly in the head of the pancreas. They secrete pancreatic polypeptide, a hormone that inhibits pancreatic exocrine secretion and gallbladder contraction, and slows gastric emptying."
  },
  {
    "id": "digestive-194",
    "question": "The enzyme that breaks down peptides into amino acids in the small intestine is:",
    "options": [
      "Pepsin",
      "Trypsin",
      "Aminopeptidase",
      "Amylase"
    ],
    "correctAnswer": 2,
    "explanation": "Aminopeptidases are brush border enzymes. They are exopeptidases that cleave off amino acids one at a time from the amino (N-) terminus of peptides and polypeptides, working with other peptidases to produce free amino acids for absorption."
  },
  {
    "id": "digestive-195",
    "question": "The part of the digestive system that is the primary site for iron absorption is the:",
    "options": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "correctAnswer": 1,
    "explanation": "The duodenum is the main site for the absorption of iron, as well as calcium and magnesium. The acidic environment of the stomach helps keep iron in its absorbable ferrous (Fe²⁺) state, and it is absorbed by specific transporters in the duodenal mucosa."
  },
  {
    "id": "digestive-196",
    "question": "The condition of chronic inflammation and ulceration of the colon and rectum is called:",
    "options": [
      "Celiac disease",
      "Crohn's disease",
      "Ulcerative colitis",
      "Diverticulitis"
    ],
    "correctAnswer": 2,
    "explanation": "Ulcerative colitis is a type of inflammatory bowel disease (IBD) that causes long-lasting inflammation and ulcers (sores) in the innermost lining of the colon (large intestine) and rectum. It typically affects the continuous distal part of the colon, starting from the rectum."
  },
  {
    "id": "digestive-197",
    "question": "The cells that secrete a hormone that stimulates hunger are the:",
    "options": [
      "G-cells in the stomach",
      "S-cells in the duodenum",
      "I-cells in the duodenum",
      "Ghrelin cells in the stomach"
    ],
    "correctAnswer": 3,
    "explanation": "Ghrelin is known as the 'hunger hormone.' It is produced primarily by enteroendocrine cells in the stomach (and to a lesser extent in the small intestine). Ghrelin levels rise before meals and stimulate appetite, and they fall after meals."
  },
  {
    "id": "digestive-198",
    "question": "The enzyme that breaks down triglycerides into fatty acids and monoglycerides is:",
    "options": [
      "Bile salts",
      "Pancreatic lipase",
      "Gastric lipase",
      "Colipase"
    ],
    "correctAnswer": 1,
    "explanation": "Pancreatic lipase is the key enzyme for fat digestion. It hydrolyzes dietary triglycerides (the main form of fat in food), breaking the ester bonds to release two free fatty acids and one 2-monoglyceride. It requires bile for emulsification and colipase as a cofactor."
  },
  {
    "id": "digestive-199",
    "question": "The part of the digestive system that is the primary site for calcium absorption is the:",
    "options": [
      "Stomach",
      "Duodenum",
      "Jejunum",
      "Ileum"
    ],
    "correctAnswer": 1,
    "explanation": "The duodenum is the major site for calcium absorption. Absorption is enhanced by the active form of vitamin D (calcitriol), which increases the synthesis of calcium-binding proteins and calcium transporters in the duodenal epithelial cells."
  },
  {
    "id": "digestive-200",
    "question": "The condition of inflammation of the peritoneum, often due to a ruptured appendix, is called:",
    "options": [
      "Appendicitis",
      "Peritonitis",
      "Diverticulitis",
      "Gastritis"
    ],
    "correctAnswer": 1,
    "explanation": "Peritonitis is inflammation of the peritoneum, the silk-like membrane that lines your inner abdominal wall and covers the organs within your abdomen. It is most often caused by infection from bacteria or fungi due to a rupture or perforation in the abdomen, such as a burst appendix."
  }
]
  