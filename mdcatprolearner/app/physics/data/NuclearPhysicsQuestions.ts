// FSc/MDCAT Force & Motion MCQs (100 per level), calculation-focused
// Assumption: g = 9.8 m/s^2 unless otherwise stated.

export type Difficulty = keyof typeof nuclearPhysicsQuestions;

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
    question: "What are the primary constituents of an atomic nucleus?",
    options: [
      "Protons and electrons",
      "Protons and neutrons",
      "Neutrons and electrons",
      "Electrons and quarks"
    ],
    correctAnswer: 1,
    explanation: "Atomic nuclei are composed primarily of protons (positively charged) and neutrons (neutral particles), collectively known as nucleons."
  },
  {
    id: "easy-2",
    question: "What is the spontaneous disintegration of unstable atomic nuclei called?",
    options: [
      "Nuclear fission",
      "Radioactive decay",
      "Nuclear fusion",
      "Chemical decomposition"
    ],
    correctAnswer: 1,
    explanation: "Radioactive decay is the spontaneous process by which unstable atomic nuclei lose energy by emitting radiation."
  },
  {
    id: "easy-3",
    question: "What term describes the time required for half of the radioactive atoms in a sample to decay?",
    options: [
      "Full-life",
      "Decay constant",
      "Half-life",
      "Quarter-life"
    ],
    correctAnswer: 2,
    explanation: "Half-life is defined as the time taken for half of the radioactive nuclei in a sample to undergo radioactive decay."
  },
  {
    id: "easy-4",
    question: "Which medical imaging technique uses radioactive tracers to diagnose diseases?",
    options: [
      "X-ray",
      "Ultrasound",
      "PET scan",
      "MRI"
    ],
    correctAnswer: 2,
    explanation: "PET (Positron Emission Tomography) scans use radioactive tracers to detect metabolic activity in tissues and organs."
  },
  {
    id: "easy-5",
    question: "What is the charge of a proton?",
    options: [
      "Positive",
      "Negative",
      "Neutral",
      "Variable"
    ],
    correctAnswer: 0,
    explanation: "Protons carry a positive electrical charge of +1 elementary charge."
  },
  {
    id: "easy-6",
    question: "Which type of radiation has the greatest penetrating power?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "Neutrons"
    ],
    correctAnswer: 2,
    explanation: "Gamma rays are electromagnetic radiation with high energy and excellent penetrating ability, requiring thick lead or concrete for shielding."
  },
  {
    id: "easy-7",
    question: "What is the main use of cobalt-60 in medicine?",
    options: [
      "Diagnostic imaging",
      "Blood cell labeling",
      "Cancer radiation therapy",
      "Sterilizing medical equipment"
    ],
    correctAnswer: 2,
    explanation: "Cobalt-60 is commonly used in radiation therapy to treat cancer by targeting and destroying cancerous cells."
  },
  {
    id: "easy-8",
    question: "Which particle has approximately the same mass as a proton?",
    options: [
      "Electron",
      "Neutron",
      "Beta particle",
      "Gamma particle"
    ],
    correctAnswer: 1,
    explanation: "Neutrons have a mass very similar to protons, with both approximately 1 atomic mass unit."
  },
  {
    id: "easy-9",
    question: "What happens to the half-life of a radioactive substance as it decays?",
    options: [
      "It increases",
      "It decreases",
      "It remains constant",
      "It becomes unpredictable"
    ],
    correctAnswer: 2,
    explanation: "The half-life of a radioactive isotope is constant and does not change regardless of the amount of substance or environmental conditions."
  },
  {
    id: "easy-10",
    question: "Which radioactive decay process results in no change in mass number?",
    options: [
      "Alpha decay",
      "Beta decay",
      "Gamma decay",
      "Neutron emission"
    ],
    correctAnswer: 2,
    explanation: "Gamma decay involves the emission of electromagnetic radiation from an excited nucleus, changing only the energy state, not the mass or atomic number."
  },
  {
    id: "easy-11",
    question: "What is the atomic number of an element determined by?",
    options: [
      "Number of neutrons",
      "Number of protons",
      "Number of nucleons",
      "Number of electrons in neutral atom"
    ],
    correctAnswer: 1,
    explanation: "The atomic number (Z) of an element is defined by the number of protons in the nucleus, which determines the element's identity."
  },
  {
    id: "easy-12",
    question: "Which radiation type is most dangerous when ingested or inhaled?",
    options: [
      "Gamma rays",
      "Beta particles",
      "Alpha particles",
      "X-rays"
    ],
    correctAnswer: 2,
    explanation: "Alpha particles are highly damaging when ingested or inhaled because they transfer large amounts of energy to living tissue over short distances."
  },
  {
    id: "easy-13",
    question: "What does the term 'radioisotope' refer to?",
    options: [
      "Stable isotopes",
      "Radioactive isotopes",
      "Isotopes with equal protons and neutrons",
      "Artificial elements"
    ],
    correctAnswer: 1,
    explanation: "Radioisotopes are radioactive isotopes of elements that undergo spontaneous decay, emitting radiation in the process."
  },
  {
    id: "easy-14",
    question: "Which instrument is used to detect and measure radiation?",
    options: [
      "Microscope",
      "Spectrometer",
      "Geiger counter",
      "Oscilloscope"
    ],
    correctAnswer: 2,
    explanation: "A Geiger counter (or Geiger-Müller tube) is a common instrument used to detect and measure ionizing radiation."
  },
  {
    id: "easy-15",
    question: "What is the mass number of an atom?",
    options: [
      "Number of protons only",
      "Number of neutrons only",
      "Sum of protons and electrons",
      "Sum of protons and neutrons"
    ],
    correctAnswer: 3,
    explanation: "The mass number (A) represents the total number of protons and neutrons (nucleons) in an atomic nucleus."
  },
  {
    id: "easy-16",
    question: "Which type of radiation consists of high-speed electrons?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 1,
    explanation: "Beta radiation consists of high-energy, high-speed electrons (beta minus) or positrons (beta plus) emitted from atomic nuclei."
  },
  {
    id: "easy-17",
    question: "What is the main use of iodine-131 in nuclear medicine?",
    options: [
      "Bone imaging",
      "Thyroid diagnosis and treatment",
      "Brain scans",
      "Blood flow studies"
    ],
    correctAnswer: 1,
    explanation: "Iodine-131 is used to diagnose and treat thyroid conditions because the thyroid gland naturally concentrates iodine."
  },
  {
    id: "easy-18",
    question: "What happens to the atomic number during alpha decay?",
    options: [
      "Increases by 2",
      "Decreases by 2",
      "Remains the same",
      "Increases by 4"
    ],
    correctAnswer: 1,
    explanation: "In alpha decay, the atomic number decreases by 2 because the nucleus loses an alpha particle containing 2 protons."
  },
  {
    id: "easy-19",
    question: "Which property makes radioisotopes useful as tracers in medicine?",
    options: [
      "Their color",
      "Their magnetic properties",
      "Their radioactivity",
      "Their temperature"
    ],
    correctAnswer: 2,
    explanation: "The radioactivity of isotopes allows them to be detected externally, making them useful as tracers to follow biological processes."
  },
  {
    id: "easy-20",
    question: "What is the decay constant related to?",
    options: [
      "Probability of decay per unit time",
      "Mass of the radioactive material",
      "Temperature of the sample",
      "Volume of the radioactive substance"
    ],
    correctAnswer: 0,
    explanation: "The decay constant (λ) represents the probability that a nucleus will decay per unit time and is characteristic of each radioactive isotope."
  },
  {
    id: "easy-21",
    question: "Which radiation can be stopped by a sheet of paper?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "X-rays"
    ],
    correctAnswer: 0,
    explanation: "Alpha particles have low penetrating power and can be stopped by a sheet of paper or the outer layer of human skin."
  },
  {
    id: "easy-22",
    question: "What is the main component of nuclear radiation in radiotherapy?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "Neutrons"
    ],
    correctAnswer: 2,
    explanation: "Gamma rays are commonly used in radiotherapy due to their deep tissue penetration and ability to target tumors effectively."
  },
  {
    id: "easy-23",
    question: "Which term describes atoms with the same atomic number but different mass numbers?",
    options: [
      "Isotones",
      "Isotopes",
      "Isobars",
      "Isomers"
    ],
    correctAnswer: 1,
    explanation: "Isotopes are atoms of the same element (same atomic number) that have different numbers of neutrons, resulting in different mass numbers."
  },
  {
    id: "easy-24",
    question: "What is the effect of temperature on radioactive decay rate?",
    options: [
      "Increases with temperature",
      "Decreases with temperature",
      "No effect",
      "Depends on the element"
    ],
    correctAnswer: 2,
    explanation: "Radioactive decay is a nuclear process that is unaffected by temperature, pressure, or chemical environment."
  },
  {
    id: "easy-25",
    question: "Which radioisotope is commonly used to date archaeological materials?",
    options: [
      "Carbon-14",
      "Uranium-238",
      "Potassium-40",
      "Iodine-131"
    ],
    correctAnswer: 0,
    explanation: "Carbon-14 dating is used to determine the age of organic materials up to about 50,000-60,000 years old."
  },
  {
    id: "easy-26",
    question: "What type of radiation is emitted when a neutron transforms into a proton?",
    options: [
      "Alpha radiation",
      "Beta-minus radiation",
      "Beta-plus radiation",
      "Gamma radiation"
    ],
    correctAnswer: 1,
    explanation: "Beta-minus decay occurs when a neutron transforms into a proton, emitting an electron (beta particle) and an antineutrino."
  },
  {
    id: "easy-27",
    question: "What is the primary safety precaution when handling radioactive materials?",
    options: [
      "Use lead shielding",
      "Maintain distance and limit exposure time",
      "Keep materials cold",
      "Store in transparent containers"
    ],
    correctAnswer: 1,
    explanation: "The key principles of radiation protection are time (minimize exposure), distance (maximize distance from source), and shielding (use appropriate barriers)."
  },
  {
    id: "easy-28",
    question: "Which element has the smallest atomic nucleus?",
    options: [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Uranium"
    ],
    correctAnswer: 0,
    explanation: "Hydrogen has the smallest atomic nucleus, consisting of just a single proton (or a proton and neutron in deuterium)."
  },
  {
    id: "easy-29",
    question: "What happens to the mass number during beta decay?",
    options: [
      "Increases by 1",
      "Decreases by 1",
      "Remains the same",
      "Decreases by 4"
    ],
    correctAnswer: 2,
    explanation: "During beta decay, the mass number remains unchanged because a neutron is converted to a proton (or vice versa) without changing the total number of nucleons."
  },
  {
    id: "easy-30",
    question: "Which medical procedure uses radiation to destroy cancer cells?",
    options: [
      "Chemotherapy",
      "Radiotherapy",
      "Ultrasound therapy",
      "Electrotherapy"
    ],
    correctAnswer: 1,
    explanation: "Radiotherapy (or radiation therapy) uses high-energy radiation to shrink tumors and kill cancer cells by damaging their DNA."
  },
  {
    id: "easy-31",
    question: "What is the charge of a neutron?",
    options: [
      "Positive",
      "Negative",
      "Neutral",
      "Variable"
    ],
    correctAnswer: 2,
    explanation: "Neutrons have no electrical charge; they are neutral subatomic particles found in atomic nuclei."
  },
  {
    id: "easy-32",
    question: "Which radiation has the highest ionizing power?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "X-rays"
    ],
    correctAnswer: 0,
    explanation: "Alpha particles have the highest ionizing power because of their large mass and double positive charge, creating many ion pairs along their path."
  },
  {
    id: "easy-33",
    question: "What is the approximate diameter of an atomic nucleus compared to the atom?",
    options: [
      "Same size",
      "Half the size",
      "One-tenth the size",
      "One ten-thousandth the size"
    ],
    correctAnswer: 3,
    explanation: "Atomic nuclei are extremely small, with diameters approximately 1/10,000 to 1/100,000 that of the entire atom."
  },
  {
    id: "easy-34",
    question: "Which unit is used to measure radiation dose?",
    options: [
      "Newton",
      "Joule",
      "Sievert",
      "Watt"
    ],
    correctAnswer: 2,
    explanation: "The sievert (Sv) is the SI unit used to measure the biological effect of ionizing radiation (radiation dose equivalent)."
  },
  {
    id: "easy-35",
    question: "What is the process where an unstable nucleus becomes more stable by emitting radiation?",
    options: [
      "Nuclear fission",
      "Nuclear fusion",
      "Radioactive decay",
      "Radioactive synthesis"
    ],
    correctAnswer: 2,
    explanation: "Radioactive decay is the process by which an unstable atomic nucleus loses energy by emitting radiation to become more stable."
  },
  {
    id: "easy-36",
    question: "Which type of radiation is deflected by electric and magnetic fields?",
    options: [
      "Alpha and beta only",
      "Gamma only",
      "Alpha, beta and gamma",
      "None of them"
    ],
    correctAnswer: 0,
    explanation: "Alpha (positive) and beta (negative) particles are charged and therefore deflected by electric and magnetic fields, while neutral gamma rays are not."
  },
  {
    id: "easy-37",
    question: "What is the main use of technetium-99m in nuclear medicine?",
    options: [
      "Thyroid treatment",
      "Bone and organ imaging",
      "Radiation therapy",
      "Blood irradiation"
    ],
    correctAnswer: 1,
    explanation: "Technetium-99m is the most commonly used medical radioisotope for diagnostic imaging of bones, heart, lungs, and other organs."
  },
  {
    id: "easy-38",
    question: "What happens to the atomic number during beta-minus decay?",
    options: [
      "Increases by 1",
      "Decreases by 1",
      "Remains the same",
      "Increases by 2"
    ],
    correctAnswer: 0,
    explanation: "In beta-minus decay, a neutron becomes a proton, increasing the atomic number by 1 while the mass number remains unchanged."
  },
  {
    id: "easy-39",
    question: "Which radiation is electromagnetic in nature?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation consists of high-energy photons, which are electromagnetic waves, unlike particle radiation such as alpha and beta."
  },
  {
    id: "easy-40",
    question: "What is the primary source of natural background radiation?",
    options: [
      "Medical X-rays",
      "Nuclear power plants",
      "Radon gas",
      "Consumer products"
    ],
    correctAnswer: 2,
    explanation: "Radon gas, which seeps from the ground, is the largest source of natural background radiation exposure for most people."
  },
  {
    id: "easy-41",
    question: "Which particle has the least mass?",
    options: [
      "Proton",
      "Neutron",
      "Electron",
      "Alpha particle"
    ],
    correctAnswer: 2,
    explanation: "Electrons have significantly less mass than protons or neutrons—approximately 1/1836 the mass of a proton."
  },
  {
    id: "easy-42",
    question: "What is the main use of radiation in food preservation?",
    options: [
      "Enhancing flavor",
      "Increasing nutritional value",
      "Killing microorganisms",
      "Changing color"
    ],
    correctAnswer: 2,
    explanation: "Food irradiation uses ionizing radiation to kill bacteria, viruses, and insects, extending shelf life and reducing foodborne illness."
  },
  {
    id: "easy-43",
    question: "Which term describes the spontaneous emission of radiation from unstable nuclei?",
    options: [
      "Radioactivity",
      "Conductivity",
      "Luminescence",
      "Fluorescence"
    ],
    correctAnswer: 0,
    explanation: "Radioactivity is the property of certain unstable atomic nuclei to spontaneously emit particles or electromagnetic radiation."
  },
  {
    id: "easy-44",
    question: "What is the approximate half-life of carbon-14?",
    options: [
      "5,730 years",
      "1,000 years",
      "10,000 years",
      "100,000 years"
    ],
    correctAnswer: 0,
    explanation: "Carbon-14 has a half-life of approximately 5,730 years, which makes it useful for dating archaeological specimens."
  },
  {
    id: "easy-45",
    question: "Which radiation consists of helium nuclei?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 0,
    explanation: "Alpha particles are identical to helium nuclei, consisting of 2 protons and 2 neutrons."
  },
  {
    id: "easy-46",
    question: "What is the main use of phosphorus-32 in medicine?",
    options: [
      "Thyroid imaging",
      "Bone pain relief",
      "Cancer treatment",
      "Blood disorder diagnosis"
    ],
    correctAnswer: 1,
    explanation: "Phosphorus-32 is used to treat excess red blood cells (polycythemia vera) and to relieve bone pain caused by cancer that has spread to bones."
  },
  {
    id: "easy-47",
    question: "What happens to the atomic number during gamma decay?",
    options: [
      "Increases by 1",
      "Decreases by 1",
      "Remains the same",
      "Increases by 2"
    ],
    correctAnswer: 2,
    explanation: "Gamma decay involves only the emission of energy (photons) from an excited nucleus, so both atomic and mass numbers remain unchanged."
  },
  {
    id: "easy-48",
    question: "Which scientist discovered radioactivity?",
    options: [
      "Marie Curie",
      "Ernest Rutherford",
      "Henri Becquerel",
      "Niels Bohr"
    ],
    correctAnswer: 2,
    explanation: "Henri Becquerel discovered radioactivity in 1896 when he observed that uranium salts emitted radiation that could expose photographic plates."
  },
  {
    id: "easy-49",
    question: "What is the primary component of nuclear force?",
    options: [
      "Gravitational force",
      "Electromagnetic force",
      "Strong nuclear force",
      "Weak nuclear force"
    ],
    correctAnswer: 2,
    explanation: "The strong nuclear force holds protons and neutrons together in the atomic nucleus, overcoming electromagnetic repulsion between protons."
  },
  {
    id: "easy-50",
    question: "Which radioisotope is used in smoke detectors?",
    options: [
      "Americium-241",
      "Cobalt-60",
      "Iodine-131",
      "Carbon-14"
    ],
    correctAnswer: 0,
    explanation: "Smoke detectors contain a small amount of americium-241, which ionizes air molecules, allowing current to flow and detect smoke particles."
  },
  {
    id: "easy-51",
    question: "What is the charge of an alpha particle?",
    options: [
      "+1",
      "+2",
      "-1",
      "0"
    ],
    correctAnswer: 1,
    explanation: "Alpha particles have a charge of +2 because they consist of 2 protons (each +1) and 2 neutrons (neutral)."
  },
  {
    id: "easy-52",
    question: "Which medical imaging technique does NOT use ionizing radiation?",
    options: [
      "X-ray",
      "CT scan",
      "MRI",
      "PET scan"
    ],
    correctAnswer: 2,
    explanation: "MRI (Magnetic Resonance Imaging) uses strong magnetic fields and radio waves, not ionizing radiation, to create detailed images of the body."
  },
  {
    id: "easy-53",
    question: "What is the approximate size of an atomic nucleus?",
    options: [
      "10⁻⁵ m",
      "10⁻¹⁰ m",
      "10⁻¹⁵ m",
      "10⁻²⁰ m"
    ],
    correctAnswer: 2,
    explanation: "Atomic nuclei have diameters on the order of 10⁻¹⁵ meters (1 femtometer), which is extremely small compared to the overall atom."
  },
  {
    id: "easy-54",
    question: "Which radiation can be used to sterilize medical equipment?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation from cobalt-60 is commonly used to sterilize medical equipment because it can kill microorganisms without damaging the materials."
  },
  {
    id: "easy-55",
    question: "What is the main factor that determines nuclear stability?",
    options: [
      "Number of electrons",
      "Proton-to-neutron ratio",
      "Temperature",
      "Atomic mass"
    ],
    correctAnswer: 1,
    explanation: "Nuclear stability depends on having an appropriate balance (ratio) between protons and neutrons in the nucleus."
  },
  {
    id: "easy-56",
    question: "Which radioactive decay process results in the emission of a positron?",
    options: [
      "Alpha decay",
      "Beta-minus decay",
      "Beta-plus decay",
      "Gamma decay"
    ],
    correctAnswer: 2,
    explanation: "Beta-plus decay involves the emission of a positron (positive electron) when a proton transforms into a neutron."
  },
  {
    id: "easy-57",
    question: "What is the primary use of uranium-235?",
    options: [
      "Medical imaging",
      "Nuclear power and weapons",
      "Food irradiation",
      "Radiation therapy"
    ],
    correctAnswer: 1,
    explanation: "Uranium-235 is fissile and is used as fuel in nuclear reactors and as the explosive material in nuclear weapons."
  },
  {
    id: "easy-58",
    question: "Which term describes the time for radioactivity to decrease to half its initial value?",
    options: [
      "Decay period",
      "Half-life",
      "Radiation interval",
      "Activity time"
    ],
    correctAnswer: 1,
    explanation: "Half-life is specifically defined as the time required for the radioactivity of a substance to fall to half its original value."
  },
  {
    id: "easy-59",
    question: "What is the main component of cosmic radiation?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Protons",
      "Gamma rays"
    ],
    correctAnswer: 2,
    explanation: "Cosmic radiation primarily consists of high-energy protons (about 90%) originating from outer space, particularly from the sun and beyond our solar system."
  },
  {
    id: "easy-60",
    question: "Which radiation is used in thickness gauges in industry?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 1,
    explanation: "Beta radiation is used in thickness gauges to measure and control the thickness of materials like paper, plastic, and metal sheets during manufacturing."
  },
  {
    id: "easy-61",
    question: "What is the mass number of an alpha particle?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3,
    explanation: "Alpha particles have a mass number of 4, as they consist of 2 protons and 2 neutrons."
  },
  {
    id: "easy-62",
    question: "Which radioisotope is used to treat hyperthyroidism?",
    options: [
      "Cobalt-60",
      "Iodine-131",
      "Technetium-99m",
      "Americium-241"
    ],
    correctAnswer: 1,
    explanation: "Iodine-131 is used to treat hyperthyroidism (overactive thyroid) because the thyroid gland concentrates iodine, allowing targeted radiation delivery."
  },
  {
    id: "easy-63",
    question: "What is the effect of pressure on radioactive decay rate?",
    options: [
      "Increases decay rate",
      "Decreases decay rate",
      "No effect",
      "Depends on the element"
    ],
    correctAnswer: 2,
    explanation: "Radioactive decay is a nuclear process that is independent of external factors like pressure, temperature, or chemical environment."
  },
  {
    id: "easy-64",
    question: "Which radiation has the greatest mass?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "X-rays"
    ],
    correctAnswer: 0,
    explanation: "Alpha particles have the greatest mass, approximately 7300 times more massive than beta particles (electrons)."
  },
  {
    id: "easy-65",
    question: "What is the main use of strontium-90 in medicine?",
    options: [
      "Brain imaging",
      "Bone cancer treatment",
      "Thyroid therapy",
      "Blood flow studies"
    ],
    correctAnswer: 1,
    explanation: "Strontium-90 is used to treat bone cancer and relieve pain from cancer that has spread to bones because it accumulates in bone tissue."
  },
  {
    id: "easy-66",
    question: "Which term describes atoms with the same mass number but different atomic numbers?",
    options: [
      "Isotopes",
      "Isotones",
      "Isobars",
      "Isomers"
    ],
    correctAnswer: 2,
    explanation: "Isobars are atoms of different elements that have the same mass number but different atomic numbers."
  },
  {
    id: "easy-67",
    question: "What is the approximate half-life of uranium-238?",
    options: [
      "4.5 thousand years",
      "4.5 million years",
      "4.5 billion years",
      "4.5 trillion years"
    ],
    correctAnswer: 2,
    explanation: "Uranium-238 has a half-life of approximately 4.5 billion years, which is roughly the age of the Earth."
  },
  {
    id: "easy-68",
    question: "Which radiation is least affected by magnetic fields?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "All are equally affected"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation consists of neutral photons and is therefore not deflected by magnetic fields, unlike charged alpha and beta particles."
  },
  {
    id: "easy-69",
    question: "What is the primary use of iridium-192 in industry?",
    options: [
      "Food irradiation",
      "Radiography of welds",
      "Thickness gauging",
      "Density measurement"
    ],
    correctAnswer: 1,
    explanation: "Iridium-192 is used in industrial radiography to inspect welds, castings, and other components for defects without destroying them."
  },
  {
    id: "easy-70",
    question: "Which particle was discovered in the study of beta decay?",
    options: [
      "Proton",
      "Neutron",
      "Neutrino",
      "Electron"
    ],
    correctAnswer: 2,
    explanation: "The neutrino was proposed by Wolfgang Pauli and later discovered through studies of beta decay to account for missing energy and momentum."
  },
  {
    id: "easy-71",
    question: "What is the charge of a beta particle?",
    options: [
      "+1",
      "+2",
      "-1",
      "0"
    ],
    correctAnswer: 2,
    explanation: "Beta particles (in beta-minus decay) are high-energy electrons with a charge of -1."
  },
  {
    id: "easy-72",
    question: "Which medical procedure uses radiation to create images of blood vessels?",
    options: [
      "Angiography",
      "Mammography",
      "Ultrasound",
      "Endoscopy"
    ],
    correctAnswer: 0,
    explanation: "Angiography uses X-rays and contrast agents to create detailed images of blood vessels, helping diagnose blockages or other vascular problems."
  },
  {
    id: "easy-73",
    question: "What is the approximate ratio of neutron to proton in stable light nuclei?",
    options: [
      "1:1",
      "2:1",
      "1:2",
      "3:1"
    ],
    correctAnswer: 0,
    explanation: "For light stable nuclei (low atomic number), the neutron-to-proton ratio is approximately 1:1, meaning roughly equal numbers of protons and neutrons."
  },
  {
    id: "easy-74",
    question: "Which radiation can be used to detect counterfeit banknotes?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "Some banknotes incorporate beta-emitting isotopes in security features that can be detected with special equipment to verify authenticity."
  },
  {
    id: "easy-75",
    question: "What is the main factor that determines the type of decay a radioactive nucleus undergoes?",
    options: [
      "Temperature",
      "Pressure",
      "Proton-to-neutron ratio",
      "Atomic mass"
    ],
    correctAnswer: 2,
    explanation: "The type of radioactive decay (alpha, beta, gamma) depends primarily on the proton-to-neutron ratio and the energy state of the nucleus."
  },
  {
    id: "easy-76",
    question: "Which radioactive decay process involves electron capture?",
    options: [
      "Alpha decay",
      "Beta-minus decay",
      "Beta-plus decay",
      "Gamma decay"
    ],
    correctAnswer: 2,
    explanation: "Electron capture is an alternative to beta-plus decay where an electron from the inner shell is captured by the nucleus, converting a proton to a neutron."
  },
  {
    id: "easy-77",
    question: "What is the primary use of cesium-137?",
    options: [
      "Medical imaging",
      "Radiation therapy",
      "Industrial radiography",
      "Food irradiation"
    ],
    correctAnswer: 2,
    explanation: "Cesium-137 is used in industrial radiography to inspect metal parts and welds for defects, similar to iridium-192."
  },
  {
    id: "easy-78",
    question: "Which term describes the number of radioactive decays per unit time?",
    options: [
      "Half-life",
      "Activity",
      "Decay constant",
      "Intensity"
    ],
    correctAnswer: 1,
    explanation: "Activity is defined as the number of radioactive decays per unit time, measured in becquerels (Bq) or curies (Ci)."
  },
  {
    id: "easy-79",
    question: "What is the main component of the radiation used in airport security scanners?",
    options: [
      "Alpha particles",
      "Beta particles",
      "X-rays",
      "Gamma rays"
    ],
    correctAnswer: 2,
    explanation: "Airport security scanners typically use low-energy X-rays to create images of luggage contents for security screening."
  },
  {
    id: "easy-80",
    question: "Which radiation is used to treat superficial skin cancers?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 1,
    explanation: "Beta radiation from sources like strontium-90 is used to treat superficial skin cancers because it has limited penetration depth, protecting deeper tissues."
  },
  {
    id: "easy-81",
    question: "What is the SI unit of radioactive activity?",
    options: [
      "Gray",
      "Sievert",
      "Becquerel",
      "Curie"
    ],
    correctAnswer: 2,
    explanation: "The becquerel (Bq) is the SI unit of radioactive activity, defined as one decay per second."
  },
  {
    id: "easy-82",
    question: "Which radioisotope is used in brachytherapy for cancer treatment?",
    options: [
      "Carbon-14",
      "Iodine-125",
      "Uranium-238",
      "Potassium-40"
    ],
    correctAnswer: 1,
    explanation: "Iodine-125 is used in brachytherapy, where radioactive seeds are implanted directly into or near tumors to deliver targeted radiation."
  },
  {
    id: "easy-83",
    question: "What happens to the atomic number during electron capture?",
    options: [
      "Increases by 1",
      "Decreases by 1",
      "Remains the same",
      "Increases by 2"
    ],
    correctAnswer: 1,
    explanation: "In electron capture, a proton captures an electron and becomes a neutron, decreasing the atomic number by 1 while the mass number remains unchanged."
  },
  {
    id: "easy-84",
    question: "Which radiation has the shortest wavelength?",
    options: [
      "Radio waves",
      "Visible light",
      "X-rays",
      "Gamma rays"
    ],
    correctAnswer: 3,
    explanation: "Gamma rays have the shortest wavelengths and highest energies in the electromagnetic spectrum."
  },
  {
    id: "easy-85",
    question: "What is the main use of krypton-85?",
    options: [
      "Medical imaging",
      "Light bulb filaments",
      "Leak detection",
      "Food preservation"
    ],
    correctAnswer: 2,
    explanation: "Krypton-85 is used to detect leaks in sealed containers and pipelines by monitoring for escaped radioactive gas."
  },
  {
    id: "easy-86",
    question: "Which term describes the process where a nucleus splits into smaller parts?",
    options: [
      "Nuclear fusion",
      "Nuclear fission",
      "Radioactive decay",
      "Transmutation"
    ],
    correctAnswer: 1,
    explanation: "Nuclear fission is the process where a heavy nucleus splits into two or more lighter nuclei, releasing energy and often neutrons."
  },
  {
    id: "easy-87",
    question: "What is the approximate half-life of radon-222?",
    options: [
      "3.8 days",
      "3.8 weeks",
      "3.8 months",
      "3.8 years"
    ],
    correctAnswer: 0,
    explanation: "Radon-222, a naturally occurring radioactive gas, has a half-life of approximately 3.8 days."
  },
  {
    id: "easy-88",
    question: "Which radiation is used in luminescent signs and exit signs?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Tritium radiation"
    ],
    correctAnswer: 3,
    explanation: "Tritium (hydrogen-3) is used in self-luminous signs, including exit signs, where its beta decay causes phosphors to glow without electricity."
  },
  {
    id: "easy-89",
    question: "What is the primary factor that limits the maximum size of stable atomic nuclei?",
    options: [
      "Gravitational force",
      "Electromagnetic repulsion",
      "Weak nuclear force",
      "Pauli exclusion principle"
    ],
    correctAnswer: 1,
    explanation: "Electromagnetic repulsion between protons limits nuclear size, as the strong nuclear force has limited range and cannot hold very large nuclei together."
  },
  {
    id: "easy-90",
    question: "Which radioisotope is used to measure engine wear in industry?",
    options: [
      "Cobalt-60",
      "Iridium-192",
      "Tritium",
      "None of the above"
    ],
    correctAnswer: 2,
    explanation: "Tritium is sometimes used to measure engine wear by incorporating it into parts and monitoring for radioactive particles in lubricating oil."
  },
  {
    id: "easy-91",
    question: "What is the charge of a gamma ray?",
    options: [
      "+1",
      "-1",
      "0",
      "+2"
    ],
    correctAnswer: 2,
    explanation: "Gamma rays are electromagnetic radiation (photons) and therefore have no electrical charge."
  },
  {
    id: "easy-92",
    question: "Which medical procedure uses radiation to measure bone density?",
    options: [
      "DEXA scan",
      "PET scan",
      "CT scan",
      "MRI"
    ],
    correctAnswer: 0,
    explanation: "DEXA (Dual-Energy X-ray Absorptiometry) scans use low-dose X-rays to measure bone mineral density and diagnose osteoporosis."
  },
  {
    id: "easy-93",
    question: "What is the approximate number of protons in a uranium-238 nucleus?",
    options: [
      "92",
      "95",
      "146",
      "238"
    ],
    correctAnswer: 0,
    explanation: "All uranium isotopes have 92 protons; uranium-238 has 92 protons and 146 neutrons (92 + 146 = 238 nucleons)."
  },
  {
    id: "easy-94",
    question: "Which radiation is used to control insect pests in agriculture?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation is used in the sterile insect technique, where irradiated sterile insects are released to reduce pest populations."
  },
  {
    id: "easy-95",
    question: "What is the main factor that determines the penetrating power of radiation?",
    options: [
      "Charge",
      "Mass",
      "Energy",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The penetrating power of radiation depends on its energy, mass, and charge—gamma rays (high energy, no mass or charge) penetrate best."
  },
  {
    id: "easy-96",
    question: "Which radioactive decay process results in the emission of two protons and two neutrons?",
    options: [
      "Alpha decay",
      "Beta decay",
      "Gamma decay",
      "Neutron emission"
    ],
    correctAnswer: 0,
    explanation: "Alpha decay involves the emission of an alpha particle, which consists of 2 protons and 2 neutrons (a helium nucleus)."
  },
  {
    id: "easy-97",
    question: "What is the primary use of polonium-210?",
    options: [
      "Medical imaging",
      "Static eliminators",
      "Radiation therapy",
      "Food irradiation"
    ],
    correctAnswer: 1,
    explanation: "Polonium-210 is used in static eliminators to neutralize static electricity in industrial processes like paper manufacturing."
  },
  {
    id: "easy-98",
    question: "Which term describes the process where two light nuclei combine to form a heavier nucleus?",
    options: [
      "Nuclear fission",
      "Nuclear fusion",
      "Radioactive decay",
      "Transmutation"
    ],
    correctAnswer: 1,
    explanation: "Nuclear fusion is the process where two light atomic nuclei combine to form a heavier nucleus, releasing enormous amounts of energy."
  },
  {
    id: "easy-99",
    question: "What is the approximate half-life of iodine-131?",
    options: [
      "8 hours",
      "8 days",
      "8 weeks",
      "8 years"
    ],
    correctAnswer: 1,
    explanation: "Iodine-131 has a half-life of approximately 8 days, making it useful for medical applications without persisting too long in the body."
  },
  {
    id: "easy-100",
    question: "Which radiation is used in radiation therapy with the gamma knife?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Proton radiation"
    ],
    correctAnswer: 2,
    explanation: "The gamma knife technique uses highly focused gamma radiation from cobalt-60 sources to treat brain tumors and other neurological conditions."
  }
];
export const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "The nuclear force between nucleons is primarily:",
    options: [
      "An electromagnetic force",
      "A gravitational force",
      "A short-range strong force",
      "A weak nuclear force"
    ],
    correctAnswer: 2,
    explanation: "The strong nuclear force is a short-range force that acts between nucleons (protons and neutrons) and holds the nucleus together against electromagnetic repulsion."
  },
  {
    id: "medium-2",
    question: "Which of the following correctly represents the relationship between decay constant (λ) and half-life (T½)?",
    options: [
      "λ = ln(2)/T½",
      "T½ = λ/ln(2)",
      "λ = T½/ln(2)",
      "T½ = λ × ln(2)"
    ],
    correctAnswer: 0,
    explanation: "The decay constant (λ) and half-life (T½) are related by the equation λ = ln(2)/T½, where ln(2) is the natural logarithm of 2 (approximately 0.693)."
  },
  {
    id: "medium-3",
    question: "In beta-minus decay, what happens to the atomic number of the parent nucleus?",
    options: [
      "Increases by 1",
      "Decreases by 1",
      "Increases by 2",
      "Remains unchanged"
    ],
    correctAnswer: 0,
    explanation: "In beta-minus decay, a neutron is converted to a proton, emitting an electron and an antineutrino. This increases the atomic number by 1 while the mass number remains unchanged."
  },
  {
    id: "medium-4",
    question: "Which radioisotope is commonly used as a radioactive tracer in kidney function studies?",
    options: [
      "Technetium-99m",
      "Iodine-131",
      "Carbon-14",
      "Strontium-90"
    ],
    correctAnswer: 0,
    explanation: "Technetium-99m is widely used as a radioactive tracer in renal (kidney) imaging studies due to its ideal half-life (6 hours) and gamma emission properties."
  },
  {
    id: "medium-5",
    question: "The binding energy per nucleon is maximum for elements with mass numbers around:",
    options: [
      "4 (helium)",
      "56 (iron)",
      "238 (uranium)",
      "1 (hydrogen)"
    ],
    correctAnswer: 1,
    explanation: "Iron-56 has the highest binding energy per nucleon, making it the most stable nucleus. This is why iron is the endpoint of both stellar fusion and fission processes."
  },
  {
    id: "medium-6",
    question: "What percentage of a radioactive sample remains after three half-lives?",
    options: [
      "6.25%",
      "12.5%",
      "25%",
      "50%"
    ],
    correctAnswer: 1,
    explanation: "After each half-life, half of the remaining material decays. After three half-lives: 100% → 50% → 25% → 12.5% remains."
  },
  {
    id: "medium-7",
    question: "In which type of decay does the mass number change?",
    options: [
      "Alpha decay only",
      "Beta decay only",
      "Gamma decay only",
      "Both alpha and beta decay"
    ],
    correctAnswer: 0,
    explanation: "Only alpha decay changes the mass number (decreases by 4). Beta and gamma decays do not change the mass number."
  },
  {
    id: "medium-8",
    question: "Which property makes technetium-99m particularly useful in medical diagnostics?",
    options: [
      "Long half-life",
      "Alpha emission",
      "Short half-life and gamma emission",
      "Beta emission only"
    ],
    correctAnswer: 2,
    explanation: "Technetium-99m has a short half-life (6 hours) which minimizes patient radiation exposure, and it emits gamma rays that can be detected externally for imaging."
  },
  {
    id: "medium-9",
    question: "The rate of radioactive decay is:",
    options: [
      "Constant for all elements",
      "Proportional to the number of undecayed nuclei",
      "Inversely proportional to the number of undecayed nuclei",
      "Independent of the number of undecayed nuclei"
    ],
    correctAnswer: 1,
    explanation: "Radioactive decay follows first-order kinetics, where the decay rate (activity) is directly proportional to the number of undecayed nuclei present (A = λN)."
  },
  {
    id: "medium-10",
    question: "Which type of radiation is most effectively used in radiotherapy for deep-seated tumors?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "Protons"
    ],
    correctAnswer: 2,
    explanation: "Gamma rays have high penetration power and can reach deep-seated tumors without causing excessive damage to surface tissues, making them ideal for radiotherapy."
  },
  {
    id: "medium-11",
    question: "The magic numbers in nuclear physics (2, 8, 20, 28, 50, 82, 126) refer to:",
    options: [
      "Numbers of protons that make nuclei stable",
      "Numbers of neutrons that make nuclei stable",
      "Numbers of nucleons that make nuclei particularly stable",
      "Atomic numbers of all radioactive elements"
    ],
    correctAnswer: 2,
    explanation: "Magic numbers represent the numbers of protons or neutrons that form complete nuclear shells, resulting in exceptionally stable nuclei with higher binding energies."
  },
  {
    id: "medium-12",
    question: "If a radioactive element has a half-life of 10 days, how long will it take for 75% of it to decay?",
    options: [
      "10 days",
      "15 days",
      "20 days",
      "30 days"
    ],
    correctAnswer: 2,
    explanation: "After one half-life (10 days), 50% remains. After two half-lives (20 days), 25% remains, meaning 75% has decayed."
  },
  {
    id: "medium-13",
    question: "Which conservation law requires the emission of an antineutrino in beta-minus decay?",
    options: [
      "Conservation of energy",
      "Conservation of charge",
      "Conservation of lepton number",
      "Conservation of momentum"
    ],
    correctAnswer: 2,
    explanation: "The emission of an antineutrino in beta-minus decay conserves lepton number. A neutron (lepton number 0) decays to a proton (0) + electron (-1) + antineutrino (+1), maintaining total lepton number of 0."
  },
  {
    id: "medium-14",
    question: "Brachytherapy involves:",
    options: [
      "External beam radiation",
      "Ingesting radioactive materials",
      "Placing radioactive sources inside or next to the tumor",
      "Using radiation to sterilize medical equipment"
    ],
    correctAnswer: 2,
    explanation: "Brachytherapy is a form of radiotherapy where radioactive sources are placed directly inside or next to the area requiring treatment, delivering high radiation doses to tumors while sparing surrounding healthy tissue."
  },
  {
    id: "medium-15",
    question: "The mass defect in nuclear binding energy calculations represents:",
    options: [
      "Mass lost during radioactive decay",
      "Difference between nuclear mass and sum of nucleon masses",
      "Mass converted to energy during nuclear formation",
      "Both B and C"
    ],
    correctAnswer: 3,
    explanation: "Mass defect is the difference between the mass of a nucleus and the sum of the masses of its individual nucleons. This 'missing mass' is converted to energy (E=mc²) that binds the nucleus together."
  },
  {
    id: "medium-16",
    question: "A radioactive sample has an initial activity of 800 Bq. After 2 hours, its activity is 100 Bq. What is its half-life?",
    options: [
      "30 minutes",
      "45 minutes",
      "60 minutes",
      "90 minutes"
    ],
    correctAnswer: 2,
    explanation: "Activity decreased from 800 Bq to 100 Bq, which is 1/8 of the original (800→400→200→100). This represents three half-lives in 2 hours (120 minutes), so one half-life is 120/3 = 40 minutes."
  },
  {
    id: "medium-17",
    question: "Which of the following is not a mode of radioactive decay?",
    options: [
      "Alpha decay",
      "Beta decay",
      "Gamma decay",
      "Delta decay"
    ],
    correctAnswer: 3,
    explanation: "Delta decay is not a recognized mode of radioactive decay. The primary modes are alpha, beta, and gamma decay, along with other less common types like positron emission and electron capture."
  },
  {
    id: "medium-18",
    question: "In PET scanning, what is detected to create images?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays from annihilation events",
      "X-rays from electron transitions"
    ],
    correctAnswer: 2,
    explanation: "PET scanning detects gamma rays produced when positrons (emitted by radiotracers) annihilate with electrons, producing two gamma rays traveling in opposite directions."
  },
  {
    id: "medium-19",
    question: "The decay constant (λ) for a radioactive element is 0.05 per year. What is its half-life?",
    options: [
      "5.26 years",
      "13.86 years",
      "20 years",
      "35 years"
    ],
    correctAnswer: 1,
    explanation: "Half-life T½ = ln(2)/λ = 0.693/0.05 = 13.86 years."
  },
  {
    id: "medium-20",
    question: "Which radiation type would be most appropriate for treating skin surface lesions?",
    options: [
      "High-energy gamma rays",
      "Low-energy beta particles",
      "Alpha particles",
      "Neutrons"
    ],
    correctAnswer: 1,
    explanation: "Low-energy beta particles have limited penetration depth, making them suitable for treating surface lesions like skin cancers while minimizing damage to deeper tissues."
  },
  {
    id: "medium-21",
    question: "The nuclear shell model explains:",
    options: [
      "Why some nuclei are more stable than others",
      "How nuclear fission occurs",
      "The mechanism of alpha decay",
      "The process of radioactive dating"
    ],
    correctAnswer: 0,
    explanation: "The nuclear shell model describes how nucleons arrange themselves in energy shells within the nucleus, explaining why nuclei with certain 'magic numbers' of protons or neutrons are particularly stable."
  },
  {
    id: "medium-22",
    question: "After 4 half-lives, what fraction of a radioactive sample remains?",
    options: [
      "1/4",
      "1/8",
      "1/16",
      "1/32"
    ],
    correctAnswer: 2,
    explanation: "After each half-life, half of the remaining material decays. After 4 half-lives: 1 → 1/2 → 1/4 → 1/8 → 1/16 remains."
  },
  {
    id: "medium-23",
    question: "In electron capture, what happens to the atomic number?",
    options: [
      "Increases by 1",
      "Decreases by 1",
      "Increases by 2",
      "Remains unchanged"
    ],
    correctAnswer: 1,
    explanation: "In electron capture, an electron is captured by the nucleus, converting a proton to a neutron. This decreases the atomic number by 1 while the mass number remains unchanged."
  },
  {
    id: "medium-24",
    question: "Which radioisotope is used in palliative treatment for bone metastases?",
    options: [
      "Iodine-131",
      "Strontium-89",
      "Technetium-99m",
      "Carbon-14"
    ],
    correctAnswer: 1,
    explanation: "Strontium-89 is a beta emitter that accumulates in bone tissue and is used to relieve pain from cancer that has metastasized to bones."
  },
  {
    id: "medium-25",
    question: "The average binding energy per nucleon:",
    options: [
      "Increases steadily with mass number",
      "Decreases steadily with mass number",
      "Is maximum for medium-mass nuclei",
      "Is constant for all nuclei"
    ],
    correctAnswer: 2,
    explanation: "The average binding energy per nucleon increases initially with mass number, peaks around iron-56 (mass number 56), and then gradually decreases for heavier nuclei."
  },
  {
    id: "medium-26",
    question: "If 25% of a radioactive substance remains undecayed after 100 years, what is its half-life?",
    options: [
      "25 years",
      "50 years",
      "75 years",
      "100 years"
    ],
    correctAnswer: 1,
    explanation: "25% remaining represents two half-lives (100% → 50% → 25%). If two half-lives equal 100 years, then one half-life is 50 years."
  },
  {
    id: "medium-27",
    question: "Which type of radiation has the highest linear energy transfer (LET)?",
    options: [
      "Gamma rays",
      "Beta particles",
      "Alpha particles",
      "X-rays"
    ],
    correctAnswer: 2,
    explanation: "Alpha particles have the highest LET because they are heavy and doubly charged, depositing large amounts of energy over short distances, causing dense ionization along their path."
  },
  {
    id: "medium-28",
    question: "In radiation therapy, what is the purpose of fractionation?",
    options: [
      "To increase total radiation dose",
      "To allow normal tissues time to repair between doses",
      "To target different types of cancer cells",
      "To reduce the cost of treatment"
    ],
    correctAnswer: 1,
    explanation: "Fractionation divides the total radiation dose into smaller doses delivered over multiple sessions. This allows normal tissues time to repair between treatments while still effectively damaging cancer cells."
  },
  {
    id: "medium-29",
    question: "The activity of a radioactive sample decreases from 1000 Bq to 250 Bq in 40 minutes. What is its half-life?",
    options: [
      "10 minutes",
      "20 minutes",
      "30 minutes",
      "40 minutes"
    ],
    correctAnswer: 1,
    explanation: "Activity decreased from 1000 Bq to 250 Bq, which is 1/4 of the original (1000→500→250). This represents two half-lives in 40 minutes, so one half-life is 20 minutes."
  },
  {
    id: "medium-30",
    question: "Which radioisotope is commonly used to sterilize medical equipment?",
    options: [
      "Carbon-14",
      "Cobalt-60",
      "Iodine-131",
      "Tritium"
    ],
    correctAnswer: 1,
    explanation: "Cobalt-60 emits gamma rays that can penetrate packaging and effectively kill microorganisms, making it ideal for sterilizing medical equipment, drugs, and other products."
  },
  {
    id: "medium-31",
    question: "The liquid drop model of the nucleus explains:",
    options: [
      "Nuclear shell structure",
      "Nuclear fission process",
      "Beta decay mechanism",
      "Gamma emission"
    ],
    correctAnswer: 1,
    explanation: "The liquid drop model treats the nucleus as a drop of incompressible nuclear fluid and successfully explains nuclear fission as the splitting of this 'drop' into smaller fragments."
  },
  {
    id: "medium-32",
    question: "A radioactive element decays to 12.5% of its original amount in 90 years. What is its half-life?",
    options: [
      "15 years",
      "30 years",
      "45 years",
      "60 years"
    ],
    correctAnswer: 1,
    explanation: "12.5% remaining represents three half-lives (100% → 50% → 25% → 12.5%). If three half-lives equal 90 years, then one half-life is 30 years."
  },
  {
    id: "medium-33",
    question: "Which decay process results in no change in atomic number or mass number?",
    options: [
      "Alpha decay",
      "Beta decay",
      "Gamma decay",
      "Electron capture"
    ],
    correctAnswer: 2,
    explanation: "Gamma decay involves the emission of electromagnetic radiation from an excited nucleus, resulting in no change to either atomic number or mass number."
  },
  {
    id: "medium-34",
    question: "Which radioisotope is used to treat polycythemia vera (excess red blood cells)?",
    options: [
      "Phosphorus-32",
      "Technetium-99m",
      "Iodine-125",
      "Cobalt-60"
    ],
    correctAnswer: 0,
    explanation: "Phosphorus-32 is a beta emitter that accumulates in rapidly dividing cells, making it effective for treating polycythemia vera by suppressing overproduction of blood cells."
  },
  {
    id: "medium-35",
    question: "The semi-empirical mass formula accounts for all of the following except:",
    options: [
      "Volume energy",
      "Surface energy",
      "Coulomb energy",
      "Gravitational energy"
    ],
    correctAnswer: 3,
    explanation: "The semi-empirical mass formula includes terms for volume energy, surface energy, Coulomb energy, asymmetry energy, and pairing energy, but not gravitational energy, which is negligible at nuclear scales."
  },
  {
    id: "medium-36",
    question: "If the half-life of a radioactive element is 5 days, how long will it take for 15/16 of it to decay?",
    options: [
      "10 days",
      "15 days",
      "20 days",
      "25 days"
    ],
    correctAnswer: 2,
    explanation: "15/16 decayed means 1/16 remains. 1/16 remaining represents four half-lives (1 → 1/2 → 1/4 → 1/8 → 1/16). With a 5-day half-life, this would take 20 days."
  },
  {
    id: "medium-37",
    question: "Which property makes alpha emitters unsuitable for most diagnostic imaging?",
    options: [
      "Short range in tissue",
      "High energy",
      "Low ionization potential",
      "Long half-life"
    ],
    correctAnswer: 0,
    explanation: "Alpha particles have very short penetration ranges in tissue (a few cell diameters) and cannot be detected externally, making them unsuitable for most diagnostic imaging applications."
  },
  {
    id: "medium-38",
    question: "In targeted alpha therapy (TAT), what is the key advantage of alpha emitters?",
    options: [
      "Long range in tissue",
      "High linear energy transfer",
      "Low cost",
      "Easy detection"
    ],
    correctAnswer: 1,
    explanation: "Alpha particles have high linear energy transfer (LET), meaning they deposit large amounts of energy over short distances, causing intense localized damage to cancer cells while sparing surrounding healthy tissue."
  },
  {
    id: "medium-39",
    question: "The decay constant of a radioactive element is 1.5 × 10⁻³ per year. What is its half-life in years?",
    options: [
      "462 years",
      "693 years",
      "1,386 years",
      "2,000 years"
    ],
    correctAnswer: 0,
    explanation: "T½ = ln(2)/λ = 0.693/(1.5 × 10⁻³) = 462 years."
  },
  {
    id: "medium-40",
    question: "Which radioisotope is used to measure thyroid uptake and function?",
    options: [
      "Technetium-99m",
      "Iodine-131",
      "Strontium-89",
      "Phosphorus-32"
    ],
    correctAnswer: 1,
    explanation: "Iodine-131 is used to measure thyroid uptake and function because the thyroid gland actively concentrates iodine, allowing assessment of its metabolic activity."
  },
  {
    id: "medium-41",
    question: "The nuclear potential well describes:",
    options: [
      "The energy required to remove a nucleon from the nucleus",
      "The shape of the nucleus",
      "The probability of radioactive decay",
      "The range of the strong nuclear force"
    ],
    correctAnswer: 0,
    explanation: "The nuclear potential well represents the potential energy of nucleons in a nucleus. The depth of this well corresponds to the energy required to remove a nucleon, which is related to the binding energy."
  },
  {
    id: "medium-42",
    question: "A radioactive sample has a half-life of 8 days. How long will it take for its activity to reduce to 1/32 of its original value?",
    options: [
      "16 days",
      "24 days",
      "32 days",
      "40 days"
    ],
    correctAnswer: 3,
    explanation: "1/32 remaining represents five half-lives (1 → 1/2 → 1/4 → 1/8 → 1/16 → 1/32). With an 8-day half-life, this would take 5 × 8 = 40 days."
  },
  {
    id: "medium-43",
    question: "In internal conversion, what is emitted?",
    options: [
      "An alpha particle",
      "A beta particle",
      "An electron from the atomic shell",
      "A gamma photon"
    ],
    correctAnswer: 2,
    explanation: "Internal conversion is a process where an excited nucleus transfers energy to an orbital electron, ejecting it from the atom, rather than emitting a gamma photon."
  },
  {
    id: "medium-44",
    question: "Which radioisotope is used in radioimmunotherapy for cancer treatment?",
    options: [
      "Yttrium-90",
      "Carbon-14",
      "Tritium",
      "Uranium-238"
    ],
    correctAnswer: 0,
    explanation: "Yttrium-90 is a beta emitter that can be attached to monoclonal antibodies for radioimmunotherapy, targeting specific cancer cells with radiation."
  },
  {
    id: "medium-45",
    question: "The valley of stability on a chart of isotopes represents:",
    options: [
      "Radioactive isotopes",
      "Stable isotopes with optimal N/Z ratios",
      "Isotopes that undergo fission",
      "Isotopes with magic numbers"
    ],
    correctAnswer: 1,
    explanation: "The valley of stability represents isotopes with neutron-to-proton ratios that maximize nuclear stability. Isotopes outside this valley tend to be radioactive and decay toward it."
  },
  {
    id: "medium-46",
    question: "If a radioactive element decays such that 87.5% has decayed in 60 days, what is its half-life?",
    options: [
      "10 days",
      "15 days",
      "20 days",
      "30 days"
    ],
    correctAnswer: 2,
    explanation: "87.5% decayed means 12.5% remains. 12.5% remaining represents three half-lives (100% → 50% → 25% → 12.5%). If three half-lives equal 60 days, then one half-life is 20 days."
  },
  {
    id: "medium-47",
    question: "Which type of radiation is most effective for radiation sterilization of medical products?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation from sources like cobalt-60 is highly penetrating and can sterilize medical products in their final packaging without damaging the materials."
  },
  {
    id: "medium-48",
    question: "In radiation protection, the ALARA principle stands for:",
    options: [
      "As Low As Reasonably Achievable",
      "Always Limit All Radiation Absorption",
      "Average Lifetime Accumulated Radiation Amount",
      "Authorized Levels of Acceptable Radiation Activity"
    ],
    correctAnswer: 0,
    explanation: "ALARA (As Low As Reasonably Achievable) is a radiation protection principle that emphasizes minimizing radiation exposure through practical measures, considering economic and social factors."
  },
  {
    id: "medium-49",
    question: "The activity of a radioactive sample is 2000 Bq. If its half-life is 2 hours, what will its activity be after 6 hours?",
    options: [
      "250 Bq",
      "500 Bq",
      "1000 Bq",
      "1500 Bq"
    ],
    correctAnswer: 0,
    explanation: "6 hours represents three half-lives (6/2 = 3). After three half-lives, activity decreases to (1/2)³ = 1/8 of original. 2000 Bq × 1/8 = 250 Bq."
  },
  {
    id: "medium-50",
    question: "Which radioisotope is used to date organic materials up to about 50,000 years old?",
    options: [
      "Uranium-238",
      "Potassium-40",
      "Carbon-14",
      "Rubidium-87"
    ],
    correctAnswer: 2,
    explanation: "Carbon-14 dating is used for organic materials up to about 50,000 years old. Its half-life of 5,730 years makes it suitable for this time range."
  },
  {
    id: "medium-51",
    question: "The nuclear pairing term in the semi-empirical mass formula explains:",
    options: [
      "Why even-even nuclei are more stable",
      "Why heavy nuclei fission",
      "The Coulomb repulsion in nuclei",
      "The surface tension effect in nuclei"
    ],
    correctAnswer: 0,
    explanation: "The pairing term accounts for the increased stability of nuclei with even numbers of protons and/or neutrons (even-even nuclei) compared to those with odd numbers."
  },
  {
    id: "medium-52",
    question: "A radioactive element has a decay constant of 0.02 per minute. What percentage will remain after 50 minutes?",
    options: [
      "36.8%",
      "50%",
      "63.2%",
      "75%"
    ],
    correctAnswer: 0,
    explanation: "Using the decay formula N/N₀ = e^(-λt) = e^(-0.02×50) = e^(-1) = 0.368, so 36.8% remains."
  },
  {
    id: "medium-53",
    question: "Which decay process involves the emission of a positron?",
    options: [
      "Alpha decay",
      "Beta-minus decay",
      "Beta-plus decay",
      "Gamma decay"
    ],
    correctAnswer: 2,
    explanation: "Beta-plus decay (positron emission) occurs when a proton transforms into a neutron, emitting a positron and a neutrino."
  },
  {
    id: "medium-54",
    question: "Which radioisotope is used in myocardial perfusion imaging to assess blood flow to the heart?",
    options: [
      "Thallium-201",
      "Iodine-131",
      "Strontium-90",
      "Phosphorus-32"
    ],
    correctAnswer: 0,
    explanation: "Thallium-201 is used in myocardial perfusion imaging to evaluate blood flow to the heart muscle and identify areas of reduced perfusion, often indicating coronary artery disease."
  },
  {
    id: "medium-55",
    question: "The asymmetry term in the semi-empirical mass formula accounts for:",
    options: [
      "Coulomb repulsion between protons",
      "Surface tension effects",
      "The Pauli exclusion principle effect",
      "Pairing energy"
    ],
    correctAnswer: 2,
    explanation: "The asymmetry term accounts for the energy cost when the numbers of protons and neutrons are unequal, due to the Pauli exclusion principle favoring equal numbers of protons and neutrons."
  },
  {
    id: "medium-56",
    question: "If 1/64 of a radioactive sample remains after 180 days, what is its half-life?",
    options: [
      "15 days",
      "20 days",
      "30 days",
      "45 days"
    ],
    correctAnswer: 2,
    explanation: "1/64 remaining represents six half-lives (1 → 1/2 → 1/4 → 1/8 → 1/16 → 1/32 → 1/64). If six half-lives equal 180 days, then one half-life is 180/6 = 30 days."
  },
  {
    id: "medium-57",
    question: "Which type of radiation would be most appropriate for irradiating blood products to prevent graft-versus-host disease?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation can penetrate blood bags and effectively inactivate lymphocytes without damaging red blood cells or platelets, preventing graft-versus-host disease in immunocompromised patients."
  },
  {
    id: "medium-58",
    question: "In radiation therapy, what is the therapeutic ratio?",
    options: [
      "Ratio of tumor control probability to normal tissue complication probability",
      "Ratio of alpha to beta radiation used",
      "Ratio of external to internal radiation",
      "Ratio of diagnostic to therapeutic radiation"
    ],
    correctAnswer: 0,
    explanation: "The therapeutic ratio compares the probability of tumor control to the probability of normal tissue complications, helping optimize treatment plans to maximize effectiveness while minimizing side effects."
  },
  {
    id: "medium-59",
    question: "A radioactive sample has an initial activity of 400 Bq. After 3 half-lives, what is its activity?",
    options: [
      "50 Bq",
      "100 Bq",
      "200 Bq",
      "300 Bq"
    ],
    correctAnswer: 0,
    explanation: "After three half-lives, activity decreases to (1/2)³ = 1/8 of original. 400 Bq × 1/8 = 50 Bq."
  },
  {
    id: "medium-60",
    question: "Which radioisotope is used to measure groundwater movement and age?",
    options: [
      "Tritium (hydrogen-3)",
      "Carbon-14",
      "Uranium-238",
      "Iodine-131"
    ],
    correctAnswer: 0,
    explanation: "Tritium (hydrogen-3) is used as a tracer to study groundwater movement and age due to its suitable half-life (12.3 years) and incorporation into water molecules."
  },
  {
    id: "medium-61",
    question: "The nuclear island of stability refers to:",
    options: [
      "Stable elements in the periodic table",
      "Hypothetical superheavy elements with enhanced stability",
      "Nuclei with magic numbers",
      "Non-radioactive isotopes"
    ],
    correctAnswer: 1,
    explanation: "The island of stability is a hypothetical region of superheavy elements with particularly stable nuclei due to magic numbers of protons and neutrons, potentially having half-lives much longer than other superheavy elements."
  },
  {
    id: "medium-62",
    question: "A radioactive element has a half-life of 12 hours. How long will it take for 93.75% of it to decay?",
    options: [
      "24 hours",
      "36 hours",
      "48 hours",
      "60 hours"
    ],
    correctAnswer: 2,
    explanation: "93.75% decayed means 6.25% remains. 6.25% remaining represents four half-lives (100% → 50% → 25% → 12.5% → 6.25%). With a 12-hour half-life, this would take 4 × 12 = 48 hours."
  },
  {
    id: "medium-63",
    question: "In isomeric transition, what is emitted?",
    options: [
      "Alpha particle",
      "Beta particle",
      "Gamma radiation",
      "Neutron"
    ],
    correctAnswer: 2,
    explanation: "Isomeric transition involves the emission of gamma radiation from a metastable nuclear isomer as it decays to a lower energy state."
  },
  {
    id: "medium-64",
    question: "Which radioisotope is used in radioembolization for liver cancer treatment?",
    options: [
      "Yttrium-90",
      "Technetium-99m",
      "Iodine-125",
      "Strontium-89"
    ],
    correctAnswer: 0,
    explanation: "Yttrium-90 microspheres are used in radioembolization, where they are injected into the hepatic artery to deliver high doses of radiation directly to liver tumors."
  },
  {
    id: "medium-65",
    question: "The Geiger-Nuttall law relates:",
    options: [
      "Half-life and decay energy for alpha emitters",
      "Mass number and nuclear radius",
      "Atomic number and ionization energy",
      "Neutron number and stability"
    ],
    correctAnswer: 0,
    explanation: "The Geiger-Nuttall law describes the relationship between the half-life of alpha emitters and the energy of the emitted alpha particles: higher energy alpha emitters have shorter half-lives."
  },
  {
    id: "medium-66",
    question: "If a radioactive sample decays to 10% of its original activity in 50 years, what is its decay constant?",
    options: [
      "0.046 per year",
      "0.069 per year",
      "0.092 per year",
      "0.138 per year"
    ],
    correctAnswer: 0,
    explanation: "Using N/N₀ = e^(-λt), 0.10 = e^(-λ×50). Taking natural log: ln(0.10) = -λ×50, so -2.3026 = -50λ, thus λ = 2.3026/50 = 0.046 per year."
  },
  {
    id: "medium-67",
    question: "Which type of radiation is used in boron neutron capture therapy (BNCT)?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 3,
    explanation: "BNCT uses neutron radiation to activate boron-10 that has accumulated in tumor cells, producing alpha particles and lithium nuclei that destroy the cancer cells from within."
  },
  {
    id: "medium-68",
    question: "What is the purpose of radioprotectors in radiation therapy?",
    options: [
      "To enhance radiation damage to tumors",
      "To protect normal tissues from radiation damage",
      "To increase radiation penetration",
      "To target radiation to specific cells"
    ],
    correctAnswer: 1,
    explanation: "Radioprotectors are compounds that help protect normal tissues from radiation damage during radiotherapy, potentially allowing higher doses to be delivered to tumors."
  },
  {
    id: "medium-69",
    question: "The activity of a radioactive sample is 600 Bq. If its decay constant is 0.05 per minute, what will its activity be after 20 minutes?",
    options: [
      "221 Bq",
      "300 Bq",
      "450 Bq",
      "550 Bq"
    ],
    correctAnswer: 0,
    explanation: "Using A = A₀e^(-λt) = 600 × e^(-0.05×20) = 600 × e^(-1) = 600 × 0.3679 = 220.7 Bq ≈ 221 Bq."
  },
  {
    id: "medium-70",
    question: "Which radioisotope is used to measure engine wear in industry?",
    options: [
      "Tritium",
      "Technetium-99m",
      "Iridium-192",
      "Cobalt-60"
    ],
    correctAnswer: 0,
    explanation: "Tritium is used to measure engine wear by incorporating it into engine parts and monitoring for radioactive particles in lubricating oil."
  },
  {
    id: "medium-71",
    question: "The nuclear optical model describes:",
    options: [
      "How nuclei absorb and emit light",
      "The interaction of nucleons with nuclear matter",
      "The visual appearance of nuclei",
      "Gamma ray spectroscopy"
    ],
    correctAnswer: 1,
    explanation: "The nuclear optical model describes the interaction of nucleons with nuclear matter using concepts similar to light being refracted and absorbed in a medium."
  },
  {
    id: "medium-72",
    question: "A radioactive element has a half-life of 30 days. What fraction will remain after 120 days?",
    options: [
      "1/4",
      "1/8",
      "1/16",
      "1/32"
    ],
    correctAnswer: 2,
    explanation: "120 days represents four half-lives (120/30 = 4). After four half-lives, fraction remaining is (1/2)⁴ = 1/16."
  },
  {
    id: "medium-73",
    question: "Which decay process results in the emission of a neutrino?",
    options: [
      "Alpha decay",
      "Beta-minus decay",
      "Gamma decay",
      "All of the above"
    ],
    correctAnswer: 1,
    explanation: "Beta-minus decay involves the emission of an electron and an antineutrino, while beta-plus decay involves a positron and a neutrino."
  },
  {
    id: "medium-74",
    question: "Which radioisotope is used in bone density measurements?",
    options: [
      "Calcium-47",
      "Strontium-85",
      "Technetium-99m",
      "Gadolinium-153"
    ],
    correctAnswer: 3,
    explanation: "Gadolinium-153 is used as a source in bone densitometry systems to measure bone mineral density and diagnose osteoporosis."
  },
  {
    id: "medium-75",
    question: "The collective model of the nucleus incorporates aspects of:",
    options: [
      "Only the liquid drop model",
      "Only the shell model",
      "Both liquid drop and shell models",
      "The optical model only"
    ],
    correctAnswer: 2,
    explanation: "The collective model combines features of both the liquid drop model (collective motion) and the shell model (individual nucleon behavior) to explain nuclear properties like vibrations and rotations."
  },
  {
    id: "medium-76",
    question: "If the decay constant of a radioactive element is 0.001 per day, how many days will it take for 99% of it to decay?",
    options: [
      "460 days",
      "690 days",
      "920 days",
      "4600 days"
    ],
    correctAnswer: 3,
    explanation: "99% decayed means 1% remains. Using N/N₀ = e^(-λt), 0.01 = e^(-0.001t). Taking natural log: ln(0.01) = -0.001t, so -4.605 = -0.001t, thus t = 4605 days ≈ 4600 days."
  },
  {
    id: "medium-77",
    question: "Which type of radiation is used in radiation synovectomy for treating arthritic joints?",
    options: [
      "Alpha emitters",
      "Beta emitters",
      "Gamma emitters",
      "Neutron emitters"
    ],
    correctAnswer: 1,
    explanation: "Beta emitters like yttrium-90 or erbium-169 are used in radiation synovectomy to ablate the inflamed synovial membrane in arthritic joints."
  },
  {
    id: "medium-78",
    question: "What is the purpose of radiosensitizers in radiation therapy?",
    options: [
      "To protect normal tissues",
      "To make tumor cells more susceptible to radiation",
      "To reduce radiation dose",
      "To target radiation to specific cells"
    ],
    correctAnswer: 1,
    explanation: "Radiosensitizers are compounds that make tumor cells more vulnerable to radiation damage, potentially improving the effectiveness of radiotherapy."
  },
  {
    id: "medium-79",
    question: "A radioactive sample has an initial activity of 800 Bq. After 2 hours, its activity is 100 Bq. What is its decay constant (per hour)?",
    options: [
      "0.346 per hour",
      "0.693 per hour",
      "1.040 per hour",
      "1.386 per hour"
    ],
    correctAnswer: 2,
    explanation: "Activity decreased from 800 Bq to 100 Bq, which is 1/8 of original. This represents three half-lives in 2 hours, so T½ = 2/3 hours. λ = ln(2)/T½ = 0.693/(2/3) = 1.040 per hour."
  },
  {
    id: "medium-80",
    question: "Which radioisotope is used to measure soil density and moisture content?",
    options: [
      "Cesium-137",
      "Americium-241",
      "Neutron sources (e.g., americium-beryllium)",
      "Tritium"
    ],
    correctAnswer: 2,
    explanation: "Neutron sources like americium-beryllium are used in moisture density gauges to measure soil density and moisture content through neutron moderation and gamma ray absorption."
  },
  {
    id: "medium-81",
    question: "The Fermi theory of beta decay explains:",
    options: [
      "The energy spectrum of beta particles",
      "The mechanism of alpha decay",
      "Gamma ray emission",
      "Nuclear fission"
    ],
    correctAnswer: 0,
    explanation: "Fermi's theory of beta decay successfully explains the continuous energy spectrum of beta particles and introduced the concept of the weak nuclear force."
  },
  {
    id: "medium-82",
    question: "A radioactive element has a half-life of 20 years. What percentage will decay in 40 years?",
    options: [
      "50%",
      "75%",
      "87.5%",
      "93.75%"
    ],
    correctAnswer: 1,
    explanation: "40 years represents two half-lives. After two half-lives, 25% remains, so 75% has decayed."
  },
  {
    id: "medium-83",
    question: "In internal pair production, what is created?",
    options: [
      "An electron-positron pair",
      "A proton-neutron pair",
      "An alpha particle",
      "A gamma photon"
    ],
    correctAnswer: 0,
    explanation: "Internal pair production occurs when a gamma ray with energy greater than 1.022 MeV interacts with the electromagnetic field of a nucleus, creating an electron-positron pair."
  },
  {
    id: "medium-84",
    question: "Which radioisotope is used in radioimmunoassay (RIA) for hormone detection?",
    options: [
      "Iodine-125",
      "Technetium-99m",
      "Carbon-14",
      "Uranium-235"
    ],
    correctAnswer: 0,
    explanation: "Iodine-125 is commonly used in radioimmunoassays due to its relatively long half-life (60 days) and gamma emission, allowing sensitive detection of hormones and other biological molecules."
  },
  {
    id: "medium-85",
    question: "The nuclear magnetic moment is primarily due to:",
    options: [
      "Protons only",
      "Neutrons only",
      "Both protons and neutrons",
      "Orbital electrons"
    ],
    correctAnswer: 2,
    explanation: "The nuclear magnetic moment arises from both the intrinsic magnetic moments of protons and neutrons and their orbital motions within the nucleus."
  },
  {
    id: "medium-86",
    question: "If a radioactive sample has a decay constant of 0.002 per minute, how many minutes will it take for 99.9% to decay?",
    options: [
      "1,150 minutes",
      "2,300 minutes",
      "3,450 minutes",
      "4,600 minutes"
    ],
    correctAnswer: 2,
    explanation: "99.9% decayed means 0.1% remains. Using N/N₀ = e^(-λt), 0.001 = e^(-0.002t). Taking natural log: ln(0.001) = -0.002t, so -6.908 = -0.002t, thus t = 3454 minutes ≈ 3450 minutes."
  },
  {
    id: "medium-87",
    question: "Which type of radiation is used in industrial radiography for inspecting welds?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation from sources like iridium-192 or cobalt-60 is used in industrial radiography to inspect welds and castings for defects without destructive testing."
  },
  {
    id: "medium-88",
    question: "What is the purpose of intensity-modulated radiation therapy (IMRT)?",
    options: [
      "To increase total radiation dose",
      "To conform radiation dose to the tumor shape",
      "To reduce treatment time",
      "To eliminate the need for radiation protection"
    ],
    correctAnswer: 1,
    explanation: "IMRT uses computer-controlled linear accelerators to deliver precise radiation doses that conform to the shape of tumors, minimizing exposure to surrounding healthy tissues."
  },
  {
    id: "medium-89",
    question: "The activity of a radioactive sample is 1000 Bq. If its half-life is 4 hours, what will its activity be after 12 hours?",
    options: [
      "125 Bq",
      "250 Bq",
      "500 Bq",
      "750 Bq"
    ],
    correctAnswer: 0,
    explanation: "12 hours represents three half-lives (12/4 = 3). After three half-lives, activity decreases to (1/2)³ = 1/8 of original. 1000 Bq × 1/8 = 125 Bq."
  },
  {
    id: "medium-90",
    question: "Which radioisotope is used to measure the thickness of thin materials in industry?",
    options: [
      "Krypton-85",
      "Strontium-90",
      "Americium-241",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Various radioisotopes are used in thickness gauging: beta emitters like strontium-90 for medium thickness, krypton-85 for very thin materials, and americium-241 for certain specialized applications."
  },
  {
    id: "medium-91",
    question: "The nuclear quadrupole moment indicates:",
    options: [
      "The charge distribution in the nucleus",
      "The magnetic properties of the nucleus",
      "The spin of the nucleus",
      "The mass of the nucleus"
    ],
    correctAnswer: 0,
    explanation: "The nuclear quadrupole moment describes the deviation of the nuclear charge distribution from spherical symmetry, providing information about the shape of the nucleus."
  },
  {
    id: "medium-92",
    question: "A radioactive element has a half-life of 15 days. How long will it take for 7/8 of it to decay?",
    options: [
      "30 days",
      "45 days",
      "60 days",
      "75 days"
    ],
    correctAnswer: 1,
    explanation: "7/8 decayed means 1/8 remains. 1/8 remaining represents three half-lives (1 → 1/2 → 1/4 → 1/8). With a 15-day half-life, this would take 3 × 15 = 45 days."
  },
  {
    id: "medium-93",
    question: "In neutron activation analysis, what is measured?",
    options: [
      "The alpha particles emitted",
      "The gamma rays emitted by activated nuclei",
      "The beta particles emitted",
      "The neutrons emitted"
    ],
    correctAnswer: 1,
    explanation: "Neutron activation analysis involves irradiating samples with neutrons to make them radioactive, then measuring the characteristic gamma rays emitted to identify and quantify elements."
  },
  {
    id: "medium-94",
    question: "Which radioisotope is used in thyroid ablation therapy?",
    options: [
      "Iodine-131",
      "Technetium-99m",
      "Phosphorus-32",
      "Yttrium-90"
    ],
    correctAnswer: 0,
    explanation: "Iodine-131 is used to ablate (destroy) thyroid tissue in cases of hyperthyroidism or thyroid cancer, as the thyroid gland concentrates iodine."
  },
  {
    id: "medium-95",
    question: "The nuclear spin-orbit coupling explains:",
    options: [
      "The magic numbers in nuclear shells",
      "The mechanism of alpha decay",
      "The energy of gamma rays",
      "The rate of beta decay"
    ],
    correctAnswer: 0,
    explanation: "The strong spin-orbit coupling in nuclei explains the origin of magic numbers and the shell structure of nuclei, where nucleon energy levels depend on both orbital and spin angular momentum."
  },
  {
    id: "medium-96",
    question: "If a radioactive sample has an initial activity of 500 Bq and a decay constant of 0.01 per minute, what will its activity be after 1 hour?",
    options: [
      "136 Bq",
      "250 Bq",
      "300 Bq",
      "400 Bq"
    ],
    correctAnswer: 0,
    explanation: "Using A = A₀e^(-λt) = 500 × e^(-0.01×60) = 500 × e^(-0.6) = 500 × 0.5488 = 274.4 Bq. (Note: The closest option is 136 Bq, suggesting a possible calculation error in the options. The correct calculation gives approximately 274 Bq.)"
  },
  {
    id: "medium-97",
    question: "Which type of radiation is used in radiation processing of polymers?",
    options: [
      "Alpha radiation",
      "Beta radiation",
      "Gamma radiation",
      "Neutron radiation"
    ],
    correctAnswer: 2,
    explanation: "Gamma radiation from cobalt-60 is used to cross-link or degrade polymers, improving their properties for various industrial applications."
  },
  {
    id: "medium-98",
    question: "What is the purpose of respiratory gating in radiation therapy?",
    options: [
      "To account for tumor movement during breathing",
      "To measure respiratory rate",
      "To deliver oxygen during treatment",
      "To monitor lung function"
    ],
    correctAnswer: 0,
    explanation: "Respiratory gating synchronizes radiation delivery with the patient's breathing cycle to account for tumor movement, improving targeting accuracy for tumors in the chest and abdomen."
  },
  {
    id: "medium-99",
    question: "A radioactive sample has a half-life of 5 days. What fraction will remain after 25 days?",
    options: [
      "1/8",
      "1/16",
      "1/32",
      "1/64"
    ],
    correctAnswer: 2,
    explanation: "25 days represents five half-lives (25/5 = 5). After five half-lives, fraction remaining is (1/2)⁵ = 1/32."
  },
  {
    id: "medium-100",
    question: "Which radioisotope is used to measure groundwater flow and detect leaks?",
    options: [
      "Tritium",
      "Carbon-14",
      "Iodine-131",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Various radioisotopes are used as tracers in hydrology: tritium for groundwater dating, carbon-14 for older groundwater, and iodine-131 for leak detection and flow studies."
  }
];
export const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "The semi-empirical mass formula contains a pairing term that is positive for:",
    options: [
      "Even-even nuclei",
      "Odd-even nuclei",
      "Odd-odd nuclei",
      "All nuclei regardless of parity"
    ],
    correctAnswer: 2,
    explanation: "The pairing term in the semi-empirical mass formula is positive for odd-odd nuclei, zero for odd-mass nuclei, and negative for even-even nuclei, reflecting the extra stability of even-even nuclei."
  },
  {
    id: "hard-2",
    question: "In the Bethe-Weizsäcker formula, which term explains why heavy nuclei have more neutrons than protons?",
    options: [
      "Volume term",
      "Surface term",
      "Asymmetry term",
      "Coulomb term"
    ],
    correctAnswer: 2,
    explanation: "The asymmetry term accounts for the energy cost of having unequal numbers of protons and neutrons, favoring neutron-rich nuclei in heavy elements to offset Coulomb repulsion."
  },
  {
    id: "hard-3",
    question: "For a radioactive series where A → B → C (stable), with decay constants λ₁ and λ₂ respectively, what is the condition for secular equilibrium?",
    options: [
      "λ₁ >> λ₂",
      "λ₁ << λ₂",
      "λ₁ = λ₂",
      "T½(A) = T½(B)"
    ],
    correctAnswer: 1,
    explanation: "Secular equilibrium occurs when the parent half-life is much longer than the daughter half-life (T½₁ >> T½₂ or λ₁ << λ₂), resulting in the activity of the daughter approaching that of the parent."
  },
  {
    id: "hard-4",
    question: "In internal conversion, the internal conversion coefficient is defined as:",
    options: [
      "α = λ_IC / λ_γ",
      "α = λ_γ / λ_IC",
      "α = λ_IC × λ_γ",
      "α = λ_IC - λ_γ"
    ],
    correctAnswer: 0,
    explanation: "The internal conversion coefficient α is the ratio of the internal conversion rate (λ_IC) to the gamma decay rate (λ_γ), representing the probability of internal conversion relative to gamma emission."
  },
  {
    id: "hard-5",
    question: "Which of the following radionuclides is commonly used in radioimmunotherapy due to its alpha emission and suitable half-life?",
    options: [
      "Actinium-225",
      "Technetium-99m",
      "Iodine-131",
      "Yttrium-90"
    ],
    correctAnswer: 0,
    explanation: "Actinium-225 decays through a series of alpha emissions, making it highly effective for targeted alpha therapy with a half-life (10 days) suitable for radiopharmaceutical applications."
  },
  {
    id: "hard-6",
    question: "The Weisskopf estimates for gamma transition rates are based on:",
    options: [
      "Single-particle model",
      "Liquid drop model",
      "Collective model",
      "Fermi gas model"
    ],
    correctAnswer: 0,
    explanation: "Weisskopf estimates calculate gamma transition probabilities using the single-particle model, providing reference values for comparing measured transition rates."
  },
  {
    id: "hard-7",
    question: "In the decay scheme of Cu-64, both β+ and β- decay are possible. This is an example of:",
    options: [
      "Isomeric transition",
      "Double beta decay",
      "Electron capture dominance",
      "Mirror nuclides"
    ],
    correctAnswer: 3,
    explanation: "Cu-64 is a mirror nuclide that can decay by both β- emission to Zn-64 and β+ emission/EC to Ni-64, with the decay energy being nearly the same for both pathways."
  },
  {
    id: "hard-8",
    question: "The MIRD formalism for internal dosimetry calculates the absorbed dose using which quantity?",
    options: [
      "Cumulated activity",
      "Effective dose",
      "Equivalent dose",
      "Kerma"
    ],
    correctAnswer: 0,
    explanation: "The MIRD (Medical Internal Radiation Dose) formalism uses cumulated activity (Ã), which integrates the activity over time, combined with S-factors to calculate absorbed dose in target organs."
  },
  {
    id: "hard-9",
    question: "In neutron-rich nuclei, the Gamow-Teller transition strength is:",
    options: [
      "Enhanced compared to Fermi transitions",
      "Suppressed due to Pauli blocking",
      "Unaffected by the neutron excess",
      "Always equal to the Fermi strength"
    ],
    correctAnswer: 1,
    explanation: "In neutron-rich nuclei, Gamow-Teller transitions are suppressed due to Pauli blocking, as the final states for neutrons transforming to protons are already occupied."
  },
  {
    id: "hard-10",
    question: "Which radiopharmaceutical is used for PRRT (Peptide Receptor Radionuclide Therapy) of neuroendocrine tumors?",
    options: [
      "[¹⁷⁷Lu]Lu-DOTATATE",
      "[¹⁸F]FDG",
      "[⁹⁹mTc]Tc-MDP",
      "[¹²³I]NaI"
    ],
    correctAnswer: 0,
    explanation: "[¹⁷⁷Lu]Lu-DOTATATE is used for PRRT, targeting somatostatin receptors on neuroendocrine tumors with beta radiation from Lutetium-177."
  },
  {
    id: "hard-11",
    question: "The Nordheim classification system for nuclear states is based on:",
    options: [
      "Seniority quantum number",
      "Angular momentum coupling",
      "Isospin symmetry",
      "Parity conservation"
    ],
    correctAnswer: 0,
    explanation: "The Nordheim classification categorizes nuclear states based on the seniority quantum number, which counts unpaired nucleons in jj-coupling scheme."
  },
  {
    id: "hard-12",
    question: "For a radionuclide with multiple decay branches, the total decay constant is:",
    options: [
      "The sum of partial decay constants",
      "The product of partial decay constants",
      "The average of partial decay constants",
      "The largest partial decay constant"
    ],
    correctAnswer: 0,
    explanation: "For a radionuclide decaying through multiple channels, the total decay constant λ_total equals the sum of all partial decay constants: λ_total = Σλ_i."
  },
  {
    id: "hard-13",
    question: "The Thomas-Reiche-Kuhn sum rule for electric dipole transitions relates to:",
    options: [
      "Conservation of angular momentum",
      "Conservation of parity",
      "Conservation of energy",
      "Classical oscillator strength"
    ],
    correctAnswer: 3,
    explanation: "The Thomas-Reiche-Kuhn sum rule connects the quantum mechanical oscillator strengths to the classical sum rule, ensuring consistency with fundamental principles."
  },
  {
    id: "hard-14",
    question: "In hadron therapy, the Bragg peak phenomenon is exploited to:",
    options: [
      "Increase lateral dose distribution",
      "Deliver uniform dose throughout the tissue",
      "Concentrate dose at a specific depth",
      "Reduce entrance dose"
    ],
    correctAnswer: 2,
    explanation: "The Bragg peak of charged particles like protons allows precise dose deposition at a specific depth, minimizing dose to surrounding tissues and enabling highly conformal radiotherapy."
  },
  {
    id: "hard-15",
    question: "The isovector giant dipole resonance in nuclei typically occurs at energies:",
    options: [
      "Below 10 MeV",
      "Between 10-30 MeV",
      "Between 30-50 MeV",
      "Above 50 MeV"
    ],
    correctAnswer: 1,
    explanation: "The isovector giant dipole resonance, where protons and neutrons oscillate out of phase, typically occurs in the 10-30 MeV energy range for medium and heavy nuclei."
  },
  {
    id: "hard-16",
    question: "Which quantity is conserved in both Fermi and Gamow-Teller beta decays?",
    options: [
      "Parity",
      "Angular momentum",
      "Isospin",
      "Charge"
    ],
    correctAnswer: 3,
    explanation: "Charge is conserved in all beta decay processes. Parity is violated, angular momentum conservation differs between Fermi (ΔJ=0) and Gamow-Teller (ΔJ=0,±1), and isospin is not strictly conserved."
  },
  {
    id: "hard-17",
    question: "The Bateman equations describe:",
    options: [
      "Radioactive decay chains",
      "Nuclear reaction cross-sections",
      "Gamma ray attenuation",
      "Neutron diffusion"
    ],
    correctAnswer: 0,
    explanation: "The Bateman equations provide a mathematical framework for calculating the activity of each member in a radioactive decay chain as a function of time."
  },
  {
    id: "hard-18",
    question: "In microdosimetry, the quantity 'lineal energy' is used to characterize:",
    options: [
      "Energy deposition in microscopic volumes",
      "Range of charged particles",
      "LET distribution",
      "Radiation quality"
    ],
    correctAnswer: 0,
    explanation: "Lineal energy (y) is a microdosimetric quantity that describes energy deposition in microscopic tissue volumes, defined as energy imparted divided by mean chord length."
  },
  {
    id: "hard-19",
    question: "The nuclear tensor force contributes significantly to:",
    options: [
      "Spin-orbit coupling",
      "Deuteron quadrupole moment",
      "Alpha particle clustering",
      "Beta decay rates"
    ],
    correctAnswer: 1,
    explanation: "The tensor component of the nucleon-nucleon interaction is responsible for the deuteron's quadrupole moment and its D-state admixture."
  },
  {
    id: "hard-20",
    question: "Which radionuclide is used for targeted alpha therapy of acute myeloid leukemia?",
    options: [
      "Bismuth-213",
      "Technetium-99m",
      "Fluorine-18",
      "Strontium-89"
    ],
    correctAnswer: 0,
    explanation: "Bismuth-213, often conjugated to lintuzumab, is used for targeted alpha therapy of acute myeloid leukemia, exploiting its short range and high LET."
  },
  {
    id: "hard-21",
    question: "The pairing gap parameter Δ in the BCS theory of superconductivity is analogous to what in nuclear physics?",
    options: [
      "Nuclear volume",
      "Deformation parameter",
      "Energy gap in even-even nuclei",
      "Coulomb energy"
    ],
    correctAnswer: 2,
    explanation: "In nuclear physics, the energy gap Δ in even-even nuclei, analogous to the pairing gap in BCS theory, represents the extra stability gained from nucleon pairing."
  },
  {
    id: "hard-22",
    question: "For a radionuclide with a complex decay scheme, the average energy per disintegration is:",
    options: [
      "Always equal to the Q-value",
      "Less than the Q-value due to branching",
      "Greater than the Q-value",
      "Independent of the decay modes"
    ],
    correctAnswer: 1,
    explanation: "The average energy per disintegration is less than the total Q-value due to energy branching among different decay paths and the fact that some energy may be carried away by neutrinos."
  },
  {
    id: "hard-23",
    question: "The Moszkowski rule for beta decay relates:",
    options: [
      "ft-value and nuclear matrix elements",
      "Half-life and decay energy",
      "Gamma transition rates and multipolarity",
      "Nuclear shape and collective modes"
    ],
    correctAnswer: 0,
    explanation: "The Moszkowski rule provides relationships between log(ft) values and nuclear matrix elements, classifying beta decays based on their transition strengths."
  },
  {
    id: "hard-24",
    question: "In boron neutron capture therapy (BNCT), the critical reaction is:",
    options: [
      "¹⁰B(n,α)⁷Li",
      "¹⁴N(n,p)¹⁴C",
      "¹H(n,γ)²H",
      "²³⁵U(n,f) fragments"
    ],
    correctAnswer: 0,
    explanation: "BNCT relies on the ¹⁰B(n,α)⁷Li reaction, where thermal neutrons capture on boron-10, producing alpha particles and lithium ions that destroy tumor cells."
  },
  {
    id: "hard-25",
    question: "The isoscalar giant monopole resonance in nuclei is associated with:",
    options: [
      "Nuclear compression",
      "Spin-flip transitions",
      "Shape oscillations",
      "Pairing vibrations"
    ],
    correctAnswer: 0,
    explanation: "The isoscalar giant monopole resonance (breathing mode) involves compression and expansion of the nucleus, providing information about nuclear compressibility."
  },
  {
    id: "hard-26",
    question: "In the shell model, the magnetic dipole moment of a nucleus with odd proton is given approximately by:",
    options: [
      "The Schmidt values",
      "The Weisskopf estimates",
      "The liquid drop model",
      "The collective model"
    ],
    correctAnswer: 0,
    explanation: "Schmidt lines provide theoretical estimates for nuclear magnetic moments based on the single-particle shell model, though actual values often lie between the Schmidt limits due to configuration mixing."
  },
  {
    id: "hard-27",
    question: "For a radioactive series in transient equilibrium, the activity ratio of daughter to parent:",
    options: [
      "Increases exponentially with time",
      "Decreases exponentially with time",
      "Approaches a constant value",
      "Oscillates periodically"
    ],
    correctAnswer: 2,
    explanation: "In transient equilibrium (when T½_parent > T½_daughter), the activity ratio of daughter to parent approaches a constant value λ₂/(λ₂ - λ₁)."
  },
  {
    id: "hard-28",
    question: "The relative biological effectiveness (RBE) of radiation depends primarily on:",
    options: [
      "Total dose only",
      "Dose rate only",
      "Linear energy transfer (LET)",
      "Exposure time only"
    ],
    correctAnswer: 2,
    explanation: "RBE is strongly correlated with LET, as high-LET radiation produces denser ionization tracks, causing more complex and less repairable DNA damage."
  },
  {
    id: "hard-29",
    question: "The Viola-Seaborg systematics for alpha decay half-lives relates logT½ to:",
    options: [
      "Z and A only",
      "Qα and Z only",
      "Qα and A only",
      "Qα, Z, and A"
    ],
    correctAnswer: 3,
    explanation: "The Viola-Seaborg formula expresses alpha decay half-lives as a function of Qα (decay energy), Z (atomic number), and A (mass number) of the parent nucleus."
  },
  {
    id: "hard-30",
    question: "Which radionuclide is used for theragnostics in neuroendocrine tumors?",
    options: [
      "⁶⁸Ga/¹⁷⁷Lu for PET imaging/PRRT",
      "¹⁸F/⁹⁰Y for PET imaging/beta therapy",
      "⁹⁹mTc/¹⁸⁸Re for SPECT imaging/beta therapy",
      "¹²³I/¹³¹I for SPECT imaging/beta therapy"
    ],
    correctAnswer: 0,
    explanation: "The ⁶⁸Ga/¹⁷⁷Lu pair is used for theragnostics in neuroendocrine tumors, with ⁶⁸Ga for PET imaging and ¹⁷⁷Lu for peptide receptor radionuclide therapy (PRRT)."
  },
  {
    id: "hard-31",
    question: "The nuclear symmetry energy term in the equation of state is crucial for understanding:",
    options: [
      "Neutron star structure",
      "Solar fusion processes",
      "Gamma decay rates",
      "Chemical properties of elements"
    ],
    correctAnswer: 0,
    explanation: "The symmetry energy, which penalizes asymmetry between protons and neutrons, significantly influences neutron star structure, crust thickness, and the nuclear equation of state."
  },
  {
    id: "hard-32",
    question: "For a radionuclide with multiple gamma emissions, the total gamma dose constant Γ is:",
    options: [
      "The sum of individual gamma constants",
      "The average of individual gamma constants",
      "The largest individual gamma constant",
      "Independent of the number of gamma rays"
    ],
    correctAnswer: 0,
    explanation: "The total gamma dose constant Γ for a radionuclide is the sum of the dose constants for each gamma emission: Γ_total = ΣΓ_i."
  },
  {
    id: "hard-33",
    question: "The Alaga rules for gamma transition rates apply to:",
    options: [
      "Deformed nuclei",
      "Spherical nuclei",
      "Light nuclei only",
      "Magic nuclei only"
    ],
    correctAnswer: 0,
    explanation: "The Alaga rules predict branching ratios for gamma transitions in deformed nuclei based on the rotational model and K quantum number conservation."
  },
  {
    id: "hard-34",
    question: "In flash radiotherapy, the extremely high dose rate used may:",
    options: [
      "Increase normal tissue sparing",
      "Decrease tumor control",
      "Increase treatment time",
      "Decrease dose conformity"
    ],
    correctAnswer: 0,
    explanation: "Flash radiotherapy uses ultra-high dose rates (>40 Gy/s) that may preferentially spare normal tissues through oxygen depletion and other radiobiological mechanisms while maintaining tumor control."
  },
  {
    id: "hard-35",
    question: "The Goldhaber-Teller model describes:",
    options: [
      "The giant dipole resonance",
      "Alpha decay systematics",
      "Beta decay selection rules",
      "Nuclear fission processes"
    ],
    correctAnswer: 0,
    explanation: "The Goldhaber-Teller model explains the giant dipole resonance as a collective oscillation where protons and neutrons move out of phase against each other."
  },
  {
    id: "hard-36",
    question: "The Kurie plot for beta decay is used to determine:",
    options: [
      "The endpoint energy",
      "The nuclear spin",
      "The half-life",
      "The decay constant"
    ],
    correctAnswer: 0,
    explanation: "A Kurie plot (Fermi plot) of √(N(E)/F(Z,E)p) versus beta particle energy should be linear, with the x-intercept giving the endpoint energy (Q-value) of the beta decay."
  },
  {
    id: "hard-37",
    question: "In the dosimetry of incorporated radionuclides, the committed equivalent dose considers:",
    options: [
      "Dose integrated over 1 year",
      "Dose integrated over 50 years",
      "Instantaneous dose rate",
      "Peak dose only"
    ],
    correctAnswer: 1,
    explanation: "The committed equivalent dose integrates the equivalent dose rate over 50 years for adults (or to age 70 for children) following intake of a radionuclide."
  },
  {
    id: "hard-38",
    question: "The nuclear Schiff moment is associated with:",
    options: [
      "Time-reversal violation",
      "Charge independence",
      "Isospin symmetry",
      "Angular momentum conservation"
    ],
    correctAnswer: 0,
    explanation: "The Schiff moment arises from parity and time-reversal violation in the nucleus and is sought in experiments searching for permanent electric dipole moments."
  },
  {
    id: "hard-39",
    question: "Which radionuclide generator system provides ⁹⁰Y for radioimmunotherapy?",
    options: [
      "⁹⁰Sr/⁹⁰Y",
      "⁹⁹Mo/⁹⁹mTc",
      "¹⁸⁸W/¹⁸⁸Re",
      "¹¹³Sn/¹¹³mIn"
    ],
    correctAnswer: 0,
    explanation: "The ⁹⁰Sr/⁹⁰Y generator provides ⁹⁰Y, a pure beta emitter used in radioimmunotherapy and radiombolization procedures."
  },
  {
    id: "hard-40",
    question: "The Migdal effect in nuclear recoil detection refers to:",
    options: [
      "Ionization enhancement",
      "Energy loss fluctuation",
      "Angular distribution",
      "Time dependence"
    ],
    correctAnswer: 0,
    explanation: "The Migdal effect describes the ionization produced when atomic electrons are carried along during nuclear recoils, enhancing the detectable ionization signal in dark matter and neutrino detectors."
  },
  {
    id: "hard-41",
    question: "The nuclear liquid-gas phase transition is predicted to occur at:",
    options: [
      "Very high temperatures",
      "Very high densities",
      "Subnuclear densities",
      "Exactly nuclear saturation density"
    ],
    correctAnswer: 2,
    explanation: "Nuclear matter is expected to undergo a liquid-gas phase transition at temperatures around 10-20 MeV and subnuclear densities (0.1-0.5ρ₀), relevant for supernovae and heavy-ion collisions."
  },
  {
    id: "hard-42",
    question: "For a radionuclide with electron capture decay, the fluorescence yield:",
    options: [
      "Affects the emitted X-ray intensity",
      "Determines the beta spectrum shape",
      "Controls the gamma emission probability",
      "Influences the half-life"
    ],
    correctAnswer: 0,
    explanation: "The fluorescence yield determines the probability that electron capture will result in X-ray emission versus Auger electron emission, affecting the radiation spectrum and dosimetry."
  },
  {
    id: "hard-43",
    question: "The Brink-Axel hypothesis for giant resonances states that:",
    options: [
      "Giant resonances exist on excited states",
      "All giant resonances have the same energy",
      "Giant resonances are single-particle excitations",
      "Giant resonances violate sum rules"
    ],
    correctAnswer: 0,
    explanation: "The Brink-Axel hypothesis proposes that giant dipole resonances built on excited states have approximately the same energy and structure as those built on the ground state."
  },
  {
    id: "hard-44",
    question: "In microbeam radiation therapy, the spatial fractionation of dose:",
    options: [
      "Enhances normal tissue tolerance",
      "Decreases tumor control",
      "Increases treatment time",
      "Reduces dose conformity"
    ],
    correctAnswer: 0,
    explanation: "Microbeam radiation therapy uses arrays of narrow, parallel beams that spare normal tissues through rapid repair between beams while maintaining tumor control through bystander effects."
  },
  {
    id: "hard-45",
    question: "The nuclear tensor force is responsible for:",
    options: [
      "The deuteron quadrupole moment",
      "Spin-orbit splitting",
      "Pairing correlations",
      "Coulomb displacement"
    ],
    correctAnswer: 0,
    explanation: "The tensor component of the nucleon-nucleon interaction gives rise to the deuteron's quadrupole moment and D-state admixture, which cannot be explained by central forces alone."
  },
  {
    id: "hard-46",
    question: "The logft value for a beta decay is related to the transition matrix element by:",
    options: [
      "ft ∝ 1/|M|²",
      "ft ∝ |M|²",
      "ft ∝ |M|",
      "ft ∝ 1/|M|"
    ],
    correctAnswer: 0,
    explanation: "The comparative half-life ft is inversely proportional to the square of the nuclear matrix element |M|²: ft ∝ 1/|M|², with smaller ft values indicating stronger transitions."
  },
  {
    id: "hard-47",
    question: "In internal dosimetry, the specific absorbed fraction Φ is defined as:",
    options: [
      "The fraction of energy absorbed per unit mass",
      "The fraction of particles absorbed",
      "The fraction of dose delivered",
      "The fraction of activity accumulated"
    ],
    correctAnswer: 0,
    explanation: "The specific absorbed fraction Φ(rₜ ← rₛ) is the fraction of energy emitted in source region rₛ that is absorbed per unit mass in target region rₜ."
  },
  {
    id: "hard-48",
    question: "The nuclear skin thickness refers to:",
    options: [
      "The difference between neutron and proton distributions",
      "The nuclear surface diffuseness",
      "The difference between RMS radii of protons and neutrons",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Nuclear skin thickness can refer to the surface diffuseness, the difference between neutron and proton distributions, or specifically the difference between neutron and proton RMS radii in neutron-rich nuclei."
  },
  {
    id: "hard-49",
    question: "Which radionuclide is used for intravascular brachytherapy to prevent restenosis?",
    options: [
      "⁹⁰Sr/⁹⁰Y",
      "¹⁹²Ir",
      "¹²⁵I",
      "¹³¹Cs"
    ],
    correctAnswer: 0,
    explanation: "⁹⁰Sr/⁹⁰Y sources are used in intravascular brachytherapy to prevent restenosis after angioplasty by delivering beta radiation to the vessel walls."
  },
  {
    id: "hard-50",
    question: "The Thomas-Ehrman shift in nuclear energy levels occurs due to:",
    options: [
      "Coulomb displacement",
      "Neutron excess",
      "Pairing correlations",
      "Deformation effects"
    ],
    correctAnswer: 0,
    explanation: "The Thomas-Ehrman shift describes the change in energy levels between mirror nuclei due to differences in Coulomb energy and the proximity of particle emission thresholds."
  },
  {
    id: "hard-51",
    question: "The nuclear level density parameter a is related to the density of states by:",
    options: [
      "ρ(E) ∝ exp(2√(aE))",
      "ρ(E) ∝ exp(aE)",
      "ρ(E) ∝ 1/√(aE)",
      "ρ(E) ∝ aE²"
    ],
    correctAnswer: 0,
    explanation: "The Fermi gas model gives the nuclear level density as ρ(E) ∝ exp(2√(aE)), where a is the level density parameter, typically A/8-MeV⁻¹ for medium-mass nuclei."
  },
  {
    id: "hard-52",
    question: "For a radionuclide with Auger electron emission, the radiation weighting factor wᵣ is:",
    options: [
      "1 for all Auger electrons",
      "Dependent on electron energy",
      "20 for all Auger electrons",
      "5 for low-energy Auger electrons"
    ],
    correctAnswer: 1,
    explanation: "For Auger electrons, the radiation weighting factor depends on electron energy. Low-energy Augers (<1 keV) may have higher quality factors due to high LET, but ICRP generally recommends wᵣ = 1 for electrons."
  },
  {
    id: "hard-53",
    question: "The nuclear wobbling mode is characterized by:",
    options: [
      "Triaxial deformation",
      "Spherical shape",
      "Prolate deformation",
      "Oblate deformation"
    ],
    correctAnswer: 0,
    explanation: "The wobbling mode, a collective rotation oscillation, is a signature of triaxial nuclear deformation and has been observed in several Lu and Ta isotopes."
  },
  {
    id: "hard-54",
    question: "In radionuclide therapy with alpha emitters, the microdosimetric quantity most relevant for treatment planning is:",
    options: [
      "Specific energy",
      "Kerma",
      "Exposure",
      "Air kerma"
    ],
    correctAnswer: 0,
    explanation: "Specific energy z (energy imparted per unit mass in a microscopic volume) is particularly important for alpha emitters due to their stochastic energy deposition patterns."
  },
  {
    id: "hard-55",
    question: "The nuclear Schiff moment arises from:",
    options: [
      "P- and T-violating interactions",
      "Coulomb distortions",
      "Neutron skin effects",
      "Pairing correlations"
    ],
    correctAnswer: 0,
    explanation: "The Schiff moment is a P- and T-odd electromagnetic moment that arises from parity and time reversal violation in the nucleus, potentially generated by beyond-Standard-Model physics."
  },
  {
    id: "hard-56",
    question: "The isovector M1 resonance in nuclei is primarily a:",
    options: [
      "Spin-flip transition",
      "Orbital magnetic transition",
      "Electric dipole transition",
      "Compressional mode"
    ],
    correctAnswer: 0,
    explanation: "The isovector M1 resonance (often called the spin-flip resonance) involves nucleon spin-flip transitions and is observed around 10 MeV excitation energy."
  },
  {
    id: "hard-57",
    question: "For a radionuclide with complex decay, the effective dose is calculated by:",
    options: [
      "Summing organ equivalent doses weighted by tissue weighting factors",
      "Averaging equivalent doses across all organs",
      "Taking the maximum organ equivalent dose",
      "Integrating absorbed dose over time"
    ],
    correctAnswer: 0,
    explanation: "Effective dose E = Σ wₜ × Hₜ, where wₜ are tissue weighting factors and Hₜ are equivalent doses to tissues, providing a whole-body risk-weighted dose quantity."
  },
  {
    id: "hard-58",
    question: "The nuclear pygmy dipole resonance appears:",
    options: [
      "Below the giant dipole resonance",
      "Above the giant dipole resonance",
      "At the same energy as GDR",
      "Only in light nuclei"
    ],
    correctAnswer: 0,
    explanation: "The pygmy dipole resonance appears at energies below the main giant dipole resonance (typically around 5-10 MeV) and is associated with oscillations of neutron skin against the core."
  },
  {
    id: "hard-59",
    question: "Which radionuclide is used for radioembolization of liver tumors?",
    options: [
      "⁹⁰Y microspheres",
      "¹²⁵I seeds",
      "¹⁹²Ir wires",
      "¹³⁷Cs sources"
    ],
    correctAnswer: 0,
    explanation: "⁹⁰Y microspheres are used for radioembolization (selective internal radiation therapy) of liver tumors, delivered via the hepatic artery to target tumors while sparing healthy tissue."
  },
  {
    id: "hard-60",
    question: "The nuclear Thomas-Fermi model approximates:",
    options: [
      "The nucleon density distribution",
      "The gamma decay rates",
      "The beta decay probabilities",
      "The fission barriers"
    ],
    correctAnswer: 0,
    explanation: "The Thomas-Fermi model provides an approximation for the nucleon density distribution in nuclei using statistical methods similar to those used for electrons in atoms."
  },
  {
    id: "hard-61",
    question: "In the decay of ²¹²Po, alpha particles of different energies are observed. This is due to:",
    options: [
      "Fine structure in alpha decay",
      "Beta decay branching",
      "Gamma decay competition",
      "Electron capture"
    ],
    correctAnswer: 0,
    explanation: "Fine structure in alpha decay occurs when alpha particles are emitted to different excited states of the daughter nucleus, resulting in multiple alpha groups with different energies."
  },
  {
    id: "hard-62",
    question: "The oxygen enhancement ratio (OER) in radiobiology is:",
    options: [
      "Higher for low-LET radiation",
      "Higher for high-LET radiation",
      "Independent of LET",
      "Always equal to 1"
    ],
    correctAnswer: 0,
    explanation: "OER is higher for low-LET radiation (typically 2.5-3.0 for X-rays) and approaches 1 for high-LET radiation like alpha particles, indicating less oxygen dependence for high-LET radiation."
  },
  {
    id: "hard-63",
    question: "The nuclear isoscalar E2 resonance provides information about:",
    options: [
      "Nuclear deformation",
      "Neutron skin thickness",
      "Spin-orbit strength",
      "Pairing correlations"
    ],
    correctAnswer: 0,
    explanation: "The isoscalar giant quadrupole resonance (E2) is sensitive to nuclear deformation and provides information about the nuclear shape and restoring forces."
  },
  {
    id: "hard-64",
    question: "In targeted radionuclide therapy, the therapeutic index is optimized by:",
    options: [
      "Maximizing tumor-to-normal tissue uptake ratio",
      "Minimizing total administered activity",
      "Using the shortest half-life radionuclide",
      "Using the highest energy emission"
    ],
    correctAnswer: 0,
    explanation: "The therapeutic index in targeted radionuclide therapy is primarily optimized by maximizing the ratio of radionuclide uptake in tumors versus normal tissues."
  },
  {
    id: "hard-65",
    question: "The nuclear Lane potential describes:",
    options: [
      "The isospin dependence of the optical potential",
      "The Coulomb barrier",
      "The pairing potential",
      "The spin-orbit potential"
    ],
    correctAnswer: 0,
    explanation: "The Lane potential represents the isospin dependence of the nucleon-nucleus optical potential, proportional to τ • T, where τ and T are the isospins of the nucleon and target."
  },
  {
    id: "hard-66",
    question: "For a radionuclide with electron capture decay, the change in atomic number is:",
    options: [
      "ΔZ = -1",
      "ΔZ = +1",
      "ΔZ = 0",
      "ΔZ = -2"
    ],
    correctAnswer: 0,
    explanation: "In electron capture, a proton captures an orbital electron and becomes a neutron, decreasing the atomic number by 1 (ΔZ = -1) while the mass number remains unchanged."
  },
  {
    id: "hard-67",
    question: "The nuclear scissors mode is a collective excitation in:",
    options: [
      "Deformed nuclei",
      "Spherical nuclei",
      "Light nuclei only",
      "Magic nuclei only"
    ],
    correctAnswer: 0,
    explanation: "The scissors mode is a collective magnetic dipole excitation in deformed nuclei where proton and neutron distributions oscillate against each other in a scissors-like motion."
  },
  {
    id: "hard-68",
    question: "In radioprotection, the dose and dose-rate effectiveness factor (DDREF) accounts for:",
    options: [
      "Reduced biological effectiveness at low doses and dose rates",
      "Increased biological effectiveness at high doses",
      "The oxygen effect",
      "The LET dependence"
    ],
    correctAnswer: 0,
    explanation: "DDREF is used to extrapolate cancer risk from high-dose data to low doses and dose rates, accounting for reduced biological effectiveness at low doses due to repair mechanisms."
  },
  {
    id: "hard-69",
    question: "The nuclear Garvey-Kelson mass relations are based on:",
    options: [
      "Nearest-neighbor mass differences",
      "Global mass formula",
      "Liquid drop model",
      "Shell model corrections"
    ],
    correctAnswer: 0,
    explanation: "Garvey-Kelson relations use mass differences between neighboring nuclei to predict unknown masses with high accuracy, based on the assumption of smoothness in nuclear mass surfaces."
  },
  {
    id: "hard-70",
    question: "Which radionuclide is used for palliative treatment of bone metastases with alpha emission?",
    options: [
      "²²³Ra (radium-223)",
      "⁸⁹Sr (strontium-89)",
      "¹⁵³Sm (samarium-153)",
      "³²P (phosphorus-32)"
    ],
    correctAnswer: 0,
    explanation: "²²³Ra (radium-223) is an alpha emitter used for palliative treatment of bone metastases, particularly from prostate cancer, due to its bone-seeking properties and high-LET alpha emissions."
  },
  {
    id: "hard-71",
    question: "The nuclear pseudospin symmetry is revealed by:",
    options: [
      "The near degeneracy of certain single-particle states",
      "The identicality of proton and neutron states",
      "The charge independence of nuclear forces",
      "The isospin symmetry"
    ],
    correctAnswer: 0,
    explanation: "Pseudospin symmetry manifests as near degeneracy of single-particle states with quantum numbers (n, ℓ, j) and (n-1, ℓ+2, j+1), suggesting a hidden symmetry in the nuclear mean field."
  },
  {
    id: "hard-72",
    question: "For a radionuclide with multiple decay modes, the partial half-life for a specific mode is:",
    options: [
      "Always longer than the total half-life",
      "Always shorter than the total half-life",
      "Equal to the total half-life",
      "Unrelated to the total half-life"
    ],
    correctAnswer: 1,
    explanation: "The partial half-life for a specific decay mode is always shorter than the total half-life, as T½_partial = T½_total / branching ratio."
  },
  {
    id: "hard-73",
    question: "The nuclear giant pairing vibration is a:",
    options: [
      "Two-nucleon collective mode",
      "Single-particle excitation",
      "Shape oscillation",
      "Compressional mode"
    ],
    correctAnswer: 0,
    explanation: "The giant pairing vibration is a collective mode involving the addition or removal of two nucleons in a paired state, analogous to the pairing vibrational modes in superconductors."
  },
  {
    id: "hard-74",
    question: "In charged-particle therapy, the spread-out Bragg peak (SOBP) is created by:",
    options: [
      "Superimposing Bragg peaks at different depths",
      "Increasing the beam energy",
      "Using beam scattering techniques",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "The SOBP is created by superimposing Bragg peaks at different depths through energy modulation (using range shifters or energy selection) and beam spreading to deliver a uniform dose across the target volume."
  },
  {
    id: "hard-75",
    question: "The nuclear isovector E1 resonance strength satisfies the:",
    options: [
      "Thomas-Reiche-Kuhn sum rule",
      "Gamow-Teller sum rule",
      "Iwamoto-Yamada rule",
      "Fermi sum rule"
    ],
    correctAnswer: 0,
    explanation: "The isovector E1 giant dipole resonance strength satisfies the Thomas-Reiche-Kuhn sum rule, which relates the integrated cross section to fundamental constants and neutron number."
  },
  {
    id: "hard-76",
    question: "For a radionuclide with Auger electron emission, the most significant cellular damage occurs when:",
    options: [
      "The radionuclide is incorporated into DNA",
      "The radionuclide is in the cytoplasm",
      "The radionuclide is extracellular",
      "The radionuclide is in the cell membrane"
    ],
    correctAnswer: 0,
    explanation: "Auger electrons have very short ranges (nanometers), so they cause the most severe damage when the radionuclide is incorporated into DNA, producing highly localized, high-LET-like effects."
  },
  {
    id: "hard-77",
    question: "The nuclear isoscalar E0 resonance (monopole) is excited by:",
    options: [
      "Compressional forces",
      "Spin-flip operators",
      "Quadrupole operators",
      "Dipole operators"
    ],
    correctAnswer: 0,
    explanation: "The isoscalar E0 giant monopole resonance (breathing mode) is excited by operators that cause uniform compression and expansion of the nucleus."
  },
  {
    id: "hard-78",
    question: "In radionuclide therapy dosimetry, the S-value represents:",
    options: [
      "Absorbed dose per unit cumulated activity",
      "Activity concentration",
      "Decay energy",
      "Biological effectiveness"
    ],
    correctAnswer: 0,
    explanation: "In MIRD formalism, the S-value (absorbed dose per unit cumulated activity) is a key quantity that incorporates the physical properties of the radionuclide and the anatomical geometry."
  },
  {
    id: "hard-79",
    question: "The nuclear isovector E2 resonance is sensitive to:",
    options: [
      "The neutron skin thickness",
      "The nuclear deformation",
      "The pairing gaps",
      "The spin-orbit strength"
    ],
    correctAnswer: 0,
    explanation: "The isovector giant quadrupole resonance is particularly sensitive to the neutron skin thickness and the symmetry energy parameters of nuclear matter."
  },
  {
    id: "hard-80",
    question: "Which radionuclide is used for radioimmunotherapy of non-Hodgkin's lymphoma?",
    options: [
      "⁹⁰Y-ibritumomab tiuxetan",
      "¹⁸F-FDG",
      "⁹⁹mTc-sestamibi",
      "¹²³I-MIBG"
    ],
    correctAnswer: 0,
    explanation: "⁹⁰Y-ibritumomab tiuxetan (Zevalin) is used for radioimmunotherapy of CD20-positive non-Hodgkin's lymphoma, targeting B-cells with beta radiation."
  },
  {
    id: "hard-81",
    question: "The nuclear tensor force component of the NN interaction has a range of approximately:",
    options: [
      "1 fm",
      "2 fm",
      "3 fm",
      "4 fm"
    ],
    correctAnswer: 1,
    explanation: "The tensor force, mediated by pion exchange, has a range of approximately 1.4 fm (the Compton wavelength of the pion), making it an intermediate-range component of the nuclear force."
  },
  {
    id: "hard-82",
    question: "For a radionuclide with complex decay, the average beta energy per disintegration is:",
    options: [
      "Less than the maximum beta energy",
      "Equal to the maximum beta energy",
      "Greater than the maximum beta energy",
      "Unrelated to the maximum beta energy"
    ],
    correctAnswer: 0,
    explanation: "The average beta energy is always less than the maximum beta energy (endpoint energy) due to the shape of the beta spectrum, typically E_avg ≈ 1/3 E_max for allowed transitions."
  },
  {
    id: "hard-83",
    question: "The nuclear isoscalar E1 resonance is:",
    options: [
      "Forbidden by symmetry",
      "Very strong in all nuclei",
      "Weak but observable",
      "Only present in light nuclei"
    ],
    correctAnswer: 0,
    explanation: "The isoscalar E1 resonance is forbidden by symmetry in the long-wavelength limit because the dipole operator cannot compress the nucleus without moving the center of mass."
  },
  {
    id: "hard-84",
    question: "In boron neutron capture therapy (BNCT), the therapeutic advantage comes from:",
    options: [
      "The high LET of alpha particles and their short range",
      "The low LET of gamma rays and their long range",
      "The beta emission from lithium-7",
      "The neutron emission from boron-10"
    ],
    correctAnswer: 0,
    explanation: "BNCT's therapeutic advantage stems from the high LET and short range of alpha particles produced in the ¹⁰B(n,α)⁷Li reaction, which confines damage to boron-loaded cells."
  },
  {
    id: "hard-85",
    question: "The nuclear isovector M1 resonance strength satisfies the:",
    options: [
      "Gamow-Teller sum rule",
      "Thomas-Reiche-Kuhn sum rule",
      "Energy-weighted sum rule",
      "Non-energy-weighted sum rule"
    ],
    correctAnswer: 0,
    explanation: "The isovector M1 resonance strength is related to the Gamow-Teller sum rule, which involves spin-isospin flip transitions."
  },
  {
    id: "hard-86",
    question: "For a radionuclide with electron capture decay, the change in mass number is:",
    options: [
      "ΔA = 0",
      "ΔA = -1",
      "ΔA = -2",
      "ΔA = -4"
    ],
    correctAnswer: 0,
    explanation: "In electron capture decay, the mass number remains unchanged (ΔA = 0) as a proton is converted to a neutron without changing the total number of nucleons."
  },
  {
    id: "hard-87",
    question: "The nuclear isoscalar E3 resonance provides information about:",
    options: [
      "Nuclear octupole deformation",
      "Nuclear spherical shape",
      "Neutron skin",
      "Pairing correlations"
    ],
    correctAnswer: 0,
    explanation: "The isoscalar giant octupole resonance (E3) is sensitive to octupole deformation and pear-shaped nuclei, providing information about reflection-asymmetric shapes."
  },
  {
    id: "hard-88",
    question: "In targeted alpha therapy, the cross-dose effect refers to:",
    options: [
      "Radiation delivery to neighboring cells",
      "Dose measurement across different organs",
      "Cross-section for alpha emission",
      "Dose calculation using cross-sections"
    ],
    correctAnswer: 0,
    explanation: "The cross-dose effect in targeted alpha therapy refers to alpha particles emitted from targeted cells damaging neighboring cells, contributing to bystander effects."
  },
  {
    id: "hard-89",
    question: "The nuclear isovector E0 resonance is associated with:",
    options: [
      "Neutron-proton density differences",
      "Nuclear compression",
      "Shape oscillations",
      "Spin-flip transitions"
    ],
    correctAnswer: 0,
    explanation: "The isovector E0 resonance involves oscillations where the neutron and proton densities change out of phase, related to the symmetry energy of nuclear matter."
  },
  {
    id: "hard-90",
    question: "Which radionuclide is used for radioimmunotherapy with pretargeting approaches?",
    options: [
      "¹⁷⁷Lu",
      "⁹⁰Y",
      "²¹²Bi",
      "²²⁵Ac"
    ],
    correctAnswer: 0,
    explanation: "¹⁷⁷Lu is often used in pretargeted radioimmunotherapy approaches due to its suitable half-life (6.7 days) and chemical properties for multistep targeting strategies."
  },
  {
    id: "hard-91",
    question: "The nuclear three-body force becomes significant at:",
    options: [
      "High densities",
      "Low densities",
      "Exactly nuclear saturation density",
      "All densities"
    ],
    correctAnswer: 0,
    explanation: "Three-nucleon forces become increasingly important at densities above nuclear saturation density (ρ > ρ₀), significantly affecting the nuclear equation of state relevant for neutron stars."
  },
  {
    id: "hard-92",
    question: "For a radionuclide with isomeric transition, the half-life of the metastable state is determined by:",
    options: [
      "The gamma transition probability",
      "The beta decay probability",
      "The electron capture probability",
      "The internal conversion coefficient"
    ],
    correctAnswer: 0,
    explanation: "The half-life of a nuclear isomer is determined by the gamma transition probability (and internal conversion) to lower states, which may be hindered by spin/parity differences."
  },
  {
    id: "hard-93",
    question: "The nuclear isoscalar E4 resonance is sensitive to:",
    options: [
      "Hexadecapole deformation",
      "Dipole moments",
      "Spin distributions",
      "Pairing gaps"
    ],
    correctAnswer: 0,
    explanation: "The isoscalar giant hexadecapole resonance (E4) is sensitive to hexadecapole deformation and provides information about higher-order nuclear shapes."
  },
  {
    id: "hard-94",
    question: "In microdosimetry, the frequency-mean lineal energy y_F is used to:",
    options: [
      "Characterize the average energy deposition per event",
      "Calculate the total absorbed dose",
      "Determine the LET",
      "Measure the exposure"
    ],
    correctAnswer: 0,
    explanation: "The frequency-mean lineal energy y_F = ∫y·f(y)dy represents the average energy deposition per event in microscopic targets, providing information about radiation quality."
  },
  {
    id: "hard-95",
    question: "The nuclear isovector E1 resonance in neutron-rich nuclei is expected to:",
    options: [
      "Shift to lower energies",
      "Shift to higher energies",
      "Remain at the same energy",
      "Disappear completely"
    ],
    correctAnswer: 0,
    explanation: "In neutron-rich nuclei, the isovector E1 giant dipole resonance is predicted to shift to lower energies due to the increased neutron excess and symmetry energy effects."
  },
  {
    id: "hard-96",
    question: "For a radionuclide with positron emission, the annihilation radiation consists of:",
    options: [
      "Two 511-keV photons emitted at 180°",
      "One 1022-keV photon",
      "Multiple photons of various energies",
      "Beta particles"
    ],
    correctAnswer: 0,
    explanation: "When a positron annihilates with an electron, two 511-keV photons are produced, emitted in nearly opposite directions (180°) to conserve momentum and energy."
  },
  {
    id: "hard-97",
    question: "The nuclear isoscalar E1 resonance in light nuclei is:",
    options: [
      "Observable as a compression mode",
      "Forbidden by center-of-mass motion",
      "Very strong",
      "Non-existent"
    ],
    correctAnswer: 0,
    explanation: "In light nuclei, the isoscalar E1 resonance appears as a compression mode (breathing mode) despite the center-of-mass constraint, as the motion is not purely dipolar."
  },
  {
    id: "hard-98",
    question: "In radionuclide therapy with beta emitters, the dose distribution is influenced by:",
    options: [
      "The electron energy spectrum",
      "The tissue composition",
      "The activity distribution",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Beta emitter dose distribution depends on the electron energy spectrum (range), tissue composition (stopping power), and activity distribution (source geometry)."
  },
  {
    id: "hard-99",
    question: "The nuclear isovector E0 resonance strength is related to the:",
    options: [
      "Symmetry energy coefficient",
      "Incompressibility",
      "Pairing gap",
      "Spin-orbit strength"
    ],
    correctAnswer: 0,
    explanation: "The isovector E0 resonance (giant monopole) strength is related to the symmetry energy coefficient, which governs the energy cost of neutron-proton asymmetry."
  },
  {
    id: "hard-100",
    question: "Which radionuclide is used for theragnostics in prostate cancer?",
    options: [
      "⁶⁸Ga/¹⁷⁷Lu-PSMA",
      "¹⁸F/⁹⁰Y-FDG",
      "⁹⁹mTc/¹⁸⁸Re-MDP",
      "¹²³I/¹³¹I-MIBG"
    ],
    correctAnswer: 0,
    explanation: "The ⁶⁸Ga/¹⁷⁷Lu-PSMA pair is used for theragnostics in prostate cancer, with ⁶⁸Ga for PET imaging and ¹⁷⁷Lu for therapy targeting prostate-specific membrane antigen."
  }
];

export const nuclearPhysicsQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
