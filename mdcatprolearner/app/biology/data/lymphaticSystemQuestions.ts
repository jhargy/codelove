export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const lymphaticSystemQuestions: Question[] =
[
  {
    "id": "lymph-1",
    "question": "What is the primary function of the lymphatic system?",
    "options": [
      "To pump blood throughout the body",
      "To produce red blood cells",
      "To return interstitial fluid to the blood and provide immunity",
      "To digest fats and absorb nutrients"
    ],
    "correctAnswer": 2,
    "explanation": "The lymphatic system has two main functions: 1) to maintain fluid balance by collecting excess interstitial fluid (now called lymph) and returning it to the bloodstream, and 2) to defend the body against pathogens through immune responses carried out by lymphocytes and lymphoid organs."
  },
  {
    "id": "lymph-2",
    "question": "The fluid found in the lymphatic vessels is called:",
    "options": [
      "Blood plasma",
      "Interstitial fluid",
      "Lymph",
      "Cerebrospinal fluid"
    ],
    "correctAnswer": 2,
    "explanation": "Once interstitial fluid enters the lymphatic capillaries, it is called lymph. It is a clear, watery fluid that contains white blood cells (especially lymphocytes), proteins, and sometimes fats from the digestive tract."
  },
  {
    "id": "lymph-3",
    "question": "Lymphatic vessels most closely resemble which type of blood vessel?",
    "options": [
      "Arteries",
      "Arterioles",
      "Capillaries",
      "Veins"
    ],
    "correctAnswer": 3,
    "explanation": "Lymphatic vessels have a structure similar to veins. They have thin walls and contain valves to prevent the backflow of lymph. The movement of lymph is aided by the skeletal muscle pump and respiratory pump, just like venous return."
  },
  {
    "id": "lymph-4",
    "question": "What is the unique structural feature of lymphatic capillaries that allows them to absorb large molecules and cells?",
    "options": [
      "They have a thick muscular wall.",
      "They are impermeable to proteins.",
      "Their endothelial cells overlap, forming mini-valves.",
      "They have a continuous basement membrane."
    ],
    "correctAnswer": 2,
    "explanation": "Lymphatic capillaries have blind ends where endothelial cells overlap loosely, forming flap-like mini-valves. These mini-valves are anchored by collagen filaments to surrounding tissues. When interstitial fluid pressure is high, the flaps open, allowing fluid, proteins, pathogens, and even cells to enter. When pressure is higher inside the capillary, the flaps close, preventing backflow."
  },
  {
    "id": "lymph-5",
    "question": "The largest lymphatic vessel in the body, which drains lymph from the lower body and left upper body, is the:",
    "options": [
      "Right lymphatic duct",
      "Thoracic duct",
      "Lumbar trunk",
      "Cisterna chyli"
    ],
    "correctAnswer": 1,
    "explanation": "The thoracic duct is the largest lymphatic vessel. It begins as a dilated sac called the cisterna chyli in the abdomen. It drains lymph from the entire body below the diaphragm and the left side of the body above the diaphragm. It empties its lymph into the venous blood at the junction of the left internal jugular and left subclavian veins."
  },
  {
    "id": "lymph-6",
    "question": "Small, bean-shaped organs that filter lymph and are sites of lymphocyte activation are called:",
    "options": [
      "Lymph nodules",
      "Lymph nodes",
      "Peyer's patches",
      "Tonsils"
    ],
    "correctAnswer": 1,
    "explanation": "Lymph nodes are small, encapsulated organs strategically located along lymphatic vessels. As lymph flows through them, macrophages within the nodes remove and destroy foreign debris (like bacteria and viruses), and lymphocytes are activated to mount an immune response if pathogens are detected."
  },
  {
    "id": "lymph-7",
    "question": "Which of the following is NOT a function of the spleen?",
    "options": [
      "Filtering blood",
      "Storing platelets and iron",
      "Producing bile",
      "Site of immune responses"
    ],
    "correctAnswer": 2,
    "explanation": "The spleen is the largest lymphoid organ. Its functions include: 1) filtering blood and removing old or damaged red blood cells, 2) storing platelets and iron breakdown products from RBCs, and 3) serving as a site for lymphocyte proliferation and immune surveillance. It does not produce bile; that is a function of the liver."
  },
  {
    "id": "lymph-8",
    "question": "The lymphatic tissue that traps pathogens entering through the nose and mouth is the:",
    "options": [
      "Spleen",
      "Appendix",
      "Tonsils",
      "Peyer's patches"
    ],
    "correctAnswer": 2,
    "explanation": "Tonsils are aggregations of lymphoid tissue located in the pharynx (throat). They form a ring around the entrance to the digestive and respiratory tracts (Waldeyer's ring). Their job is to gather and remove pathogens that enter via inhaled air or ingested food."
  },
  {
    "id": "lymph-9",
    "question": "Where do T lymphocytes (T cells) mature?",
    "options": [
      "Bone marrow",
      "Spleen",
      "Thymus",
      "Lymph nodes"
    ],
    "correctAnswer": 2,
    "explanation": "T lymphocytes (T cells) are named for their site of maturation, the thymus. The thymus is a bilobed organ located in the superior mediastinum. Here, T cells undergo a process of education where they learn to recognize self from non-self, ensuring they don't attack the body's own tissues."
  },
  {
    "id": "lymph-10",
    "question": "The term 'MALT' stands for:",
    "options": [
      "Mucosal-Associated Lymphoid Tissue",
      "Macrophage-Activating Lymphatic Tissue",
      "Major Arterial and Lymphatic Trunk",
      "Mature Adaptive Lymphocyte Type"
    ],
    "correctAnswer": 0,
    "explanation": "MALT, or Mucosa-Associated Lymphoid Tissue, is a collective term for the diffuse lymphatic tissue found in the mucous membranes lining various body tracts (digestive, respiratory, urinary, reproductive). Its role is to protect these entry points from the vast number of pathogens we encounter. Examples include tonsils, Peyer's patches, and the appendix."
  },
  {
    "id": "lymph-11",
    "question": "Lymphatic vessels originate as microscopic blind-ended tubes called:",
    "options": [
      "Lymphatic ducts",
      "Lymphatic trunks",
      "Lymphatic capillaries",
      "Lacteals"
    ],
    "correctAnswer": 2,
    "explanation": "Lymphatic capillaries are the smallest lymphatic vessels. They weave between tissue cells and blood capillaries. They have a unique structure with overlapping endothelial cells that form one-way mini-valves, allowing interstitial fluid, proteins, and other particles to enter but not escape."
  },
  {
    "id": "lymph-12",
    "question": "The specialized lymphatic capillaries in the small intestine that absorb dietary fats are called:",
    "options": [
      "Peyer's patches",
      "Lacteals",
      "Sinusoids",
      "Villi"
    ],
    "correctAnswer": 1,
    "explanation": "Lacteals are specialized lymphatic capillaries located in the villi of the small intestine. They are responsible for absorbing dietary lipids and fat-soluble vitamins (A, D, E, K). The fatty lymph absorbed by lacteals is called chyle, which has a milky white appearance."
  },
  {
    "id": "lymph-13",
    "question": "The right lymphatic duct drains lymph from the:",
    "options": [
      "Entire body",
      "Lower limbs and abdomen",
      "Right upper limb and right side of head and thorax",
      "Left side of the body"
    ],
    "correctAnswer": 2,
    "explanation": "The right lymphatic duct is a short vessel that drains lymph from the right upper quadrant of the body: the right arm, and the right sides of the thorax and head. It empties into the venous system at the junction of the right internal jugular and right subclavian veins."
  },
  {
    "id": "lymph-14",
    "question": "The main structural difference between lymphatic capillaries and blood capillaries is that lymphatic capillaries:",
    "options": [
      "Are less permeable",
      "Have a continuous basement membrane",
      "Are blind-ended and more permeable",
      "Carry oxygenated blood"
    ],
    "correctAnswer": 2,
    "explanation": "The key difference is permeability. Lymphatic capillaries are blind-ended (closed at one end) and are far more permeable than blood capillaries. Their overlapping endothelial cell structure allows them to take up large molecules like proteins, cell debris, pathogens, and even cancer cells that could not enter blood capillaries."
  },
  {
    "id": "lymph-15",
    "question": "The sac-like structure that is the origin of the thoracic duct and receives lymph from the digestive organs is the:",
    "options": [
      "Spleen",
      "Cisterna chyli",
      "Lymphatic node",
      "Lacteal"
    ],
    "correctAnswer": 1,
    "explanation": "The cisterna chyli is a dilated sac at the base of the thoracic duct in the upper lumbar region. It receives fatty lymph (chyle) from the lacteals of the small intestine and lymph from the lower body. It is the point where the thoracic duct begins its ascent."
  },
  {
    "id": "lymph-16",
    "question": "Which of the following is a primary lymphoid organ?",
    "options": [
      "Lymph node",
      "Spleen",
      "Tonsil",
      "Thymus"
    ],
    "correctAnswer": 3,
    "explanation": "Primary lymphoid organs are sites where lymphocytes are formed and mature. The two primary lymphoid organs are the red bone marrow (where B cells mature and T cells are born) and the thymus (where T cells mature). Lymph nodes, the spleen, and tonsils are secondary lymphoid organs where immune responses occur."
  },
  {
    "id": "lymph-17",
    "question": "The indented area of a lymph node where blood vessels and nerves enter and efferent lymphatic vessels exit is called the:",
    "options": [
      "Cortex",
      "Medulla",
      "Hilum",
      "Trabecula"
    ],
    "correctAnswer": 2,
    "explanation": "The hilum is a concave region on a lymph node. It is the point where arteries and nerves enter the node, and veins and efferent lymphatic vessels exit. Afferent lymphatic vessels bring lymph into the node at various points on the convex surface."
  },
  {
    "id": "lymph-18",
    "question": "The outer region of a lymph node, which contains follicles with B cells, is the:",
    "options": [
      "Medulla",
      "Hilum",
      "Capsule",
      "Cortex"
    ],
    "correctAnswer": 3,
    "explanation": "The cortex is the outer region of a lymph node. It contains spherical aggregates of B cells called lymphoid follicles. When these follicles are actively fighting pathogens, they develop pale central areas called germinal centers where B cells multiply and differentiate."
  },
  {
    "id": "lymph-19",
    "question": "The inner region of a lymph node, which contains cords of macrophages and plasma cells, is the:",
    "options": [
      "Cortex",
      "Medulla",
      "Hilum",
      "Trabecula"
    ],
    "correctAnswer": 1,
    "explanation": "The medulla is the inner region of a lymph node. It contains medullary cords, which are inward extensions of lymphoid tissue. These cords contain macrophages and plasma cells (antibody-producing B cells) that have migrated from the cortex. Medullary sinuses separate these cords."
  },
  {
    "id": "lymph-20",
    "question": "The term 'lymphadenopathy' refers to:",
    "options": [
      "Inflammation of lymphatic vessels",
      "Enlargement of lymph nodes",
      "Cancer of the lymph nodes",
      "A deficiency of lymphocytes"
    ],
    "correctAnswer": 1,
    "explanation": "Lymphadenopathy is the term for swollen or enlarged lymph nodes. This is a common sign that the nodes are actively fighting an infection (like strep throat or mononucleosis) or, less commonly, could indicate cancer (like lymphoma or metastatic cancer)."
  },
  
  {
    "id": "lymph-21",
    "question": "Which of the following is a secondary lymphoid organ?",
    "options": [
      "Thymus",
      "Bone marrow",
      "Spleen",
      "Liver"
    ],
    "correctAnswer": 2,
    "explanation": "Secondary lymphoid organs are sites where immune responses are initiated. They include the spleen, lymph nodes, tonsils, and MALT (e.g., Peyer's patches). The thymus and bone marrow are primary lymphoid organs where lymphocytes develop and mature."
  },
  {
    "id": "lymph-22",
    "question": "The main cell type responsible for the immune functions of the lymphatic system is the:",
    "options": [
      "Erythrocyte",
      "Platelet",
      "Lymphocyte",
      "Neutrophil"
    ],
    "correctAnswer": 2,
    "explanation": "Lymphocytes (B cells, T cells, and Natural Killer cells) are the cornerstone of the adaptive immune response. They are the primary cells found in lymphoid tissues and are responsible for recognizing and specifically targeting pathogens."
  },
  {
    "id": "lymph-23",
    "question": "Where are Peyer's patches located?",
    "options": [
      "In the spleen",
      "In the wall of the small intestine",
      "In the thymus",
      "Under the tongue"
    ],
    "correctAnswer": 1,
    "explanation": "Peyer's patches are large clusters of lymphoid follicles located in the wall of the ileum, the distal part of the small intestine. They are a key component of MALT (Mucosa-Associated Lymphoid Tissue) and monitor intestinal bacteria populations and prevent the growth of pathogenic bacteria."
  },
  {
    "id": "lymph-24",
    "question": "The main function of the thymus is to:",
    "options": [
      "Filter blood",
      "Mature T lymphocytes",
      "Produce antibodies",
      "Store iron"
    ],
    "correctAnswer": 1,
    "explanation": "The thymus is the primary lymphoid organ responsible for the maturation and education of T lymphocytes (T cells). It is most active in childhood and begins to atrophy after puberty, though it continues to produce T cells throughout life."
  },
  {
    "id": "lymph-25",
    "question": "Which of the following is NOT a type of tonsil?",
    "options": [
      "Palatine tonsils",
      "Lingual tonsils",
      "Pharyngeal tonsil (adenoids)",
      "Maxillary tonsils"
    ],
    "correctAnswer": 3,
    "explanation": "The three main types of tonsils are: 1) Palatine tonsils (located on either side of the posterior oral cavity), 2) Lingual tonsils (located at the base of the tongue), and 3) Pharyngeal tonsil (adenoids, located in the posterior wall of the nasopharynx). There are no 'maxillary tonsils'."
  },
  {
    "id": "lymph-26",
    "question": "The term for inflammation of the lymphatic vessels is:",
    "options": [
      "Lymphangitis",
      "Lymphadenitis",
      "Lymphedema",
      "Lymphoma"
    ],
    "correctAnswer": 0,
    "explanation": "Lymphangitis is the inflammation of lymphatic vessels. It often appears as painful red streaks under the skin extending from a site of infection toward regional lymph nodes. It indicates that pathogens are spreading through the lymphatic system."
  },
  {
    "id": "lymph-27",
    "question": "The white pulp of the spleen is primarily involved in:",
    "options": [
      "Filtering blood and removing old RBCs",
      "Immune functions and lymphocyte activation",
      "Storage of platelets",
      "Production of bile"
    ],
    "correctAnswer": 1,
    "explanation": "The white pulp of the spleen consists of lymphatic tissue, specifically lymphocytes and macrophages arranged around central arteries. Its main function is immune surveillance—it monitors the blood for antigens and is a site where lymphocytes are activated to mount an immune response."
  },
  {
    "id": "lymph-28",
    "question": "The red pulp of the spleen is primarily involved in:",
    "options": [
      "Immune functions",
      "Storage of lymphocytes",
      "Filtering blood and destroying old RBCs",
      "Production of T cells"
    ],
    "correctAnswer": 2,
    "explanation": "The red pulp of the spleen is composed of splenic cords (cords of Billroth) and blood-filled venous sinuses. Its functions include: 1) filtering the blood and removing old, damaged, or abnormal red blood cells, and 2) storing platelets and monocytes."
  },
  {
    "id": "lymph-29",
    "question": "Lymph from the right breast would likely drain into which group of lymph nodes first?",
    "options": [
      "Inguinal nodes",
      "Axillary nodes",
      "Cervical nodes",
      "Mesenteric nodes"
    ],
    "correctAnswer": 1,
    "explanation": "The axillary lymph nodes, located in the armpit (axilla), are the primary regional nodes that drain the breast, most of the upper limb, and the superficial thorax. This is why breast cancer often spreads to these nodes first."
  },
  {
    "id": "lymph-30",
    "question": "Which of the following is a function of lymph nodes?",
    "options": [
      "Pumping lymph",
      "Producing red blood cells",
      "Activating the immune response and filtering lymph",
      "Secreting hormones"
    ],
    "correctAnswer": 2,
    "explanation": "Lymph nodes have two main functions: 1) Filtration: Macrophages in the nodes remove and destroy microorganisms, debris, and foreign particles from the lymph. 2) Immune System Activation: They are sites where lymphocytes encounter antigens and become activated to mount an immune response."
  },
  {
    "id": "lymph-31",
    "question": "The movement of lymph through lymphatic vessels is aided by all of the following EXCEPT:",
    "options": [
      "The pumping action of the heart",
      "The skeletal muscle pump",
      "The respiratory pump",
      "Valves to prevent backflow"
    ],
    "correctAnswer": 0,
    "explanation": "Unlike the cardiovascular system, the lymphatic system has no central pump (like the heart). The movement of lymph is passive and relies on: 1) the squeezing action of surrounding skeletal muscles (skeletal muscle pump), 2) pressure changes in the thorax during breathing (respiratory pump), and 3) the presence of one-way valves to prevent backflow."
  },
  {
    "id": "lymph-32",
    "question": "The appendix is an example of:",
    "options": [
      "A primary lymphoid organ",
      "MALT (Mucosa-Associated Lymphoid Tissue)",
      "A lymphatic vessel",
      "A site for T cell maturation"
    ],
    "correctAnswer": 1,
    "explanation": "The appendix is a tubelike offshoot of the first part of the large intestine (cecum). Its walls contain a high concentration of lymphoid tissue, making it part of the Gut-Associated Lymphoid Tissue (GALT), which is a major component of MALT. It plays a role in immune surveillance of the gut."
  },
  {
    "id": "lymph-33",
    "question": "Which of the following is a characteristic of the thymus?",
    "options": [
      "It filters lymph.",
      "It atrophies (involutes) with age.",
      "It is located in the abdomen.",
      "It produces B cells."
    ],
    "correctAnswer": 1,
    "explanation": "The thymus is most active and largest in size during childhood. After puberty, it gradually atrophies (involutes) and is largely replaced by adipose and connective tissue in adults, though it remains functional. It is located in the superior mediastinum, behind the sternum."
  },
  {
    "id": "lymph-34",
    "question": "The term 'lymphedema' refers to:",
    "options": [
      "Swelling due to lymphatic obstruction",
      "Inflammation of a lymph node",
      "Cancer of the lymphatic system",
      "A congenital absence of lymph nodes"
    ],
    "correctAnswer": 0,
    "explanation": "Lymphedema is the swelling (edema) of tissues, most often in the arms or legs, caused by a blockage or damage to the lymphatic system that prevents lymph from draining properly. This leads to an accumulation of protein-rich fluid in the interstitial spaces."
  },
  {
    "id": "lymph-35",
    "question": "Which cells are responsible for phagocytosis of pathogens within lymph nodes?",
    "options": [
      "Lymphocytes",
      "Macrophages",
      "Erythrocytes",
      "Mast cells"
    ],
    "correctAnswer": 1,
    "explanation": "Macrophages are the primary phagocytic cells within lymph nodes. They are strategically located in the sinuses of the nodes where they engulf and destroy foreign particles, microorganisms, and cellular debris that are carried into the node by the lymph."
  },
  {
    "id": "lymph-36",
    "question": "B lymphocytes (B cells) mature in the:",
    "options": [
      "Thymus",
      "Spleen",
      "Bone marrow",
      "Lymph nodes"
    ],
    "correctAnswer": 2,
    "explanation": "B lymphocytes are named for their site of maturation in the Bursa of Fabricius in birds. In humans, they mature in the Bone marrow. Here, they develop their specific antigen receptors. After maturation, they migrate to secondary lymphoid organs to participate in immune responses."
  },
  {
    "id": "lymph-37",
    "question": "The process by which lymphocytes leave the blood and enter a lymph node is called:",
    "options": [
      "Diapedesis",
      "Phagocytosis",
      "Opsonization",
      "Lymphocytosis"
    ],
    "correctAnswer": 0,
    "explanation": "Diapedesis (or extravasation) is the process where white blood cells (including lymphocytes) squeeze through the walls of capillaries or postcapillary venules to enter the surrounding tissues. In lymph nodes, this is how lymphocytes enter from the blood to patrol for antigens."
  },
  {
    "id": "lymph-38",
    "question": "Cancer that originates in the lymphatic tissue is called:",
    "options": [
      "Lymphangitis",
      "Lymphadenopathy",
      "Lymphoma",
      "Leukemia"
    ],
    "correctAnswer": 2,
    "explanation": "Lymphoma is a general term for cancers that originate in the lymphatic system, specifically in the lymphocytes. The two main types are Hodgkin's lymphoma and non-Hodgkin's lymphoma. Leukemia is cancer of the blood-forming tissues, including bone marrow."
  },
  {
    "id": "lymph-39",
    "question": "The first lymph nodes to receive lymph draining from a specific body area are called:",
    "options": [
      "Medullary nodes",
      "Cortical nodes",
      "Sentinel nodes",
      "Axillary nodes"
    ],
    "correctAnswer": 2,
    "explanation": "Sentinel lymph nodes are the first nodes to which cancer is most likely to spread from a primary tumor. Identifying and biopsying the sentinel node can help determine if cancer has begun to metastasize via the lymphatic system, which is crucial for staging and treatment planning."
  },
  {
    "id": "lymph-40",
    "question": "Which of the following is NOT drained by the thoracic duct?",
    "options": [
      "Left leg",
      "Right arm",
      "Left arm",
      "Abdomen"
    ],
    "correctAnswer": 1,
    "explanation": "The thoracic duct drains lymph from the entire body below the diaphragm and the left upper quadrant (left side of head, neck, thorax, and left arm). The right lymphatic duct drains lymph from the right upper quadrant (right side of head, neck, thorax, and right arm)."
  },
  
  {
    "id": "lymph-41",
    "question": "Which of the following is a characteristic feature of the thoracic duct?",
    "options": [
      "It drains lymph from the right upper body.",
      "It is shorter than the right lymphatic duct.",
      "It begins at the cisterna chyli.",
      "It empties into the right subclavian vein."
    ],
    "correctAnswer": 2,
    "explanation": "The thoracic duct, the body's largest lymphatic vessel, originates from a dilated sac called the cisterna chyli in the abdomen. It ascends through the diaphragm and drains lymph from the entire body below the diaphragm and the left side above it."
  },
  {
    "id": "lymph-42",
    "question": "The 'germinal centers' within a lymph node are primarily sites of:",
    "options": [
      "T cell maturation",
      "B cell proliferation and differentiation",
      "Red blood cell production",
      "Platelet storage"
    ],
    "correctAnswer": 1,
    "explanation": "Germinal centers are pale-staining regions found within the lymphoid follicles of the lymph node cortex. They are sites of intense B cell proliferation, differentiation into plasma cells, and antibody class switching during an active immune response."
  },
  {
    "id": "lymph-43",
    "question": "Lymphoid tissue located in the mucous membranes of the digestive and respiratory tracts is collectively known as:",
    "options": [
      "Peyer's patches",
      "MALT",
      "Tonsils",
      "Lymph nodes"
    ],
    "correctAnswer": 1,
    "explanation": "Mucosa-Associated Lymphoid Tissue (MALT) is a diffuse system of small concentrations of lymphoid tissue found in various mucous membranes. Its function is to protect the body from the vast number of pathogens encountered through ingestion and inhalation."
  },
  {
    "id": "lymph-44",
    "question": "Which statement best describes the flow of lymph through a lymph node?",
    "options": [
      "Enters via the hilum and exits via afferent vessels",
      "Enters via afferent vessels and exits via the hilum",
      "Enters and exits via the same vessel",
      "Enters via efferent vessels and exits via afferent vessels"
    ],
    "correctAnswer": 1,
    "explanation": "Lymph enters a lymph node through multiple afferent lymphatic vessels that pierce the convex surface of the node. After being filtered as it passes through the sinuses, it exits the node through a single efferent lymphatic vessel at the hilum."
  },
  {
    "id": "lymph-45",
    "question": "The pharyngeal tonsil is also known as the:",
    "options": [
      "Palatine tonsil",
      "Adenoid",
      "Lingual tonsil",
      "Tubal tonsil"
    ],
    "correctAnswer": 1,
    "explanation": "The pharyngeal tonsil is a single mass of lymphoid tissue located in the posterior wall of the nasopharynx. When enlarged, it is commonly referred to as the 'adenoids'. Its enlargement can obstruct breathing."
  },
  {
    "id": "lymph-46",
    "question": "What is the composition of the fluid called 'chyle'?",
    "options": [
      "Lymph from the lower limbs",
      "Lymph mixed with saliva",
      "Fat-rich lymph from the intestines",
      "Lymph from the right lymphatic duct"
    ],
    "correctAnswer": 2,
    "explanation": "Chyle is a milky-white fluid consisting of lymph and emulsified fats (chylomicrons). It is absorbed by the lacteals in the villi of the small intestine and is transported through the lymphatic system to the bloodstream."
  },
  {
    "id": "lymph-47",
    "question": "Which of the following is a direct consequence of the removal of axillary lymph nodes?",
    "options": [
      "Increased risk of throat infections",
      "Lymphedema in the arm",
      "Impaired digestion of fats",
      "Reduced production of T cells"
    ],
    "correctAnswer": 1,
    "explanation": "The axillary lymph nodes drain lymph from the arm and breast. Their surgical removal (e.g., during breast cancer surgery) can damage or block lymphatic vessels, leading to the accumulation of interstitial fluid and swelling known as lymphedema in the affected arm."
  },
  {
    "id": "lymph-48",
    "question": "Hassall's corpuscles are characteristic structures found within the:",
    "options": [
      "Spleen",
      "Lymph node",
      "Thymus",
      "Tonsils"
    ],
    "correctAnswer": 2,
    "explanation": "Hassall's corpuscles (or thymic corpuscles) are whorled, keratinized structures found in the medulla of the thymus. Their exact function is not fully understood but they are believed to play a role in the development of regulatory T cells and the negative selection process."
  },
  {
    "id": "lymph-49",
    "question": "Which of the following vessels carries lymph INTO a lymph node?",
    "options": [
      "Efferent lymphatic vessel",
      "Afferent lymphatic vessel",
      "Arteriole",
      "Venule"
    ],
    "correctAnswer": 1,
    "explanation": "Afferent lymphatic vessels bring lymph into the lymph node from the peripheral tissues. These vessels enter the node at various points on its convex surface. Efferent vessels carry filtered lymph away from the node, exiting at the hilum."
  },
  {
    "id": "lymph-50",
    "question": "The primary function of lacteals is to absorb:",
    "options": [
      "Amino acids",
      "Glucose",
      "Vitamins",
      "Dietary fats"
    ],
    "correctAnswer": 3,
    "explanation": "Lacteals are specialized lymphatic capillaries located in the villi of the small intestine. Their unique function is to absorb large fat molecules (triglycerides) and fat-soluble vitamins (A, D, E, K) that are too large to enter blood capillaries directly."
  },
  {
    "id": "lymph-51",
    "question": "Which organ is responsible for the destruction of aged and defective erythrocytes?",
    "options": [
      "Liver",
      "Thymus",
      "Spleen",
      "Lymph node"
    ],
    "correctAnswer": 2,
    "explanation": "A key function of the spleen's red pulp is to filter the blood. Macrophages within the splenic cords phagocytize (engulf and destroy) old, damaged, or abnormal red blood cells, recycling their iron and breaking down hemoglobin."
  },
  {
    "id": "lymph-52",
    "question": "The 'cords of Billroth' are found in the:",
    "options": [
      "Red pulp of the spleen",
      "White pulp of the spleen",
      "Medulla of the lymph node",
      "Cortex of the thymus"
    ],
    "correctAnswer": 0,
    "explanation": "The cords of Billroth are splenic cords, which are reticular connective tissue structures rich in macrophages and other blood cells. They are located within the red pulp of the spleen, between the venous sinuses."
  },
  {
    "id": "lymph-53",
    "question": "Which of the following is NOT a component of the lymphatic system?",
    "options": [
      "Pancreas",
      "Tonsils",
      "Thoracic duct",
      "Peyer's patches"
    ],
    "correctAnswer": 0,
    "explanation": "The pancreas is a glandular organ of the digestive and endocrine systems, responsible for producing digestive enzymes and hormones like insulin and glucagon. It is not considered a part of the lymphatic system."
  },
  {
    "id": "lymph-54",
    "question": "The main force that causes initial fluid movement from tissues into lymphatic capillaries is:",
    "options": [
      "The pumping of the heart",
      "Hydrostatic pressure gradient",
      "Osmotic pressure gradient",
      "Smooth muscle peristalsis"
    ],
    "correctAnswer": 1,
    "explanation": "The movement of interstitial fluid into lymphatic capillaries is primarily driven by a hydrostatic pressure gradient. Higher pressure in the interstitial space (due to fluid leakage from blood capillaries) forces fluid through the mini-valves into the low-pressure lumen of the lymphatic capillary."
  },
  {
    "id": "lymph-55",
    "question": "Which lymphoid organ atrophies most significantly with age?",
    "options": [
      "Spleen",
      "Lymph nodes",
      "Tonsils",
      "Thymus"
    ],
    "correctAnswer": 3,
    "explanation": "The thymus is most active and largest during childhood. After puberty, it undergoes a process called involution, where it gradually shrinks and is replaced by adipose (fat) tissue. This is a normal part of aging."
  },
  {
    "id": "lymph-56",
    "question": "The palatine tonsils are located:",
    "options": [
      "At the base of the tongue",
      "In the posterior wall of the nasopharynx",
      "On either side of the posterior oral cavity",
      "In the small intestine"
    ],
    "correctAnswer": 2,
    "explanation": "The palatine tonsils are the ones most commonly referred to as 'the tonsils'. They are paired masses of lymphoid tissue located on the left and right sides at the back of the throat, in the oropharynx."
  },
  {
    "id": "lymph-57",
    "question": "Which cells are primarily responsible for the cell-mediated immune response?",
    "options": [
      "B lymphocytes",
      "Cytotoxic T lymphocytes",
      "Macrophages",
      "Plasma cells"
    ],
    "correctAnswer": 1,
    "explanation": "Cytotoxic T lymphocytes (CD8+ T cells) are the primary effector cells of cell-mediated immunity. They directly attack and kill infected host cells, cancer cells, and cells of foreign grafts."
  },
  {
    "id": "lymph-58",
    "question": "The term for the formation of new lymphatic vessels is:",
    "options": [
      "Angiogenesis",
      "Lymphangiogenesis",
      "Vasculogenesis",
      "Lymphopoiesis"
    ],
    "correctAnswer": 1,
    "explanation": "Lymphangiogenesis is the formation of new lymphatic vessels from pre-existing ones. This process is important in development, wound healing, and unfortunately, in the spread of cancer (metastasis) as tumors can stimulate the growth of new lymphatic vessels."
  },
  {
    "id": "lymph-59",
    "question": "Which of the following is a function of the spleen?",
    "options": [
      "Maturation of T cells",
      "Production of bile",
      "Storage of a reserve blood supply",
      "Pumping of lymph"
    ],
    "correctAnswer": 2,
    "explanation": "The spleen acts as a blood reservoir. In cases of hemorrhage or other stress, the spleen can contract and release its stored blood (including red blood cells and platelets) into the circulation to help maintain blood volume and pressure."
  },
  {
    "id": "lymph-60",
    "question": "Lymph from the stomach would first drain into nodes located in the:",
    "options": [
      "Axilla",
      "Neck",
      "Groin",
      "Abdomen"
    ],
    "correctAnswer": 3,
    "explanation": "Lymph from abdominal organs, including the stomach, drains first into regional lymph nodes located in the mesentery and along the major abdominal blood vessels (e.g., celiac nodes). This localized drainage is a key route for the spread of abdominal cancers."
  },
  {
    "id": "lymph-61",
    "question": "The medullary sinuses of a lymph node are drained by the:",
    "options": [
      "Afferent lymphatic vessel",
      "Efferent lymphatic vessel",
      "Arteriole",
      "High Endothelial Venule (HEV)"
    ],
    "correctAnswer": 1,
    "explanation": "Lymph percolates through the subcapsular, cortical, and medullary sinuses of the node. After this filtration process, the lymph collects and exits the node through a single efferent lymphatic vessel at the hilum."
  },
  {
    "id": "lymph-62",
    "question": "Which of the following is true regarding lymphatic capillaries compared to blood capillaries?",
    "options": [
      "They have a tighter basement membrane.",
      "They are less permeable.",
      "They are absent from the central nervous system.",
      "They form a continuous circuit."
    ],
    "correctAnswer": 2,
    "explanation": "The brain and spinal cord (CNS) are considered to be lacking true lymphatic capillaries. Instead, cerebrospinal fluid (CSF) and interstitial fluid in the CNS are drained through other mechanisms, involving the glymphatic system and dural sinuses."
  },
  {
    "id": "lymph-63",
    "question": "The 'High Endothelial Venules' (HEVs) in lymph nodes are specialized for:",
    "options": [
      "Filtering lymph",
      "Producing antibodies",
      "Allowing lymphocytes to enter the node from blood",
      "Draining chyle"
    ],
    "correctAnswer": 2,
    "explanation": "High Endothelial Venules (HEVs) are specialized blood vessels within the lymph node cortex. Their unique cuboidal endothelial cells express adhesion molecules that allow circulating lymphocytes to recognize the vessel, adhere to it, and migrate out of the bloodstream and into the lymph node (diapedesis)."
  },
  {
    "id": "lymph-64",
    "question": "Which of the following is a hallmark of Hodgkin's lymphoma?",
    "options": [
      "The presence of Reed-Sternberg cells",
      "The absence of any abnormal cells",
      "It only occurs in the spleen",
      "It is caused by a vitamin deficiency"
    ],
    "correctAnswer": 0,
    "explanation": "Reed-Sternberg cells are giant, characteristic cancerous cells that are essential for the diagnosis of Hodgkin's lymphoma. These are typically derived from B lymphocytes and are identified by their bilobed nucleus and prominent nucleoli, giving an 'owl-eyed' appearance."
  },
  {
    "id": "lymph-65",
    "question": "The appendix is attached to the:",
    "options": [
      "Stomach",
      "Jejunum",
      "Cecum",
      "Spleen"
    ],
    "correctAnswer": 2,
    "explanation": "The vermiform appendix is a finger-like, blind-ended tube connected to the cecum, which is the first part of the large intestine. It is considered a component of GALT (Gut-Associated Lymphoid Tissue)."
  },
  {
    "id": "lymph-66",
    "question": "Which of the following is a non-encapsulated lymphoid nodule?",
    "options": [
      "Thymus",
      "Spleen",
      "Lymph node",
      "Peyer's patch"
    ],
    "correctAnswer": 3,
    "explanation": "Peyer's patches are examples of non-encapsulated (or partially encapsulated) lymphoid tissue. They are aggregates of lymphoid follicles found in the wall of the ileum. In contrast, the thymus, spleen, and lymph nodes are fully encapsulated organs."
  },
  {
    "id": "lymph-67",
    "question": "Elephantiasis is a severe form of lymphedema caused by:",
    "options": [
      "A bacterial infection",
      "A genetic disorder",
      "Infection with filarial worms",
      "A vitamin B12 deficiency"
    ],
    "correctAnswer": 2,
    "explanation": "Elephantiasis, characterized by extreme swelling of limbs and genitalia, is caused by parasitic filarial worms (e.g., Wuchereria bancrofti). These worms block lymphatic vessels, leading to severe lymphedema and tissue fibrosis."
  },
  {
    "id": "lymph-68",
    "question": "The right lymphatic duct drains into the venous system at the junction of the:",
    "options": [
      "Left internal jugular and left subclavian veins",
      "Right internal jugular and right subclavian veins",
      "Superior and inferior vena cava",
      "Hepatic portal vein and inferior vena cava"
    ],
    "correctAnswer": 1,
    "explanation": "The right lymphatic duct is a short vessel that empties the lymph it collects (from the right upper quadrant) into the venous bloodstream at the angle formed by the right internal jugular vein and the right subclavian vein."
  },
  {
    "id": "lymph-69",
    "question": "Which of the following is a secondary lymphoid organ where immune responses are launched against blood-borne pathogens?",
    "options": [
      "Thymus",
      "Bone Marrow",
      "Spleen",
      "Thyroid"
    ],
    "correctAnswer": 2,
    "explanation": "The spleen is the secondary lymphoid organ that filters blood. Its white pulp contains lymphocytes that are activated upon encountering antigens circulating in the blood, making it a key site for immune responses against systemic infections."
  },
  {
    "id": "lymph-70",
    "question": "The cortical region of the thymus is primarily populated by:",
    "options": [
      "Mature T cells",
      "Developing (immature) T cells",
      "B cells",
      "Macrophages only"
    ],
    "correctAnswer": 1,
    "explanation": "The cortex of the thymus is densely packed with immature T lymphocytes (thymocytes) and epithelial cells. It is in this region that T cells begin their maturation process and undergo positive selection."
  },
  {
    "id": "lymph-71",
    "question": "Lymphoid follicles are primarily composed of:",
    "options": [
      "T lymphocytes",
      "B lymphocytes",
      "Natural Killer cells",
      "Erythrocytes"
    ],
    "correctAnswer": 1,
    "explanation": "Lymphoid follicles are spherical aggregates of predominantly B lymphocytes. They are found in the cortex of lymph nodes, in the white pulp of the spleen, and in MALT. When active, they develop germinal centers."
  },
  {
    "id": "lymph-72",
    "question": "The main cellular component of the white pulp in the spleen is:",
    "options": [
      "Red blood cells",
      "Platelets",
      "Lymphocytes",
      "Adipocytes"
    ],
    "correctAnswer": 2,
    "explanation": "The white pulp of the spleen appears white because it consists of lymphatic tissue, which is primarily made up of lymphocytes (both T and B cells) arranged around central arteries. This is where immune functions are concentrated."
  },
  {
    "id": "lymph-73",
    "question": "Which of the following is NOT a route by which cancer cells metastasize via the lymphatic system?",
    "options": [
      "Invading lymphatic capillaries directly",
      "Being carried passively in the lymph",
      "Being phagocytosed by macrophages in a node",
      "Lodging and proliferating in a lymph node"
    ],
    "correctAnswer": 2,
    "explanation": "Metastasis via lymphatics occurs when cancer cells invade lymphatic vessels, are transported in the lymph, and then become trapped in a lymph node where they multiply. They are not destroyed by macrophages; instead, they can often evade the immune system and establish a secondary tumor."
  },
  {
    "id": "lymph-74",
    "question": "The thoracic duct empties its lymph into the venous system at the junction of the:",
    "options": [
      "Right internal jugular and right subclavian veins",
      "Left internal jugular and left subclavian veins",
      "Brachiocephalic veins",
      "Superior vena cava and right atrium"
    ],
    "correctAnswer": 1,
    "explanation": "The thoracic duct ascends and arches over the subclavian artery to empty the lymph it collects from most of the body into the venous bloodstream at the junction of the left internal jugular vein and the left subclavian vein."
  },
  {
    "id": "lymph-75",
    "question": "Which of the following is a correct sequence for the flow of lymph?",
    "options": [
      "Lymphatic Capillary -> Afferent Vessel -> Lymph Node -> Efferent Vessel -> Lymphatic Trunk -> Duct -> Veins",
      "Lymphatic Trunk -> Afferent Vessel -> Lymph Node -> Efferent Vessel -> Lymphatic Capillary -> Duct -> Veins",
      "Lymphatic Capillary -> Efferent Vessel -> Lymph Node -> Afferent Vessel -> Lymphatic Trunk -> Duct -> Veins",
      "Veins -> Duct -> Lymphatic Trunk -> Afferent Vessel -> Lymph Node -> Efferent Vessel -> Lymphatic Capillary"
    ],
    "correctAnswer": 0,
    "explanation": "Lymph flows from tissues into blind-ended lymphatic capillaries. These merge to form larger vessels that carry lymph to a lymph node via afferent vessels. After filtration, it leaves via an efferent vessel. Multiple efferent vessels converge to form lymphatic trunks, which then join one of two ducts (thoracic or right lymphatic) to return lymph to the venous blood."
  },
  {
    "id": "lymph-76",
    "question": "The 'blood-thymus barrier' is important for:",
    "options": [
      "Filtering lymph",
      "Preventing premature exposure of developing T cells to antigens",
      "Absorbing fats in the intestine",
      "Storing blood in the spleen"
    ],
    "correctAnswer": 1,
    "explanation": "The blood-thymus barrier is formed by continuous capillaries and epithelial reticular cells in the thymic cortex. It protects developing T cells (thymocytes) from being exposed to blood-borne antigens before they are fully mature and capable of distinguishing self from non-self."
  },
  {
    "id": "lymph-77",
    "question": "Which lymphatic trunk drains the lower limbs?",
    "options": [
      "Jugular trunk",
      "Subclavian trunk",
      "Bronchomediastinal trunk",
      "Lumbar trunk"
    ],
    "correctAnswer": 3,
    "explanation": "The lumbar trunks are paired lymphatic trunks that drain lymph from the lower limbs, the walls and viscera of the pelvis, the kidneys and adrenal glands, and most of the abdominal wall."
  },
  {
    "id": "lymph-78",
    "question": "The popliteal lymph nodes are located:",
    "options": [
      "Behind the knee",
      "In the armpit",
      "In the groin",
      "In the neck"
    ],
    "correctAnswer": 0,
    "explanation": "Popliteal lymph nodes are located in the popliteal fossa, the shallow depression at the back of the knee joint. They receive lymph from the leg and foot and are an important group of nodes for clinical examination."
  },
  {
    "id": "lymph-79",
    "question": "Negative selection in the thymus ensures that T cells:",
    "options": [
      "Can recognize foreign antigens",
      "Do not react strongly with self-antigens",
      "Are able to produce antibodies",
      "Rapidly proliferate upon infection"
    ],
    "correctAnswer": 1,
    "explanation": "Negative selection is a crucial process of T cell education in the thymic medulla. T cells that react too strongly with self-antigens presented by thymic cells are triggered to undergo apoptosis (programmed cell death). This process helps establish central tolerance and prevents autoimmunity."
  },
  {
    "id": "lymph-80",
    "question": "The term for the formation of lymphocytes is:",
    "options": [
      "Erythropoiesis",
      "Thrombopoiesis",
      "Lymphopoiesis",
      "Myelopoiesis"
    ],
    "correctAnswer": 2,
    "explanation": "Lymphopoiesis is the process of lymphocyte development and maturation. It occurs in the primary lymphoid organs: B cells in the bone marrow and T cells in the thymus."
  },
  {
    "id": "lymph-81",
    "question": "Which of the following is a deep group of cervical lymph nodes?",
    "options": [
      "Axillary nodes",
      "Inguinal nodes",
      "Nodes along the internal jugular vein",
      "Popliteal nodes"
    ],
    "correctAnswer": 2,
    "explanation": "Deep cervical lymph nodes are a chain of nodes that lie along the course of the internal jugular vein. They are the main nodes that drain the head and neck, and they ultimately receive lymph from all other regional nodes in this area."
  },
  {
    "id": "lymph-82",
    "question": "The splenic artery and vein enter and exit the spleen at the:",
    "options": [
      "Capsule",
      "Hilum",
      "Trabeculae",
      "White pulp"
    ],
    "correctAnswer": 1,
    "explanation": "Similar to lymph nodes, the hilum of the spleen is the region where the splenic artery and nerve enter, and the splenic vein and efferent lymphatic vessels exit. It is located on the gastric (medial) surface of the organ."
  },
  {
    "id": "lymph-83",
    "question": "The 'crypts' in the tonsils function to:",
    "options": [
      "Trap ingested or inhaled pathogens",
      "Produce T cells",
      "Pump lymph",
      "Absorb nutrients"
    ],
    "explanation": "Tonsillar crypts are deep invaginations of the surface epithelium that trap bacteria, viruses, and other foreign material that enters through the mouth or nose. This trapping exposes the underlying lymphoid tissue to antigens, initiating an immune response.",
    "options": [
      "Trap ingested or inhaled pathogens",
      "Produce T cells",
      "Pump lymph",
      "Absorb nutrients"
    ],
    "correctAnswer": 0
  },
  {
    "id": "lymph-84",
    "question": "Which of the following is a function of the lymphatic system related to the cardiovascular system?",
    "options": [
      "Pumping blood",
      "Producing red blood cells",
      "Returning excess tissue fluid to the blood",
      "Oxygenating blood"
    ],
    "correctAnswer": 2,
    "explanation": "A primary function of the lymphatic system is to maintain fluid balance. It collects the approximately 3 liters of fluid that leaks out of blood capillaries into tissues each day and returns it to the bloodstream. Without this, fluid would accumulate and cause edema."
  },
  {
    "id": "lymph-85",
    "question": "Lymphangiography is a medical imaging technique used to visualize:",
    "options": [
      "Blood flow in arteries",
      "Lymphatic vessels and nodes",
      "Nerve pathways",
      "Bone density"
    ],
    "correctAnswer": 1,
    "explanation": "Lymphangiography is a specialized X-ray procedure where a contrast dye is injected into lymphatic vessels to make them visible on an X-ray. It is used to evaluate the structure and function of the lymphatic system and to identify blockages or leaks."
  },
  {
    "id": "lymph-86",
    "question": "The subclavian trunk primarily drains lymph from the:",
    "options": [
      "Head and neck",
      "Thoracic viscera",
      "Upper limb",
      "Abdominal wall"
    ],
    "correctAnswer": 2,
    "explanation": "The subclavian trunks are lymphatic trunks that drain lymph from the upper limbs, as well as the superficial thoracic wall and the mammary gland."
  },
  {
    "id": "lymph-87",
    "question": "Which of the following is NOT a function of the thymus?",
    "options": [
      "Secreting thymosin and thymopoietin",
      "Educating T cells to recognize self-MHC",
      "Filtering lymph from the upper body",
      "Promoting T cell maturation"
    ],
    "correctAnswer": 2,
    "explanation": "The thymus is an endocrine and lymphoid organ responsible for T cell maturation and selection. It does not filter lymph; that is the function of lymph nodes. Lymph from the upper body is filtered by cervical and axillary nodes, not the thymus."
  },
  {
    "id": "lymph-88",
    "question": "The inguinal lymph nodes are located in the:",
    "options": [
      "Armpit",
      "Neck",
      "Groin",
      "Abdomen"
    ],
    "correctAnswer": 2,
    "explanation": "Inguinal lymph nodes are located in the groin region. They are divided into superficial and deep groups and are responsible for draining lymph from the lower limb, the external genitalia, the perineum, and the inferior abdominal wall."
  },
  {
    "id": "lymph-89",
    "question": "The ability to recognize and remember specific pathogens is a function of:",
    "options": [
      "Lymphatic vessels",
      "The spleen only",
      "Lymphocytes in lymphoid tissue",
      "The thoracic duct"
    ],
    "correctAnswer": 2,
    "explanation": "The adaptive immune response, characterized by specificity and memory, is carried out by lymphocytes (B and T cells). These cells are housed, activated, and proliferate within the various lymphoid tissues and organs throughout the body."
  },
  {
    "id": "lymph-90",
    "question": "A sentinel lymph node biopsy is most commonly associated with staging which cancer?",
    "options": [
      "Liver cancer",
      "Brain cancer",
      "Breast cancer",
      "Lung cancer"
    ],
    "correctAnswer": 2,
    "explanation": "Sentinel lymph node biopsy is a standard procedure for staging breast cancer and melanoma. It involves identifying and removing the first node(s) that drain the tumor to check for metastatic cells, which helps determine the extent of cancer spread and guide treatment."
  },
  {
    "id": "lymph-91",
    "question": "The jugular lymphatic trunks drain the:",
    "options": [
      "Upper limbs",
      "Head and neck",
      "Thoracic viscera",
      "Lower limbs"
    ],
    "correctAnswer": 1,
    "explanation": "The jugular trunks are paired lymphatic trunks that drain lymph from the head and neck region. They descend alongside the internal jugular vein."
  },
  {
    "id": "lymph-92",
    "question": "Which of the following is true about lymph?",
    "options": [
      "It has a higher protein concentration than blood plasma.",
      "It flows in a high-pressure system.",
      "Its composition is identical to interstitial fluid.",
      "It is typically a clear, yellowish fluid."
    ],
    "correctAnswer": 3,
    "explanation": "Lymph is usually a clear, transparent, and slightly yellowish fluid. However, lymph from the small intestine (chyle) appears milky due to its high fat content. Its composition is similar to interstitial fluid but can vary by location."
  },
  {
    "id": "lymph-93",
    "question": "The trabeculae of lymphoid organs are extensions of the:",
    "options": [
      "Hilum",
      "Capsule",
      "Medulla",
      "Cortex"
    ],
    "correctAnswer": 1,
    "explanation": "Trabeculae are inward fibrous extensions of the connective tissue capsule that surrounds organs like the lymph nodes and spleen. They provide structural support and form compartments within the organ, and they also carry blood vessels inward."
  },
  {
    "id": "lymph-94",
    "question": "Which cytokine, produced by the thymus, is crucial for T cell development?",
    "options": [
      "Insulin",
      "Erythropoietin",
      "Thymosin",
      "Adrenaline"
    ],
    "correctAnswer": 2,
    "explanation": "Thymosin is a hormone secreted by the epithelial cells of the thymus. It plays a vital role in stimulating the development and differentiation of T lymphocytes within the thymus."
  },
  {
    "id": "lymph-95",
    "question": "The bronchomediastinal trunks drain lymph from the:",
    "options": [
      "Brain",
      "Heart and lungs (thoracic viscera)",
      "Liver",
      "Lower limbs"
    ],
    "correctAnswer": 1,
    "explanation": "The bronchomediastinal trunks are lymphatic trunks that drain lymph from the thoracic viscera, including the lungs, heart, trachea, and mediastinal structures, as well as parts of the thoracic wall."
  },
  {
    "id": "lymph-96",
    "question": "Lymphoid tissue is characterized by its high content of:",
    "options": [
      "Adipocytes",
      "Fibroblasts",
      "Lymphocytes",
      "Chondrocytes"
    ],
    "correctAnswer": 2,
    "explanation": "Lymphoid tissue is a specialized type of connective tissue that is dominated by lymphocytes. It can be either loosely organized (diffuse) or densely packed into nodules/follicles, and it forms the structural basis of all lymphoid organs."
  },
  {
    "id": "lymph-97",
    "question": "The 'milky spots' or omentum are associated with lymphoid tissue in the:",
    "options": [
      "Brain",
      "Abdomen",
      "Lungs",
      "Thymus"
    ],
    "correctAnswer": 1,
    "explanation": "The greater omentum, a large apron-like fold of peritoneal tissue that drapes over the abdominal intestines, contains collections of macrophages and lymphocytes called 'milky spots'. These function as a site for immune surveillance within the peritoneal cavity."
  },
  {
    "id": "lymph-98",
    "question": "The main component of lymph is:",
    "options": [
      "Protein",
      "Water",
      "Lipids",
      "White blood cells"
    ],
    "correctAnswer": 1,
    "explanation": "The primary component of lymph is water, making up the bulk of the fluid. It also contains dissolved substances like electrolytes, proteins (especially albumin), waste products, and cells (mainly lymphocytes)."
  },
  {
    "id": "lymph-99",
    "question": "Which of the following is a correct pairing of a lymphoid organ and its primary function?",
    "options": [
      "Spleen: Maturation of B cells",
      "Lymph Node: Filtration of blood",
      "Thymus: Filtration of lymph",
      "Lymph Node: Filtration of lymph and immune activation"
    ],
    "correctAnswer": 3,
    "explanation": "Lymph nodes are secondary lymphoid organs whose primary functions are to 1) filter lymph as it passes through, and 2) provide the environment for lymphocytes to be activated by antigens, initiating an adaptive immune response."
  },
  {
    "id": "lymph-100",
    "question": "The body's ability to resist infection and disease is known as:",
    "options": [
      "Homeostasis",
      "Hemostasis",
      "Immunity",
      "Metabolism"
    ],
    "correctAnswer": 2,
    "explanation": "Immunity is the body's ability to resist and defend against infectious organisms and other harmful substances. The lymphatic system is a cornerstone of the immune system, housing the cells and structures necessary for both innate and adaptive immunity."
  }
]

