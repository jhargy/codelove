export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}export const humanSkeletonQuestions = [
    
  {
    "id": "cmb-1",
    "question": "Which type of cartilage is found at the ends of long bones to reduce friction?",
    "options": ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage"],
    "correctAnswer": 2,
    "explanation": "Hyaline cartilage covers articular surfaces, reducing friction and cushioning movement in joints."
  },
  {
    "id": "cmb-2",
    "question": "Which muscle type is involuntary and non-striated?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Voluntary muscle"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle is involuntary and non-striated, found in walls of hollow organs."
  },
  {
    "id": "cmb-3",
    "question": "Which bone cell is responsible for bone resorption?",
    "options": ["Osteocytes", "Osteoblasts", "Osteoclasts", "Chondrocytes"],
    "correctAnswer": 2,
    "explanation": "Osteoclasts break down bone matrix, releasing calcium into the blood."
  },
  {
    "id": "cmb-4",
    "question": "Elastic cartilage is found in which structure?",
    "options": ["Ear pinna", "Nose septum", "Trachea rings", "Long bone shaft"],
    "correctAnswer": 0,
    "explanation": "Elastic cartilage provides flexibility and strength, present in pinna and epiglottis."
  },
  {
    "id": "cmb-5",
    "question": "Which structure is the functional unit of skeletal muscle?",
    "options": ["Sarcomere", "Myofibril", "Sarcolemma", "Mitochondrion"],
    "correctAnswer": 0,
    "explanation": "The sarcomere, between two Z-lines, contracts due to actin and myosin interactions."
  },
  {
    "id": "cmb-6",
    "question": "Compact bone is characterized by the presence of:",
    "options": ["Trabeculae", "Haversian systems", "Bone marrow cavities", "Elastic fibers"],
    "correctAnswer": 1,
    "explanation": "Compact bone contains Haversian systems, which are cylindrical units with central canals for blood supply."
  },
  {
    "id": "cmb-7",
    "question": "Which muscle type shows intercalated discs?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Voluntary muscle"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle fibers connect via intercalated discs, enabling synchronized contractions."
  },
  {
    "id": "cmb-8",
    "question": "Fibrocartilage is especially adapted to withstand:",
    "options": ["Compression and tension", "Flexibility only", "Ossification", "Calcification"],
    "correctAnswer": 0,
    "explanation": "Fibrocartilage, rich in collagen fibers, resists compressive and tensile forces, ideal for intervertebral discs."
  },
  {
    "id": "cmb-9",
    "question": "Osteoblasts are specialized for:",
    "options": ["Bone matrix synthesis", "Bone resorption", "Maintaining cartilage", "Producing elastic fibers"],
    "correctAnswer": 0,
    "explanation": "Osteoblasts build bone by secreting collagen and mineralizing the matrix."
  },
  {
    "id": "cmb-10",
    "question": "Which ion directly binds to troponin to initiate skeletal muscle contraction?",
    "options": ["Sodium", "Calcium", "Potassium", "Magnesium"],
    "correctAnswer": 1,
    "explanation": "Calcium binds to troponin, shifting tropomyosin and exposing actin binding sites."
  },

  {
    "id": "cmb-11",
    "question": "Which type of cartilage is present in the intervertebral discs?",
    "options": ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Calcified cartilage"],
    "correctAnswer": 2,
    "explanation": "Fibrocartilage in discs absorbs shock and resists compression between vertebrae."
  },
  {
    "id": "cmb-12",
    "question": "Which bone type contains trabeculae and red marrow?",
    "options": ["Compact bone", "Spongy bone", "Long bone shaft", "Elastic bone"],
    "correctAnswer": 1,
    "explanation": "Spongy bone contains trabeculae filled with red bone marrow for hematopoiesis."
  },
  {
    "id": "cmb-13",
    "question": "The I-band of a sarcomere contains:",
    "options": ["Thick filaments only", "Thin filaments only", "Both actin and myosin", "Z-line only"],
    "correctAnswer": 1,
    "explanation": "The I-band contains only thin (actin) filaments and shortens during contraction."
  },
  {
    "id": "cmb-14",
    "question": "Which hormone stimulates osteoclast activity?",
    "options": ["Calcitonin", "Thyroxine", "Parathyroid hormone", "Insulin"],
    "correctAnswer": 2,
    "explanation": "Parathyroid hormone increases osteoclast activity, raising blood calcium levels."
  },
  {
    "id": "cmb-15",
    "question": "Which connective tissue covers cartilage externally?",
    "options": ["Perichondrium", "Periosteum", "Endosteum", "Epimysium"],
    "correctAnswer": 0,
    "explanation": "Perichondrium is a fibrous connective tissue covering cartilage, supplying nutrients via diffusion."
  },
  {
    "id": "cmb-16",
    "question": "What is the role of osteocytes?",
    "options": ["Build bone", "Break down bone", "Maintain bone tissue", "Form cartilage"],
    "correctAnswer": 2,
    "explanation": "Osteocytes are mature bone cells that maintain bone matrix and communicate with osteoblasts and osteoclasts."
  },
  {
    "id": "cmb-17",
    "question": "Which type of muscle is multinucleated?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Visceral muscle"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle fibers are multinucleated, striated, and voluntary."
  },
  {
    "id": "cmb-18",
    "question": "Which cartilage type is most abundant in the human body?",
    "options": ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage"],
    "correctAnswer": 2,
    "explanation": "Hyaline cartilage is the most abundant, found in joints, trachea, and rib ends."
  },
  {
    "id": "cmb-19",
    "question": "Which band of the sarcomere remains constant in length during contraction?",
    "options": ["H-band", "A-band", "I-band", "Z-line"],
    "correctAnswer": 1,
    "explanation": "The A-band corresponds to the length of thick filaments and does not shorten."
  },
  {
    "id": "cmb-20",
    "question": "Which mineral provides rigidity to bone matrix?",
    "options": ["Calcium phosphate", "Calcium carbonate", "Magnesium sulfate", "Sodium chloride"],
    "correctAnswer": 0,
    "explanation": "Calcium phosphate salts deposit in collagen matrix, giving bone hardness and rigidity."
  },
  {
    "id": "cmb-21",
    "question": "Which protein blocks the myosin binding sites on actin in resting muscle?",
    "options": ["Tropomyosin", "Troponin", "Myoglobin", "Calmodulin"],
    "correctAnswer": 0,
    "explanation": "Tropomyosin covers actin binding sites in resting muscle; calcium binding to troponin moves it aside to allow contraction."
  },
  {
    "id": "cmb-22",
    "question": "Which structure connects muscle to bone?",
    "options": ["Ligament", "Tendon", "Cartilage", "Periosteum"],
    "correctAnswer": 1,
    "explanation": "Tendons are dense connective tissue that attach muscle to bone, transmitting force of contraction."
  },
  {
    "id": "cmb-23",
    "question": "Which type of ossification forms flat bones of the skull?",
    "options": ["Endochondral ossification", "Intramembranous ossification", "Calcification", "Secondary ossification"],
    "correctAnswer": 1,
    "explanation": "Intramembranous ossification directly converts mesenchyme into bone, forming flat skull bones and clavicle."
  },
  {
    "id": "cmb-24",
    "question": "Which band disappears completely during maximal muscle contraction?",
    "options": ["I-band", "A-band", "H-zone", "M-line"],
    "correctAnswer": 2,
    "explanation": "The H-zone (region of thick filaments only) disappears as actin filaments slide inward."
  },
  {
    "id": "cmb-25",
    "question": "Which cartilage provides smooth surfaces for movement at joints?",
    "options": ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage"],
    "correctAnswer": 2,
    "explanation": "Hyaline cartilage at articular surfaces reduces friction and absorbs shock in synovial joints."
  },
  {
    "id": "cmb-26",
    "question": "What is the basic structural unit of compact bone?",
    "options": ["Trabeculae", "Osteon", "Canaliculi", "Epiphysis"],
    "correctAnswer": 1,
    "explanation": "The osteon (Haversian system) is the cylindrical unit of compact bone containing concentric lamellae."
  },
  {
    "id": "cmb-27",
    "question": "Which connective tissue surrounds an entire skeletal muscle?",
    "options": ["Endomysium", "Perimysium", "Epimysium", "Sarcolemma"],
    "correctAnswer": 2,
    "explanation": "Epimysium is the outermost connective tissue sheath that surrounds the entire skeletal muscle."
  },
  {
    "id": "cmb-28",
    "question": "Which bone marrow type is responsible for blood cell formation?",
    "options": ["Yellow marrow", "Red marrow", "Spongy marrow", "Compact marrow"],
    "correctAnswer": 1,
    "explanation": "Red bone marrow is hematopoietic, producing red blood cells, white blood cells, and platelets."
  },
  {
    "id": "cmb-29",
    "question": "Which neurotransmitter is released at the neuromuscular junction?",
    "options": ["Acetylcholine", "Dopamine", "Serotonin", "Epinephrine"],
    "correctAnswer": 0,
    "explanation": "Acetylcholine is released from motor neurons to initiate depolarization of muscle fibers."
  },
  {
    "id": "cmb-30",
    "question": "Which structure anchors thin filaments within the sarcomere?",
    "options": ["M-line", "H-zone", "Z-line", "A-band"],
    "correctAnswer": 2,
    "explanation": "Z-lines anchor thin actin filaments and define the boundaries of a sarcomere."
  },
  {
    "id": "cmb-31",
    "question": "Which bone disorder results from Vitamin D deficiency in children?",
    "options": ["Osteoporosis", "Osteoarthritis", "Rickets", "Gout"],
    "correctAnswer": 2,
    "explanation": "Rickets is caused by vitamin D deficiency, leading to poor mineralization and bone deformities in children."
  },
  {
    "id": "cmb-32",
    "question": "Which muscle type is branched and involuntary?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Visceral muscle"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle fibers are striated, branched, involuntary, and connected by intercalated discs."
  },
  {
    "id": "cmb-33",
    "question": "Which part of the long bone contains yellow marrow?",
    "options": ["Epiphysis", "Diaphysis", "Periosteum", "Articular cartilage"],
    "correctAnswer": 1,
    "explanation": "The diaphysis (shaft) of long bones contains medullary cavity filled with yellow marrow."
  },
  {
    "id": "cmb-34",
    "question": "Which structure supplies blood vessels and nerves to compact bone?",
    "options": ["Canaliculi", "Haversian canal", "Lacunae", "Trabeculae"],
    "correctAnswer": 1,
    "explanation": "Haversian canals run longitudinally in osteons, containing blood vessels and nerves."
  },
  {
    "id": "cmb-35",
    "question": "Which protein stores oxygen in muscle fibers?",
    "options": ["Hemoglobin", "Myoglobin", "Actin", "Tropomyosin"],
    "correctAnswer": 1,
    "explanation": "Myoglobin is a muscle pigment that stores oxygen for aerobic respiration."
  },
  {
    "id": "cmb-36",
    "question": "Which hormone lowers blood calcium levels by stimulating bone deposition?",
    "options": ["Parathyroid hormone", "Calcitonin", "Aldosterone", "Cortisol"],
    "correctAnswer": 1,
    "explanation": "Calcitonin from the thyroid stimulates osteoblasts and reduces blood calcium levels."
  },
  {
    "id": "cmb-37",
    "question": "Which structure in muscle fiber stores calcium ions?",
    "options": ["Mitochondria", "Sarcoplasmic reticulum", "Sarcolemma", "Golgi apparatus"],
    "correctAnswer": 1,
    "explanation": "The sarcoplasmic reticulum releases calcium to initiate muscle contraction."
  },
  {
    "id": "cmb-38",
    "question": "Which cartilage type is most flexible?",
    "options": ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Calcified cartilage"],
    "correctAnswer": 1,
    "explanation": "Elastic cartilage has abundant elastin fibers, making it more flexible than other types."
  },
  {
    "id": "cmb-39",
    "question": "Which bone cells are multinucleated?",
    "options": ["Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"],
    "correctAnswer": 1,
    "explanation": "Osteoclasts are large, multinucleated cells responsible for bone resorption."
  },
  {
    "id": "cmb-40",
    "question": "Which connective tissue surrounds individual muscle fibers?",
    "options": ["Epimysium", "Perimysium", "Endomysium", "Sarcolemma"],
    "correctAnswer": 2,
    "explanation": "Endomysium surrounds each muscle fiber, providing support and capillary supply."
  },
  {
    "id": "cmb-41",
    "question": "Which cartilage lacks perichondrium?",
    "options": ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "All types"],
    "correctAnswer": 1,
    "explanation": "Fibrocartilage lacks perichondrium, which limits its repair capacity."
  },
  {
    "id": "cmb-42",
    "question": "Which bone tissue forms the outer layer of all bones?",
    "options": ["Spongy bone", "Compact bone", "Red marrow", "Yellow marrow"],
    "correctAnswer": 1,
    "explanation": "Compact bone forms the dense outer layer, providing strength and protection."
  },
  {
    "id": "cmb-43",
    "question": "Which molecule provides immediate energy for muscle contraction?",
    "options": ["ATP", "Creatine phosphate", "Glycogen", "Glucose"],
    "correctAnswer": 0,
    "explanation": "ATP is the direct energy source for cross-bridge cycling in muscle contraction."
  },
  {
    "id": "cmb-44",
    "question": "Which part of the sarcomere shortens during contraction?",
    "options": ["A-band", "H-zone", "Z-line", "M-line"],
    "correctAnswer": 1,
    "explanation": "The H-zone shortens and disappears as actin filaments slide inward."
  },
  {
    "id": "cmb-45",
    "question": "Which structural protein gives tensile strength to bone matrix?",
    "options": ["Collagen", "Elastin", "Actin", "Keratin"],
    "correctAnswer": 0,
    "explanation": "Collagen fibers provide tensile strength, preventing bone from becoming brittle."
  },
  {
    "id": "cmb-46",
    "question": "Which connective tissue connects bone to bone?",
    "options": ["Ligament", "Tendon", "Perichondrium", "Endosteum"],
    "correctAnswer": 0,
    "explanation": "Ligaments connect bones at joints, providing stability and limiting movement."
  },
  {
    "id": "cmb-47",
    "question": "Which type of cartilage is present at the pubic symphysis?",
    "options": ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "Calcified cartilage"],
    "correctAnswer": 1,
    "explanation": "Fibrocartilage provides strength and flexibility at the pubic symphysis."
  },
  {
    "id": "cmb-48",
    "question": "Which bone cell acts as a mechanosensor?",
    "options": ["Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"],
    "correctAnswer": 2,
    "explanation": "Osteocytes detect mechanical stress and coordinate remodeling through signaling."
  },
  {
    "id": "cmb-49",
    "question": "Which connective tissue layer surrounds fascicles of muscle fibers?",
    "options": ["Epimysium", "Perimysium", "Endomysium", "Aponeurosis"],
    "correctAnswer": 1,
    "explanation": "Perimysium encloses bundles (fascicles) of muscle fibers, carrying larger blood vessels."
  },
  {
    "id": "cmb-50",
    "question": "Which bone condition is characterized by porous, brittle bones in elderly?",
    "options": ["Rickets", "Osteoporosis", "Osteoarthritis", "Scoliosis"],
    "correctAnswer": 1,
    "explanation": "Osteoporosis results from decreased bone density, common in elderly women after menopause."
  },

  {
    "id": "cmb-51",
    "question": "Which connective tissue membrane lines the inner surface of bone cavities?",
    "options": ["Periosteum", "Endosteum", "Perichondrium", "Epimysium"],
    "correctAnswer": 1,
    "explanation": "Endosteum lines internal bone surfaces and contains osteoprogenitor cells."
  },
  {
    "id": "cmb-52",
    "question": "Which type of cartilage forms the embryonic skeleton?",
    "options": ["Fibrocartilage", "Elastic cartilage", "Hyaline cartilage", "Calcified cartilage"],
    "correctAnswer": 2,
    "explanation": "Hyaline cartilage forms the fetal skeleton, later replaced by bone via endochondral ossification."
  },
  {
    "id": "cmb-53",
    "question": "Which band of sarcomere shortens during contraction?",
    "options": ["I-band", "A-band", "M-line", "Z-line"],
    "correctAnswer": 0,
    "explanation": "The I-band, containing only thin filaments, shortens as filaments slide inward."
  },
  {
    "id": "cmb-54",
    "question": "Which mineral deficiency leads to osteoporosis?",
    "options": ["Calcium", "Iron", "Potassium", "Magnesium"],
    "correctAnswer": 0,
    "explanation": "Calcium deficiency reduces bone mineral density, contributing to osteoporosis."
  },
  {
    "id": "cmb-55",
    "question": "Which cartilage covers the tracheal rings?",
    "options": ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Calcified cartilage"],
    "correctAnswer": 0,
    "explanation": "Hyaline cartilage forms C-shaped rings in trachea, keeping the airway open."
  },
  {
    "id": "cmb-56",
    "question": "Which protein forms the thick filament in skeletal muscle?",
    "options": ["Actin", "Myosin", "Troponin", "Tropomyosin"],
    "correctAnswer": 1,
    "explanation": "Myosin forms thick filaments with ATPase activity for cross-bridge formation."
  },
  {
    "id": "cmb-57",
    "question": "Which bone region is actively growing during childhood?",
    "options": ["Epiphyseal plate", "Diaphysis", "Periosteum", "Medullary cavity"],
    "correctAnswer": 0,
    "explanation": "The epiphyseal plate (growth plate) produces new cartilage, later ossified to lengthen bone."
  },
  {
    "id": "cmb-58",
    "question": "Which connective tissue surrounds osteons in compact bone?",
    "options": ["Periosteum", "Interstitial lamellae", "Endosteum", "Canaliculi"],
    "correctAnswer": 1,
    "explanation": "Interstitial lamellae fill spaces between osteons, formed from remnants of old bone."
  },
  {
    "id": "cmb-59",
    "question": "Which ion is essential for cross-bridge cycling in muscle?",
    "options": ["Magnesium", "Calcium", "Potassium", "Sodium"],
    "correctAnswer": 1,
    "explanation": "Calcium allows myosin heads to bind actin, initiating cross-bridge cycling."
  },
  {
    "id": "cmb-60",
    "question": "Which cartilage heals poorly due to avascularity?",
    "options": ["Elastic cartilage", "Fibrocartilage", "Hyaline cartilage", "All types"],
    "correctAnswer": 3,
    "explanation": "All cartilage types lack direct blood supply, leading to poor healing capacity."
  },
  {
    "id": "cmb-61",
    "question": "Which connective tissue sheath continues into tendons?",
    "options": ["Endomysium", "Perimysium", "Epimysium", "Perichondrium"],
    "correctAnswer": 2,
    "explanation": "Epimysium merges into tendons, transferring muscle force to bone."
  },
  {
    "id": "cmb-62",
    "question": "Which bone cell derives from monocytes?",
    "options": ["Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"],
    "correctAnswer": 1,
    "explanation": "Osteoclasts are derived from monocyte/macrophage lineage, specialized in bone resorption."
  },
  {
    "id": "cmb-63",
    "question": "Which protein complex regulates contraction in skeletal muscle?",
    "options": ["Troponin-tropomyosin", "Actin-myosin", "Collagen-elastin", "Myoglobin-hemoglobin"],
    "correctAnswer": 0,
    "explanation": "The troponin-tropomyosin complex controls actin binding sites, regulating contraction."
  },
  {
    "id": "cmb-64",
    "question": "Which type of bone ossification involves a cartilage model?",
    "options": ["Intramembranous ossification", "Endochondral ossification", "Calcification", "Secondary ossification"],
    "correctAnswer": 1,
    "explanation": "Endochondral ossification replaces cartilage with bone, forming long bones."
  },
  {
    "id": "cmb-65",
    "question": "Which molecule accumulates in muscles during anaerobic respiration?",
    "options": ["Pyruvate", "Lactic acid", "Glycogen", "ATP"],
    "correctAnswer": 1,
    "explanation": "Lactic acid accumulates due to anaerobic glycolysis, leading to fatigue."
  },
  {
    "id": "cmb-66",
    "question": "Which cartilage forms the nasal septum?",
    "options": ["Fibrocartilage", "Elastic cartilage", "Hyaline cartilage", "Calcified cartilage"],
    "correctAnswer": 2,
    "explanation": "Hyaline cartilage forms the nasal septum, supporting the nose structure."
  },
  {
    "id": "cmb-67",
    "question": "Which structural unit of spongy bone contains bone marrow?",
    "options": ["Trabeculae", "Osteon", "Haversian canal", "Lacuna"],
    "correctAnswer": 0,
    "explanation": "Trabeculae in spongy bone enclose spaces filled with red or yellow bone marrow."
  },
  {
    "id": "cmb-68",
    "question": "Which bone disorder involves joint degeneration and cartilage loss?",
    "options": ["Osteoporosis", "Osteoarthritis", "Rickets", "Scoliosis"],
    "correctAnswer": 1,
    "explanation": "Osteoarthritis is a degenerative joint disease involving cartilage breakdown and bone spur formation."
  },
  {
    "id": "cmb-69",
    "question": "Which filament contains ATPase activity for contraction?",
    "options": ["Actin", "Myosin", "Tropomyosin", "Troponin"],
    "correctAnswer": 1,
    "explanation": "Myosin heads contain ATPase that hydrolyzes ATP for power strokes."
  },
  {
    "id": "cmb-70",
    "question": "Which joint type allows free movement in all directions?",
    "options": ["Hinge joint", "Pivot joint", "Ball-and-socket joint", "Gliding joint"],
    "correctAnswer": 2,
    "explanation": "Ball-and-socket joints (hip, shoulder) allow movement in multiple planes."
  },
  {
    "id": "cmb-71",
    "question": "Which protein polymerizes to form actin filaments?",
    "options": ["F-actin", "G-actin", "Myosin", "Tropomyosin"],
    "correctAnswer": 1,
    "explanation": "G-actin monomers polymerize into F-actin filaments that form thin filaments."
  },
  {
    "id": "cmb-72",
    "question": "Which hormone stimulates bone resorption?",
    "options": ["Calcitonin", "Parathyroid hormone", "Thyroxine", "Insulin"],
    "correctAnswer": 1,
    "explanation": "Parathyroid hormone increases osteoclast activity, raising blood calcium levels."
  },
  {
    "id": "cmb-73",
    "question": "Which connective tissue forms flat sheet-like tendons?",
    "options": ["Ligament", "Aponeurosis", "Perimysium", "Fascia"],
    "correctAnswer": 1,
    "explanation": "Aponeuroses are flat fibrous sheets that attach muscles to other structures."
  },
  {
    "id": "cmb-74",
    "question": "Which skeletal muscle fiber type is fatigue-resistant?",
    "options": ["Type I (slow-twitch)", "Type IIa (fast oxidative)", "Type IIb (fast glycolytic)", "Intermediate fibers"],
    "correctAnswer": 0,
    "explanation": "Type I fibers use oxidative metabolism, resist fatigue, and are rich in myoglobin."
  },
  {
    "id": "cmb-75",
    "question": "Which connective tissue covers the external surface of bones?",
    "options": ["Endosteum", "Periosteum", "Perichondrium", "Epimysium"],
    "correctAnswer": 1,
    "explanation": "Periosteum is a fibrous connective tissue layer covering bones, involved in growth and repair."
  },
  
  {
    "id": "msc-76",
    "question": "Which muscle type has spindle-shaped cells?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All of these"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle cells are elongated, spindle-shaped, and have a single central nucleus."
  },
  {
    "id": "msc-77",
    "question": "Which muscle type shows branching fibers?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "None of these"],
    "correctAnswer": 0,
    "explanation": "Cardiac muscle fibers branch and interconnect through intercalated discs."
  },
  {
    "id": "msc-78",
    "question": "Which muscle type is directly controlled by the somatic nervous system?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Both smooth and cardiac"],
    "correctAnswer": 1,
    "explanation": "Skeletal muscles are voluntary and are controlled by the somatic nervous system."
  },
  {
    "id": "msc-79",
    "question": "Which muscle type can contract without external stimulation due to pacemaker activity?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle has pacemaker cells that generate spontaneous rhythmic contractions."
  },
  {
    "id": "msc-80",
    "question": "Which muscle type has the fastest contraction speed?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "All equal"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscles contract faster than smooth and cardiac muscles, allowing quick voluntary movements."
  },
  {
    "id": "msc-81",
    "question": "Which muscle type can undergo sustained contraction without fatigue?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Both smooth and cardiac"],
    "correctAnswer": 0,
    "explanation": "Smooth muscles contract slowly and maintain tone without fatigue, important in organs like intestines and blood vessels."
  },
  {
    "id": "msc-82",
    "question": "Which muscle type has striations but is involuntary?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle is involuntary but striated due to sarcomere organization."
  },
  {
    "id": "msc-83",
    "question": "Which muscle type regenerates poorly after injury?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "All regenerate well"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle cells regenerate very poorly, so damage often leads to scar tissue formation."
  },
  {
    "id": "msc-84",
    "question": "Which muscle type contains dense bodies instead of Z-discs?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 0,
    "explanation": "Smooth muscle lacks sarcomeres; actin attaches to dense bodies instead of Z-lines."
  },
  {
    "id": "msc-85",
    "question": "Which muscle type has fibers that are cylindrical and multinucleated?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "None of these"],
    "correctAnswer": 1,
    "explanation": "Skeletal muscle fibers are long, cylindrical, multinucleated, and striated."
  },
  {
    "id": "msc-86",
    "question": "Which muscle type contracts rhythmically without conscious control?",
    "options": ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "Both smooth and cardiac"],
    "correctAnswer": 3,
    "explanation": "Both smooth and cardiac muscles contract involuntarily and rhythmically in many organs."
  },
  {
    "id": "msc-87",
    "question": "Which muscle type is responsible for peristalsis?",
    "options": ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "Both cardiac and smooth"],
    "correctAnswer": 2,
    "explanation": "Peristaltic movements of the digestive tract are produced by smooth muscle contraction."
  },
  {
    "id": "msc-88",
    "question": "Which muscle type has centrally placed nuclei in each fiber?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Both smooth and cardiac"],
    "correctAnswer": 3,
    "explanation": "Both smooth and cardiac muscle fibers typically have centrally located nuclei."
  },
  {
    "id": "msc-89",
    "question": "Which muscle type is involved in voluntary locomotion?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscles attach to bones and allow voluntary movement of the body."
  },
  {
    "id": "msc-90",
    "question": "Which muscle type has gap junctions for electrical coupling?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "Both smooth and cardiac"],
    "correctAnswer": 3,
    "explanation": "Both smooth and cardiac muscles have gap junctions that permit ion flow and coordinated contraction."
  },
  {
    "id": "msc-91",
    "question": "Which muscle type shows sarcomere organization into striations?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both skeletal and cardiac"],
    "correctAnswer": 3,
    "explanation": "Both skeletal and cardiac muscles are striated due to their sarcomere arrangement."
  },
  {
    "id": "msc-92",
    "question": "Which muscle type shows calmodulin-mediated contraction?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both skeletal and cardiac"],
    "correctAnswer": 1,
    "explanation": "Smooth muscle contraction is regulated by calmodulin binding calcium, not troponin."
  },
  {
    "id": "msc-93",
    "question": "Which muscle type primarily uses aerobic metabolism to resist fatigue?",
    "options": ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "All of these"],
    "correctAnswer": 0,
    "explanation": "Cardiac muscle relies heavily on aerobic metabolism and has abundant mitochondria."
  },
  {
    "id": "msc-94",
    "question": "Which muscle type is found in the walls of arteries?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "None of these"],
    "correctAnswer": 0,
    "explanation": "Smooth muscle in artery walls regulates blood pressure and vessel diameter."
  },
  {
    "id": "msc-95",
    "question": "Which muscle type depends on motor end plates for activation?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscles are stimulated by motor neurons at neuromuscular junctions."
  },
  {
    "id": "msc-96",
    "question": "Which muscle type shows tonic contraction to maintain posture in organs?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both cardiac and skeletal"],
    "correctAnswer": 1,
    "explanation": "Smooth muscle maintains tone in blood vessels and visceral organs for long durations."
  },
  {
    "id": "msc-97",
    "question": "Which muscle type is essential for pumping blood?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All of these"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle contracts rhythmically to pump blood throughout the body."
  },
  {
    "id": "msc-98",
    "question": "Which muscle type shows the least fatigue during lifetime?",
    "options": ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "None of these"],
    "correctAnswer": 0,
    "explanation": "Cardiac muscle works continuously without fatigue, sustained by aerobic metabolism."
  },
  {
    "id": "msc-99",
    "question": "Which muscle type is regulated by autonomic nervous system?",
    "options": ["Smooth muscle", "Cardiac muscle", "Both smooth and cardiac", "Skeletal muscle"],
    "correctAnswer": 2,
    "explanation": "Both smooth and cardiac muscles are involuntary and regulated by the autonomic nervous system."
  },
  {
    "id": "msc-100",
    "question": "Which muscle type helps in facial expressions?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "None of these"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscles attached to the skin of the face allow voluntary facial expressions."
  },

  {
    "id": "msc-101",
    "question": "Which muscle type contracts in response to stretch without neural input?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "None of these"],
    "correctAnswer": 0,
    "explanation": "Smooth muscle can contract in response to stretch due to intrinsic myogenic activity."
  },
  {
    "id": "msc-102",
    "question": "Which muscle type is the main tissue in the uterus?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Both smooth and skeletal"],
    "correctAnswer": 0,
    "explanation": "Uterine walls consist of smooth muscle, which contracts during childbirth."
  },
  {
    "id": "msc-103",
    "question": "Which muscle type requires direct innervation for each contraction?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscles need stimulation at the neuromuscular junction for contraction."
  },
  {
    "id": "msc-104",
    "question": "Which muscle type contains both actin and myosin filaments?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "All of these"],
    "correctAnswer": 3,
    "explanation": "All muscle types (smooth, skeletal, cardiac) contain actin and myosin filaments."
  },
  {
    "id": "msc-105",
    "question": "Which muscle type is non-striated and involuntary?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "None of these"],
    "correctAnswer": 0,
    "explanation": "Smooth muscle lacks striations and functions involuntarily under autonomic control."
  },
  {
    "id": "msc-106",
    "question": "Which muscle type uses troponin for contraction regulation?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both cardiac and skeletal"],
    "correctAnswer": 3,
    "explanation": "Both cardiac and skeletal muscles regulate contraction with troponin-tropomyosin complex."
  },
  {
    "id": "msc-107",
    "question": "Which muscle type shows single nucleus in most cells?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Both smooth and cardiac"],
    "correctAnswer": 3,
    "explanation": "Smooth and cardiac muscle cells generally contain a single centrally placed nucleus."
  },
  {
    "id": "msc-108",
    "question": "Which muscle type has the greatest regenerative capacity?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "All regenerate equally"],
    "correctAnswer": 1,
    "explanation": "Smooth muscle regenerates better than skeletal and cardiac muscle due to mitotic potential of its cells."
  },
  {
    "id": "msc-109",
    "question": "Which muscle type helps in maintaining blood pressure?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "Both cardiac and smooth"],
    "correctAnswer": 3,
    "explanation": "Cardiac muscle pumps blood while smooth muscle regulates vessel diameter, together maintaining blood pressure."
  },
  {
    "id": "msc-110",
    "question": "Which muscle type contracts by sliding filament mechanism?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 3,
    "explanation": "All three muscle types contract by sliding of actin and myosin filaments."
  },
  {
    "id": "msc-111",
    "question": "Which muscle type is found in the diaphragm?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 2,
    "explanation": "The diaphragm consists of skeletal muscle fibers under voluntary control."
  },
  {
    "id": "msc-112",
    "question": "Which muscle type can be described as striated and involuntary?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both skeletal and smooth"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle is striated but involuntary, specialized for continuous rhythmic contraction."
  },
  {
    "id": "msc-113",
    "question": "Which muscle type uses dense bodies for actin attachment?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 0,
    "explanation": "Smooth muscle lacks Z-lines and instead has dense bodies for anchoring actin filaments."
  },
  {
    "id": "msc-114",
    "question": "Which muscle type shows the highest endurance against fatigue?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "All equal"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle contracts continuously without fatigue due to abundant mitochondria and aerobic metabolism."
  },
  {
    "id": "msc-115",
    "question": "Which muscle type has the thickest filaments organized into sarcomeres?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both cardiac and skeletal"],
    "correctAnswer": 3,
    "explanation": "Both skeletal and cardiac muscles have sarcomeres with thick (myosin) and thin (actin) filaments."
  },
  {
    "id": "msc-116",
    "question": "Which muscle type is mainly controlled by hormones like oxytocin?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both cardiac and skeletal"],
    "correctAnswer": 0,
    "explanation": "Smooth muscles, like those in the uterus, are regulated by hormones such as oxytocin."
  },
  {
    "id": "msc-117",
    "question": "Which muscle type has fibers that form functional syncytium?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both skeletal and smooth"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle fibers are electrically coupled through gap junctions, acting as a syncytium."
  },
  {
    "id": "msc-118",
    "question": "Which muscle type lines the walls of the stomach and intestine?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "Both cardiac and smooth"],
    "correctAnswer": 1,
    "explanation": "Smooth muscle in gastrointestinal walls produces peristaltic movements."
  },
  {
    "id": "msc-119",
    "question": "Which muscle type contains satellite cells for repair?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "None of these"],
    "correctAnswer": 1,
    "explanation": "Skeletal muscle fibers can repair to some extent through satellite cells."
  },
  {
    "id": "msc-120",
    "question": "Which muscle type is essential for heart rhythm?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle contraction, controlled by pacemaker cells, maintains heart rhythm."
  },
  {
    "id": "msc-121",
    "question": "Which muscle type is capable of hypertrophy with exercise?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both skeletal and cardiac"],
    "correctAnswer": 3,
    "explanation": "Both skeletal and cardiac muscle can enlarge (hypertrophy) under increased workload."
  },
  {
    "id": "msc-122",
    "question": "Which muscle type is most dependent on continuous oxygen supply?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All equal"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle depends entirely on aerobic metabolism, requiring constant oxygen."
  },
  {
    "id": "msc-123",
    "question": "Which muscle type supports vasoconstriction and vasodilation?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All of these"],
    "correctAnswer": 0,
    "explanation": "Smooth muscle in vessel walls contracts and relaxes to control vessel diameter."
  },
  {
    "id": "msc-124",
    "question": "Which muscle type is not under voluntary control?",
    "options": ["Smooth muscle", "Cardiac muscle", "Both smooth and cardiac", "Skeletal muscle"],
    "correctAnswer": 2,
    "explanation": "Smooth and cardiac muscles are involuntary, unlike skeletal muscles."
  },
  {
    "id": "msc-125",
    "question": "Which muscle type is cylindrical, striated, and voluntary?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "All of these"],
    "correctAnswer": 1,
    "explanation": "Skeletal muscle fibers are cylindrical, multinucleated, striated, and voluntary."
  },
  
  {
    "id": "msc-126",
    "question": "Which muscle type is striated but involuntary?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "None"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle is striated in appearance but under involuntary control."
  },
  {
    "id": "msc-127",
    "question": "Which muscle type primarily depends on anaerobic glycolysis during intense activity?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both smooth and skeletal"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle can rely on anaerobic glycolysis for rapid energy during intense exercise."
  },
  {
    "id": "msc-128",
    "question": "Which muscle type is capable of hyperplasia (increase in cell number)?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Both skeletal and cardiac"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle can undergo hyperplasia, as seen in the uterus during pregnancy."
  },
  {
    "id": "msc-129",
    "question": "Which muscle type forms the myocardium of the heart?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "None"],
    "correctAnswer": 2,
    "explanation": "The heart wall is composed of cardiac muscle tissue, responsible for pumping blood."
  },
  {
    "id": "msc-130",
    "question": "Which muscle type exhibits voluntary control through motor neurons?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Both smooth and cardiac"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle contraction is under voluntary control via somatic motor neurons."
  },
  {
    "id": "msc-131",
    "question": "Which muscle type uses caveolae instead of T-tubules?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both skeletal and cardiac"],
    "correctAnswer": 1,
    "explanation": "Smooth muscle lacks T-tubules and uses caveolae for calcium entry during contraction."
  },
  {
    "id": "msc-132",
    "question": "Which muscle type is responsible for body posture maintenance?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "All"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle contractions stabilize posture and allow voluntary movement."
  },
  {
    "id": "msc-133",
    "question": "Which muscle type contracts rhythmically without fatigue throughout life?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "None"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle contracts rhythmically and resists fatigue to sustain life-long heartbeat."
  },
  {
    "id": "msc-134",
    "question": "Which muscle type contains satellite cells for repair?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "None"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle has satellite cells that aid limited repair and regeneration."
  },
  {
    "id": "msc-135",
    "question": "Which muscle type is most affected in hypertension due to vessel constriction?",
    "options": ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "None"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle in arterioles contracts excessively in hypertension, narrowing vessel diameter."
  },
  {
    "id": "msc-136",
    "question": "Which muscle type is multinucleated?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle fibers are multinucleated due to fusion of embryonic myoblasts."
  },
  {
    "id": "msc-137",
    "question": "Which muscle type is characterized by fusiform fibers?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "Both cardiac and skeletal"],
    "correctAnswer": 1,
    "explanation": "Smooth muscle fibers are fusiform (spindle-shaped), unlike striated skeletal or cardiac fibers."
  },
  {
    "id": "msc-138",
    "question": "Which muscle type has the most developed intercellular communication?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "None"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle fibers communicate via intercalated discs and gap junctions."
  },
  {
    "id": "msc-139",
    "question": "Which muscle type contracts to move limbs?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "All"],
    "correctAnswer": 1,
    "explanation": "Skeletal muscles contract to move bones and produce voluntary limb movements."
  },
  {
    "id": "msc-140",
    "question": "Which muscle type has pacemaker cells?",
    "options": ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both smooth and cardiac"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle contains pacemaker cells (SA node) that initiate rhythmic impulses."
  },
  {
    "id": "msc-141",
    "question": "Which muscle type is fatigue-resistant and maintains vascular tone?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle in blood vessels maintains vascular tone and is resistant to fatigue."
  },
  {
    "id": "msc-142",
    "question": "Which muscle type is arranged in sarcomeres?",
    "options": ["Cardiac muscle", "Smooth muscle", "Skeletal muscle", "Both skeletal and cardiac"],
    "correctAnswer": 3,
    "explanation": "Both skeletal and cardiac muscle show sarcomeric arrangement, giving striated appearance."
  },
  {
    "id": "msc-143",
    "question": "Which muscle type is found in urinary bladder walls?",
    "options": ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "None"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle is found in the urinary bladder wall, aiding in urination."
  },
  {
    "id": "msc-144",
    "question": "Which muscle type shows branching fibers?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "None"],
    "correctAnswer": 1,
    "explanation": "Cardiac muscle fibers are branched, unlike skeletal and smooth fibers."
  },
  {
    "id": "msc-145",
    "question": "Which muscle type regulates pupil size?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "None"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle in the iris controls pupil dilation and constriction."
  },
  {
    "id": "msc-146",
    "question": "Which muscle type responds quickly but fatigues easily?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "All"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle contracts quickly but fatigues more easily compared to smooth and cardiac muscle."
  },
  {
    "id": "msc-147",
    "question": "Which muscle type is controlled by the autonomic nervous system?",
    "options": ["Smooth muscle", "Cardiac muscle", "Both smooth and cardiac", "Skeletal muscle"],
    "correctAnswer": 2,
    "explanation": "Smooth and cardiac muscles are regulated by autonomic innervation."
  },
  {
    "id": "msc-148",
    "question": "Which muscle type is striated, cylindrical, and voluntary?",
    "options": ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "None"],
    "correctAnswer": 2,
    "explanation": "Skeletal muscle fibers are cylindrical, striated, and under voluntary control."
  },
  {
    "id": "msc-149",
    "question": "Which muscle type contracts involuntarily in response to hormones?",
    "options": ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "Both smooth and cardiac"],
    "correctAnswer": 2,
    "explanation": "Smooth muscle responds to hormones such as oxytocin (uterus) and adrenaline (blood vessels)."
  },
  {
    "id": "msc-150",
    "question": "Which muscle type is specialized for endurance activity without fatigue?",
    "options": ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "All"],
    "correctAnswer": 2,
    "explanation": "Cardiac muscle contracts continuously throughout life without fatigue, making it endurance-specialized."
  }
];






 

