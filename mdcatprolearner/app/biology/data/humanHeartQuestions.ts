export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const humanHeartQuestions: Question[] = 
[
  {
    "id": "heart-1",
    "question": "The human heart is enclosed in a double-walled sac called the:",
    "options": [
      "Pleura",
      "Pericardium",
      "Myocardium",
      "Endocardium"
    ],
    "correctAnswer": 1,
    "explanation": "The pericardium is the protective sac that surrounds the heart. It has two layers: a fibrous outer layer and a serous inner layer, with a small amount of pericardial fluid between them to reduce friction during heartbeats."
  },
  {
    "id": "heart-2",
    "question": "Which chamber of the heart receives oxygenated blood from the lungs?",
    "options": [
      "Right ventricle",
      "Left atrium",
      "Right atrium",
      "Left ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The left atrium receives oxygen-rich blood from the lungs via the pulmonary veins. It then pumps this blood into the left ventricle."
  },
  {
    "id": "heart-3",
    "question": "The valve located between the left atrium and left ventricle is the:",
    "options": [
      "Tricuspid valve",
      "Aortic valve",
      "Bicuspid (mitral) valve",
      "Pulmonary valve"
    ],
    "correctAnswer": 2,
    "explanation": "The bicuspid valve, also known as the mitral valve, is an atrioventricular (AV) valve with two cusps. It prevents the backflow of blood from the left ventricle into the left atrium during ventricular contraction."
  },
  {
    "id": "heart-4",
    "question": "The phase of the cardiac cycle where the heart muscle relaxes and chambers fill with blood is called:",
    "options": [
      "Fibrillation",
      "Systole",
      "Contraction",
      "Diastole"
    ],
    "correctAnswer": 3,
    "explanation": "Diastole is the relaxation phase of the cardiac cycle. During this time, the ventricles fill with blood from the atria. Coronary arteries also receive blood flow primarily during diastole."
  },
  {
    "id": "heart-5",
    "question": "The thick, muscular middle layer of the heart wall is the:",
    "options": [
      "Pericardium",
      "Endocardium",
      "Myocardium",
      "Epicardium"
    ],
    "correctAnswer": 2,
    "explanation": "The myocardium is the thickest layer of the heart wall and is composed of cardiac muscle tissue. It is responsible for the powerful contractions that pump blood throughout the body."
  },
  {
    "id": "heart-6",
    "question": "The 'lub' sound of the heartbeat is caused by the closure of the:",
    "options": [
      "Semilunar valves",
      "Pulmonary valve only",
      "Atrioventricular (AV) valves",
      "Aortic valve only"
    ],
    "correctAnswer": 2,
    "explanation": "The first heart sound (S1 or 'lub') is produced by the vibration of the heart structures following the closure of the atrioventricular valves (tricuspid and bicuspid/mitral valves) at the beginning of ventricular systole."
  },
  {
    "id": "heart-7",
    "question": "Which vessel carries deoxygenated blood from the heart to the lungs?",
    "options": [
      "Superior vena cava",
      "Pulmonary vein",
      "Aorta",
      "Pulmonary artery"
    ],
    "correctAnswer": 3,
    "explanation": "The pulmonary artery is the only artery in the body that carries deoxygenated blood. It carries blood from the right ventricle to the lungs for oxygenation."
  },
  {
    "id": "heart-8",
    "question": "The pacemaker of the heart is the:",
    "options": [
      "Purkinje fibers",
      "Atrioventricular node (AV node)",
      "Sinoatrial node (SA node)",
      "Bundle of His"
    ],
    "correctAnswer": 2,
    "explanation": "The sinoatrial (SA) node, located in the right atrium, is the heart's natural pacemaker. It spontaneously generates electrical impulses that initiate each heartbeat, setting the sinus rhythm."
  },
  {
    "id": "heart-9",
    "question": "The phase of the cardiac cycle where the heart contracts and pumps blood into the arteries is called:",
    "options": [
      "Diastole",
      "Filling",
      "Systole",
      "Repolarization"
    ],
    "correctAnswer": 2,
    "explanation": "Systole is the contraction phase of the cardiac cycle. During ventricular systole, the ventricles contract, increasing pressure and ejecting blood into the pulmonary artery and aorta."
  },
  {
    "id": "heart-10",
    "question": "The valve that prevents backflow of blood from the aorta into the left ventricle is the:",
    "options": [
      "Tricuspid valve",
      "Pulmonary valve",
      "Bicuspid valve",
      "Aortic valve"
    ],
    "correctAnswer": 3,
    "explanation": "The aortic valve is a semilunar valve located at the base of the aorta. It opens to allow blood to be ejected from the left ventricle into the aorta and closes to prevent backflow into the ventricle during diastole."
  },
  {
    "id": "heart-11",
    "question": "The 'dup' sound of the heartbeat is caused by the closure of the:",
    "options": [
      "Atrioventricular (AV) valves",
      "Tricuspid valve only",
      "Semilunar valves",
      "Bicuspid valve only"
    ],
    "correctAnswer": 2,
    "explanation": "The second heart sound (S2 or 'dup') is produced by the vibration of the heart structures following the closure of the semilunar valves (aortic and pulmonary valves) at the beginning of ventricular diastole."
  },
  {
    "id": "heart-12",
    "question": "Which chamber of the heart has the thickest muscular wall?",
    "options": [
      "Right atrium",
      "Left ventricle",
      "Right ventricle",
      "Left atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The left ventricle has the thickest myocardium because it must generate enough force to pump oxygenated blood throughout the entire systemic circulation, overcoming high arterial pressure."
  },
  {
    "id": "heart-13",
    "question": "The structure that delays the electrical impulse to allow the atria to contract before the ventricles is the:",
    "options": [
      "Sinoatrial node (SA node)",
      "Purkinje fibers",
      "Bundle of His",
      "Atrioventricular node (AV node)"
    ],
    "correctAnswer": 3,
    "explanation": "The atrioventricular (AV) node is located in the interatrial septum. It delays the transmission of the electrical impulse from the atria to the ventricles by approximately 0.1 seconds, ensuring atrial contraction is complete before ventricular contraction begins."
  },
  {
    "id": "heart-14",
    "question": "The volume of blood pumped by one ventricle in one minute is called:",
    "options": [
      "Stroke volume",
      "End-diastolic volume",
      "Cardiac output",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac output (CO) is the total volume of blood ejected by one ventricle per minute. It is calculated as Heart Rate (HR) × Stroke Volume (SV). It is a key measure of cardiac function."
  },
  {
    "id": "heart-15",
    "question": "The inner lining of the heart chambers is called the:",
    "options": [
      "Myocardium",
      "Pericardium",
      "Epicardium",
      "Endocardium"
    ],
    "correctAnswer": 3,
    "explanation": "The endocardium is the thin, smooth layer of endothelial tissue that lines the interior of the heart chambers and covers the heart valves. It provides a non-stick surface to prevent blood clotting."
  },
  {
    "id": "heart-16",
    "question": "The vessel that carries oxygenated blood from the lungs to the heart is the:",
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
    "id": "heart-17",
    "question": "The volume of blood pumped out by one ventricle during a single contraction is called:",
    "options": [
      "Cardiac output",
      "End-systolic volume",
      "Stroke volume",
      "Heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Stroke volume (SV) is the amount of blood ejected by a ventricle in one contraction. It is the difference between the end-diastolic volume (EDV) and the end-systolic volume (ESV): SV = EDV - ESV."
  },
  {
    "id": "heart-18",
    "question": "The term for the relaxation phase of the atria is:",
    "options": [
      "Atrial systole",
      "Ventricular diastole",
      "Atrial diastole",
      "Ventricular systole"
    ],
    "correctAnswer": 2,
    "explanation": "Atrial diastole is the period when the atria are relaxed and filling with blood returning from the veins (superior/inferior vena cava to the right atrium; pulmonary veins to the left atrium)."
  },
  {
    "id": "heart-19",
    "question": "The valve between the right atrium and right ventricle is the:",
    "options": [
      "Bicuspid valve",
      "Aortic valve",
      "Tricuspid valve",
      "Pulmonary valve"
    ],
    "correctAnswer": 2,
    "explanation": "The tricuspid valve is the right atrioventricular (AV) valve. It has three cusps and prevents the backflow of blood from the right ventricle into the right atrium during ventricular contraction."
  },
  {
    "id": "heart-20",
    "question": "The specialized fibers that conduct the electrical impulse through the ventricular walls are the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 3,
    "explanation": "Purkinje fibers are a network of specialized conducting fibers that spread throughout the ventricular myocardium. They rapidly transmit the electrical impulse from the bundle branches, ensuring a coordinated contraction of the ventricles from the apex upward."
  },
  
  {
    "id": "heart-21",
    "question": "The wall that separates the left and right ventricles is called the:",
    "options": [
      "Interatrial septum",
      "Atrioventricular septum",
      "Interventricular septum",
      "Ventricular wall"
    ],
    "correctAnswer": 2,
    "explanation": "The interventricular septum is a thick muscular wall that divides the lower chambers of the heart, the left and right ventricles. It ensures separation of oxygenated and deoxygenated blood."
  },
  {
    "id": "heart-22",
    "question": "During which phase of the cardiac cycle are all heart valves closed and the ventricular volume remains constant?",
    "options": [
      "Atrial systole",
      "Rapid ejection",
      "Isovolumetric contraction",
      "Isovolumetric relaxation"
    ],
    "correctAnswer": 3,
    "explanation": "Isovolumetric contraction is the brief period at the beginning of ventricular systole where the ventricles contract but all valves (AV and semilunar) are closed. Pressure rises rapidly but no blood is ejected yet, so volume is unchanged."
  },
  {
    "id": "heart-23",
    "question": "The bundle of His is part of the heart's conduction system and is located in the:",
    "options": [
      "Interatrial septum",
      "Interventricular septum",
      "Wall of the right atrium",
      "Apex of the heart"
    ],
    "correctAnswer": 1,
    "explanation": "The bundle of His (or atrioventricular bundle) is a band of cardiac muscle fibers that originates from the AV node and runs down the interventricular septum. It conducts impulses from the atria to the ventricles."
  },
  {
    "id": "heart-24",
    "question": "The term for the contraction phase of the ventricles is:",
    "options": [
      "Atrial diastole",
      "Ventricular systole",
      "Atrial systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular systole is the phase when the ventricles contract. This increases the pressure inside the ventricles, forcing the semilunar valves open and ejecting blood into the pulmonary artery and aorta."
  },
  {
    "id": "heart-25",
    "question": "The vessels that supply oxygenated blood to the heart muscle itself are the:",
    "options": [
      "Pulmonary arteries",
      "Coronary arteries",
      "Coronary veins",
      "Cardiac veins"
    ],
    "correctAnswer": 1,
    "explanation": "The coronary arteries are the network of blood vessels that branch off the aorta and supply oxygen-rich blood to the myocardium (heart muscle). Blockage in these arteries can lead to a heart attack."
  },
  {
    "id": "heart-26",
    "question": "The period when the ventricles are relaxing and filling is known as:",
    "options": [
      "Atrial systole",
      "Ventricular diastole",
      "Ventricular systole",
      "Atrial diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular diastole is the period when the ventricles are relaxed. During this phase, they fill with blood: first passively from the atria, and then actively during atrial systole."
  },
  {
    "id": "heart-27",
    "question": "The valve that prevents backflow of blood from the pulmonary artery into the right ventricle is the:",
    "options": [
      "Tricuspid valve",
      "Aortic valve",
      "Mitral valve",
      "Pulmonary valve"
    ],
    "correctAnswer": 3,
    "explanation": "The pulmonary valve is a semilunar valve located at the base of the pulmonary artery. It opens during ventricular systole to allow deoxygenated blood to flow to the lungs and closes to prevent backflow during diastole."
  },
  {
    "id": "heart-28",
    "question": "The volume of blood remaining in a ventricle at the end of contraction (systole) is called the:",
    "options": [
      "End-diastolic volume (EDV)",
      "Stroke volume (SV)",
      "End-systolic volume (ESV)",
      "Cardiac output (CO)"
    ],
    "correctAnswer": 2,
    "explanation": "End-systolic volume (ESV) is the amount of blood left in a ventricle at the end of systole, after contraction and ejection. A healthy ESV is lower, indicating efficient pumping."
  },
  {
    "id": "heart-29",
    "question": "The part of the conduction system that spreads the impulse down the left side of the interventricular septum is the:",
    "options": [
      "Right bundle branch",
      "Purkinje fibers",
      "Left bundle branch",
      "Bundle of His"
    ],
    "correctAnswer": 2,
    "explanation": "The left bundle branch conducts the electrical impulse from the bundle of His down the left side of the interventricular septum to the left ventricle, ensuring coordinated contraction."
  },
  {
    "id": "heart-30",
    "question": "The term for the contraction of the atria, which forces a final amount of blood into the ventricles, is:",
    "options": [
      "Ventricular systole",
      "Atrial systole",
      "Isovolumetric contraction",
      "Atrial diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial systole is the brief contraction of the atria that contributes a final, active filling volume to the ventricles just before ventricular systole begins. It accounts for about 20-30% of ventricular filling."
  },
  {
    "id": "heart-31",
    "question": "The wall that separates the left and right atria is called the:",
    "options": [
      "Interventricular septum",
      "Atrioventricular septum",
      "Interatrial septum",
      "Aortic septum"
    ],
    "correctAnswer": 2,
    "explanation": "The interatrial septum is the thin wall that divides the two upper chambers of the heart, the right and left atria. The fossa ovalis is a depression in this septum, a remnant of the fetal foramen ovale."
  },
  {
    "id": "heart-32",
    "question": "The phase of the cardiac cycle where the ventricles are contracting but no blood is being ejected because the semilunar valves are not yet open is:",
    "options": [
      "Rapid ejection",
      "Isovolumetric relaxation",
      "Isovolumetric contraction",
      "Atrial systole"
    ],
    "correctAnswer": 2,
    "explanation": "Isovolumetric contraction is the first phase of ventricular systole. The ventricles contract isometrically (length doesn't change), causing a sharp rise in pressure while all valves are closed. Ejection begins once ventricular pressure exceeds arterial pressure."
  },
  {
    "id": "heart-33",
    "question": "The part of the conduction system that arises from the AV node is the:",
    "options": [
      "Sinoatrial node",
      "Purkinje fibers",
      "Bundle of His",
      "Left bundle branch"
    ],
    "correctAnswer": 2,
    "explanation": "The bundle of His is the only electrical connection between the atria and ventricles. It originates from the AV node and conducts the impulse through the fibrous skeleton to the ventricles."
  },
  {
    "id": "heart-34",
    "question": "The volume of blood in a ventricle at the end of relaxation (diastole) is called the:",
    "options": [
      "End-systolic volume (ESV)",
      "Stroke volume (SV)",
      "End-diastolic volume (EDV)",
      "Cardiac output (CO)"
    ],
    "correctAnswer": 2,
    "explanation": "End-diastolic volume (EDV) is the total volume of blood in a ventricle at the end of diastole, just before contraction begins. It represents the preload on the heart."
  },
  {
    "id": "heart-35",
    "question": "The term for the period when the ventricles are relaxing but all valves are closed and ventricular volume is constant is:",
    "options": [
      "Isovolumetric contraction",
      "Rapid filling",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 2,
    "explanation": "Isovolumetric relaxation is the brief period at the beginning of ventricular diastole. The ventricles relax, causing pressure to fall rapidly. All valves are closed, so no blood enters or leaves, and volume remains constant."
  },
  {
    "id": "heart-36",
    "question": "The large vein that returns deoxygenated blood from the upper body to the right atrium is the:",
    "options": [
      "Inferior vena cava",
      "Pulmonary vein",
      "Coronary sinus",
      "Superior vena cava"
    ],
    "correctAnswer": 3,
    "explanation": "The superior vena cava is a large vein that carries deoxygenated blood from the head, neck, upper limbs, and thorax into the right atrium of the heart."
  },
  {
    "id": "heart-37",
    "question": "The percentage of end-diastolic volume that is ejected during a heartbeat is called the:",
    "options": [
      "Cardiac output",
      "Stroke volume",
      "Ejection fraction",
      "Heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Ejection fraction (EF) is a measurement of how much blood the left ventricle pumps out with each contraction. It is calculated as (Stroke Volume / End-Diastolic Volume) × 100. A normal EF is around 55-70%."
  },
  {
    "id": "heart-38",
    "question": "The part of the conduction system that spreads the impulse down the right side of the interventricular septum is the:",
    "options": [
      "Left bundle branch",
      "Right bundle branch",
      "Purkinje fibers",
      "Bundle of His"
    ],
    "correctAnswer": 1,
    "explanation": "The right bundle branch conducts the electrical impulse from the bundle of His down the right side of the interventricular septum to the right ventricle."
  },
  {
    "id": "heart-39",
    "question": "The large artery that carries oxygenated blood from the left ventricle to the systemic circulation is the:",
    "options": [
      "Pulmonary artery",
      "Aorta",
      "Superior vena cava",
      "Coronary artery"
    ],
    "correctAnswer": 1,
    "explanation": "The aorta is the largest artery in the body. It arises from the left ventricle and carries oxygenated blood under high pressure to distribute to all parts of the body except the lungs."
  },
  {
    "id": "heart-40",
    "question": "The term for the rapid flow of blood from the atria into the ventricles at the beginning of ventricular diastole is:",
    "options": [
      "Atrial systole",
      "Rapid ventricular filling",
      "Isovolumetric relaxation",
      "Reduced ventricular filling"
    ],
    "correctAnswer": 1,
    "explanation": "Rapid ventricular filling occurs early in ventricular diastole. Once the AV valves open, blood that has accumulated in the atria during previous systole rushes rapidly into the relaxing ventricles. This phase accounts for most of ventricular filling."
  },
  {
    "id": "heart-41",
    "question": "The structure known as the 'pacemaker' of the heart because it initiates the heartbeat is the:",
    "options": [
      "Atrioventricular node",
      "Purkinje network",
      "Sinoatrial node",
      "Bundle of His"
    ],
    "correctAnswer": 2,
    "explanation": "The sinoatrial (SA) node, located in the upper wall of the right atrium, has the highest inherent rate of depolarization (pacemaker potential). It sets the rhythm for the entire heart, making it the natural pacemaker."
  },
  {
    "id": "heart-42",
    "question": "The phase of the cardiac cycle where blood is actively being ejected from the ventricles into the arteries is:",
    "options": [
      "Isovolumetric contraction",
      "Ventricular ejection",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular ejection occurs when the pressure in the ventricles exceeds the pressure in the pulmonary artery and aorta. This forces the semilunar valves open, and blood is rapidly ejected into the arterial systems."
  },
  {
    "id": "heart-43",
    "question": "The large vein that returns deoxygenated blood from the lower body to the right atrium is the:",
    "options": [
      "Superior vena cava",
      "Pulmonary vein",
      "Inferior vena cava",
      "Coronary sinus"
    ],
    "correctAnswer": 2,
    "explanation": "The inferior vena cava is a large vein that carries deoxygenated blood from the lower body (abdomen, pelvis, and lower limbs) into the right atrium of the heart."
  },
  {
    "id": "heart-44",
    "question": "The term for the final phase of ventricular diastole, where filling is completed by atrial contraction, is:",
    "options": [
      "Rapid filling",
      "Isovolumetric relaxation",
      "Reduced filling (diastasis)",
      "Atrial systole"
    ],
    "correctAnswer": 3,
    "explanation": "Atrial systole (sometimes called the 'atrial kick') is the final phase of ventricular filling. The atria contract, forcing the remaining 20-30% of blood into the ventricles. This ensures the ventricles are at their end-diastolic volume before they contract."
  },
  {
    "id": "heart-45",
    "question": "The structure that collects deoxygenated blood from the heart muscle itself is the:",
    "options": [
      "Coronary artery",
      "Pulmonary artery",
      "Coronary sinus",
      "Aorta"
    ],
    "correctAnswer": 2,
    "explanation": "The coronary sinus is a large vein on the posterior side of the heart. It collects deoxygenated blood from the cardiac veins (which drain the myocardium) and empties it directly into the right atrium."
  },
  {
    "id": "heart-46",
    "question": "The term for the period of slow ventricular filling that occurs in the middle of diastole is:",
    "options": [
      "Rapid filling",
      "Diastasis",
      "Atrial systole",
      "Isovolumetric relaxation"
    ],
    "correctAnswer": 1,
    "explanation": "Diastasis is the period of slow ventricular filling that occurs after the rapid filling phase and before atrial systole. During this phase, the pressure between the atria and ventricles nearly equalizes, and blood flows into the ventricles at a slower rate."
  },
  {
    "id": "heart-47",
    "question": "The part of the heart's conduction system that directly stimulates the ventricular muscle cells to contract is the:",
    "options": [
      "Bundle of His",
      "Sinoatrial node",
      "Atrioventricular node",
      "Purkinje fibers"
    ],
    "correctAnswer": 3,
    "explanation": "Purkinje fibers are the final part of the conduction system. They are large, specialized fibers that spread the electrical impulse throughout the ventricular myocardium, ensuring a coordinated, powerful contraction from the apex upward."
  },
  {
    "id": "heart-48",
    "question": "The formula for calculating cardiac output is:",
    "options": [
      "Heart Rate / Stroke Volume",
      "Stroke Volume / Heart Rate",
      "Heart Rate × Stroke Volume",
      "End-Diastolic Volume - End-Systolic Volume"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac Output (CO) is the volume of blood pumped by each ventricle per minute. It is calculated by multiplying Heart Rate (HR), the number of beats per minute, by Stroke Volume (SV), the volume of blood pumped per beat: CO = HR × SV."
  },
  {
    "id": "heart-49",
    "question": "The term for the pressure the ventricles must overcome to eject blood is:",
    "options": [
      "Preload",
      "Afterload",
      "Contractility",
      "Stroke volume"
    ],
    "correctAnswer": 1,
    "explanation": "Afterload is the pressure or resistance against which the heart must pump to eject blood. For the left ventricle, it is primarily determined by the systemic arterial blood pressure. High afterload makes ejection more difficult."
  },
  {
    "id": "heart-50",
    "question": "The term for the degree of stretch of the ventricular muscle fibers at the end of diastole is:",
    "options": [
      "Afterload",
      "Preload",
      "Contractility",
      "Ejection fraction"
    ],
    "correctAnswer": 1,
    "explanation": "Preload is the initial stretching of the cardiac myocytes prior to contraction. It is directly related to the end-diastolic volume (EDV). According to the Frank-Starling law, a greater preload results in a more forceful contraction and a larger stroke volume."
  },
  
  {
    "id": "heart-76",
    "question": "The part of the heart that receives blood from the superior and inferior vena cava is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Right atrium",
      "Left ventricle"
    ],
    "correctAnswer": 2,
    "explanation": "The right atrium is the chamber that receives deoxygenated blood from the systemic circulation via the two largest veins: the superior vena cava (from the upper body) and the inferior vena cava (from the lower body)."
  },
  {
    "id": "heart-77",
    "question": "The term for the period when the ventricles are contracting and blood is being ejected is:",
    "options": [
      "Atrial diastole",
      "Ventricular systole",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular systole is the phase of the cardiac cycle when the ventricles contract. This contraction increases the pressure inside the ventricles, forcing the semilunar valves (aortic and pulmonary) open and ejecting blood into the arteries."
  },
  {
    "id": "heart-78",
    "question": "The part of the conduction system that ensures simultaneous contraction of both ventricles is the:",
    "options": [
      "SA node",
      "AV node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 3,
    "explanation": "The Purkinje fibers are a network of specialized conducting fibers that spread throughout the ventricular myocardium. They rapidly transmit the electrical impulse, ensuring a coordinated and nearly simultaneous contraction of both ventricles from the apex upward, which is crucial for efficient pumping."
  },
  {
    "id": "heart-79",
    "question": "The term for the amount of resistance the left ventricle must overcome to circulate blood is:",
    "options": [
      "Preload",
      "Systemic vascular resistance",
      "Venous return",
      "Pulmonary resistance"
    ],
    "correctAnswer": 1,
    "explanation": "Systemic Vascular Resistance (SVR) is the resistance to blood flow offered by all of the systemic vasculature. It is the primary component of afterload for the left ventricle. High SVR (e.g., in hypertension) means the left ventricle must work harder to eject blood."
  },
  {
    "id": "heart-80",
    "question": "The part of the ECG that represents the time from ventricular depolarization to the end of repolarization is the:",
    "options": [
      "PR interval",
      "QT interval",
      "ST segment",
      "RR interval"
    ],
    "correctAnswer": 1,
    "explanation": "The QT interval on an ECG measures from the start of the QRS complex (ventricular depolarization) to the end of the T wave (ventricular repolarization). It represents the total time for a ventricular electrical cycle. Its duration is heart-rate dependent."
  },
  {
    "id": "heart-81",
    "question": "The term for the volume of blood remaining in the ventricle after ejection is:",
    "options": [
      "End-diastolic volume",
      "Stroke volume",
      "End-systolic volume",
      "Cardiac output"
    ],
    "correctAnswer": 2,
    "explanation": "End-systolic volume (ESV) is the volume of blood that remains in the ventricle at the end of systole, after contraction and ejection. A lower ESV typically indicates a more efficient contraction and a higher ejection fraction."
  },
  {
    "id": "heart-82",
    "question": "The part of the heart that is primarily responsible for pumping blood to the systemic circuit is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle is responsible for generating the force needed to pump oxygenated blood through the aortic valve into the aorta and then to the entire systemic circulation (every organ and tissue in the body except the lungs)."
  },
  {
    "id": "heart-83",
    "question": "The term for the rapid, passive filling of the ventricles that occurs just after the AV valves open is:",
    "options": [
      "Atrial systole",
      "Rapid ventricular filling",
      "Diastasis",
      "Isovolumetric relaxation"
    ],
    "correctAnswer": 1,
    "explanation": "Rapid ventricular filling is the first phase of ventricular diastole. Once the AV valves open, blood that has accumulated in the atria during the previous ventricular systole rushes rapidly into the relaxing ventricles. This phase accounts for the majority of ventricular filling."
  },
  {
    "id": "heart-84",
    "question": "The part of the heart where the tricuspid valve is located is between the:",
    "options": [
      "Right atrium and right ventricle",
      "Left atrium and left ventricle",
      "Right ventricle and pulmonary artery",
      "Left ventricle and aorta"
    ],
    "correctAnswer": 0,
    "explanation": "The tricuspid valve is the right atrioventricular (AV) valve. It is located between the right atrium and the right ventricle. Its function is to prevent backflow of blood from the ventricle into the atrium during ventricular contraction."
  },
  {
    "id": "heart-85",
    "question": "The term for the law that states the heart will pump all the blood returned to it is:",
    "options": [
      "Frank-Starling Law",
      "Boyle's Law",
      "Poiseuille's Law",
      "Henry's Law"
    ],
    "correctAnswer": 0,
    "explanation": "The Frank-Starling Law of the Heart states that the stroke volume of the heart increases in response to an increase in the volume of blood filling the heart (the end diastolic volume). This intrinsic mechanism ensures that the heart pumps all the blood that returns to it, balancing the output of the two ventricles."
  },
  {
    "id": "heart-86",
    "question": "The part of the ECG that can indicate myocardial ischemia if it is elevated or depressed is the:",
    "options": [
      "P wave",
      "QRS complex",
      "ST segment",
      "T wave"
    ],
    "correctAnswer": 2,
    "explanation": "The ST segment should be isoelectric (flat on the baseline). ST segment elevation is a classic sign of an acute myocardial infarction (heart attack), indicating full-thickness injury to the heart muscle. ST segment depression can indicate myocardial ischemia (reduced blood flow)."
  },
  {
    "id": "heart-87",
    "question": "The term for the amount of blood the heart pumps per minute is:",
    "options": [
      "Stroke volume",
      "Heart rate",
      "Cardiac output",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac output is the total volume of blood pumped by each ventricle per minute. It is the product of heart rate (beats per minute) and stroke volume (volume pumped per beat). It is a key measure of the heart's pumping efficiency."
  },
  {
    "id": "heart-88",
    "question": "The part of the heart that has the thickest myocardium to generate high pressure is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle has the thickest wall of myocardium because it must generate enough force to overcome the high pressure of the systemic circulation (afterload) and pump blood to the entire body. Its wall is about three times thicker than that of the right ventricle."
  },
  {
    "id": "heart-89",
    "question": "The term for the period when the atria are contracting is:",
    "options": [
      "Atrial systole",
      "Ventricular systole",
      "Atrial diastole",
      "Ventricular diastole"
    ],
    "correctAnswer": 0,
    "explanation": "Atrial systole is the brief period of contraction of the atria. It occurs at the end of ventricular diastole and contributes the final 20-30% of blood volume to ventricular filling (the 'atrial kick')."
  },
  {
    "id": "heart-90",
    "question": "The part of the conduction system that has the fastest inherent rate of depolarization is the:",
    "options": [
      "AV node",
      "SA node",
      "Purkinje fibers",
      "Bundle of His"
    ],
    "correctAnswer": 1,
    "explanation": "The sinoatrial (SA) node has the fastest inherent rate of spontaneous depolarization (pacemaker potential), at about 60-100 times per minute. This allows it to set the pace for the entire heart and function as the natural pacemaker."
  },
  {
    "id": "heart-91",
    "question": "The term for the pressure in the arteries when the ventricles are contracting is:",
    "options": [
      "Diastolic pressure",
      "Systolic pressure",
      "Pulse pressure",
      "Mean arterial pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Systolic blood pressure is the peak pressure in the arteries, which occurs during ventricular systole when the heart is contracting and ejecting blood into the arterial system. It is the higher number in a blood pressure reading."
  },
  {
    "id": "heart-92",
    "question": "The part of the heart that pumps blood under the lowest pressure is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The right ventricle pumps blood into the low-pressure pulmonary circulation. The pulmonary arterial pressure is much lower than the systemic arterial pressure, so the right ventricle has a thinner wall and does not need to generate as much force as the left ventricle."
  },
  {
    "id": "heart-93",
    "question": "The term for the pressure in the arteries when the ventricles are relaxing is:",
    "options": [
      "Systolic pressure",
      "Diastolic pressure",
      "Pulse pressure",
      "Mean arterial pressure"
    ],
    "correctAnswer": 1,
    "explanation": "Diastolic blood pressure is the minimum pressure in the arteries, which occurs during ventricular diastole when the heart is relaxing and refilling. It is the lower number in a blood pressure reading and reflects the peripheral resistance."
  },
  {
    "id": "heart-94",
    "question": "The part of the ECG that represents the time for the impulse to travel from the SA node to the ventricles is the:",
    "options": [
      "QT interval",
      "PR interval",
      "ST segment",
      "RR interval"
    ],
    "correctAnswer": 1,
    "explanation": "The PR interval on an ECG measures the time from the beginning of atrial depolarization (start of P wave) to the beginning of ventricular depolarization (start of QRS complex). It includes the conduction delay at the AV node, which is crucial for proper cardiac function."
  },
  {
    "id": "heart-95",
    "question": "The term for the difference between systolic and diastolic blood pressure is:",
    "options": [
      "Mean arterial pressure",
      "Pulse pressure",
      "Systemic vascular resistance",
      "Cardiac output"
    ],
    "correctAnswer": 1,
    "explanation": "Pulse pressure is the difference between the systolic and diastolic blood pressure (Systolic - Diastolic). It is influenced by the stroke volume and the compliance (elasticity) of the arterial walls. A wide pulse pressure can indicate conditions like aortic regurgitation or atherosclerosis."
  },
  {
    "id": "heart-96",
    "question": "The part of the heart that is most posterior (lies at the back) is the:",
    "options": [
      "Right ventricle",
      "Left atrium",
      "Apex",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The left atrium is the most posterior chamber of the heart. It lies just in front of the esophagus and the descending thoracic aorta. This is why an enlarged left atrium can sometimes be seen pressing on the esophagus in a chest X-ray."
  },
  {
    "id": "heart-97",
    "question": "The term for the average pressure in the arteries during one cardiac cycle is:",
    "options": [
      "Systolic pressure",
      "Diastolic pressure",
      "Pulse pressure",
      "Mean arterial pressure (MAP)"
    ],
    "correctAnswer": 3,
    "explanation": "Mean Arterial Pressure (MAP) is the average pressure in the arteries throughout the cardiac cycle. It is a critical determinant of blood flow to organs. It is not a simple average but is calculated as: MAP = Diastolic Pressure + 1/3(Pulse Pressure)."
  },
  {
    "id": "heart-98",
    "question": "The part of the heart that forms most of the sternocostal (anterior) surface is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The right ventricle forms most of the anterior surface of the heart, lying just behind the sternum and the costal cartilages. This is clinically relevant for procedures like pericardiocentesis, where a needle is inserted to remove fluid from the pericardial sac."
  },
  {
    "id": "heart-99",
    "question": "The term for the period when all four heart valves are closed during the cardiac cycle occurs during:",
    "options": [
      "Atrial systole and ventricular ejection",
      "Isovolumetric contraction and isovolumetric relaxation",
      "Rapid filling and atrial systole",
      "Ventricular ejection and rapid filling"
    ],
    "correctAnswer": 1,
    "explanation": "There are two brief periods in the cardiac cycle when all four valves are closed simultaneously: 1) Isovolumetric Contraction (after AV valves close but before semilunar valves open). 2) Isovolumetric Relaxation (after semilunar valves close but before AV valves open). During these phases, ventricular volume remains constant."
  },
  {
    "id": "heart-100",
    "question": "The part of the heart that contains the pacemaker cells that initiate the heartbeat is the:",
    "options": [
      "Atrioventricular node",
      "Sinoatrial node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The sinoatrial (SA) node contains specialized pacemaker cells that spontaneously depolarize at a faster rate than any other part of the heart. This intrinsic automaticity allows it to initiate the electrical impulse for each heartbeat, setting the sinus rhythm."
  },
  {
    "id": "heart-101",
    "question": "The term for the volume of blood in the ventricles at the end of diastole is:",
    "options": [
      "End-systolic volume",
      "Stroke volume",
      "End-diastolic volume",
      "Cardiac output"
    ],
    "correctAnswer": 2,
    "explanation": "End-diastolic volume (EDV) is the volume of blood in a ventricle at the end of filling (diastole), just before contraction begins. It is a major determinant of preload, which according to the Frank-Starling law, influences the strength of the subsequent contraction."
  },
  {
    "id": "heart-102",
    "question": "The part of the heart that receives blood from the coronary sinus is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The coronary sinus is the largest vein draining the heart muscle (myocardium) itself. It empties deoxygenated blood directly into the right atrium, near the opening of the inferior vena cava."
  },
  {
    "id": "heart-103",
    "question": "The term for the nervous system that controls involuntary actions like heart rate is the:",
    "options": [
      "Somatic nervous system",
      "Autonomic nervous system",
      "Central nervous system",
      "Enteric nervous system"
    ],
    "correctAnswer": 1,
    "explanation": "The autonomic nervous system (ANS) controls involuntary bodily functions, including heart rate, digestion, respiratory rate, and pupillary response. It has two main divisions: the sympathetic (fight or flight) and parasympathetic (rest and digest) systems, which have opposing effects on heart rate."
  },
  {
    "id": "heart-104",
    "question": "The part of the ECG that represents the time between heartbeats is the:",
    "options": [
      "PR interval",
      "QT interval",
      "ST segment",
      "RR interval"
    ],
    "correctAnswer": 3,
    "explanation": "The RR interval is the time between two successive R waves on an ECG. Since the R wave marks the peak of ventricular depolarization, the RR interval represents the time between two heartbeats. It is used to calculate heart rate (HR = 60 / RR interval in seconds)."
  },
  {
    "id": "heart-105",
    "question": "The term for the fibrous structures that anchor the AV valve cusps to the papillary muscles are the:",
    "options": [
      "Trabeculae carneae",
      "Chordae tendineae",
      "Pectinate muscles",
      "Coronary ligaments"
    ],
    "correctAnswer": 1,
    "explanation": "Chordae tendineae are strong, fibrous cords that connect the cusps of the atrioventricular valves (tricuspid and mitral) to the papillary muscles in the ventricles. They prevent the valve cusps from being forced back into the atria (prolapsing) during ventricular contraction."
  },
  {
    "id": "heart-106",
    "question": "The part of the heart that contains pectinate muscles is the:",
    "options": [
      "Left ventricle",
      "Right atrium",
      "Left atrium",
      "Right ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "Pectinate muscles are parallel ridges of muscle tissue found on the internal walls of the right atrium and both auricles (atrial appendages). They are involved in increasing the contractile power of the atrium without significantly increasing heart mass."
  },
  {
    "id": "heart-107",
    "question": "The term for the muscular ridges found on the internal walls of the ventricles are:",
    "options": [
      "Pectinate muscles",
      "Trabeculae carneae",
      "Chordae tendineae",
      "Papillary muscles"
    ],
    "correctAnswer": 1,
    "explanation": "Trabeculae carneae are irregular muscular ridges and columns found on the internal surfaces of the ventricles. They add strength to the ventricular wall without increasing thickness and help prevent suction that might occur with a smooth surface."
  },
  {
    "id": "heart-108",
    "question": "The part of the heart that pumps blood into the pulmonary circulation is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The right ventricle is responsible for pumping deoxygenated blood through the pulmonary valve into the pulmonary artery, which then branches to carry blood to the right and left lungs for gas exchange."
  },
  {
    "id": "heart-109",
    "question": "The term for the small, conical muscles that attach to the chordae tendineae are the:",
    "options": [
      "Trabeculae carneae",
      "Pectinate muscles",
      "Papillary muscles",
      "Auricular muscles"
    ],
    "correctAnswer": 2,
    "explanation": "Papillary muscles are cone-shaped muscles that project from the walls of the ventricles. They contract just before ventricular systole, tightening the chordae tendineae and preventing the atrioventricular valves from prolapsing into the atria when the ventricles contract."
  },
  {
    "id": "heart-110",
    "question": "The part of the heart that is responsible for the 'atrial kick' is the:",
    "options": [
      "Ventricular contraction",
      "Atrial contraction",
      "AV valve closure",
      "Semilunar valve opening"
    ],
    "correctAnswer": 1,
    "explanation": "The 'atrial kick' refers to the contraction of the atria (atrial systole) at the end of ventricular diastole. This active contraction contributes an additional 20-30% of blood volume to ventricular filling, optimizing the end-diastolic volume and thus the stroke volume via the Frank-Starling mechanism."
  },
  {
    "id": "heart-111",
    "question": "The term for the remnant of a fetal shunt that connected the two atria is the:",
    "options": [
      "Ligamentum arteriosum",
      "Foramen ovale / Fossa ovalis",
      "Ductus venosus",
      "Umbilical ligament"
    ],
    "correctAnswer": 1,
    "explanation": "The foramen ovale is a fetal shunt that allowed blood to bypass the non-functional lungs by flowing from the right atrium directly to the left atrium. After birth, it closes and leaves a depression in the interatrial septum called the fossa ovalis."
  },
  {
    "id": "heart-112",
    "question": "The part of the heart that is supplied by the right coronary artery is often the:",
    "options": [
      "Left ventricle",
      "SA node and AV node",
      "Apex of the heart",
      "Interventricular septum"
    ],
    "correctAnswer": 1,
    "explanation": "The right coronary artery (RCA) typically supplies blood to the right atrium, right ventricle, and often the sinoatrial (SA) node (in about 60% of people) and the atrioventricular (AV) node (in about 90% of people). Blockage here can cause arrhythmias."
  },
  {
    "id": "heart-113",
    "question": "The term for the remnant of a fetal shunt that connected the pulmonary artery to the aorta is the:",
    "options": [
      "Fossa ovalis",
      "Ligamentum arteriosum",
      "Ligamentum venosum",
      "Medial umbilical ligament"
    ],
    "correctAnswer": 1,
    "explanation": "The ductus arteriosus is a fetal shunt that allowed blood to bypass the non-functional lungs by flowing from the pulmonary artery directly into the aorta. After birth, it closes and becomes a fibrous ligament known as the ligamentum arteriosum."
  },
  {
    "id": "heart-114",
    "question": "The part of the heart that is supplied by the left anterior descending artery is the:",
    "options": [
      "Right atrium",
      "Anterior wall of left ventricle",
      "SA node",
      "Posterior wall of right ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The left anterior descending (LAD) artery, a branch of the left coronary artery, runs down the anterior interventricular sulcus. It supplies blood to the anterior wall of the left ventricle and the anterior two-thirds of the interventricular septum. It is often called the 'widowmaker' artery because its blockage can be fatal."
  },
  {
    "id": "heart-115",
    "question": "The term for a heart rate that is generated by the AV node instead of the SA node is a(n):",
    "options": [
      "Sinus rhythm",
      "Nodal rhythm",
      "Ventricular rhythm",
      "Atrial rhythm"
    ],
    "correctAnswer": 1,
    "explanation": "A nodal rhythm (or junctional rhythm) occurs when the AV node takes over as the pacemaker of the heart. This can happen if the SA node fails or its impulse is blocked. The AV node has a slower inherent rate (40-60 bpm) than the SA node."
  },
  {
    "id": "heart-116",
    "question": "The part of the ECG that is absent if the impulse originates in the AV node is the:",
    "options": [
      "QRS complex",
      "T wave",
      "P wave",
      "ST segment"
    ],
    "correctAnswer": 2,
    "explanation": "In a junctional rhythm (originating from the AV node), the atria are depolarized via retrograde (backward) conduction. This often results in an inverted P wave (if it occurs before the QRS) or no visible P wave at all on the ECG, as atrial and ventricular depolarization happen almost simultaneously."
  },
  {
    "id": "heart-117",
    "question": "The term for the amount of blood pumped by the heart in one minute is:",
    "options": [
      "Stroke volume",
      "Heart rate",
      "Cardiac output",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac output is the total volume of blood pumped by each ventricle per minute. It is the product of heart rate (beats per minute) and stroke volume (milliliters pumped per beat). CO = HR × SV. It is a primary measure of cardiac function."
  },
  {
    "id": "heart-118",
    "question": "The part of the heart that is most commonly affected by a myocardial infarction is the:",
    "options": [
      "Right atrium",
      "Left ventricle",
      "Right ventricle",
      "Left atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The left ventricle is the most common site for a myocardial infarction (heart attack) because it has the highest oxygen demand due to its thick wall and the high pressure it must generate. Blockages in the coronary arteries that supply it (like the LAD) are most critical."
  },
  {
    "id": "heart-119",
    "question": "The term for the pressure that must be exceeded before the semilunar valves can open is:",
    "options": [
      "Diastolic pressure",
      "Systolic pressure",
      "Atrial pressure",
      "Ventricular pressure"
    ],
    "correctAnswer": 1,
    "explanation": "For the aortic valve to open during ventricular systole, the pressure generated by the contracting left ventricle must exceed the diastolic pressure in the aorta. This pressure gradient forces the valve open and allows ejection of blood."
  },
  {
    "id": "heart-120",
    "question": "The part of the cardiac cycle where the AV valves are open and the semilunar valves are closed is during:",
    "options": [
      "Ventricular systole",
      "Isovolumetric contraction",
      "Ventricular diastole",
      "Ventricular ejection"
    ],
    "correctAnswer": 2,
    "explanation": "During ventricular diastole, the ventricles are relaxing and filling with blood. The pressure in the atria exceeds the pressure in the ventricles, which forces the AV valves open. Meanwhile, the pressure in the arteries is higher than in the ventricles, keeping the semilunar valves closed."
  },
  {
    "id": "heart-121",
    "question": "The term for the sound produced by the closure of the semilunar valves is the:",
    "options": [
      "First heart sound (S1)",
      "Second heart sound (S2)",
      "Third heart sound (S3)",
      "Fourth heart sound (S4)"
    ],
    "correctAnswer": 1,
    "explanation": "The second heart sound (S2, 'dub') is produced by the closure of the semilunar valves (aortic and pulmonary) at the beginning of ventricular diastole. It signifies the end of systole and the beginning of diastole."
  },
  {
    "id": "heart-122",
    "question": "The part of the cardiac cycle where the semilunar valves are open and the AV valves are closed is during:",
    "options": [
      "Ventricular diastole",
      "Ventricular ejection",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "During ventricular ejection (part of ventricular systole), the ventricles are contracting. The pressure inside them exceeds the pressure in the pulmonary artery and aorta, forcing the semilunar valves open. The AV valves remain closed to prevent backflow into the atria."
  },
  {
    "id": "heart-123",
    "question": "The term for the sound produced by the closure of the AV valves is the:",
    "options": [
      "Second heart sound (S2)",
      "First heart sound (S1)",
      "Third heart sound (S3)",
      "Fourth heart sound (S4)"
    ],
    "correctAnswer": 1,
    "explanation": "The first heart sound (S1, 'lub') is produced by the closure of the atrioventricular valves (tricuspid and mitral) at the beginning of ventricular systole. It signifies the start of ventricular contraction."
  },
  {
    "id": "heart-124",
    "question": "The part of the heart that is responsible for pumping blood to the lungs for oxygenation is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The right ventricle receives deoxygenated blood from the right atrium and pumps it through the pulmonary valve into the pulmonary artery. The pulmonary artery then carries this blood to the lungs, where carbon dioxide is released and oxygen is picked up."
  },
  {
    "id": "heart-125",
    "question": "The term for an abnormal heart sound heard between the normal sounds is a:",
    "options": [
      "Heart murmur",
      "Pericardial rub",
      "Gallop rhythm",
      "Split sound"
    ],
    "correctAnswer": 0,
    "explanation": "A heart murmur is an abnormal blowing, whooshing, or rasping sound heard between the normal heartbeats (S1 and S2). Murmurs are caused by turbulent blood flow, often due to valve problems such as stenosis (narrowing) or regurgitation (leakage)."
  },
  {
    "id": "heart-126",
    "question": "The part of the heart that contains the opening of the coronary sinus is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The coronary sinus, the main vein draining the heart muscle itself, opens into the right atrium between the opening of the inferior vena cava and the right atrioventricular (tricuspid) orifice. A small valve (valve of Thebesius) often covers this opening."
  },
  {
    "id": "heart-127",
    "question": "The term for the period when the ventricles are filling with blood is:",
    "options": [
      "Ventricular systole",
      "Ventricular diastole",
      "Atrial systole",
      "Isovolumetric contraction"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular diastole is the phase of the cardiac cycle when the ventricles are relaxed and filling with blood. This includes the phases of rapid filling, diastasis, and atrial systole. Approximately 70% of filling is passive, and 30% is due to the atrial contraction."
  },
  {
    "id": "heart-128",
    "question": "The part of the heart that is responsible for receiving blood from the body is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The right atrium acts as a receiving chamber for deoxygenated blood returning from the systemic circulation via the superior and inferior venae cavae. From here, blood passes into the right ventricle to be pumped to the lungs."
  },
  {
    "id": "heart-129",
    "question": "The term for the period when the atria are filling with blood is:",
    "options": [
      "Atrial systole",
      "Atrial diastole",
      "Ventricular systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial diastole is the period when the atria are relaxed and filling with blood. For the right atrium, this is blood from the venae cavae; for the left atrium, it is blood from the pulmonary veins. This occurs simultaneously with ventricular systole."
  },
  {
    "id": "heart-130",
    "question": "The part of the heart that contains the moderator band is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The moderator band (septomarginal trabecula) is a muscular band found in the right ventricle. It extends from the interventricular septum to the base of the anterior papillary muscle. It contains part of the right bundle branch of the conduction system, helping to coordinate the contraction of the right ventricle."
  },
  {
    "id": "heart-131",
    "question": "The term for the amount of blood the heart pumps per beat is:",
    "options": [
      "Cardiac output",
      "Heart rate",
      "Stroke volume",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Stroke volume is the volume of blood pumped out of a ventricle with each heartbeat. It is calculated as the difference between the end-diastolic volume (EDV) and the end-systolic volume (ESV): SV = EDV - ESV. The average resting stroke volume is about 70 mL."
  },
  {
    "id": "heart-132",
    "question": "The part of the heart that is responsible for pumping blood to the body is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle is the major pumping chamber for the systemic circulation. It receives oxygenated blood from the left atrium and pumps it with great force through the aortic valve into the aorta, which then distributes it to the entire body."
  },
  {
    "id": "heart-133",
    "question": "The term for the percentage of blood ejected from the ventricle with each contraction is the:",
    "options": [
      "Cardiac output",
      "Stroke volume",
      "Ejection fraction",
      "Heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Ejection fraction (EF) is a measurement of how much blood the left ventricle pumps out with each contraction. It is calculated as: EF = (Stroke Volume / End-Diastolic Volume) × 100. A normal EF is typically between 55% and 70%. It is a key indicator of heart function."
  },
  {
    "id": "heart-134",
    "question": "The part of the heart that contains the fossa ovalis is the:",
    "options": [
      "Interatrial septum",
      "Interventricular septum",
      "Right ventricular wall",
      "Left ventricular wall"
    ],
    "correctAnswer": 0,
    "explanation": "The fossa ovalis is a shallow depression located in the interatrial septum of the right atrium. It is the remnant of the foramen ovale, a fetal opening that allowed blood to bypass the lungs. After birth, it closes and leaves this anatomical landmark."
  },
  {
    "id": "heart-135",
    "question": "The term for the sequence of events that occurs from the beginning of one heartbeat to the beginning of the next is the:",
    "options": [
      "Cardiac cycle",
      "Electrocardiogram",
      "Conduction system",
      "Heart rate"
    ],
    "correctAnswer": 0,
    "explanation": "The cardiac cycle encompasses all the mechanical and electrical events associated with the flow of blood through the heart during one complete heartbeat. It includes periods of relaxation (diastole) and contraction (systole) for both the atria and ventricles."
  },
  {
    "id": "heart-136",
    "question": "The part of the heart that is supplied by the circumflex artery is the:",
    "options": [
      "Right ventricle",
      "Left atrium and posterior left ventricle",
      "Anterior interventricular septum",
      "SA node"
    ],
    "correctAnswer": 1,
    "explanation": "The circumflex artery is a branch of the left coronary artery. It travels in the coronary sulcus (atrioventricular groove) and typically supplies blood to the left atrium and the posterior wall of the left ventricle."
  },
  {
    "id": "heart-137",
    "question": "The term for the pressure the ventricles must overcome to eject blood is:",
    "options": [
      "Preload",
      "Afterload",
      "Contractility",
      "Venous return"
    ],
    "correctAnswer": 1,
    "explanation": "Afterload is the pressure or resistance against which the heart must pump to eject blood. For the left ventricle, it is largely determined by the systemic vascular resistance (SVR) and the pressure in the aorta. High afterload increases the heart's workload."
  },
  {
    "id": "heart-138",
    "question": "The part of the heart that initiates the electrical impulse for contraction is the:",
    "options": [
      "Atrioventricular node",
      "Sinoatrial node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The sinoatrial (SA) node, located in the upper wall of the right atrium, is the heart's natural pacemaker. Its cells have the fastest rate of spontaneous depolarization, so it sets the pace for the entire heart and initiates each heartbeat."
  },
  {
    "id": "heart-139",
    "question": "The term for the volume of blood pumped by the heart per minute is:",
    "options": [
      "Stroke volume",
      "Heart rate",
      "Cardiac output",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac output is the total volume of blood pumped by each ventricle per minute. It is the product of heart rate (beats per minute) and stroke volume (volume pumped per beat). It is a primary measure of the heart's efficiency as a pump."
  },
  {
    "id": "heart-140",
    "question": "The part of the heart that delays the electrical impulse to allow for atrial contraction before ventricular contraction is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The atrioventricular (AV) node is located in the interatrial septum. It delays the transmission of the electrical impulse from the atria to the ventricles by about 0.1 seconds. This delay ensures that the atria have finished contracting and emptying their blood into the ventricles before the ventricles begin to contract."
  },
  {
    "id": "heart-141",
    "question": "The term for the period when the ventricles are contracting and blood is being ejected is:",
    "options": [
      "Atrial diastole",
      "Ventricular systole",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular systole is the phase of the cardiac cycle when the ventricles contract. This contraction increases the pressure inside the ventricles, forcing the semilunar valves (aortic and pulmonary) open and ejecting blood into the arteries. It follows the isovolumetric contraction phase."
  },
  {
    "id": "heart-142",
    "question": "The part of the heart that contains the aortic valve is between the:",
    "options": [
      "Right atrium and right ventricle",
      "Left atrium and left ventricle",
      "Right ventricle and pulmonary artery",
      "Left ventricle and aorta"
    ],
    "correctAnswer": 3,
    "explanation": "The aortic valve is a semilunar valve located at the base of the aorta, between the left ventricle and the aorta itself. It opens during ventricular systole to allow oxygenated blood to flow into the systemic circulation and closes during diastole to prevent backflow into the ventricle."
  },
  {
    "id": "heart-143",
    "question": "The term for the period when the ventricles are relaxing and filling with blood is:",
    "options": [
      "Atrial systole",
      "Ventricular diastole",
      "Ventricular systole",
      "Atrial diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular diastole is the phase of the cardiac cycle when the ventricles are relaxed. During this time, they fill with blood: first passively from the atria (rapid filling and diastasis), and then actively during atrial systole. Coronary blood flow to the myocardium is also greatest during diastole."
  },
  {
    "id": "heart-144",
    "question": "The part of the heart that contains the pulmonary valve is between the:",
    "options": [
      "Right atrium and right ventricle",
      "Left atrium and left ventricle",
      "Right ventricle and pulmonary artery",
      "Left ventricle and aorta"
    ],
    "correctAnswer": 2,
    "explanation": "The pulmonary valve is a semilunar valve located at the base of the pulmonary artery, between the right ventricle and the pulmonary artery. It opens during ventricular systole to allow deoxygenated blood to flow to the lungs and closes during diastole to prevent backflow into the ventricle."
  },
  {
    "id": "heart-145",
    "question": "The term for the sound produced by the vibration of blood against a diseased valve or structure is a:",
    "options": [
      "Heart sound",
      "Heart murmur",
      "Gallop rhythm",
      "Pericardial rub"
    ],
    "correctAnswer": 1,
    "explanation": "A heart murmur is an abnormal sound heard during the cardiac cycle, often described as a whooshing, swishing, or rasping noise. It is caused by turbulent blood flow, which can be due to valve stenosis (narrowing), valve regurgitation (leakage), or other structural abnormalities."
  },
  {
    "id": "heart-146",
    "question": "The part of the heart that is responsible for receiving oxygenated blood from the lungs is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The left atrium receives oxygen-rich blood from the lungs via the four pulmonary veins (two from each lung). It then acts as a holding chamber before pumping this blood through the bicuspid (mitral) valve into the left ventricle."
  },
  {
    "id": "heart-147",
    "question": "The term for the period when the atria are contracting and forcing blood into the ventricles is:",
    "options": [
      "Atrial diastole",
      "Atrial systole",
      "Ventricular systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial systole is the brief contraction of the atria that occurs at the end of ventricular diastole. This 'atrial kick' contributes the final 20-30% of blood volume to ventricular filling, ensuring the ventricles are optimally stretched (preloaded) before they contract."
  },
  {
    "id": "heart-148",
    "question": "The part of the heart that contains the tricuspid valve is between the:",
    "options": [
      "Right atrium and right ventricle",
      "Left atrium and left ventricle",
      "Right ventricle and pulmonary artery",
      "Left ventricle and aorta"
    ],
    "correctAnswer": 0,
    "explanation": "The tricuspid valve is the right atrioventricular (AV) valve. It is located between the right atrium and the right ventricle. It has three cusps and its function is to prevent the backflow of blood from the ventricle into the atrium during ventricular contraction."
  },
  {
    "id": "heart-149",
    "question": "The term for the period when the atria are relaxing and filling with blood is:",
    "options": [
      "Atrial systole",
      "Atrial diastole",
      "Ventricular systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial diastole is the period when the atria are relaxed. During this time, they fill with blood: the right atrium from the superior and inferior venae cavae, and the left atrium from the pulmonary veins. This occurs largely during ventricular systole."
  },
  {
    "id": "heart-150",
    "question": "The part of the heart that is responsible for pumping blood to the lungs is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The right ventricle is the chamber that pumps deoxygenated blood into the pulmonary circulation. It receives blood from the right atrium and ejects it through the pulmonary valve into the pulmonary artery, which carries it to the lungs to be oxygenated."
  },
  {
    "id": "heart-151",
    "question": "The term for the amount of blood returned to the heart by the veins is:",
    "options": [
      "Afterload",
      "Preload",
      "Contractility",
      "Venous return"
    ],
    "correctAnswer": 3,
    "explanation": "Venous return is the volume of blood flowing back to the heart through the systemic veins each minute. It is a major determinant of preload (end-diastolic volume). According to the Frank-Starling law, an increase in venous return leads to an increase in stroke volume."
  },
  {
    "id": "heart-152",
    "question": "The part of the heart that contains the bicuspid (mitral) valve is between the:",
    "options": [
      "Right atrium and right ventricle",
      "Left atrium and left ventricle",
      "Right ventricle and pulmonary artery",
      "Left ventricle and aorta"
    ],
    "correctAnswer": 1,
    "explanation": "The bicuspid valve, also known as the mitral valve, is the left atrioventricular (AV) valve. It is located between the left atrium and the left ventricle. It has two cusps and prevents backflow of blood from the ventricle into the atrium during ventricular contraction."
  },
  {
    "id": "heart-153",
    "question": "The term for the intrinsic ability of the heart muscle to contract is:",
    "options": [
      "Preload",
      "Afterload",
      "Contractility",
      "Compliance"
    ],
    "correctAnswer": 2,
    "explanation": "Contractility refers to the inherent vigor of contraction of the heart muscle (myocardium) at a given muscle length and afterload. It is independent of the Frank-Starling mechanism. Contractility is increased by sympathetic nervous system stimulation and hormones like epinephrine (positive inotropic effect)."
  },
  {
    "id": "heart-154",
    "question": "The part of the heart that is responsible for pumping blood to the body is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle is the major pumping chamber for the systemic circulation. It receives oxygenated blood from the left atrium and pumps it with great force through the aortic valve into the aorta, which then distributes it to the entire body except the lungs."
  },
  {
    "id": "heart-155",
    "question": "The term for the volume of blood in the ventricles at the end of diastole is:",
    "options": [
      "End-systolic volume",
      "Stroke volume",
      "End-diastolic volume",
      "Cardiac output"
    ],
    "correctAnswer": 2,
    "explanation": "End-diastolic volume (EDV) is the volume of blood in a ventricle at the end of filling (diastole), just before contraction begins. It represents the preload on the heart. According to the Frank-Starling law, a greater EDV results in a more forceful contraction and a larger stroke volume."
  },
  {
    "id": "heart-156",
    "question": "The part of the heart that is responsible for receiving blood from the body is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The right atrium acts as a receiving chamber for deoxygenated blood returning from the systemic circulation via the superior and inferior venae cavae. From here, blood passes through the tricuspid valve into the right ventricle."
  },
  {
    "id": "heart-157",
    "question": "The term for the volume of blood remaining in the ventricles after contraction is:",
    "options": [
      "End-diastolic volume",
      "Stroke volume",
      "End-systolic volume",
      "Cardiac output"
    ],
    "correctAnswer": 2,
    "explanation": "End-systolic volume (ESV) is the volume of blood that remains in a ventricle at the end of systole, after contraction and ejection. A lower ESV indicates a more complete ejection and a more efficient contraction. It is used to calculate stroke volume (SV = EDV - ESV)."
  },
  {
    "id": "heart-158",
    "question": "The part of the heart that is responsible for receiving oxygenated blood from the lungs is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The left atrium receives oxygen-rich blood from the lungs via the four pulmonary veins (two from each lung). It then acts as a reservoir before pumping this blood through the mitral valve into the left ventricle."
  },
  {
    "id": "heart-159",
    "question": "The term for the amount of blood pumped by the heart per beat is:",
    "options": [
      "Cardiac output",
      "Heart rate",
      "Stroke volume",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Stroke volume is the volume of blood pumped out of a ventricle with each heartbeat. It is a key determinant of cardiac output and is influenced by preload, afterload, and contractility. The average resting stroke volume is about 70 mL/beat."
  },
  {
    "id": "heart-160",
    "question": "The part of the heart that is responsible for pumping blood to the lungs is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The right ventricle is the chamber that pumps deoxygenated blood into the pulmonary circulation. It receives blood from the right atrium and ejects it through the pulmonary valve into the pulmonary artery, which carries it to the lungs to be oxygenated."
  },
  {
    "id": "heart-161",
    "question": "The term for the amount of blood pumped by the heart per minute is:",
    "options": [
      "Stroke volume",
      "Heart rate",
      "Cardiac output",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac output is the total volume of blood pumped by each ventricle per minute. It is the product of heart rate (beats per minute) and stroke volume (volume pumped per beat). It is a primary measure of the heart's efficiency as a pump. CO = HR × SV."
  },
  {
    "id": "heart-162",
    "question": "The part of the heart that is responsible for pumping blood to the body is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle is the major pumping chamber for the systemic circulation. It receives oxygenated blood from the left atrium and pumps it with great force through the aortic valve into the aorta, which then distributes it to the entire body except the lungs."
  },
  {
    "id": "heart-163",
    "question": "The term for the percentage of blood ejected from the ventricle with each contraction is the:",
    "options": [
      "Cardiac output",
      "Stroke volume",
      "Ejection fraction",
      "Heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Ejection fraction (EF) is a measurement of the percentage of blood pumped out of the left ventricle with each contraction. It is calculated as: EF = (Stroke Volume / End-Diastolic Volume) × 100. A normal EF is typically between 55% and 70%. It is a key indicator of heart function."
  },
  {
    "id": "heart-164",
    "question": "The part of the heart that initiates the electrical impulse for contraction is the:",
    "options": [
      "Atrioventricular node",
      "Sinoatrial node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The sinoatrial (SA) node, located in the upper wall of the right atrium, is the heart's natural pacemaker. Its cells have the fastest rate of spontaneous depolarization, so it sets the pace for the entire heart and initiates each heartbeat."
  },
  {
    "id": "heart-165",
    "question": "The term for the period when the ventricles are contracting and blood is being ejected is:",
    "options": [
      "Atrial diastole",
      "Ventricular systole",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular systole is the phase of the cardiac cycle when the ventricles contract. This contraction increases the pressure inside the ventricles, forcing the semilunar valves (aortic and pulmonary) open and ejecting blood into the arteries. It follows the isovolumetric contraction phase."
  },
  {
    "id": "heart-166",
    "question": "The part of the heart that delays the electrical impulse to allow for atrial contraction before ventricular contraction is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The atrioventricular (AV) node is located in the interatrial septum. It delays the transmission of the electrical impulse from the atria to the ventricles by about 0.1 seconds. This delay ensures that the atria have finished contracting and emptying their blood into the ventricles before the ventricles begin to contract."
  },
  {
    "id": "heart-167",
    "question": "The term for the period when the ventricles are relaxing and filling with blood is:",
    "options": [
      "Atrial systole",
      "Ventricular diastole",
      "Ventricular systole",
      "Atrial diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular diastole is the phase of the cardiac cycle when the ventricles are relaxed. During this time, they fill with blood: first passively from the atria (rapid filling and diastasis), and then actively during atrial systole. Coronary blood flow to the myocardium is also greatest during diastole."
  },
  {
    "id": "heart-168",
    "question": "The part of the heart that conducts the electrical impulse from the AV node to the bundle branches is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 2,
    "explanation": "The bundle of His (atrioventricular bundle) is the only electrical connection between the atria and the ventricles. It arises from the AV node, penetrates the fibrous skeleton of the heart, and then divides into the right and left bundle branches to transmit the impulse down the interventricular septum."
  },
  {
    "id": "heart-169",
    "question": "The term for the period when the atria are contracting and forcing blood into the ventricles is:",
    "options": [
      "Atrial diastole",
      "Atrial systole",
      "Ventricular systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial systole is the brief contraction of the atria that occurs at the end of ventricular diastole. This 'atrial kick' contributes the final 20-30% of blood volume to ventricular filling, ensuring the ventricles are optimally stretched (preloaded) before they contract."
  },
  {
    "id": "heart-170",
    "question": "The part of the heart that rapidly conducts the electrical impulse throughout the ventricular myocardium is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 3,
    "explanation": "Purkinje fibers are a network of specialized conducting fibers that spread throughout the ventricular myocardium. They rapidly transmit the electrical impulse from the bundle branches, ensuring a coordinated and nearly simultaneous contraction of the ventricles from the apex upward, which is crucial for efficient pumping."
  },
  {
    "id": "heart-171",
    "question": "The term for the period when the atria are relaxing and filling with blood is:",
    "options": [
      "Atrial systole",
      "Atrial diastole",
      "Ventricular systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial diastole is the period when the atria are relaxed. During this time, they fill with blood: the right atrium from the superior and inferior venae cavae, and the left atrium from the pulmonary veins. This occurs largely during ventricular systole."
  },
  {
    "id": "heart-172",
    "question": "The part of the heart that is responsible for the 'lub' sound is the closure of the:",
    "options": [
      "Semilunar valves",
      "Atrioventricular valves",
      "Aortic valve only",
      "Pulmonary valve only"
    ],
    "correctAnswer": 1,
    "explanation": "The first heart sound (S1, 'lub') is produced by the vibration of the heart structures following the closure of the atrioventricular valves (tricuspid and mitral valves) at the beginning of ventricular systole. It signifies the start of ventricular contraction."
  },
  {
    "id": "heart-173",
    "question": "The term for the period when the ventricles are contracting but no blood is being ejected is:",
    "options": [
      "Rapid ejection",
      "Isovolumetric contraction",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Isovolumetric contraction is the brief period at the beginning of ventricular systole where the ventricles contract but all valves (AV and semilunar) are closed. Pressure rises rapidly but no blood is ejected yet, so volume is unchanged. It ends when the ventricular pressure exceeds the arterial pressure, forcing the semilunar valves open."
  },
  {
    "id": "heart-174",
    "question": "The part of the heart that is responsible for the 'dub' sound is the closure of the:",
    "options": [
      "Atrioventricular valves",
      "Semilunar valves",
      "Tricuspid valve only",
      "Mitral valve only"
    ],
    "correctAnswer": 1,
    "explanation": "The second heart sound (S2, 'dub') is produced by the vibration of the heart structures following the closure of the semilunar valves (aortic and pulmonary valves) at the beginning of ventricular diastole. It signifies the end of systole and the beginning of diastole."
  },
  {
    "id": "heart-175",
    "question": "The term for the period when the ventricles are relaxing but no blood is entering because the AV valves are not yet open is:",
    "options": [
      "Isovolumetric contraction",
      "Rapid filling",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 2,
    "explanation": "Isovolumetric relaxation is the brief period at the beginning of ventricular diastole. The ventricles relax, causing pressure to fall rapidly. All valves are closed (semilunar valves have just closed, AV valves are not yet open), so no blood enters or leaves, and volume remains constant. It ends when ventricular pressure falls below atrial pressure, forcing the AV valves open."
  },
  {
    "id": "heart-176",
    "question": "The part of the heart that has the thickest wall to pump blood to the systemic circulation is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle has the thickest wall of myocardium because it must generate enough force to overcome the high pressure of the systemic circulation (afterload) and pump blood to the entire body. Its wall is about three times thicker than that of the right ventricle."
  },
  {
    "id": "heart-177",
    "question": "The term for the amount of blood returned to the heart by the veins is:",
    "options": [
      "Afterload",
      "Preload",
      "Contractility",
      "Venous return"
    ],
    "correctAnswer": 3,
    "explanation": "Venous return is the volume of blood flowing back to the heart through the systemic veins each minute. It is a major determinant of preload (end-diastolic volume). According to the Frank-Starling law, an increase in venous return leads to an increase in stroke volume."
  },
  {
    "id": "heart-178",
    "question": "The part of the heart that pumps blood under the lowest pressure is the:",
    "options": [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The right ventricle pumps blood into the low-pressure pulmonary circulation. The pulmonary arterial pressure is much lower than the systemic arterial pressure, so the right ventricle has a thinner wall and does not need to generate as much force as the left ventricle."
  },
  {
    "id": "heart-179",
    "question": "The term for the pressure the ventricles must overcome to eject blood is:",
    "options": [
      "Preload",
      "Afterload",
      "Contractility",
      "Venous return"
    ],
    "correctAnswer": 1,
    "explanation": "Afterload is the pressure or resistance against which the heart must pump to eject blood. For the left ventricle, it is largely determined by the systemic vascular resistance (SVR) and the pressure in the aorta. High afterload increases the heart's workload."
  },
  {
    "id": "heart-180",
    "question": "The part of the heart that contains the pacemaker with the fastest inherent rate is the:",
    "options": [
      "Atrioventricular node",
      "Sinoatrial node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The sinoatrial (SA) node has the fastest inherent rate of spontaneous depolarization (pacemaker potential), at about 60-100 times per minute. This allows it to set the pace for the entire heart and function as the natural pacemaker. Other potential pacemakers have slower inherent rates."
  },
  {
    "id": "heart-181",
    "question": "The term for the volume of blood in the ventricles at the end of diastole is:",
    "options": [
      "End-systolic volume",
      "Stroke volume",
      "End-diastolic volume",
      "Cardiac output"
    ],
    "correctAnswer": 2,
    "explanation": "End-diastolic volume (EDV) is the volume of blood in a ventricle at the end of filling (diastole), just before contraction begins. It represents the preload on the heart. According to the Frank-Starling law, a greater EDV results in a more forceful contraction and a larger stroke volume."
  },
  {
    "id": "heart-182",
    "question": "The part of the heart that is responsible for receiving blood from the lungs is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 1,
    "explanation": "The left atrium receives oxygen-rich blood from the lungs via the four pulmonary veins (two from each lung). It then acts as a reservoir before pumping this blood through the mitral valve into the left ventricle."
  },
  {
    "id": "heart-183",
    "question": "The term for the volume of blood remaining in the ventricles after contraction is:",
    "options": [
      "End-diastolic volume",
      "Stroke volume",
      "End-systolic volume",
      "Cardiac output"
    ],
    "correctAnswer": 2,
    "explanation": "End-systolic volume (ESV) is the volume of blood that remains in a ventricle at the end of systole, after contraction and ejection. A lower ESV indicates a more complete ejection and a more efficient contraction. It is used to calculate stroke volume (SV = EDV - ESV)."
  },
  {
    "id": "heart-184",
    "question": "The part of the heart that is responsible for pumping blood to the lungs is the:",
    "options": [
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
      "Right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The right ventricle is the chamber that pumps deoxygenated blood into the pulmonary circulation. It receives blood from the right atrium and ejects it through the pulmonary valve into the pulmonary artery, which carries it to the lungs to be oxygenated."
  },
  {
    "id": "heart-185",
    "question": "The term for the amount of blood pumped by the heart per beat is:",
    "options": [
      "Cardiac output",
      "Heart rate",
      "Stroke volume",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Stroke volume is the volume of blood pumped out of a ventricle with each heartbeat. It is a key determinant of cardiac output and is influenced by preload, afterload, and contractility. The average resting stroke volume is about 70 mL/beat."
  },
  {
    "id": "heart-186",
    "question": "The part of the heart that is responsible for pumping blood to the body is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle is the major pumping chamber for the systemic circulation. It receives oxygenated blood from the left atrium and pumps it with great force through the aortic valve into the aorta, which then distributes it to the entire body except the lungs."
  },
  {
    "id": "heart-187",
    "question": "The term for the amount of blood pumped by the heart per minute is:",
    "options": [
      "Stroke volume",
      "Heart rate",
      "Cardiac output",
      "Ejection fraction"
    ],
    "correctAnswer": 2,
    "explanation": "Cardiac output is the total volume of blood pumped by each ventricle per minute. It is the product of heart rate (beats per minute) and stroke volume (volume pumped per beat). It is a primary measure of the heart's efficiency as a pump. CO = HR × SV."
  },
  {
    "id": "heart-188",
    "question": "The part of the heart that initiates the electrical impulse for contraction is the:",
    "options": [
      "Atrioventricular node",
      "Sinoatrial node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The sinoatrial (SA) node, located in the upper wall of the right atrium, is the heart's natural pacemaker. Its cells have the fastest rate of spontaneous depolarization, so it sets the pace for the entire heart and initiates each heartbeat."
  },
  {
    "id": "heart-189",
    "question": "The term for the percentage of blood ejected from the ventricle with each contraction is the:",
    "options": [
      "Cardiac output",
      "Stroke volume",
      "Ejection fraction",
      "Heart rate"
    ],
    "correctAnswer": 2,
    "explanation": "Ejection fraction (EF) is a measurement of the percentage of blood pumped out of the left ventricle with each contraction. It is calculated as: EF = (Stroke Volume / End-Diastolic Volume) × 100. A normal EF is typically between 55% and 70%. It is a key indicator of heart function."
  },
  {
    "id": "heart-190",
    "question": "The part of the heart that delays the electrical impulse to allow for atrial contraction before ventricular contraction is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 1,
    "explanation": "The atrioventricular (AV) node is located in the interatrial septum. It delays the transmission of the electrical impulse from the atria to the ventricles by about 0.1 seconds. This delay ensures that the atria have finished contracting and emptying their blood into the ventricles before the ventricles begin to contract."
  },
  {
    "id": "heart-191",
    "question": "The term for the period when the ventricles are contracting and blood is being ejected is:",
    "options": [
      "Atrial diastole",
      "Ventricular systole",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular systole is the phase of the cardiac cycle when the ventricles contract. This contraction increases the pressure inside the ventricles, forcing the semilunar valves (aortic and pulmonary) open and ejecting blood into the arteries. It follows the isovolumetric contraction phase."
  },
  {
    "id": "heart-192",
    "question": "The part of the heart that conducts the electrical impulse from the AV node to the bundle branches is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 2,
    "explanation": "The bundle of His (atrioventricular bundle) is the only electrical connection between the atria and the ventricles. It arises from the AV node, penetrates the fibrous skeleton of the heart, and then divides into the right and left bundle branches to transmit the impulse down the interventricular septum."
  },
  {
    "id": "heart-193",
    "question": "The term for the period when the ventricles are relaxing and filling with blood is:",
    "options": [
      "Atrial systole",
      "Ventricular diastole",
      "Ventricular systole",
      "Atrial diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Ventricular diastole is the phase of the cardiac cycle when the ventricles are relaxed. During this time, they fill with blood: first passively from the atria (rapid filling and diastasis), and then actively during atrial systole. Coronary blood flow to the myocardium is also greatest during diastole."
  },
  {
    "id": "heart-194",
    "question": "The part of the heart that rapidly conducts the electrical impulse throughout the ventricular myocardium is the:",
    "options": [
      "Sinoatrial node",
      "Atrioventricular node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    "correctAnswer": 3,
    "explanation": "Purkinje fibers are a network of specialized conducting fibers that spread throughout the ventricular myocardium. They rapidly transmit the electrical impulse from the bundle branches, ensuring a coordinated and nearly simultaneous contraction of the ventricles from the apex upward, which is crucial for efficient pumping."
  },
  {
    "id": "heart-195",
    "question": "The term for the period when the atria are contracting and forcing blood into the ventricles is:",
    "options": [
      "Atrial diastole",
      "Atrial systole",
      "Ventricular systole",
      "Ventricular diastole"
    ],
    "correctAnswer": 1,
    "explanation": "Atrial systole is the brief contraction of the atria that occurs at the end of ventricular diastole. This 'atrial kick' contributes the final 20-30% of blood volume to ventricular filling, ensuring the ventricles are optimally stretched (preloaded) before they contract."
  },
  {
    "id": "heart-196",
    "question": "The part of the heart that is responsible for the 'lub' sound is the closure of the:",
    "options": [
      "Semilunar valves",
      "Atrioventricular valves",
      "Aortic valve only",
      "Pulmonary valve only"
    ],
    "correctAnswer": 1,
    "explanation": "The first heart sound (S1, 'lub') is produced by the vibration of the heart structures following the closure of the atrioventricular valves (tricuspid and mitral valves) at the beginning of ventricular systole. It signifies the start of ventricular contraction."
  },
  {
    "id": "heart-197",
    "question": "The term for the period when the ventricles are contracting but no blood is being ejected is:",
    "options": [
      "Rapid ejection",
      "Isovolumetric contraction",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 1,
    "explanation": "Isovolumetric contraction is the brief period at the beginning of ventricular systole where the ventricles contract but all valves (AV and semilunar) are closed. Pressure rises rapidly but no blood is ejected yet, so volume is unchanged. It ends when the ventricular pressure exceeds the arterial pressure, forcing the semilunar valves open."
  },
  {
    "id": "heart-198",
    "question": "The part of the heart that is responsible for the 'dub' sound is the closure of the:",
    "options": [
      "Atrioventricular valves",
      "Semilunar valves",
      "Tricuspid valve only",
      "Mitral valve only"
    ],
    "correctAnswer": 1,
    "explanation": "The second heart sound (S2, 'dub') is produced by the vibration of the heart structures following the closure of the semilunar valves (aortic and pulmonary valves) at the beginning of ventricular diastole. It signifies the end of systole and the beginning of diastole."
  },
  {
    "id": "heart-199",
    "question": "The term for the period when the ventricles are relaxing but no blood is entering because the AV valves are not yet open is:",
    "options": [
      "Isovolumetric contraction",
      "Rapid filling",
      "Isovolumetric relaxation",
      "Atrial systole"
    ],
    "correctAnswer": 2,
    "explanation": "Isovolumetric relaxation is the brief period at the beginning of ventricular diastole. The ventricles relax, causing pressure to fall rapidly. All valves are closed (semilunar valves have just closed, AV valves are not yet open), so no blood enters or leaves, and volume remains constant. It ends when ventricular pressure falls below atrial pressure, forcing the AV valves open."
  },
  {
    "id": "heart-200",
    "question": "The part of the heart that has the thickest wall to pump blood to the systemic circulation is the:",
    "options": [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle"
    ],
    "correctAnswer": 3,
    "explanation": "The left ventricle has the thickest wall of myocardium because it must generate enough force to overcome the high pressure of the systemic circulation (afterload) and pump blood to the entire body. Its wall is about three times thicker than that of the right ventricle."
  }
]
