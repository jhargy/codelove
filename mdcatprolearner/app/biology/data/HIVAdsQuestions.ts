export type Difficulty = keyof typeof  AIDAndHIVQuestions;

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};



export const easyQuestions: Question[] = [
  {
    id: "easy-1",
    question: "What does HIV stand for?",
    options: [
      "Human Immunodeficiency Virus",
      "Human Inflammatory Virus",
      "Heterotrophic Immune Virus",
      "Hemoglobin Inhibiting Virus"
    ],
    correctAnswer: 0,
    explanation: "HIV stands for Human Immunodeficiency Virus, which attacks the body's immune system."
  },
  {
    id: "easy-2",
    question: "What is the final stage of HIV infection?",
    options: [
      "Initial infection",
      "Seroconversion",
      "Clinical latency",
      "AIDS"
    ],
    correctAnswer: 3,
    explanation: "AIDS (Acquired Immunodeficiency Syndrome) is the final and most severe stage of HIV infection."
  },
  {
    id: "easy-3",
    question: "Which cells are primarily targeted by HIV?",
    options: [
      "Red blood cells",
      "Platelets",
      "CD4 T-cells",
      "Neurons"
    ],
    correctAnswer: 2,
    explanation: "HIV primarily targets and destroys CD4 T-cells, which are crucial for immune function."
  },
  {
    id: "easy-4",
    question: "How is HIV primarily transmitted?",
    options: [
      "Through airborne droplets",
      "Through contaminated water",
      "Through blood and sexual fluids",
      "Through insect bites"
    ],
    correctAnswer: 2,
    explanation: "HIV is primarily transmitted through contact with infected blood, semen, vaginal fluids, or breast milk."
  },
  {
    id: "easy-5",
    question: "Which body fluid does NOT typically transmit HIV?",
    options: [
      "Blood",
      "Semen",
      "Saliva",
      "Vaginal fluids"
    ],
    correctAnswer: 2,
    explanation: "HIV is not typically transmitted through saliva as the viral load is very low."
  },
  {
    id: "easy-6",
    question: "What is the window period in HIV testing?",
    options: [
      "The time between infection and detectable antibodies",
      "The time between infection and symptoms",
      "The time between testing and results",
      "The time between exposure and treatment"
    ],
    correctAnswer: 0,
    explanation: "The window period is the time between HIV infection and when a test can detect antibodies or the virus itself."
  },
  {
    id: "easy-7",
    question: "Which test is commonly used to confirm HIV infection?",
    options: [
      "Complete blood count",
      "Western blot",
      "Urinalysis",
      "Blood pressure measurement"
    ],
    correctAnswer: 1,
    explanation: "The Western blot test is used to confirm HIV infection after a positive screening test."
  },
  {
    id: "easy-8",
    question: "What is seroconversion in HIV infection?",
    options: [
      "The virus changing shape",
      "Development of detectable antibodies",
      "Transmission to another person",
      "The virus entering the brain"
    ],
    correctAnswer: 1,
    explanation: "Seroconversion is when the body develops detectable antibodies against HIV, typically occurring 3-8 weeks after infection."
  },
  {
    id: "easy-9",
    question: "Which of the following is NOT a common symptom of acute HIV infection?",
    options: [
      "Fever and fatigue",
      "Swollen lymph nodes",
      "Severe immunodeficiency",
      "Rash"
    ],
    correctAnswer: 2,
    explanation: "Severe immunodeficiency develops later in HIV infection, not during the acute phase."
  },
  {
    id: "easy-10",
    question: "How can HIV transmission from mother to child be prevented?",
    options: [
      "Vaccination of the newborn",
      "Antiretroviral therapy during pregnancy",
      "Antibiotic treatment",
      "Blood transfusion"
    ],
    correctAnswer: 1,
    explanation: "Antiretroviral therapy during pregnancy significantly reduces the risk of mother-to-child HIV transmission."
  },
  {
    id: "easy-11",
    question: "What is the function of reverse transcriptase in HIV?",
    options: [
      "To translate RNA to protein",
      "To convert RNA to DNA",
      "To replicate DNA",
      "To break down the host cell wall"
    ],
    correctAnswer: 1,
    explanation: "Reverse transcriptase is an enzyme that converts viral RNA into DNA, which then integrates into the host genome."
  },
  {
    id: "easy-12",
    question: "Which of these is a common opportunistic infection in AIDS patients?",
    options: [
      "Common cold",
      "Pneumocystis pneumonia",
      "Strep throat",
      "Influenza"
    ],
    correctAnswer: 1,
    explanation: "Pneumocystis pneumonia is a common opportunistic infection in people with AIDS due to their weakened immune systems."
  },
  {
    id: "easy-13",
    question: "What type of virus is HIV based on its genetic material?",
    options: [
      "DNA virus",
      "Retrovirus",
      "Adenovirus",
      "Bacteriophage"
    ],
    correctAnswer: 1,
    explanation: "HIV is a retrovirus, which means it uses reverse transcriptase to convert its RNA genome into DNA."
  },
  {
    id: "easy-14",
    question: "Which precaution is most effective in preventing HIV transmission during medical procedures?",
    options: [
      "Wearing gloves",
      "Using sterile equipment",
      "Proper handwashing",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these precautions contribute to preventing HIV transmission in medical settings."
  },
  {
    id: "easy-15",
    question: "Which organ system is primarily affected by HIV?",
    options: [
      "Nervous system",
      "Immune system",
      "Digestive system",
      "Respiratory system"
    ],
    correctAnswer: 1,
    explanation: "HIV primarily attacks and weakens the immune system, specifically targeting CD4 T-cells."
  },
  {
    id: "easy-16",
    question: "What is the recommended treatment for HIV infection?",
    options: [
      "Antibiotics",
      "Antiretroviral therapy",
      "Chemotherapy",
      "Blood transfusion"
    ],
    correctAnswer: 1,
    explanation: "Antiretroviral therapy (ART) is the standard treatment for HIV infection, which suppresses viral replication."
  },
  {
    id: "easy-17",
    question: "Which practice is most effective in preventing sexual transmission of HIV?",
    options: [
      "Abstinence",
      "Using condoms",
      "Having one partner",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these practices can reduce the risk of sexual transmission of HIV when used consistently and correctly."
  },
  {
    id: "easy-18",
    question: "What does AIDS stand for?",
    options: [
      "Acquired Immune Deficiency Syndrome",
      "Autoimmune Inflammatory Disease State",
      "Acute Infectious Disease System",
      "Autoimmune Deficiency Symptoms"
    ],
    correctAnswer: 0,
    explanation: "AIDS stands for Acquired Immune Deficiency Syndrome, the advanced stage of HIV infection."
  },
  {
    id: "easy-19",
    question: "Which of the following is NOT a mode of HIV transmission?",
    options: [
      "Sharing needles",
      "Unprotected sexual contact",
      "Mother to child during childbirth",
      "Casual contact like hugging"
    ],
    correctAnswer: 3,
    explanation: "HIV is not transmitted through casual contact like hugging, shaking hands, or sharing utensils."
  },
  {
    id: "easy-20",
    question: "What is the primary reason why HIV is difficult to cure?",
    options: [
      "It mutates rapidly",
      "It integrates into host DNA",
      "It targets immune cells",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV is difficult to cure because it mutates rapidly, integrates into host DNA, and targets the very cells that would normally fight infection."
  },
  {
    id: "easy-21",
    question: "Which of these is a symptom of AIDS?",
    options: [
      "Rapid weight loss",
      "Recurring fever",
      "Extreme tiredness",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these are common symptoms of AIDS, along with other opportunistic infections and cancers."
  },
  {
    id: "easy-22",
    question: "How long after exposure can HIV antibodies be detected?",
    options: [
      "24 hours",
      "1 week",
      "2-8 weeks",
      "6 months"
    ],
    correctAnswer: 2,
    explanation: "HIV antibodies can typically be detected 2-8 weeks after exposure, though it may take longer in some cases."
  },
  {
    id: "easy-23",
    question: "Which of these is a preventive measure against HIV?",
    options: [
      "Pre-exposure prophylaxis (PrEP)",
      "Post-exposure prophylaxis (PEP)",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "Both PrEP (taken before potential exposure) and PEP (taken after potential exposure) can prevent HIV infection."
  },
  {
    id: "easy-24",
    question: "What is the effect of HIV on the immune system?",
    options: [
      "It strengthens the immune response",
      "It has no effect on the immune system",
      "It gradually destroys the immune system",
      "It only affects the nervous system"
    ],
    correctAnswer: 2,
    explanation: "HIV gradually destroys the immune system by targeting and killing CD4 cells, leaving the body vulnerable to infections."
  },
  {
    id: "easy-25",
    question: "Which of these is a common way HIV is NOT transmitted?",
    options: [
      "Sharing toilet seats",
      "Sharing needles",
      "Unprotected sex",
      "Mother to child during breastfeeding"
    ],
    correctAnswer: 0,
    explanation: "HIV is not transmitted through sharing toilet seats, swimming pools, or casual contact."
  },
  {
    id: "easy-26",
    question: "What is the function of CD4 cells in the immune system?",
    options: [
      "Carry oxygen in blood",
      "Help coordinate immune responses",
      "Produce antibodies directly",
      "Digest foreign particles"
    ],
    correctAnswer: 1,
    explanation: "CD4 cells (T-helper cells) help coordinate the immune response by activating other immune cells."
  },
  {
    id: "easy-27",
    question: "Which of these is an early symptom of HIV infection?",
    options: [
      "Kaposi's sarcoma",
      "Flu-like symptoms",
      "Tuberculosis",
      "Candidiasis"
    ],
    correctAnswer: 1,
    explanation: "Many people experience flu-like symptoms (fever, rash, sore throat) 2-4 weeks after HIV infection."
  },
  {
    id: "easy-28",
    question: "What is the significance of viral load in HIV infection?",
    options: [
      "It measures the number of HIV particles in blood",
      "It indicates the number of CD4 cells",
      "It measures antibody levels",
      "It indicates the stage of infection"
    ],
    correctAnswer: 0,
    explanation: "Viral load measures the amount of HIV RNA in the blood, indicating how actively the virus is replicating."
  },
  {
    id: "easy-29",
    question: "Which of these is a way to prevent mother-to-child transmission of HIV?",
    options: [
      "Cesarean delivery",
      "Avoiding breastfeeding",
      "Antiretroviral drugs",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these measures can help reduce the risk of mother-to-child HIV transmission."
  },
  {
    id: "easy-30",
    question: "What is the role of protease inhibitors in HIV treatment?",
    options: [
      "Prevent viral entry into cells",
      "Block HIV protease enzyme",
      "Inhibit reverse transcriptase",
      "Boost immune system"
    ],
    correctAnswer: 1,
    explanation: "Protease inhibitors block the HIV protease enzyme, preventing the virus from maturing and becoming infectious."
  },
  {
    id: "easy-31",
    question: "Which of these is a common AIDS-defining illness?",
    options: [
      "Common cold",
      "Seasonal allergies",
      "Toxoplasmosis",
      "Acne"
    ],
    correctAnswer: 2,
    explanation: "Toxoplasmosis is an opportunistic infection that often occurs in people with advanced HIV/AIDS."
  },
  {
    id: "easy-32",
    question: "How does HIV affect the body's ability to fight infections?",
    options: [
      "It enhances immune response",
      "It has no effect on immunity",
      "It gradually weakens immunity",
      "It only affects specific organs"
    ],
    correctAnswer: 2,
    explanation: "HIV gradually weakens the immune system by destroying CD4 cells, making the body vulnerable to opportunistic infections."
  },
  {
    id: "easy-33",
    question: "Which of these is a symptom of acute HIV infection?",
    options: [
      "Swollen lymph nodes",
      "No symptoms at all",
      "Immediate weight gain",
      "Improved vision"
    ],
    correctAnswer: 0,
    explanation: "Swollen lymph nodes are a common symptom of acute HIV infection, along with fever, rash, and sore throat."
  },
  {
    id: "easy-34",
    question: "What is the purpose of HIV testing?",
    options: [
      "To detect HIV antibodies or antigens",
      "To measure CD4 count",
      "To identify opportunistic infections",
      "To test viral load"
    ],
    correctAnswer: 0,
    explanation: "HIV testing detects either antibodies produced in response to HIV infection or viral antigens (proteins)."
  },
  {
    id: "easy-35",
    question: "Which of these is a late symptom of HIV infection?",
    options: [
      "Night sweats",
      "Rapid weight loss",
      "Persistent diarrhea",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these can be symptoms of advanced HIV infection or AIDS."
  },
  {
    id: "easy-36",
    question: "What is the significance of CD4 count in HIV management?",
    options: [
      "It measures immune system strength",
      "It indicates viral load",
      "It measures antibody levels",
      "It diagnoses opportunistic infections"
    ],
    correctAnswer: 0,
    explanation: "CD4 count measures the number of CD4 cells in the blood, indicating the strength of the immune system."
  },
  {
    id: "easy-37",
    question: "Which of these is a preventive measure against HIV transmission through blood?",
    options: [
      "Screening blood donations",
      "Using sterile needles",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "Both screening blood donations and using sterile needles are important measures to prevent HIV transmission through blood."
  },
  {
    id: "easy-38",
    question: "What is the effect of antiretroviral therapy on HIV transmission?",
    options: [
      "It increases transmission risk",
      "It has no effect on transmission",
      "It reduces transmission risk",
      "It only prevents symptoms"
    ],
    correctAnswer: 2,
    explanation: "Effective antiretroviral therapy reduces viral load, which significantly decreases the risk of HIV transmission."
  },
  {
    id: "easy-39",
    question: "Which of these is a common way HIV is transmitted in healthcare settings?",
    options: [
      "Through air ventilation systems",
      "Needlestick injuries",
      "Sharing stethoscopes",
      "Through hospital food"
    ],
    correctAnswer: 1,
    explanation: "Needlestick injuries are a potential route of HIV transmission in healthcare settings if proper precautions aren't followed."
  },
  {
    id: "easy-40",
    question: "What is the importance of early HIV diagnosis?",
    options: [
      "Allows earlier treatment",
      "Reduces transmission risk",
      "Improves long-term outcomes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Early HIV diagnosis allows for earlier treatment, reduces transmission risk, and improves long-term health outcomes."
  },
  {
    id: "easy-41",
    question: "Which of these is NOT a symptom of AIDS?",
    options: [
      "Persistent swollen lymph nodes",
      "Recurrent pneumonia",
      "Healthy immune function",
      "Extreme fatigue"
    ],
    correctAnswer: 2,
    explanation: "AIDS is characterized by severely compromised immune function, not healthy immune function."
  },
  {
    id: "easy-42",
    question: "How does HIV affect life expectancy?",
    options: [
      "It dramatically shortens life expectancy",
      "It has no effect on life expectancy",
      "With treatment, near-normal life expectancy is possible",
      "It only affects quality of life, not length"
    ],
    correctAnswer: 2,
    explanation: "With proper antiretroviral treatment, people with HIV can now achieve near-normal life expectancy."
  },
  {
    id: "easy-43",
    question: "Which of these is a common opportunistic infection in AIDS patients?",
    options: [
      "Tuberculosis",
      "Common cold",
      "Seasonal flu",
      "Strep throat"
    ],
    correctAnswer: 0,
    explanation: "Tuberculosis is a common opportunistic infection in people with AIDS due to their weakened immune systems."
  },
  {
    id: "easy-44",
    question: "What is the role of integrase inhibitors in HIV treatment?",
    options: [
      "Prevent viral entry",
      "Block integration of viral DNA",
      "Inhibit reverse transcriptase",
      "Block protease enzyme"
    ],
    correctAnswer: 1,
    explanation: "Integrase inhibitors block the integrase enzyme, preventing HIV from integrating its DNA into the host cell's DNA."
  },
  {
    id: "easy-45",
    question: "Which of these is a symptom of acute HIV infection?",
    options: [
      "Muscle aches",
      "Headache",
      "Fever",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these are common symptoms of acute HIV infection, which typically occur 2-4 weeks after exposure."
  },
  {
    id: "easy-46",
    question: "What is the effect of HIV on the nervous system?",
    options: [
      "It has no effect on the nervous system",
      "It can cause neurological problems",
      "It only affects the peripheral nerves",
      "It improves neurological function"
    ],
    correctAnswer: 1,
    explanation: "HIV can cause various neurological problems, including HIV-associated dementia and peripheral neuropathy."
  },
  {
    id: "easy-47",
    question: "Which of these is a way to prevent HIV transmission through sexual contact?",
    options: [
      "Using condoms consistently",
      "Taking PrEP",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "Both consistent condom use and PrEP (pre-exposure prophylaxis) can prevent sexual transmission of HIV."
  },
  {
    id: "easy-48",
    question: "What is the significance of undetectable viral load?",
    options: [
      "It means HIV is cured",
      "It indicates treatment is working",
      "It means no transmission risk",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "An undetectable viral load indicates that treatment is working and significantly reduces transmission risk (U=U: Undetectable = Untransmittable)."
  },
  {
    id: "easy-49",
    question: "Which of these is a common AIDS-related cancer?",
    options: [
      "Kaposi's sarcoma",
      "Skin cancer",
      "Breast cancer",
      "Prostate cancer"
    ],
    correctAnswer: 0,
    explanation: "Kaposi's sarcoma is a cancer that frequently occurs in people with AIDS, caused by human herpesvirus 8."
  },
  {
    id: "easy-50",
    question: "What is the primary goal of HIV treatment?",
    options: [
      "To cure HIV completely",
      "To reduce viral load to undetectable levels",
      "To eliminate all symptoms",
      "To prevent all opportunistic infections"
    ],
    correctAnswer: 1,
    explanation: "The primary goal of HIV treatment is to reduce viral load to undetectable levels, which preserves immune function and reduces transmission risk."
  },
  {
    id: "easy-51",
    question: "Which of these is a symptom of advanced HIV infection?",
    options: [
      "Persistent fever",
      "Chronic diarrhea",
      "Unexplained weight loss",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of these are common symptoms of advanced HIV infection or AIDS."
  },
  {
    id: "easy-52",
    question: "How does HIV affect pregnancy outcomes?",
    options: [
      "It has no effect on pregnancy",
      "It always causes miscarriage",
      "With treatment, healthy pregnancies are possible",
      "It prevents conception entirely"
    ],
    correctAnswer: 2,
    explanation: "With proper HIV treatment and care, women with HIV can have healthy pregnancies and give birth to HIV-negative babies."
  },
  {
    id: "easy-53",
    question: "Which of these is a common neurological symptom of HIV?",
    options: [
      "Memory loss",
      "Confusion",
      "Difficulty concentrating",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV can cause various neurological symptoms including memory problems, confusion, and difficulty concentrating."
  },
  {
    id: "easy-54",
    question: "What is the role of fusion inhibitors in HIV treatment?",
    options: [
      "Prevent viral entry into cells",
      "Block reverse transcriptase",
      "Inhibit protease enzyme",
      "Prevent viral integration"
    ],
    correctAnswer: 0,
    explanation: "Fusion inhibitors prevent HIV from entering human cells by blocking the fusion of viral and cellular membranes."
  },
  {
    id: "easy-55",
    question: "Which of these is a common symptom of HIV-related opportunistic infections?",
    options: [
      "Recurrent infections",
      "Unusual infections",
      "Severe infections",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "People with advanced HIV often experience recurrent, unusual, and severe infections due to their weakened immune systems."
  },
  {
    id: "easy-56",
    question: "What is the significance of regular HIV testing for high-risk individuals?",
    options: [
      "Allows early detection",
      "Enables early treatment",
      "Reduces transmission risk",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Regular HIV testing for high-risk individuals allows for early detection, enables early treatment, and reduces transmission risk."
  },
  {
    id: "easy-57",
    question: "Which of these is a common skin condition in HIV patients?",
    options: [
      "Rashes",
      "Dry skin",
      "Kaposi's sarcoma lesions",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV patients commonly experience various skin conditions including rashes, dry skin, and Kaposi's sarcoma lesions."
  },
  {
    id: "easy-58",
    question: "How does HIV affect nutritional status?",
    options: [
      "It has no effect on nutrition",
      "It can cause weight loss and malnutrition",
      "It always causes weight gain",
      "It only affects appetite temporarily"
    ],
    correctAnswer: 1,
    explanation: "HIV can cause weight loss and malnutrition due to reduced appetite, malabsorption, and increased metabolic demands."
  },
  {
    id: "easy-59",
    question: "Which of these is important for HIV prevention?",
    options: [
      "Education and awareness",
      "Access to testing",
      "Availability of treatment",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Comprehensive HIV prevention requires education, access to testing, and availability of treatment."
  },
  {
    id: "easy-60",
    question: "What is the effect of HIV on the gastrointestinal system?",
    options: [
      "It has no effect",
      "It can cause diarrhea and malabsorption",
      "It improves digestion",
      "It only affects the stomach"
    ],
    correctAnswer: 1,
    explanation: "HIV can affect the gastrointestinal system, causing symptoms like diarrhea, malabsorption, and weight loss."
  },
  {
    id: "easy-61",
    question: "Which of these is a common respiratory infection in AIDS patients?",
    options: [
      "Pneumocystis pneumonia",
      "Common cold",
      "Seasonal allergies",
      "Asthma"
    ],
    correctAnswer: 0,
    explanation: "Pneumocystis pneumonia is a common respiratory infection in people with AIDS."
  },
  {
    id: "easy-62",
    question: "What is the importance of adherence to HIV medication?",
    options: [
      "Prevents drug resistance",
      "Maintains viral suppression",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "Adherence to HIV medication is crucial to prevent drug resistance and maintain viral suppression."
  },
  {
    id: "easy-63",
    question: "Which of these is a common oral manifestation of HIV?",
    options: [
      "Oral thrush",
      "Hairy leukoplakia",
      "Gum disease",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV can cause various oral health problems including thrush, hairy leukoplakia, and gum disease."
  },
  {
    id: "easy-64",
    question: "How does HIV affect mental health?",
    options: [
      "It has no effect on mental health",
      "It can cause depression and anxiety",
      "It always causes psychosis",
      "It improves mental clarity"
    ],
    correctAnswer: 1,
    explanation: "Living with HIV can contribute to mental health challenges including depression, anxiety, and stress."
  },
  {
    id: "easy-65",
    question: "Which of these is a preventive measure against HIV?",
    options: [
      "Safe injection practices",
      "Blood screening",
      "Education programs",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Comprehensive HIV prevention includes safe injection practices, blood screening, and education programs."
  },
  {
    id: "easy-66",
    question: "What is the effect of HIV on children?",
    options: [
      "It affects them the same as adults",
      "It progresses more rapidly in children",
      "It has no effect on children",
      "It is always fatal in children"
    ],
    correctAnswer: 1,
    explanation: "HIV typically progresses more rapidly in children than in adults if not treated."
  },
  {
    id: "easy-67",
    question: "Which of these is a common symptom of HIV in children?",
    options: [
      "Failure to thrive",
      "Developmental delays",
      "Recurrent infections",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV in children can cause failure to thrive, developmental delays, and recurrent infections."
  },
  {
    id: "easy-68",
    question: "What is the role of support services in HIV care?",
    options: [
      "They are unnecessary",
      "They improve treatment adherence",
      "They cure HIV",
      "They replace medical treatment"
    ],
    correctAnswer: 1,
    explanation: "Support services (counseling, support groups) can improve treatment adherence and overall quality of life for people with HIV."
  },
  {
    id: "easy-69",
    question: "Which of these is important for preventing HIV transmission in healthcare settings?",
    options: [
      "Standard precautions",
      "Post-exposure prophylaxis",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "Both standard precautions and availability of post-exposure prophylaxis are important for preventing HIV transmission in healthcare settings."
  },
  {
    id: "easy-70",
    question: "What is the global impact of HIV/AIDS?",
    options: [
      "It has affected millions worldwide",
      "It has significant social and economic impacts",
      "It remains a major public health challenge",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV/AIDS has affected millions worldwide and continues to have significant social, economic, and public health impacts."
  },
  {
    id: "easy-71",
    question: "Which of these is a common way HIV is NOT transmitted?",
    options: [
      "Sharing eating utensils",
      "Unprotected sex",
      "Mother to child during pregnancy",
      "Sharing needles"
    ],
    correctAnswer: 0,
    explanation: "HIV is not transmitted through sharing eating utensils, drinking glasses, or other casual contact."
  },
  {
    id: "easy-72",
    question: "What is the significance of HIV drug resistance?",
    options: [
      "It makes treatment less effective",
      "It requires switching medications",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "HIV drug resistance can make treatment less effective and may require switching to different medications."
  },
  {
    id: "easy-73",
    question: "Which of these is a symptom of HIV-related wasting syndrome?",
    options: [
      "Significant weight loss",
      "Chronic diarrhea",
      "Weakness",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV wasting syndrome involves significant weight loss, chronic diarrhea, and weakness."
  },
  {
    id: "easy-74",
    question: "How does HIV affect the eyes?",
    options: [
      "It has no effect on vision",
      "It can cause CMV retinitis",
      "It always causes blindness",
      "It improves night vision"
    ],
    correctAnswer: 1,
    explanation: "HIV can cause eye problems including CMV retinitis, which can lead to vision loss if untreated."
  },
  {
    id: "easy-75",
    question: "Which of these is important for HIV prevention education?",
    options: [
      "Accurate information",
      "Reducing stigma",
      "Promoting testing",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Effective HIV prevention education requires accurate information, stigma reduction, and promotion of testing."
  },
  {
    id: "easy-76",
    question: "What is the effect of HIV on the cardiovascular system?",
    options: [
      "It has no effect",
      "It can increase cardiovascular risk",
      "It prevents heart disease",
      "It only affects blood pressure"
    ],
    correctAnswer: 1,
    explanation: "HIV and some HIV medications can increase the risk of cardiovascular disease."
  },
  {
    id: "easy-77",
    question: "Which of these is a common fungal infection in HIV patients?",
    options: [
      "Candidiasis",
      "Athlete's foot",
      "Ringworm",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV patients are susceptible to various fungal infections including candidiasis and other opportunistic fungal infections."
  },
  {
    id: "easy-78",
    question: "What is the importance of CD4 monitoring in HIV care?",
    options: [
      "Guides treatment decisions",
      "Monitors immune function",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "CD4 monitoring helps guide treatment decisions and monitors immune function in people with HIV."
  },
  {
    id: "easy-79",
    question: "Which of these is a viral load test used for?",
    options: [
      "Measuring HIV RNA in blood",
      "Counting CD4 cells",
      "Detecting antibodies",
      "Diagnosing opportunistic infections"
    ],
    correctAnswer: 0,
    explanation: "Viral load tests measure the amount of HIV RNA in the blood, indicating how actively the virus is replicating."
  },
  {
    id: "easy-80",
    question: "What is the effect of HIV on kidney function?",
    options: [
      "It has no effect",
      "It can cause HIV-associated nephropathy",
      "It always causes kidney failure",
      "It improves kidney function"
    ],
    correctAnswer: 1,
    explanation: "HIV can affect kidney function and may cause HIV-associated nephropathy, particularly in advanced disease."
  },
  {
    id: "easy-81",
    question: "Which of these is important for reducing HIV stigma?",
    options: [
      "Education",
      "Accurate information",
      "Personal stories",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Reducing HIV stigma requires education, accurate information, and sharing of personal experiences."
  },
  {
    id: "easy-82",
    question: "What is the role of nutrition in HIV management?",
    options: [
      "It is unimportant",
      "It supports immune function",
      "It cures HIV",
      "It replaces medication"
    ],
    correctAnswer: 1,
    explanation: "Good nutrition supports immune function and overall health in people living with HIV."
  },
  {
    id: "easy-83",
    question: "Which of these is a common bacterial infection in AIDS patients?",
    options: [
      "Tuberculosis",
      "Strep throat",
      "Pneumonia",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "AIDS patients are susceptible to various bacterial infections including tuberculosis and bacterial pneumonia."
  },
  {
    id: "easy-84",
    question: "What is the significance of HIV genotype testing?",
    options: [
      "Identifies drug resistance",
      "Determines HIV subtype",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "HIV genotype testing can identify drug resistance mutations and determine HIV subtype."
  },
  {
    id: "easy-85",
    question: "Which of these is a common neurological complication of AIDS?",
    options: [
      "HIV-associated dementia",
      "Peripheral neuropathy",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "Both HIV-associated dementia and peripheral neuropathy are common neurological complications of AIDS."
  },
  {
    id: "easy-86",
    question: "What is the effect of HIV on the liver?",
    options: [
      "It has no effect",
      "It can cause liver damage",
      "It always causes hepatitis",
      "It improves liver function"
    ],
    correctAnswer: 1,
    explanation: "HIV and some HIV medications can cause liver damage or exacerbate existing liver conditions."
  },
  {
    id: "easy-87",
    question: "Which of these is important for HIV vaccine research?",
    options: [
      "Understanding immune responses",
      "Viral diversity",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2,
    explanation: "HIV vaccine research requires understanding immune responses to HIV and addressing viral diversity."
  },
  {
    id: "easy-88",
    question: "What is the significance of the U=U message?",
    options: [
      "Undetectable = Untransmittable",
      "Universal = Understanding",
      "Unified = United",
      "Untested = Unknown"
    ],
    correctAnswer: 0,
    explanation: "U=U means Undetectable = Untransmittable, indicating that people with undetectable viral load cannot sexually transmit HIV."
  },
  {
    id: "easy-89",
    question: "Which of these is a common parasitic infection in AIDS patients?",
    options: [
      "Toxoplasmosis",
      "Malaria",
      "Giardiasis",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "AIDS patients are susceptible to various parasitic infections including toxoplasmosis and other opportunistic parasites."
  },
  {
  id: "easy-91",
  question: "What is the importance of mental health support for HIV patients?",
  options: [
    "It improves medication adherence",
    "It enhances quality of life",
    "It helps cope with diagnosis",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Mental health support improves medication adherence, enhances quality of life, and helps patients cope with the psychological impact of HIV diagnosis."
},
{
  id: "easy-92",
  question: "Which of these is a common early symptom of HIV infection?",
  options: [
    "Sore throat",
    "Rash",
    "Fever",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Sore throat, rash, and fever are all common symptoms of acute HIV infection that typically occur 2-4 weeks after exposure."
},
{
  id: "easy-93",
  question: "What is the primary benefit of HIV treatment?",
  options: [
    "It cures HIV completely",
    "It suppresses viral replication",
    "It prevents all opportunistic infections",
    "It eliminates need for precautions"
  ],
  correctAnswer: 1,
  explanation: "The primary benefit of HIV treatment is suppressing viral replication, which preserves immune function and reduces transmission risk."
},
{
  id: "easy-94",
  question: "Which of these is NOT a mode of HIV transmission?",
  options: [
    "Sharing personal care items like toothbrushes",
    "Unprotected sexual intercourse",
    "Mother to child during breastfeeding",
    "Sharing needles for drug use"
  ],
  correctAnswer: 0,
  explanation: "HIV is not transmitted through sharing personal care items like toothbrushes, though theoretically possible if blood is present, the risk is extremely low."
},
{
  id: "easy-95",
  question: "What does a positive HIV test result indicate?",
  options: [
    "The person has AIDS",
    "The person is infected with HIV",
    "The person will develop AIDS immediately",
    "The person cannot transmit the virus"
  ],
  correctAnswer: 1,
  explanation: "A positive HIV test indicates infection with the virus, but not necessarily AIDS, which develops later without treatment."
},
{
  id: "easy-96",
  question: "Which of these is important for preventing HIV transmission to babies?",
  options: [
    "Antiretroviral treatment during pregnancy",
    "Cesarean delivery in some cases",
    "Avoiding breastfeeding if alternatives exist",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "All these measures can significantly reduce the risk of mother-to-child HIV transmission."
},
{
  id: "easy-97",
  question: "What is the significance of viral load in HIV treatment?",
  options: [
    "It measures treatment effectiveness",
    "It indicates transmission risk",
    "It helps guide therapy decisions",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Viral load measurement helps assess treatment effectiveness, indicates transmission risk, and guides therapy decisions."
},
{
  id: "easy-98",
  question: "Which of these is a common symptom of advanced HIV disease?",
  options: [
    "Persistent fever lasting weeks",
    "Night sweats",
    "Chronic diarrhea",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Persistent fever, night sweats, and chronic diarrhea are all common symptoms of advanced HIV disease."
},
{
  id: "easy-99",
  question: "What is the role of education in HIV prevention?",
  options: [
    "It provides information about transmission risks",
    "It promotes testing and treatment",
    "It reduces stigma and discrimination",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "HIV education provides transmission information, promotes testing/treatment, and helps reduce stigma and discrimination."
},
{
  id: "easy-100",
  question: "Why is early HIV diagnosis important?",
  options: [
    "It allows earlier treatment initiation",
    "It reduces long-term health complications",
    "It decreases transmission to others",
    "All of the above"
  ],
  correctAnswer: 3,
  explanation: "Early HIV diagnosis allows prompt treatment, reduces complications, and decreases transmission risk to others."
}
];

export const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "Which enzyme allows HIV to convert its RNA genome into DNA?",
    options: [
      "DNA polymerase",
      "Reverse transcriptase",
      "RNA polymerase",
      "Integrase"
    ],
    correctAnswer: 1,
    explanation: "Reverse transcriptase is the enzyme that converts HIV's RNA genome into DNA, a crucial step in the viral replication cycle."
  },
  {
    id: "medium-2",
    question: "What is the primary function of CD4+ T-cells that makes them crucial targets for HIV?",
    options: [
      "They produce antibodies directly",
      "They coordinate the immune response by activating other cells",
      "They physically engulf and destroy pathogens",
      "They carry oxygen to immune cells"
    ],
    correctAnswer: 1,
    explanation: "CD4+ T-cells are helper cells that coordinate immune responses by activating B-cells, cytotoxic T-cells, and other immune components."
  },
  {
    id: "medium-3",
    question: "Which of the following best describes the window period in HIV infection?",
    options: [
      "The time when viral load is highest",
      "The period between infection and detectable antibodies",
      "The phase when AIDS symptoms first appear",
      "The duration of acute HIV symptoms"
    ],
    correctAnswer: 1,
    explanation: "The window period is the time between HIV infection and when antibodies become detectable by standard tests, typically 3-8 weeks."
  },
  {
    id: "medium-4",
    question: "What is the significance of the CCR5 co-receptor in HIV infection?",
    options: [
      "It is the primary binding site for reverse transcriptase",
      "It serves as an entry co-receptor for macrophage-tropic HIV strains",
      "It functions as the main protease enzyme",
      "It is the target for HIV integrase inhibitors"
    ],
    correctAnswer: 1,
    explanation: "CCR5 is a chemokine receptor that serves as a co-receptor for HIV entry, particularly for macrophage-tropic (R5) strains."
  },
  {
    id: "medium-5",
    question: "Which of the following represents the correct progression of HIV infection without treatment?",
    options: [
      "Acute infection → Clinical latency → AIDS",
      "AIDS → Clinical latency → Acute infection",
      "Clinical latency → Acute infection → AIDS",
      "Acute infection → AIDS → Clinical latency"
    ],
    correctAnswer: 0,
    explanation: "Without treatment, HIV infection typically progresses from acute infection to clinical latency (asymptomatic phase) and finally to AIDS."
  },
  {
    id: "medium-6",
    question: "What is the mechanism of action of protease inhibitors in HIV treatment?",
    options: [
      "They prevent viral entry into host cells",
      "They block the cleavage of viral polyproteins into functional enzymes",
      "They inhibit reverse transcriptase activity",
      "They prevent integration of viral DNA into host genome"
    ],
    correctAnswer: 1,
    explanation: "Protease inhibitors prevent HIV protease from cleaving viral polyproteins into functional enzymes, resulting in immature, non-infectious virions."
  },
  {
    id: "medium-7",
    question: "Which diagnostic test can detect HIV infection during the window period?",
    options: [
      "Antibody test (ELISA)",
      "Western blot",
      "PCR for viral RNA",
      "CD4 cell count"
    ],
    correctAnswer: 2,
    explanation: "PCR tests that detect viral RNA can identify HIV infection during the window period before antibodies develop."
  },
  {
    id: "medium-8",
    question: "What is the significance of viral load testing in HIV management?",
    options: [
      "It measures the number of CD4+ cells",
      "It quantifies the amount of HIV RNA in blood",
      "It detects HIV-specific antibodies",
      "It identifies opportunistic infections"
    ],
    correctAnswer: 1,
    explanation: "Viral load testing measures the amount of HIV RNA in the blood, indicating how actively the virus is replicating."
  },
  {
    id: "medium-9",
    question: "Which of the following is an AIDS-defining condition?",
    options: [
      "Oral thrush",
      "Kaposi's sarcoma",
      "Seasonal influenza",
      "Common cold"
    ],
    correctAnswer: 1,
    explanation: "Kaposi's sarcoma is an AIDS-defining malignancy caused by human herpesvirus 8 that occurs in immunocompromised individuals."
  },
  {
    id: "medium-10",
    question: "What is the primary mechanism of mother-to-child HIV transmission during delivery?",
    options: [
      "Through placental transfer",
      "Through breast milk exposure",
      "Through exposure to maternal blood and fluids during birth",
      "Through genetic inheritance"
    ],
    correctAnswer: 2,
    explanation: "During delivery, the baby can be exposed to HIV through contact with maternal blood and cervicovaginal fluids."
  },
  {
    id: "medium-11",
    question: "Which cells serve as reservoirs for HIV during antiretroviral therapy?",
    options: [
      "Red blood cells",
      "Resting memory CD4+ T-cells",
      "Neutrophils",
      "Platelets"
    ],
    correctAnswer: 1,
    explanation: "Resting memory CD4+ T-cells can harbor latent HIV provirus and serve as reservoirs that persist during antiretroviral therapy."
  },
  {
    id: "medium-12",
    question: "What is the function of integrase inhibitors in HIV treatment?",
    options: [
      "They prevent viral entry into cells",
      "They block integration of viral DNA into host genome",
      "They inhibit reverse transcriptase",
      "They prevent viral budding from cells"
    ],
    correctAnswer: 1,
    explanation: "Integrase inhibitors prevent HIV integrase from inserting viral DNA into the host cell's chromosomes."
  },
  {
    id: "medium-13",
    question: "Which of the following best describes the concept of 'Undetectable = Untransmittable' (U=U)?",
    options: [
      "People with undetectable viral load cannot sexually transmit HIV",
      "Undetectable viral load means HIV is cured",
      "Treatment is no longer needed when viral load is undetectable",
      "Undetectable viral load prevents all opportunistic infections"
    ],
    correctAnswer: 0,
    explanation: "U=U means that people with HIV who maintain an undetectable viral load cannot sexually transmit the virus to others."
  },
  {
    id: "medium-14",
    question: "What is the primary role of HIV's gp120 protein?",
    options: [
      "It functions as reverse transcriptase",
      "It mediates attachment to CD4 receptors",
      "It acts as a protease enzyme",
      "It packages viral RNA"
    ],
    correctAnswer: 1,
    explanation: "gp120 is the envelope glycoprotein that mediates HIV attachment to CD4 receptors on host cells."
  },
  {
    id: "medium-15",
    question: "Which of the following factors increases the risk of HIV transmission?",
    options: [
      "High viral load in the source person",
      " Presence of other sexually transmitted infections",
      "Unprotected sexual intercourse",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these factors increase the risk of HIV transmission by increasing viral exposure or compromising mucosal barriers."
  },
  {
    id: "medium-16",
    question: "What is the significance of HIV drug resistance testing?",
    options: [
      "It determines CD4 cell count",
      "It identifies mutations that reduce drug effectiveness",
      "It measures viral load",
      "It detects opportunistic infections"
    ],
    correctAnswer: 1,
    explanation: "Drug resistance testing identifies genetic mutations in HIV that confer resistance to specific antiretroviral drugs."
  },
  {
    id: "medium-17",
    question: "Which of the following is a common neurological complication of advanced HIV infection?",
    options: [
      "HIV-associated dementia",
      "Multiple sclerosis",
      "Parkinson's disease",
      "Alzheimer's disease"
    ],
    correctAnswer: 0,
    explanation: "HIV-associated dementia is a neurological complication characterized by cognitive, motor, and behavioral abnormalities in advanced HIV."
  },
  {
    id: "medium-18",
    question: "What is the mechanism of action of fusion inhibitors?",
    options: [
      "They block HIV reverse transcriptase",
      "They prevent viral entry by inhibiting membrane fusion",
      "They inhibit HIV integrase",
      "They block viral protease"
    ],
    correctAnswer: 1,
    explanation: "Fusion inhibitors prevent HIV from entering cells by blocking the fusion of viral and cellular membranes."
  },
  {
    id: "medium-19",
    question: "Which of the following is an appropriate post-exposure prophylaxis (PEP) regimen?",
    options: [
      "Single-dose antiretroviral taken within 72 hours",
      "28-day course of combination antiretrovirals started within 72 hours",
      "Antibiotics taken for 7 days",
      "Vaccination series started within 24 hours"
    ],
    correctAnswer: 1,
    explanation: "PEP involves a 28-day course of combination antiretroviral drugs started within 72 hours of potential HIV exposure."
  },
  {
    id: "medium-20",
    question: "What is the primary cause of death in AIDS patients?",
    options: [
      "HIV itself",
      "Opportunistic infections and cancers",
      "Antiretroviral toxicity",
      "Organ failure due to direct HIV damage"
    ],
    correctAnswer: 1,
    explanation: "Most AIDS-related deaths result from opportunistic infections and cancers that occur due to severe immune suppression."
  },
  {
    id: "medium-21",
    question: "Which of the following statements about HIV latency is correct?",
    options: [
      "HIV remains latent as episomal DNA in the cytoplasm",
      "Latent HIV is integrated into host DNA and not actively replicating",
      "Latency occurs only in CD8+ T-cells",
      "Latent HIV can be completely eliminated by current antiretrovirals"
    ],
    correctAnswer: 1,
    explanation: "Latent HIV exists as integrated provirus in host DNA without active replication, creating a persistent reservoir."
  },
  {
    id: "medium-22",
    question: "What is the role of HIV's Nef protein?",
    options: [
      "It functions as reverse transcriptase",
      "It downregulates CD4 and MHC class I molecules",
      "It acts as the main protease",
      "It packages viral RNA"
    ],
    correctAnswer: 1,
    explanation: "Nef downregulates CD4 and MHC class I molecules from the cell surface, helping HIV evade immune detection."
  },
  {
    id: "medium-23",
    question: "Which of the following is a characteristic feature of acute HIV infection?",
    options: [
      "High viral load and rapid CD4+ cell decline",
      "Undetectable viral load",
      "Normal CD4+ cell count with no symptoms",
      "Complete absence of immune response"
    ],
    correctAnswer: 0,
    explanation: "Acute HIV infection is characterized by very high viral load and rapid decline in CD4+ T-cells."
  },
  {
    id: "medium-24",
    question: "What is the significance of the CXCR4 co-receptor in HIV infection?",
    options: [
      "It is used by T-cell tropic (X4) HIV strains",
      "It functions as the primary attachment receptor",
      "It is the target for protease inhibitors",
      "It is only present on macrophage cells"
    ],
    correctAnswer: 0,
    explanation: "CXCR4 serves as a co-receptor for T-cell tropic (X4) HIV strains, which typically emerge later in infection."
  },
  {
    id: "medium-25",
    question: "Which of the following best describes HIV's mutation rate?",
    options: [
      "Extremely low due to proofreading by reverse transcriptase",
      "Moderate, similar to DNA viruses",
      "Extremely high due to error-prone reverse transcriptase",
      "Variable depending on host factors only"
    ],
    correctAnswer: 2,
    explanation: "HIV has an extremely high mutation rate because reverse transcriptase lacks proofreading ability, leading to many errors during replication."
  },
  {
    id: "medium-26",
    question: "What is the primary goal of antiretroviral therapy?",
    options: [
      "To cure HIV infection completely",
      "To achieve and maintain viral suppression",
      "To eliminate all latent reservoirs",
      "To prevent all opportunistic infections"
    ],
    correctAnswer: 1,
    explanation: "The primary goal of ART is to achieve and maintain viral suppression, which preserves immune function and prevents disease progression."
  },
  {
    id: "medium-27",
    question: "Which of the following is an AIDS-defining opportunistic infection?",
    options: [
      "Pneumocystis jirovecii pneumonia",
      "Seasonal influenza",
      "Common cold",
      "Strep throat"
    ],
    correctAnswer: 0,
    explanation: "Pneumocystis jirovecii pneumonia is an AIDS-defining opportunistic infection that occurs in severely immunocompromised individuals."
  },
  {
    id: "medium-28",
    question: "What is the mechanism of HIV transmission through breast milk?",
    options: [
      "Through HIV particles present in milk",
      "Through infected cells in milk",
      "Through both free virus and infected cells",
      "Through nutritional components of milk"
    ],
    correctAnswer: 2,
    explanation: "HIV transmission through breast milk can occur via both free virus particles and HIV-infected cells present in the milk."
  },
  {
    id: "medium-29",
    question: "Which of the following statements about HIV vaccine development is correct?",
    options: [
      "An effective HIV vaccine is widely available",
      "Vaccine development is challenging due to HIV's genetic diversity",
      "HIV cannot elicit immune responses suitable for vaccination",
      "Vaccines are effective only for certain HIV subtypes"
    ],
    correctAnswer: 1,
    explanation: "HIV vaccine development faces challenges due to the virus's extreme genetic diversity and ability to evade immune responses."
  },
  {
    id: "medium-30",
    question: "What is the significance of the HIV reservoir?",
    options: [
      "It is the site of active viral replication",
      "It consists of cells with latent HIV that persist during therapy",
      "It refers to extracellular virus in blood",
      "It is where HIV proteins are synthesized"
    ],
    correctAnswer: 1,
    explanation: "The HIV reservoir consists of cells with integrated provirus that remains latent during therapy, preventing cure."
  },
  {
    id: "medium-31",
    question: "Which of the following is a common cutaneous manifestation of HIV infection?",
    options: [
      "Kaposi's sarcoma lesions",
      "Psoriasis vulgaris",
      "Alopecia areata",
      "Vitiligo"
    ],
    correctAnswer: 0,
    explanation: "Kaposi's sarcoma often presents with cutaneous lesions that appear as purplish nodules or patches in HIV patients."
  },
  {
    id: "medium-32",
    question: "What is the role of HIV's Tat protein?",
    options: [
      "It functions as reverse transcriptase",
      "It enhances viral transcription elongation",
      "It acts as a protease enzyme",
      "It mediates viral entry"
    ],
    correctAnswer: 1,
    explanation: "Tat enhances viral transcription elongation by recruiting cellular factors to the HIV promoter."
  },
  {
    id: "medium-33",
    question: "Which of the following factors affects HIV transmission risk during needlestick injury?",
    options: [
      "Depth of injury",
      "Visible blood on the needle",
      "Viral load of source person",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these factors affect transmission risk: deeper injuries, visible blood, and higher source viral load increase risk."
  },
  {
    id: "medium-34",
    question: "What is the significance of HIV genotype testing?",
    options: [
      "It determines CD4 cell count",
      "It identifies drug resistance mutations",
      "It measures viral load",
      "It detects opportunistic infections"
    ],
    correctAnswer: 1,
    explanation: "Genotype testing identifies specific mutations in HIV that confer resistance to antiretroviral drugs."
  },
  {
    id: "medium-35",
    question: "Which of the following is a common gastrointestinal complication of HIV/AIDS?",
    options: [
      "Cryptosporidiosis",
      "Peptic ulcer disease",
      "Irritable bowel syndrome",
      "Celiac disease"
    ],
    correctAnswer: 0,
    explanation: "Cryptosporidiosis is a parasitic infection that causes severe diarrhea in immunocompromised HIV patients."
  },
  {
    id: "medium-36",
    question: "What is the mechanism of action of NNRTIs (Non-Nucleoside Reverse Transcriptase Inhibitors)?",
    options: [
      "They incorporate into DNA and cause chain termination",
      "They bind directly to reverse transcriptase and inhibit its function",
      "They block HIV protease activity",
      "They prevent viral integration"
    ],
    correctAnswer: 1,
    explanation: "NNRTIs bind directly to reverse transcriptase at a site away from the active center, causing conformational changes that inhibit enzyme function."
  },
  {
    id: "medium-37",
    question: "Which of the following is a characteristic of HIV's envelope glycoproteins?",
    options: [
      "They are highly conserved across all HIV strains",
      "They show extensive genetic variation",
      "They are identical to human glycoproteins",
      "They do not elicit immune responses"
    ],
    correctAnswer: 1,
    explanation: "HIV envelope glycoproteins show extensive genetic variation due to high mutation rates and immune selection pressure."
  },
  {
    id: "medium-38",
    question: "What is the primary purpose of HIV pre-exposure prophylaxis (PrEP)?",
    options: [
      "To treat active HIV infection",
      "To prevent HIV infection in high-risk individuals",
      "To cure latent HIV infection",
      "To prevent opportunistic infections"
    ],
    correctAnswer: 1,
    explanation: "PrEP involves taking antiretroviral drugs to prevent HIV acquisition in individuals at high risk of infection."
  },
  {
    id: "medium-39",
    question: "Which of the following statements about HIV and the immune system is correct?",
    options: [
      "HIV directly destroys CD8+ cytotoxic T-cells",
      "HIV primarily targets CD4+ helper T-cells",
      "HIV has no effect on B-cell function",
      "HIV stimulates excessive antibody production"
    ],
    correctAnswer: 1,
    explanation: "HIV primarily infects and destroys CD4+ helper T-cells, leading to progressive immune deficiency."
  },
  {
    id: "medium-40",
    question: "What is the significance of the HIV pol gene?",
    options: [
      "It codes for envelope proteins",
      "It codes for reverse transcriptase, protease, and integrase",
      "It regulates viral latency",
      "It determines cell tropism"
    ],
    correctAnswer: 1,
    explanation: "The pol gene codes for three essential enzymes: reverse transcriptase, protease, and integrase."
  },
  {
    id: "medium-41",
    question: "Which of the following is a common ophthalmologic complication of AIDS?",
    options: [
      "CMV retinitis",
      "Cataracts",
      "Glaucoma",
      "Macular degeneration"
    ],
    correctAnswer: 0,
    explanation: "CMV retinitis is a common sight-threatening infection in AIDS patients with severe immune suppression."
  },
  {
    id: "medium-42",
    question: "What is the mechanism of HIV entry into host cells?",
    options: [
      "Direct penetration through the cell membrane",
      "Receptor-mediated endocytosis",
      "Fusion of viral and cellular membranes",
      "Phagocytosis by immune cells"
    ],
    correctAnswer: 2,
    explanation: "HIV enters cells through fusion of viral and cellular membranes mediated by envelope glycoproteins and cellular receptors."
  },
  {
    id: "medium-43",
    question: "Which of the following factors contributes to HIV's genetic diversity?",
    options: [
      "Error-prone reverse transcriptase",
      "High replication rate",
      "Recombination between different strains",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV's genetic diversity results from error-prone reverse transcription, high replication rates, and recombination between strains."
  },
  {
    id: "medium-44",
    question: "What is the role of HIV's Rev protein?",
    options: [
      "It functions as reverse transcriptase",
      "It regulates nuclear export of unspliced viral RNAs",
      "It acts as a protease enzyme",
      "It mediates viral attachment"
    ],
    correctAnswer: 1,
    explanation: "Rev regulates the nuclear export of unspliced and partially spliced HIV RNAs, allowing production of structural proteins."
  },
  {
    id: "medium-45",
    question: "Which of the following is a common respiratory complication of AIDS?",
    options: [
      "Pulmonary tuberculosis",
      "Asthma",
      "Chronic bronchitis",
      "Emphysema"
    ],
    correctAnswer: 0,
    explanation: "Pulmonary tuberculosis is a common and serious respiratory complication in AIDS patients, especially in endemic areas."
  },
  {
    id: "medium-46",
    question: "What is the significance of coreceptor tropism in HIV treatment?",
    options: [
      "It determines susceptibility to CCR5 antagonists",
      "It affects CD4 cell count",
      "It influences viral load measurement",
      "It predicts development of Kaposi's sarcoma"
    ],
    correctAnswer: 0,
    explanation: "Coreceptor tropism testing determines whether HIV uses CCR5, CXCR4, or both, which affects eligibility for CCR5 antagonist drugs."
  },
  {
    id: "medium-47",
    question: "Which of the following statements about HIV and pregnancy is correct?",
    options: [
      "HIV always transmits to the baby during pregnancy",
      "With proper treatment, transmission risk can be reduced to <1%",
      "Cesarean delivery eliminates all transmission risk",
      "HIV treatment is contraindicated during pregnancy"
    ],
    correctAnswer: 1,
    explanation: "With proper antiretroviral treatment during pregnancy, the risk of mother-to-child HIV transmission can be reduced to less than 1%."
  },
  {
    id: "medium-48",
    question: "What is the mechanism of HIV-associated wasting syndrome?",
    options: [
      "Direct viral destruction of muscle tissue",
      "Malabsorption and hypermetabolism",
      "Toxin production by HIV",
      "Autoimmune destruction of adipose tissue"
    ],
    correctAnswer: 1,
    explanation: "HIV wasting involves malabsorption, hypermetabolism, and cytokine-mediated catabolism leading to weight loss and muscle wasting."
  },
  {
    id: "medium-49",
    question: "Which of the following is a common hematological complication of HIV/AIDS?",
    options: [
      "Anemia",
      "Polycythemia",
      "Leukocytosis",
      "Thrombocytosis"
    ],
    correctAnswer: 0,
    explanation: "Anemia is a common hematological complication in HIV/AIDS due to chronic disease, medications, and opportunistic infections."
  },
  {
    id: "medium-50",
    question: "What is the significance of the HIV gag gene?",
    options: [
      "It codes for envelope proteins",
      "It codes for structural proteins (matrix, capsid, nucleocapsid)",
      "It regulates viral transcription",
      "It determines coreceptor usage"
    ],
    correctAnswer: 1,
    explanation: "The gag gene codes for structural proteins including matrix (p17), capsid (p24), and nucleocapsid (p7) proteins."
  },
  {
    id: "medium-51",
    question: "Which of the following is a common fungal infection in advanced HIV?",
    options: [
      "Cryptococcal meningitis",
      "Aspergillosis",
      "Candidiasis",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these fungal infections occur more frequently and severely in advanced HIV due to immune suppression."
  },
  {
    id: "medium-52",
    question: "What is the role of HIV's Vpu protein?",
    options: [
      "It enhances viral entry",
      "It promotes CD4 degradation and virion release",
      "It functions as reverse transcriptase",
      "It packages viral RNA"
    ],
    correctAnswer: 1,
    explanation: "Vpu promotes degradation of CD4 receptors and enhances virion release by counteracting host restriction factors."
  },
  {
    id: "medium-53",
    question: "Which of the following factors affects HIV progression rate?",
    options: [
      "Viral subtype",
      "Host genetics",
      "Co-infections",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV progression is influenced by viral factors (subtype), host genetics (HLA types), and co-infections."
  },
  {
    id: "medium-54",
    question: "What is the mechanism of action of NRTIs (Nucleoside Reverse Transcriptase Inhibitors)?",
    options: [
      "They bind directly to reverse transcriptase",
      "They incorporate into DNA and cause chain termination",
      "They inhibit HIV protease",
      "They block viral integration"
    ],
    correctAnswer: 1,
    explanation: "NRTIs are nucleoside analogs that incorporate into growing DNA chains during reverse transcription, causing premature chain termination."
  },
  {
    id: "medium-55",
    question: "Which of the following is a common dermatological manifestation of acute HIV infection?",
    options: [
      "Maculopapular rash",
      "Psoriasis",
      "Vitiligo",
      "Alopecia"
    ],
    correctAnswer: 0,
    explanation: "A maculopapular rash commonly appears during acute HIV infection, typically on the trunk and extremities."
  },
  {
    id: "medium-56",
    question: "What is the significance of HIV serodiscordant couples?",
    options: [
      "Both partners have HIV",
      "One partner has HIV, the other does not",
      "Both partners are HIV negative",
      "HIV status is unknown for both partners"
    ],
    correctAnswer: 1,
    explanation: "Serodiscordant couples have one HIV-positive and one HIV-negative partner, requiring specific prevention strategies."
  },
  {
    id: "medium-57",
    question: "Which of the following statements about HIV and the central nervous system is correct?",
    options: [
      "HIV cannot cross the blood-brain barrier",
      "HIV can infect brain macrophages and microglia",
      "HIV only affects peripheral nerves",
      "Neurological complications are always reversible with treatment"
    ],
    correctAnswer: 1,
    explanation: "HIV can cross the blood-brain barrier and infect brain macrophages and microglia, leading to neurological complications."
  },
  {
    id: "medium-58",
    question: "What is the role of HIV's Vif protein?",
    options: [
      "It functions as reverse transcriptase",
      "It counteracts host APOBEC3G antiviral activity",
      "It acts as a protease enzyme",
      "It mediates viral attachment"
    ],
    correctAnswer: 1,
    explanation: "Vif counteracts the host APOBEC3G protein, which would otherwise cause hypermutations in the viral genome."
  },
  {
    id: "medium-59",
    question: "Which of the following is a common metabolic complication of HIV treatment?",
    options: [
      "Lipodystrophy",
      "Weight gain",
      "Hypoglycemia",
      "Vitamin deficiency"
    ],
    correctAnswer: 0,
    explanation: "Lipodystrophy (fat redistribution) is a metabolic complication associated with certain antiretroviral drugs."
  },
  {
    id: "medium-60",
    question: "What is the significance of the HIV env gene?",
    options: [
      "It codes for structural proteins",
      "It codes for envelope glycoproteins gp120 and gp41",
      "It regulates viral replication",
      "It determines integration sites"
    ],
    correctAnswer: 1,
    explanation: "The env gene codes for envelope glycoproteins gp120 (surface) and gp41 (transmembrane)."
  },
  {
    id: "medium-61",
    question: "Which of the following is a common oncological complication of AIDS?",
    options: [
      "Non-Hodgkin lymphoma",
      "Breast cancer",
      "Prostate cancer",
      "Lung cancer"
    ],
    correctAnswer: 0,
    explanation: "Non-Hodgkin lymphoma is an AIDS-defining cancer that occurs with increased frequency in immunocompromised patients."
  },
  {
    id: "medium-62",
    question: "What is the mechanism of HIV transmission through blood transfusion?",
    options: [
      "Through white blood cells only",
      "Through plasma components only",
      "Through cellular and acellular blood components",
      "Through platelet concentrate only"
    ],
    correctAnswer: 2,
    explanation: "HIV can transmit through both cellular (white blood cells) and acellular (plasma) blood components."
  },
  {
    id: "medium-63",
    question: "Which of the following statements about HIV and hepatitis co-infection is correct?",
    options: [
      "HIV does not affect hepatitis progression",
      "HIV accelerates hepatitis-related liver disease",
      "Hepatitis protects against HIV progression",
      "Co-infection is extremely rare"
    ],
    correctAnswer: 1,
    explanation: "HIV accelerates progression of hepatitis-related liver disease due to impaired immune control of hepatitis viruses."
  },
  {
    id: "medium-64",
    question: "What is the role of HIV's Vpr protein?",
    options: [
      "It functions as reverse transcriptase",
      "It facilitates nuclear import and induces G2 cell cycle arrest",
      "It acts as a protease enzyme",
      "It mediates viral attachment"
    ],
    correctAnswer: 1,
    explanation: "Vpr facilitates nuclear import of the pre-integration complex and induces G2 cell cycle arrest."
  },
  {
    id: "medium-65",
    question: "Which of the following is a common renal complication of HIV?",
    options: [
      "HIV-associated nephropathy",
      "Diabetic nephropathy",
      "Polycystic kidney disease",
      "Renal artery stenosis"
    ],
    correctAnswer: 0,
    explanation: "HIV-associated nephropathy is a kidney disease characterized by proteinuria and rapid progression to renal failure."
  },
  {
    id: "medium-66",
    question: "What is the significance of HIV elite controllers?",
    options: [
      "They clear HIV infection completely",
      "They maintain low viral loads without treatment",
      "They are resistant to all antiretroviral drugs",
      "They have exceptionally high CD4 counts despite high viral load"
    ],
    correctAnswer: 1,
    explanation: "Elite controllers maintain undetectable or very low viral loads without antiretroviral therapy."
  },
  {
    id: "medium-67",
    question: "Which of the following is a common gastrointestinal manifestation of AIDS?",
    options: [
      "Chronic diarrhea",
      "Constipation",
      "Gastric ulcers",
      "Gallstones"
    ],
    correctAnswer: 0,
    explanation: "Chronic diarrhea is a common gastrointestinal problem in AIDS due to opportunistic infections and HIV enteropathy."
  },
  {
    id: "medium-68",
    question: "What is the mechanism of HIV resistance to antiretroviral drugs?",
    options: [
      "Through mutations that reduce drug binding or efficacy",
      "Through complete change of viral structure",
      "Through elimination of target enzymes",
      "Through enhanced immune recognition"
    ],
    correctAnswer: 0,
    explanation: "HIV develops resistance through mutations that reduce drug binding to target enzymes or enhance drug efflux."
  },
  {
    id: "medium-69",
    question: "Which of the following statements about HIV and tuberculosis is correct?",
    options: [
      "HIV increases the risk of active TB disease",
      "TB protects against HIV infection",
      "HIV and TB never occur together",
      "TB treatment is ineffective in HIV patients"
    ],
    correctAnswer: 0,
    explanation: "HIV significantly increases the risk of progressing from latent TB infection to active TB disease."
  },
  {
    id: "medium-70",
    question: "What is the role of HIV's p6 protein?",
    options: [
      "It functions as reverse transcriptase",
      "It facilitates viral budding",
      "It acts as a protease enzyme",
      "It mediates viral entry"
    ],
    correctAnswer: 1,
    explanation: "The p6 protein contains domains that interact with host ESCRT machinery to facilitate viral budding."
  },
  {
    id: "medium-71",
    question: "Which of the following is a common endocrine complication of HIV?",
    options: [
      "Adrenal insufficiency",
      "Diabetes insipidus",
      "Hyperthyroidism",
      "Precocious puberty"
    ],
    correctAnswer: 0,
    explanation: "Adrenal insufficiency can occur in HIV due to opportunistic infections, medications, or direct viral effects."
  },
  {
    id: "medium-72",
    question: "What is the significance of HIV post-treatment controllers?",
    options: [
      "They clear HIV infection completely after treatment",
      "They maintain viral suppression after stopping treatment",
      "They are resistant to all antiretroviral drugs",
      "They have naturally high CD4 counts without treatment"
    ],
    correctAnswer: 1,
    explanation: "Post-treatment controllers maintain viral suppression for extended periods after stopping antiretroviral therapy."
  },
  {
    id: "medium-73",
    question: "Which of the following is a common cardiovascular complication of HIV?",
    options: [
      "Accelerated atherosclerosis",
      "Congenital heart disease",
      "Rheumatic heart disease",
      "Pericardial effusion only"
    ],
    correctAnswer: 0,
    explanation: "HIV and certain antiretroviral drugs are associated with accelerated atherosclerosis and increased cardiovascular risk."
  },
  {
    id: "medium-74",
    question: "What is the mechanism of HIV-induced CD4+ T-cell depletion?",
    options: [
      "Direct viral killing",
      "Immune-mediated killing of infected cells",
      "Impaired production of new T-cells",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "CD4+ T-cell depletion results from direct viral killing, immune clearance of infected cells, and impaired thymic production."
  },
  {
    id: "medium-75",
    question: "Which of the following statements about HIV and malaria is correct?",
    options: [
      "HIV increases susceptibility to severe malaria",
      "Malaria protects against HIV infection",
      "HIV and malaria never occur together",
      "Malaria treatment is ineffective in HIV patients"
    ],
    correctAnswer: 0,
    explanation: "HIV infection increases susceptibility to severe malaria and complicates malaria treatment."
  },
  {
    id: "medium-76",
    question: "What is the role of HIV's Tat protein in viral pathogenesis?",
    options: [
      "It enhances viral replication",
      "It induces apoptosis in uninfected cells",
      "It promotes immune activation",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Tat enhances viral replication, induces apoptosis in uninfected cells, and promotes chronic immune activation."
  },
  {
    id: "medium-77",
    question: "Which of the following is a common musculoskeletal complication of HIV?",
    options: [
      "HIV-associated arthralgia",
      "Rheumatoid arthritis",
      "Osteoporosis",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV can cause various musculoskeletal problems including arthralgia, arthritis, and reduced bone density."
  },
  {
    id: "medium-78",
    question: "What is the significance of HIV viral blips?",
    options: [
      "They indicate treatment failure",
      "They are temporary, small increases in viral load",
      "They signal drug resistance development",
      "They indicate complete viral clearance"
    ],
    correctAnswer: 1,
    explanation: "Viral blips are temporary, small increases in viral load that don't necessarily indicate treatment failure."
  },
  {
    id: "medium-79",
    question: "Which of the following is a common psychiatric complication of HIV?",
    options: [
      "Depression",
      "Anxiety disorders",
      "HIV-associated dementia",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV patients commonly experience depression, anxiety, and HIV-associated neurocognitive disorders."
  },
  {
    id: "medium-80",
    question: "What is the mechanism of HIV transmission through organ transplantation?",
    options: [
      "Through HIV-infected donor organs",
      "Through surgical instruments only",
      "Through blood transfusion during surgery",
      "Through anesthetic agents"
    ],
    correctAnswer: 0,
    explanation: "HIV can transmit through transplantation of organs from HIV-infected donors."
  },
  {
    id: "medium-81",
    question: "Which of the following statements about HIV and aging is correct?",
    options: [
      "HIV accelerates aging-related conditions",
      "HIV protects against age-related diseases",
      "Aging has no effect on HIV progression",
      "HIV only affects young individuals"
    ],
    correctAnswer: 0,
    explanation: "HIV infection is associated with accelerated aging and earlier onset of age-related conditions."
  },
  {
    id: "medium-82",
    question: "What is the role of HIV's Nef protein in viral persistence?",
    options: [
      "It enhances viral replication efficiency",
      "It promotes survival of infected cells",
      "It facilitates immune evasion",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Nef enhances viral replication, promotes survival of infected cells, and facilitates immune evasion, contributing to viral persistence."
  },
  {
    id: "medium-83",
    question: "Which of the following is a common oral complication of HIV?",
    options: [
      "Oral hairy leukoplakia",
      "Oral candidiasis",
      "Periodontal disease",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV commonly causes oral hairy leukoplakia, candidiasis, and periodontal diseases."
  },
  {
    id: "medium-84",
    question: "What is the significance of HIV compartmentalization?",
    options: [
      "Viral evolution differs in various body compartments",
      "HIV is evenly distributed throughout the body",
      "All compartments have identical viral populations",
      "Compartmentalization indicates imminent cure"
    ],
    correctAnswer: 0,
    explanation: "HIV can evolve differently in various body compartments (CNS, genital tract, etc.), creating distinct viral populations."
  },
  {
    id: "medium-85",
    question: "Which of the following is a common nutritional issue in HIV/AIDS?",
    options: [
      "Micronutrient deficiencies",
      "Malabsorption",
      "Wasting syndrome",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV/AIDS commonly causes micronutrient deficiencies, malabsorption, and wasting syndrome."
  },
  {
    id: "medium-86",
    question: "What is the mechanism of HIV-induced chronic immune activation?",
    options: [
      "Persistent viral replication",
      "Microbial translocation from gut",
      "Co-infections",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Chronic immune activation in HIV results from persistent viral replication, microbial translocation, and co-infections."
  },
  {
    id: "medium-87",
    question: "Which of the following statements about HIV and women is correct?",
    options: [
      "HIV progression is faster in women than men",
      "Women have lower viral loads than men at same CD4 count",
      "HIV does not affect women differently than men",
      "Women are naturally immune to HIV"
    ],
    correctAnswer: 1,
    explanation: "Women typically have lower viral loads than men at the same CD4 count, though progression rates are similar."
  },
  {
    id: "medium-88",
    question: "What is the role of HIV's Vpu protein in viral release?",
    options: [
      "It counteracts tetherin (BST-2) restriction factor",
      "It functions as reverse transcriptase",
      "It acts as a protease enzyme",
      "It mediates viral entry"
    ],
    correctAnswer: 0,
    explanation: "Vpu counteracts the host restriction factor tetherin (BST-2), which would otherwise trap viral particles at the cell surface."
  },
  {
    id: "medium-89",
    question: "Which of the following is a common pulmonary complication of HIV?",
    options: [
      "Pulmonary hypertension",
      "Asthma",
      "Chronic obstructive pulmonary disease",
      "Cystic fibrosis"
    ],
    correctAnswer: 0,
    explanation: "HIV-associated pulmonary hypertension occurs with increased frequency in people living with HIV."
  },
  {
    id: "medium-90",
    question: "What is the significance of HIV cure research?",
    options: [
      "Focuses on eliminating latent reservoirs",
      "Aims to develop therapeutic vaccines",
      "Seeks immune-based interventions",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV cure research focuses on eliminating reservoirs, developing therapeutic vaccines, and immune-based approaches."
  },
  {
    id: "medium-91",
    question: "Which of the following is a common hematological manifestation of HIV?",
    options: [
      "Thrombocytopenia",
      "Polycythemia",
      "Leukocytosis",
      "Erythrocytosis"
    ],
    correctAnswer: 0,
    explanation: "Thrombocytopenia (low platelet count) commonly occurs in HIV due to immune-mediated destruction and impaired production."
  },
  {
    id: "medium-92",
    question: "What is the mechanism of HIV transmission through artificial insemination?",
    options: [
      "Through HIV-infected semen",
      "Through processing equipment",
      "Through culture media",
      "Through surgical instruments"
    ],
    correctAnswer: 0,
    explanation: "HIV can transmit through artificial insemination using HIV-infected semen."
  },
  {
    id: "medium-93",
    question: "Which of the following statements about HIV and children is correct?",
    options: [
      "HIV progresses faster in children than adults",
      "Children have stronger immune responses to HIV",
      "HIV never transmits to children",
      "Children are naturally resistant to HIV"
    ],
    correctAnswer: 0,
    explanation: "Without treatment, HIV typically progresses faster in children than adults due to developing immune systems."
  },
  {
    id: "medium-94",
    question: "What is the role of HIV's Rev protein in viral replication?",
    options: [
      "It regulates splicing and nuclear export of viral RNA",
      "It functions as reverse transcriptase",
      "It acts as a protease enzyme",
      "It mediates viral attachment"
    ],
    correctAnswer: 0,
    explanation: "Rev regulates the switch from spliced to unspliced viral RNA and facilitates nuclear export of unspliced RNAs."
  },
  {
    id: "medium-95",
    question: "Which of the following is a common immunological feature of HIV infection?",
    options: [
      "Chronic immune activation",
      "Increased regulatory T-cell function",
      "Enhanced antibody diversity",
      "Improved vaccine responses"
    ],
    correctAnswer: 0,
    explanation: "HIV infection is characterized by chronic immune activation that contributes to disease progression."
  },
  {
    id: "medium-96",
    question: "What is the significance of HIV superinfection?",
    options: [
      "Infection with a second HIV strain",
      "Infection with multiple viruses simultaneously",
      "Exceptionally strong immune response to HIV",
      "Complete clearance of HIV infection"
    ],
    correctAnswer: 0,
    explanation: "HIV superinfection refers to infection with a second HIV strain after the initial infection is established."
  },
  {
    id: "medium-97",
    question: "Which of the following is a common gastrointestinal pathogen in AIDS?",
    options: [
      "Cryptosporidium",
      "Salmonella",
      "Campylobacter",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All these gastrointestinal pathogens cause more severe and persistent disease in AIDS patients."
  },
  {
    id: "medium-98",
    question: "What is the mechanism of HIV transmission through needlestick injury?",
    options: [
      "Inoculation of infected blood",
      "Aerosol transmission",
      "Surface contamination",
      "Airborne transmission"
    ],
    correctAnswer: 0,
    explanation: "Needlestick injuries transmit HIV through inoculation of infected blood into the recipient's tissue."
  },
  {
    id: "medium-99",
    question: "Which of the following statements about HIV and the liver is correct?",
    options: [
      "HIV can cause direct liver damage",
      "Antiretroviral drugs can cause liver toxicity",
      "Co-infection with hepatitis viruses worsens outcomes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV can directly affect the liver, ART drugs can be hepatotoxic, and hepatitis co-infections worsen liver outcomes."
  },
  {
    id: "medium-100",
    question: "What is the significance of HIV latency reversal strategies?",
    options: [
      "They activate latent virus for elimination",
      "They strengthen latent viral reservoirs",
      "They prevent viral entry",
      "They enhance immune responses alone"
    ],
    correctAnswer: 0,
    explanation: "Latency reversal strategies aim to activate latent HIV so infected cells can be eliminated by immune responses or viral cytopathic effects."
  }
];
export const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "Which molecular mechanism explains HIV's ability to establish latent infection in resting CD4+ T-cells?",
    options: [
      "Integration of proviral DNA into transcriptionally silent regions of heterochromatin",
      "Complete degradation of viral RNA by host restriction factors",
      "Encapsulation of viral genome within lipid droplets",
      "Formation of episomal DNA circles resistant to integration"
    ],
    correctAnswer: 0,
    explanation: "HIV establishes latency by integrating proviral DNA into transcriptionally silent heterochromatic regions of the host genome, allowing viral persistence without active replication."
  },
  {
    id: "hard-2",
    question: "What is the structural basis for broadly neutralizing antibodies (bNAbs) targeting the HIV envelope CD4 binding site?",
    options: [
      "They recognize conserved glycans on gp120 variable loops",
      "They mimic CD4 binding through long complementary-determining region 3 (CDR H3) loops",
      "They target exclusively the membrane-proximal external region (MPER) of gp41",
      "They bind to conformational epitopes created only after CD4 engagement"
    ],
    correctAnswer: 1,
    explanation: "bNAbs targeting the CD4 binding site often use exceptionally long CDR H3 loops to penetrate the glycan shield and mimic CD4 binding to conserved regions of gp120."
  },
  {
    id: "hard-3",
    question: "Which host restriction factor does HIV Vpu specifically counteract to enhance viral particle release?",
    options: [
      "APOBEC3G",
      "Tetherin (BST-2/CD317)",
      "SAMHD1",
      "TRIM5α"
    ],
    correctAnswer: 1,
    explanation: "Vpu counteracts tetherin (BST-2), a host restriction factor that traps viral particles at the cell surface by directly binding to and promoting its degradation."
  },
  {
    id: "hard-4",
    question: "What is the precise mechanism of HIV integrase strand transfer inhibitors (INSTIs)?",
    options: [
      "They competitively inhibit integrase binding to viral DNA ends",
      "They chelate divalent metal ions in the integrase active site",
      "They prevent nuclear import of the pre-integration complex",
      "They promote auto-ubiquitination and degradation of integrase"
    ],
    correctAnswer: 1,
    explanation: "INSTIs function by chelating the divalent metal ions (Mg²⁺) in the integrase active site, specifically blocking the strand transfer reaction."
  },
  {
    id: "hard-5",
    question: "Which mathematical model best describes the dynamics of HIV replication and CD4+ T-cell turnover?",
    options: [
      "Linear progression model with constant decay rates",
      "Lotka-Volterra predator-prey equations",
      "Exponential growth with density-dependent limitation",
      "Biphasic decay with rapid initial and slow subsequent phases"
    ],
    correctAnswer: 1,
    explanation: "HIV-CD4+ T-cell dynamics are best modeled using modified Lotka-Volterra equations, representing the predator-prey relationship between virus and target cells."
  },
  {
    id: "hard-6",
    question: "What is the quantum mechanical basis for proton transfer in the HIV-1 protease active site?",
    options: [
      "Quantum tunneling of protons between catalytic aspartates",
      "Electron delocalization in the reaction transition state",
      "Superexchange-mediated proton coupled electron transfer",
      "Coherent vibrational energy transfer in the catalytic triad"
    ],
    correctAnswer: 0,
    explanation: "Quantum tunneling of protons between the two catalytic aspartate residues (Asp25/Asp25') significantly contributes to the catalytic efficiency of HIV-1 protease."
  },
  {
    id: "hard-7",
    question: "Which epigenetic modification primarily maintains HIV latency in resting CD4+ T-cells?",
    options: [
      "H3K27ac histone acetylation",
      "DNA cytosine methylation at LTR region",
      "H3K9me3 heterochromatic marking",
      "H4K16 hyperacetylation"
    ],
    correctAnswer: 2,
    explanation: "H3K9me3 heterochromatic marks and associated HP1 proteins maintain HIV latency by promoting a transcriptionally silent state at the integrated provirus."
  },
  {
    id: "hard-8",
    question: "What is the structural mechanism of HIV capsid assembly and maturation?",
    options: [
      "Crystallization-driven nucleation of Gag polyproteins",
      "Template-guided assembly based on genomic RNA structure",
      "Conformational switching from immature to mature lattice",
      "Chaperone-mediated folding of capsid monomers"
    ],
    correctAnswer: 2,
    explanation: "HIV capsid maturation involves a dramatic conformational switch where the immature Gag lattice undergoes proteolytic cleavage and reorganizes into the mature conical capsid structure."
  },
  {
    id: "hard-9",
    question: "Which host factor facilitates the nuclear import of HIV pre-integration complexes in non-dividing cells?",
    options: [
      "Importin-α/Importin-β complex",
      "Transportin-SR2 (TNPO3)",
      "Nuclear pore protein Nup153",
      "CPSF6 and CypA complex"
    ],
    correctAnswer: 1,
    explanation: "Transportin-SR2 (TNPO3) specifically facilitates nuclear import of HIV pre-integration complexes by interacting with the capsid protein in non-dividing cells."
  },
  {
    id: "hard-10",
    question: "What is the molecular basis for HIV's extraordinary genetic diversity?",
    options: [
      "Error-prone reverse transcriptase with estimated 10⁻³ to 10⁻⁵ error rate per base",
      "RNA-dependent RNA polymerase recombination events",
      "Host DNA polymerase infidelity during integration",
      "APOBEC-induced hypermutation without selection pressure"
    ],
    correctAnswer: 0,
    explanation: "HIV's genetic diversity primarily results from the error-prone nature of reverse transcriptase, which has an error rate of approximately 10⁻³ to 10⁻⁵ mutations per base per replication cycle."
  },
  {
    id: "hard-11",
    question: "Which kinetic parameter primarily determines the rate of HIV drug resistance emergence?",
    options: [
      "Viral generation time",
      "Mutation rate and selection coefficient",
      "CD4+ T-cell turnover rate",
      "Drug penetration into sanctuary sites"
    ],
    correctAnswer: 1,
    explanation: "The emergence of drug resistance is governed by the mutation rate (μ) and the selection coefficient (s), which determine the probability and expansion of resistant variants."
  },
  {
    id: "hard-12",
    question: "What is the mechanism of allosteric inhibition by non-nucleoside reverse transcriptase inhibitors (NNRTIs)?",
    options: [
      "They induce conformational changes that distort the polymerase active site",
      "They competitively bind to the dNTP binding pocket",
      "They chelate the catalytic magnesium ions",
      "They promote ubiquitination and degradation of RT"
    ],
    correctAnswer: 0,
    explanation: "NNRTIs bind to a hydrophobic pocket distal from the active site, inducing conformational changes that distort the polymerase active site and inhibit catalytic activity."
  },
  {
    id: "hard-13",
    question: "Which host factor restricts HIV infection in myeloid cells by depleting cellular dNTP pools?",
    options: [
      "APOBEC3G",
      "SAMHD1",
      "TRIM5α",
      "MX2"
    ],
    correctAnswer: 1,
    explanation: "SAMHD1 restricts HIV infection in myeloid cells by hydrolyzing dNTPs to deoxyribonucleosides and inorganic triphosphate, depleting the cellular dNTP pools necessary for reverse transcription."
  },
  {
    id: "hard-14",
    question: "What is the structural basis for HIV envelope glycoprotein conformational changes during fusion?",
    options: [
      "Spring-loaded mechanism driven by helical coil formation",
      "pH-dependent conformational switching",
      "Calcium-triggered refolding",
      "ATP-dependent conformational cycling"
    ],
    correctAnswer: 0,
    explanation: "HIV envelope undergoes spring-loaded conformational changes where receptor binding triggers formation of helical coils that drive membrane fusion through mechanical force."
  },
  {
    id: "hard-15",
    question: "Which mathematical framework best describes the establishment of HIV latent reservoirs?",
    options: [
      "Stochastic models of cellular activation states",
      "Deterministic exponential decay equations",
      "Linear regression of integration events",
      "Poisson distribution of successful integrations"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models that account for the random nature of T-cell activation states and integration events best describe latent reservoir establishment."
  },
  {
    id: "hard-16",
    question: "What is the quantum biological perspective on electron transfer in HIV reverse transcription?",
    options: [
      "Quantum coherence in base stacking enhances fidelity",
      "Electron tunneling mediates phosphoryl transfer reactions",
      "Proton-coupled electron transfer regulates dNTP incorporation",
      "Superexchange facilitates long-range electron transfer in RT"
    ],
    correctAnswer: 1,
    explanation: "Quantum mechanical tunneling of electrons plays a significant role in phosphoryl transfer reactions during DNA synthesis by HIV reverse transcriptase."
  },
  {
    id: "hard-17",
    question: "Which host epigenetic modifier is recruited to the HIV LTR to maintain latency?",
    options: [
      "p300/CBP HAT complex",
      "HDAC1/2-containing repressor complexes",
      "BRG1 chromatin remodeler",
      "DNMT1 DNA methyltransferase"
    ],
    correctAnswer: 1,
    explanation: "HDAC1/2-containing repressor complexes (e.g., CoREST, NuRD) are recruited to the HIV LTR to maintain latency through histone deacetylation."
  },
  {
    id: "hard-18",
    question: "What is the mechanism of HIV Vif-mediated degradation of APOBEC3G?",
    options: [
      "Vif recruits CUL5-E3 ubiquitin ligase to polyubiquitinate APOBEC3G",
      "Vif directly cleaves APOBEC3G using protease activity",
      "Vif promotes APOBEC3G aggregation and sequestration",
      "Vif enhances APOBEC3G mRNA degradation"
    ],
    correctAnswer: 0,
    explanation: "Vif acts as an adaptor that recruits the CUL5-E3 ubiquitin ligase complex to polyubiquitinate APOBEC3G, targeting it for proteasomal degradation."
  },
  {
    id: "hard-19",
    question: "Which structural feature enables HIV capsid to accommodate the conical morphology?",
    options: [
      "Lattice curvature introduced by pentameric defects",
      "Flexible hinge regions in CA monomers",
      "Variable stretching of α-helical domains",
      "pH-dependent swelling of the protein lattice"
    ],
    correctAnswer: 0,
    explanation: "The conical HIV capsid incorporates exactly 12 pentameric defects within the hexagonal lattice, enabling curvature and closure of the conical structure."
  },
  {
    id: "hard-20",
    question: "What is the thermodynamic basis for HIV protease inhibitor binding specificity?",
    options: [
      "Enthalpy-driven binding with conformational compensation",
      "Entropy-dominated hydrophobic interactions",
      "Chelation-enhanced binding affinity",
      "Covalent transition state analog formation"
    ],
    correctAnswer: 0,
    explanation: "HIV protease inhibitor binding is predominantly enthalpy-driven, with conformational changes in both enzyme and inhibitor contributing to high specificity and affinity."
  },
  {
    id: "hard-21",
    question: "Which host factor determines HIV integration site preference in active genes?",
    options: [
      "LEDGF/p75 integrase cofactor",
      "Nuclear actin filaments",
      "Lamin-associated domains",
      "Nuclear pore complexes"
    ],
    correctAnswer: 0,
    explanation: "LEDGF/p75 acts as a molecular tether that directs HIV integration to transcriptionally active genes by binding both integrase and chromatin."
  },
  {
    id: "hard-22",
    question: "What is the kinetic proofreading mechanism in HIV reverse transcription?",
    options: [
      "Exonucleolytic editing of misincorporated nucleotides",
      "Conformational selection during dNTP binding",
      "Pyrophosphorolytic editing of mismatched bases",
      "RNA template realignment and slippage"
    ],
    correctAnswer: 2,
    explanation: "HIV RT can perform pyrophosphorolytic editing, where pyrophosphate catalyzes the removal of mismatched nucleotides through reverse reaction kinetics."
  },
  {
    id: "hard-23",
    question: "Which quantum effect may contribute to HIV capsid stability?",
    options: [
      "Quantum confinement of vibrational modes",
      "Electron delocalization in aromatic networks",
      "Proton tunneling between hydrogen bonds",
      "Coherent energy transfer in β-sheet structures"
    ],
    correctAnswer: 1,
    explanation: "Electron delocalization in the extensive aromatic networks of HIV capsid proteins may contribute to lattice stability through quantum mechanical effects."
  },
  {
    id: "hard-24",
    question: "What is the molecular mechanism of HIV Tat transactivation?",
    options: [
      "Tat recruits P-TEFb to phosphorylate RNA Pol II CTD",
      "Tat functions as a classical transcription factor",
      "Tat directly binds TATA-box elements",
      "Tat promotes histone acetylation through HAT recruitment"
    ],
    correctAnswer: 0,
    explanation: "Tat recruits P-TEFb (CDK9/cyclin T1) to phosphorylate the C-terminal domain of RNA polymerase II, promoting transcriptional elongation."
  },
  {
    id: "hard-25",
    question: "Which host restriction factor blocks HIV infection through capsid recognition and disruption?",
    options: [
      "TRIM5α",
      "SAMHD1",
      "APOBEC3G",
      "MX2"
    ],
    correctAnswer: 0,
    explanation: "TRIM5α recognizes the HIV capsid lattice through its SPRY domain and promotes its premature disassembly through E3 ubiquitin ligase activity."
  },
  {
    id: "hard-26",
    question: "What is the structural basis for HIV envelope glycan shield evolution?",
    options: [
      "Dynamic addition and removal of N-linked glycosylation sites",
      "Conformational masking of conserved epitopes",
      "Glycan microheterogeneity creating entropy barriers",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV's glycan shield evolves through addition/removal of glycosylation sites, conformational masking, and microheterogeneity creating entropy barriers to antibody recognition."
  },
  {
    id: "hard-27",
    question: "Which mathematical model describes the emergence of drug-resistant HIV variants?",
    options: [
      "Branching process with multiple mutation pathways",
      "Deterministic selection equations",
      "Neutral network theory of sequence space",
      "Population genetic models with compensatory mutations"
    ],
    correctAnswer: 0,
    explanation: "Branching process models that account for multiple mutation pathways and stochastic emergence best describe drug-resistant variant development."
  },
  {
    id: "hard-28",
    question: "What is the mechanism of HIV Rev-mediated nuclear export?",
    options: [
      "Rev binds RRE and recruits CRM1 via nuclear export signal",
      "Rev directly interacts with nuclear pore complexes",
      "Rev promotes RNA secondary structure unwinding",
      "Rev functions as a helicase for RNA transport"
    ],
    correctAnswer: 0,
    explanation: "Rev binds the Rev Response Element (RRE) and recruits CRM1 (exportin-1) through its nuclear export signal, facilitating nuclear export of unspliced viral RNAs."
  },
  {
    id: "hard-29",
    question: "Which host factor converts SAMHD1 from its restrictive to permissive state?",
    options: [
      "Cyclin-dependent kinase phosphorylation",
      "T592 phosphorylation by viral kinases",
      "GTP binding and tetramer formation",
      "Proteolytic cleavage by viral proteases"
    ],
    correctAnswer: 2,
    explanation: "SAMHD1 becomes restrictive when dephosphorylated and bound to GTP, forming active tetramers that hydrolyze dNTPs."
  },
  {
    id: "hard-30",
    question: "What is the quantum chemical basis for HIV integrase catalytic mechanism?",
    options: [
      "Two-metal-ion mechanism with nucleophilic attack",
      "Radical-based DNA cleavage and joining",
      "Acid-base catalysis with histidine relay",
      "Covalent enzyme-DNA intermediate formation"
    ],
    correctAnswer: 0,
    explanation: "HIV integrase employs a two-metal-ion mechanism where Mg²⁺ ions coordinate the nucleophilic attack and stabilize the reaction transition state."
  },
  {
    id: "hard-31",
    question: "Which epigenetic mark is associated with transcriptionally active HIV provirus?",
    options: [
      "H3K4me3 at the LTR promoter",
      "H3K27me3 heterochromatic marks",
      "DNA methylation of CpG islands",
      "H2A ubiquitination"
    ],
    correctAnswer: 0,
    explanation: "H3K4me3 marks at the HIV LTR are associated with transcriptionally active provirus and recruitment of transcription machinery."
  },
  {
    id: "hard-32",
    question: "What is the structural mechanism of HIV capsid uncoating?",
    options: [
      "Capsid lattice disassembly triggered by host factors",
      "Proteolytic degradation of CA proteins",
      "Mechanical rupture during nuclear entry",
      "pH-dependent dissolution in endosomes"
    ],
    correctAnswer: 0,
    explanation: "HIV capsid uncoating involves regulated disassembly of the capsid lattice, triggered by host factors like CPSF6 and CypA, and mechanical stress."
  },
  {
    id: "hard-33",
    question: "Which host factor promotes HIV reverse transcription through dNTP synthesis?",
    options: [
      "Ribonucleotide reductase",
      "Thymidine kinase",
      "dUTPase",
      "Nucleoside diphosphate kinase"
    ],
    correctAnswer: 0,
    explanation: "Ribonucleotide reductase converts NDPs to dNDPs, maintaining dNTP pools necessary for efficient HIV reverse transcription."
  },
  {
    id: "hard-34",
    question: "What is the kinetic basis for HIV protease's catalytic efficiency?",
    options: [
      "Diffusion-limited substrate binding",
      "Transition state stabilization exceeding 10¹²-fold",
      "Allosteric activation by viral peptides",
      "Covalent catalysis with rapid turnover"
    ],
    correctAnswer: 1,
    explanation: "HIV protease achieves extraordinary catalytic efficiency by stabilizing the reaction transition state by more than 10¹²-fold compared to the uncatalyzed reaction."
  },
  {
    id: "hard-35",
    question: "Which quantum effect may influence HIV envelope glycoprotein dynamics?",
    options: [
      "Quantum coherence in glycan side chain vibrations",
      "Electron correlation effects in receptor binding",
      "Proton tunneling in conserved catalytic residues",
      "Superexchange in membrane fusion intermediates"
    ],
    correctAnswer: 0,
    explanation: "Quantum coherence in glycan side chain vibrations may influence envelope glycoprotein dynamics and antibody recognition."
  },
  {
    id: "hard-36",
    question: "What is the mechanism of HIV Nef-mediated CD4 downregulation?",
    options: [
      "Nef recruits AP-2 to promote CD4 endocytosis",
      "Nef directly cleaves CD4 extracellular domain",
      "Nef inhibits CD4 gene transcription",
      "Nef promotes CD4 ubiquitination and degradation"
    ],
    correctAnswer: 0,
    explanation: "Nef recruits the AP-2 adaptor complex to promote clathrin-mediated endocytosis and lysosomal degradation of CD4."
  },
  {
    id: "hard-37",
    question: "Which mathematical framework describes HIV population dynamics during treatment interruption?",
    options: [
      "Stochastic models of viral rebound kinetics",
      "Deterministic exponential growth equations",
      "Linear regression of viral load increase",
      "Poisson distribution of reactivation events"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models that account for random reactivation of latent provinces best describe viral rebound dynamics after treatment interruption."
  },
  {
    id: "hard-38",
    question: "What is the structural basis for HIV envelope trimer stabilization?",
    options: [
      "Disulfide bonding between gp41 subunits",
      "Hydrophobic interactions in the membrane-proximal region",
      "SOSIP mutations that stabilize the prefusion state",
      "Glycan-mediated interprotomer contacts"
    ],
    correctAnswer: 2,
    explanation: "SOSIP mutations (disulfide bond and isoleucine to proline) stabilize the HIV envelope trimer in the prefusion conformation."
  },
  {
    id: "hard-39",
    question: "Which host factor restricts HIV infection through interferon-stimulated gene expression?",
    options: [
      "MX2",
      "APOBEC3G",
      "SAMHD1",
      "TRIM5α"
    ],
    correctAnswer: 0,
    explanation: "MX2 is an interferon-induced GTPase that restricts HIV infection by inhibiting nuclear import and integration of viral DNA."
  },
  {
    id: "hard-40",
    question: "What is the quantum mechanical perspective on HIV drug resistance mutations?",
    options: [
      "Mutations may alter enzyme quantum tunneling pathways",
      "Resistance arises from quantum decoherence effects",
      "Drug binding is governed by quantum entanglement",
      "Resistance mutations create quantum barriers to inhibition"
    ],
    correctAnswer: 0,
    explanation: "Drug resistance mutations may alter enzyme conformational dynamics and quantum tunneling pathways, affecting catalytic efficiency and drug binding."
  },
  {
    id: "hard-41",
    question: "Which epigenetic modifier is crucial for HIV latency reversal?",
    options: [
      "BET bromodomain proteins",
      "DNA methyltransferases",
      "HDAC1/2 complexes",
      "H3K9 methyltransferases"
    ],
    correctAnswer: 0,
    explanation: "BET bromodomain proteins (e.g., BRD4) recognize acetylated histones and recruit P-TEFb, playing a key role in HIV latency reversal."
  },
  {
    id: "hard-42",
    question: "What is the mechanism of HIV capsid nuclear entry?",
    options: [
      "Capsid docking at nuclear pores with partial disassembly",
      "Complete disassembly before nuclear entry",
      "Active transport through nuclear pore complexes",
      "Capsid fusion with nuclear membrane"
    ],
    correctAnswer: 0,
    explanation: "HIV capsids dock at nuclear pores and undergo partial disassembly during nuclear entry, with some intact capsids entering the nucleus."
  },
  {
    id: "hard-43",
    question: "Which host factor promotes HIV integration into transcriptionally active regions?",
    options: [
      "LEDGF/p75",
      "CPSF6",
      "Nup153",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "LEDGF/p75, CPSF6, and Nup153 all contribute to targeting HIV integration to transcriptionally active genomic regions."
  },
  {
    id: "hard-44",
    question: "What is the kinetic basis for HIV RT processivity?",
    options: [
      "Sliding clamp mechanism with p66 thumb domain",
      "DNA binding-induced conformational changes",
      "dNTP concentration-dependent stepping",
      "RNA template secondary structure unwinding"
    ],
    correctAnswer: 0,
    explanation: "HIV RT achieves processivity through a sliding clamp mechanism where the p66 thumb domain encircles the DNA template."
  },
  {
    id: "hard-45",
    question: "Which quantum biological phenomenon may affect HIV mutation rates?",
    options: [
      "Quantum tunneling in tautomeric base pairs",
      "Electron correlation effects in nucleotide selection",
      "Proton transfer during dNTP incorporation",
      "Coherent vibrations in the polymerase active site"
    ],
    correctAnswer: 0,
    explanation: "Quantum tunneling may contribute to tautomeric base pairing errors during reverse transcription, potentially affecting mutation rates."
  },
  {
    id: "hard-46",
    question: "What is the mechanism of HIV Vpr-induced G2/M cell cycle arrest?",
    options: [
      "Vpr activates the ATR DNA damage response pathway",
      "Vpr inhibits cyclin B1-CDK1 complex formation",
      "Vpr promotes degradation of cell cycle regulators",
      "Vpr directly binds to and inactivates CDK1"
    ],
    correctAnswer: 0,
    explanation: "Vpr activates the ATR DNA damage response pathway through interaction with the SLX4 complex, inducing G2/M cell cycle arrest."
  },
  {
    id: "hard-47",
    question: "Which mathematical model describes HIV evolution under selective pressure?",
    options: [
      "Quasispecies model with error threshold",
      "Neutral theory of molecular evolution",
      "Deterministic mutation-selection balance",
      "Population genetic models with epistasis"
    ],
    correctAnswer: 0,
    explanation: "The quasispecies model, which incorporates error threshold concepts, best describes HIV evolution under selective pressure."
  },
  {
    id: "hard-48",
    question: "What is the structural basis for HIV envelope conformational masking?",
    options: [
      "Dynamic opening and closing of the trimer apex",
      "Glycan shielding of conserved epitopes",
      "Conformational flexibility in variable loops",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV envelope employs multiple strategies including trimer dynamics, glycan shielding, and loop flexibility to mask conserved epitopes."
  },
  {
    id: "hard-49",
    question: "Which host factor restricts HIV through dUTP incorporation and hypermutation?",
    options: [
      "APOBEC3G",
      "SAMHD1",
      "dUTPase",
      "Uracil DNA glycosylase"
    ],
    correctAnswer: 2,
    explanation: "Some host cells lack dUTPase, leading to dUTP incorporation during reverse transcription and subsequent hypermutation through uracil excision."
  },
  {
    id: "hard-50",
    question: "What is the quantum chemical basis for HIV protease substrate specificity?",
    options: [
      "Transition state complementarity with precise hydrogen bonding",
      "Covalent catalysis with substrate strain",
      "Charge stabilization in the oxyanion hole",
      "Hydrophobic pocket recognition of side chains"
    ],
    correctAnswer: 0,
    explanation: "HIV protease achieves substrate specificity through precise transition state complementarity, particularly in hydrogen bonding networks."
  },
  {
    id: "hard-51",
    question: "Which epigenetic mechanism silences HIV transcription during latency?",
    options: [
      "H3K27me3 deposition by Polycomb repressive complex",
      "DNA methylation of LTR CpG islands",
      "Histone deacetylation by HDAC complexes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Multiple epigenetic mechanisms including H3K27me3, DNA methylation, and histone deacetylation contribute to HIV transcriptional silencing."
  },
  {
    id: "hard-52",
    question: "What is the mechanism of HIV capsid core assembly?",
    options: [
      "Oligomerization driven by CA-CA interactions",
      "Template-guided assembly on genomic RNA",
      "Chaperone-mediated folding of Gag polyproteins",
      "Lipid raft-dependent nucleation"
    ],
    correctAnswer: 0,
    explanation: "HIV capsid assembly is driven by specific CA-CA interactions that form hexameric and pentameric building blocks."
  },
  {
    id: "hard-53",
    question: "Which host factor promotes HIV reverse transcription through dNTP pool regulation?",
    options: [
      "Ribonucleotide reductase",
      "Deoxycytidine kinase",
      "Thymidylate synthase",
      "Nucleoside phosphorylase"
    ],
    correctAnswer: 0,
    explanation: "Ribonucleotide reductase maintains dNTP pools by converting ribonucleotides to deoxyribonucleotides, supporting HIV reverse transcription."
  },
  {
    id: "hard-54",
    question: "What is the kinetic mechanism of HIV RNase H activity?",
    options: [
      "Endonucleolytic cleavage of RNA in RNA-DNA hybrids",
      "Processive 3' to 5' exonucleolytic degradation",
      "Sequence-specific recognition and cleavage",
      "Metal-ion catalyzed hydrolysis"
    ],
    correctAnswer: 0,
    explanation: "HIV RNase H performs endonucleolytic cleavage of the RNA strand in RNA-DNA hybrids during reverse transcription."
  },
  {
    id: "hard-55",
    question: "Which quantum effect may influence HIV capsid stability?",
    options: [
      "Quantum confinement of vibrational modes in the conical structure",
      "Electron correlation in aromatic residue networks",
      "Proton tunneling in hydrogen-bonded networks",
      "Coherent energy transfer in β-barrel domains"
    ],
    correctAnswer: 1,
    explanation: "Electron correlation effects in the extensive aromatic networks of HIV capsid proteins may contribute to lattice stability."
  },
  {
    id: "hard-56",
    question: "What is the mechanism of HIV Vpu-mediated BST-2 antagonism?",
    options: [
      "Vpu recruits β-TrCP to ubiquitinate BST-2",
      "Vpu directly cleaves BST-2 transmembrane domain",
      "Vpu promotes BST-2 mislocalization",
      "Vpu inhibits BST-2 gene transcription"
    ],
    correctAnswer: 0,
    explanation: "Vpu recruits the β-TrCP E3 ubiquitin ligase to promote ubiquitination and degradation of BST-2."
  },
  {
    id: "hard-57",
    question: "Which mathematical framework describes HIV reservoir dynamics?",
    options: [
      "Stochastic models with multiple cellular compartments",
      "Deterministic exponential decay equations",
      "Linear expansion of infected cell populations",
      "Poisson distribution of integration events"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models incorporating multiple cellular compartments and activation states best describe HIV reservoir dynamics."
  },
  {
    id: "hard-58",
    question: "What is the structural basis for HIV envelope fusion peptide insertion?",
    options: [
      "Hydrophobic insertion into the target membrane",
      "Calcium-dependent membrane penetration",
      "pH-triggered conformational change",
      "Receptor binding-induced exposure"
    ],
    correctAnswer: 0,
    explanation: "The HIV fusion peptide inserts into the target membrane through hydrophobic interactions, initiating membrane fusion."
  },
  {
    id: "hard-59",
    question: "Which host factor restricts HIV through sensing of capsid lattice?",
    options: [
      "TRIM5α",
      "MX2",
      "CPSF6",
      "CypA"
    ],
    correctAnswer: 0,
    explanation: "TRIM5α restricts HIV by directly sensing and binding to the capsid lattice, promoting its premature disassembly."
  },
  {
    id: "hard-60",
    question: "What is the quantum mechanical perspective on HIV drug binding?",
    options: [
      "Drug binding may involve quantum mechanical effects in enthalpy-entropy compensation",
      "Quantum tunneling dominates drug-receptor interactions",
      "Drug efficacy is determined by quantum coherence times",
      "Resistance arises from quantum decoherence in binding sites"
    ],
    correctAnswer: 0,
    explanation: "Quantum mechanical effects may contribute to enthalpy-entropy compensation in HIV drug binding interactions."
  },
  {
    id: "hard-61",
    question: "Which epigenetic mark is associated with transcriptionally active HIV provirus?",
    options: [
      "H3K27ac at the LTR promoter",
      "H3K9me3 heterochromatic marks",
      "DNA methylation of enhancer regions",
      "H2B ubiquitination"
    ],
    correctAnswer: 0,
    explanation: "H3K27ac marks at the HIV LTR are associated with transcriptionally active provirus and enhancer activity."
  },
  {
    id: "hard-62",
    question: "What is the mechanism of HIV capsid disassembly?",
    options: [
      "Regulated uncoating triggered by host factors and mechanical stress",
      "Proteolytic degradation by host proteases",
      "pH-dependent dissolution in cytoplasmic vesicles",
      "Complete disassembly at the nuclear pore"
    ],
    correctAnswer: 0,
    explanation: "HIV capsid undergoes regulated uncoating that is triggered by host factors and mechanical stress during intracellular trafficking."
  },
  {
    id: "hard-63",
    question: "Which host factor promotes HIV integration through chromatin interaction?",
    options: [
      "LEDGF/p75",
      "CPSF6",
      "Nup153",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Multiple host factors including LEDGF/p75, CPSF6, and Nup153 promote HIV integration through chromatin interactions."
  },
  {
    id: "hard-64",
    question: "What is the kinetic basis for HIV RT fidelity?",
    options: [
      "Conformational selection during dNTP binding",
      "Base pairing geometry discrimination",
      "Proofreading exonuclease activity",
      "Template-primer alignment checking"
    ],
    correctAnswer: 1,
    explanation: "HIV RT fidelity is primarily determined by geometric discrimination during dNTP binding and base pairing."
  },
  {
    id: "hard-65",
    question: "Which quantum biological phenomenon may affect HIV envelope conformational dynamics?",
    options: [
      "Quantum coherence in glycan side chain motions",
      "Electron correlation in receptor binding sites",
      "Proton tunneling in fusion peptide insertion",
      "Superexchange in membrane fusion intermediates"
    ],
    correctAnswer: 0,
    explanation: "Quantum coherence effects may influence glycan side chain dynamics and HIV envelope conformational changes."
  },
  {
    id: "hard-66",
    question: "What is the mechanism of HIV Nef-mediated MHC-I downregulation?",
    options: [
      "Nef recruits AP-1 to divert MHC-I to lysosomes",
      "Nef directly cleaves MHC-I molecules",
      "Nef inhibits MHC-I gene transcription",
      "Nef promotes MHC-I ubiquitination"
    ],
    correctAnswer: 0,
    explanation: "Nef recruits the AP-1 adaptor complex to divert MHC-I from the Golgi to lysosomes for degradation."
  },
  {
    id: "hard-67",
    question: "Which mathematical model describes HIV latency reversal dynamics?",
    options: [
      "Stochastic models of transcriptional bursting",
      "Deterministic activation equations",
      "Linear dose-response curves",
      "Poisson distribution of activation events"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models of transcriptional bursting best describe HIV latency reversal dynamics."
  },
  {
    id: "hard-68",
    question: "What is the structural basis for HIV envelope trimer opening?",
    options: [
      "Conformational changes triggered by CD4 binding",
      "pH-dependent structural rearrangements",
      "Proteolytic cleavage-induced opening",
      "Calcium-triggered expansion"
    ],
    correctAnswer: 0,
    explanation: "CD4 binding triggers conformational changes that open the HIV envelope trimer, exposing the co-receptor binding site."
  },
  {
    id: "hard-69",
    question: "Which host factor restricts HIV through interferon-induced expression?",
    options: [
      "MX2",
      "APOBEC3G",
      "SAMHD1",
      "TRIM5α"
    ],
    correctAnswer: 0,
    explanation: "MX2 is an interferon-induced GTPase that restricts HIV infection by impairing nuclear import."
  },
  {
    id: "hard-70",
    question: "What is the quantum chemical basis for HIV integrase inhibition?",
    options: [
      "Metal chelation in the active site",
      "Transition state analog binding",
      "Allosteric modulation of protein dynamics",
      "Covalent modification of catalytic residues"
    ],
    correctAnswer: 0,
    explanation: "INSTIs function by chelating the divalent metal ions in the integrase active site, blocking strand transfer."
  },
  {
    id: "hard-71",
    question: "Which epigenetic mechanism maintains HIV latency in microglial cells?",
    options: [
      "H3K9me3 deposition by SETDB1",
      "DNA methylation of promoter regions",
      "Histone deacetylation by SIRT1",
      "H2A.Z incorporation"
    ],
    correctAnswer: 0,
    explanation: "H3K9me3 deposition by SETDB1 maintains HIV latency in microglial cells through heterochromatic silencing."
  },
  {
    id: "hard-72",
    question: "What is the mechanism of HIV capsid nuclear import?",
    options: [
      "Capsid docking and partial disassembly at nuclear pores",
      "Active transport through importin pathways",
      "Complete disassembly before nuclear entry",
      "Membrane fusion with nuclear envelope"
    ],
    correctAnswer: 0,
    explanation: "HIV capsids dock at nuclear pores and undergo partial disassembly during nuclear import."
  },
  {
    id: "hard-73",
    question: "Which host factor promotes HIV integration into active genes?",
    options: [
      "LEDGF/p75",
      "CPSF6",
      "Nup153",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Multiple host factors including LEDGF/p75, CPSF6, and Nup153 promote HIV integration into transcriptionally active genes."
  },
  {
    id: "hard-74",
    question: "What is the kinetic basis for HIV protease drug resistance?",
    options: [
      "Mutations that alter transition state stabilization",
      "Changes in substrate envelope recognition",
      "Altered flap dynamics and flexibility",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Protease drug resistance involves mutations that affect transition state stabilization, substrate recognition, and flap dynamics."
  },
  {
    id: "hard-75",
    question: "Which quantum effect may influence HIV mutation rates?",
    options: [
      "Quantum tunneling in tautomeric base pairs",
      "Electron correlation in nucleotide selection",
      "Proton transfer during polymerization",
      "Coherent vibrations in the active site"
    ],
    correctAnswer: 0,
    explanation: "Quantum tunneling may contribute to tautomeric base pairing errors during reverse transcription."
  },
  {
    id: "hard-76",
    question: "What is the mechanism of HIV Vpr-induced apoptosis?",
    options: [
      "Vpr activates mitochondrial apoptosis pathway",
      "Vpr directly cleaves cellular proteins",
      "Vpr inhibits anti-apoptotic Bcl-2 proteins",
      "Vpr promotes death receptor signaling"
    ],
    correctAnswer: 0,
    explanation: "Vpr induces apoptosis through activation of the mitochondrial pathway, involving cytochrome c release and caspase activation."
  },
  {
    id: "hard-77",
    question: "Which mathematical framework describes HIV evolution in drug-treated patients?",
    options: [
      "Branching process with selection",
      "Neutral evolution models",
      "Deterministic mutation accumulation",
      "Population genetic equilibrium"
    ],
    correctAnswer: 0,
    explanation: "Branching process models with selection best describe HIV evolution under drug pressure."
  },
  {
    id: "hard-78",
    question: "What is the structural basis for HIV envelope immune evasion?",
    options: [
      "Glycan shielding of conserved epitopes",
      "Conformational flexibility and dynamics",
      "Sequence variation in variable loops",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV envelope employs multiple strategies including glycan shielding, conformational flexibility, and sequence variation for immune evasion."
  },
  {
    id: "hard-79",
    question: "Which host factor restricts HIV through dUTP misincorporation?",
    options: [
      "dUTPase deficiency",
      "APOBEC3G",
      "SAMHD1",
      "UNG2"
    ],
    correctAnswer: 0,
    explanation: "dUTPase deficiency leads to dUTP misincorporation during reverse transcription, causing hypermutation."
  },
  {
    id: "hard-80",
    question: "What is the quantum chemical basis for HIV protease substrate recognition?",
    options: [
      "Transition state complementarity with precise stereoelectronics",
      "Covalent bond formation with substrates",
      "Charge complementarity in binding pockets",
      "Hydrophobic pocket interactions"
    ],
    correctAnswer: 0,
    explanation: "HIV protease recognizes substrates through precise transition state complementarity involving stereoelectronic effects."
  },
  {
    id: "hard-81",
    question: "Which epigenetic mechanism silences HIV in central memory T-cells?",
    options: [
      "H3K27me3 deposition by EZH2",
      "DNA methylation of LTR region",
      "Histone deacetylation by HDAC complexes",
      "CTCF-mediated chromatin looping"
    ],
    correctAnswer: 0,
    explanation: "H3K27me3 deposition by EZH2 maintains HIV latency in central memory T-cells through heterochromatic silencing."
  },
  {
    id: "hard-82",
    question: "What is the mechanism of HIV capsid core formation?",
    options: [
      "CA-CA interactions forming hexagonal lattice",
      "RNA template-guided assembly",
      "Lipid raft-dependent nucleation",
      "Chaperone-mediated folding"
    ],
    correctAnswer: 0,
    explanation: "HIV capsid formation is driven by CA-CA interactions that create a hexagonal lattice with pentameric defects."
  },
  {
    id: "hard-83",
    question: "Which host factor promotes HIV reverse transcription?",
    options: [
      "Ribonucleotide reductase",
      "Deoxynucleoside kinases",
      "Nucleotide salvage pathway enzymes",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Multiple host enzymes including ribonucleotide reductase and salvage pathway enzymes support HIV reverse transcription."
  },
  {
    id: "hard-84",
    question: "What is the kinetic mechanism of HIV RNase H?",
    options: [
      "Endonucleolytic cleavage with metal ion catalysis",
      "Processive exonucleolytic degradation",
      "Sequence-specific recognition and cleavage",
      "RNA chaperone activity"
    ],
    correctAnswer: 0,
    explanation: "HIV RNase H performs endonucleolytic cleavage of RNA in RNA-DNA hybrids using metal ion catalysis."
  },
  {
    id: "hard-85",
    question: "Which quantum effect may influence HIV capsid stability?",
    options: [
      "Electron correlation in aromatic networks",
      "Quantum confinement in conical structure",
      "Proton tunneling in hydrogen bonds",
      "Coherent energy transfer"
    ],
    correctAnswer: 0,
    explanation: "Electron correlation effects in aromatic residue networks may contribute to HIV capsid stability."
  },
  {
    id: "hard-86",
    question: "What is the mechanism of HIV Vpu-mediated BST-2 degradation?",
    options: [
      "Vpu recruits β-TrCP for ubiquitination",
      "Vpu directly cleaves BST-2",
      "Vpu promotes BST-2 mislocalization",
      "Vpu inhibits BST-2 synthesis"
    ],
    correctAnswer: 0,
    explanation: "Vpu recruits the β-TrCP E3 ubiquitin ligase to promote BST-2 ubiquitination and degradation."
  },
  {
    id: "hard-87",
    question: "Which mathematical model describes HIV reservoir persistence?",
    options: [
      "Stochastic models with homeostatic proliferation",
      "Deterministic decay equations",
      "Linear expansion models",
      "Poisson distribution models"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models incorporating homeostatic proliferation best describe HIV reservoir persistence."
  },
  {
    id: "hard-88",
    question: "What is the structural basis for HIV envelope fusion activation?",
    options: [
      "Conformational changes triggered by receptor binding",
      "pH-dependent structural rearrangements",
      "Proteolytic cleavage activation",
      "Calcium-induced conformational changes"
    ],
    correctAnswer: 0,
    explanation: "Receptor binding triggers conformational changes that activate the HIV envelope fusion machinery."
  },
  {
    id: "hard-89",
    question: "Which host factor restricts HIV through capsid recognition?",
    options: [
      "TRIM5α",
      "MX2",
      "CPSF6",
      "CypA"
    ],
    correctAnswer: 0,
    explanation: "TRIM5α restricts HIV through direct recognition and binding to the capsid lattice."
  },
  {
    id: "hard-90",
    question: "What is the quantum mechanical perspective on HIV drug binding?",
    options: [
      "Quantum effects contribute to binding affinity and specificity",
      "Drug binding is purely classical",
      "Quantum tunneling dominates all drug interactions",
      "Drug efficacy is determined by quantum coherence"
    ],
    correctAnswer: 0,
    explanation: "Quantum mechanical effects contribute to the binding affinity and specificity of HIV drugs."
  },
  {
    id: "hard-91",
    question: "Which epigenetic mark activates HIV transcription?",
    options: [
      "H3K27ac at enhancer regions",
      "H3K9me3 at promoter regions",
      "DNA methylation of LTR",
      "H3K27me3 at silencing regions"
    ],
    correctAnswer: 0,
    explanation: "H3K27ac marks at enhancer regions are associated with active HIV transcription."
  },
  {
    id: "hard-92",
    question: "What is the mechanism of HIV capsid uncoating?",
    options: [
      "Regulated disassembly during nuclear entry",
      "Proteolytic degradation in cytoplasm",
      "Complete disassembly at plasma membrane",
      "pH-dependent dissolution"
    ],
    correctAnswer: 0,
    explanation: "HIV capsid undergoes regulated disassembly during nuclear entry and trafficking."
  },
  {
    id: "hard-93",
    question: "Which host factor targets HIV integration to active genes?",
    options: [
      "LEDGF/p75",
      "CPSF6",
      "Nup153",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Multiple host factors including LEDGF/p75, CPSF6, and Nup153 target HIV integration to active genomic regions."
  },
  {
    id: "hard-94",
    question: "What is the kinetic basis for HIV RT processivity?",
    options: [
      "Sliding clamp mechanism with thumb domain",
      "DNA binding-induced conformational changes",
      "dNTP concentration-dependent processivity",
      "RNA template secondary structure unwinding"
    ],
    correctAnswer: 0,
    explanation: "HIV RT achieves processivity through a sliding clamp mechanism involving the thumb domain."
  },
  {
    id: "hard-95",
    question: "Which quantum biological phenomenon may affect HIV envelope dynamics?",
    options: [
      "Quantum coherence in glycan motions",
      "Electron correlation in binding sites",
      "Proton tunneling in fusion peptides",
      "Superexchange in membrane fusion"
    ],
    correctAnswer: 0,
    explanation: "Quantum coherence effects may influence glycan dynamics and HIV envelope conformational changes."
  },
  {
    id: "hard-96",
    question: "What is the mechanism of HIV Nef-mediated immune evasion?",
    options: [
      "Downregulation of CD4 and MHC-I",
      "Inhibition of antibody production",
      "Blocking complement activation",
      "Inhibition of cytokine signaling"
    ],
    correctAnswer: 0,
    explanation: "Nef mediates immune evasion primarily through downregulation of CD4 and MHC-I molecules."
  },
  {
    id: "hard-97",
    question: "Which mathematical framework describes HIV latency heterogeneity?",
    options: [
      "Stochastic models of transcriptional silencing",
      "Deterministic activation thresholds",
      "Linear dose-response relationships",
      "Poisson distribution of integration sites"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models best describe the heterogeneity of HIV latency across different cell types and integration sites."
  },
  {
    id: "hard-98",
    question: "What is the structural basis for HIV envelope conformational diversity?",
    options: [
      "Flexible hinge regions allowing structural plasticity",
      "Glycan shielding creating dynamic barriers",
      "Variable loop length and composition",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "HIV envelope exhibits conformational diversity through flexible hinges, glycan dynamics, and variable loop properties."
  },
  {
    id: "hard-99",
    question: "Which host factor restricts HIV through dNTP pool regulation?",
    options: [
      "SAMHD1",
      "APOBEC3G",
      "TRIM5α",
      "MX2"
    ],
    correctAnswer: 0,
    explanation: "SAMHD1 restricts HIV by hydrolyzing dNTPs and depleting cellular dNTP pools."
  },
  {
    id: "hard-100",
    question: "What is the quantum chemical basis for HIV integrase catalytic efficiency?",
    options: [
      "Two-metal-ion mechanism with optimal geometry",
      "Radical-based catalysis",
      "Acid-base catalysis with precise pKa matching",
      "Covalent catalysis with rapid turnover"
    ],
    correctAnswer: 0,
    explanation: "HIV integrase achieves catalytic efficiency through a two-metal-ion mechanism with optimal geometric arrangement."
  }
];
export const  AIDAndHIVQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
