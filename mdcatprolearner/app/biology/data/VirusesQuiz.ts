// FSc/MDCAT Force & Motion MCQs (100 per level), calculation-focused
// Assumption: g = 9.8 m/s^2 unless otherwise stated.

export type Difficulty = keyof typeof virusesQuestions;

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const easyQuestions: Question[] = [
  { id: "easy-1",
    question: "Which of the following is NOT a characteristic of viruses?",
    options: [
      "They contain genetic material",
      "They can reproduce independently",
      "They have a protein coat",
      "They require a host cell to replicate"
    ],
    correctAnswer: 1,
    explanation: "Viruses cannot reproduce independently and require a host cell for replication."
  },
  {
    id: "easy-2",
    question: "Viruses are classified based on:",
    options: [
      "Their ability to photosynthesize",
      "The type of genetic material they contain",
      "Their presence of mitochondria",
      "Their ability to move independently"
    ],
    correctAnswer: 1,
    explanation: "Viruses are classified based on their genetic material (DNA or RNA), structure, and other characteristics."
  },
  {
    id: "easy-3",
    question: "Which structure is present in all viruses?",
    options: [
      "Cell membrane",
      "Capsid",
      "Ribosomes",
      "Mitochondria"
    ],
    correctAnswer: 1,
    explanation: "All viruses have a protein coat called a capsid that surrounds their genetic material."
  },
  {
    id: "easy-4",
    question: "Bacteriophages are viruses that infect:",
    options: [
      "Plants",
      "Animals",
      "Bacteria",
      "Fungi"
    ],
    correctAnswer: 2,
    explanation: "Bacteriophages are specific viruses that infect and replicate within bacteria."
  },
  {
    id: "easy-5",
    question: "Which of the following viruses has DNA as its genetic material?",
    options: [
      "Influenza virus",
      "HIV",
      "Tobacco mosaic virus",
      "Herpes simplex virus"
    ],
    correctAnswer: 3,
    explanation: "Herpes simplex virus is a DNA virus, while the others are RNA viruses."
  },
  {
    id: "easy-6",
    question: "The protein subunits that make up the capsid of a virus are called:",
    options: [
      "Capsomeres",
      "Envelopes",
      "Spikes",
      "Nucleocapsids"
    ],
    correctAnswer: 0,
    explanation: "Capsomeres are the individual protein subunits that assemble to form the viral capsid."
  },
  {
    id: "easy-7",
    question: "Which of the following is an example of an RNA virus?",
    options: [
      "Adenovirus",
      "Papillomavirus",
      "Poxvirus",
      "Coronavirus"
    ],
    correctAnswer: 3,
    explanation: "Coronavirus is an RNA virus, while the others are DNA viruses."
  },
  {
    id: "easy-8",
    question: "The viral envelope is derived from:",
    options: [
      "The virus's own membrane synthesis",
      "The host cell's membrane",
      "The environment",
      "Other viruses"
    ],
    correctAnswer: 1,
    explanation: "The viral envelope is typically derived from the host cell's membrane during the budding process."
  },
  {
    id: "easy-9",
    question: "Which shape is NOT a common viral morphology?",
    options: [
      "Helical",
      "Icosahedral",
      "Complex",
      "Cuboidal"
    ],
    correctAnswer: 3,
    explanation: "Common viral morphologies include helical, icosahedral, and complex shapes, but not cuboidal."
  },
  {
    id: "easy-10",
    question: "Tobacco mosaic virus has which type of structure?",
    options: [
      "Icosahedral",
      "Complex",
      "Helical",
      "Spherical"
    ],
    correctAnswer: 2,
    explanation: "Tobacco mosaic virus has a helical capsid structure."
  },
  {
    id: "easy-11",
    question: "Which of the following is a double-stranded DNA virus?",
    options: [
      "Poliovirus",
      "Influenza virus",
      "Adenovirus",
      "HIV"
    ],
    correctAnswer: 2,
    explanation: "Adenovirus is a double-stranded DNA virus, while the others are RNA viruses."
  },
  {
    id: "easy-12",
    question: "Viruses that infect plants are typically transmitted by:",
    options: [
      "Direct contact between plants",
      "Insect vectors",
      "Airborne transmission only",
      "Water contamination only"
    ],
    correctAnswer: 1,
    explanation: "Plant viruses are often transmitted by insect vectors that feed on plant sap."
  },
  {
    id: "easy-13",
    question: "Which of the following is NOT a component of a virus?",
    options: [
      "Genetic material",
      "Capsid",
      "Ribosomes",
      "Envelope (in some viruses)"
    ],
    correctAnswer: 2,
    explanation: "Viruses lack ribosomes, which is why they must use the host cell's machinery for protein synthesis."
  },
  {
    id: "easy-14",
    question: "The term 'bacteriophage' literally means:",
    options: [
      "Bacteria eater",
      "Virus destroyer",
      "Cell infector",
      "Protein capsule"
    ],
    correctAnswer: 0,
    explanation: "The term 'bacteriophage' comes from Greek words meaning 'bacteria eater'."
  },
  {
    id: "easy-15",
    question: "Which classification system is used for viruses?",
    options: [
      "Linnaean taxonomy",
      "Baltimore classification",
      "Binomial nomenclature",
      "Five-kingdom system"
    ],
    correctAnswer: 1,
    explanation: "The Baltimore classification system categorizes viruses based on their type of genome and replication method."
  },
  {
    id: "easy-16",
    question: "A virus that infects fungi is called:",
    options: [
      "Bacteriophage",
      "Mycophage",
      "Phytophage",
      "Zoophage"
    ],
    correctAnswer: 1,
    explanation: "A mycophage is a virus that specifically infects fungi."
  },
  {
    id: "easy-17",
    question: "Which of the following viruses has a complex structure with a head and tail?",
    options: [
      "Influenza virus",
      "Tobacco mosaic virus",
      "T4 bacteriophage",
      "HIV"
    ],
    correctAnswer: 2,
    explanation: "The T4 bacteriophage has a complex structure with a distinct head and tail assembly."
  },
  {
    id: "easy-18",
    question: "The genetic material of retroviruses is:",
    options: [
      "Double-stranded DNA",
      "Single-stranded DNA",
      "Double-stranded RNA",
      "Single-stranded RNA"
    ],
    correctAnswer: 3,
    explanation: "Retroviruses have single-stranded RNA as their genetic material."
  },
  {
    id: "easy-19",
    question: "Which of the following is an example of a non-enveloped virus?",
    options: [
      "Influenza virus",
      "HIV",
      "Adenovirus",
      "Herpes simplex virus"
    ],
    correctAnswer: 2,
    explanation: "Adenovirus is non-enveloped, while the others have lipid envelopes."
  },
  {
    id: "easy-20",
    question: "Plant viruses typically enter host cells through:",
    options: [
      "Membrane fusion",
      "Endocytosis",
      "Wounds in the cell wall",
      "Direct penetration"
    ],
    correctAnswer: 2,
    explanation: "Plant viruses often enter through wounds in the cell wall caused by insects or mechanical damage."
  },
  {
    id: "easy-21",
    question: "Which of the following is a single-stranded DNA virus?",
    options: [
      "Parvovirus",
      "Adenovirus",
      "Herpesvirus",
      "Poxvirus"
    ],
    correctAnswer: 0,
    explanation: "Parvovirus is a single-stranded DNA virus, while the others are double-stranded DNA viruses."
  },
  {
    id: "easy-22",
    question: "The spikes on enveloped viruses are composed of:",
    options: [
      "Lipids",
      "Carbohydrates",
      "Glycoproteins",
      "Nucleic acids"
    ],
    correctAnswer: 2,
    explanation: "The spikes on enveloped viruses are glycoproteins that facilitate attachment to host cells."
  },
  {
    id: "easy-23",
    question: "Which virus causes the common cold?",
    options: [
      "Influenza virus",
      "Rhinovirus",
      "Coronavirus",
      "Adenovirus"
    ],
    correctAnswer: 1,
    explanation: "Rhinovirus is the most common cause of the common cold, though other viruses can also cause cold symptoms."
  },
  {
    id: "easy-24",
    question: "Viruses are considered obligate intracellular parasites because:",
    options: [
      "They can only reproduce inside host cells",
      "They kill all cells they infect",
      "They have no genetic material of their own",
      "They can survive outside cells for long periods"
    ],
    correctAnswer: 0,
    explanation: "Viruses are obligate intracellular parasites as they can only replicate inside living host cells."
  },
  {
    id: "easy-25",
    question: "Which of the following is NOT a method of viral classification?",
    options: [
      "Type of genetic material",
      "Capsid symmetry",
      "Presence of envelope",
      "Number of mitochondria"
    ],
    correctAnswer: 3,
    explanation: "Viruses do not have mitochondria, so this is not used for classification."
  },
  {
    id: "easy-26",
    question: "The study of viruses is known as:",
    options: [
      "Bacteriology",
      "Virology",
      "Mycology",
      "Parasitology"
    ],
    correctAnswer: 1,
    explanation: "Virology is the scientific study of viruses and viral diseases."
  },
  {
    id: "easy-27",
    question: "Which virus is known for having a reverse transcriptase enzyme?",
    options: [
      "Influenza virus",
      "Tobacco mosaic virus",
      "HIV",
      "Adenovirus"
    ],
    correctAnswer: 2,
    explanation: "HIV, as a retrovirus, uses reverse transcriptase to convert its RNA genome into DNA."
  },
  {
    id: "easy-28",
    question: "The protein coat of a virus is called:",
    options: [
      "Envelope",
      "Capsid",
      "Capsomere",
      "Nucleocapsid"
    ],
    correctAnswer: 1,
    explanation: "The capsid is the protein shell that encloses the genetic material of a virus."
  },
  {
    id: "easy-29",
    question: "Which of the following viruses is enveloped?",
    options: [
      "Poliovirus",
      "Adenovirus",
      "Influenza virus",
      "Papillomavirus"
    ],
    correctAnswer: 2,
    explanation: "Influenza virus is enveloped, while the others are non-enveloped viruses."
  },
  {
    id: "easy-30",
    question: "Bacteriophages can undergo two types of life cycles:",
    options: [
      "Lytic and lysogenic",
      "Aerobic and anaerobic",
      "Mitotic and meiotic",
      "Photosynthetic and chemosynthetic"
    ],
    correctAnswer: 0,
    explanation: "Bacteriophages can undergo lytic (destructive) or lysogenic (dormant) life cycles."
  },
  {
    id: "easy-31",
    question: "Which of the following is a characteristic of viral genomes?",
    options: [
      "They always contain both DNA and RNA",
      "They are always double-stranded",
      "They can be either DNA or RNA, but not both",
      "They are always circular"
    ],
    correctAnswer: 2,
    explanation: "Viral genomes can be either DNA or RNA, but a single virus doesn't contain both."
  },
  {
    id: "easy-32",
    question: "The COVID-19 pandemic is caused by which type of virus?",
    options: [
      "DNA virus",
      "Retrovirus",
      "Coronavirus",
      "Bacteriophage"
    ],
    correctAnswer: 2,
    explanation: "COVID-19 is caused by SARS-CoV-2, which is a type of coronavirus."
  },
  {
    id: "easy-33",
    question: "Which virus is associated with cervical cancer?",
    options: [
      "Hepatitis B virus",
      "Human papillomavirus",
      "Epstein-Barr virus",
      "Herpes simplex virus"
    ],
    correctAnswer: 1,
    explanation: "Human papillomavirus (HPV) is associated with the development of cervical cancer."
  },
  {
    id: "easy-34",
    question: "The influenza virus is classified based on:",
    options: [
      "Its capsule type",
      "Hemagglutinin and neuraminidase proteins",
      "Its size and shape",
      "The number of genes it contains"
    ],
    correctAnswer: 1,
    explanation: "Influenza viruses are classified by their hemagglutinin (H) and neuraminidase (N) surface proteins."
  },
  {
    id: "easy-35",
    question: "Which of the following is NOT a viral disease?",
    options: [
      "Measles",
      "Tuberculosis",
      "Rabies",
      "Influenza"
    ],
    correctAnswer: 1,
    explanation: "Tuberculosis is caused by the bacterium Mycobacterium tuberculosis, not a virus."
  },
  {
    id: "easy-36",
    question: "Viruses that can infect bacteria are called:",
    options: [
      "Arboviruses",
      "Bacteriophages",
      "Retroviruses",
      "Adenoviruses"
    ],
    correctAnswer: 1,
    explanation: "Bacteriophages are viruses that specifically infect bacteria."
  },
  {
    id: "easy-37",
    question: "Which structure allows viruses to attach to host cells?",
    options: [
      "Capsid",
      "Envelope",
      "Receptor-binding proteins",
      "Nuclear membrane"
    ],
    correctAnswer: 2,
    explanation: "Receptor-binding proteins on the virus surface allow attachment to specific receptors on host cells."
  },
  {
    id: "easy-38",
    question: "The genetic material of a virus is protected by:",
    options: [
      "The envelope",
      "The capsid",
      "The host cell membrane",
      "Mitochondria"
    ],
    correctAnswer: 1,
    explanation: "The capsid is the protein coat that protects the viral genetic material."
  },
  {
    id: "easy-39",
    question: "Which of the following is a DNA virus that causes chickenpox?",
    options: [
      "Varicella-zoster virus",
      "Measles virus",
      "Rubella virus",
      "Mumps virus"
    ],
    correctAnswer: 0,
    explanation: "Varicella-zoster virus is a DNA virus that causes chickenpox and shingles."
  },
  {
    id: "easy-40",
    question: "Plant viruses often have which type of genetic material?",
    options: [
      "Double-stranded DNA",
      "Single-stranded RNA",
      "Double-stranded RNA",
      "Single-stranded DNA"
    ],
    correctAnswer: 1,
    explanation: "Most plant viruses have single-stranded RNA as their genetic material."
  },
  {
  id: "easy-41",
  question: "Which of the following viruses is known to have a double-stranded RNA genome?",
  options: [
    "Influenza virus",
    "Rotavirus",
    "HIV",
    "Herpes simplex virus"
  ],
  correctAnswer: 1,
  explanation: "Rotavirus is a double-stranded RNA virus that causes gastroenteritis, particularly in children."
},
{
  id: "easy-42",
  question: "What is the primary function of viral capsid proteins?",
  options: [
    "Energy production",
    "Protection of genetic material",
    "Cell membrane formation",
    "Enzyme production"
  ],
  correctAnswer: 1,
  explanation: "The capsid's primary function is to protect the viral genetic material from environmental damage and to aid in attachment to host cells."
},
{
  id: "easy-43",
  question: "Which of these viruses is transmitted primarily through the fecal-oral route?",
  options: [
    "HIV",
    "Hepatitis A virus",
    "Influenza virus",
    "Rabies virus"
  ],
  correctAnswer: 1,
  explanation: "Hepatitis A virus is primarily transmitted through the fecal-oral route, often via contaminated food or water."
},
{
  id: "easy-44",
  question: "What is the name of the process where a virus leaves a host cell without immediately destroying it?",
  options: [
    "Lysis",
    "Budding",
    "Endocytosis",
    "Penetration"
  ],
  correctAnswer: 1,
  explanation: "Budding is the process where enveloped viruses exit the host cell by pushing through the membrane, acquiring their envelope in the process."
},
{
  id: "easy-45",
  question: "Which classification category refers to viruses that infect animals?",
  options: [
    "Bacteriophages",
    "Zoophages",
    "Phytophages",
    "Mycophages"
  ],
  correctAnswer: 1,
  explanation: "Zoophages are viruses that specifically infect animals."
},
{
  id: "easy-46",
  question: "What is the typical size range of most viruses?",
  options: [
    "1-10 micrometers",
    "10-100 micrometers",
    "20-300 nanometers",
    "1-10 millimeters"
  ],
  correctAnswer: 2,
  explanation: "Most viruses range in size from 20 to 300 nanometers, making them much smaller than bacteria."
},
{
  id: "easy-47",
  question: "Which virus is responsible for causing shingles later in life after a chickenpox infection?",
  options: [
    "Varicella-zoster virus",
    "Herpes simplex virus",
    "Epstein-Barr virus",
    "Cytomegalovirus"
  ],
  correctAnswer: 0,
  explanation: "Varicella-zoster virus causes chickenpox initially and can reactivate later in life to cause shingles."
},
{
  id: "easy-48",
  question: "What is the name of the clear area in a bacterial lawn where viruses have lysed the cells?",
  options: [
    "Colony",
    "Plaque",
    "Zone of inhibition",
    "Clearance"
  ],
  correctAnswer: 1,
  explanation: "A plaque is a clear area on a bacterial lawn where viruses have infected and lysed the bacterial cells."
},
{
  id: "easy-49",
  question: "Which of the following is NOT a characteristic used in virus classification?",
  options: [
    "Presence of envelope",
    "Capsid symmetry",
    "Type of genetic material",
    "Number of mitochondria"
  ],
  correctAnswer: 3,
  explanation: "Viruses do not have mitochondria, so this is not used in their classification."
},
{
  id: "easy-50",
  question: "What type of genetic material does the influenza virus have?",
  options: [
    "Double-stranded DNA",
    "Single-stranded DNA",
    "Double-stranded RNA",
    "Single-stranded RNA"
  ],
  correctAnswer: 3,
  explanation: "Influenza virus has single-stranded RNA as its genetic material."
},
{
  id: "easy-51",
  question: "Which virus family includes the coronaviruses?",
  options: [
    "Herpesviridae",
    "Retroviridae",
    "Coronaviridae",
    "Adenoviridae"
  ],
  correctAnswer: 2,
  explanation: "Coronaviruses belong to the Coronaviridae family, characterized by their crown-like appearance."
},
{
  id: "easy-52",
  question: "What is the function of neuraminidase in influenza viruses?",
  options: [
    "Attachment to host cells",
    "Release of new viral particles",
    "Replication of genetic material",
    "Formation of the capsid"
  ],
  correctAnswer: 1,
  explanation: "Neuraminidase helps newly formed influenza virus particles to be released from the host cell."
},
{
  id: "easy-53",
  question: "Which of these is an example of a latent viral infection?",
  options: [
    "Common cold",
    "Influenza",
    "Herpes simplex",
    "Gastroenteritis"
  ],
  correctAnswer: 2,
  explanation: "Herpes simplex virus can establish latent infections where the virus remains dormant in nerve cells."
},
{
  id: "easy-54",
  question: "What is the name of the protein that allows HIV to attach to CD4 receptors?",
  options: [
    "Hemagglutinin",
    "gp120",
    "Neuraminidase",
    "Reverse transcriptase"
  ],
  correctAnswer: 1,
  explanation: "gp120 is the glycoprotein on HIV that binds to CD4 receptors on host cells."
},
{
  id: "easy-55",
  question: "Which virus is associated with the development of Burkitt's lymphoma?",
  options: [
    "Hepatitis B virus",
    "Epstein-Barr virus",
    "Human papillomavirus",
    "Cytomegalovirus"
  ],
  correctAnswer: 1,
  explanation: "Epstein-Barr virus is associated with several cancers, including Burkitt's lymphoma."
},
{
  id: "easy-56",
  question: "What is the primary host for arboviruses?",
  options: [
    "Bacteria",
    "Plants",
    "Arthropods",
    "Fungi"
  ],
  correctAnswer: 2,
  explanation: "Arboviruses (arthropod-borne viruses) use arthropods such as mosquitoes and ticks as their primary hosts and vectors."
},
{
  id: "easy-57",
  question: "Which structure is absent in all viruses?",
  options: [
    "Genetic material",
    "Protein coat",
    "Ribosomes",
    "Envelope (in some)"
  ],
  correctAnswer: 2,
  explanation: "Viruses lack ribosomes, which is why they must use the host cell's machinery for protein synthesis."
},
{
  id: "easy-58",
  question: "What is the name of the hypothesis that suggests viruses evolved from genetic elements that gained the ability to move between cells?",
  options: [
    "Regressive hypothesis",
    "Progressive hypothesis",
    "Virus-first hypothesis",
    "Escape hypothesis"
  ],
  correctAnswer: 3,
  explanation: "The escape hypothesis suggests viruses evolved from genetic elements that escaped from cellular organisms."
},
{
  id: "easy-59",
  question: "Which viral disease has been completely eradicated through vaccination?",
  options: [
    "Measles",
    "Polio",
    "Smallpox",
    "Rubella"
  ],
  correctAnswer: 2,
  explanation: "Smallpox is the only human viral disease that has been completely eradicated through global vaccination efforts."
},
{
  id: "easy-60",
  question: "What is the typical structure of adenoviruses?",
  options: [
    "Helical",
    "Icosahedral",
    "Complex",
    "Spherical"
  ],
  correctAnswer: 1,
  explanation: "Adenoviruses have an icosahedral capsid structure."
},
{
  id: "easy-61",
  question: "Which virus is responsible for causing warts?",
  options: [
    "Herpes simplex virus",
    "Human papillomavirus",
    "Varicella-zoster virus",
    "Adenovirus"
  ],
  correctAnswer: 1,
  explanation: "Human papillomavirus (HPV) causes warts and is associated with certain cancers."
},
{
  id: "easy-62",
  question: "What is the function of the viral envelope?",
  options: [
    "Protection from digestive enzymes",
    "Energy production",
    "DNA replication",
    "Protein synthesis"
  ],
  correctAnswer: 0,
  explanation: "The viral envelope helps protect the virus from host immune responses and may aid in attachment to host cells."
},
{
  id: "easy-63",
  question: "Which of these viruses has a complex structure with a brick-like appearance?",
  options: [
    "Influenza virus",
    "Poxvirus",
    "HIV",
    "Tobacco mosaic virus"
  ],
  correctAnswer: 1,
  explanation: "Poxviruses have a complex structure with a brick-like or ovoid shape."
},
{
  id: "easy-64",
  question: "What is the name of the process where bacteriophages incorporate their DNA into the bacterial chromosome?",
  options: [
    "Lysis",
    "Budding",
    "Lysogeny",
    "Endocytosis"
  ],
  correctAnswer: 2,
  explanation: "Lysogeny is the process where bacteriophage DNA becomes incorporated into the bacterial chromosome as a prophage."
},
{
  id: "easy-65",
  question: "Which virus is transmitted through the bite of infected mosquitoes?",
  options: [
    "Hepatitis B virus",
    "Dengue virus",
    "HIV",
    "Influenza virus"
  ],
  correctAnswer: 1,
  explanation: "Dengue virus is transmitted through the bite of infected Aedes mosquitoes."
},
{
  id: "easy-66",
  question: "What is the primary genetic material in parvoviruses?",
  options: [
    "Double-stranded DNA",
    "Single-stranded DNA",
    "Double-stranded RNA",
    "Single-stranded RNA"
  ],
  correctAnswer: 1,
  explanation: "Parvoviruses have single-stranded DNA as their genetic material."
},
{
  id: "easy-67",
  question: "Which of the following is an example of a positive-sense RNA virus?",
  options: [
    "Influenza virus",
    "Poliovirus",
    "Rabies virus",
    "Measles virus"
  ],
  correctAnswer: 1,
  explanation: "Poliovirus is a positive-sense RNA virus, meaning its RNA can directly serve as mRNA for protein synthesis."
},
{
  id: "easy-68",
  question: "What is the name of the viral enzyme that helps HIV integrate its DNA into the host genome?",
  options: [
    "Reverse transcriptase",
    "Integrase",
    "Protease",
    "RNA polymerase"
  ],
  correctAnswer: 1,
  explanation: "Integrase is the enzyme that helps HIV integrate its DNA into the host cell's genome."
},
{
  id: "easy-69",
  question: "Which virus family is characterized by having a bullet-shaped morphology?",
  options: [
    "Herpesviridae",
    "Rhabdoviridae",
    "Adenoviridae",
    "Retroviridae"
  ],
  correctAnswer: 1,
  explanation: "Rhabdoviridae, which includes rabies virus, is characterized by a bullet-shaped morphology."
},
{
  id: "easy-70",
  question: "What is the primary method of transmission for the rabies virus?",
  options: [
    "Airborne droplets",
    "Fecal-oral route",
    "Bite of infected animals",
    "Sexual contact"
  ],
  correctAnswer: 2,
  explanation: "Rabies virus is primarily transmitted through the bite of infected animals, which introduces the virus into muscle tissue."
},
{
  id: "easy-71",
  question: "Which of these viruses is known to cause congenital defects if contracted during pregnancy?",
  options: [
    "Influenza virus",
    "Rubella virus",
    "Hepatitis A virus",
    "Norovirus"
  ],
  correctAnswer: 1,
  explanation: "Rubella virus (German measles) can cause congenital defects if contracted during pregnancy, particularly in the first trimester."
},
{
  id: "easy-72",
  question: "What is the name of the protein subunits that make up the viral capsid?",
  options: [
    "Capsomeres",
    "Envelopes",
    "Spikes",
    "Nucleocapsids"
  ],
  correctAnswer: 0,
  explanation: "Capsomeres are the individual protein subunits that assemble to form the viral capsid."
},
{
  id: "easy-73",
  question: "Which virus is associated with the development of hepatocellular carcinoma?",
  options: [
    "Human papillomavirus",
    "Hepatitis B virus",
    "Epstein-Barr virus",
    "Human herpesvirus 8"
  ],
  correctAnswer: 1,
  explanation: "Hepatitis B virus is associated with the development of hepatocellular carcinoma (liver cancer)."
},
{
  id: "easy-74",
  question: "What is the typical structure of the tobacco mosaic virus?",
  options: [
    "Icosahedral",
    "Helical",
    "Complex",
    "Spherical"
  ],
  correctAnswer: 1,
  explanation: "Tobacco mosaic virus has a helical capsid structure."
},
{
  id: "easy-75",
  question: "Which of the following is NOT a DNA virus?",
  options: [
    "Adenovirus",
    "Herpes simplex virus",
    "Poxvirus",
    "Rotavirus"
  ],
  correctAnswer: 3,
  explanation: "Rotavirus is an RNA virus, while the others are DNA viruses."
},
{
  id: "easy-76",
  question: "What is the name of the process where a virus enters a cell by being engulfed?",
  options: [
    "Membrane fusion",
    "Endocytosis",
    "Direct penetration",
    "Budding"
  ],
  correctAnswer: 1,
  explanation: "Endocytosis is the process where the cell membrane engulfs the virus, bringing it into the cell in a vesicle."
},
{
  id: "easy-77",
  question: "Which virus is responsible for causing mononucleosis (mono)?",
  options: [
    "Cytomegalovirus",
    "Epstein-Barr virus",
    "Varicella-zoster virus",
    "Adenovirus"
  ],
  correctAnswer: 1,
  explanation: "Epstein-Barr virus is the primary cause of infectious mononucleosis."
},
{
  id: "easy-78",
  question: "What is the function of hemagglutinin in influenza viruses?",
  options: [
    "Release of viral particles",
    "Attachment to host cells",
    "Replication of genetic material",
    "Formation of the envelope"
  ],
  correctAnswer: 1,
  explanation: "Hemagglutinin allows influenza viruses to attach to sialic acid receptors on host cells."
},
{
  id: "easy-79",
  question: "Which of these viruses is known to have a segmented genome?",
  options: [
    "HIV",
    "Herpes simplex virus",
    "Influenza virus",
    "Hepatitis B virus"
  ],
  correctAnswer: 2,
  explanation: "Influenza virus has a segmented genome, which allows for genetic reassortment and contributes to its variability."
},
{
  id: "easy-80",
  question: "What is the name of the clear area that forms when viruses infect a monolayer of cultured cells?",
  options: [
    "Colony",
    "Plaque",
    "Zone of inhibition",
    "Clearance zone"
  ],
  correctAnswer: 1,
  explanation: "A plaque is a clear area in a cell monolayer where viruses have infected and killed the cells."
},
{
  id: "easy-81",
  question: "Which virus is transmitted through contaminated water and causes acute gastroenteritis?",
  options: [
    "Hepatitis A virus",
    "Norovirus",
    "HIV",
    "Rabies virus"
  ],
  correctAnswer: 1,
  explanation: "Norovirus is a common cause of acute gastroenteritis and is often transmitted through contaminated water or food."
},
{
  id: "easy-82",
  question: "What is the name of the viral family that includes HIV?",
  options: [
    "Herpesviridae",
    "Retroviridae",
    "Adenoviridae",
    "Poxviridae"
  ],
  correctAnswer: 1,
  explanation: "HIV belongs to the Retroviridae family, which are RNA viruses that use reverse transcriptase."
},
{
  id: "easy-83",
  question: "Which of the following is a characteristic of all viruses?",
  options: [
    "They can reproduce independently",
    "They contain both DNA and RNA",
    "They have a protein coat",
    "They have ribosomes"
  ],
  correctAnswer: 2,
  explanation: "All viruses have a protein coat (capsid) that protects their genetic material."
},
{
  id: "easy-84",
  question: "What is the name of the hypothesis that suggests viruses evolved from reduced cellular organisms?",
  options: [
    "Escape hypothesis",
    "Regressive hypothesis",
    "Virus-first hypothesis",
    "Progressive hypothesis"
  ],
  correctAnswer: 1,
  explanation: "The regressive hypothesis suggests viruses evolved from free-living organisms that underwent reductive evolution."
},
{
  id: "easy-85",
  question: "Which virus is known to cause cervical cancer?",
  options: [
    "Hepatitis B virus",
    "Epstein-Barr virus",
    "Human papillomavirus",
    "Human herpesvirus 8"
  ],
  correctAnswer: 2,
  explanation: "Certain strains of human papillomavirus (HPV) are associated with the development of cervical cancer."
},
{
  id: "easy-86",
  question: "What is the typical morphology of rabies virus?",
  options: [
    "Icosahedral",
    "Helical",
    "Bullet-shaped",
    "Complex"
  ],
  correctAnswer: 2,
  explanation: "Rabies virus has a characteristic bullet-shaped morphology."
},
{
  id: "easy-87",
  question: "Which of these viruses is known to cause the common cold?",
  options: [
    "Rhinovirus",
    "Rotavirus",
    "Rabies virus",
    "HIV"
  ],
  correctAnswer: 0,
  explanation: "Rhinovirus is one of the most common causes of the common cold."
},
{
  id: "easy-88",
  question: "What is the name of the viral enzyme that cuts viral proteins into functional units?",
  options: [
    "Reverse transcriptase",
    "Integrase",
    "Protease",
    "RNA polymerase"
  ],
  correctAnswer: 2,
  explanation: "Protease is the enzyme that cleaves viral polyproteins into functional units during viral replication."
},
{
  id: "easy-89",
  question: "Which virus is transmitted through sexual contact and can cause genital warts?",
  options: [
    "Herpes simplex virus",
    "Human papillomavirus",
    "Hepatitis B virus",
    "HIV"
  ],
  correctAnswer: 1,
  explanation: "Human papillomavirus (HPV) is transmitted through sexual contact and can cause genital warts."
},
{
  id: "easy-90",
  question: "What is the primary genetic material in picornaviruses?",
  options: [
    "Double-stranded DNA",
    "Single-stranded DNA",
    "Double-stranded RNA",
    "Single-stranded RNA"
  ],
  correctAnswer: 3,
  explanation: "Picornaviruses (including poliovirus) have single-stranded RNA as their genetic material."
},
{
  id: "easy-91",
  question: "Which of these is an example of a negative-sense RNA virus?",
  options: [
    "Poliovirus",
    "Rhinovirus",
    "Measles virus",
    "Hepatitis A virus"
  ],
  correctAnswer: 2,
  explanation: "Measles virus is a negative-sense RNA virus, meaning its RNA must be transcribed to positive-sense RNA before translation."
},
{
  id: "easy-92",
  question: "What is the name of the process where two different influenza viruses exchange genetic material?",
  options: [
    "Transformation",
    "Reassortment",
    "Conjugation",
    "Transduction"
  ],
  correctAnswer: 1,
  explanation: "Reassortment is the process where influenza viruses with segmented genomes exchange genetic material, potentially creating new strains."
},
{
  id: "easy-93",
  question: "Which virus is known to cause hemorrhagic fever?",
  options: [
    "Influenza virus",
    "Ebola virus",
    "Adenovirus",
    "Rotavirus"
  ],
  correctAnswer: 1,
  explanation: "Ebola virus causes Ebola hemorrhagic fever, characterized by bleeding and organ failure."
},
{
  id: "easy-94",
  question: "What is the typical structure of herpesviruses?",
  options: [
    "Helical",
    "Icosahedral",
    "Complex",
    "Bullet-shaped"
  ],
  correctAnswer: 1,
  explanation: "Herpesviruses have an icosahedral capsid structure surrounded by an envelope."
},
{
  id: "easy-95",
  question: "Which of the following viruses is known to have a circular DNA genome?",
  options: [
    "Adenovirus",
    "Herpes simplex virus",
    "Hepatitis B virus",
    "Influenza virus"
  ],
  correctAnswer: 2,
  explanation: "Hepatitis B virus has a partially double-stranded circular DNA genome."
},
{
  id: "easy-96",
  question: "What is the name of the viral family that includes viruses causing hepatitis?",
  options: [
    "Herpesviridae",
    "Hepadnaviridae",
    "Retroviridae",
    "Poxviridae"
  ],
  correctAnswer: 1,
  explanation: "Hepadnaviridae includes hepatitis B virus and other viruses that cause hepatitis."
},
{
  id: "easy-97",
  question: "Which virus is transmitted through the respiratory route and causes a characteristic rash?",
  options: [
    "Hepatitis A virus",
    "Measles virus",
    "HIV",
    "Rabies virus"
  ],
  correctAnswer: 1,
  explanation: "Measles virus is transmitted through the respiratory route and causes a characteristic maculopapular rash."
},
{
  id: "easy-98",
  question: "What is the function of the matrix protein in some viruses?",
  options: [
    "Attachment to host cells",
    "Protection of genetic material",
    "Link between capsid and envelope",
    "Replication of genetic material"
  ],
  correctAnswer: 2,
  explanation: "The matrix protein provides structural support and serves as a link between the viral capsid and envelope."
},
{
  id: "easy-99",
  question: "Which of these viruses is known to cause birth defects if contracted during pregnancy?",
  options: [
    "Influenza virus",
    "Cytomegalovirus",
    "Hepatitis A virus",
    "Norovirus"
  ],
  correctAnswer: 1,
  explanation: "Cytomegalovirus (CMV) can cause birth defects if contracted during pregnancy, particularly hearing loss and developmental issues."
},
{
  id: "easy-100",
  question: "What is the name of the process where a bacteriophage transfers bacterial DNA from one cell to another?",
  options: [
    "Conjugation",
    "Transformation",
    "Transduction",
    "Transfection"
  ],
  correctAnswer: 2,
  explanation: "Transduction is the process where bacteriophages transfer bacterial DNA from one cell to another, contributing to genetic diversity."
}
];

export const mediumQuestions: Question[] = [
    {
    id: "medium-1",
    question: "Which of the following enzymes is crucial for the replication of retroviruses like HIV?",
    options: [
      "DNA polymerase",
      "Reverse transcriptase",
      "RNA polymerase",
      "Helicase"
    ],
    correctAnswer: 1,
    explanation: "Reverse transcriptase is essential for retroviruses as it converts their RNA genome into DNA, which then integrates into the host cell's genome."
  },
  {
    id: "medium-2",
    question: "What is the primary difference between lytic and lysogenic cycles in bacteriophages?",
    options: [
      "Lytic cycle immediately destroys the host cell, while lysogenic involves viral DNA integration",
      "Lysogenic cycle is faster than lytic cycle",
      "Lytic cycle involves viral DNA integration, while lysogenic causes immediate cell lysis",
      "Only DNA viruses undergo lysogenic cycle"
    ],
    correctAnswer: 0,
    explanation: "In the lytic cycle, the virus immediately replicates and lyses the host cell, while in the lysogenic cycle, viral DNA integrates into the host genome and remains dormant."
  },
  {
    id: "medium-3",
    question: "Which structural component of HIV is specifically responsible for binding to CD4 receptors on T-cells?",
    options: [
      "Capsid proteins",
      "gp120 glycoprotein",
      "Matrix proteins",
      "Reverse transcriptase"
    ],
    correctAnswer: 1,
    explanation: "The gp120 glycoprotein on the HIV envelope specifically binds to CD4 receptors on helper T-cells, facilitating viral entry."
  },
  {
    id: "medium-4",
    question: "What is the significance of antigenic drift in influenza viruses?",
    options: [
      "It allows the virus to change from RNA to DNA",
      "It enables the virus to evade host immune responses through gradual mutations",
      "It causes the virus to become non-infectious",
      "It changes the virus from enveloped to non-enveloped"
    ],
    correctAnswer: 1,
    explanation: "Antigenic drift refers to small, gradual mutations in influenza virus surface proteins (HA and NA) that allow it to evade pre-existing immunity in populations."
  },
  {
    id: "medium-5",
    question: "Which of the following best describes a prion?",
    options: [
      "A virus with DNA genome",
      "A defective virus missing its capsid",
      "An infectious protein that causes misfolding of normal proteins",
      "A type of bacteriophage"
    ],
    correctAnswer: 2,
    explanation: "Prions are infectious protein particles that cause normal proteins to misfold, leading to neurodegenerative diseases like Creutzfeldt-Jakob disease."
  },
  {
    id: "medium-6",
    question: "How does the Baltimore classification system categorize viruses?",
    options: [
      "Based on the diseases they cause",
      "Based on their morphological structure",
      "Based on their genome type and replication strategy",
      "Based on the type of host they infect"
    ],
    correctAnswer: 2,
    explanation: "The Baltimore classification system categorizes viruses into seven groups based on their genome type (DNA or RNA) and their replication strategy."
  },
  {
    id: "medium-7",
    question: "What is the role of integrase in the HIV replication cycle?",
    options: [
      "Converting viral RNA to DNA",
      "Cleaving viral polyproteins into functional units",
      "Integrating viral DNA into the host chromosome",
      "Forming the viral envelope"
    ],
    correctAnswer: 2,
    explanation: "Integrase is the HIV enzyme that facilitates the integration of viral DNA (formed by reverse transcription) into the host cell's genome."
  },
  {
    id: "medium-8",
    question: "Which of the following viruses is known to cause latent infections and can reactivate later in life?",
    options: [
      "Influenza virus",
      "Norovirus",
      "Varicella-zoster virus",
      "Poliovirus"
    ],
    correctAnswer: 2,
    explanation: "Varicella-zoster virus causes chickenpox initially but can remain latent in nerve ganglia and reactivate later as shingles."
  },
  {
    id: "medium-9",
    question: "What is the significance of the CCR5 co-receptor in HIV infection?",
    options: [
      "It is the primary binding site for reverse transcriptase",
      "It serves as a co-receptor with CD4 for HIV entry into cells",
      "It inhibits viral replication",
      "It is the target for HIV protease inhibitors"
    ],
    correctAnswer: 1,
    explanation: "CCR5 is a chemokine receptor that serves as a co-receptor along with CD4 for HIV entry into host cells, particularly macrophages."
  },
  {
    id: "medium-10",
    question: "Which of the following statements about viral envelopes is correct?",
    options: [
      "All viruses have envelopes derived from the host cell membrane",
      "Enveloped viruses are more resistant to disinfectants than non-enveloped viruses",
      "The viral envelope contains host cell lipids and viral glycoproteins",
      "Enveloped viruses cannot survive outside host cells for extended periods"
    ],
    correctAnswer: 3,
    explanation: "Enveloped viruses are generally less stable in the environment and cannot survive outside host cells for extended periods due to their fragile lipid envelope."
  },
  {
    id: "medium-11",
    question: "What is the primary mechanism of action of protease inhibitors in HIV treatment?",
    options: [
      "They prevent viral entry into host cells",
      "They inhibit the integration of viral DNA into host genome",
      "They block the cleavage of viral polyproteins into functional enzymes",
      "They prevent viral RNA synthesis"
    ],
    correctAnswer: 2,
    explanation: "Protease inhibitors block the activity of HIV protease enzyme, preventing the cleavage of viral polyproteins into functional enzymes and structural proteins."
  },
  {
    id: "medium-12",
    question: "Which of the following best describes antigenic shift in influenza viruses?",
    options: [
      "Gradual mutation of surface proteins",
      "Reassortment of genome segments between different influenza strains",
      "Integration of viral DNA into host genome",
      "Conversion from RNA to DNA genome"
    ],
    correctAnswer: 1,
    explanation: "Antigenic shift involves the reassortment of genome segments between different influenza virus strains, potentially creating novel viruses to which populations have little immunity."
  },
  {
    id: "medium-13",
    question: "What is the function of the matrix protein in enveloped viruses?",
    options: [
      "It forms the outer envelope of the virus",
      "It mediates attachment to host cells",
      "It links the viral nucleocapsid to the envelope",
      "It contains the genetic material of the virus"
    ],
    correctAnswer: 2,
    explanation: "The matrix protein is located inside the viral envelope and serves to link the nucleocapsid (containing the genetic material) to the envelope."
  },
  {
    id: "medium-14",
    question: "Which diagnostic test is most commonly used to detect current HIV infection by identifying viral components?",
    options: [
      "Western blot",
      "ELISA antibody test",
      "PCR for viral RNA",
      "CD4 cell count"
    ],
    correctAnswer: 2,
    explanation: "PCR tests that detect viral RNA are used to diagnose current HIV infection, especially during the window period before antibodies develop."
  },
  {
    id: "medium-15",
    question: "What is the primary reason why RNA viruses generally have higher mutation rates than DNA viruses?",
    options: [
      "RNA viruses are larger than DNA viruses",
      "RNA polymerase lacks proofreading capability",
      "RNA viruses have more complex replication machinery",
      "DNA viruses have better error correction mechanisms in host cells"
    ],
    correctAnswer: 1,
    explanation: "RNA-dependent RNA polymerase used by RNA viruses lacks proofreading capability, leading to higher mutation rates compared to DNA viruses."
  },
  {
    id: "medium-16",
    question: "Which of the following viruses is known to cause cancer by integrating its DNA into the host genome and activating oncogenes?",
    options: [
      "Influenza virus",
      "Human papillomavirus (HPV)",
      "Norovirus",
      "Rabies virus"
    ],
    correctAnswer: 1,
    explanation: "Certain strains of HPV integrate their DNA into the host genome and produce proteins that interfere with tumor suppressor genes, leading to cervical cancer."
  },
  {
    id: "medium-17",
    question: "What is the role of the viral protein VP1 in poliovirus?",
    options: [
      "It functions as RNA-dependent RNA polymerase",
      "It forms the icosahedral capsid structure",
      "It mediates attachment to host cell receptors",
      "It acts as a protease for polyprotein cleavage"
    ],
    correctAnswer: 2,
    explanation: "VP1 is a capsid protein in poliovirus that mediates attachment to specific receptors on host cells, particularly in the gastrointestinal tract."
  },
  {
    id: "medium-18",
    question: "Which of the following statements about HIV drug resistance is correct?",
    options: [
      "It never occurs with proper medication adherence",
      "It can develop due to the high mutation rate of HIV",
      "It only affects protease inhibitors, not other drug classes",
      "It makes the virus more susceptible to other medications"
    ],
    correctAnswer: 1,
    explanation: "HIV's high mutation rate during replication can lead to drug-resistant variants, especially when medication adherence is inconsistent."
  },
  {
    id: "medium-19",
    question: "What is the significance of the neuraminidase enzyme in influenza virus pathogenesis?",
    options: [
      "It helps the virus attach to host cells",
      "It facilitates the release of new viral particles from infected cells",
      "It converts viral RNA to DNA",
      "It integrates viral genetic material into host genome"
    ],
    correctAnswer: 1,
    explanation: "Neuraminidase cleaves sialic acid residues, allowing newly formed influenza viruses to be released from infected cells and spread to new cells."
  },
  {
    id: "medium-20",
    question: "Which of the following best describes a viroid?",
    options: [
      "A complete virus with protein coat and nucleic acid",
      "A defective virus that requires helper virus for replication",
      "A small infectious RNA molecule without a protein coat",
      "An infectious protein particle"
    ],
    correctAnswer: 2,
    explanation: "Viroids are small, circular, infectious RNA molecules that lack a protein coat and primarily infect plants."
  },
  {
    id: "medium-21",
    question: "What is the primary cellular target of HIV that leads to immunodeficiency?",
    options: [
      "Red blood cells",
      "CD8+ cytotoxic T-cells",
      "CD4+ helper T-cells",
      "Neutrophils"
    ],
    correctAnswer: 2,
    explanation: "HIV primarily targets and destroys CD4+ helper T-cells, which are crucial for coordinating the immune response, leading to immunodeficiency."
  },
  {
    id: "medium-22",
    question: "Which of the following statements about viral reassortment is correct?",
    options: [
      "It occurs only in DNA viruses",
      "It requires fragmentation and rejoining of viral genomes",
      "It can occur in viruses with segmented genomes when two different strains infect the same cell",
      "It is the same as antigenic drift"
    ],
    correctAnswer: 2,
    explanation: "Reassortment occurs when two different strains of a virus with segmented genomes infect the same cell, exchanging genome segments to create novel variants."
  },
  {
    id: "medium-23",
    question: "What is the function of the viral protein Tat in HIV replication?",
    options: [
      "It acts as a reverse transcriptase",
      "It functions as a transcriptional transactivator",
      "It serves as a protease for protein cleavage",
      "It forms the viral capsid"
    ],
    correctAnswer: 1,
    explanation: "Tat (Transactivator of transcription) is an HIV regulatory protein that enhances viral transcription by promoting processive elongation of viral RNA."
  },
  {
    id: "medium-24",
    question: "Which of the following is a characteristic feature of retroviruses?",
    options: [
      "They have a DNA genome that replicates directly",
      "They use reverse transcriptase to produce DNA from RNA",
      "They always cause immediate cell lysis",
      "They cannot integrate into host genome"
    ],
    correctAnswer: 1,
    explanation: "Retroviruses are RNA viruses that use reverse transcriptase to produce DNA from their RNA genome, which then integrates into the host cell's DNA."
  },
  {
    id: "medium-25",
    question: "What is the significance of the window period in HIV testing?",
    options: [
      "It is the time when viral load is highest",
      "It is the period between infection and seroconversion when tests may be negative",
      "It refers to the time when AIDS symptoms first appear",
      "It is the optimal time for treatment initiation"
    ],
    correctAnswer: 1,
    explanation: "The window period is the time between HIV infection and when antibodies become detectable by standard tests, during which false-negative results may occur."
  },
  {
    id: "medium-26",
    question: "Which of the following mechanisms contributes to the genetic diversity of HIV?",
    options: [
      "Low mutation rate due to proofreading enzymes",
      "Error-prone reverse transcriptase and rapid replication",
      "Stable genome with minimal recombination",
      "DNA proofreading by host enzymes"
    ],
    correctAnswer: 1,
    explanation: "HIV's error-prone reverse transcriptase and rapid replication cycle contribute to high genetic diversity through mutations and recombination events."
  },
  {
    id: "medium-27",
    question: "What is the role of the viral protein Nef in HIV pathogenesis?",
    options: [
      "It enhances viral entry into cells",
      "It downregulates CD4 and MHC class I molecules from cell surface",
      "It functions as the main structural protein of the capsid",
      "It acts as the reverse transcriptase enzyme"
    ],
    correctAnswer: 1,
    explanation: "Nef (Negative factor) downregulates CD4 and MHC class I molecules from the cell surface, helping HIV evade immune detection and enhancing viral pathogenicity."
  },
  {
    id: "medium-28",
    question: "Which of the following best describes a satellite virus?",
    options: [
      "A virus that can replicate independently in host cells",
      "A defective virus that requires a helper virus for replication",
      "A virus that exclusively infects satellites",
      "A virus with a unique double-stranded DNA genome"
    ],
    correctAnswer: 1,
    explanation: "Satellite viruses are defective viruses that require a helper virus to provide essential functions for replication, such as hepatitis D virus which needs hepatitis B virus."
  },
  {
    id: "medium-29",
    question: "What is the primary mechanism by which HIV evades the host immune system?",
    options: [
      "Production of decoy viruses",
      "Antigenic variation through high mutation rate",
      "Destruction of all immune cells simultaneously",
      "Production of immunosuppressive toxins"
    ],
    correctAnswer: 1,
    explanation: "HIV's high mutation rate leads to antigenic variation, allowing it to continuously evade host immune responses by altering its surface proteins."
  },
  {
    id: "medium-30",
    question: "Which of the following statements about viral latency is correct?",
    options: [
      "It occurs only in DNA viruses",
      "During latency, the virus is actively replicating and causing symptoms",
      "Latent viruses can reactivate under certain conditions",
      "RNA viruses are more likely to establish latency than DNA viruses"
    ],
    correctAnswer: 2,
    explanation: "Viral latency is a state where the virus remains dormant in host cells without active replication, but can reactivate under certain conditions like immunosuppression."
  },
  {
    id: "medium-31",
    question: "What is the significance of the gag gene in retroviruses?",
    options: [
      "It codes for envelope glycoproteins",
      "It encodes structural proteins of the viral core",
      "It produces reverse transcriptase enzyme",
      "It regulates viral integration into host genome"
    ],
    correctAnswer: 1,
    explanation: "The gag gene in retroviruses encodes structural proteins that form the viral core, including matrix, capsid, and nucleocapsid proteins."
  },
  {
    id: "medium-32",
    question: "Which of the following is a characteristic feature of positive-sense RNA viruses?",
    options: [
      "Their RNA can directly serve as mRNA for protein synthesis",
      "They must carry RNA-dependent DNA polymerase in the virion",
      "Their RNA is complementary to mRNA and must be transcribed first",
      "They have a DNA intermediate during replication"
    ],
    correctAnswer: 0,
    explanation: "Positive-sense RNA viruses have genomes that can directly function as mRNA for translation into viral proteins upon entering the host cell."
  },
  {
    id: "medium-33",
    question: "What is the role of the CXCR4 co-receptor in HIV infection?",
    options: [
      "It is the primary receptor for viral attachment",
      "It serves as a co-receptor for T-tropic HIV strains",
      "It inhibits viral entry into cells",
      "It functions as a protease for viral protein cleavage"
    ],
    correctAnswer: 1,
    explanation: "CXCR4 serves as a co-receptor for T-tropic (X4) HIV strains that primarily infect T-lymphocytes, working in conjunction with CD4."
  },
  {
    id: "medium-34",
    question: "Which of the following statements about viral envelopes is correct?",
    options: [
      "They are composed entirely of viral-encoded proteins",
      "They are acquired from the host cell membrane during budding",
      "They make viruses more resistant to drying and disinfectants",
      "All viruses possess an envelope"
    ],
    correctAnswer: 1,
    explanation: "Viral envelopes are derived from the host cell membrane (or occasionally other membranes) during the budding process and contain viral glycoproteins."
  },
  {
    id: "medium-35",
    question: "What is the primary function of the Rev protein in HIV replication?",
    options: [
      "It acts as a reverse transcriptase",
      "It regulates the export of unspliced viral RNA from nucleus",
      "It functions as a protease for polyprotein cleavage",
      "It mediates viral attachment to host cells"
    ],
    correctAnswer: 1,
    explanation: "Rev regulates the export of unspliced and partially spliced viral RNA from the nucleus to the cytoplasm, allowing production of structural proteins and genomic RNA."
  },
  {
    id: "medium-36",
    question: "Which of the following best describes the phenomenon of antibody-dependent enhancement (ADE) in viral infections?",
    options: [
      "Antibodies completely neutralize the virus",
      "Antibodies enhance viral entry into cells through Fc receptors",
      "Antibodies prevent viral attachment to host cells",
      "Antibodies promote faster viral clearance"
    ],
    correctAnswer: 1,
    explanation: "In ADE, non-neutralizing antibodies bind to virus particles and facilitate their entry into cells via Fc receptors, potentially enhancing infection severity."
  },
  {
    id: "medium-37",
    question: "What is the significance of the pol gene in retroviruses?",
    options: [
      "It encodes envelope glycoproteins",
      "It produces structural proteins of the viral core",
      "It codes for viral enzymes including reverse transcriptase and integrase",
      "It regulates viral latency"
    ],
    correctAnswer: 2,
    explanation: "The pol gene in retroviruses encodes essential viral enzymes including reverse transcriptase, integrase, and protease."
  },
  {
    id: "medium-38",
    question: "Which of the following statements about viral oncogenes is correct?",
    options: [
      "They are derived from host cell proto-oncogenes",
      "They are unique viral genes with no host counterparts",
      "They function to suppress tumor formation",
      "They are found only in DNA viruses"
    ],
    correctAnswer: 0,
    explanation: "Viral oncogenes are often derived from captured host cell proto-oncogenes that have been modified to promote uncontrolled cell growth and division."
  },
  {
    id: "medium-39",
    question: "What is the role of the viral protein Vpu in HIV replication?",
    options: [
      "It enhances viral entry into cells",
      "It facilitates CD4 degradation and enhances virion release",
      "It functions as the main protease enzyme",
      "It forms the viral envelope"
    ],
    correctAnswer: 1,
    explanation: "Vpu promotes degradation of CD4 receptors in the endoplasmic reticulum and enhances virion release from infected cells by counteracting host restriction factors."
  },
  {
    id: "medium-40",
    question: "Which of the following is a characteristic feature of negative-sense RNA viruses?",
    options: [
      "Their genome can directly serve as mRNA",
      "They must carry RNA-dependent RNA polymerase in the virion",
      "They replicate through a DNA intermediate",
      "They have lower mutation rates than DNA viruses"
    ],
    correctAnswer: 1,
    explanation: "Negative-sense RNA viruses must carry RNA-dependent RNA polymerase in the virion to transcribe their genome into positive-sense mRNA upon entering the host cell."
  },
  {
    id: "medium-41",
    question: "What is the significance of the long terminal repeats (LTRs) in retroviruses?",
    options: [
      "They code for viral structural proteins",
      "They contain regulatory elements for viral transcription and integration",
      "They form the viral envelope",
      "They function as reverse transcriptase enzymes"
    ],
    correctAnswer: 1,
    explanation: "LTRs contain promoter, enhancer, and polyadenylation signals that regulate viral transcription and contain sequences important for integration into host DNA."
  },
  {
    id: "medium-42",
    question: "Which of the following mechanisms contributes to the high genetic variability of influenza viruses?",
    options: [
      "DNA proofreading by host enzymes",
      "Segmented genome allowing reassortment",
      "Stable genome with minimal recombination",
      "Low mutation rate due to accurate replication"
    ],
    correctAnswer: 1,
    explanation: "Influenza viruses have a segmented genome that allows for genetic reassortment when different strains infect the same cell, contributing to high genetic variability."
  },
  {
    id: "medium-43",
    question: "What is the role of the viral protein Vpr in HIV infection?",
    options: [
      "It functions as a reverse transcriptase",
      "It facilitates nuclear import of the viral pre-integration complex",
      "It acts as a protease for polyprotein cleavage",
      "It mediates viral attachment to host cells"
    ],
    correctAnswer: 1,
    explanation: "Vpr facilitates nuclear import of the viral pre-integration complex in non-dividing cells and induces cell cycle arrest at the G2 phase."
  },
  {
    id: "medium-44",
    question: "Which of the following best describes the phenomenon of superinfection exclusion in viruses?",
    options: [
      "A virus prevents infection by other viruses of the same type",
      "A virus enhances infection by other viruses",
      "A virus changes its host range completely",
      "A virus integrates into multiple sites in the host genome"
    ],
    correctAnswer: 0,
    explanation: "Superinfection exclusion occurs when a primary viral infection prevents subsequent infection by similar viruses, often through modification of host cell receptors or resources."
  },
  {
    id: "medium-45",
    question: "What is the significance of the hemagglutinin (HA) protein in influenza virus?",
    options: [
      "It functions as a neuraminidase enzyme",
      "It mediates viral attachment to sialic acid receptors on host cells",
      "It acts as an ion channel protein",
      "It serves as the RNA-dependent RNA polymerase"
    ],
    correctAnswer: 1,
    explanation: "Hemagglutinin mediates influenza virus attachment to sialic acid receptors on host cells and facilitates viral entry through membrane fusion."
  },
  {
    id: "medium-46",
    question: "Which of the following statements about viral persistence is correct?",
    options: [
      "It only occurs with DNA viruses",
      "It involves continuous viral replication without host cell damage",
      "It always leads to immediate cell lysis",
      "It is impossible for RNA viruses to establish persistence"
    ],
    correctAnswer: 1,
    explanation: "Viral persistence involves continuous viral replication without immediately destroying the host cell, allowing long-term infection."
  },
  {
    id: "medium-47",
    question: "What is the role of the viral protein NS1 in influenza virus pathogenesis?",
    options: [
      "It forms the viral capsid",
      "It functions as an interferon antagonist",
      "It acts as the neuraminidase enzyme",
      "It serves as the hemagglutinin protein"
    ],
    correctAnswer: 1,
    explanation: "NS1 protein counteracts host interferon response by inhibiting cellular antiviral mechanisms, enhancing viral replication and pathogenicity."
  },
  {
    id: "medium-48",
    question: "Which of the following is a characteristic feature of double-stranded RNA viruses?",
    options: [
      "They replicate in the host cell nucleus",
      "They must carry RNA-dependent RNA polymerase in the virion",
      "Their genome can directly serve as mRNA",
      "They have a DNA intermediate during replication"
    ],
    correctAnswer: 1,
    explanation: "Double-stranded RNA viruses must carry RNA-dependent RNA polymerase in the virion as their genome cannot be directly translated by host machinery."
  },
  {
    id: "medium-49",
    question: "What is the significance of the error-prone nature of viral RNA-dependent RNA polymerases?",
    options: [
      "It allows for rapid evolution and adaptation of RNA viruses",
      "It makes RNA viruses more stable than DNA viruses",
      "It prevents the development of drug resistance",
      "It ensures accurate replication of viral genomes"
    ],
    correctAnswer: 0,
    explanation: "The error-prone nature of RNA-dependent RNA polymerases contributes to high mutation rates in RNA viruses, allowing rapid evolution and adaptation to new environments."
  },
  {
    id: "medium-50",
    question: "Which of the following statements about viral tropism is correct?",
    options: [
      "It is determined solely by the viral capsid structure",
      "It refers to the specific cell types or species a virus can infect",
      "All viruses have broad tropism and can infect any cell type",
      "Tropism is unrelated to viral receptor usage"
    ],
    correctAnswer: 1,
    explanation: "Viral tropism refers to the specificity of viruses for particular cell types or host species, largely determined by receptor availability and host cell factors."
  },
  // Additional questions would continue here until 100 total...
  {
    id: "medium-51",
    question: "What is the primary mechanism by which nucleoside reverse transcriptase inhibitors (NRTIs) work against HIV?",
    options: [
      "They block viral entry into host cells",
      "They inhibit the integration of viral DNA into host genome",
      "They act as chain terminators during DNA synthesis",
      "They prevent viral budding from host cells"
    ],
    correctAnswer: 2,
    explanation: "NRTIs are analogs of natural nucleosides that lack a 3'-OH group, causing chain termination when incorporated during reverse transcription."
  },
  {
    id: "medium-52",
    question: "Which of the following best describes the function of viral fusion proteins?",
    options: [
      "They facilitate the merging of viral and host cell membranes",
      "They package viral genetic material into capsids",
      "They cleave viral polyproteins into functional units",
      "They replicate the viral genome"
    ],
    correctAnswer: 0,
    explanation: "Viral fusion proteins facilitate the fusion of viral and host cell membranes, allowing viral entry into the cell."
  },
  {
    id: "medium-53",
    question: "What is the significance of quasispecies in RNA virus populations?",
    options: [
      "They represent genetically identical virus particles",
      "They are defective viruses that cannot replicate",
      "They are a mixture of genetically related but distinct variants",
      "They are viruses that have integrated into host genome"
    ],
    correctAnswer: 2,
    explanation: "Quasispecies are diverse populations of genetically related viral variants that arise due to high mutation rates, providing adaptability to changing environments."
  },
  {
    id: "medium-54",
    question: "Which of the following statements about viral latency is correct?",
    options: [
      "During latency, no viral genes are expressed",
      "Latent viruses can reactivate under conditions of immunosuppression",
      "Only DNA viruses can establish latency",
      "Latency always leads to immediate cell death"
    ],
    correctAnswer: 1,
    explanation: "Latent viruses can reactivate when host immune surveillance is compromised, such as during immunosuppression or stress."
  },
  {
    id: "medium-55",
    question: "What is the role of the viral protein Vif in HIV replication?",
    options: [
      "It enhances viral entry into cells",
      "It counteracts host APOBEC3G antiviral activity",
      "It functions as the main protease enzyme",
      "It forms the viral matrix protein"
    ],
    correctAnswer: 1,
    explanation: "Vif counteracts the host APOBEC3G protein, which would otherwise cause hypermutations in the viral genome during reverse transcription."
  },
  {
    id: "medium-56",
    question: "Which of the following is a characteristic feature of the replication strategy of hepadnaviruses like Hepatitis B?",
    options: [
      "They use an RNA-dependent RNA polymerase for replication",
      "They replicate through an RNA intermediate using reverse transcriptase",
      "They directly use their DNA genome for transcription without replication",
      "They have a purely lytic replication cycle"
    ],
    correctAnswer: 1,
    explanation: "Hepadnaviruses replicate through an RNA intermediate using virus-encoded reverse transcriptase, despite having a DNA genome."
  },
  {
    id: "medium-57",
    question: "What is the significance of the viral load test in monitoring HIV infection?",
    options: [
      "It measures the number of CD4+ T-cells",
      "It quantifies the amount of HIV RNA in blood",
      "It detects HIV-specific antibodies",
      "It identifies drug-resistant mutations"
    ],
    correctAnswer: 1,
    explanation: "Viral load tests measure the amount of HIV RNA in blood, providing information about viral replication activity and treatment effectiveness."
  },
  {
    id: "medium-58",
    question: "Which of the following best describes the function of viral receptor-binding proteins?",
    options: [
      "They replicate the viral genome",
      "They mediate attachment to specific host cell receptors",
      "They form the viral envelope",
      "They package viral genetic material"
    ],
    correctAnswer: 1,
    explanation: "Viral receptor-binding proteins specifically recognize and attach to receptors on host cells, determining viral tropism and facilitating entry."
  },
  {
    id: "medium-59",
    question: "What is the role of the viral protein p6 in HIV?",
    options: [
      "It functions as reverse transcriptase",
      "It facilitates viral budding by interacting with host ESCRT machinery",
      "It acts as the main protease enzyme",
      "It mediates viral attachment to host cells"
    ],
    correctAnswer: 1,
    explanation: "The p6 protein contains late domains that interact with host ESCRT machinery to facilitate viral budding and release from infected cells."
  },
  {
    id: "medium-60",
    question: "Which of the following statements about viral evolution is correct?",
    options: [
      "RNA viruses evolve slower than DNA viruses due to proofreading",
      "Viral evolution is solely driven by genetic drift",
      "High mutation rates in RNA viruses facilitate rapid evolution",
      "Viruses cannot evolve resistance to antiviral drugs"
    ],
    correctAnswer: 2,
    explanation: "The high mutation rates of RNA viruses, due to error-prone replication, facilitate rapid evolution and adaptation to new selective pressures."
  },
  {
  id: "medium-61",
  question: "What is the primary function of the viral matrix protein in enveloped viruses?",
  options: [
    "It mediates attachment to host cell receptors",
    "It provides structural support and links the capsid to the envelope",
    "It functions as the RNA-dependent RNA polymerase",
    "It acts as a protease for polyprotein cleavage"
  ],
  correctAnswer: 1,
  explanation: "The matrix protein provides structural stability and serves as a link between the viral nucleocapsid and the envelope, facilitating assembly and budding."
},
{
  id: "medium-62",
  question: "Which of the following best describes the mechanism of action of fusion inhibitors in HIV treatment?",
  options: [
    "They inhibit reverse transcriptase activity",
    "They prevent viral integration into host genome",
    "They block the conformational changes needed for viral fusion with host cells",
    "They inhibit viral protease function"
  ],
  correctAnswer: 2,
  explanation: "Fusion inhibitors prevent the conformational changes in viral envelope proteins required for membrane fusion, thereby blocking viral entry into host cells."
},
{
  id: "medium-63",
  question: "What is the significance of the error threshold concept in RNA virus evolution?",
  options: [
    "It represents the maximum mutation rate beyond which viral fitness declines",
    "It indicates the minimum number of mutations required for host adaptation",
    "It defines the exact mutation rate for optimal viral replication",
    "It determines the number of viral particles needed to establish infection"
  ],
  correctAnswer: 0,
  explanation: "The error threshold concept suggests that RNA viruses operate near the maximum mutation rate that still maintains genetic information, beyond which excessive mutations lead to loss of viability."
},
{
  id: "medium-64",
  question: "Which of the following statements about viral reassortment is correct?",
  options: [
    "It occurs only in DNA viruses with circular genomes",
    "It requires fragmentation and religation of viral genomes",
    "It can generate novel viral strains with pandemic potential",
    "It is the same as antigenic drift but occurs more slowly"
  ],
  correctAnswer: 2,
  explanation: "Reassortment in viruses with segmented genomes can create novel combinations of gene segments, potentially generating strains with new antigenic properties and pandemic potential."
},
{
  id: "medium-65",
  question: "What is the role of the viral protein NSP1 in rotavirus pathogenesis?",
  options: [
    "It forms the outer capsid layer",
    "It inhibits host interferon response and protein synthesis",
    "It functions as the RNA-dependent RNA polymerase",
    "It mediates attachment to intestinal cells"
  ],
  correctAnswer: 1,
  explanation: "NSP1 acts as a virulence factor by inhibiting host interferon response and shutting down host protein synthesis, facilitating viral replication."
},
{
  id: "medium-66",
  question: "Which of the following best describes the phenomenon of receptor interference?",
  options: [
    "A virus enhances the expression of its receptor on host cells",
    "Primary viral infection downregulates receptors, preventing secondary infection",
    "Viruses compete for different receptors on the same cell",
    "Antibodies block viral access to receptors"
  ],
  correctAnswer: 1,
  explanation: "Receptor interference occurs when a primary viral infection downregulates or modifies its receptor, preventing subsequent infection by similar viruses using the same receptor."
},
{
  id: "medium-67",
  question: "What is the significance of the viral non-structural proteins?",
  options: [
    "They form the viral structural components",
    "They are involved in viral replication and modulation of host response",
    "They constitute the viral envelope",
    "They are only present in defective viruses"
  ],
  correctAnswer: 1,
  explanation: "Non-structural proteins are typically involved in viral replication, transcription, and modulation of host cell functions, rather than forming structural components."
},
{
  id: "medium-68",
  question: "Which of the following mechanisms contributes to HIV's ability to establish latent infection?",
  options: [
    "Integration into transcriptionally silent regions of host genome",
    "Formation of extrachromosomal episomes",
    "Rapid destruction of all infected cells",
    "Inability to integrate into host DNA"
  ],
  correctAnswer: 0,
  explanation: "HIV can establish latency by integrating into transcriptionally silent regions of the host genome, where viral gene expression is minimal until activation signals occur."
},
{
  id: "medium-69",
  question: "What is the role of the viral protein VPg in picornaviruses?",
  options: [
    "It functions as a primer for RNA synthesis",
    "It mediates viral attachment to host cells",
    "It forms the icosahedral capsid",
    "It acts as a protease for polyprotein cleavage"
  ],
  correctAnswer: 0,
  explanation: "VPg (Viral Protein genome-linked) serves as a protein primer for RNA synthesis in picornaviruses, covalently linked to the 5' end of viral RNA."
},
{
  id: "medium-70",
  question: "Which of the following statements about viral evolution is correct?",
  options: [
    "DNA viruses have higher mutation rates than RNA viruses",
    "RNA viruses evolve more rapidly due to error-prone replication",
    "Viral evolution is solely dependent on host factors",
    "All viruses evolve at approximately the same rate"
  ],
  correctAnswer: 1,
  explanation: "RNA viruses generally evolve more rapidly than DNA viruses due to the error-prone nature of RNA-dependent RNA polymerases that lack proofreading ability."
},
{
  id: "medium-71",
  question: "What is the significance of the viral tegument in herpesviruses?",
  options: [
    "It forms the outer envelope of the virus",
    "It contains regulatory proteins that are released into the host cell",
    "It functions as the viral capsid",
    "It mediates attachment to host receptors"
  ],
  correctAnswer: 1,
  explanation: "The tegument is a protein-rich layer between the capsid and envelope in herpesviruses, containing regulatory proteins that are released into the host cell upon infection."
},
{
  id: "medium-72",
  question: "Which of the following best describes the mechanism of antigenic drift in influenza viruses?",
  options: [
    "Reassortment of genome segments between different strains",
    "Gradual accumulation of mutations in surface proteins",
    "Integration of host DNA into viral genome",
    "Complete change of viral envelope structure"
  ],
  correctAnswer: 1,
  explanation: "Antigenic drift involves the gradual accumulation of mutations in hemagglutinin and neuraminidase genes, leading to minor changes in surface proteins."
},
{
  id: "medium-73",
  question: "What is the role of the viral protein E6 in human papillomavirus (HPV) oncogenesis?",
  options: [
    "It inhibits host p53 tumor suppressor protein",
    "It functions as a DNA polymerase",
    "It mediates viral attachment to host cells",
    "It forms the viral capsid"
  ],
  correctAnswer: 0,
  explanation: "The E6 protein of high-risk HPV types binds to and promotes degradation of the p53 tumor suppressor, contributing to uncontrolled cell growth and oncogenesis."
},
{
  id: "medium-74",
  question: "Which of the following statements about viral quasispecies is correct?",
  options: [
    "They represent genetically identical viral populations",
    "They are a mixture of closely related but genetically distinct variants",
    "They occur only in DNA viruses",
    "They are always less fit than individual viral clones"
  ],
  correctAnswer: 1,
  explanation: "Viral quasispecies are complex populations of closely related but genetically diverse variants that arise due to error-prone replication, providing adaptive advantage."
},
{
  id: "medium-75",
  question: "What is the significance of the viral RNA secondary structures in replication?",
  options: [
    "They serve as packaging signals for virion assembly",
    "They function as internal ribosome entry sites (IRES) for translation",
    "They act as promoters for RNA synthesis",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Viral RNA secondary structures can serve multiple functions including packaging signals, IRES elements for cap-independent translation, and promoters for RNA synthesis."
},
{
  id: "medium-76",
  question: "Which of the following best describes the function of viral ion channel proteins?",
  options: [
    "They facilitate viral entry through membrane fusion",
    "They modulate host cell environment to favor viral replication",
    "They package viral genetic material into capsids",
    "They mediate viral attachment to host receptors"
  ],
  correctAnswer: 1,
  explanation: "Viral ion channel proteins (viroporins) modify host cell membranes and create ion gradients that facilitate viral replication, assembly, and release."
},
{
  id: "medium-77",
  question: "What is the role of the viral protein E1A in adenovirus transformation?",
  options: [
    "It activates viral DNA replication",
    "It binds to and inactivates host retinoblastoma (Rb) protein",
    "It functions as a protease for polyprotein cleavage",
    "It mediates viral attachment to host cells"
  ],
  correctAnswer: 1,
  explanation: "Adenovirus E1A protein binds to and inactivates host Rb tumor suppressor protein, driving cell cycle progression and contributing to cellular transformation."
},
{
  id: "medium-78",
  question: "Which of the following mechanisms contributes to the persistence of hepatitis B virus (HBV) infection?",
  options: [
    "Formation of covalently closed circular DNA (cccDNA) in nucleus",
    "Rapid destruction of all infected hepatocytes",
    "Inability to integrate into host genome",
    "Exclusive extrahepatic replication"
  ],
  correctAnswer: 0,
  explanation: "HBV establishes persistence through formation of cccDNA in the nucleus of hepatocytes, which serves as a stable template for transcription."
},
{
  id: "medium-79",
  question: "What is the significance of the viral RNA cap-snatching mechanism?",
  options: [
    "It allows viruses to steal host mRNA caps for viral transcription",
    "It facilitates viral RNA packaging into capsids",
    "It mediates viral attachment to host cells",
    "It prevents host RNA degradation"
  ],
  correctAnswer: 0,
  explanation: "Cap-snatching is used by some RNA viruses (e.g., influenza) to cleave and use the 5' cap from host mRNAs to initiate viral transcription."
},
{
  id: "medium-80",
  question: "Which of the following statements about viral latency is correct?",
  options: [
    "Latent viruses are always completely inactive with no gene expression",
    "MicroRNAs often play a role in maintaining viral latency",
    "Only DNA viruses can establish latency",
    "Latency inevitably leads to cell death upon reactivation"
  ],
  correctAnswer: 1,
  explanation: "Many latent viruses use microRNAs to regulate viral gene expression and maintain latency without triggering immune detection."
},
{
  id: "medium-81",
  question: "What is the role of the viral protein Tax in human T-lymphotropic virus (HTLV) pathogenesis?",
  options: [
    "It functions as reverse transcriptase",
    "It transactivates viral and host genes promoting cell proliferation",
    "It mediates viral attachment to host cells",
    "It forms the viral capsid"
  ],
  correctAnswer: 1,
  explanation: "HTLV Tax protein transactivates viral transcription and modulates host cell signaling pathways, leading to increased cell proliferation and contributing to leukemogenesis."
},
{
  id: "medium-82",
  question: "Which of the following best describes the mechanism of viral genome packaging?",
  options: [
    "Random incorporation of nucleic acids into capsids",
    "Sequence-specific recognition of packaging signals",
    "Host enzyme-mediated selective packaging",
    "Energy-independent passive diffusion"
  ],
  correctAnswer: 1,
  explanation: "Most viruses use sequence-specific recognition of packaging signals in their genomes to ensure selective and efficient incorporation into capsids."
},
{
  id: "medium-83",
  question: "What is the significance of the viral RNA-dependent RNA polymerase fidelity?",
  options: [
    "It determines the mutation rate and evolutionary potential of RNA viruses",
    "It affects the size of the viral genome",
    "It determines the type of host cell infected",
    "It regulates viral attachment efficiency"
  ],
  correctAnswer: 0,
  explanation: "The fidelity of RNA-dependent RNA polymerase directly influences viral mutation rates, which affects adaptability, evolution, and pathogenesis of RNA viruses."
},
{
  id: "medium-84",
  question: "Which of the following statements about viral satellite RNAs is correct?",
  options: [
    "They can replicate independently of helper viruses",
    "They modulate symptoms caused by helper viruses",
    "They are always beneficial to the host plant",
    "They encode all proteins needed for replication"
  ],
  correctAnswer: 1,
  explanation: "Satellite RNAs depend on helper viruses for replication but can modulate disease symptoms, sometimes attenuating or exacerbating pathogenesis."
},
{
  id: "medium-85",
  question: "What is the role of the viral protein NS5A in hepatitis C virus (HCV) replication?",
  options: [
    "It functions as the RNA-dependent RNA polymerase",
    "It plays a role in viral replication complex formation and interferon resistance",
    "It mediates viral attachment to host cells",
    "It forms the viral envelope"
  ],
  correctAnswer: 1,
  explanation: "HCV NS5A protein is a multifunctional phosphoprotein that participates in replication complex formation and contributes to interferon resistance."
},
{
  id: "medium-86",
  question: "Which of the following mechanisms contributes to HIV's ability to evade antibody neutralization?",
  options: [
    "Extensive glycosylation of envelope proteins",
    "Production of decoy viral particles",
    "Rapid destruction of B-cells",
    "Inability to stimulate antibody production"
  ],
  correctAnswer: 0,
  explanation: "Extensive glycosylation of HIV envelope proteins creates a shield that hinders antibody access to conserved neutralization epitopes."
},
{
  id: "medium-87",
  question: "What is the significance of the viral RNA pseudoknot structures?",
  options: [
    "They mediate ribosomal frameshifting during translation",
    "They function as ion channels in host membranes",
    "They facilitate viral attachment to host cells",
    "They package viral RNA into capsids"
  ],
  correctAnswer: 0,
  explanation: "RNA pseudoknot structures can induce ribosomal frameshifting, allowing synthesis of different proteins from the same RNA sequence in some viruses."
},
{
  id: "medium-88",
  question: "Which of the following best describes the function of viral miRNA during latency?",
  options: [
    "They promote active viral replication",
    "They regulate viral and host gene expression to maintain latency",
    "They facilitate viral assembly and release",
    "They mediate viral attachment to host cells"
  ],
  correctAnswer: 1,
  explanation: "Viral miRNAs can fine-tune viral and host gene expression to maintain latency without triggering immune responses or lytic replication."
},
{
  id: "medium-89",
  question: "What is the role of the viral protein E7 in human papillomavirus (HPV) oncogenesis?",
  options: [
    "It inhibits host p53 tumor suppressor",
    "It binds to and inactivates host retinoblastoma (Rb) protein",
    "It functions as a DNA polymerase",
    "It mediates viral integration into host genome"
  ],
  correctAnswer: 1,
  explanation: "HPV E7 protein binds to and promotes degradation of Rb tumor suppressor protein, disrupting cell cycle control and contributing to oncogenesis."
},
{
  id: "medium-90",
  question: "Which of the following statements about viral evolution in response to antiviral drugs is correct?",
  options: [
    "Viruses cannot develop resistance to antiviral drugs",
    "Resistance develops through selective pressure favoring pre-existing or new mutations",
    "Resistance only occurs with monotherapy never with combination therapy",
    "RNA viruses cannot develop resistance due to high fidelity replication"
  ],
  correctAnswer: 1,
  explanation: "Antiviral drug resistance develops through selective pressure that favors viral variants with mutations that reduce drug effectiveness, either pre-existing or newly acquired."
},
{
  id: "medium-91",
  question: "What is the significance of the viral RNA capping mechanism?",
  options: [
    "It protects viral RNA from degradation and facilitates translation",
    "It mediates viral attachment to host cells",
    "It packages RNA into capsids",
    "It facilitates viral RNA integration into host genome"
  ],
  correctAnswer: 0,
  explanation: "Viral RNA capping protects against exonucleolytic degradation and facilitates recognition by translation initiation factors, enhancing protein synthesis."
},
{
  id: "medium-92",
  question: "Which of the following best describes the mechanism of viral genome circularization?",
  options: [
    "It facilitates rolling circle replication in some DNA viruses",
    "It prevents viral replication entirely",
    "It mediates viral attachment to host cells",
    "It promotes viral RNA degradation"
  ],
  correctAnswer: 0,
  explanation: "Circularization of viral genomes, through complementary ends or protein priming, facilitates rolling circle replication in some DNA viruses."
},
{
  id: "medium-93",
  question: "What is the role of the viral protein Vpx in HIV-2 and some SIV strains?",
  options: [
    "It counteracts host SAMHD1 restriction factor",
    "It functions as reverse transcriptase",
    "It mediates viral attachment to host cells",
    "It forms the viral matrix protein"
  ],
  correctAnswer: 0,
  explanation: "Vpx counteracts the host SAMHD1 protein, which restricts viral replication in myeloid cells by reducing dNTP pools."
},
{
  id: "medium-94",
  question: "Which of the following statements about viral recombination is correct?",
  options: [
    "It only occurs in DNA viruses",
    "It can generate novel viral variants with new properties",
    "It requires direct physical contact between viruses",
    "It is less significant than mutation in viral evolution"
  ],
  correctAnswer: 1,
  explanation: "Viral recombination, through template switching or reassortment, can create novel combinations of genetic material, generating variants with new properties."
},
{
  id: "medium-95",
  question: "What is the significance of the viral RNA 3' poly(A) tail?",
  options: [
    "It mediates viral attachment to host cells",
    "It protects against degradation and enhances translation",
    "It functions as a packaging signal",
    "It facilitates viral integration into host genome"
  ],
  correctAnswer: 1,
  explanation: "The poly(A) tail protects viral RNA from exonucleolytic degradation and enhances translation efficiency by interacting with poly(A)-binding proteins."
},
{
  id: "medium-96",
  question: "Which of the following best describes the function of viral RNA silencing suppressors?",
  options: [
    "They enhance host RNA interference pathway",
    "They counteract host RNAi antiviral defense mechanism",
    "They facilitate viral RNA degradation",
    "They mediate viral attachment to host cells"
  ],
  correctAnswer: 1,
  explanation: "Many plant viruses encode RNA silencing suppressors that counteract the host RNA interference pathway, which would otherwise degrade viral RNA."
},
{
  id: "medium-97",
  question: "What is the role of the viral protein pX in HTLV-1 pathogenesis?",
  options: [
    "It functions as reverse transcriptase",
    "It encodes regulatory proteins including Tax and Rex",
    "It forms the viral capsid",
    "It mediates viral attachment to host cells"
  ],
  correctAnswer: 1,
  explanation: "The pX region of HTLV-1 encodes regulatory proteins including Tax (transactivator) and Rex (RNA export regulator), which are crucial for viral replication and pathogenesis."
},
{
  id: "medium-98",
  question: "Which of the following mechanisms contributes to the persistence of herpesviruses?",
  options: [
    "Establishment of latency in specific cell types with periodic reactivation",
    "Continuous lytic replication in all infected cells",
    "Rapid mutation of surface proteins to evade immunity",
    "Integration into host germline DNA"
  ],
  correctAnswer: 0,
  explanation: "Herpesviruses establish lifelong persistence through latency in specific cell types (e.g., neurons or lymphocytes) with periodic reactivation."
},
{
  id: "medium-99",
  question: "What is the significance of the viral RNA 5' untranslated region (UTR)?",
  options: [
    "It may contain internal ribosome entry sites (IRES) for translation",
    "It mediates viral attachment to host cells",
    "It functions as the viral protease",
    "It packages RNA into capsids"
  ],
  correctAnswer: 0,
  explanation: "The 5' UTR of many viral RNAs contains structural elements such as IRES that facilitate cap-independent translation initiation."
},
{
  id: "medium-100",
  question: "Which of the following statements about viral host range is correct?",
  options: [
    "It is determined solely by viral capsid structure",
    "It can evolve through mutations in receptor-binding proteins",
    "All viruses have broad host ranges",
    "Host range is fixed and cannot change"
  ],
  correctAnswer: 1,
  explanation: "Viral host range can evolve through mutations in proteins involved in receptor recognition, entry, or replication, allowing adaptation to new hosts."
}
];
export const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "Which of the following molecular mechanisms best explains how HIV's reverse transcriptase contributes to the high genetic diversity of the virus?",
    options: [
      "It has a proofreading exonuclease domain that intentionally introduces mutations",
      "Its error-prone nature results from lack of 3'→5' exonuclease activity and low processivity",
      "It preferentially incorporates mutagenic nucleotide analogs during DNA synthesis",
      "It induces host DNA repair enzymes to introduce errors in viral cDNA"
    ],
    correctAnswer: 1,
    explanation: "HIV reverse transcriptase lacks 3'→5' exonuclease proofreading activity and has low processivity, resulting in approximately 1 error per 10^4-10^5 nucleotides incorporated, contributing significantly to viral diversity."
  },
  {
    id: "hard-2",
    question: "In the context of viral evolution, what is the primary significance of the 'error threshold' concept for RNA viruses?",
    options: [
      "It represents the maximum mutation rate beyond which genetic information cannot be maintained",
      "It indicates the minimum mutation rate required for host species jumping",
      "It defines the exact error rate that maximizes antiviral resistance",
      "It determines the maximum genome size possible for RNA viruses"
    ],
    correctAnswer: 0,
    explanation: "The error threshold concept describes the maximum mutation rate beyond which genetic information cannot be maintained due to the accumulation of deleterious mutations leading to population collapse (Muller's ratchet)."
  },
  {
    id: "hard-3",
    question: "Which of the following best describes the mechanism by which HIV's Vpu protein enhances viral particle release?",
    options: [
      "It directly recruits ESCRT machinery to the plasma membrane",
      "It counteracts the host restriction factor tetherin (CD317/BST-2)",
      "It activates host phospholipase D to modify membrane composition",
      "It inhibits host lysosomal degradation of viral particles"
    ],
    correctAnswer: 1,
    explanation: "Vpu counteracts the host restriction factor tetherin, which normally traps viral particles at the cell surface, by downregulating it from the plasma membrane and targeting it for degradation."
  },
  {
    id: "hard-4",
    question: "What is the structural basis for the broad neutralizing antibody CR3022's ability to recognize conserved epitopes on SARS-CoV-2 spike protein?",
    options: [
      "It targets the receptor-binding domain (RBD) in its 'up' conformation only",
      "It recognizes cryptic epitopes exposed during conformational changes",
      "It binds to glycosylation sites that are highly conserved across coronaviruses",
      "It interacts with fusion peptide regions that show minimal mutation"
    ],
    correctAnswer: 1,
    explanation: "CR3022 recognizes conserved cryptic epitopes on the SARS-CoV-2 spike protein that are exposed during conformational changes, allowing it to neutralize diverse variants despite mutations in dominant epitopes."
  },
  {
    id: "hard-5",
    question: "Which of the following molecular mechanisms explains how hepatitis delta virus (HDV), a satellite virus, exploits hepatitis B virus (HBV) for its replication?",
    options: [
      "HDV uses HBV's reverse transcriptase for its RNA replication",
      "HDV utilizes HBV envelope proteins for virion assembly and release",
      "HDV incorporates HBV DNA into its ribonucleoprotein complex",
      "HDV depends on HBV's RNA-dependent RNA polymerase for replication"
    ],
    correctAnswer: 1,
    explanation: "HDV utilizes HBV envelope proteins (HBsAg) for packaging its ribonucleoprotein complex and forming infectious virions, while replicating its RNA genome using host RNA polymerase II."
  },
  {
    id: "hard-6",
    question: "What is the precise mechanism by which the APOBEC3 family of cytidine deaminases restricts HIV replication, and how does HIV counteract this?",
    options: [
      "APOBEC3 proteins deaminate viral cDNA cytidines to uridines, causing hypermutation; HIV Vif protein targets APOBEC3 for proteasomal degradation",
      "APOBEC3 proteins cleave viral RNA; HIV Nef protein inhibits APOBEC3 translation",
      "APOBEC3 proteins methylate viral DNA; HIV Tat protein prevents APOBEC3 nuclear import",
      "APOBEC3 proteins ubiquitinate viral capsid; HIV Vpr protein sequesters APOBEC3 in cytoplasm"
    ],
    correctAnswer: 0,
    explanation: "APOBEC3 proteins deaminate cytidine to uridine in viral minus-strand DNA, causing G-to-A hypermutation; HIV Vif protein forms an E3 ubiquitin ligase complex that targets APOBEC3 for proteasomal degradation."
  },
  {
    id: "hard-7",
    question: "Which of the following best describes the quantum mechanical aspects of proton transfer in influenza virus M2 ion channel function?",
    options: [
      "Proton hopping through water molecules in the channel via Grotthuss mechanism",
      "Quantum tunneling of protons through activation barriers",
      "Electron transfer coupled with protonation of histidine residues",
      "Superconductive proton transport through aligned water wires"
    ],
    correctAnswer: 0,
    explanation: "The influenza M2 channel facilitates proton conduction primarily through the Grotthuss mechanism, where protons hop between water molecules in a hydrogen-bonded network within the channel pore."
  },
  {
    id: "hard-8",
    question: "How does the concept of 'quasispecies' in RNA viruses differ fundamentally from classical population genetics models?",
    options: [
      "Quasispecies theory emphasizes the population as a dynamic mutant spectrum rather than individual genotypes",
      "Quasispecies are characterized by complete genetic homogeneity with rare mutations",
      "It assumes infinite population size and no selection pressure",
      "It applies only to DNA viruses with proofreading enzymes"
    ],
    correctAnswer: 0,
    explanation: "Quasispecies theory describes viral populations as dynamic distributions of mutants where the population behavior emerges from interactions between variants, contrasting with classical models that focus on individual genotypes competing independently."
  },
  {
    id: "hard-9",
    question: "What is the structural basis for the broad-spectrum antiviral activity of nucleoside analogs like remdesivir against RNA viruses?",
    options: [
      "They mimic natural nucleosides but cause immediate chain termination after incorporation",
      "They act as competitive inhibitors of viral RNA cap formation",
      "They are incorporated by viral RNA-dependent RNA polymerases and cause delayed chain termination",
      "They specifically target viral helicase activity without affecting replication"
    ],
    correctAnswer: 2,
    explanation: "Remdesivir is incorporated by viral RNA-dependent RNA polymerases where it acts as a delayed chain terminator, adding several more nucleotides after incorporation before stalling replication, which contributes to its broad-spectrum activity."
  },
  {
    id: "hard-10",
    question: "Which of the following accurately describes the mechanism of CRISPR-Cas9 based antiviral strategies against DNA viruses?",
    options: [
      "CRISPR guide RNAs target viral mRNA for degradation without affecting DNA",
      "Cas9 introduces double-strand breaks at specific sequences in viral DNA genomes",
      "CRISPR systems activate RNA interference pathways against viral replication",
      "Cas9 proteins directly inhibit viral polymerase activity"
    ],
    correctAnswer: 1,
    explanation: "CRISPR-Cas9 systems can be programmed with guide RNAs to target specific sequences in viral DNA genomes, where Cas9 introduces precise double-strand breaks, leading to viral genome degradation."
  },
  {
    id: "hard-11",
    question: "What is the molecular mechanism by which the SARS-CoV-2 Nsp1 protein suppresses host translation?",
    options: [
      "It cleaves host mRNA and blocks the mRNA entry channel of the ribosome",
      "It inhibits eukaryotic initiation factor 4E (eIF4E) cap binding",
      "It activates protein kinase R (PKR) leading to eIF2α phosphorylation",
      "It degrades ribosomal proteins through ubiquitination"
    ],
    correctAnswer: 0,
    explanation: "SARS-CoV-2 Nsp1 protein cleaves host mRNAs and physically blocks the mRNA entry channel of the 40S ribosomal subunit, effectively shutting down host translation while allowing viral translation to proceed."
  },
  {
    id: "hard-12",
    question: "Which of the following best explains the phenomenon of 'antigenic seniority' in influenza virus immunity?",
    options: [
      "The first influenza strain encountered in childhood creates the strongest immune imprinting",
      "Older individuals have more experienced immune systems that respond better to new strains",
      "Recent infections always provide better protection than childhood infections",
      "Antibodies from previous infections enhance rather than inhibit new infections"
    ],
    correctAnswer: 0,
    explanation: "Antigenic seniority refers to the immunological imprinting phenomenon where the first influenza virus strain encountered in childhood induces the strongest and most persistent immune response, shaping responses to subsequent infections."
  },
  {
    id: "hard-13",
    question: "What is the precise mechanism by which the HIV Tat protein enhances viral transcription through the TAR RNA element?",
    options: [
      "Tat binds TAR and recruits positive transcription elongation factor b (P-TEFb) to promote transcriptional elongation",
      "Tat cleaves TAR RNA to release paused RNA polymerase II",
      "Tat methylates histones near the integrated provirus to open chromatin",
      "Tat functions as a helicase to unwind secondary structures in viral RNA"
    ],
    correctAnswer: 0,
    explanation: "HIV Tat binds the transactivation response (TAR) RNA element and recruits P-TEFb (CDK9/cyclin T1), which phosphorylates the C-terminal domain of RNA polymerase II, promoting transcriptional elongation."
  },
  {
    id: "hard-14",
    question: "Which of the following describes the quantum biological aspects of long-range electron transfer in viral capsid assembly?",
    options: [
      "Quantum coherence in aromatic amino acid residues facilitates precise capsomer assembly",
      "Electron tunneling between cysteine residues stabilizes capsid protein interactions",
      "Proton-coupled electron transfer regulates pH-dependent capsid disassembly",
      "Superexchange mechanisms mediate long-range interactions between capsid proteins"
    ],
    correctAnswer: 3,
    explanation: "Theoretical models suggest that superexchange mechanisms, where electrons tunnel through intermediate residues, may facilitate long-range interactions between viral capsid proteins during assembly, though this remains an area of active research."
  },
  {
    id: "hard-15",
    question: "What is the structural basis for the broad neutralizing activity of antibodies targeting the hemagglutinin stem region in influenza viruses?",
    options: [
      "The stem region is highly variable between influenza strains",
      "The stem region is structurally conserved and less prone to antigenic drift",
      "Stem-targeting antibodies induce conformational changes that disrupt fusion activity",
      "Stem antibodies preferentially bind to uncleaved hemagglutinin precursors"
    ],
    correctAnswer: 1,
    explanation: "The stem region of hemagglutinin is structurally conserved across influenza strains and undergoes less antigenic drift than the head region, making it an attractive target for broadly neutralizing antibodies."
  },
  {
    id: "hard-16",
    question: "Which of the following accurately describes the mechanism of 'ribosome frameshifting' in coronavirus replication?",
    options: [
      "A slippery sequence and RNA pseudoknot structure cause ribosomal frameshifting to access alternative reading frames",
      "Viral proteases cleave ribosomal proteins to alter translation reading frames",
      "RNA secondary structures block ribosome progression, forcing frame changes",
      "Viral RNA polymerases incorporate alternative nucleotides during replication"
    ],
    correctAnswer: 0,
    explanation: "Coronaviruses use a slippery sequence (UUUAAAC) followed by a complex RNA pseudoknot structure that causes ribosomal frameshifting, allowing access to alternative reading frames and regulating the production of viral proteins."
  },
  {
    id: "hard-17",
    question: "What is the molecular mechanism by which the hepatitis C virus (HCV) NS3/4A protease disrupts host innate immune signaling?",
    options: [
      "It cleaves mitochondrial antiviral signaling protein (MAVS) to disrupt RIG-I signaling",
      "It degrades pattern recognition receptors (PRRs) through ubiquitination",
      "It inhibits JAK-STAT signaling by dephosphorylating STAT proteins",
      "It cleaves interferon receptors to prevent signal transduction"
    ],
    correctAnswer: 0,
    explanation: "HCV NS3/4A protease cleaves MAVS (also known as IPS-1, Cardif, or VISA) at the mitochondrial membrane, disrupting RIG-I-mediated signaling and interferon production."
  },
  {
    id: "hard-18",
    question: "Which of the following best describes the epigenetic modifications that regulate herpesvirus latency and reactivation?",
    options: [
      "Latent viral genomes are associated with repressive heterochromatin marks that are replaced with active marks during reactivation",
      "Herpesvirus genomes remain completely unmethylated during both latency and reactivation",
      "Reactivating viruses lose all epigenetic modifications and become transcriptionally hyperactive",
      "Histone acetylation maintains latency while methylation promotes reactivation"
    ],
    correctAnswer: 0,
    explanation: "During latency, herpesvirus genomes are associated with repressive heterochromatin marks (H3K9me3, H3K27me3); reactivation involves replacement with active marks (H3K4me3, H3K9ac) through chromatin remodeling complexes."
  },
  {
    id: "hard-19",
    question: "What is the precise mechanism by which the SARS-CoV-2 furin cleavage site enhances viral infectivity?",
    options: [
      "It allows priming of the spike protein by host proteases during viral entry",
      "It facilitates viral RNA replication by recruiting host replication factors",
      "It enhances virion packaging efficiency through better capsid assembly",
      "It prevents antibody recognition of the receptor-binding domain"
    ],
    correctAnswer: 0,
    explanation: "The furin cleavage site in SARS-CoV-2 spike protein allows pre-activation by host furin-like proteases during viral egress, enhancing subsequent entry efficiency by reducing dependence on target cell proteases."
  },
  {
    id: "hard-20",
    question: "Which of the following describes the role of liquid-liquid phase separation in viral replication compartments?",
    options: [
      "Viral proteins form biomolecular condensates that concentrate replication machinery",
      "Phase separation prevents viral RNA from interacting with host factors",
      "It facilitates viral exit from cells by creating membrane-less organelles",
      "Phase separation exclusively occurs during viral latency to silence replication"
    ],
    correctAnswer: 0,
    explanation: "Many viruses exploit liquid-liquid phase separation to form biomolecular condensates that concentrate viral and host factors required for replication, enhancing the efficiency of viral genome replication and assembly."
  },
  {
    id: "hard-21",
    question: "What is the molecular basis for the specificity of CRISPR-Cas13 systems against RNA viruses?",
    options: [
      "Cas13 uses guide RNAs to target and cleave specific viral RNA sequences",
      "Cas13 methylates viral RNA to mark it for degradation by host enzymes",
      "Cas13 proteins directly inhibit viral RNA-dependent RNA polymerases",
      "Cas13 unwinds viral RNA secondary structures to expose hidden epitopes"
    ],
    correctAnswer: 0,
    explanation: "CRISPR-Cas13 systems use guide RNAs to program Cas13 enzymes to target and cleave specific viral RNA sequences, providing a programmable defense against RNA viruses."
  },
  {
    id: "hard-22",
    question: "Which of the following accurately describes the mechanism of 'cap-snatching' in influenza virus transcription?",
    options: [
      "Viral polymerase cleaves 5' caps from host mRNAs and uses them to prime viral transcription",
      "Viral proteins steal cap-binding proteins from host translation machinery",
      "The virus encodes its own capping enzymes that modify viral mRNA 5' ends",
      "Cap-snatching refers to the incorporation of capped nucleotides during replication"
    ],
    correctAnswer: 0,
    explanation: "Influenza virus polymerase cleaves 5' caps from host mRNAs and uses them as primers to initiate viral mRNA synthesis, a process known as cap-snatching that ensures viral mRNAs are efficiently translated."
  },
  {
    id: "hard-23",
    question: "What is the structural basis for the broad neutralization capacity of antibodies targeting the fusion peptide of HIV envelope protein?",
    options: [
      "The fusion peptide is highly variable between HIV strains",
      "The fusion peptide is hidden until after CD4 binding and not accessible to antibodies",
      "The fusion peptide is structurally conserved across HIV isolates",
      "Fusion peptide antibodies induce conformational changes that inactivate envelope"
    ],
    correctAnswer: 2,
    explanation: "The HIV fusion peptide is structurally conserved across diverse isolates because it plays an essential role in membrane fusion, making it a target for broadly neutralizing antibodies."
  },
  {
    id: "hard-24",
    question: "Which of the following describes the mechanism of 'non-reciprocal recombination' in coronavirus evolution?",
    options: [
      "Template switching during RNA replication leads to copy-choice recombination",
      "DNA repair enzymes mediate recombination between RNA genomes",
      "Viral integrases facilitate recombination between unrelated viruses",
      "Recombination occurs only through DNA intermediate forms"
    ],
    correctAnswer: 0,
    explanation: "Coronaviruses undergo non-reciprocal recombination through template switching during RNA replication (copy-choice recombination), which contributes significantly to their evolutionary potential and emergence of new variants."
  },
  {
    id: "hard-25",
    question: "What is the precise mechanism by which the HIV Vpr protein induces G2 cell cycle arrest?",
    options: [
      "Vpr activates the ATR DNA damage response pathway through interaction with SLX4 complex",
      "Vpr directly inhibits cyclin B1-CDK1 complex formation",
      "Vpr degrades cell cycle regulators through ubiquitin-mediated proteolysis",
      "Vpr induces expression of p21 and p53 tumor suppressor proteins"
    ],
    correctAnswer: 0,
    explanation: "HIV Vpr activates the ATR DNA damage response pathway by engaging the SLX4 complex, leading to G2 cell cycle arrest which may enhance viral replication by modifying the cellular environment."
  },
  {
    id: "hard-26",
    question: "Which of the following best describes the quantum biological perspective on enzyme catalysis in viral polymerases?",
    options: [
      "Quantum tunneling of protons plays a significant role in phosphoryl transfer reactions",
      "Electron entanglement enhances nucleotide selection fidelity",
      "Quantum coherence maintains polymerase processivity through resonance energy transfer",
      "Superposition states allow simultaneous exploration of multiple catalytic pathways"
    ],
    correctAnswer: 0,
    explanation: "Quantum tunneling of protons and hydrogen atoms contributes significantly to enzyme catalysis, including in viral polymerases, where it enhances the rate of phosphoryl transfer reactions during nucleotide incorporation."
  },
  {
    id: "hard-27",
    question: "What is the molecular mechanism by which the SARS-CoV-2 ORF8 protein disrupts MHC class I antigen presentation?",
    options: [
      "ORF8 mediates autophagy-dependent degradation of MHC class I molecules",
      "ORF8 facilitates ubiquitination and proteasomal degradation of MHC class I",
      "ORF8 directly binds to and sequesters MHC class I in the ER",
      "ORF8 downregulates MHC class I gene expression through epigenetic silencing"
    ],
    correctAnswer: 1,
    explanation: "SARS-CoV-2 ORF8 protein facilitates the ubiquitination and proteasomal degradation of MHC class I molecules, reducing antigen presentation and helping the virus evade cytotoxic T-cell responses."
  },
  {
    id: "hard-28",
    question: "Which of the following accurately describes the mechanism of 'translesion synthesis' by viral polymerases?",
    options: [
      "Viral polymerases bypass damaged templates using specialized catalytic domains",
      "Translesion synthesis refers to replication without proofreading activity",
      "Host DNA repair enzymes are recruited to help viral replication past lesions",
      "Viral polymerases completely avoid damaged templates during replication"
    ],
    correctAnswer: 0,
    explanation: "Some viral polymerases have specialized domains that allow them to bypass damaged templates through translesion synthesis, contributing to their ability to replicate in challenging environments."
  },
  {
    id: "hard-29",
    question: "What is the structural basis for the specificity of arenavirus nucleoprotein-RNA interactions?",
    options: [
      "Sequence-specific recognition of viral genomic RNA through structured binding pockets",
      "Non-specific electrostatic interactions with RNA backbone phosphates",
      "Recognition of specific RNA secondary structures rather than sequences",
      "Zinc finger domains that confer sequence-specific RNA binding"
    ],
    correctAnswer: 2,
    explanation: "Arenavirus nucleoproteins recognize specific RNA secondary structures rather than primary sequences, allowing them to distinguish viral from cellular RNAs while accommodating sequence variation."
  },
  {
    id: "hard-30",
    question: "Which of the following describes the mechanism of 'antigenic sin' or 'original antigenic sin' in viral infections?",
    options: [
      "The immune system preferentially recalls responses to previously encountered strains rather than responding optimally to new variants",
      "Previous infections completely prevent immune responses to new viral strains",
      "Antibodies from previous infections enhance neutralization of new variants",
      "Memory B cells undergo apoptosis when encountering variant viruses"
    ],
    correctAnswer: 0,
    explanation: "Original antigenic sin describes the phenomenon where the immune system preferentially recalls responses to previously encountered viral strains, potentially limiting the effectiveness of responses to new variants."
  },
  // Additional questions would continue here until 100 total...
  {
    id: "hard-31",
    question: "What is the molecular mechanism by which the HIV integrase enzyme catalyzes the strand transfer reaction during viral integration?",
    options: [
      "It uses a two-metal-ion mechanism to facilitate nucleophilic attack on host DNA",
      "It directly ligates viral DNA to host DNA without energy requirement",
      "It recruits host DNA repair enzymes to complete the integration process",
      "It functions as a helicase to unwind host DNA at integration sites"
    ],
    correctAnswer: 0,
    explanation: "HIV integrase uses a two-metal-ion mechanism where two magnesium ions coordinate the nucleophilic attack of host DNA on the viral DNA ends, facilitating the strand transfer reaction."
  },
  {
    id: "hard-32",
    question: "Which of the following best describes the role of viral microRNAs in herpesvirus latency maintenance?",
    options: [
      "Viral miRNAs fine-tune the expression of viral and host genes to maintain latency without immune detection",
      "miRNAs directly inhibit viral DNA replication by targeting origin sequences",
      "Viral miRNAs silence host immune genes to prevent detection",
      "miRNAs are only expressed during lytic replication and not during latency"
    ],
    correctAnswer: 0,
    explanation: "Herpesvirus-encoded miRNAs fine-tune the expression of viral and host genes during latency, helping to maintain the dormant state while avoiding immune detection and preventing reactivation."
  },
  {
    id: "hard-33",
    question: "What is the structural basis for the broad-spectrum activity of polymerase inhibitors like favipiravir against RNA viruses?",
    options: [
      "Favipiravir is a purine analog that is recognized as a substrate by diverse viral RNA-dependent RNA polymerases",
      "It directly binds to and inhibits the conserved active site of viral helicases",
      "It functions as a transition state analog for cap-forming enzymes",
      "It targets host factors required for viral replication rather than viral enzymes"
    ],
    correctAnswer: 0,
    explanation: "Favipiravir is a purine analog that is recognized as a substrate by diverse viral RNA-dependent RNA polymerases, where it acts as a mutagenic agent through ambiguous base pairing."
  },
  {
    id: "hard-34",
    question: "Which of the following accurately describes the mechanism of 'ribosome shunting' in viral translation initiation?",
    options: [
      "Ribosomes bypass large segments of the 5' UTR without scanning to initiate at downstream start codons",
      "Viral proteases cleave ribosomal proteins to alter translation initiation specificity",
      "Ribosomes slide along mRNA without codon-anticodon recognition",
      "Shunting refers to the movement of ribosomes between different mRNA molecules"
    ],
    correctAnswer: 0,
    explanation: "Ribosome shunting allows ribosomes to bypass large segments of the 5' UTR without scanning, initiating translation at downstream start codons, a mechanism used by some viruses to translate specific open reading frames."
  },
  {
    id: "hard-35",
    question: "What is the molecular mechanism by which the SARS-CoV-2 N protein facilitates viral genome packaging?",
    options: [
      "N protein recognizes specific packaging signals and mediates RNA condensation through liquid-liquid phase separation",
      "N protein cleaves viral RNA at specific sites to generate packaging-competent fragments",
      "N protein recruits host packaging machinery normally used for cellular RNAs",
      "N protein directly binds to viral envelope proteins to coordinate packaging"
    ],
    correctAnswer: 0,
    explanation: "SARS-CoV-2 nucleocapsid (N) protein recognizes specific packaging signals on viral RNA and facilitates genome condensation through liquid-liquid phase separation, promoting efficient virion assembly."
  },
  {
    id: "hard-36",
    question: "Which of the following describes the role of 'non-canonical' autophagy in viral infection?",
    options: [
      "Some viruses hijack autophagy machinery for non-degradative purposes such as membrane reorganization for replication",
      "Non-canonical autophagy refers to the complete inhibition of all autophagic processes",
      "Viruses use autophagy exclusively for the degradation of host defense proteins",
      "Non-canonical autophagy involves the selective degradation of viral components"
    ],
    correctAnswer: 0,
    explanation: "Some viruses hijack autophagy machinery for non-degradative purposes, such as reorganizing cellular membranes to create replication compartments, in a process known as non-canonical autophagy."
  },
  {
    id: "hard-37",
    question: "What is the precise mechanism by which the influenza virus NS1 protein inhibits host mRNA processing?",
    options: [
      "NS1 binds to and inhibits cleavage and polyadenylation specificity factor (CPSF30)",
      "NS1 directly degrades host mRNAs through its RNase activity",
      "NS1 prevents mRNA export from the nucleus by blocking nuclear pores",
      "NS1 inhibits splicing by binding to spliceosomal components"
    ],
    correctAnswer: 0,
    explanation: "Influenza NS1 protein binds to and inhibits cleavage and polyadenylation specificity factor 30 (CPSF30), disrupting host mRNA processing and export while allowing viral mRNA processing to proceed."
  },
  {
    id: "hard-38",
    question: "Which of the following best describes the quantum biological aspects of photosensitized viral inactivation?",
    options: [
      "Photosensitizers generate singlet oxygen through energy transfer that damages viral components",
      "Quantum dots directly incorporate into viral genomes causing replication errors",
      "Light-induced electron excitation disrupts quantum coherence in viral proteins",
      "Photosensitization works exclusively through thermal effects on viral envelopes"
    ],
    correctAnswer: 0,
    explanation: "Photosensitizers absorb light and transfer energy to molecular oxygen, generating singlet oxygen that oxidatively damages viral proteins, lipids, and nucleic acids, inactivating the virus."
  },
  {
    id: "hard-39",
    question: "What is the molecular mechanism by which the HIV Nef protein enhances viral infectivity?",
    options: [
      "Nef downregulates CD4 and MHC class I from the cell surface and enhances virion infectivity through unknown mechanisms",
      "Nef directly incorporates into virions and facilitates membrane fusion",
      "Nef cleaves host restriction factors during viral assembly",
      "Nef functions as a chaperone for proper envelope protein folding"
    ],
    correctAnswer: 0,
    explanation: "HIV Nef enhances viral infectivity through multiple mechanisms including downregulation of CD4 and MHC class I, and modulation of cellular signaling pathways that improve virion maturation and infectivity."
  },
  {
    id: "hard-40",
    question: "Which of the following accurately describes the mechanism of 'frame-restoring' mutations in viral evolution?",
    options: [
      "Secondary mutations that restore the correct reading frame after a frameshift mutation",
      "Mutations that prevent ribosomal frameshifting from occurring",
      "Mutations in RNA structure that enhance frameshifting efficiency",
      "Mutations that create new open reading frames without changing existing ones"
    ],
    correctAnswer: 0,
    explanation: "Frame-restoring mutations are compensatory mutations that restore the original reading frame after a frameshift mutation, allowing functional protein production despite the initial mutation."
  },
  // Continuing with additional questions until 100...
  {
    id: "hard-41",
    question: "What is the structural basis for the specificity of viral receptor-binding proteins for their host receptors?",
    options: [
      "Complementary shape and charge distribution at the protein-protein interface",
      "Non-specific hydrophobic interactions with host membrane lipids",
      "Covalent bonding between viral and host proteins",
      "Sequence homology between viral and host proteins"
    ],
    correctAnswer: 0,
    explanation: "Viral receptor-binding proteins achieve specificity through complementary shape and charge distribution at the protein-protein interface, allowing precise molecular recognition of host receptors."
  },
  {
    id: "hard-42",
    question: "Which of the following describes the mechanism of 'trans-complementation' in defective viral particles?",
    options: [
      "Functional proteins from co-infecting viruses complement defects in viral genomes",
      "Host proteins replace missing viral functions in defective particles",
      "Defective viruses undergo recombination to restore functionality",
      "Trans-complementation refers to the packaging of host RNA in virions"
    ],
    correctAnswer: 0,
    explanation: "Trans-complementation occurs when functional proteins provided by co-infecting viruses complement defects in viral genomes, allowing defective particles to complete their replication cycle."
  },
  {
    id: "hard-43",
    question: "What is the molecular mechanism by which the SARS-CoV-2 PLpro protease disrupts host ubiquitination?",
    options: [
      "PLpro has deubiquitinating activity that removes ubiquitin from host proteins",
      "PLpro inhibits ubiquitin-activating enzymes (E1) through competitive binding",
      "PLpro degrades ubiquitin molecules through its protease activity",
      "PLpro prevents ubiquitin conjugation to viral proteins specifically"
    ],
    correctAnswer: 0,
    explanation: "SARS-CoV-2 papain-like protease (PLpro) has deubiquitinating activity that removes ubiquitin from host proteins, disrupting various cellular processes including immune signaling."
  },
  {
    id: "hard-44",
    question: "Which of the following best describes the role of 'non-structural' proteins in the formation of viral replication complexes?",
    options: [
      "They induce membrane rearrangements and recruit viral and host factors to create replication organelles",
      "They function exclusively as enzymes for genome replication without structural roles",
      "They form the physical scaffold for virion assembly outside replication complexes",
      "They are incorporated into virions and facilitate entry into new cells"
    ],
    correctAnswer: 0,
    explanation: "Viral non-structural proteins often induce membrane rearrangements and recruit viral and host factors to create specialized replication organelles where efficient genome replication occurs."
  },
  {
    id: "hard-45",
    question: "What is the precise mechanism by which the hepatitis B virus (HBV) core protein regulates viral replication?",
    options: [
      "Core protein phosphorylation state controls the switch between genome replication and packaging",
      "Core protein degrades viral RNA to terminate replication cycles",
      "Core protein directly inhibits viral reverse transcriptase activity",
      "Core protein functions as a transcription factor for viral genes"
    ],
    correctAnswer: 0,
    explanation: "The phosphorylation state of HBV core protein regulates its function, controlling the switch between roles in genome replication (less phosphorylated) and packaging into virions (more phosphorylated)."
  },
  {
    id: "hard-46",
    question: "Which of the following describes the quantum biological perspective on long-range electron transfer in viral redox reactions?",
    options: [
      "Quantum tunneling enables electron transfer over longer distances than classical theory predicts",
      "Electron transfer occurs exclusively through direct contact between redox centers",
      "Quantum effects are negligible in biological electron transfer processes",
      "Viral electron transfer always involves sequential hopping through fixed pathways"
    ],
    correctAnswer: 0,
    explanation: "Quantum tunneling allows electrons to transfer over longer distances than predicted by classical theory, potentially playing a role in viral redox reactions involving metalloproteins or photosynthetic components."
  },
  {
    id: "hard-47",
    question: "What is the molecular mechanism by which the HIV Vif protein counteracts the APOBEC3 family of restriction factors?",
    options: [
      "Vif recruits an E3 ubiquitin ligase complex to target APOBEC3 for proteasomal degradation",
      "Vif directly binds to and sequesters APOBEC3 in cellular compartments",
      "Vif cleaves APOBEC3 proteins using its protease activity",
      "Vif induces expression of APOBEC3 inhibitors"
    ],
    correctAnswer: 0,
    explanation: "HIV Vif protein recruits the CUL5-E3 ubiquitin ligase complex to polyubiquitinate APOBEC3 proteins, targeting them for proteasomal degradation and preventing their antiviral activity."
  },
  {
    id: "hard-48",
    question: "Which of the following accurately describes the mechanism of 'RNA editing' in some viral infections?",
    options: [
      "Host deaminases introduce mutations in viral RNA genomes through enzymatic modification",
      "Viral polymerases intentionally incorporate incorrect nucleotides during replication",
      "RNA editing refers to the splicing of viral RNA by host machinery",
      "Viral RNAs are edited by host enzymes to make them non-functional"
    ],
    correctAnswer: 0,
    explanation: "Host deaminases like ADAR and APOBEC can introduce mutations in viral RNA genomes through enzymatic modification of nucleotides, a process known as RNA editing."
  },
  {
    id: "hard-49",
    question: "What is the structural basis for the broad neutralizing activity of antibodies targeting the CD4-binding site of HIV envelope?",
    options: [
      "The CD4-binding site is highly variable between HIV isolates",
      "The CD4-binding site is structurally conserved but surrounded by variable loops",
      "CD4-binding site antibodies induce conformational changes that inactivate envelope",
      "These antibodies actually target glycan shields rather than the CD4-binding site"
    ],
    correctAnswer: 1,
    explanation: "The CD4-binding site on HIV envelope is structurally conserved but surrounded by variable loops, allowing some broadly neutralizing antibodies to target this site while avoiding variable regions."
  },
  {
    id: "hard-50",
    question: "Which of the following describes the mechanism of 'ribosome skipping' or 'stop-carry on' translation in viruses?",
    options: [
      "2A peptides cause ribosomal skipping that results in separate protein production from a single ORF",
      "Ribosomes physically detach from mRNA and reattach at downstream sites",
      "Viral proteases cleave polyproteins while they are still being translated",
      "Ribosomal frameshifting allows translation through stop codons"
    ],
    correctAnswer: 0,
    explanation: "2A peptides cause ribosomal skipping where the ribosome continues translation but fails to form a peptide bond, resulting in separate protein production from a single open reading frame."
  },
  {
  id: "hard-51",
  question: "What is the molecular mechanism by which the SARS-CoV-2 ORF3a protein induces apoptosis and inflammasome activation?",
  options: [
    "ORF3a activates the NLRP3 inflammasome by promoting K+ efflux and mitochondrial ROS production",
    "ORF3a directly cleaves caspase-1 to activate the inflammasome",
    "ORF3a inhibits autophagy, leading to accumulation of damaged mitochondria and apoptosis",
    "ORF3a functions as a viroporin that disrupts lysosomal membrane integrity"
  ],
  correctAnswer: 0,
  explanation: "SARS-CoV-2 ORF3a activates the NLRP3 inflammasome by promoting potassium efflux and mitochondrial reactive oxygen species production, leading to caspase-1 activation and IL-1β/IL-18 secretion."
},
{
  id: "hard-52",
  question: "Which of the following describes the mechanism of 'template switching' during coronavirus RNA replication?",
  options: [
    "The viral polymerase detaches from one template and resumes synthesis on another RNA molecule",
    "Host recombinases mediate exchange of RNA segments between different viruses",
    "Template switching occurs only during DNA replication and not in RNA viruses",
    "Viral helicases unwind RNA secondary structures to allow template access"
  ],
  correctAnswer: 0,
  explanation: "Coronavirus RNA-dependent RNA polymerase can detach from one template and resume synthesis on another RNA molecule, facilitating recombination between different viral genomes."
},
{
  id: "hard-53",
  question: "What is the structural basis for the broad neutralizing activity of antibodies targeting the silent face of influenza hemagglutinin?",
  options: [
    "The silent face is highly variable between influenza strains",
    "The silent face contains conserved epitopes that are less accessible to antibodies",
    "Silent face antibodies induce conformational changes that disrupt receptor binding",
    "This region is not actually targeted by any known antibodies"
  ],
  correctAnswer: 1,
  explanation: "The silent face of influenza hemagglutinin contains conserved epitopes that are less accessible to antibodies due to steric hindrance, making it a challenging but valuable target for broadly neutralizing antibodies."
},
{
  id: "hard-54",
  question: "Which of the following accurately describes the mechanism of 'ribosome profiling' in studying viral translation?",
  options: [
    "It involves deep sequencing of ribosome-protected mRNA fragments to map translation dynamics",
    "It uses fluorescent tags to visualize ribosome movement in real time",
    "It measures the efficiency of ribosomal frameshifting events",
    "It analyzes the phosphorylation state of ribosomal proteins during infection"
  ],
  correctAnswer: 0,
  explanation: "Ribosome profiling involves deep sequencing of ribosome-protected mRNA fragments, providing genome-wide information about translation dynamics during viral infection."
},
{
  id: "hard-55",
  question: "What is the molecular mechanism by which the HIV Tat protein promotes viral transcription elongation?",
  options: [
    "Tat recruits P-TEFb to phosphorylate the CTD of RNA polymerase II",
    "Tat functions as a helicase to unwind DNA secondary structures",
    "Tat methylates histones to create open chromatin configurations",
    "Tat directly binds to and activates viral promoters"
  ],
  correctAnswer: 0,
  explanation: "HIV Tat recruits positive transcription elongation factor b (P-TEFb), which phosphorylates the C-terminal domain of RNA polymerase II, promoting transcriptional elongation of viral genes."
},
{
  id: "hard-56",
  question: "Which of the following describes the quantum biological aspects of flavivirus capsid assembly?",
  options: [
    "Quantum coherence in aromatic residues facilitates precise protein-protein interactions",
    "Electron tunneling between cysteine residues stabilizes capsid dimers",
    "Proton transfer reactions regulate pH-dependent capsid disassembly",
    "Quantum effects are negligible in viral assembly processes"
  ],
  correctAnswer: 0,
  explanation: "Theoretical models suggest that quantum coherence in aromatic amino acid residues may facilitate precise protein-protein interactions during flavivirus capsid assembly, though this remains an area of active research."
},
{
  id: "hard-57",
  question: "What is the precise mechanism by which the SARS-CoV-2 Nsp3 macrodomain antagonizes host ADP-ribosylation signaling?",
  options: [
    "It hydrolyzes ADP-ribose modifications from host proteins",
    "It inhibits poly(ADP-ribose) polymerase (PARP) activity",
    "It sequesters NAD+ to prevent ADP-ribosylation reactions",
    "It functions as an ADP-ribosyltransferase that modifies host proteins"
  ],
  correctAnswer: 0,
  explanation: "SARS-CoV-2 Nsp3 macrodomain hydrolyzes ADP-ribose modifications from host proteins, counteracting antiviral ADP-ribosylation signaling pathways."
},
{
  id: "hard-58",
  question: "Which of the following best describes the mechanism of 'antigenic cartography' in influenza surveillance?",
  options: [
    "It creates multidimensional maps of antigenic relationships between viral strains",
    "It uses CRISPR technology to edit viral antigens",
    "It involves structural modeling of antibody-antigen interactions",
    "It measures the physical size of antigenic determinants"
  ],
  correctAnswer: 0,
  explanation: "Antigenic cartography creates multidimensional maps of antigenic relationships between influenza strains based on hemagglutination inhibition data, helping track viral evolution and vaccine strain selection."
},
{
  id: "hard-59",
  question: "What is the molecular basis for the specificity of viral RNA-dependent RNA polymerases for their templates?",
  options: [
    "Recognition of specific promoter sequences and secondary structures",
    "Non-specific binding to any RNA molecule with correct length",
    "Interaction with host factors that confer template specificity",
    "Recognition of 5' cap structures only"
  ],
  correctAnswer: 0,
  explanation: "Viral RNA-dependent RNA polymerases recognize specific promoter sequences and secondary structures in their templates, ensuring replication of viral rather than host RNAs."
},
{
  id: "hard-60",
  question: "Which of the following describes the mechanism of 'translation-independent antigen presentation' in viral infections?",
  options: [
    "Antigens from incoming virions are processed and presented without de novo protein synthesis",
    "Ribosomes directly present viral antigens to T cells",
    "Viral RNA is presented as antigen without translation",
    "This process only occurs for DNA viruses and not RNA viruses"
  ],
  correctAnswer: 0,
  explanation: "Translation-independent antigen presentation involves processing and presentation of antigens from incoming virions without requiring de novo protein synthesis, allowing rapid immune detection of viral entry."
},
{
  id: "hard-61",
  question: "What is the structural basis for the broad-spectrum activity of polymerase inhibitors like molnupiravir?",
  options: [
    "It acts as a mutagenic nucleoside analog that increases error catastrophe",
    "It directly inhibits the catalytic site of viral polymerases",
    "It functions as a chain terminator that blocks elongation",
    "It targets host polymerases to prevent viral replication"
  ],
  correctAnswer: 0,
  explanation: "Molnupiravir acts as a mutagenic nucleoside analog that is incorporated into viral RNA, increasing the mutation rate beyond the error threshold and leading to error catastrophe."
},
{
  id: "hard-62",
  question: "Which of the following accurately describes the mechanism of 'riboswitch' regulation in viral RNA genomes?",
  options: [
    "Structural changes in RNA in response to metabolites regulate gene expression",
    "Riboswitches control ribosomal frameshifting events",
    "They are protein complexes that switch between different RNA templates",
    "Riboswitches only function in DNA viruses"
  ],
  correctAnswer: 0,
  explanation: "Some viral RNAs contain riboswitches—structural elements that change conformation in response to metabolites, regulating gene expression through alternative splicing, transcription termination, or translation initiation."
},
{
  id: "hard-63",
  question: "What is the molecular mechanism by which the hepatitis C virus (HCV) core protein regulates lipid metabolism?",
  options: [
    "Core protein recruits lipid droplets and modulates lipogenic gene expression",
    "It functions as a lipase that hydrolyzes triglycerides",
    "Core protein inhibits cholesterol synthesis through HMG-CoA reductase inhibition",
    "It directly incorporates into cellular membranes as a viroporin"
  ],
  correctAnswer: 0,
  explanation: "HCV core protein recruits lipid droplets and modulates expression of lipogenic genes, creating a lipid-rich environment favorable for viral replication and assembly."
},
{
  id: "hard-64",
  question: "Which of the following describes the quantum biological perspective on energy transfer in viral photosynthetic components?",
  options: [
    "Quantum coherence may enhance energy transfer efficiency in viral photosynthetic proteins",
    "Viral photosynthesis relies exclusively on classical energy transfer mechanisms",
    "Quantum effects are negligible in biological energy transfer processes",
    "Viruses do not encode any photosynthetic components"
  ],
  correctAnswer: 0,
  explanation: "Some giant viruses encode photosynthetic components, and theoretical models suggest quantum coherence may enhance energy transfer efficiency in these systems, though experimental evidence is limited."
},
{
  id: "hard-65",
  question: "What is the precise mechanism by which the HIV Vpu protein downregulates CD4 receptor expression?",
  options: [
    "Vpu recruits β-TrCP to ubiquitinate CD4, targeting it for ER-associated degradation",
    "Vpu directly cleaves CD4 in the endoplasmic reticulum",
    "Vpu inhibits CD4 gene transcription through epigenetic silencing",
    "Vpu functions as a protease that degrades surface CD4"
  ],
  correctAnswer: 0,
  explanation: "HIV Vpu recruits the β-TrCP E3 ubiquitin ligase complex to ubiquitinate CD4, targeting it for endoplasmic reticulum-associated degradation and preventing surface expression."
},
{
  id: "hard-66",
  question: "Which of the following best describes the mechanism of 'RNA interference' as an antiviral defense?",
  options: [
    "Small RNAs guide the cleavage of complementary viral RNA sequences",
    "RNA interference prevents viral entry by blocking receptors",
    "It involves the degradation of viral DNA genomes",
    "RNA interference only works against DNA viruses"
  ],
  correctAnswer: 0,
  explanation: "RNA interference uses small RNAs (siRNAs or miRNAs) to guide the cleavage of complementary viral RNA sequences, serving as an important antiviral defense mechanism in plants and invertebrates."
},
{
  id: "hard-67",
  question: "What is the structural basis for the specificity of viral fusion peptides in membrane disruption?",
  options: [
    "Amphipathic character allows insertion into lipid bilayers and promotion of curvature",
    "Fusion peptides specifically bind to cholesterol-rich membrane domains",
    "They function as enzymes that hydrolyze phospholipids",
    "Fusion peptides recognize specific protein receptors in membranes"
  ],
  correctAnswer: 0,
  explanation: "Viral fusion peptides typically have amphipathic character that allows insertion into lipid bilayers, promoting membrane curvature and fusion through hydrophobic interactions."
},
{
  id: "hard-68",
  question: "Which of the following accurately describes the mechanism of 'translesion synthesis' in viral genome replication?",
  options: [
    "Specialized polymerases replicate past damaged templates with reduced fidelity",
    "Translesion synthesis involves skipping damaged regions entirely",
    "It requires complete degradation and re-synthesis of damaged genomes",
    "Translesion synthesis only occurs in DNA viruses with proofreading ability"
  ],
  correctAnswer: 0,
  explanation: "Some viruses encode specialized translesion synthesis polymerases that can replicate past damaged templates with reduced fidelity, allowing survival in challenging environments."
},
{
  id: "hard-69",
  question: "What is the molecular mechanism by which the SARS-CoV-2 Nsp14 protein provides proofreading activity?",
  options: [
    "Nsp14 has 3'→5' exonuclease activity that removes misincorporated nucleotides",
    "Nsp14 functions as a mismatch repair protein that scans newly synthesized RNA",
    "Nsp14 recruits host DNA repair enzymes to correct RNA errors",
    "Nsp14 induces degradation of error-containing RNA molecules"
  ],
  correctAnswer: 0,
  explanation: "SARS-CoV-2 Nsp14 has 3'→5' exonuclease activity that removes misincorporated nucleotides, providing proofreading capability unusual for RNA viruses."
},
{
  id: "hard-70",
  question: "Which of the following describes the quantum biological aspects of viral capsid symmetry?",
  options: [
    "Quantum calculations predict optimal packing arrangements for viral genomes",
    "Quantum effects determine the exact number of capsomeres in icosahedral viruses",
    "Electron delocalization stabilizes protein-protein interfaces in capsids",
    "Quantum biology has no relevance to viral symmetry principles"
  ],
  correctAnswer: 2,
  explanation: "Theoretical models suggest that electron delocalization in aromatic residues may contribute to stabilizing protein-protein interfaces in viral capsids, though this remains an area of active investigation."
},
{
  id: "hard-71",
  question: "What is the precise mechanism by which the influenza virus PA-X protein regulates host gene expression?",
  options: [
    "PA-X is an endonuclease that cleaves host mRNAs, suppressing gene expression",
    "PA-X functions as a transcription factor that activates viral genes",
    "PA-X inhibits nuclear export of host mRNAs",
    "PA-X degrades host ribosomes to prevent translation"
  ],
  correctAnswer: 0,
  explanation: "Influenza PA-X protein is an endonuclease that cleaves host mRNAs, contributing to host shutoff and immune evasion by suppressing cellular gene expression."
},
{
  id: "hard-72",
  question: "Which of the following best describes the mechanism of 'cap-independent translation' in viral RNAs?",
  options: [
    "Internal ribosome entry sites (IRES) allow translation initiation without 5' cap",
    "Viral RNAs lack 5' ends and therefore don't require caps for translation",
    "Cap-independent translation uses alternative initiation factors",
    "This process only occurs in DNA viruses"
  ],
  correctAnswer: 0,
  explanation: "Many viruses use internal ribosome entry sites (IRES) in their RNAs that allow translation initiation without a 5' cap, bypassing the need for cap-dependent translation machinery."
},
{
  id: "hard-73",
  question: "What is the molecular basis for the specificity of CRISPR-Cas systems against viral DNA?",
  options: [
    "Guide RNAs provide sequence-specific targeting of viral DNA by Cas nucleases",
    "CRISPR systems recognize specific DNA modification patterns in viruses",
    "Cas proteins directly bind to viral origin of replication sequences",
    "CRISPR targets viral DNA based on GC content alone"
  ],
  correctAnswer: 0,
  explanation: "CRISPR-Cas systems use guide RNAs that provide sequence-specific targeting of viral DNA by Cas nucleases, enabling adaptive immunity against viruses in prokaryotes."
},
{
  id: "hard-74",
  question: "Which of the following describes the mechanism of 'transcriptional slippage' in viral gene expression?",
  options: [
    "Polymerase stuttering at homopolymeric tracts generates heterogeneous mRNAs",
    "Slippage refers to the movement of RNA polymerase between templates",
    "Transcriptional slippage only occurs in DNA-dependent RNA polymerases",
    "This process is unique to retroviruses during reverse transcription"
  ],
  correctAnswer: 0,
  explanation: "Transcriptional slippage occurs when RNA polymerase stutters at homopolymeric tracts, adding or skipping nucleotides and generating heterogeneous mRNAs with variable lengths."
},
{
  id: "hard-75",
  question: "What is the structural basis for the broad neutralizing activity of antibodies targeting the fusion loop of flaviviruses?",
  options: [
    "The fusion loop is highly variable between flavivirus species",
    "The fusion loop is conserved but partially hidden in the mature virion",
    "Fusion loop antibodies induce conformational changes that prevent membrane fusion",
    "These antibodies actually target adjacent variable regions rather than the fusion loop itself"
  ],
  correctAnswer: 1,
  explanation: "The fusion loop is conserved among flaviviruses but partially hidden in the mature virion, making it a challenging target for antibodies but potentially valuable for broad neutralization."
},
{
  id: "hard-76",
  question: "Which of the following accurately describes the mechanism of 'RNA editing' by host ADAR enzymes during viral infection?",
  options: [
    "ADAR enzymes deaminate adenosines to inosines in viral RNA, potentially creating stop codons",
    "ADAR enzymes remove introns from viral RNAs through editing",
    "RNA editing refers to the proofreading of viral RNA by host factors",
    "ADAR enzymes specifically target viral DNA for modification"
  ],
  correctAnswer: 0,
  explanation: "Host ADAR enzymes deaminate adenosines to inosines in viral RNA, which can create premature stop codons or alter coding sequences, potentially limiting viral replication."
},
{
  id: "hard-77",
  question: "What is the molecular mechanism by which the HIV Rev protein regulates nuclear export of viral RNAs?",
  options: [
    "Rev binds to RRE elements and recruits exportin-1 (CRM1) to export unspliced RNAs",
    "Rev functions as a helicase to unwind RNA secondary structures for export",
    "Rev directly transports RNAs through the nuclear pore complex",
    "Rev inhibits splicing to retain RNAs in the nucleus"
  ],
  correctAnswer: 0,
  explanation: "HIV Rev protein binds to Rev Response Elements (RRE) in viral RNAs and recruits exportin-1 (CRM1) to facilitate nuclear export of unspliced and partially spliced viral RNAs."
},
{
  id: "hard-78",
  question: "Which of the following describes the quantum biological perspective on enzyme catalysis in viral proteases?",
  options: [
    "Quantum tunneling of protons may contribute to the catalytic efficiency of viral proteases",
    "Quantum effects are negligible in protease catalysis due to large activation energies",
    "Viral proteases use quantum entanglement to coordinate substrate recognition",
    "Protease activity is solely determined by classical transition state theory"
  ],
  correctAnswer: 0,
  explanation: "Quantum tunneling of protons may contribute to the catalytic efficiency of viral proteases, potentially enhancing the rate of peptide bond hydrolysis beyond classical predictions."
},
{
  id: "hard-79",
  question: "What is the precise mechanism by which the SARS-CoV-2 ORF6 protein inhibits interferon signaling?",
  options: [
    "ORF6 binds to and inhibits the nuclear import factor KPNA2, preventing STAT nuclear translocation",
    "ORF6 directly degrades interferon receptors through ubiquitination",
    "ORF6 functions as a protease that cleaves STAT proteins",
    "ORF6 inhibits interferon gene transcription by recruiting repressive complexes"
  ],
  correctAnswer: 0,
  explanation: "SARS-CoV-2 ORF6 protein binds to and inhibits the nuclear import factor KPNA2, preventing STAT nuclear translocation and interferon signaling."
},
{
  id: "hard-80",
  question: "Which of the following best describes the mechanism of 'antigenic variation' in trypanosomes compared to viruses?",
  options: [
    "Trypanosomes use gene conversion to switch surface glycoprotein expression, while viruses use mutation and recombination",
    "Both mechanisms involve identical molecular processes",
    "Antigenic variation only occurs in viruses and not in trypanosomes",
    "Trypanosomes use RNA editing while viruses use DNA rearrangement"
  ],
  correctAnswer: 0,
  explanation: "Trypanosomes use gene conversion to switch expression of variant surface glycoproteins, while viruses primarily use mutation and recombination for antigenic variation, representing convergent evolution for immune evasion."
},
{
  id: "hard-81",
  question: "What is the structural basis for the specificity of viral entry inhibitors like maraviroc?",
  options: [
    "Maraviroc binds to and stabilizes the CCR5 co-receptor in an inactive conformation",
    "Maraviroc directly blocks the CD4 binding site on HIV envelope",
    "It functions as a fusion inhibitor that prevents membrane merger",
    "Maraviroc degrades viral entry receptors through endocytosis"
  ],
  correctAnswer: 0,
  explanation: "Maraviroc binds to and stabilizes the CCR5 co-receptor in an inactive conformation, preventing HIV from using it for entry while maintaining its natural signaling functions."
},
{
  id: "hard-82",
  question: "Which of the following accurately describes the mechanism of 'RNA recombination' in picornaviruses?",
  options: [
    "Template switching during RNA replication generates recombinant genomes",
    "RNA recombination requires DNA intermediates and reverse transcriptase",
    "Picornaviruses cannot undergo recombination due to their genome structure",
    "Recombination occurs only through breakage and religation of RNA molecules"
  ],
  correctAnswer: 0,
  explanation: "Picornaviruses undergo RNA recombination through template switching during RNA replication, allowing exchange of genetic material between different viral strains."
},
{
  id: "hard-83",
  question: "What is the molecular mechanism by which the hepatitis delta virus (HDV) ribozyme cleaves its RNA?",
  options: [
    "It uses a double-metal-ion mechanism for phosphodiester bond cleavage",
    "The ribozyme functions as a protein enzyme that cleaves RNA",
    "It requires host nucleases for cleavage activity",
    "HDV ribozyme activity is based on sequence-specific DNA binding"
  ],
  correctAnswer: 0,
  explanation: "The HDV ribozyme uses a double-metal-ion mechanism for phosphodiester bond cleavage, similar to many protein enzymes but achieved entirely through RNA structure."
},
{
  id: "hard-84",
  question: "Which of the following describes the quantum biological aspects of viral electron transport chains?",
  options: [
    "Some giant viruses encode electron transport components that may exploit quantum effects",
    "Quantum effects are irrelevant to biological electron transport",
    "All viral electron transport occurs through classical hopping mechanisms",
    "Viruses do not encode any components of electron transport chains"
  ],
  correctAnswer: 0,
  explanation: "Some giant viruses encode components of electron transport chains, and theoretical models suggest quantum effects may enhance efficiency, though experimental evidence is limited."
},
{
  id: "hard-85",
  question: "What is the precise mechanism by which the HIV Nef protein enhances viral pathogenicity?",
  options: [
    "Nef downregulates MHC-I and CD4, alters T-cell signaling, and enhances infectivity",
    "Nef functions primarily as a transcriptional activator of viral genes",
    "Nef directly incorporates into virions as a structural protein",
    "Nef inhibits host DNA repair pathways to promote integration"
  ],
  correctAnswer: 0,
  explanation: "HIV Nef enhances viral pathogenicity through multiple mechanisms including downregulation of MHC-I and CD4, alteration of T-cell signaling pathways, and enhancement of virion infectivity."
},
{
  id: "hard-86",
  question: "Which of the following best describes the mechanism of 'RNA interference suppression' by viral proteins?",
  options: [
    "Viral suppressors bind to and inhibit key components of the RNAi pathway",
    "Viruses encode nucleases that degrade all small RNAs in the cell",
    "Viral proteins prevent the transcription of RNAi pathway components",
    "Suppressors work by accelerating the degradation of viral RNAs"
  ],
  correctAnswer: 0,
  explanation: "Many viruses encode suppressors of RNA interference that bind to and inhibit key components of the RNAi pathway, such as Dicer or Argonaute proteins."
},
{
  id: "hard-87",
  question: "What is the structural basis for the specificity of viral neuraminidase inhibitors like oseltamivir?",
  options: [
    "They mimic the transition state of sialic acid cleavage and bind to the active site",
    "These inhibitors bind to allosteric sites away from the active center",
    "They function as competitive inhibitors of hemagglutinin",
    "Neuraminidase inhibitors work by degrading the enzyme entirely"
  ],
  correctAnswer: 0,
  explanation: "Neuraminidase inhibitors like oseltamivir mimic the transition state of sialic acid cleavage and bind to the active site of viral neuraminidase, preventing its function."
},
{
  id: "hard-88",
  question: "Which of the following accurately describes the mechanism of 'transcriptional antagonism' between competing viruses?",
  options: [
    "One virus produces factors that inhibit another virus's transcription",
    "Transcriptional antagonism refers only to competition for RNA polymerase",
    "This process involves physical blocking of promoter regions",
    "Transcriptional antagonism occurs only in DNA viruses"
  ],
  correctAnswer: 0,
  explanation: "Transcriptional antagonism occurs when one virus produces factors that inhibit another virus's transcription, often through sequestration of transcription factors or direct inhibition of viral polymerases."
},
{
  id: "hard-89",
  question: "What is the molecular mechanism by which the SARS-CoV-2 Nsp10 protein enhances the activity of other replication enzymes?",
  options: [
    "Nsp10 acts as a cofactor that stimulates the methyltransferase activity of Nsp16",
    "Nsp10 functions as a processivity factor for the RNA-dependent RNA polymerase",
    "Nsp10 recruits host factors to viral replication complexes",
    "Nsp10 directly cleaves viral polyproteins into functional units"
  ],
  correctAnswer: 0,
  explanation: "SARS-CoV-2 Nsp10 acts as a cofactor that stimulates the methyltransferase activity of Nsp16, enhancing the cap formation process for viral mRNAs."
},
{
  id: "hard-90",
  question: "Which of the following describes the quantum biological perspective on viral self-assembly?",
  options: [
    "Quantum effects may contribute to the precision and efficiency of viral capsid assembly",
    "Viral assembly is entirely explained by classical thermodynamics",
    "Quantum coherence guides genome packaging through base pairing",
    "Quantum effects are only relevant for small viruses with few components"
  ],
  correctAnswer: 0,
  explanation: "Theoretical models suggest that quantum effects may contribute to the precision and efficiency of viral capsid assembly, though this remains an area of active research and debate."
},
{
  id: "hard-91",
  question: "What is the precise mechanism by which the influenza virus NS2/NEP protein regulates viral replication?",
  options: [
    "NS2/NEP facilitates nuclear export of viral ribonucleoproteins",
    "NS2/NEP functions as a protease that cleaves viral polyproteins",
    "NS2/NEP inhibits host interferon production through direct binding",
    "NS2/NEP acts as a transcriptional activator of viral genes"
  ],
  correctAnswer: 0,
  explanation: "Influenza NS2/NEP (Nuclear Export Protein) facilitates nuclear export of viral ribonucleoproteins by interacting with the cellular export machinery."
},
{
  id: "hard-92",
  question: "Which of the following best describes the mechanism of 'cap snatching' in bunyaviruses?",
  options: [
    "Viral endonuclease cleaves host mRNAs and uses the fragments to prime viral transcription",
    "Bunyaviruses steal complete cap structures through protein-protein interactions",
    "Cap snatching refers to the inhibition of host cap-binding proteins",
    "This process is unique to DNA viruses and not found in RNA viruses"
  ],
  correctAnswer: 0,
  explanation: "Bunyaviruses use a viral endonuclease to cleave host mRNAs and use the resulting capped fragments to prime viral transcription, similar to but distinct from influenza cap-snatching."
},
{
  id: "hard-93",
  question: "What is the molecular basis for the specificity of viral RNA packaging signals?",
  options: [
    "Stem-loop structures and specific sequences mediate selective genome packaging",
    "Packaging is based solely on RNA length without sequence specificity",
    "Viral proteins package any RNA with the correct secondary structure",
    "Packaging signals are identical across all virus families"
  ],
  correctAnswer: 0,
  explanation: "Viral RNA packaging signals typically involve specific stem-loop structures and sequences that mediate selective recognition and packaging of viral genomes."
},
{
  id: "hard-94",
  question: "Which of the following accurately describes the mechanism of 'translation recoding' in viral gene expression?",
  options: [
    "Ribosomal frameshifting and readthrough allow synthesis of multiple proteins from overlapping reading frames",
    "Translation recoding refers to the repair of errors in protein synthesis",
    "This process involves the complete rewriting of the genetic code",
    "Translation recoding only occurs in retroviruses during reverse transcription"
  ],
  correctAnswer: 0,
  explanation: "Translation recoding mechanisms like ribosomal frameshifting and readthrough allow synthesis of multiple proteins from overlapping reading frames, expanding the coding capacity of viral genomes."
},
{
  id: "hard-95",
  question: "What is the structural basis for the broad neutralizing activity of antibodies targeting the MPER of HIV envelope?",
  options: [
    "The MPER is conserved but difficult to access due to its membrane-proximal location",
    "MPER is highly variable between HIV isolates",
    "MPER antibodies induce conformational changes that inactivate envelope",
    "These antibodies actually target glycan shields rather than the MPER"
  ],
  correctAnswer: 0,
  explanation: "The membrane-proximal external region (MPER) of HIV envelope is conserved but difficult to access due to its proximity to the viral membrane, making it a challenging target for broadly neutralizing antibodies."
},
{
  id: "hard-96",
  question: "Which of the following describes the mechanism of 'RNA editing' by host APOBEC enzymes during viral infection?",
  options: [
    "APOBEC enzymes deaminate cytosines to uracils in viral DNA or RNA",
    "APOBEC enzymes function as nucleases that degrade viral nucleic acids",
    "RNA editing refers to the splicing of viral RNAs by host machinery",
    "APOBEC enzymes only target DNA and not RNA"
  ],
  correctAnswer: 0,
  explanation: "APOBEC enzymes can deaminate cytosines to uracils in viral DNA or RNA, potentially causing hypermutation and inactivation of viral genomes."
},
{
  id: "hard-97",
  question: "What is the molecular mechanism by which the SARS-CoV-2 Nsp13 helicase unwinds RNA?",
  options: [
    "It uses ATP-dependent translocation along nucleic acids with 5' to 3' directionality",
    "Nsp13 functions as a passive helicase that stabilizes unwound regions",
    "It requires host helicases to complete unwinding activity",
    "Nsp13 unwinds DNA only and not RNA"
  ],
  correctAnswer: 0,
  explanation: "SARS-CoV-2 Nsp13 helicase uses ATP-dependent translocation along nucleic acids with 5' to 3' directionality to unwind RNA and DNA duplexes."
},
{
  id: "hard-98",
  question: "Which of the following describes the quantum biological aspects of viral photoreception?",
  options: [
    "Some giant viruses encode photoreceptor proteins that may exploit quantum effects",
    "Quantum effects are irrelevant to biological photoreception",
    "All viral photoreception occurs through classical photochemical mechanisms",
    "Viruses do not encode any photoreceptor components"
  ],
  correctAnswer: 0,
  explanation: "Some giant viruses encode photoreceptor proteins, and theoretical models suggest quantum effects may enhance light detection efficiency, though experimental evidence is limited."
},
{
  id: "hard-99",
  question: "What is the precise mechanism by which the HIV integrase enzyme catalyzes the 3' processing reaction?",
  options: [
    "It cleaves GT dinucleotides from the 3' ends of viral DNA, exposing CA-OH groups",
    "Integrase directly ligates viral DNA to host DNA without processing",
    "3' processing involves complete degradation of viral DNA ends",
    "This reaction is catalyzed by host enzymes rather than viral integrase"
  ],
  correctAnswer: 0,
  explanation: "HIV integrase cleaves GT dinucleotides from the 3' ends of viral DNA, exposing CA-OH groups that will participate in the subsequent strand transfer reaction."
},
{
  id: "hard-100",
  question: "Which of the following best describes the mechanism of 'antigenic drift' versus 'antigenic shift' in influenza viruses?",
  options: [
    "Drift involves gradual mutation of surface proteins, while shift involves reassortment of genome segments",
    "Both processes involve identical molecular mechanisms but different time scales",
    "Antigenic shift refers to mutations while drift refers to recombination",
    "Drift occurs in HA only while shift occurs in NA only"
  ],
  correctAnswer: 0,
  explanation: "Antigenic drift involves gradual accumulation of mutations in surface proteins (HA and NA), while antigenic shift involves reassortment of genome segments between different influenza strains, potentially creating pandemic viruses."
}
  
];

export const virusesQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
