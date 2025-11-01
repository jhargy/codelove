export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const bloodVesselsQuestions: Question[] = [
    
  {
    "id": "vessels-1",
    "question": "Which type of blood vessel carries blood away from the heart?",
    "options": [
      "Capillary",
      "Vein",
      "Artery",
      "Venule"
    ],
    "correctAnswer": 2,
    "explanation": "Arteries are defined as blood vessels that carry blood away from the heart. They transport blood to the organs and tissues, regardless of whether the blood is oxygenated (systemic arteries) or deoxygenated (pulmonary artery)."
  },
  {
    "id": "vessels-2",
    "question": "Which type of blood vessel has the thickest muscular wall to withstand high pressure?",
    "options": [
      "Venule",
      "Capillary",
      "Vein",
      "Artery"
    ],
    "correctAnswer": 3,
    "explanation": "Arteries have the thickest walls relative to their lumen size. Their walls are rich in elastic tissue and smooth muscle, which allows them to withstand the high pressure of blood ejected from the heart and to help propel blood forward."
  },
  {
    "id": "vessels-3",
    "question": "The primary function of capillaries is to:",
    "options": [
      "Return blood to the heart",
      "Transport blood under high pressure",
      "Store a large volume of blood",
      "Facilitate the exchange of gases and nutrients"
    ],
    "correctAnswer": 3,
    "explanation": "Capillaries are the sites of exchange between the blood and the tissue cells. Their thin walls (only one cell layer thick) and slow blood flow allow for the diffusion of oxygen, nutrients, carbon dioxide, and waste products."
  },
  {
    "id": "vessels-4",
    "question": "Which blood vessels contain valves to prevent the backflow of blood?",
    "options": [
      "Capillaries",
      "Arterioles",
      "Arteries",
      "Veins"
    ],
    "correctAnswer": 3,
    "explanation": "Many veins, especially those in the limbs, contain valves. These are folds of the tunica intima that ensure blood flows only in one direction—toward the heart—preventing backflow which could occur due to low blood pressure in the venous system."
  },
  {
    "id": "vessels-5",
    "question": "Which type of blood vessel has the smallest diameter?",
    "options": [
      "Vein",
      "Artery",
      "Capillary",
      "Arteriole"
    ],
    "correctAnswer": 2,
    "explanation": "Capillaries are the smallest blood vessels, with a diameter just large enough for red blood cells to pass through in single file. This maximizes the surface area for exchange and minimizes the diffusion distance."
  },
  {
    "id": "vessels-6",
    "question": "The largest artery in the human body is the:",
    "options": [
      "Coronary artery",
      "Aorta",
      "Superior vena cava",
      "Pulmonary artery"
    ],
    "correctAnswer": 1,
    "explanation": "The aorta is the largest artery in the body. It arises from the left ventricle of the heart and distributes oxygenated blood to the entire systemic circulation under high pressure."
  },
  {
    "id": "vessels-7",
    "question": "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
    "options": [
      "Coronary vein",
      "Pulmonary vein",
      "Aorta",
      "Pulmonary artery"
    ],
    "correctAnswer": 3,
    "explanation": "The pulmonary artery is the only artery that carries deoxygenated blood. It transports blood from the right ventricle of the heart to the lungs to be oxygenated."
  },
  {
    "id": "vessels-8",
    "question": "The layer of a blood vessel wall that is composed of endothelium and is in direct contact with blood is the:",
    "options": [
      "Tunica externa (adventitia)",
      "Tunica intima",
      "Basement membrane",
      "Tunica media"
    ],
    "correctAnswer": 1,
    "explanation": "The tunica intima is the innermost layer of a blood vessel. It consists of a single layer of squamous endothelial cells resting on a basement membrane. It provides a smooth, non-stick surface for blood flow."
  },
  {
    "id": "vessels-9",
    "question": "Which type of blood vessel is known as a 'capacitance vessel' due to its ability to hold a large volume of blood?",
    "options": [
      "Artery",
      "Capillary",
      "Arteriole",
      "Vein"
    ],
    "correctAnswer": 3,
    "explanation": "Veins are called capacitance vessels because their walls are thin and distensible, allowing them to hold a large volume of blood (up to 65% of the body's total blood volume at rest) at low pressure. They act as a blood reservoir."
  },
  {
    "id": "vessels-10",
    "question": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    "options": [
      "Pulmonary artery",
      "Aorta",
      "Pulmonary vein",
      "Coronary artery"
    ],
    "correctAnswer": 2,
    "explanation": "The pulmonary veins are the only veins in the body that carry oxygenated blood. They transport blood from the lungs back to the left atrium of the heart."
  },
  {
    "id": "vessels-11",
    "question": "The layer of a blood vessel wall that contains smooth muscle and elastic fibers is the:",
    "options": [
      "Tunica intima",
      "Tunica media",
      "Tunica externa",
      "Endothelium"
    ],
    "correctAnswer": 1,
    "explanation": "The tunica media is the middle layer of a blood vessel wall. It is composed of circularly arranged smooth muscle cells and elastic fibers. This layer is responsible for vasoconstriction and vasodilation, which regulate blood pressure and flow."
  },
  {
    "id": "vessels-12",
    "question": "Which type of blood vessel has walls that are only one cell layer thick?",
    "options": [
      "Artery",
      "Vein",
      "Capillary",
      "Arteriole"
    ],
    "correctAnswer": 2,
    "explanation": "Capillary walls are composed of a single layer of endothelial cells and a basement membrane. This extreme thinness is essential for their function, as it minimizes the distance for diffusion of gases, nutrients, and wastes."
  },
  {
    "id": "vessels-13",
    "question": "The largest vein in the human body is the:",
    "options": [
      "Superior vena cava",
      "Jugular vein",
      "Inferior vena cava",
      "Coronary sinus"
    ],
    "correctAnswer": 2,
    "explanation": "The inferior vena cava is the largest vein in the body. It carries deoxygenated blood from the lower half of the body (regions below the diaphragm) back to the right atrium of the heart."
  },
  {
    "id": "vessels-14",
    "question": "Which blood vessels are the main regulators of blood flow into capillary beds?",
    "options": [
      "Venules",
      "Arterioles",
      "Elastic arteries",
      "Muscular arteries"
    ],
    "correctAnswer": 1,
    "explanation": "Arterioles are the primary resistance vessels. Their walls contain a high proportion of smooth muscle. By constricting or dilating (vasoconstriction/vasodilation), they regulate the amount of blood flowing into capillary networks, controlling peripheral resistance and blood pressure."
  },
  {
    "id": "vessels-15",
    "question": "Which type of blood vessel has the lowest blood pressure?",
    "options": [
      "Arteriole",
      "Capillary",
      "Artery",
      "Vein"
    ],
    "correctAnswer": 3,
    "explanation": "Veins have the lowest blood pressure in the systemic circulation. Blood pressure drops significantly as blood passes through the high-resistance arterioles and capillary beds. The pressure in veins is so low that it requires mechanisms like valves and muscular pumps to return blood to the heart."
  },
  {
    "id": "vessels-16",
    "question": "The outer layer of a blood vessel wall, composed of connective tissue, is the:",
    "options": [
      "Tunica media",
      "Tunica intima",
      "Tunica externa (adventitia)",
      "Endothelium"
    ],
    "correctAnswer": 2,
    "explanation": "The tunica externa (or adventitia) is the outermost layer of a blood vessel. It is composed of fibrous connective tissue that anchors the vessel to surrounding tissues and contains nerves and tiny vessels (vasa vasorum) that supply the outer layers of the vessel wall."
  },
  {
    "id": "vessels-17",
    "question": "Which of the following is a structural difference between arteries and veins?",
    "options": [
      "Arteries have valves; veins do not.",
      "Arteries have a larger lumen than veins of similar size.",
      "Arteries have thicker walls than veins.",
      "Arteries have less elastic tissue than veins."
    ],
    "correctAnswer": 2,
    "explanation": "A key structural difference is that arteries have thicker, more muscular, and more elastic walls than veins of comparable size. This is an adaptation to withstand the high pressure of blood pumped from the heart. Veins have thinner, less elastic walls with a larger lumen."
  },
  {
    "id": "vessels-18",
    "question": "The blood vessels that connect arterioles to venules are:",
    "options": [
      "Arteries",
      "Capillaries",
      "Veins",
      "Venous sinuses"
    ],
    "correctAnswer": 1,
    "explanation": "Capillaries are the microscopic vessels that form a network (capillary bed) connecting the smallest arteries (arterioles) to the smallest veins (venules). This is where the vital exchange of materials between blood and tissue cells occurs."
  },
  {
    "id": "vessels-19",
    "question": "Which type of artery is most abundant in the body?",
    "options": [
      "Elastic arteries",
      "Muscular arteries",
      "Arterioles",
      "Conducting arteries"
    ],
    "correctAnswer": 1,
    "explanation": "Muscular (distributing) arteries are the most numerous type. They branch off from elastic arteries and distribute blood to specific body organs. Their tunica media contains more smooth muscle than elastic tissue, allowing for vasoconstriction and vasodilation."
  },
  {
    "id": "vessels-20",
    "question": "The function of the vasa vasorum is to:",
    "options": [
      "Carry blood to the heart muscle",
      "Nourish the outer layers of large blood vessels",
      "Drain blood from the brain",
      "Connect arteries directly to veins"
    ],
    "correctAnswer": 1,
    "explanation": "The vasa vasorum ('vessels of the vessels') is a network of small blood vessels that supply the walls of large blood vessels (like the aorta and large veins) with oxygen and nutrients. The inner layers of these large vessels receive nutrients directly from blood in the lumen, but the outer layers are too thick and require their own blood supply."
  },
  
  {
    "id": "vessels-21",
    "question": "Which blood vessels are known as 'resistance vessels' because they play a key role in regulating blood pressure?",
    "options": [
      "Elastic Arteries",
      "Venules",
      "Arterioles",
      "Large Veins"
    ],
    "correctAnswer": 2,
    "explanation": "Arterioles are the primary resistance vessels. Their walls have a high proportion of smooth muscle. By constricting (vasoconstriction) or dilating (vasodilation), they dramatically change their diameter, which regulates peripheral resistance—a major factor in determining systemic blood pressure."
  },
  {
    "id": "vessels-22",
    "question": "What is the functional significance of the extremely thin walls of capillaries?",
    "options": [
      "To withstand high blood pressure",
      "To allow for rapid exchange of materials",
      "To store a large volume of blood",
      "To prevent backflow of blood"
    ],
    "correctAnswer": 1,
    "explanation": "The capillary wall is a single layer of endothelial cells on a basement membrane. This minimal barrier allows for the rapid and efficient diffusion of oxygen, carbon dioxide, nutrients, and waste products between the blood and the interstitial fluid surrounding tissue cells."
  },
  {
    "id": "vessels-23",
    "question": "Which of the following is a characteristic of veins but NOT arteries?",
    "options": [
      "Thick tunica media",
      "High blood pressure",
      "Presence of valves",
      "Carries blood away from the heart"
    ],
    "correctAnswer": 2,
    "explanation": "The presence of valves is a key characteristic that distinguishes veins from arteries. Valves are necessary in veins to ensure one-way blood flow back to the heart against gravity and low pressure. Arteries do not need valves because the high pressure from the heart prevents backflow."
  },
  {
    "id": "vessels-24",
    "question": "Which type of blood vessel has the largest lumen in proportion to its wall thickness?",
    "options": [
      "Artery",
      "Arteriole",
      "Capillary",
      "Vein"
    ],
    "correctAnswer": 3,
    "explanation": "Veins have a larger lumen (internal diameter) compared to the thickness of their wall. This structural adaptation allows them to hold a large volume of blood (act as capacitance vessels) at low pressure. In contrast, arteries have a smaller lumen relative to their thick, muscular walls."
  },
  {
    "id": "vessels-25",
    "question": "The movement of blood from the heart to the capillaries and back to the heart is known as:",
    "options": [
      "Systemic circulation",
      "Pulmonary circulation",
      "Coronary circulation",
      "Hepatic portal circulation"
    ],
    "correctAnswer": 0,
    "explanation": "Systemic circulation refers to the pathway of blood from the left ventricle of the heart, through the aorta and systemic arteries to the body's capillaries, and then back to the right atrium via the systemic veins. Its function is to deliver oxygen and nutrients to tissues and remove wastes."
  },
  {
    "id": "vessels-26",
    "question": "Which of the following best describes the blood pressure in arteries compared to veins?",
    "options": [
      "Lower in arteries",
      "Higher in arteries",
      "The same in both",
      "Variable with no consistent pattern"
    ],
    "correctAnswer": 1,
    "explanation": "Blood pressure is significantly higher in arteries than in veins. Arteries receive blood directly from the heart's pumping action, creating high pressure. Pressure drops substantially as blood flows through arterioles and capillaries, resulting in very low pressure in the venous system."
  },
  {
    "id": "vessels-27",
    "question": "The pulse that can be felt in the wrist is due to the:",
    "options": [
      "Stretching of veins during ventricular systole",
      "Stretching of arteries during ventricular systole",
      "Closure of valves in arteries",
      "Elastic recoil of capillaries"
    ],
    "correctAnswer": 1,
    "explanation": "The pulse is the expansion and recoil of elastic arteries that occurs with each heartbeat (ventricular systole). As the heart ejects blood, it stretches the arterial walls. The subsequent recoil helps push the blood forward and can be felt as a pulse in arteries close to the skin's surface."
  },
  {
    "id": "vessels-28",
    "question": "Which blood vessels have the greatest total cross-sectional area in the circulatory system?",
    "options": [
      "Aorta",
      "Arteries",
      "Capillaries",
      "Veins"
    ],
    "correctAnswer": 2,
    "explanation": "Although individual capillaries are tiny, their enormous number means that collectively, capillaries have the largest total cross-sectional area. This is why blood flow slows down dramatically in capillary beds, which is essential for allowing sufficient time for exchange of materials."
  },
  {
    "id": "vessels-29",
    "question": "The movement of blood from the right ventricle to the lungs and back to the left atrium is known as:",
    "options": [
      "Systemic circulation",
      "Pulmonary circulation",
      "Coronary circulation",
      "Fetal circulation"
    ],
    "correctAnswer": 1,
    "explanation": "Pulmonary circulation is the short loop that carries deoxygenated blood from the right ventricle to the lungs via the pulmonary arteries. In the lung capillaries, blood picks up oxygen and releases carbon dioxide. The newly oxygenated blood then returns to the left atrium via the pulmonary veins."
  },
  {
    "id": "vessels-30",
    "question": "Which of the following is a function of the skeletal muscle pump?",
    "options": [
      "To increase blood pressure in arteries",
      "To help return venous blood to the heart",
      "To regulate flow into capillaries",
      "To oxygenate blood in muscles"
    ],
    "correctAnswer": 1,
    "explanation": "The skeletal muscle pump is a mechanism that aids venous return. When muscles contract, they compress nearby veins. Because veins have valves that prevent backflow, this compression milks the blood toward the heart. This is crucial for moving blood against gravity from the lower body."
  },
  {
    "id": "vessels-31",
    "question": "Which type of blood vessel is most responsible for distributing blood to specific organs?",
    "options": [
      "Elastic Arteries",
      "Muscular Arteries",
      "Arterioles",
      "Venules"
    ],
    "correctAnswer": 1,
    "explanation": "Muscular arteries (or distributing arteries) are responsible for delivering blood to specific body organs. They branch off from elastic arteries and their walls contain more smooth muscle, allowing them to constrict and dilate to control blood flow to individual organs."
  },
  {
    "id": "vessels-32",
    "question": "What is the role of elastic fibers in the walls of large arteries?",
    "options": [
      "To provide strength for high pressure",
      "To stretch and recoil, maintaining blood flow during diastole",
      "To allow for vasoconstriction",
      "To prevent blood clotting"
    ],
    "correctAnswer": 1,
    "explanation": "Elastic arteries (like the aorta) have walls rich with elastic fibers. During ventricular systole, these arteries expand to accommodate the ejected blood. During diastole, they recoil, which helps to push blood forward and maintain continuous blood flow even when the heart is not actively pumping."
  },
  {
    "id": "vessels-33",
    "question": "Which of the following sequences represents the correct pathway of blood flow?",
    "options": [
      "Artery → Arteriole → Capillary → Venule → Vein",
      "Artery → Vein → Capillary → Arteriole → Venule",
      "Vein → Venule → Capillary → Arteriole → Artery",
      "Arteriole → Artery → Capillary → Vein → Venule"
    ],
    "correctAnswer": 0,
    "explanation": "The correct pathway from the heart to tissues and back is: Heart → Artery → Arteriole → Capillary → Venule → Vein → Heart. Arteries carry blood away, which branches into smaller arterioles that lead to capillary beds for exchange. Blood then drains into venules, which merge to form veins that return blood to the heart."
  },
  {
    "id": "vessels-34",
    "question": "The pressure-driven movement of fluids and solutes from capillaries into the interstitial fluid is called:",
    "options": [
      "Reabsorption",
      "Filtration",
      "Osmosis",
      "Active transport"
    ],
    "correctAnswer": 1,
    "explanation": "Filtration is the process where hydrostatic pressure (blood pressure) forces fluid and small solutes out of the capillary through the clefts between endothelial cells. This occurs primarily at the arterial end of a capillary where hydrostatic pressure is highest."
  },
  {
    "id": "vessels-35",
    "question": "The osmotic pressure that draws fluid back into capillaries from the interstitial fluid is primarily due to:",
    "options": [
      "Red blood cells",
      "Plasma proteins",
      "Glucose",
      "Sodium ions"
    ],
    "correctAnswer": 1,
    "explanation": "Plasma proteins (particularly albumin) are too large to easily cross the capillary wall. They create an osmotic pressure, called colloid osmotic pressure, which pulls water back into the capillary by osmosis. This is the main force for reabsorption at the venous end."
  },
  {
    "id": "vessels-36",
    "question": "At the arterial end of a capillary, net fluid movement is:",
    "options": [
      "Out of the capillary (filtration)",
      "Into the capillary (reabsorption)",
      "There is no net movement",
      "Dependent on active transport"
    ],
    "correctAnswer": 0,
    "explanation": "At the arterial end of a capillary, hydrostatic pressure ( pushing out) is greater than colloid osmotic pressure ( pulling in). Therefore, there is a net movement (filtration) of fluid out of the capillary and into the interstitial space."
  },
  {
    "id": "vessels-37",
    "question": "At the venous end of a capillary, net fluid movement is:",
    "options": [
      "Out of the capillary (filtration)",
      "Into the capillary (reabsorption)",
      "There is no net movement",
      "Dependent on blood cell concentration"
    ],
    "correctAnswer": 1,
    "explanation": "At the venous end of a capillary, blood pressure (hydrostatic pressure) has dropped significantly. Now, colloid osmotic pressure (pulling in) is greater than hydrostatic pressure (pushing out). This results in a net movement (reabsorption) of fluid back into the capillary."
  },
  {
    "id": "vessels-38",
    "question": "The small vessels that drain blood from capillaries and begin the journey back to the heart are called:",
    "options": [
      "Arterioles",
      "Venules",
      "Muscular arteries",
      "Elastic arteries"
    ],
    "correctAnswer": 1,
    "explanation": "Venules are the smallest veins. They are formed when several capillaries unite. Venules collect blood from capillary beds and then merge to form larger veins. Their walls are very thin, with little smooth muscle."
  },
  {
    "id": "vessels-39",
    "question": "Which of the following is a specialized capillary with large, irregular lumens and found in places like the liver and spleen?",
    "options": [
      "Continuous capillary",
      "Fenestrated capillary",
      "Sinusoid",
      "Arteriovenous anastomosis"
    ],
    "correctAnswer": 2,
    "explanation": "Sinusoids are a specialized type of capillary with a large, irregular lumen and a discontinuous, incomplete basement membrane. They are leakier than other capillaries, allowing large molecules and even cells (like in the bone marrow and spleen) to pass between blood and tissue."
  },
  {
    "id": "vessels-40",
    "question": "The condition 'atherosclerosis' primarily affects which type of blood vessel?",
    "options": [
      "Veins",
      "Capillaries",
      "Arteries",
      "Venules"
    ],
    "correctAnswer": 2,
    "explanation": "Atherosclerosis is a disease of arteries. It involves the buildup of fatty plaques (atheromas) in the tunica intima of arterial walls. This process narrows the lumen, reduces blood flow, and makes the walls stiff, which can lead to high blood pressure, heart attack, or stroke."
  },
  {
    "id": "vessels-41",
    "question": "The term 'varicose veins' refers to:",
    "options": [
      "Inflamed arteries",
      "Leaky capillaries",
      "Dilated, tortuous veins with incompetent valves",
      "Constricted arterioles"
    ],
    "correctAnswer": 2,
    "explanation": "Varicose veins are veins that have become enlarged, twisted, and painful. They are often caused by the failure of the valves within the veins, which allows blood to pool and increase pressure, stretching the vein walls. They are common in the legs."
  },
  {
    "id": "vessels-42",
    "question": "Which blood vessels have the highest concentration of oxygen in the systemic circuit?",
    "options": [
      "Pulmonary arteries",
      "Systemic veins",
      "Systemic arteries",
      "Pulmonary veins"
    ],
    "correctAnswer": 2,
    "explanation": "In the systemic circuit, systemic arteries carry oxygenated blood away from the heart to the body tissues. Therefore, they have the highest concentration of oxygen. Pulmonary arteries carry deoxygenated blood, and systemic veins carry deoxygenated blood back to the heart."
  },
  {
    "id": "vessels-43",
    "question": "Which blood vessels have the highest concentration of carbon dioxide in the systemic circuit?",
    "options": [
      "Pulmonary arteries",
      "Systemic arteries",
      "Systemic veins",
      "Pulmonary veins"
    ],
    "correctAnswer": 2,
    "explanation": "In the systemic circuit, systemic veins carry blood that is returning from the body tissues. This blood has given up its oxygen and picked up carbon dioxide waste from metabolism. Therefore, systemic veins have the highest concentration of carbon dioxide."
  },
  {
    "id": "vessels-44",
    "question": "The blood-brain barrier is formed primarily by which type of capillary?",
    "options": [
      "Sinusoid",
      "Fenestrated capillary",
      "Continuous capillary with tight junctions",
      "Arteriovenous anastomosis"
    ],
    "correctAnswer": 2,
    "explanation": "The blood-brain barrier is formed by continuous capillaries in the brain. Their endothelial cells are joined by very tight junctions (zonulae occludentes) and are surrounded by the feet of astrocytes. This structure severely restricts the passage of substances from the blood to the brain tissue, protecting the brain."
  },
  {
    "id": "vessels-45",
    "question": "Which type of capillary, with pores (fenestrations), is found in organs involved in filtration or absorption, like the kidneys and small intestine?",
    "options": [
      "Continuous capillary",
      "Fenestrated capillary",
      "Sinusoid",
      "Lymphatic capillary"
    ],
    "correctAnswer": 1,
    "explanation": "Fenestrated capillaries have endothelial cells that are riddled with pores (fenestrations) covered by a thin diaphragm. This makes them more permeable than continuous capillaries. They are found where rapid exchange of water and solutes is necessary, such as in the kidneys, villi of the small intestine, and endocrine glands."
  },
  {
    "id": "vessels-46",
    "question": "A direct connection between an arteriole and a venule, bypassing the capillary bed, is called a(n):",
    "options": [
      "Sinusoid",
      "Arteriovenous anastomosis (shunt)",
      "Metarteriole",
      "Thoroughfare channel"
    ],
    "correctAnswer": 1,
    "explanation": "An arteriovenous anastomosis (or AV shunt) is a vessel that directly connects an arteriole to a venule, allowing blood to bypass the capillary bed entirely. These are important for thermoregulation; when open, they divert blood to the surface of the skin to lose heat."
  },
  {
    "id": "vessels-47",
    "question": "The main force propelling blood through veins back to the heart is:",
    "options": [
      "The pumping action of the heart",
      "The skeletal muscle pump",
      "The respiratory pump",
      "All of the above"
    ],
    "correctAnswer": 3,
    "explanation": "Venous return is not driven by a single force but by a combination of mechanisms: 1) The residual pressure from heart contractions. 2) The skeletal muscle pump (milking action). 3) The respiratory pump (pressure changes in the thorax during breathing). 4) Valves preventing backflow."
  },
  {
    "id": "vessels-48",
    "question": "The term 'vasoconstriction' refers to:",
    "options": [
      "Dilation of blood vessels",
      "Constriction of blood vessels",
      "Formation of new blood vessels",
      "Hardening of blood vessels"
    ],
    "correctAnswer": 1,
    "explanation": "Vasoconstriction is the narrowing of blood vessels resulting from the contraction of smooth muscle in the vessel walls, particularly in the tunica media of arterioles. This increases vascular resistance and raises blood pressure."
  },
  {
    "id": "vessels-49",
    "question": "The term 'vasodilation' refers to:",
    "options": [
      "Constriction of blood vessels",
      "Dilation of blood vessels",
      "Rupture of blood vessels",
      "Clotting in blood vessels"
    ],
    "correctAnswer": 1,
    "explanation": "Vasodilation is the widening of blood vessels resulting from the relaxation of smooth muscle in the vessel walls. This decreases vascular resistance, increases blood flow to a tissue, and can lower overall blood pressure."
  },
  {
    "id": "vessels-50",
    "question": "Which of the following is NOT a function of the circulatory system?",
    "options": [
      "Transport of gases, nutrients, and wastes",
      "Regulation of body temperature",
      "Production of hormones",
      "Protection against blood loss and infection"
    ],
    "correctAnswer": 2,
    "explanation": "While the circulatory system transports hormones (e.g., from endocrine glands to target organs), it does not produce them. The primary functions of the circulatory system are transportation (gases, nutrients, wastes, hormones), regulation (body temperature, pH), and protection (via white blood cells and clotting factors)."
  },
  
  {
    "id": "vessels-51",
    "question": "Which of the following is a unique characteristic of the hepatic portal vein?",
    "options": [
      "It carries oxygenated blood.",
      "It connects two capillary beds.",
      "It has the thickest tunica media.",
      "It contains no valves."
    ],
    "correctAnswer": 1,
    "explanation": "The hepatic portal vein is unique because it carries nutrient-rich, but deoxygenated, blood from the capillaries of the digestive organs (stomach, intestines, spleen) to the second set of capillaries in the liver. This allows the liver to process and store nutrients before the blood enters the general circulation."
  },
  {
    "id": "vessels-52",
    "question": "What is the primary function of precapillary sphincters?",
    "options": [
      "To regulate blood pressure in major arteries",
      "To control the flow of blood into individual capillaries",
      "To prevent backflow in veins",
      "To connect arteries directly to veins"
    ],
    "correctAnswer": 1,
    "explanation": "Precapillary sphincters are rings of smooth muscle that surround the root of each true capillary where it branches off a metarteriole. By contracting and relaxing, they can open or close the entrance to the capillary, thereby regulating blood flow through specific capillary beds based on the tissue's needs."
  },
  {
    "id": "vessels-53",
    "question": "The movement of blood from the heart to the lungs and back to the heart is an example of:",
    "options": [
      "Systemic circulation",
      "Pulmonary circulation",
      "Portal circulation",
      "Coronary circulation"
    ],
    "correctAnswer": 1,
    "explanation": "Pulmonary circulation is the specific circuit where deoxygenated blood is pumped from the right ventricle to the lungs via the pulmonary arteries. In the lungs, CO2 is exchanged for O2, and the oxygenated blood returns to the left atrium via the pulmonary veins."
  },
  {
    "id": "vessels-54",
    "question": "Which of the following best describes the direction of blood flow in veins?",
    "options": [
      "Away from the heart",
      "Toward the heart",
      "From arteries to capillaries",
      "From capillaries to arterioles"
    ],
    "correctAnswer": 1,
    "explanation": "By definition, veins are blood vessels that carry blood toward the heart. This is true regardless of the oxygen content; systemic veins carry deoxygenated blood toward the heart, while pulmonary veins carry oxygenated blood toward the heart."
  },
  {
    "id": "vessels-55",
    "question": "The pressure that draws fluid back INTO the capillaries from the tissues is primarily due to:",
    "options": [
      "Hydrostatic pressure of blood",
      "Osmotic pressure of plasma proteins",
      "Hydrostatic pressure of interstitial fluid",
      "Atmospheric pressure"
    ],
    "correctAnswer": 1,
    "explanation": "The osmotic pressure (or oncotic pressure) created by plasma proteins (like albumin) in the blood is the main force that pulls fluid back into the capillaries from the interstitial space at the venous end. This is because these proteins are too large to leave the capillary and thus create a concentration gradient."
  },
  {
    "id": "vessels-56",
    "question": "Which vessel has the highest blood pressure?",
    "options": [
      "Vena cava",
      "Pulmonary artery",
      "Aorta",
      "Pulmonary vein"
    ],
    "correctAnswer": 2,
    "explanation": "The aorta, being the large artery directly connected to the left ventricle, receives blood under the highest pressure from the heart's contraction. Blood pressure is highest in the aorta and large systemic arteries and decreases steadily as blood moves through the circulatory system."
  },
  {
    "id": "vessels-57",
    "question": "What is the main component of blood plasma that is responsible for creating osmotic pressure?",
    "options": [
      "Red blood cells",
      "White blood cells",
      "Plasma proteins",
      "Glucose"
    ],
    "correctAnswer": 2,
    "explanation": "Plasma proteins, particularly albumin, are the primary solutes in plasma that cannot easily cross capillary walls. Their high concentration inside capillaries creates an osmotic gradient that pulls water back into the blood from the tissues, counteracting the outward force of hydrostatic pressure."
  },
  {
    "id": "vessels-58",
    "question": "Which of the following is a correct statement about capillaries?",
    "options": [
      "They have thick, muscular walls.",
      "They regulate blood flow through vasoconstriction.",
      "They are the site of nutrient and gas exchange.",
      "They carry blood under high pressure."
    ],
    "correctAnswer": 2,
    "explanation": "The primary and most important function of capillaries is to serve as the site of exchange between the blood and the tissue cells. Their thin walls (one cell layer) and slow blood flow are perfect for the diffusion of oxygen, nutrients, CO2, and wastes."
  },
  {
    "id": "vessels-59",
    "question": "The circulatory pathway that directly serves the heart muscle itself is called:",
    "options": [
      "Pulmonary circulation",
      "Systemic circulation",
      "Coronary circulation",
      "Cerebral circulation"
    ],
    "correctAnswer": 2,
    "explanation": "Coronary circulation is the part of the systemic circulation that supplies blood to and from the heart muscle (myocardium). The coronary arteries branch off the aorta to deliver oxygenated blood to the heart wall, and cardiac veins drain the deoxygenated blood into the coronary sinus, which empties into the right atrium."
  },
  {
    "id": "vessels-60",
    "question": "What is the role of the smooth muscle in the tunica media of arteries?",
    "options": [
      "To produce new blood cells",
      "To carry out gas exchange",
      "To allow for vasoconstriction and vasodilation",
      "To synthesize plasma proteins"
    ],
    "correctAnswer": 2,
    "explanation": "The smooth muscle in the tunica media of arteries allows them to change their diameter. Vasoconstriction (narrowing) increases blood pressure and reduces flow to an area. Vasodilation (widening) decreases blood pressure and increases flow. This is crucial for regulating blood flow and pressure."
  },
  {
    "id": "vessels-61",
    "question": "Which of the following sequences shows the correct order of vessels from HEART to TISSUE?",
    "options": [
      "Vein → Artery → Capillary",
      "Artery → Vein → Capillary",
      "Artery → Capillary → Vein",
      "Vein → Capillary → Artery"
    ],
    "correctAnswer": 2,
    "explanation": "The correct pathway from the heart to a tissue and back is: Heart → Artery → Arteriole → Capillary → Venule → Vein → Heart. Arteries always carry blood away from the heart, which then flows into capillaries for exchange, and is finally returned to the heart by veins."
  },
  {
    "id": "vessels-62",
    "question": "The 'lub-dub' heart sounds are primarily caused by:",
    "options": [
      "Blood rushing through arteries",
      "The closure of heart valves",
      "Contraction of the atria",
      "The sound of blood hitting capillary walls"
    ],
    "correctAnswer": 1,
    "explanation": "The heart sounds are not caused by blood flow but by the vibrations that result from the sudden closure of the valves. The 'lub' (S1) is the closure of the AV valves. The 'dub' (S2) is the closure of the semilunar valves. Turbulent flow can cause murmurs, but the main sounds are from valve closure."
  },
  {
    "id": "vessels-63",
    "question": "Which vessel would have the highest concentration of oxygen immediately after a meal?",
    "options": [
      "Hepatic portal vein",
      "Hepatic artery",
      "Hepatic vein",
      "Pulmonary artery"
    ],
    "correctAnswer": 1,
    "explanation": "The hepatic artery is a branch of the aorta that supplies oxygenated blood to the liver. Even after a meal, it carries blood with a high oxygen concentration. The hepatic portal vein carries nutrient-rich but deoxygenated blood from the digestive tract. The hepatic vein carries blood that is a mix from both sources, now processed, away from the liver."
  },
  {
    "id": "vessels-64",
    "question": "Varicose veins are most likely to occur in the:",
    "options": [
      "Arteries of the brain",
      "Veins of the legs",
      "Capillaries of the lungs",
      "Arterioles of the kidneys"
    ],
    "correctAnswer": 1,
    "explanation": "Varicose veins are most common in the legs because blood must flow against gravity to return to the heart. If the valves in these veins become weak or damaged, blood can pool, increasing pressure and causing the veins to become stretched, twisted, and enlarged."
  },
  {
    "id": "vessels-65",
    "question": "Which of the following is a difference between arteries and veins?",
    "options": [
      "Arteries have valves; veins do not.",
      "Arteries carry blood to the heart; veins carry blood away.",
      "Arteries have thicker walls than veins.",
      "Arteries always carry deoxygenated blood."
    ],
    "correctAnswer": 2,
    "explanation": "The most fundamental histological difference is that arteries have much thicker, more muscular, and more elastic walls than veins. This is an adaptation to withstand the high pressure of blood pumped from the heart. Veins have thinner, collapsible walls with a larger lumen."
  },
  {
    "id": "vessels-66",
    "question": "The vessel that drains blood from the head and upper limbs is the:",
    "options": [
      "Inferior vena cava",
      "Superior vena cava",
      "Jugular vein",
      "Aorta"
    ],
    "correctAnswer": 1,
    "explanation": "The superior vena cava is the large vein that drains deoxygenated blood from the upper half of the body (head, neck, arms, and chest) and returns it to the right atrium of the heart."
  },
  {
    "id": "vessels-67",
    "question": "The vessel that drains blood from the lower body is the:",
    "options": [
      "Superior vena cava",
      "Inferior vena cava",
      "Pulmonary vein",
      "Coronary sinus"
    ],
    "correctAnswer": 1,
    "explanation": "The inferior vena cava is the large vein that drains deoxygenated blood from the lower half of the body (legs, abdomen, and pelvis) and returns it to the right atrium of the heart. It is the largest vein in the body."
  },
  {
    "id": "vessels-68",
    "question": "Which of the following is TRUE for both arteries and veins?",
    "options": [
      "They both carry oxygenated blood.",
      "They both have valves.",
      "They both have three tunics (layers) in their walls.",
      "They both have the same blood pressure."
    ],
    "correctAnswer": 2,
    "explanation": "With the exception of the very smallest ones, both arteries and veins have three distinct layers (tunics) in their walls: the tunica intima, tunica media, and tunica externa. The relative thickness and composition of these layers differ between the two vessel types."
  },
  {
    "id": "vessels-69",
    "question": "The exchange of gases between the blood and tissue cells occurs in the:",
    "options": [
      "Arteries",
      "Arterioles",
      "Capillaries",
      "Veins"
    ],
    "correctAnswer": 2,
    "explanation": "Capillaries are the only blood vessels thin enough to allow for the efficient diffusion of gases (O2 and CO2), nutrients, and wastes between the blood and the interstitial fluid that bathes the tissue cells."
  },
  {
    "id": "vessels-70",
    "question": "Which of the following would increase blood pressure?",
    "options": [
      "Vasodilation",
      "Vasoconstriction",
      "Decreased heart rate",
      "Decreased blood volume"
    ],
    "correctAnswer": 1,
    "explanation": "Vasoconstriction is the narrowing of blood vessels, particularly arterioles. This increases peripheral resistance, making it harder for blood to flow, which in turn increases systemic blood pressure."
  },
  {
    "id": "vessels-71",
    "question": "The 'pulse' is most easily detected in:",
    "options": [
      "Veins",
      "Capillaries",
      "Arteries",
      "Venules"
    ],
    "correctAnswer": 2,
    "explanation": "The pulse is the expansion and recoil of elastic arteries that occurs with each heartbeat. It can be felt in arteries that are close to the skin surface and lie over a bone, such as the radial artery in the wrist or the carotid artery in the neck."
  },
  {
    "id": "vessels-72",
    "question": "Which vessel carries blood with the lowest blood pressure?",
    "options": [
      "Aorta",
      "Arteriole",
      "Capillary",
      "Vena cava"
    ],
    "correctAnswer": 3,
    "explanation": "Blood pressure decreases continuously as blood moves further from the heart. The vena cava, which returns blood to the heart, experiences the lowest blood pressure in the systemic circuit. This is why veins need valves to prevent backflow."
  },
  {
    "id": "vessels-73",
    "question": "The function of the endothelium is to:",
    "options": [
      "Provide a smooth surface to reduce friction",
      "Contract to change vessel diameter",
      "Provide structural support",
      "Produce blood cells"
    ],
    "correctAnswer": 0,
    "explanation": "The endothelium is the simple squamous epithelial lining of all blood vessels. Its primary function is to provide a incredibly smooth, non-stick surface (Teflon-like) that minimizes friction as blood flows and prevents abnormal blood clotting."
  },
  {
    "id": "vessels-74",
    "question": "Which of the following is a similarity between arteries and veins?",
    "options": [
      "Direction of blood flow",
      "Oxygen content of the blood",
      "Presence of three tissue layers",
      "Blood pressure"
    ],
    "correctAnswer": 2,
    "explanation": "Both arteries and veins are composed of three layers (tunics): the tunica intima (inner), tunica media (middle), and tunica externa (outer). The differences lie in the relative thickness and composition of these layers, not in their number."
  },
  {
    "id": "vessels-75",
    "question": "Which of the following is a function of the venous valves?",
    "options": [
      "To regulate blood pressure",
      "To prevent the backflow of blood",
      "To facilitate gas exchange",
      "To connect arteries to veins"
    ],
    "correctAnswer": 1,
    "explanation": "The main function of valves in veins is to ensure one-way blood flow toward the heart. They prevent the backflow of blood, which is especially important in the limbs where blood must flow against gravity. When muscles contract, they squeeze the veins, and the valves ensure the blood is milked toward the heart."
  },
  
  {
    "id": "vessels-76",
    "question": "Which of the following best describes the blood flow velocity in capillaries?",
    "options": [
      "Fastest in the circulatory system",
      "Slowest in the circulatory system",
      "The same as in arteries",
      "Faster than in veins"
    ],
    "correctAnswer": 1,
    "explanation": "Blood flow velocity is slowest in the capillaries. Although each capillary is very narrow, their total cross-sectional area is enormous. According to the principle of continuity, velocity must decrease as total cross-sectional area increases to maintain the same flow rate. This slow flow is essential for allowing sufficient time for exchange of materials."
  },
  {
    "id": "vessels-77",
    "question": "The term 'compliance' in reference to blood vessels refers to their:",
    "options": [
      "Ability to contract",
      "Ability to stretch and hold blood",
      "Resistance to blood flow",
      "Oxygen-carrying capacity"
    ],
    "correctAnswer": 1,
    "explanation": "Compliance is the ability of a blood vessel to distend and expand (stretch) in response to an increase in pressure. Veins are highly compliant, meaning they can hold a large volume of blood with only a small increase in pressure, acting as a blood reservoir. Arteries are less compliant."
  },
  {
    "id": "vessels-78",
    "question": "Which of the following is a correct statement about the hepatic portal system?",
    "options": [
      "It carries blood from the liver to the heart.",
      "It carries oxygenated blood from the intestines to the liver.",
      "It carries nutrient-rich blood from the digestive organs to the liver.",
      "It is part of the pulmonary circulation."
    ],
    "correctAnswer": 2,
    "explanation": "The hepatic portal system is a specialized part of the systemic circulation. The hepatic portal vein carries blood that is rich in nutrients absorbed from the digestive tract (stomach, intestines) but low in oxygen to the liver. This allows the liver to process, store, or detoxify these nutrients before they enter the general circulation."
  },
  {
    "id": "vessels-79",
    "question": "The role of the respiratory pump in venous return involves:",
    "options": [
      "Contraction of heart muscles",
      "Pressure changes during breathing",
      "Constriction of arteries",
      "Production of plasma proteins"
    ],
    "correctAnswer": 1,
    "explanation": "The respiratory pump aids venous return. During inhalation, the diaphragm descends, decreasing pressure in the thoracic cavity and increasing pressure in the abdominal cavity. This pressure gradient squeezes abdominal veins and sucks blood upward into the thoracic veins and towards the heart. Exhalation closes venous valves to prevent backflow."
  },
  {
    "id": "vessels-80",
    "question": "Which type of blood vessel is most responsible for generating peripheral resistance?",
    "options": [
      "Elastic arteries",
      "Muscular arteries",
      "Arterioles",
      "Venules"
    ],
    "correctAnswer": 2,
    "explanation": "Arterioles are the primary vessels responsible for generating peripheral resistance. Their walls contain a high proportion of smooth muscle. By constricting (vasoconstriction), they dramatically increase resistance, which raises blood pressure. By dilating (vasodilation), they decrease resistance and lower blood pressure."
  },
  {
    "id": "vessels-81",
    "question": "The condition 'arteriosclerosis' is characterized by:",
    "options": [
      "Thickening and loss of elasticity of arterial walls",
      "Leaky capillary walls",
      "Weakened venous valves",
      "Formation of blood clots in veins"
    ],
    "correctAnswer": 0,
    "explanation": "Arteriosclerosis (literally 'hardening of the arteries') is a general term for the thickening and stiffening of arterial walls. This loss of elasticity increases resistance to blood flow and contributes to hypertension (high blood pressure). Atherosclerosis is a specific type of arteriosclerosis involving fatty plaque buildup."
  },
  {
    "id": "vessels-82",
    "question": "Which of the following is a function of the tunica externa (adventitia) of blood vessels?",
    "options": [
      "Providing a smooth lining for blood flow",
      "Anchoring the vessel to surrounding tissues",
      "Contracting to change vessel diameter",
      "Exchanging gases with tissues"
    ],
    "correctAnswer": 1,
    "explanation": "The tunica externa (or adventitia) is the outermost layer of a blood vessel. It is composed of collagen and elastic fibers that blend with the connective tissue surrounding the vessel. Its primary functions are to anchor the vessel in place and provide structural support, preventing overstretching."
  },
  {
    "id": "vessels-83",
    "question": "The difference between the systolic and diastolic blood pressure is called:",
    "options": [
      "Mean arterial pressure",
      "Pulse pressure",
      "Peripheral resistance",
      "Capillary hydrostatic pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Pulse pressure is the difference between the systolic pressure (peak pressure during ventricular contraction) and the diastolic pressure (minimum pressure during ventricular relaxation). For example, if blood pressure is 120/80 mmHg, the pulse pressure is 40 mmHg. It is a rough indicator of the strength of the pulse and the elasticity of arteries."
  },
  {
    "id": "vessels-84",
    "question": "Which of the following would lead to an increase in pulse pressure?",
    "options": [
      "Vasoconstriction of arterioles",
      "Decreased stroke volume",
      "Decreased heart rate",
      "Reduced elasticity of arteries (as in aging)"
    ],
    "correctAnswer": 3,
    "explanation": "Aging causes arteries to become less elastic and more rigid (arteriosclerosis). This reduced compliance means that during systole, the arteries expand less, leading to a higher systolic pressure. During diastole, they recoil less, leading to a lower diastolic pressure. The net effect is an increased pulse pressure (e.g., 160/70 mmHg)."
  },
  {
    "id": "vessels-85",
    "question": "The vessel that carries oxygenated blood to the kidney is the:",
    "options": [
      "Renal artery",
      "Renal vein",
      "Hepatic portal vein",
      "Pulmonary artery"
    ],
    "correctAnswer": 0,
    "explanation": "The renal artery is a branch of the abdominal aorta that carries oxygenated blood from the heart to the kidney. Inside the kidney, it branches into smaller vessels eventually forming capillaries where filtration occurs. The renal vein then carries filtered, deoxygenated blood away from the kidney."
  },
  {
    "id": "vessels-86",
    "question": "Which of the following is a feature of continuous capillaries?",
    "options": [
      "They have large pores (fenestrations).",
      "They have an incomplete basement membrane.",
      "They are the most common type of capillary.",
      "They are found only in the liver and spleen."
    ],
    "correctAnswer": 2,
    "explanation": "Continuous capillaries are the most common type. Their endothelial cells form a continuous, unbroken lining, held together by tight junctions. They have small intercellular clefts that allow limited passage of small solutes. They are found in muscles, skin, lungs, and the central nervous system (where the clefts form the blood-brain barrier)."
  },
  {
    "id": "vessels-87",
    "question": "The force that pushes fluid OUT of capillaries is:",
    "options": [
      "Blood colloid osmotic pressure",
      "Interstitial fluid osmotic pressure",
      "Capillary hydrostatic pressure",
      "Interstitial fluid hydrostatic pressure"
    ],
    "correctAnswer": 2,
    "explanation": "Capillary hydrostatic pressure (CHP) is the blood pressure within the capillary. It is the primary force that pushes water and small solutes out of the capillary through the clefts between endothelial cells (filtration). This pressure is highest at the arterial end of the capillary and decreases along its length."
  },
  {
    "id": "vessels-88",
    "question": "Edema (tissue swelling) can be caused by:",
    "options": [
      "A decrease in capillary hydrostatic pressure",
      "An increase in plasma protein concentration",
      "A decrease in plasma protein concentration",
      "Vasoconstriction of arterioles"
    ],
    "correctAnswer": 2,
    "explanation": "Edema is an accumulation of fluid in the interstitial spaces. It can be caused by a decrease in plasma proteins (e.g., due to liver disease, kidney disease, or malnutrition). This reduces the blood colloid osmotic pressure, which is the main force pulling fluid back into the capillaries. As a result, filtration exceeds reabsorption, and fluid builds up in the tissues."
  },
  {
    "id": "vessels-89",
    "question": "Which of the following is a characteristic of sinusoid capillaries?",
    "options": [
      "Tight junctions forming a blood-brain barrier",
      "Pores covered by a thin diaphragm",
      "Large diameter and irregular, leaky walls",
      "Found in skeletal muscle and skin"
    ],
    "correctAnswer": 2,
    "explanation": "Sinusoids are specialized, leaky capillaries. They have a large, irregular diameter, twisted path, and an incomplete or absent basement membrane. Their endothelial cells have large fenestrations, allowing large molecules and even cells to pass through. They are found in the liver, spleen, bone marrow, and endocrine organs."
  },
  {
    "id": "vessels-90",
    "question": "The term 'vasomotion' refers to the:",
    "options": [
      "Flow of blood through the heart",
      "Rhythmic contraction and relaxation of precapillary sphincters",
      "Beating of cilia on endothelial cells",
      "Process of white blood cell migration"
    ],
    "correctAnswer": 1,
    "explanation": "Vasomotion is the slow, rhythmic contraction and relaxation of precapillary sphincters and metarterioles that periodically opens and closes capillary beds. This allows blood flow to different parts of a capillary network to be alternated, ensuring that all tissues eventually receive blood without all capillaries being perfused at once."
  },
  {
    "id": "vessels-91",
    "question": "Which vessel has the highest concentration of carbon dioxide?",
    "options": [
      "Pulmonary artery",
      "Pulmonary vein",
      "Aorta",
      "Systemic artery"
    ],
    "correctAnswer": 0,
    "explanation": "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs. This blood has just returned from the systemic circulation and has the highest concentration of carbon dioxide, which it will release in the lungs."
  },
  {
    "id": "vessels-92",
    "question": "The vessel that carries deoxygenated blood away from the heart is the:",
    "options": [
      "Aorta",
      "Pulmonary artery",
      "Pulmonary vein",
      "Coronary artery"
    ],
    "correctAnswer": 1,
    "explanation": "The pulmonary artery is the exception to the rule that arteries carry oxygenated blood. It is an artery because it carries blood away from the heart, but it carries deoxygenated blood from the right ventricle to the lungs."
  },
  {
    "id": "vessels-93",
    "question": "Which of the following is a function of the circulatory system?",
    "options": [
      "Production of hormones",
      "Thermoregulation",
      "Synaptic transmission",
      "Filtration of lymph"
    ],
    "correctAnswer": 1,
    "explanation": "The circulatory system aids in thermoregulation. By diverting blood flow to the skin (via vasodilation of superficial vessels), the body can lose heat. By restricting blood flow to the skin (vasoconstriction), it can conserve heat. This is a key function of the arterioles in the skin."
  },
  {
    "id": "vessels-94",
    "question": "The structure that regulates blood flow into a true capillary is the:",
    "options": [
      "Thoroughfare channel",
      "Precapillary sphincter",
      "Arteriovenous anastomosis",
      "Venule"
    ],
    "correctAnswer": 1,
    "explanation": "A precapillary sphincter is a cuff of smooth muscle that surrounds the origin of a true capillary where it branches from a metarteriole. Contraction of this sphincter closes the capillary entrance, while relaxation opens it, thereby controlling the flow of blood into that specific capillary based on local tissue needs."
  },
  {
    "id": "vessels-95",
    "question": "Which of the following is a difference between the pulmonary and systemic circuits?",
    "options": [
      "The systemic circuit carries blood to the lungs.",
      "The pulmonary circuit is under higher pressure.",
      "The systemic circuit is longer and serves the entire body.",
      "The pulmonary circuit arteries carry oxygenated blood."
    ],
    "correctAnswer": 2,
    "explanation": "The key difference is their length and function. The systemic circuit is much longer and serves the entire body, carrying oxygenated blood from the left ventricle to all tissues and returning deoxygenated blood to the right atrium. The pulmonary circuit is short, only serving the lungs, and carries deoxygenated blood to the lungs and oxygenated blood back to the heart."
  },
  {
    "id": "vessels-96",
    "question": "The term 'mean arterial pressure' (MAP) is:",
    "options": [
      "The average of systolic and diastolic pressure",
      "The pressure that drives blood into the tissues",
      "The peak pressure during ventricular contraction",
      "The pressure in the veins"
    ],
    "correctAnswer": 1,
    "explanation": "Mean Arterial Pressure (MAP) is the average pressure in the arteries during one full cardiac cycle. It is the pressure that propels blood to the tissues. It is not a simple average; it is calculated as MAP = Diastolic Pressure + 1/3(Pulse Pressure) because diastole lasts longer than systole. It is a critical indicator of tissue perfusion."
  },
  {
    "id": "vessels-97",
    "question": "Which of the following would cause a decrease in blood pressure?",
    "options": [
      "Vasoconstriction",
      "Increased blood volume",
      "Vasodilation",
      "Increased heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Vasodilation is the widening of blood vessels, particularly arterioles. This decreases peripheral resistance, making it easier for blood to flow, which in turn decreases systemic blood pressure."
  },
  {
    "id": "vessels-98",
    "question": "The vessel that carries deoxygenated blood to the heart is the:",
    "options": [
      "Aorta",
      "Pulmonary artery",
      "Superior vena cava",
      "Pulmonary vein"
    ],
    "correctAnswer": 2,
    "explanation": "The superior vena cava (along with the inferior vena cava) is a vein that carries deoxygenated blood from the systemic circulation back to the right atrium of the heart. Remember, veins carry blood toward the heart."
  },
  {
    "id": "vessels-99",
    "question": "Which of the following is TRUE about veins?",
    "options": [
      "They have thick, muscular walls.",
      "They always carry deoxygenated blood.",
      "They act as a blood reservoir.",
      "They operate under high pressure."
    ],
    "correctAnswer": 2,
    "explanation": "Veins are called capacitance vessels because their walls are thin and highly distensible. This allows them to hold a large volume of blood (about 65% of the body's total blood supply) at a very low pressure, acting as a reservoir that can be mobilized if needed (e.g., during hemorrhage or exercise)."
  },
  {
    "id": "vessels-100",
    "question": "The main function of elastic arteries is to:",
    "options": [
      "Distribute blood to specific organs",
      "Regulate blood flow into capillaries",
      "Withstand high pressure and smooth out pressure fluctuations",
      "Exchange gases with tissues"
    ],
    "correctAnswer": 2,
    "explanation": "Elastic arteries (e.g., aorta, pulmonary trunk) have walls with a high proportion of elastic fibers. Their main functions are: 1) to withstand the high pressure of blood ejected from the heart, and 2) to act as a 'pressure reservoir.' They expand during systole to absorb pressure and recoil during diastole, which helps to smooth out the pulsatile flow and maintain continuous blood flow to tissues."
  }
]



