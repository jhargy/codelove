
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const humanRespiratorySystemQuestions: Question[] = [
  {
    "id": "resp-1",
    "question": "What is the primary function of the respiratory system?",
    "options": [
      "To pump blood throughout the body",
      "To provide a site for gas exchange between air and blood",
      "To digest food and absorb nutrients",
      "To produce sound for communication"
    ],
    "correctAnswer": 1,
    "explanation": "The primary and most essential function of the respiratory system is gas exchange: the intake of oxygen from the atmosphere into the blood and the removal of carbon dioxide from the blood into the atmosphere."
  },
  {
    "id": "resp-2",
    "question": "Which of the following is the correct pathway of air during inhalation?",
    "options": [
      "Larynx -> Pharynx -> Trachea -> Bronchi -> Bronchioles",
      "Pharynx -> Larynx -> Trachea -> Bronchi -> Bronchioles",
      "Trachea -> Larynx -> Pharynx -> Bronchioles -> Bronchi",
      "Pharynx -> Trachea -> Larynx -> Bronchioles -> Bronchi"
    ],
    "correctAnswer": 1,
    "explanation": "Air enters through the nose/mouth, moves into the pharynx (throat), then passes through the larynx (voice box), down the trachea (windpipe), into the bronchi, and finally into the progressively smaller bronchioles before reaching the alveoli."
  },
  {
    "id": "resp-3",
    "question": "The actual sites of gas exchange in the lungs are the:",
    "options": [
      "Bronchi",
      "Bronchioles",
      "Alveoli",
      "Trachea"
    ],
    "correctAnswer": 2,
    "explanation": "Alveoli are tiny, thin-walled, air-filled sacs surrounded by a network of capillaries. Their immense surface area and minimal diffusion distance make them the perfect site for the passive diffusion of O2 and CO2."
  },
  {
    "id": "resp-4",
    "question": "Which structure is also known as the voice box?",
    "options": [
      "Pharynx",
      "Epiglottis",
      "Larynx",
      "Trachea"
    ],
    "correctAnswer": 2,
    "explanation": "The larynx, or voice box, is located between the pharynx and the trachea. It houses the vocal cords, which vibrate to produce sound as air passes over them."
  },
  {
    "id": "resp-5",
    "question": "What is the function of the epiglottis?",
    "options": [
      "To produce sound",
      "To warm and humidify air",
      "To prevent food from entering the trachea during swallowing",
      "To filter dust from inhaled air"
    ],
    "correctAnswer": 2,
    "explanation": "The epiglottis is a flap of elastic cartilage that acts like a lid. During swallowing, it closes over the opening of the larynx, directing food and liquids into the esophagus and preventing aspiration into the trachea."
  },
  {
    "id": "resp-6",
    "question": "The process of breathing in is known as:",
    "options": [
      "Expiration",
      "Inspiration",
      "Respiration",
      "Ventilation"
    ],
    "correctAnswer": 1,
    "explanation": "Inspiration (or inhalation) is the active process of drawing air into the lungs. It occurs due to the contraction of the diaphragm and external intercostal muscles, which increases thoracic volume and decreases intrapulmonary pressure."
  },
  {
    "id": "resp-7",
    "question": "Which muscle is the primary driver of quiet inhalation?",
    "options": [
      "Internal intercostals",
      "Abdominal muscles",
      "Diaphragm",
      "Pectoralis major"
    ],
    "correctAnswer": 2,
    "explanation": "The diaphragm is the primary muscle of inspiration. When it contracts, it flattens and descends, significantly increasing the vertical dimension of the thoracic cavity and drawing air into the lungs."
  },
  {
    "id": "resp-8",
    "question": "The 'C'-shaped rings of cartilage in the trachea function to:",
    "options": [
      "Produce mucus",
      "Trap dust particles",
      "Keep the airway patent (open)",
      "Facilitate gas exchange"
    ],
    "correctAnswer": 2,
    "explanation": "The C-shaped rings of hyaline cartilage provide rigid support to the trachea and primary bronchi. They prevent the airway from collapsing during inhalation when the pressure inside drops."
  },
  {
    "id": "resp-9",
    "question": "Which of the following is a function of the nasal cavity?",
    "options": [
      "To initiate the cough reflex",
      "To warm, humidify, and filter inspired air",
      "To produce surfactant",
      "To exchange oxygen and carbon dioxide"
    ],
    "correctAnswer": 1,
    "explanation": "As air passes through the nasal cavity, it is warmed by blood in the vascular mucosa, humidified by mucus, and filtered by hairs (vibrissae) and mucus that trap dust and pathogens."
  },
  {
    "id": "resp-10",
    "question": "The double-layered membrane that encloses each lung is called the:",
    "options": [
      "Pericardium",
      "Peritoneum",
      "Pleura",
      "Meninges"
    ],
    "correctAnswer": 2,
    "explanation": "The pleura is a serous membrane. The visceral pleura covers the lung surface, and the parietal pleura lines the thoracic wall. The pleural fluid between these layers reduces friction and creates surface tension that helps inflate the lungs."
  },
  {
    "id": "resp-11",
    "question": "What is the role of surfactant in the alveoli?",
    "options": [
      "To kill bacteria",
      "To humidify the air",
      "To reduce surface tension and prevent alveolar collapse",
      "To facilitate oxygen binding"
    ],
    "correctAnswer": 2,
    "explanation": "Surfactant is a detergent-like lipoprotein secreted by Type II alveolar cells. It disrupts the hydrogen bonding between water molecules, drastically reducing surface tension and preventing the alveoli from collapsing at the end of expiration."
  },
  {
    "id": "resp-12",
    "question": "The respiratory membrane, where gas exchange occurs, is composed of:",
    "options": [
      "Two layers of simple squamous epithelium",
      "The walls of the bronchioles",
      "Alveolar wall and capillary wall",
      "Cartilage and smooth muscle"
    ],
    "correctAnswer": 2,
    "explanation": "The respiratory membrane is incredibly thin and consists of: 1) the alveolar epithelium, 2) the fused basement membranes of the alveolar and capillary cells, and 3) the capillary endothelium. This minimal barrier allows for rapid diffusion."
  },
  {
    "id": "resp-13",
    "question": "According to Boyle's law, the pressure of a gas:",
    "options": [
      "Increases as its volume increases",
      "Decreases as its volume increases",
      "Is not related to its volume",
      "Determines its temperature"
    ],
    "correctAnswer": 1,
    "explanation": "Boyle's law states that at a constant temperature, the pressure of a gas is inversely proportional to its volume (P ∝ 1/V). This is the fundamental principle behind pulmonary ventilation: increasing lung volume decreases pressure, drawing air in."
  },
  {
    "id": "resp-14",
    "question": "During gas exchange, oxygen moves from the alveoli into the blood by:",
    "options": [
      "Active transport",
      "Facilitated diffusion",
      "Simple diffusion down its partial pressure gradient",
      "Osmosis"
    ],
    "correctAnswer": 2,
    "explanation": "Oxygen and carbon dioxide are exchanged across the respiratory membrane through simple diffusion. They move from an area of higher partial pressure to an area of lower partial pressure without requiring energy (passive transport)."
  },
  {
    "id": "resp-15",
    "question": "The majority of oxygen in the blood is transported:",
    "options": [
      "Dissolved in plasma",
      "As carbaminohemoglobin",
      "Bound to hemoglobin in red blood cells",
      "As bicarbonate ions"
    ],
    "correctAnswer": 2,
    "explanation": "About 98.5% of oxygen in blood is bound to the iron-containing heme groups of hemoglobin molecules within red blood cells, forming oxyhemoglobin (HbO2). This is a reversible reaction: Hb + O2 ⇌ HbO2."
  },
  {
    "id": "resp-16",
    "question": "The majority of carbon dioxide is transported in the blood as:",
    "options": [
      "Dissolved CO2 in plasma",
      "Bound to hemoglobin",
      "Bicarbonate ions (HCO3-) in plasma",
      "Carbonic acid"
    ],
    "correctAnswer": 2,
    "explanation": "Roughly 70% of CO2 is transported as bicarbonate ions (HCO3-). CO2 combines with water in red blood cells to form carbonic acid (H2CO3), which quickly dissociates into H+ and HCO3-. The HCO3- is then exchanged for Cl- ions into the plasma (chloride shift)."
  },
  {
    "id": "resp-17",
    "question": "The enzyme carbonic anhydrase:",
    "options": [
      "Binds oxygen to hemoglobin",
      "Catalyzes the reaction between CO2 and H2O",
      "Is found in lung surfactant",
      "Breaks down mucus in the airways"
    ],
    "correctAnswer": 1,
    "explanation": "Carbonic anhydrase is a zinc-containing enzyme abundantly found in red blood cells. It dramatically speeds up the reversible reaction: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-, which is crucial for CO2 transport and blood pH buffering."
  },
  {
    "id": "resp-18",
    "question": "The central chemoreceptors that are most important for regulating breathing are sensitive to changes in:",
    "options": [
      "Blood O2 levels in the aorta",
      "pH of cerebrospinal fluid",
      "Blood pressure in the carotid artery",
      "Stretch of the lung tissue"
    ],
    "correctAnswer": 1,
    "explanation": "Central chemoreceptors, located in the medulla oblongata, are primarily stimulated by an increase in CO2 (which leads to a decrease in pH) in the cerebrospinal fluid. They are the most powerful drivers for increasing the rate and depth of breathing."
  },
  {
    "id": "resp-19",
    "question": "Which of the following conditions would stimulate an increase in ventilation rate?",
    "options": [
      "A decrease in blood PCO2",
      "An increase in blood pH (alkalosis)",
      "An increase in blood PCO2 (hypercapnia)",
      "An increase in blood PO2"
    ],
    "correctAnswer": 2,
    "explanation": "An increase in the partial pressure of CO2 in the blood (hypercapnia) is the most potent chemical stimulus for increasing ventilation. This is detected by both central and peripheral chemoreceptors, leading to deeper and faster breathing to 'blow off' excess CO2."
  },
  {
    "id": "resp-20",
    "question": "Peripheral chemoreceptors in the aortic and carotid bodies are primarily stimulated by:",
    "options": [
      "A large increase in blood PCO2",
      "A slight decrease in blood PCO2",
      "A significant decrease in blood PO2 (hypoxia)",
      "An increase in blood pressure"
    ],
    "correctAnswer": 2,
    "explanation": "While peripheral chemoreceptors do respond to increases in PCO2 and H+, their most potent stimulus is a significant drop in arterial PO2 (hypoxia). This serves as an emergency mechanism to increase breathing when oxygen levels are dangerously low."
  },
  {
    "id": "resp-21",
    "question": "The term 'tidal volume' refers to the:",
    "options": [
      "Maximum amount of air that can be inhaled after a normal exhalation",
      "Volume of air inhaled or exhaled during normal, quiet breathing",
      "Maximum amount of air that can be exhaled after a maximum inhalation",
      "Volume of air remaining in the lungs after a maximum exhalation"
    ],
    "correctAnswer": 1,
    "explanation": "Tidal Volume (TV) is the amount of air that moves into or out of the lungs with each normal, resting breath. It averages around 500 ml in adults."
  },
  {
    "id": "resp-22",
    "question": "The vital capacity includes which of the following volumes?",
    "options": [
      "Tidal Volume + Residual Volume",
      "Expiratory Reserve Volume + Residual Volume",
      "Tidal Volume + Inspiratory Reserve Volume + Expiratory Reserve Volume",
      "Inspiratory Reserve Volume + Residual Volume"
    ],
    "correctAnswer": 2,
    "explanation": "Vital Capacity (VC) is the maximum amount of air a person can expel from the lungs after a maximum inhalation. It is the sum of the Tidal Volume (TV), Inspiratory Reserve Volume (IRV), and Expiratory Reserve Volume (ERV). VC = TV + IRV + ERV."
  },
  {
    "id": "resp-23",
    "question": "Which of the following is a long-term effect of smoking on the respiratory system?",
    "options": [
      "Increased ciliary action",
      "Decreased risk of infection",
      "Destruction of alveolar walls leading to emphysema",
      "Strengthened immune response in the lungs"
    ],
    "correctAnswer": 2,
    "explanation": "A major effect of smoking is the destruction of the elastic fibers in the alveolar walls. This loss of elasticity causes the alveoli to permanently over-inflate and eventually rupture, creating large, inefficient air spaces characteristic of emphysema."
  },
  {
    "id": "resp-24",
    "question": "How does smoking affect the cilia lining the respiratory tract?",
    "options": [
      "It enhances their beating frequency",
      "It has no effect on cilia",
      "It paralyzes and destroys them",
      "It causes them to produce more mucus"
    ],
    "correctAnswer": 2,
    "explanation": "Toxic chemicals in tobacco smoke paralyze and eventually destroy the ciliated pseudostratified columnar epithelium that lines the airways. This impairs the vital 'mucociliary escalator' that clears mucus and trapped debris out of the lungs."
  },
  {
    "id": "resp-25",
    "question": "Chronic smoking is the leading cause of which type of cancer?",
    "options": [
      "Skin cancer",
      "Leukemia",
      "Lung cancer",
      "Colon cancer"
    ],
    "correctAnswer": 2,
    "explanation": "Smoking is the number one risk factor for lung cancer. Carcinogens in tobacco smoke, such as tar, cause mutations in the DNA of bronchial and alveolar cells, leading to uncontrolled cell growth and the formation of malignant tumors."
  },
  {
    "id": "resp-26",
    "question": "What is Chronic Obstructive Pulmonary Disease (COPD)?",
    "options": [
      "A temporary allergic reaction",
      "A contagious respiratory infection",
      "A group of progressive lung diseases that cause airflow blockage",
      "A disease that only affects smokers for a short period"
    ],
    "correctAnswer": 2,
    "explanation": "COPD is an umbrella term for chronic, progressive lung diseases, primarily emphysema and chronic bronchitis, that are characterized by increasing difficulty in expelling air from the lungs (airflow obstruction). Smoking is the primary cause."
  },
  {
    "id": "resp-27",
    "question": "In a smoker, 'smoker's cough' results primarily from:",
    "options": [
      "The body's attempt to expel excess mucus that cannot be cleared by cilia",
      "An increased oxygen demand",
      "Irritation of the pleura",
      "The taste of tobacco"
    ],
    "correctAnswer": 0,
    "explanation": "Because smoking destroys cilia, the mucus produced in the airways cannot be effectively cleared. This buildup of mucus and irritants triggers a persistent, productive cough as the body's attempt to clear the airways—a hallmark symptom of chronic bronchitis."
  },
  {
    "id": "resp-28",
    "question": "Which component of cigarette smoke binds irreversibly to hemoglobin, reducing the blood's oxygen-carrying capacity?",
    "options": [
      "Nicotine",
      "Tar",
      "Carbon Monoxide",
      "Ammonia"
    ],
    "correctAnswer": 2,
    "explanation": "Carbon monoxide (CO) has a affinity for hemoglobin that is over 200 times greater than that of oxygen. It binds irreversibly to form carboxyhemoglobin, effectively displacing oxygen and causing tissue hypoxia (oxygen starvation)."
  },
  {
    "id": "resp-29",
    "question": "The addictive substance in tobacco is:",
    "options": [
      "Tar",
      "Carbon Monoxide",
      "Nicotine",
      "Formaldehyde"
    ],
    "correctAnswer": 2,
    "explanation": "Nicotine is a powerful psychoactive drug that stimulates the release of dopamine in the brain's reward centers, creating feelings of pleasure and reinforcing the smoking behavior. This leads to powerful physical addiction and dependence."
  },
  {
    "id": "resp-30",
    "question": "Which of the following is a function of the conducting zone of the respiratory system?",
    "options": [
      "Gas exchange",
      "To warm, humidify, and filter air",
      "To produce surfactant",
      "To exchange oxygen with blood"
    ],
     "correctAnswer": 1,
    "explanation": "The conducting zone includes all structures from the nose to the terminal bronchioles. Its functions are purely preparatory: to conduct air to the respiratory zone, and to warm, humidify, and clean it of particulates. No gas exchange occurs here.",
  },
  
  {
    "id": "resp-31",
    "question": "The paranasal sinuses function to:",
    "options": [
      "Produce surfactant",
      "Lighten the skull and produce mucus",
      "House the vocal cords",
      "Filter blood"
    ],
    "correctAnswer": 1,
    "explanation": "The paranasal sinuses are air-filled cavities in the skull bones surrounding the nasal cavity. They function to lighten the weight of the skull, resonate speech, and produce mucus that drains into the nasal cavity."
  },
  {
    "id": "resp-32",
    "question": "Which of the following is the smallest and most numerous passageway in the respiratory tract?",
    "options": [
      "Primary bronchi",
      "Terminal bronchioles",
      "Alveoli",
      "Trachea"
    ],
    "correctAnswer": 2,
    "explanation": "Alveoli are the tiny, grape-like air sacs at the end of the respiratory tree. They are the most numerous structures and are the actual sites of gas exchange. Each lung contains millions of alveoli."
  },
  {
    "id": "resp-33",
    "question": "The respiratory zone begins at the:",
    "options": [
      "Trachea",
      "Primary bronchi",
      "Terminal bronchioles",
      "Respiratory bronchioles"
    ],
    "correctAnswer": 3,
    "explanation": "The respiratory zone, where gas exchange occurs, begins with the respiratory bronchioles. These structures have scattered alveoli budding from their walls. They lead into alveolar ducts and finally to alveolar sacs."
  },
  {
    "id": "resp-34",
    "question": "Quiet exhalation is primarily a(n) __________ process.",
    "options": [
      "Active process requiring muscle contraction",
      "Passive process relying on elastic recoil",
      "Process driven by ciliary action",
      "Process requiring nervous stimulation"
    ],
    "correctAnswer": 1,
    "explanation": "Quiet exhalation is passive. It does not require muscular contraction. Instead, it results from the elastic recoil of the lungs and chest wall, which increases intrapulmonary pressure, pushing air out."
  },
  {
    "id": "resp-35",
    "question": "Forced exhalation involves the contraction of which muscles?",
    "options": [
      "Diaphragm and external intercostals",
      "Internal intercostals and abdominal muscles",
      "Sternocleidomastoid and scalenes",
      "Pectoralis major and minor"
    ],
    "correctAnswer": 1,
    "explanation": "Forced (or active) exhalation uses the internal intercostal muscles to depress the rib cage and abdominal muscles (e.g., obliques, transversus abdominis) to compress the abdominal contents, forcing the diaphragm upward."
  },
  {
    "id": "resp-36",
    "question": "The amount of air that remains in the lungs after a forced maximum exhalation is called the:",
    "options": [
      "Tidal volume",
      "Expiratory reserve volume",
      "Residual volume",
      "Vital capacity"
    ],
    "correctAnswer": 2,
    "explanation": "Residual Volume (RV) is the air that remains in the lungs even after the most forceful exhalation. It prevents the alveoli from collapsing and allows for gas exchange to continue between breaths."
  },
  {
    "id": "resp-37",
    "question": "The total amount of exchangeable air (approx. 4800 ml in men) is known as:",
    "options": [
      "Total lung capacity",
      "Vital capacity",
      "Tidal volume",
      "Inspiratory capacity"
    ],
    "correctAnswer": 1,
    "explanation": "Vital Capacity (VC) is the total amount of air that can be exhaled after a maximum inhalation (TV + IRV + ERV). It represents all the air that can be voluntarily moved in and out of the lungs."
  },
  {
    "id": "resp-38",
    "question": "Dalton's law of partial pressures states that:",
    "options": [
      "The volume of a gas is inversely proportional to its pressure",
      "The total pressure of a gas mixture is the sum of the partial pressures of each individual gas",
      "The solubility of a gas in a liquid is proportional to its partial pressure",
      "Gas exchange occurs down a partial pressure gradient"
    ],
    "correctAnswer": 1,
    "explanation": "Dalton's law is crucial for understanding gas mixtures. It means that the total atmospheric pressure (760 mmHg) is the sum of the pressures exerted by each gas (e.g., PN2 + PO2 + PCO2...). This allows us to calculate the driving force for diffusion of each gas independently."
  },
  {
    "id": "resp-39",
    "question": "Henry's law explains:",
    "options": [
      "The inverse relationship between volume and pressure",
      "The amount of gas that will dissolve in a liquid",
      "The total pressure of a gas mixture",
      "The binding of oxygen to hemoglobin"
    ],
    "correctAnswer": 1,
    "explanation": "Henry's law states that the amount of a gas that will dissolve in a liquid is directly proportional to its partial pressure above the liquid. This governs how O2 dissolves in plasma and how CO2 dissolves in blood to form carbonic acid."
  },
  {
    "id": "resp-40",
    "question": "In the tissues, the partial pressure of oxygen (PO2) is __________ than in arterial blood, causing oxygen to __________ the blood.",
    "options": [
      "Higher; enter",
      "Lower; enter",
      "Higher; leave",
      "Lower; leave"
    ],
    "correctAnswer": 3,
    "explanation": "Metabolically active tissues have a low PO2 (around 40 mmHg) compared to arterial blood (PO2 ~100 mmHg). This gradient causes oxyhemoglobin to dissociate, releasing oxygen which then diffuses out of the blood and into the tissue cells."
  },
  {
    "id": "resp-41",
    "question": "The binding of oxygen to hemoglobin is influenced by all of the following EXCEPT:",
    "options": [
      "Partial pressure of oxygen",
      "Partial pressure of carbon dioxide",
      "pH",
      "Partial pressure of nitrogen"
    ],
    "correctAnswer": 3,
    "explanation": "The affinity of hemoglobin for oxygen is affected by PO2 (shown by the sigmoidal dissociation curve), PCO2, pH (Bohr effect), and temperature. Nitrogen is inert and does not bind to hemoglobin or affect its function."
  },
  {
    "id": "resp-42",
    "question": "The 'Bohr effect' describes how:",
    "options": [
      "Oxygen binding to hemoglobin increases its affinity for CO2",
      "A decrease in pH (acidity) decreases hemoglobin's affinity for oxygen",
      "An increase in temperature increases hemoglobin's affinity for oxygen",
      "CO2 is converted to bicarbonate ions"
    ],
    "correctAnswer": 1,
    "explanation": "The Bohr effect states that a decrease in blood pH (increased H+ concentration) or an increase in PCO2 causes hemoglobin to release oxygen more readily. This is vital in tissues where high CO2 and acid levels promote O2 unloading."
  },
  {
    "id": "resp-43",
    "question": "The Haldane effect describes how:",
    "options": [
      "Oxygen binding to hemoglobin decreases its affinity for CO2",
      "CO2 binding to hemoglobin decreases its affinity for oxygen",
      "A decrease in pH increases oxygen affinity",
      "Nitrogen dissolves in blood under pressure"
    ],
    "correctAnswer": 0,
    "explanation": "The Haldane effect states that oxygenation of hemoglobin in the lungs promotes the release of CO2. Deoxygenated hemoglobin has a greater affinity for CO2 (to form carbaminohemoglobin) and H+ ions, facilitating CO2 loading in tissues and unloading in the lungs."
  },
  {
    "id": "resp-44",
    "question": "The chloride shift occurs in:",
    "options": [
      "The alveoli to facilitate O2 loading",
      "Systemic capillaries to facilitate CO2 loading",
      "The heart to regulate blood pressure",
      "The kidneys to balance pH"
    ],
    "correctAnswer": 1,
    "explanation": "The chloride shift is an exchange that happens in systemic tissue capillaries. As HCO3- ions move out of the red blood cell into the plasma (to transport CO2 as bicarbonate), chloride ions (Cl-) move into the cell to maintain electrochemical balance."
  },
  {
    "id": "resp-45",
    "question": "The normal stimulus for humans to breathe is primarily:",
    "options": [
      "Low oxygen levels in the blood",
      "High oxygen levels in the blood",
      "High carbon dioxide levels in the blood",
      "Low nitrogen levels in the blood"
    ],
    "correctAnswer": 2,
    "explanation": "Under normal conditions, the primary respiratory drive comes from the level of CO2 in the blood (monitored as pH changes in the CSF). While low O2 can stimulate breathing, it is a weaker stimulus until levels become dangerously low (hypoxia)."
  },
  {
    "id": "resp-46",
    "question": "The basic rhythm of breathing is set by the:",
    "options": [
      "Pons",
      "Cerebrum",
      "Medulla oblongata",
      "Carotid bodies"
    ],
    "correctAnswer": 2,
    "explanation": "The ventral respiratory group (VRG) in the medulla oblongata contains the rhythm-generating neurons that set the basic pace for involuntary breathing. It sends signals to the diaphragm and intercostal muscles."
  },
  {
    "id": "resp-47",
    "question": "The apneustic and pneumotaxic centers are located in the:",
    "options": [
      "Medulla oblongata",
      "Pons",
      "Hypothalamus",
      "Spinal cord"
    ],
    "correctAnswer": 1,
    "explanation": "The pons contains two respiratory centers that modify the rhythm from the medulla: the pneumotaxic center (inhibits inspiration, promotes exhalation) and the apneustic center (prolongs inspiration)."
  },
  {
    "id": "resp-48",
    "question": "The Hering-Breuer reflex:",
    "options": [
      "Stimulates coughing when the trachea is irritated",
      "Initiates sneezing when the nasal cavity is irritated",
      "Preents overinflation of the lungs during inspiration",
      "Increases heart rate during exercise"
    ],
    "correctAnswer": 2,
    "explanation": "The Hering-Breuer reflex is triggered by stretch receptors in the bronchi and bronchioles. When the lungs are stretched during a deep inspiration, these receptors send signals to the medulla to inhibit inspiration and promote exhalation, preventing overinflation."
  },
  {
    "id": "resp-49",
    "question": "Which of the following will cause a rightward shift of the oxygen-hemoglobin dissociation curve?",
    "options": [
      "Decreased temperature",
      "Increased pH (alkalosis)",
      "Decreased PCO2",
      "Increased temperature"
    ],
    "correctAnswer": 3,
    "explanation": "A rightward shift of the curve (e.g., caused by increased temperature, increased PCO2, decreased pH, or increased 2,3-BPG) indicates that hemoglobin has a decreased affinity for oxygen. This promotes oxygen unloading to the tissues that need it most."
  },
  {
    "id": "resp-50",
    "question": "The compound 2,3-Bisphosphoglycerate (2,3-BPG):",
    "options": [
      "Is found in plasma and enhances O2 binding",
      "Is produced in red blood cells and reduces hemoglobin's affinity for oxygen",
      "Is a component of surfactant",
      "Catalyzes the formation of carbonic acid"
    ],
    "correctAnswer": 1,
    "explanation": "2,3-BPG is an intermediate in glycolysis within red blood cells. It binds to deoxyhemoglobin and stabilizes it, making it harder for oxygen to bind. This decreases hemoglobin's affinity for O2, facilitating oxygen release in tissues."
  },
  {
    "id": "resp-51",
    "question": "Which of the following is a feature of emphysema caused by smoking?",
    "options": [
      "Increased elastic recoil of the lungs",
      "Hyperactivity of cilia",
      "Destruction of alveolar walls and loss of surface area for gas exchange",
      "Constriction of bronchioles due to smooth muscle spasms"
    ],
     "correctAnswer": 2,
    "explanation": "Emphysema is characterized by the destruction of the alveolar walls due to chronic exposure to irritants like smoke. This leads to large, inefficient air spaces, a drastic reduction in surface area for gas exchange, and loss of elastic recoil, trapping air in the lungs.",
   
  },
  {
    "id": "resp-52",
    "question": "Chronic bronchitis is defined by:",
    "options": [
      "Permanent dilation of the bronchi",
      "A productive cough that lasts for at least 3 months in two consecutive years",
      "Acute inflammation of the alveoli",
      "A genetic disorder affecting chloride channels"
    ],
    "correctAnswer": 1,
    "explanation": "The clinical definition of chronic bronchitis is a persistent, mucus-producing cough that is present for at least three months of the year for two or more consecutive years. It is primarily caused by long-term irritation, most commonly from smoking."
  },
  {
    "id": "resp-53",
    "question": "In a smoker, goblet cells in the airways often:",
    "options": [
      "Decrease in number and produce less mucus",
      "Hyperplasia and produce excess mucus",
      "Transform into ciliated cells",
      "Become the primary site of gas exchange"
    ],
    "correctAnswer": 1,
    "explanation": "Chronic irritation from smoke causes metaplasia (change in cell type) and hyperplasia (increase in number) of goblet cells. This leads to excessive mucus production, which, combined with crippled cilia, causes mucus plugging and airway obstruction."
  },
  {
    "id": "resp-54",
    "question": "How does tar from cigarette smoke contribute to lung cancer?",
    "options": [
      "It acts as a vasodilator",
      "It contains multiple carcinogens that cause DNA mutations",
      "It stimulates surfactant production",
      "It dissolves alveolar membranes"
    ],
    "correctAnswer": 1,
    "explanation": "Tar is the sticky residue of tobacco smoke that contains dozens of proven carcinogens, such as benzopyrene. These chemicals can cause mutations in the genes that control cell growth (oncogenes and tumor suppressor genes), leading to uncontrolled proliferation and cancer."
  },
  {
    "id": "resp-55",
    "question": "A smoking-related disease characterized by permanent enlargement of air spaces and shortness of breath is:",
    "options": [
      "Asthma",
      "Pneumonia",
      "Emphysema",
      "Tuberculosis"
    ],
    "correctAnswer": 2,
    "explanation": "Emphysema is a type of COPD defined by the permanent enlargement of the air spaces distal to the terminal bronchioles, accompanied by destruction of their walls. The hallmark symptom is dyspnea (shortness of breath), particularly on exertion."
  },
  {
    "id": "resp-56",
    "question": "The ' mucociliary escalator' is impaired by smoking because it:",
    "options": [
      "Paralyzes cilia and stimulates mucus production",
      "Strengthens the beating motion of cilia",
      "Destroys goblet cells completely",
      "Converts ciliated cells into alveolar cells"
    ],
    "correctAnswer": 0,
    "explanation": "Smoke has a dual damaging effect on the mucociliary escalator: 1) it paralyzes and destroys the cilia, stopping the coordinated beating motion, and 2) it stimulates goblet cells to produce excess mucus. This combination leads to a stagnant layer of mucus that cannot be cleared."
  },
  {
    "id": "resp-57",
    "question": "Secondhand smoke exposure is particularly dangerous for children because it increases the risk of:",
    "options": [
      "Type 1 diabetes",
      "Asthma and sudden infant death syndrome (SIDS)",
      "Bone fractures",
      "Skin conditions"
    ],
    "correctAnswer": 1,
    "explanation": "Secondhand smoke contains the same harmful chemicals as inhaled smoke. In children, it irritates the airways, increasing the frequency and severity of asthma attacks. It is also a significant risk factor for Sudden Infant Death Syndrome (SIDS)."
  },
  {
    "id": "resp-58",
    "question": "Nicotine's effect on the cardiovascular system includes:",
    "options": [
      "Vasodilation and decreased heart rate",
      "Vasoconstriction and increased heart rate and blood pressure",
      "Prevention of blood clot formation",
      "Strengthening of the heart muscle"
    ],
    "correctAnswer": 1,
    "explanation": "Nicotine is a stimulant. It acts on the adrenal glands to release epinephrine (adrenaline), which causes vasoconstriction, increased heart rate, increased blood pressure, and increased cardiac workload, raising the risk of hypertension and heart attack."
  },
  {
    "id": "resp-59",
    "question": "A smoker is most likely to have an increased level of which compound in their blood, reducing oxygen delivery?",
    "options": [
      "Oxyhemoglobin",
      "Carbaminohemoglobin",
      "Carboxyhemoglobin",
      "Deoxyhemoglobin"
    ],
    "correctAnswer": 2,
    "explanation": "Carbon monoxide (CO) in smoke binds irreversibly to hemoglobin to form carboxyhemoglobin. This molecule cannot carry oxygen, effectively reducing the oxygen-carrying capacity of the blood and causing tissue hypoxia."
  },
  {
    "id": "resp-60",
    "question": "The term 'blue bloater' is sometimes used to describe a patient with advanced:",
    "options": [
      "Emphysema",
      "Chronic Bronchitis",
      "Asthma",
      "Pneumonia"
    ],
    "correctAnswer": 1,
    "explanation": "'Blue bloater' is an old clinical term for a patient with severe chronic bronchitis. 'Blue' refers to cyanosis due to severe hypoxemia, and 'bloater' refers to right-sided heart failure (cor pulmonale) and edema caused by pulmonary hypertension."
  },
  {
    "id": "resp-61",
    "question": "Which of the following is NOT a function of the respiratory system?",
    "options": [
      "Regulation of blood pH",
      "Olfaction (smell)",
      "Synthesis of vitamin D",
      "Production of ACE (angiotensin-converting enzyme)"
    ],
    "correctAnswer": 2,
    "explanation": "While the respiratory system helps regulate pH by controlling CO2 levels, facilitates olfaction in the nasal cavity, and pulmonary capillaries produce ACE, it does not synthesize vitamin D. That is a function of the skin upon exposure to UV light."
  },
  {
    "id": "resp-62",
    "question": "The surface tension of the alveolar fluid is reduced by the secretion of:",
    "options": [
      "Mucus",
      "Lysozyme",
      "Surfactant",
      "Sebum"
    ],
    "correctAnswer": 2,
    "explanation": "Surfactant, secreted by Type II alveolar cells, is a phospholipid-protein complex that disrupts the cohesive forces between water molecules. This dramatically reduces surface tension, preventing alveolar collapse (atelectasis) and making inflation easier."
  },
  {
    "id": "resp-63",
    "question": "Infant Respiratory Distress Syndrome (IRDS) is caused by:",
    "options": [
      "Overproduction of surfactant",
      "Insufficient production of surfactant",
      "A viral infection",
      "Blocked bronchi"
    ],
    "correctAnswer": 1,
    "explanation": "IRDS is a common condition in premature infants whose alveolar Type II cells are not mature enough to produce adequate surfactant. This leads to high surface tension, alveolar collapse, and extreme difficulty in breathing."
  },
  {
    "id": "resp-64",
    "question": "Which law explains why a pneumothorax (collapsed lung) occurs?",
    "options": [
      "Henry's Law",
      "Boyle's Law",
    "Dalton's Law",
      "The Law of LaPlace"
    ],
    "correctAnswer": 1,
    "explanation": "Boyle's Law (P ∝ 1/V) explains a pneumothorax. If the pleural cavity is punctured, air enters and equalizes the pressure with atmospheric pressure. The negative intrapleural pressure is lost, and the lung's natural elasticity causes it to collapse."
  },
  {
    "id": "resp-65",
    "question": "The maximum amount of air a person can breathe in and out in one minute is called:",
    "options": [
      "Vital capacity",
      "Minute ventilation",
      "Total lung capacity",
      "Alveolar ventilation rate"
    ],
    "correctAnswer": 1,
    "explanation": "Minute ventilation (or minute volume) is the total volume of air inhaled and exhaled per minute. It is calculated as: Minute Ventilation = Tidal Volume x Respiratory Rate."
  },
  {
    "id": "resp-66",
    "question": "The volume of air that actually reaches the respiratory zone and participates in gas exchange is called:",
    "options": [
      "Tidal volume",
      "Anatomical dead space",
      "Alveolar ventilation rate",
      "Total lung capacity"
    ],
    "correctAnswer": 2,
    "explanation": "Alveolar Ventilation Rate (AVR) is the volume of air that reaches the alveoli per minute. It is a more physiologically relevant measure than minute ventilation because it accounts for the air that remains in the conducting airways (anatomical dead space). AVR = (TV - Dead Space) x RR."
  },
  {
    "id": "resp-67",
    "question": "Which of the following conditions would lead to an increase in the alveolar ventilation rate?",
    "options": [
      "Shallow, rapid breathing",
      "Slow, deep breathing",
      "Breathing through a long tube (increased dead space)",
      "Decreased tidal volume"
    ],
    "correctAnswer": 1,
    "explanation": "Deep breathing maximizes the proportion of each breath that reaches the alveoli. Slow, deep breathing is more effective at increasing alveolar ventilation than rapid, shallow breathing, which mostly ventilates the anatomical dead space."
  },
  {
    "id": "resp-68",
    "question": "The dorsal respiratory group (DRG) in the medulla is primarily responsible for:",
    "options": [
      "Stimulating forced expiration",
      "Integrating sensory input and stimulating inspiration",
      "Inhibiting the apneustic center",
      "Regulating speech during breathing"
    ],
    "correctAnswer": 1,
    "explanation": "The Dorsal Respiratory Group (DRG) contains neurons that are largely responsible for generating the basic rhythm for inspiration. It receives input from peripheral chemoreceptors and stretch receptors and stimulates the inspiratory muscles."
  },
  {
    "id": "resp-69",
    "question": "Which of the following is a peripheral chemoreceptor?",
    "options": [
      "Medullary chemoreceptors",
      "Aortic and carotid bodies",
      "Hering-Breuer receptors",
      "The apneustic center"
    ],
    "correctAnswer": 1,
    "explanation": "The main peripheral chemoreceptors are the aortic bodies (on the aortic arch) and carotid bodies (at the bifurcation of the common carotid arteries). They are sensitive to changes in arterial PO2, PCO2, and pH."
  },
  {
    "id": "resp-70",
    "question": "The vocal cords are located within the:",
    "options": [
      "Nasopharynx",
      "Oropharynx",
      "Laryngopharynx",
      "Larynx"
    ],
    "correctAnswer": 3,
    "explanation": "The vocal cords (or vocal folds) are mucosal folds stretched across the interior of the larynx. The opening between them is the glottis. Air passing through the glottis vibrates the cords to produce sound."
  },
  {
    "id": "resp-71",
    "question": "The respiratory disorder characterized by reversible bronchoconstriction, inflammation, and airway hyperresponsiveness is:",
    "options": [
      "Emphysema",
      "Chronic bronchitis",
      "Asthma",
      "Pneumonia"
    ],
    "correctAnswer": 2,
    "explanation": "Asthma is a chronic inflammatory disorder of the airways. It involves episodes of widespread but reversible narrowing of the bronchi and bronchioles due to smooth muscle spasms, edema, and mucus production, often in response to allergens."
  },
  {
    "id": "resp-72",
    "question": "Which of the following is a common symptom of both emphysema and chronic bronchitis?",
    "options": [
      "Productive cough",
      "Cyanosis",
      "Hyperventilation",
      "Dyspnea (shortness of breath)"
    ],
    "correctAnswer": 3,
    "explanation": "While a productive cough is classic for chronic bronchitis and cyanosis is more common in 'blue bloaters', the universal symptom of COPD (which includes both emphysema and chronic bronchitis) is dyspnea, or labored breathing, that progressively worsens."
  },
  {
    "id": "resp-73",
    "question": "The pathological change in emphysema that leads to 'air trapping' is:",
    "options": [
      "Increased elastic recoil of the lungs",
      "Destruction of elastic fibers and loss of lung elasticity",
      "Constriction of the trachea",
      "Overproduction of thick mucus"
    ],
    "correctAnswer": 1,
    "explanation": "The destruction of alveolar walls in emphysema involves the loss of elastic fibers. Without this elasticity, the lungs cannot passively recoil to push air out during exhalation. This leads to hyperinflation and air being trapped in the lungs."
  },
  {
    "id": "resp-74",
    "question": "A 'barrel chest' is a physical characteristic associated with:",
    "options": [
      "Chronic bronchitis",
      "Asthma",
      "Emphysema",
      "Laryngitis"
    ],
    "correctAnswer": 2,
    "explanation": "A 'barrel chest' refers to a rounded, bulging chest that resembles a barrel. It is characteristic of advanced emphysema, caused by the hyperinflation of the lungs which pushes the rib cage into a constant state of inspiration."
  },
  {
    "id": "resp-75",
    "question": "The most common cell type for lung cancer originating in the airways is:",
    "options": [
      "Adenocarcinoma",
      "Squamous cell carcinoma",
      "Small cell carcinoma",
      "Large cell carcinoma"
    ],
    "correctAnswer": 0,
    "explanation": "Adenocarcinoma is now the most common type of lung cancer. It originates in the peripheral lung tissues, often in mucus-producing glands. It is the most common type of lung cancer in non-smokers and is associated with smoking."
  },
  {
    "id": "resp-76",
    "question": "Small cell lung carcinoma is:",
    "options": [
      "The least aggressive form of lung cancer",
      "Strongly associated with smoking and has a very poor prognosis",
      "Not linked to smoking at all",
      "Easily treated with surgery alone"
    ],
    "correctAnswer": 1,
    "explanation": "Small cell lung cancer (SCLC) is the most aggressive and rapidly growing type of lung cancer. It is almost exclusively caused by smoking and has often metastasized by the time of diagnosis, leading to a very poor prognosis."
  },
  {
    "id": "resp-77",
    "question": "The '3-pack-year' history is a measure of:",
    "options": [
      "The cost of smoking",
      "A person's cumulative exposure to cigarette smoke",
      "The number of cigarettes in a pack",
      "The duration of a smoking cessation program"
    ],
    "correctAnswer": 1,
    "explanation": "Pack-years are calculated by multiplying the number of packs of cigarettes smoked per day by the number of years the person has smoked. It is a standard clinical measure to quantify a patient's risk for smoking-related diseases like lung cancer and COPD."
  },
  {
    "id": "resp-78",
    "question": "A smoking cessation benefit that occurs within 20 minutes is:",
    "options": [
      "Risk of coronary heart disease becomes that of a non-smoker",
      "Cilia regrow and begin to function normally",
      "Heart rate and blood pressure drop to normal levels",
      "Lung function returns to normal"
    ],
    "correctAnswer": 2,
    "explanation": "The benefits of quitting smoking begin very quickly. Within 20 minutes, the heart rate and blood pressure, which were elevated by nicotine, drop back to normal levels."
  },
  {
    "id": "resp-79",
    "question": "Within 1 year of quitting smoking, the risk of:",
    "options": [
      "Lung cancer is halved",
      "Coronary heart disease is half that of a smoker's",
      "COPD is reversed completely",
      "A stroke becomes that of a non-smoker"
    ],
    "correctAnswer": 1,
    "explanation": "Remarkable health improvements continue over time. Just one year after quitting, the excess risk of coronary heart disease is reduced by half compared to that of a continuing smoker."
  },
  {
    "id": "resp-80",
    "question": "The most effective way to prevent smoking-related respiratory diseases is:",
    "options": [
      "Switching to low-tar cigarettes",
      "Smoking through a filter",
      "Never starting or quitting smoking",
      "Using nicotine gum while smoking"
    ],
    "correctAnswer": 2,
    "explanation": "There is no safe level of smoking. 'Light' or 'low-tar' cigarettes are not a safe alternative. The only sure way to prevent smoking-related illnesses is to never start. For those who smoke, quitting is the single most effective step to improve health outcomes."
  },
  
  {
    "id": "resp-81",
    "question": "Which part of the pharynx is a common passage for both air and food?",
    "options": [
      "Nasopharynx",
      "Oropharynx",
      "Laryngopharynx",
      "All of the above"
    ],
    "correctAnswer": 2,
    "explanation": "The oropharynx (behind the oral cavity) and laryngopharynx (behind the larynx) are common pathways for both air and food. The nasopharynx, located behind the nasal cavity, is for air only."
  },
  {
    "id": "resp-82",
    "question": "The Adam's apple is a common name for the prominent anterior projection of the:",
    "options": [
      "Cricoid cartilage",
      "Thyroid cartilage",
      "Arytenoid cartilage",
      "Epiglottis"
    ],
    "correctAnswer": 1,
    "explanation": "The thyroid cartilage is the largest cartilage of the larynx. The anterior projection of this cartilage that is typically more prominent in males is commonly referred to as the 'Adam's apple'."
  },
  {
    "id": "resp-83",
    "question": "During swallowing, the elevation of the larynx is facilitated by the contraction of the:",
    "options": [
      "Diaphragm",
      "Suprahyoid muscles",
      "Internal intercostals",
      "Abdominal muscles"
    ],
    "correctAnswer": 1,
    "explanation": "The suprahyoid muscles (located above the hyoid bone) contract to elevate the larynx. This movement, combined with the closing action of the epiglottis, helps to ensure food is directed into the esophagus and not the trachea."
  },
  {
    "id": "resp-84",
    "question": "The right primary bronchus is __________, __________, and __________ than the left primary bronchus.",
    "options": [
      "Wider, shorter, and more vertical",
      "Narrower, longer, and more horizontal",
      "Wider, longer, and more vertical",
      "Narrower, shorter, and more horizontal"
    ],
    "correctAnswer": 0,
    "explanation": "The right primary bronchus is wider, shorter, and more vertical in its descent than the left. This anatomical difference is clinically significant because inhaled foreign objects are more likely to become lodged in the right bronchus or its branches."
  },
  {
    "id": "resp-85",
    "question": "The structural unit of gas exchange, consisting of a respiratory bronchiole, alveolar ducts, and alveoli, is called a:",
    "options": [
      "Lobule",
      "Acinus",
      "Lobe",
      "Segment"
    ],
    "correctAnswer": 1,
    "explanation": "The pulmonary acinus is the functional unit of the lung. It includes all structures from one terminal bronchiole down to the alveolar sacs where gas exchange occurs. Each lung contains approximately 30,000 acini."
  },
  {
    "id": "resp-86",
    "question": "Which of the following cells are responsible for phagocytizing dust particles and pathogens that reach the alveoli?",
    "options": [
      "Type I alveolar cells",
      "Type II alveolar cells",
      "Alveolar macrophages (dust cells)",
      "Goblet cells"
    ],
    "correctAnswer": 2,
    "explanation": "Alveolar macrophages, also known as dust cells, patrol the alveolar surfaces. They are the 'janitors' of the alveoli, engulfing and removing any inhaled particulate matter, bacteria, or other debris that bypassed the defenses of the conducting airways."
  },
  {
    "id": "resp-87",
    "question": "The pressure in the pleural cavity is normally:",
    "options": [
      "Equal to atmospheric pressure",
      "Greater than atmospheric pressure",
      "Less than atmospheric pressure (negative pressure)",
      "Zero"
    ],
    "correctAnswer": 2,
    "explanation": "Intrapleural pressure is always negative (subatmospheric) under normal conditions. This negative pressure is caused by the opposing elastic recoil of the lungs (inward pull) and the chest wall (outward pull). It is essential for keeping the lungs inflated."
  },
  {
    "id": "resp-88",
    "question": "If intrapleural pressure becomes equal to atmospheric pressure (e.g., due to a chest wound), the result is:",
    "options": [
      "Enhanced gas exchange",
      "A pneumothorax (lung collapse)",
      "Forced inspiration",
      "Increased surfactant production"
    ],
    "correctAnswer": 1,
    "explanation": "A pneumothorax occurs when air enters the pleural space, equalizing the intrapleural pressure with atmospheric pressure. This eliminates the negative pressure and the lung collapses due to its own elastic recoil."
  },
  {
    "id": "resp-89",
    "question": "According to the law of LaPlace, the pressure inside an alveolus is:",
    "options": [
      "Directly proportional to its surface tension and inversely proportional to its radius",
      "Inversely proportional to its surface tension and directly proportional to its radius",
      "Unrelated to its size",
      "Only dependent on surfactant concentration"
    ],
    "correctAnswer": 0,
    "explanation": "The law of LaPlace states that the pressure (P) inside a spherical structure like an alveolus is directly proportional to the surface tension (T) and inversely proportional to the radius (r): P = 2T/r. This means smaller alveoli would have a higher tendency to collapse without surfactant to lower T."
  },
  {
    "id": "resp-90",
    "question": "Surfactant prevents alveolar collapse by:",
    "options": [
      "Increasing surface tension in large alveoli",
      "Decreasing surface tension more in small alveoli than in large alveoli",
      "Increasing the radius of all alveoli",
      "Providing structural support to alveolar walls"
    ],
    "correctAnswer": 1,
    "explanation": "Surfactant's ability to reduce surface tension is more pronounced in smaller alveoli. This differential effect ensures that the pressure inside smaller alveoli does not become excessively high compared to larger ones, promoting stability and preventing the collapse of small alveoli into large ones."
  },
  {
    "id": "resp-91",
    "question": "The partial pressure of oxygen (PO2) in alveolar air is approximately:",
    "options": [
      "40 mmHg",
      "100 mmHg",
      "45 mmHg",
      "160 mmHg"
    ],
    "correctAnswer": 1,
    "explanation": "Alveolar air has a PO2 of about 100 mmHg. This is lower than atmospheric air (160 mmHg) because it is constantly being mixed with old air, humidified, and having oxygen diffused into the blood."
  },
  {
    "id": "resp-92",
    "question": "The partial pressure of carbon dioxide (PCO2) in venous blood is approximately:",
    "options": [
      "40 mmHg",
      "100 mmHg",
      "45 mmHg",
      "20 mmHg"
    ],
    "correctAnswer": 2,
    "explanation": "Venous blood returning from the tissues has a PCO2 of about 45 mmHg. This is higher than alveolar PCO2 (40 mmHg), creating the gradient that drives CO2 diffusion from the blood into the alveoli to be exhaled."
  },
  {
    "id": "resp-93",
    "question": "The steep portion of the oxygen-hemoglobin dissociation curve represents the range where:",
    "options": [
      "Hemoglobin is fully saturated and reluctant to release O2",
      "Hemoglobin unloads large amounts of O2 with a small drop in PO2",
      "O2 is binding to heme groups in the lungs",
      "The Bohr effect is inactive"
    ],
    "correctAnswer": 1,
    "explanation": "The steep portion of the curve occurs at the PO2 values found in systemic tissues (~20-40 mmHg). A small decrease in tissue PO2 causes a large increase in oxygen unloading from hemoglobin, ensuring efficient delivery to metabolically active tissues."
  },
  {
    "id": "resp-94",
    "question": "Fetal hemoglobin (HbF) has a __________ affinity for oxygen than adult hemoglobin (HbA), which facilitates oxygen transfer __________.",
    "options": [
      "Higher; from maternal to fetal blood",
      "Lower; from maternal to fetal blood",
      "Higher; from fetal to maternal blood",
      "Lower; from fetal to maternal blood"
    ],
    "correctAnswer": 0,
    "explanation": "Fetal hemoglobin (HbF) has a higher affinity for oxygen than adult hemoglobin (HbA). This allows HbF to 'steal' oxygen from the mother's HbA across the placenta, ensuring adequate oxygen supply to the developing fetus."
  },
  {
    "id": "resp-95",
    "question": "The ventral respiratory group (VRG) contains neurons that are active during:",
    "options": [
      "Only quiet breathing",
      "Only forced breathing",
      "Both quiet and forced breathing",
      "Neither quiet nor forced breathing"
    ],
    "correctAnswer": 2,
    "explanation": "The Ventral Respiratory Group (VRG) is a network of neurons in the medulla. It remains inactive during quiet breathing (driven by the DRG) but becomes active during forced breathing to stimulate the accessory muscles of inspiration and the muscles of forced expiration."
  },
  {
    "id": "resp-96",
    "question": "Hyperventilation will lead to:",
    "options": [
      "An increase in blood PCO2",
      "A decrease in blood PCO2 (hypocapnia) and respiratory alkalosis",
      "An increase in blood H+ concentration",
      "A decrease in blood pH"
    ],
    "correctAnswer": 1,
    "explanation": "Hyperventilation is excessive breathing that expels CO2 faster than it is produced. This leads to hypocapnia (low blood PCO2). The subsequent decrease in H+ concentration (from the CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3- reaction shifting left) causes an increase in blood pH, known as respiratory alkalosis."
  },
  {
    "id": "resp-97",
    "question": "The involuntary cessation of breathing that occurs during sleep in some individuals is called:",
    "options": [
      "Dyspnea",
      "Apnea",
      "Eupnea",
      "Hyperpnea"
    ],
    "correctAnswer": 1,
    "explanation": "Sleep apnea is a disorder characterized by repeated episodes where breathing stops (apnea) or becomes very shallow during sleep. These pauses can last from a few seconds to minutes and may occur many times per hour."
  },
  {
    "id": "resp-98",
    "question": "Which of the following is a feature of chronic bronchitis?",
    "options": [
      "Increased α1-antitrypsin activity",
      "Hypertrophy and hyperplasia of mucous glands",
      "Decreased number of goblet cells",
      "Decreased resistance to pulmonary infection"
    ],
    "correctAnswer": 1,
    "explanation": "A key pathological feature of chronic bronchitis is the enlargement (hypertrophy) and increase in number (hyperplasia) of the mucous glands and goblet cells in the airway lining. This is the primary cause of the excessive mucus production characteristic of the disease."
  },
  {
    "id": "resp-99",
    "question": "A genetic risk factor for developing emphysema, even in non-smokers, is a deficiency in:",
    "options": [
      "Surfactant",
      "Carbonic anhydrase",
      "α1-Antitrypsin",
      "Hemoglobin"
    ],
    "correctAnswer": 2,
    "explanation": "α1-Antitrypsin is a plasma protein produced by the liver that inhibits neutrophil elastase (an enzyme that breaks down elastic fibers). A genetic deficiency in this protein leads to uncontrolled destruction of alveolar elastic tissue, causing emphysema, especially in non-smokers and at a younger age."
  },
  {
    "id": "resp-100",
    "question": "The 'pink puffer' presentation is typically associated with:",
    "options": [
      "Chronic bronchitis",
      "Asthma",
      "Emphysema",
      "Pneumonia"
    ],
    "correctAnswer": 2,
    "explanation": "'Pink puffer' is a classic term for a patient with predominant emphysema. 'Pink' refers to their relatively normal arterial oxygen levels (so no cyanosis), and 'puffer' refers to their pursed-lip breathing and obvious dyspnea as they struggle to maintain ventilation."
  },
  {
    "id": "resp-101",
    "question": "Which of the following best describes the process of internal respiration?",
    "options": [
      "Exchange of gases between alveolar air and pulmonary blood",
      "Exchange of gases between blood and tissue cells",
      "The mechanical process of moving air into and out of the lungs",
      "The biochemical process of ATP production within mitochondria"
    ],
    "correctAnswer": 1,
    "explanation": "Internal respiration is the exchange of gases between the blood in systemic capillaries and the tissue cells. Oxygen diffuses from the blood into the tissues, and carbon dioxide diffuses from the tissues into the blood."
  },
  {
    "id": "resp-102",
    "question": "The term 'eupnea' refers to:",
    "options": [
      "Labored or difficult breathing",
      "The absence of breathing",
      "Normal, quiet breathing",
      "Excessively deep breathing"
    ],
    "correctAnswer": 2,
    "explanation": "Eupnea is the medical term for normal, relaxed, quiet breathing. The respiratory rate during eupnea is typically 12-15 breaths per minute in a resting adult."
  },
  {
    "id": "resp-103",
    "question": "Which of the following is an accessory muscle of inspiration?",
    "options": [
      "Internal intercostals",
      "Abdominal muscles",
      "Sternocleidomastoid",
      "Transversus abdominis"
    ],
    "correctAnswer": 2,
    "explanation": "Accessory muscles of inspiration are used during forced inhalation. They include the sternocleidomastoid (which elevates the sternum), scalenes, and pectoralis minor. The internal intercostals and abdominal muscles are used for forced expiration."
  },
  {
    "id": "resp-104",
    "question": "The total lung capacity (TLC) is equal to:",
    "options": [
      "Vital capacity + Tidal volume",
      "Vital capacity + Residual volume",
      "Inspiratory capacity + Functional residual capacity",
      "Tidal volume + Inspiratory reserve volume"
    ],
    "correctAnswer": 1,
    "explanation": "Total Lung Capacity (TLC) is the maximum amount of air the lungs can hold. It is the sum of the Vital Capacity (the maximum amount that can be exhaled) and the Residual Volume (the amount that always remains): TLC = VC + RV."
  },
  {
    "id": "resp-105",
    "question": "A person with a ventilation-perfusion mismatch has:",
    "options": [
      "Equal blood flow and air flow to all alveoli",
      "Inadequate blood flow to well-ventilated alveoli",
      "A perfectly efficient gas exchange system",
      "An increased surface area for diffusion"
    ],
    "correctAnswer": 1,
    "explanation": "Ventilation (V) refers to air flow, perfusion (Q) refers to blood flow. A V/Q mismatch occurs when ventilation and perfusion are not matched, such as in a pulmonary embolism where a alveolus is ventilated but not perfused (high V/Q), or in airway obstruction where an alveolus is perfused but not ventilated (low V/Q)."
  },
  {
    "id": "resp-106",
    "question": "Which of the following conditions would shift the oxygen-hemoglobin dissociation curve to the LEFT?",
    "options": [
      "Increased temperature",
      "Increased PCO2",
      "Decreased pH (acidity)",
      "Decreased temperature"
    ],
    "correctAnswer": 3,
    "explanation": "A leftward shift indicates increased hemoglobin affinity for oxygen, making it harder to unload O2 in tissues. This can be caused by decreased temperature, decreased PCO2, increased pH (alkalosis), or decreased 2,3-BPG."
  },
  {
    "id": "resp-107",
    "question": "The process of moving a gas into and out of the lungs is called:",
    "options": [
      "External respiration",
      "Internal respiration",
      "Pulmonary ventilation",
      "Cellular respiration"
    ],
    "correctAnswer": 2,
    "explanation": "Pulmonary ventilation is the mechanical process of breathing—moving air into the lungs (inspiration) and out of the lungs (expiration). It is distinct from respiration, which involves gas exchange."
  },
  {
    "id": "resp-108",
    "question": "The most powerful chemical stimulus influencing breathing is:",
    "options": [
      "A slight increase in PCO2",
      "A large decrease in PO2",
      "A slight decrease in PCO2",
      "An increase in blood nitrogen levels"
    ],
    "correctAnswer": 0,
    "explanation": "An increase in arterial PCO2 (hypercapnia) is the most potent chemical stimulus. A rise of just 5 mmHg in PCO2 can double ventilation. While low PO2 (hypoxia) can stimulate breathing, it is a much weaker stimulus until levels become severe."
  },
  {
    "id": "resp-109",
    "question": "The majority of carbon dioxide is transported in the venous blood as:",
    "options": [
      "Dissolved CO2 in plasma",
      "Bound to the heme part of hemoglobin",
      "Bicarbonate ions (HCO3-) in plasma",
      "Bound to the globin part of hemoglobin as carbaminohemoglobin"
    ],
    "correctAnswer": 2,
    "explanation": "Approximately 60-70% of CO2 is converted to bicarbonate ions (HCO3-) in the red blood cells via the carbonic anhydrase reaction. The HCO3- is then exchanged for Cl- (chloride shift) and transported in the plasma."
  },
  {
    "id": "resp-110",
    "question": "A person at high altitude would experience all of the following EXCEPT:",
    "options": [
      "Initial hyperventilation due to lower PO2",
      "A decrease in the oxygen-carrying capacity of their blood",
      "Renal compensation leading to increased erythropoietin release",
      "A rightward shift of the O2-Hb dissociation curve"
    ],
    "correctAnswer": 1,
    "explanation": "The oxygen-carrying capacity of blood (the maximum amount of O2 hemoglobin can carry) does not change at altitude. However, the saturation percentage decreases due to lower atmospheric PO2. The body compensates by producing more red blood cells (increasing capacity over time) and shifting the dissociation curve to unload oxygen more easily."
  },
  {
    "id": "resp-111",
    "question": "Which of the following is a direct effect of carbon monoxide (CO) poisoning?",
    "options": [
      "It stimulates the central chemoreceptors, causing hyperventilation.",
      "It directly damages the alveolar walls, causing emphysema.",
      "It binds competitively to hemoglobin, forming carboxyhemoglobin.",
      "It paralyzes the cilia in the respiratory tract."
    ],
    "correctAnswer": 2,
    "explanation": "Carbon monoxide has a affinity for hemoglobin that is over 200 times greater than oxygen. It binds irreversibly to the same site on hemoglobin, forming carboxyhemoglobin (HbCO), which drastically reduces the blood's oxygen-carrying capacity and causes tissue hypoxia."
  },
  {
    "id": "resp-112",
    "question": "The primary muscle(s) involved in normal, quiet expiration is/are:",
    "options": [
      "The diaphragm and external intercostals",
      "The internal intercostals and abdominal muscles",
      "There are no primary muscles; it is a passive process",
      "The sternocleidomastoid and scalenes"
    ],
    "correctAnswer": 2,
    "explanation": "Quiet expiration is a passive process that does not require muscular contraction. It results solely from the elastic recoil of the lungs and the chest wall. Active exhalation requires muscle contraction."
  },
  {
    "id": "resp-113",
    "question": "The condition where fluid accumulates in the pleural cavity is called:",
    "options": [
      "Pleurisy",
      "Pneumothorax",
      "Pulmonary edema",
      "Pleural effusion"
    ],
    "correctAnswer": 3,
    "explanation": "A pleural effusion is an abnormal accumulation of fluid in the pleural space. It can be caused by various conditions like heart failure, pneumonia, or cancer. It can compress the lung and impair expansion."
  },
  {
    "id": "resp-114",
    "question": "Which of the following is a feature of the olfactory mucosa in the nasal cavity?",
    "options": [
      "It is lined with stratified squamous epithelium for protection.",
      "It contains receptors for the sense of smell.",
      "It is the primary site for air humidification.",
      "It is located in the inferior meatus."
    ],
    "correctAnswer": 1,
    "explanation": "The olfactory mucosa is located in the roof of the nasal cavity. It contains olfactory receptor cells (bipolar neurons) which are responsible for detecting odorants and initiating the sense of smell."
  },
  {
    "id": "resp-115",
    "question": "The term 'hypoxia' refers to:",
    "options": [
      "Low oxygen levels in the blood",
      "High carbon dioxide levels in the blood",
      "The complete absence of breathing",
      "Inflammation of the pleural membranes"
    ],
    "correctAnswer": 0,
    "explanation": "Hypoxia is a state of insufficient oxygen supply to the tissues. It can be caused by low arterial oxygen (hypoxemic hypoxia), reduced oxygen-carrying capacity of blood (e.g., anemia), poor blood flow (ischemic hypoxia), or inability of tissues to use oxygen (histotoxic hypoxia)."
  },
  {
    "id": "resp-116",
    "question": "The pathological change in asthma that directly causes airway narrowing is:",
    "options": [
      "Destruction of alveolar septa",
      "Bronchoconstriction and inflammation",
      "Permanent fibrosis of the bronchioles",
      "Overproduction of surfactant"
    ],
    "correctAnswer": 1,
    "explanation": "Asthma is characterized by reversible episodes of airway obstruction caused by: 1) Bronchoconstriction (smooth muscle spasms in the bronchi), 2) Inflammation and swelling of the mucosal lining, and 3) Excessive mucus production."
  },
  {
    "id": "resp-117",
    "question": "The most common cause of lung cancer is:",
    "options": [
      "Air pollution",
      "Genetic predisposition",
      "Exposure to asbestos",
      "Cigarette smoking"
    ],
    "correctAnswer": 3,
    "explanation": "Cigarette smoking is the leading cause of lung cancer, responsible for about 85% of all cases. The risk is directly related to the number of pack-years smoked. While other factors play a role, smoking is the predominant, preventable cause."
  },
  {
    "id": "resp-118",
    "question": "A key difference between the left and right lungs is that the left lung:",
    "options": [
      "Has three lobes",
      "Has a cardiac notch",
      "Is larger and heavier",
      "Has a horizontal fissure"
    ],
    "correctAnswer": 1,
    "explanation": "The left lung is slightly smaller than the right lung to accommodate the heart. It has a concave impression on its medial surface called the cardiac notch. The left lung has two lobes (superior and inferior), while the right lung has three (superior, middle, inferior)."
  },
  {
    "id": "resp-119",
    "question": "The function of the vibrissae (nose hairs) is to:",
    "options": [
      "Warm incoming air",
      "Trap large airborne particles",
      "Detect odors",
      "Produce mucus"
    ],
    "correctAnswer": 1,
    "explanation": "Vibrissae are the coarse hairs that line the vestibule of the nose. They act as the first line of defense for the respiratory system by filtering out large dust particles, insects, and other debris from the inspired air."
  },
  {
    "id": "resp-120",
    "question": "The respiratory membrane is extremely thin to:",
    "options": [
      "Produce sound",
      "Facilitate rapid diffusion of gases",
      "Withstand high pressure changes",
      "Secrete surfactant"
    ],
    "correctAnswer": 1,
    "explanation": "The respiratory membrane is only 0.5 to 1.0 micrometers thick. This minimal thickness is crucial as the rate of gas diffusion is inversely proportional to the distance the gas must travel. A thin membrane maximizes the efficiency of O2 and CO2 exchange."
  },
  {
    "id": "resp-121",
    "question": "Which of the following is a non-respiratory function of the lungs?",
    "options": [
      "Gas exchange",
      "Ventilation",
      "Conversion of angiotensin I to angiotensin II",
      "Sound production"
    ],
    "correctAnswer": 2,
    "explanation": "Pulmonary capillary endothelial cells produce angiotensin-converting enzyme (ACE), which converts the inactive angiotensin I to the potent vasoconstrictor angiotensin II. This is a key step in the Renin-Angiotensin-Aldosterone System (RAAS) that regulates blood pressure."
  },
  {
    "id": "resp-122",
    "question": "The volume of air that can be forcibly inhaled after a normal tidal inhalation is the:",
    "options": [
      "Expiratory reserve volume (ERV)",
      "Residual volume (RV)",
      "Inspiratory reserve volume (IRV)",
      "Vital capacity (VC)"
    ],
    "correctAnswer": 2,
    "explanation": "The Inspiratory Reserve Volume (IRV) is the additional air that can be forcibly inhaled after the end of a normal, quiet inspiration (tidal volume). It averages about 3100 ml in males."
  },
  {
    "id": "resp-123",
    "question": "Which of the following is TRUE about the intrapulmonary pressure?",
    "options": [
      "It is always negative compared to atmospheric pressure.",
      "It is equal to intrapleural pressure.",
      "It fluctuates above and below atmospheric pressure during breathing.",
      "It is always higher than intrapleural pressure."
    ],
    "correctAnswer": 2,
    "explanation": "Intrapulmonary pressure (pressure inside the alveoli) rises and falls with the phases of breathing but always equalizes with atmospheric pressure at the end of each breath. During inspiration, it drops slightly below atmospheric pressure to draw air in. During expiration, it rises slightly above to push air out."
  },
  {
    "id": "resp-124",
    "question": "The term 'compliance' refers to the:",
    "options": [
      "Ease with which the lungs can be stretched",
      "Amount of air moved per minute",
      "Force of muscle contraction during inspiration",
      "Ability of hemoglobin to bind oxygen"
    ],
    "correctAnswer": 0,
    "explanation": "Compliance is a measure of the distensibility of the lungs. It is the change in lung volume for a given change in transpulmonary pressure. High compliance means the lungs expand easily (e.g., emphysema). Low compliance means they are stiff and resist expansion (e.g., fibrosis)."
  },
  {
    "id": "resp-125",
    "question": "Which of the following would INCREASE the rate of diffusion of a gas across the respiratory membrane?",
    "options": [
      "A thicker respiratory membrane",
      "A smaller surface area for diffusion",
      "A steeper partial pressure gradient for the gas",
      "A lower solubility of the gas"
    ],
    "correctAnswer": 2,
    "explanation": "Fick's law states that the rate of diffusion is directly proportional to the partial pressure gradient of the gas, the surface area available, and the solubility of the gas. It is inversely proportional to the thickness of the membrane. A steeper gradient (e.g., high alveolar PO2 and low capillary PO2) increases the diffusion rate."
  },
  {
    "id": "resp-126",
    "question": "The 'chloride shift' refers to the:",
    "options": [
      "Movement of Cl- into red blood cells as HCO3- moves out",
      "Movement of Cl- out of red blood cells as O2 moves in",
      "Exchange of Cl- for K+ in alveolar cells",
      "Secretion of Cl- into the airway lumen in cystic fibrosis"
    ],
    "correctAnswer": 0,
    "explanation": "In systemic capillaries, as CO2 enters RBCs and is converted to HCO3-, the HCO3- diffuses out into the plasma. To maintain electrical neutrality, chloride ions (Cl-) from the plasma move into the RBC. This exchange is called the chloride shift."
  },
  {
    "id": "resp-127",
    "question": "Which part of the brain modifies the breathing rhythm to allow for activities like speaking and eating?",
    "options": [
      "Medulla oblongata",
      "Pons",
      "Cerebellum",
      "Hypothalamus"
    ],
    "correctAnswer": 1,
    "explanation": "The pons contains the pneumotaxic and apneustic centers. These centers fine-tune the breathing rhythm generated by the medulla. They can smooth out the transition between inspiration and expiration, which is essential for modifying breathing to accommodate talking, eating, and sleeping."
  },
  {
    "id": "resp-128",
    "question": "A person with metabolic acidosis would be expected to:",
    "options": [
      "Hyperventilate to 'blow off' CO2 and raise pH",
      "Hypoventilate to retain CO2 and lower pH",
      "Have no change in ventilation",
      "Have a left-shifted O2-Hb curve"
    ],
    "correctAnswer": 0,
    "explanation": "In metabolic acidosis (e.g., from diabetic ketoacidosis), there is an increase in blood H+ concentration. This stimulates the peripheral chemoreceptors, leading to hyperventilation. The increased ventilation blows off CO2, which reduces H2CO3 and H+ levels, helping to compensate and raise the pH back toward normal."
  },
  {
    "id": "resp-129",
    "question": "The term 'cor pulmonale' refers to:",
    "options": [
      "Right heart failure secondary to chronic lung disease",
      "Left heart failure secondary to hypertension",
      "Inflammation of the heart muscle",
      "A congenital heart defect"
    ],
    "correctAnswer": 0,
    "explanation": "Cor pulmonale is a condition where chronic lung disease (like COPD) causes pulmonary hypertension (high blood pressure in the pulmonary arteries). This increased pressure puts a strain on the right ventricle of the heart, eventually causing it to hypertrophy and fail."
  },
  {
    "id": "resp-130",
    "question": "Which of the following is a long-term physiological response to living at high altitude?",
    "options": [
      "Decreased production of erythropoietin",
      "Decreased hematocrit",
      "Increased production of 2,3-BPG",
      "Decreased ventilation rate"
    ],
    "correctAnswer": 2,
    "explanation": "A key long-term adaptation to high altitude is an increase in the synthesis of 2,3-Bisphosphoglycerate (2,3-BPG) in red blood cells. 2,3-BPG binds to hemoglobin and decreases its affinity for oxygen, promoting greater unloading of oxygen to the tissues."
  },
  {
    "id": "resp-131",
    "question": "The primary function of the type II alveolar cells is to:",
    "options": [
      "Phagocytize foreign particles",
      "Secrete pulmonary surfactant",
      "Form the thin barrier for gas exchange",
      "Produce mucus"
    ],
    "correctAnswer": 1,
    "explanation": "Type II alveolar cells, also known as septal cells, are cuboidal cells that are interspersed among the type I cells. Their crucial function is to synthesize and secrete pulmonary surfactant, which reduces surface tension in the alveoli."
  },
  {
    "id": "resp-132",
    "question": "The term 'atelectasis' refers to:",
    "options": [
      "Collapse of a part or all of a lung",
      "Accumulation of blood in the pleural cavity",
      "Inflammation of the bronchi",
      "Permanent dilation of the bronchi"
    ],
    "correctAnswer": 0,
    "explanation": "Atelectasis is the collapse or incomplete expansion of lung tissue. It can be caused by airway obstruction (resorption atelectasis), compression (e.g., by a tumor or fluid), lack of surfactant, or post-surgical complications. It results in reduced gas exchange."
  },
  {
    "id": "resp-133",
    "question": "The most abundant gas in the atmosphere is:",
    "options": [
      "Oxygen",
      "Carbon Dioxide",
      "Nitrogen",
      "Water Vapor"
    ],
    "correctAnswer": 2,
    "explanation": "Nitrogen (N2) makes up approximately 78% of the Earth's atmosphere by volume. Oxygen (O2) is the second most abundant at about 21%. Despite its abundance, nitrogen is largely inert and does not participate in human respiration under normal conditions."
  },
  {
    "id": "resp-134",
    "question": "Which of the following is a feature of the respiratory system in newborns?",
    "options": [
      "Their lungs are identical in structure to adult lungs.",
      "They have a higher breathing rate than adults.",
      "They have a lower vital capacity relative to body size.",
      "Their alveoli are fully developed and numerous at birth."
    ],
    "correctAnswer": 1,
    "explanation": "Newborns have a much higher respiratory rate (30-60 breaths per minute) compared to adults (12-15 breaths per minute). This is due to a higher metabolic rate and a less efficient respiratory system. Their lungs continue to develop alveoli until about age 8."
  },
  {
    "id": "resp-135",
    "question": "The 'diving reflex' is characterized by:",
    "options": [
      "Hyperventilation and tachycardia",
      "Apnea (breath-holding), bradycardia, and peripheral vasoconstriction",
      "Increased cardiac output to the limbs",
      "A massive increase in pulmonary ventilation"
    ],
    "correctAnswer": 1,
    "explanation": "The diving reflex is a mammalian response to submersion in water. It involves: 1) apnea (breath-holding), 2) pronounced bradycardia (slowing of the heart rate), and 3) peripheral vasoconstriction (which shunts blood to the vital organs like the heart and brain), all to conserve oxygen."
  },
  {
    "id": "resp-136",
    "question": "The 'functional residual capacity' (FRC) is the volume of air:",
    "options": [
      "Remaining in the lungs after a normal tidal expiration",
      "That can be forcibly exhaled after a normal tidal expiration",
      "That can be forcibly inhaled after a normal tidal inspiration",
      "Remaining in the lungs after a maximum expiration"
    ],
    "correctAnswer": 0,
    "explanation": "Functional Residual Capacity (FRC) is the volume of air remaining in the lungs at the end of a normal, passive expiration. It represents the point where the inward elastic recoil of the lungs is balanced by the outward elastic recoil of the chest wall. FRC = ERV + RV."
  },
  {
    "id": "resp-137",
    "question": "Which of the following is a feature of the bronchial circulation?",
    "options": [
      "It is part of the pulmonary circuit.",
      "It supplies systemic oxygenated blood to the lung tissues themselves.",
      "It is involved in gas exchange with alveoli.",
      "It carries deoxygenated blood to the heart."
    ],
    "correctAnswer": 1,
    "explanation": "The bronchial circulation is part of the systemic circuit. It arises from the aorta and intercostal arteries. It supplies oxygenated blood to the lung tissues, including the walls of the bronchi and bronchioles. This blood drains back to the heart via the pulmonary veins, contributing to the anatomical shunt."
  },
  {
    "id": "resp-138",
    "question": "The 'anatomical dead space' includes:",
    "options": [
      "All alveoli that are not perfused",
      "The entire respiratory zone",
      "All conducting airways from the nose to the terminal bronchioles",
      "The volume of air remaining in the lungs after maximum expiration"
    ],
    "correctAnswer": 2,
    "explanation": "Anatomical dead space is the volume of the conducting airways (nose, pharynx, larynx, trachea, bronchi, bronchioles down to the terminal bronchioles) where no gas exchange occurs. The air in this space is exhaled unchanged."
  },
  {
    "id": "resp-139",
    "question": "A patient with a high fever would be expected to have an oxygen-hemoglobin dissociation curve that is:",
    "options": [
      "Shifted to the right",
      "Shifted to the left",
      "Unchanged",
      "Steeper in the lower section"
    ],
    "correctAnswer": 0,
    "explanation": "An increase in temperature (e.g., from fever or exercise) causes a rightward shift of the O2-Hb dissociation curve. This decreases hemoglobin's affinity for oxygen, facilitating increased oxygen unloading to the metabolically active, warmer tissues that need it."
  },
  {
    "id": "resp-140",
    "question": "The most immediate consequence of a large pulmonary embolism is:",
    "options": [
      "A severe ventilation-perfusion (V/Q) mismatch",
      "Massive hemorrhage into the alveoli",
      "Complete cessation of breathing",
      "Massive production of surfactant"
    ],
    "correctAnswer": 0,
    "explanation": "A pulmonary embolism is a blockage of a pulmonary artery by a blood clot. This creates a high V/Q ratio: the alveoli served by the blocked artery are still ventilated (V is normal) but have no blood flow (Q is zero). This is a profound waste of ventilation and impairs gas exchange."
  },
  {
    "id": "resp-141",
    "question": "The 'juxtacapillary (J) receptors' in the alveolar walls are stimulated by:",
    "options": [
      "Changes in blood O2",
      "Pulmonary capillary engorgement or edema",
      "Stretch of the airway smooth muscle",
      "Irritants in the airway"
    ],
    "correctAnswer": 1,
    "explanation": "Juxtacapillary (J) receptors are located in the alveolar walls close to capillaries. They are stimulated by pulmonary capillary engorgement (e.g., in left heart failure) or pulmonary edema. Their stimulation causes rapid, shallow breathing and a sensation of dyspnea (shortness of breath)."
  },
  {
    "id": "resp-142",
    "question": "Which of the following is a feature of the respiratory system that maximizes gas exchange efficiency?",
    "options": [
      "The enormous surface area of the alveoli (~70 m²)",
      "The thick walls of the capillaries",
      "The slow speed of blood flow through pulmonary capillaries",
      "The high pressure in the pulmonary circuit"
    ],
    "correctAnswer": 0,
    "explanation": "The vast surface area provided by the millions of alveoli (estimated at 50-100 m²) is the primary structural adaptation that maximizes the area available for the diffusion of gases, making the process extremely efficient."
  },
  {
    "id": "resp-143",
    "question": "The term 'cyanosis' describes:",
    "options": [
      "A bluish discoloration of the skin due to hypoxemia",
      "A yellow discoloration of the skin due to jaundice",
      "A reddening of the skin due to fever",
      "A pale appearance due to anemia"
    ],
    "correctAnswer": 0,
    "explanation": "Cyanosis is a bluish or purplish discoloration of the skin and mucous membranes. It occurs when deoxygenated hemoglobin in the blood near the skin surface exceeds about 5 g/dL, indicating severe hypoxemia (low blood oxygen)."
  },
  {
    "id": "resp-144",
    "question": "The primary trigger for an asthma attack is:",
    "options": [
      "A bacterial infection",
      "Exposure to an allergen or irritant",
      "Low blood sugar",
      "High blood pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Asthma attacks are often triggered by exposure to specific allergens (e.g., pollen, dust mites, pet dander) or non-specific irritants (e.g., cold air, smoke, exercise, stress). These triggers initiate an immune and inflammatory response that leads to bronchoconstriction."
  },
  {
    "id": "resp-145",
    "question": "The 'vital capacity' is a measure of:",
    "options": [
      "The total amount of gas in the lungs after maximum inspiration",
      "The maximum amount of gas that can be inspired after a normal expiration",
      "The maximum amount of gas that can be expired after a maximum inspiration",
      "The amount of gas left in the lungs after maximum expiration"
    ],
    "correctAnswer": 2,
    "explanation": "Vital Capacity (VC) is a key spirometry measurement. It represents the maximum volume of air a person can expel from the lungs after first filling the lungs to the maximum extent (maximum inspiration). It is the sum of tidal volume, inspiratory reserve volume, and expiratory reserve volume."
  },
  {
    "id": "resp-146",
    "question": "A person with fibrosis (stiff lungs) would be expected to have:",
    "options": [
      "High lung compliance",
      "Low lung compliance",
      "Increased surfactant production",
      "Easy expansion of the lungs"
    ],
    "correctAnswer": 1,
    "explanation": "Pulmonary fibrosis is a disease characterized by scarring and thickening of the lung tissue. This makes the lungs stiff and non-compliant, meaning they resist expansion. A person with fibrosis will have low lung compliance and will experience difficulty inhaling (restrictive lung disease)."
  },
  {
    "id": "resp-147",
    "question": "The 'respiratory pump' aids in:",
    "options": [
      "Ventilation of the lungs",
      "Venous return to the heart",
      "Arterial blood flow away from the heart",
      "Lymphatic flow"
    ],
    "correctAnswer": 1,
    "explanation": "The respiratory pump refers to the effect that pressure changes during breathing have on venous return. During inspiration, the pressure in the thoracic cavity decreases, which helps to draw blood into the inferior vena cava and right atrium from the lower body. This assists in returning blood to the heart."
  },
  {
    "id": "resp-148",
    "question": "Which of the following is a feature of the nasal conchae (turbinates)?",
    "options": [
      "They are smooth, flat bones.",
      "They increase surface area to enhance air turbulence, warming, and filtering.",
      "They decrease the surface area to speed up airflow.",
      "They are the site of gas exchange."
    ],
    "correctAnswer": 1,
    "explanation": "The nasal conchae are bony projections covered by vascular, mucous membrane-lined tissue. Their scroll-like shape creates turbulence in the inhaled air, forcing it to swirl. This increases contact with the mucosal surface, maximizing warming, humidifying, and filtering of the air before it reaches the lungs."
  },
  {
    "id": "resp-149",
    "question": "The term 'orthopnea' describes:",
    "options": [
      "Difficulty breathing when lying flat",
      "Difficulty breathing except when sitting or standing",
      "Cessation of breathing during sleep",
      "Normal, easy breathing"
    ],
    "correctAnswer": 0,
    "explanation": "Orthopnea is a symptom where a person experiences shortness of breath (dyspnea) when lying flat. It is often relieved by sitting up or propping up with pillows. It is a common symptom of left ventricular heart failure and sometimes severe COPD, as the supine position can increase venous return and pulmonary congestion."
  },
  {
    "id": "resp-150",
    "question": "The most significant long-term health benefit of quitting smoking is:",
    "options": [
      "Immediate weight loss",
      "A dramatic reduction in the risk of developing smoking-related diseases",
      "Improved sense of taste and smell within days",
      "A drop in heart rate and blood pressure within minutes"
    ],
    "correctAnswer": 1,
    "explanation": "While all the options are benefits, the most significant long-term benefit is the substantial and continuous decrease in the risk of premature death from diseases like lung cancer, COPD, heart disease, and stroke. The risk continues to decline the longer a person remains a non-smoker."
  }
]

