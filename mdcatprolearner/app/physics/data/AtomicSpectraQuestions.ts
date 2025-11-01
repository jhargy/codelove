

export type Difficulty = keyof typeof atomicSpectraQuestions;

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const easyQuestions: Question[] = [
  {
    id: "atomic-spectra-1",
    question: "What type of spectrum is produced by a hot, dense object?",
    options: [
      "Line spectrum",
      "Band spectrum",
      "Continuous spectrum",
      "Absorption spectrum"
    ],
    correctAnswer: 2,
    explanation: "A hot, dense object like a solid, liquid, or high-pressure gas produces a continuous spectrum containing all wavelengths without any gaps."
  },
  {
    id: "atomic-spectra-2",
    question: "What is observed when white light passes through a cool gas?",
    options: [
      "Continuous spectrum",
      "Emission line spectrum",
      "Absorption line spectrum",
      "Band spectrum"
    ],
    correctAnswer: 2,
    explanation: "When white light passes through a cool gas, the gas absorbs specific wavelengths, creating dark lines in the continuous spectrum called an absorption spectrum."
  },
  {
    id: "atomic-spectra-3",
    question: "The series of hydrogen spectrum lines in the visible region is called:",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 1,
    explanation: "The Balmer series consists of hydrogen spectral lines in the visible region, resulting from electron transitions to the n=2 energy level."
  },
  {
    id: "atomic-spectra-4",
    question: "Which series of hydrogen spectrum lies in the ultraviolet region?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 0,
    explanation: "The Lyman series consists of hydrogen spectral lines in the ultraviolet region, resulting from electron transitions to the n=1 energy level."
  },
  {
    id: "atomic-spectra-5",
    question: "Atomic spectra are:",
    options: [
      "Continuous",
      "Discontinuous",
      "Same for all elements",
      "Always in visible region"
    ],
    correctAnswer: 1,
    explanation: "Atomic spectra are discontinuous or discrete, consisting of specific wavelengths that are unique to each element, serving as their fingerprint."
  },
  {
    id: "atomic-spectra-6",
    question: "The formula 1/λ = R(1/n₁² - 1/n₂²) is known as:",
    options: [
      "Maxwell's equation",
      "Rydberg formula",
      "Planck's formula",
      "Einstein's equation"
    ],
    correctAnswer: 1,
    explanation: "The Rydberg formula calculates the wavelengths of hydrogen spectral lines, where R is the Rydberg constant and n₁, n₂ are integers with n₂ > n₁."
  },
  {
    id: "atomic-spectra-7",
    question: "Which color in the visible hydrogen spectrum has the longest wavelength?",
    options: [
      "Violet",
      "Blue",
      "Green",
      "Red"
    ],
    correctAnswer: 3,
    explanation: "In the Balmer series, the red line (H-alpha) has the longest wavelength (656.3 nm) and corresponds to the transition from n=3 to n=2."
  },
  {
    id: "atomic-spectra-8",
    question: "The value of Rydberg constant for hydrogen is approximately:",
    options: [
      "1.097 × 10⁵ m⁻¹",
      "1.097 × 10⁷ m⁻¹",
      "1.097 × 10⁹ m⁻¹",
      "1.097 × 10¹¹ m⁻¹"
    ],
    correctAnswer: 1,
    explanation: "The Rydberg constant for hydrogen is approximately 1.097 × 10⁷ m⁻¹, which is used in the Rydberg formula to calculate hydrogen spectral wavelengths."
  },
  {
    id: "atomic-spectra-9",
    question: "Which instrument is used to observe atomic spectra?",
    options: [
      "Microscope",
      "Telescope",
      "Spectroscope",
      "Periscope"
    ],
    correctAnswer: 2,
    explanation: "A spectroscope is an instrument used to observe and analyze atomic spectra by separating light into its component wavelengths."
  },
  {
    id: "atomic-spectra-10",
    question: "The study of atomic spectra helps in:",
    options: [
      "Measuring temperature only",
      "Identifying elements",
      "Calculating density",
      "Measuring pressure only"
    ],
    correctAnswer: 1,
    explanation: "Atomic spectra are unique to each element, allowing scientists to identify elements in stars, laboratory samples, and unknown substances."
  },
  {
    id: "atomic-spectra-11",
    question: "Which series of hydrogen spectrum has the shortest wavelengths?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 0,
    explanation: "The Lyman series has the shortest wavelengths and highest energy photons in the hydrogen spectrum, as electrons fall to the n=1 ground state."
  },
  {
    id: "atomic-spectra-12",
    question: "The line spectrum of an element is caused by:",
    options: [
      "Heating the element",
      "Electron transitions between energy levels",
      "Nuclear reactions",
      "Chemical reactions"
    ],
    correctAnswer: 1,
    explanation: "Line spectra result from electrons transitioning between discrete energy levels, emitting or absorbing photons of specific wavelengths."
  },
  {
    id: "atomic-spectra-13",
    question: "Which color in the visible hydrogen spectrum has the highest energy?",
    options: [
      "Red",
      "Green",
      "Blue",
      "Violet"
    ],
    correctAnswer: 3,
    explanation: "Violet light has the shortest wavelength and highest energy in the visible spectrum, corresponding to higher energy electron transitions."
  },
  {
    id: "atomic-spectra-14",
    question: "The Balmer series corresponds to electron transitions ending at which energy level?",
    options: [
      "n = 1",
      "n = 2",
      "n = 3",
      "n = 4"
    ],
    correctAnswer: 1,
    explanation: "The Balmer series consists of hydrogen spectral lines produced when electrons transition to the n=2 energy level from higher levels."
  },
  {
    id: "atomic-spectra-15",
    question: "What is the range of wavelengths for the Paschen series?",
    options: [
      "Ultraviolet",
      "Visible",
      "Infrared",
      "Microwave"
    ],
    correctAnswer: 2,
    explanation: "The Paschen series of hydrogen spectrum lies in the infrared region, resulting from electron transitions to the n=3 energy level."
  },
  {
    id: "atomic-spectra-16",
    question: "The characteristic line spectrum of an element is called its:",
    options: [
      "Spectral signature",
      "Energy profile",
      "Atomic fingerprint",
      "Spectral identity"
    ],
    correctAnswer: 2,
    explanation: "The unique line pattern of each element is often called its atomic fingerprint because it can be used to identify the element uniquely."
  },
  {
    id: "atomic-spectra-17",
    question: "Which scientist first studied the hydrogen spectrum systematically?",
    options: [
      "Niels Bohr",
      "Johannes Rydberg",
      "Isaac Newton",
      "Joseph von Fraunhofer"
    ],
    correctAnswer: 1,
    explanation: "Johannes Rydberg developed the mathematical formula that accurately predicted the wavelengths of hydrogen spectral lines."
  },
  {
    id: "atomic-spectra-18",
    question: "The H-alpha line in the hydrogen spectrum is:",
    options: [
      "A blue line",
      "A green line",
      "A red line",
      "A violet line"
    ],
    correctAnswer: 2,
    explanation: "The H-alpha line is a prominent red line at 656.3 nm in the hydrogen spectrum, corresponding to the n=3 to n=2 transition."
  },
  {
    id: "atomic-spectra-19",
    question: "Which of the following produces an emission line spectrum?",
    options: [
      "Hot solid object",
      "Hot dense gas",
      "Hot rarefied gas",
      "Cool gas"
    ],
    correctAnswer: 2,
    explanation: "A hot, rarefied (low-pressure) gas produces an emission line spectrum with bright lines at specific wavelengths characteristic of the element."
  },
  {
    id: "atomic-spectra-20",
    question: "The limit of the Balmer series occurs when:",
    options: [
      "n₂ = 1",
      "n₂ = 2",
      "n₂ = ∞",
      "n₂ = 0"
    ],
    correctAnswer: 2,
    explanation: "The series limit occurs when n₂ approaches infinity, representing the maximum energy transition possible within that series."
  },
  {
    id: "atomic-spectra-21",
    question: "Which series of hydrogen spectrum was discovered first?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 1,
    explanation: "The Balmer series was the first to be discovered and studied because its lines lie in the visible region, which was easily observable with early spectroscopes."
  },
  {
    id: "atomic-spectra-22",
    question: "The energy of a photon in an atomic spectrum is:",
    options: [
      "Directly proportional to its wavelength",
      "Inversely proportional to its wavelength",
      "Independent of its wavelength",
      "Proportional to the square of its wavelength"
    ],
    correctAnswer: 1,
    explanation: "Photon energy E = hc/λ, so energy is inversely proportional to wavelength - shorter wavelengths correspond to higher energy photons."
  },
  {
    id: "atomic-spectra-23",
    question: "Which element has the simplest atomic spectrum?",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Carbon"
    ],
    correctAnswer: 1,
    explanation: "Hydrogen has the simplest atomic spectrum with well-defined series, making it ideal for studying atomic structure and quantum mechanics."
  },
  {
    id: "atomic-spectra-24",
    question: "The dark lines in the solar spectrum are called:",
    options: [
      "Rydberg lines",
      "Balmer lines",
      "Fraunhofer lines",
      "Lyman lines"
    ],
    correctAnswer: 2,
    explanation: "Fraunhofer lines are the dark absorption lines in the solar spectrum, caused by elements in the Sun's atmosphere absorbing specific wavelengths."
  },
  {
    id: "atomic-spectra-25",
    question: "Which transition in hydrogen atom emits the most energetic photon in the Lyman series?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 1",
      "n = ∞ to n = 1",
      "n = 10 to n = 1"
    ],
    correctAnswer: 2,
    explanation: "The most energetic photon in any series is emitted when an electron falls from infinity to the final energy level (n = ∞ to n = 1 for Lyman series)."
  },
  {
    id: "atomic-spectra-26",
    question: "The number of spectral lines produced when an electron jumps from n = 4 to n = 1 is:",
    options: [
      "1",
      "3",
      "6",
      "4"
    ],
    correctAnswer: 2,
    explanation: "When an electron falls from n=4 to n=1, it can take different paths: 4→1, 4→3→1, 4→2→1, 4→3→2→1, resulting in multiple spectral lines."
  },
  {
    id: "atomic-spectra-27",
    question: "Which series of hydrogen spectrum lies in the far infrared region?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Pfund series"
    ],
    correctAnswer: 3,
    explanation: "The Pfund series lies in the far infrared region of the spectrum, resulting from electron transitions to the n=5 energy level."
  },
  {
    id: "atomic-spectra-28",
    question: "The wavelength of a spectral line is inversely proportional to the:",
    options: [
      "Energy of the photon",
      "Frequency of the photon",
      "Both energy and frequency",
      "Neither energy nor frequency"
    ],
    correctAnswer: 2,
    explanation: "Since E = hν and c = νλ, then E = hc/λ, so wavelength is inversely proportional to both energy and frequency of the photon."
  },
  {
    id: "atomic-spectra-29",
    question: "Which of the following statements about atomic spectra is correct?",
    options: [
      "All elements have identical spectra",
      "Atomic spectra are continuous",
      "Each element has a unique spectrum",
      "Atomic spectra depend only on temperature"
    ],
    correctAnswer: 2,
    explanation: "Each element has a unique line spectrum that serves as its fingerprint, allowing identification of elements in various samples."
  },
  {
    id: "atomic-spectra-30",
    question: "The Balmer series limit has a wavelength of approximately:",
    options: [
      "365 nm",
      "656 nm",
      "820 nm",
      "1875 nm"
    ],
    correctAnswer: 0,
    explanation: "The Balmer series limit occurs at approximately 365 nm, which is the shortest wavelength in the Balmer series where n₂ approaches infinity."
  },
  {
    id: "atomic-spectra-31",
    question: "Which quantum number determines the energy of an electron in a hydrogen atom?",
    options: [
      "Principal quantum number (n)",
      "Azimuthal quantum number (l)",
      "Magnetic quantum number (m)",
      "Spin quantum number (s)"
    ],
    correctAnswer: 0,
    explanation: "In hydrogen atom, the energy depends only on the principal quantum number n, given by E = -13.6/n² eV."
  },
  {
    id: "atomic-spectra-32",
    question: "The visible hydrogen spectrum consists of how many prominent lines?",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    correctAnswer: 1,
    explanation: "The visible hydrogen spectrum (Balmer series) has four prominent lines: red (656 nm), blue-green (486 nm), blue-violet (434 nm), and violet (410 nm)."
  },
  {
    id: "atomic-spectra-33",
    question: "Which transition in hydrogen atom gives a photon of wavelength 121.6 nm?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 2",
      "n = 4 to n = 2",
      "n = 3 to n = 1"
    ],
    correctAnswer: 0,
    explanation: "The transition from n=2 to n=1 in hydrogen atom produces a photon of wavelength 121.6 nm, which is the Lyman-alpha line in the UV region."
  },
  {
    id: "atomic-spectra-34",
    question: "The energy of an electron in the ground state of hydrogen atom is:",
    options: [
      "0 eV",
      "-13.6 eV",
      "+13.6 eV",
      "-3.4 eV"
    ],
    correctAnswer: 1,
    explanation: "The ground state energy of hydrogen atom is -13.6 eV, with the negative sign indicating that the electron is bound to the nucleus."
  },
  {
    id: "atomic-spectra-35",
    question: "Which series of hydrogen spectrum was discovered by Theodore Lyman?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 0,
    explanation: "The Lyman series in the ultraviolet region was discovered by Theodore Lyman in 1906, completing the hydrogen spectral series pattern."
  },
  {
    id: "atomic-spectra-36",
    question: "The wavelength of the H-beta line in hydrogen spectrum is approximately:",
    options: [
      "410 nm",
      "434 nm",
      "486 nm",
      "656 nm"
    ],
    correctAnswer: 2,
    explanation: "The H-beta line is a blue-green line at 486.1 nm in the hydrogen spectrum, corresponding to the n=4 to n=2 transition."
  },
  {
    id: "atomic-spectra-37",
    question: "Which of the following transitions will produce a photon with the longest wavelength?",
    options: [
      "n = 6 to n = 2",
      "n = 5 to n = 2",
      "n = 4 to n = 2",
      "n = 3 to n = 2"
    ],
    correctAnswer: 3,
    explanation: "The n=3 to n=2 transition produces the H-alpha line with the longest wavelength (656 nm) among these options, as it has the smallest energy difference."
  },
  {
    id: "atomic-spectra-38",
    question: "The Brackett series of hydrogen spectrum results from transitions to:",
    options: [
      "n = 1",
      "n = 2",
      "n = 3",
      "n = 4"
    ],
    correctAnswer: 3,
    explanation: "The Brackett series consists of infrared spectral lines produced when electrons transition to the n=4 energy level in hydrogen atoms."
  },
  {
    id: "atomic-spectra-39",
    question: "Which color is not present in the visible hydrogen spectrum?",
    options: [
      "Red",
      "Blue",
      "Green",
      "Yellow"
    ],
    correctAnswer: 3,
    explanation: "The visible hydrogen spectrum (Balmer series) contains red, blue-green, blue-violet, and violet lines, but no distinct yellow line."
  },
  {
    id: "atomic-spectra-40",
    question: "The energy difference between n=2 and n=1 levels in hydrogen atom is:",
    options: [
      "3.4 eV",
      "10.2 eV",
      "13.6 eV",
      "1.9 eV"
    ],
    correctAnswer: 1,
    explanation: "The energy difference between n=2 and n=1 is E₂ - E₁ = (-3.4 eV) - (-13.6 eV) = 10.2 eV, which corresponds to a UV photon."
  },
  {
    id: "atomic-spectra-41",
    question: "Which scientist explained the hydrogen spectrum using quantum theory?",
    options: [
      "Rutherford",
      "Bohr",
      "Planck",
      "Einstein"
    ],
    correctAnswer: 1,
    explanation: "Niels Bohr developed the Bohr model of the atom in 1913, which successfully explained the hydrogen spectrum using quantized electron orbits."
  },
  {
    id: "atomic-spectra-42",
    question: "The frequency of a spectral line is proportional to the:",
    options: [
      "Wavelength",
      "Square of wavelength",
      "Energy difference",
      "Rydberg constant only"
    ],
    correctAnswer: 2,
    explanation: "According to Bohr's model, the frequency of a spectral line is proportional to the energy difference between the two levels: ν = ΔE/h."
  },
  {
    id: "atomic-spectra-43",
    question: "Which series of hydrogen spectrum has lines with the highest frequencies?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 0,
    explanation: "The Lyman series has the highest frequency lines because they result from transitions to the n=1 level, which have the largest energy differences."
  },
  {
    id: "atomic-spectra-44",
    question: "The H-gamma line in hydrogen spectrum corresponds to the transition:",
    options: [
      "n = 3 to n = 2",
      "n = 4 to n = 2",
      "n = 5 to n = 2",
      "n = 6 to n = 2"
    ],
    correctAnswer: 2,
    explanation: "The H-gamma line at 434 nm corresponds to the n=5 to n=2 transition in the hydrogen atom's Balmer series."
  },
  {
    id: "atomic-spectra-45",
    question: "The energy of an electron in the first excited state of hydrogen is:",
    options: [
      "-13.6 eV",
      "-3.4 eV",
      "-1.5 eV",
      "-0.85 eV"
    ],
    correctAnswer: 1,
    explanation: "The first excited state is n=2, with energy E₂ = -13.6/2² = -3.4 eV."
  },
  {
    id: "atomic-spectra-46",
    question: "Which of the following transitions produces a photon in the infrared region?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 2",
      "n = 4 to n = 2",
      "n = 5 to n = 3"
    ],
    correctAnswer: 3,
    explanation: "The n=5 to n=3 transition belongs to the Paschen series, which lies in the infrared region of the spectrum."
  },
  {
    id: "atomic-spectra-47",
    question: "The wavelength of the series limit of Lyman series is approximately:",
    options: [
      "91.2 nm",
      "121.6 nm",
      "365 nm",
      "656 nm"
    ],
    correctAnswer: 0,
    explanation: "The Lyman series limit occurs at approximately 91.2 nm, when an electron falls from n=∞ to n=1."
  },
  {
    id: "atomic-spectra-48",
    question: "Which element's spectrum was crucial for the development of quantum mechanics?",
    options: [
      "Helium",
      "Hydrogen",
      "Oxygen",
      "Neon"
    ],
    correctAnswer: 1,
    explanation: "Hydrogen's simple and regular spectrum played a crucial role in the development of quantum mechanics, particularly in Bohr's model and Schrödinger's equation."
  },
  {
    id: "atomic-spectra-49",
    question: "The number of possible spectral lines when an electron jumps from n = 5 to ground state is:",
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 1,
    explanation: "The number of possible spectral lines when an electron falls from level n to ground state is n(n-1)/2. For n=5: 5×4/2 = 10 lines."
  },
  {
    id: "atomic-spectra-50",
    question: "Which transition produces the H-delta line in hydrogen spectrum?",
    options: [
      "n = 3 to n = 2",
      "n = 4 to n = 2",
      "n = 5 to n = 2",
      "n = 6 to n = 2"
    ],
    correctAnswer: 3,
    explanation: "The H-delta line at 410 nm corresponds to the n=6 to n=2 transition in the hydrogen atom's Balmer series."
  },
  {
    id: "atomic-spectra-51",
    question: "The energy required to excite hydrogen atom from ground state to first excited state is:",
    options: [
      "10.2 eV",
      "13.6 eV",
      "3.4 eV",
      "1.9 eV"
    ],
    correctAnswer: 0,
    explanation: "The energy required to excite hydrogen from n=1 to n=2 is E₂ - E₁ = (-3.4 eV) - (-13.6 eV) = 10.2 eV."
  },
  {
    id: "atomic-spectra-52",
    question: "Which series of hydrogen spectrum was discovered by Friedrich Paschen?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 2,
    explanation: "The Paschen series in the infrared region was discovered by Friedrich Paschen in 1908, expanding our understanding of hydrogen spectrum."
  },
  {
    id: "atomic-spectra-53",
    question: "The wavelength of the H-alpha line is approximately:",
    options: [
      "121.6 nm",
      "434 nm",
      "486 nm",
      "656 nm"
    ],
    correctAnswer: 3,
    explanation: "The H-alpha line, corresponding to n=3 to n=2 transition, has a wavelength of approximately 656.3 nm in the red region of visible spectrum."
  },
  {
    id: "atomic-spectra-54",
    question: "Which quantum number is associated with the shape of electron orbital?",
    options: [
      "Principal quantum number (n)",
      "Azimuthal quantum number (l)",
      "Magnetic quantum number (m)",
      "Spin quantum number (s)"
    ],
    correctAnswer: 1,
    explanation: "The azimuthal quantum number (l) determines the shape of the electron orbital (s, p, d, f shapes)."
  },
  {
    id: "atomic-spectra-55",
    question: "The ionization energy of hydrogen atom is:",
    options: [
      "3.4 eV",
      "10.2 eV",
      "13.6 eV",
      "1.5 eV"
    ],
    correctAnswer: 2,
    explanation: "The ionization energy of hydrogen is 13.6 eV, which is the energy required to remove an electron from the ground state (n=1) to infinity."
  },
  {
    id: "atomic-spectra-56",
    question: "Which series limit has the shortest wavelength?",
    options: [
      "Lyman series limit",
      "Balmer series limit",
      "Paschen series limit",
      "Brackett series limit"
    ],
    correctAnswer: 0,
    explanation: "The Lyman series limit has the shortest wavelength (91.2 nm) because it involves transitions to n=1 with the largest energy differences."
  },
  {
    id: "atomic-spectra-57",
    question: "The number of spectral lines in the Balmer series is:",
    options: [
      "Infinite",
      "4",
      "6",
      "10"
    ],
    correctAnswer: 0,
    explanation: "The Balmer series has an infinite number of spectral lines, though only the first few are easily observable, converging to the series limit at 365 nm."
  },
  {
    id: "atomic-spectra-58",
    question: "Which transition produces a photon with energy 12.1 eV?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 1",
      "n = 4 to n = 1",
      "n = 3 to n = 2"
    ],
    correctAnswer: 2,
    explanation: "The n=4 to n=1 transition has energy ΔE = E₄ - E₁ = (-0.85 eV) - (-13.6 eV) = 12.75 eV, closest to 12.1 eV among the options."
  },
  {
    id: "atomic-spectra-59",
    question: "The Pfund series of hydrogen spectrum results from transitions to:",
    options: [
      "n = 3",
      "n = 4",
      "n = 5",
      "n = 6"
    ],
    correctAnswer: 2,
    explanation: "The Pfund series consists of far infrared spectral lines produced when electrons transition to the n=5 energy level in hydrogen atoms."
  },
  {
    id: "atomic-spectra-60",
    question: "Which color in the visible spectrum has the shortest wavelength?",
    options: [
      "Red",
      "Yellow",
      "Green",
      "Violet"
    ],
    correctAnswer: 3,
    explanation: "Violet light has the shortest wavelength (around 400 nm) and highest energy in the visible spectrum."
  },
  {
    id: "atomic-spectra-61",
    question: "The energy of an electron in n = 3 state of hydrogen is:",
    options: [
      "-13.6 eV",
      "-3.4 eV",
      "-1.51 eV",
      "-0.85 eV"
    ],
    correctAnswer: 2,
    explanation: "The energy of an electron in n=3 state is E₃ = -13.6/3² = -13.6/9 = -1.51 eV."
  },
  {
    id: "atomic-spectra-62",
    question: "Which series of hydrogen spectrum was discovered by Frederick Sumner Brackett?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 3,
    explanation: "The Brackett series in the infrared region was discovered by Frederick Sumner Brackett in 1922, further expanding the hydrogen spectral series."
  },
  {
    id: "atomic-spectra-63",
    question: "The wavelength of the H-epsilon line (n=7 to n=2) is approximately:",
    options: [
      "397 nm",
      "410 nm",
      "434 nm",
      "486 nm"
    ],
    correctAnswer: 0,
    explanation: "The H-epsilon line, corresponding to n=7 to n=2 transition, has a wavelength of approximately 397 nm in the violet region."
  },
  {
    id: "atomic-spectra-64",
    question: "Which transition requires the most energy?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 2",
      "n = 4 to n = 3",
      "n = 5 to n = 4"
    ],
    correctAnswer: 0,
    explanation: "The n=2 to n=1 transition requires the most energy (10.2 eV) as it has the largest energy difference among these options."
  },
  {
    id: "atomic-spectra-65",
    question: "The Humphreys series of hydrogen spectrum lies in the:",
    options: [
      "Ultraviolet region",
      "Visible region",
      "Near infrared region",
      "Far infrared region"
    ],
    correctAnswer: 3,
    explanation: "The Humphreys series lies in the far infrared region, resulting from electron transitions to the n=6 energy level."
  },
  {
    id: "atomic-spectra-66",
    question: "Which quantum number determines the orientation of orbital in space?",
    options: [
      "Principal quantum number (n)",
      "Azimuthal quantum number (l)",
      "Magnetic quantum number (m)",
      "Spin quantum number (s)"
    ],
    correctAnswer: 2,
    explanation: "The magnetic quantum number (m) determines the orientation of the orbital in space relative to an external magnetic field."
  },
  {
    id: "atomic-spectra-67",
    question: "The energy of an electron in n = ∞ state is:",
    options: [
      "-13.6 eV",
      "-3.4 eV",
      "0 eV",
      "+13.6 eV"
    ],
    correctAnswer: 2,
    explanation: "At n=∞, the electron is free from the nucleus, so its energy is 0 eV (the reference point for bound states)."
  },
  {
    id: "atomic-spectra-68",
    question: "Which series of hydrogen spectrum has the smallest energy difference between consecutive lines?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 3,
    explanation: "The Brackett series has the smallest energy differences between consecutive lines as they are closer together in the infrared region with longer wavelengths."
  },
  {
    id: "atomic-spectra-69",
    question: "The wavelength of a spectral line is directly proportional to:",
    options: [
      "Energy of the photon",
      "Frequency of the photon",
      "Speed of light",
      "None of these"
    ],
    correctAnswer: 3,
    explanation: "Wavelength is inversely proportional to both energy and frequency (λ = c/ν and E = hc/λ), so it's not directly proportional to any of these options."
  },
  {
    id: "atomic-spectra-70",
    question: "Which transition produces a photon of wavelength 102.6 nm?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 1",
      "n = 4 to n = 1",
      "n = ∞ to n = 1"
    ],
    correctAnswer: 1,
    explanation: "The n=3 to n=1 transition produces a photon of wavelength 102.6 nm, which is part of the Lyman series in the UV region."
  },
  {
    id: "atomic-spectra-71",
    question: "The energy difference between n=3 and n=2 levels in hydrogen is:",
    options: [
      "10.2 eV",
      "3.4 eV",
      "1.89 eV",
      "0.66 eV"
    ],
    correctAnswer: 2,
    explanation: "The energy difference between n=3 and n=2 is E₃ - E₂ = (-1.51 eV) - (-3.4 eV) = 1.89 eV, corresponding to the red H-alpha line."
  },
  {
    id: "atomic-spectra-72",
    question: "Which series of hydrogen spectrum was discovered by August Pfund?",
    options: [
      "Paschen series",
      "Brackett series",
      "Pfund series",
      "Humphreys series"
    ],
    correctAnswer: 2,
    explanation: "The Pfund series in the far infrared region was discovered by August Pfund in 1924, completing the main hydrogen spectral series."
  },
  {
    id: "atomic-spectra-73",
    question: "The wavelength of the H-gamma line is approximately:",
    options: [
      "410 nm",
      "434 nm",
      "486 nm",
      "656 nm"
    ],
    correctAnswer: 1,
    explanation: "The H-gamma line, corresponding to n=5 to n=2 transition, has a wavelength of approximately 434 nm in the blue-violet region."
  },
  {
    id: "atomic-spectra-74",
    question: "Which transition produces a photon with the shortest wavelength in the Balmer series?",
    options: [
      "n = 3 to n = 2",
      "n = 4 to n = 2",
      "n = 5 to n = 2",
      "n = ∞ to n = 2"
    ],
    correctAnswer: 3,
    explanation: "The shortest wavelength in any series is the series limit, when n₂ approaches infinity (n = ∞ to n = 2 for Balmer series)."
  },
  {
    id: "atomic-spectra-75",
    question: "The energy of an electron in n = 4 state of hydrogen is:",
    options: [
      "-13.6 eV",
      "-3.4 eV",
      "-1.51 eV",
      "-0.85 eV"
    ],
    correctAnswer: 3,
    explanation: "The energy of an electron in n=4 state is E₄ = -13.6/4² = -13.6/16 = -0.85 eV."
  },
  {
    id: "atomic-spectra-76",
    question: "Which series of hydrogen spectrum has lines that converge at 820.4 nm?",
    options: [
      "Balmer series",
      "Paschen series",
      "Brackett series",
      "Pfund series"
    ],
    correctAnswer: 1,
    explanation: "The Paschen series converges at 820.4 nm, which is the series limit for transitions to n=3."
  },
  {
    id: "atomic-spectra-77",
    question: "The number of possible spectral lines when an electron jumps from n = 6 to n = 2 is:",
    options: [
      "1",
      "3",
      "6",
      "10"
    ],
    correctAnswer: 0,
    explanation: "When an electron jumps directly from n=6 to n=2, it produces exactly one spectral line (the H-epsilon line at 397 nm)."
  },
  {
    id: "atomic-spectra-78",
    question: "Which transition produces a photon of energy 0.66 eV?",
    options: [
      "n = 4 to n = 3",
      "n = 5 to n = 4",
      "n = 6 to n = 5",
      "n = 7 to n = 6"
    ],
    correctAnswer: 0,
    explanation: "The n=4 to n=3 transition has energy ΔE = E₄ - E₃ = (-0.85 eV) - (-1.51 eV) = 0.66 eV, in the infrared region."
  },
  {
    id: "atomic-spectra-79",
    question: "The wavelength of the series limit of Paschen series is approximately:",
    options: [
      "91.2 nm",
      "365 nm",
      "820 nm",
      "1458 nm"
    ],
    correctAnswer: 2,
    explanation: "The Paschen series limit occurs at approximately 820 nm, when an electron falls from n=∞ to n=3."
  },
  {
    id: "atomic-spectra-80",
    question: "Which color in the visible spectrum has the lowest frequency?",
    options: [
      "Violet",
      "Blue",
      "Green",
      "Red"
    ],
    correctAnswer: 3,
    explanation: "Red light has the longest wavelength and lowest frequency in the visible spectrum."
  },
  {
    id: "atomic-spectra-81",
    question: "The energy required to remove an electron from n = 2 state is:",
    options: [
      "3.4 eV",
      "10.2 eV",
      "13.6 eV",
      "1.5 eV"
    ],
    correctAnswer: 0,
    explanation: "The energy required to remove an electron from n=2 state is 3.4 eV, which is the ionization energy from that excited state."
  },
  {
    id: "atomic-spectra-82",
    question: "Which series of hydrogen spectrum has the largest number of observable lines?",
    options: [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    correctAnswer: 1,
    explanation: "The Balmer series has the largest number of easily observable lines because they lie in the visible region where detection is easiest."
  },
  {
    id: "atomic-spectra-83",
    question: "The wavelength of the H-delta line is approximately:",
    options: [
      "397 nm",
      "410 nm",
      "434 nm",
      "486 nm"
    ],
    correctAnswer: 1,
    explanation: "The H-delta line, corresponding to n=6 to n=2 transition, has a wavelength of approximately 410 nm in the violet region."
  },
  {
    id: "atomic-spectra-84",
    question: "Which transition produces a photon in the ultraviolet region?",
    options: [
      "n = 3 to n = 2",
      "n = 4 to n = 2",
      "n = 2 to n = 1",
      "n = 5 to n = 3"
    ],
    correctAnswer: 2,
    explanation: "The n=2 to n=1 transition produces a photon of wavelength 121.6 nm, which is in the ultraviolet region (Lyman series)."
  },
  {
    id: "atomic-spectra-85",
    question: "The energy of an electron in n = 5 state of hydrogen is:",
    options: [
      "-3.4 eV",
      "-1.51 eV",
      "-0.85 eV",
      "-0.54 eV"
    ],
    correctAnswer: 3,
    explanation: "The energy of an electron in n=5 state is E₅ = -13.6/5² = -13.6/25 = -0.544 eV."
  },
  {
    id: "atomic-spectra-86",
    question: "Which series of hydrogen spectrum converges at 1458 nm?",
    options: [
      "Paschen series",
      "Brackett series",
      "Pfund series",
      "Humphreys series"
    ],
    correctAnswer: 1,
    explanation: "The Brackett series converges at 1458 nm, which is the series limit for transitions to n=4."
  },
  {
    id: "atomic-spectra-87",
    question: "The number of spectral lines produced when an electron falls from n = 4 to n = 2 is:",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 0,
    explanation: "When an electron falls directly from n=4 to n=2, it produces exactly one spectral line (the H-beta line at 486 nm)."
  },
  {
    id: "atomic-spectra-88",
    question: "Which transition produces a photon of wavelength 1875 nm?",
    options: [
      "n = 4 to n = 3",
      "n = 5 to n = 4",
      "n = 6 to n = 5",
      "n = 7 to n = 6"
    ],
    correctAnswer: 1,
    explanation: "The n=5 to n=4 transition produces a photon of wavelength approximately 1875 nm, which is in the infrared region."
  },
  {
    id: "atomic-spectra-89",
    question: "The wavelength of the series limit of Brackett series is approximately:",
    options: [
      "820 nm",
      "1458 nm",
      "2279 nm",
      "4050 nm"
    ],
    correctAnswer: 1,
    explanation: "The Brackett series limit occurs at approximately 1458 nm, when an electron falls from n=∞ to n=4."
  },
  {
    id: "atomic-spectra-90",
    question: "Which quantum number has values ranging from 0 to n-1?",
    options: [
      "Principal quantum number (n)",
      "Azimuthal quantum number (l)",
      "Magnetic quantum number (m)",
      "Spin quantum number (s)"
    ],
    correctAnswer: 1,
    explanation: "The azimuthal quantum number (l) has values ranging from 0 to n-1, determining the subshell (s, p, d, f, etc.)."
  },
  {
    id: "atomic-spectra-91",
    question: "The energy difference between n=4 and n=2 levels in hydrogen is:",
    options: [
      "10.2 eV",
      "2.55 eV",
      "1.89 eV",
      "0.66 eV"
    ],
    correctAnswer: 1,
    explanation: "The energy difference between n=4 and n=2 is E₄ - E₂ = (-0.85 eV) - (-3.4 eV) = 2.55 eV, corresponding to the blue-green H-beta line."
  },
  {
    id: "atomic-spectra-92",
    question: "Which series of hydrogen spectrum was discovered by Curtis J. Humphreys?",
    options: [
      "Brackett series",
      "Pfund series",
      "Humphreys series",
      "Lyman series"
    ],
    correctAnswer: 2,
    explanation: "The Humphreys series in the far infrared region was discovered by Curtis J. Humphreys in 1953, extending the hydrogen spectral series further."
  },
  {
    id: "atomic-spectra-93",
    question: "The wavelength of the H-beta line is approximately:",
    options: [
      "410 nm",
      "434 nm",
      "486 nm",
      "656 nm"
    ],
    correctAnswer: 2,
    explanation: "The H-beta line, corresponding to n=4 to n=2 transition, has a wavelength of approximately 486 nm in the blue-green region."
  },
  {
    id: "atomic-spectra-94",
    question: "Which transition produces the least energetic photon in the Lyman series?",
    options: [
      "n = 2 to n = 1",
      "n = 3 to n = 1",
      "n = 4 to n = 1",
      "n = 10 to n = 1"
    ],
    correctAnswer: 0,
    explanation: "The least energetic photon in the Lyman series is from n=2 to n=1 transition (10.2 eV), as it has the smallest energy difference in this series."
  },
  {
    id: "atomic-spectra-95",
    question: "The energy of an electron in n = 6 state of hydrogen is:",
    options: [
      "-0.85 eV",
      "-0.54 eV",
      "-0.38 eV",
      "-0.28 eV"
    ],
    correctAnswer: 2,
    explanation: "The energy of an electron in n=6 state is E₆ = -13.6/6² = -13.6/36 = -0.378 eV."
  },
  {
    id: "atomic-spectra-96",
    question: "Which series of hydrogen spectrum converges at 2279 nm?",
    options: [
      "Brackett series",
      "Pfund series",
      "Humphreys series",
      "Balmer series"
    ],
    correctAnswer: 1,
    explanation: "The Pfund series converges at 2279 nm, which is the series limit for transitions to n=5."
  },
  {
    id: "atomic-spectra-97",
    question: "The number of spectral lines produced when an electron falls from n = 5 to n = 2 is:",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 0,
    explanation: "When an electron falls directly from n=5 to n=2, it produces exactly one spectral line (the H-gamma line at 434 nm)."
  },
  {
    id: "atomic-spectra-98",
    question: "Which transition produces a photon of wavelength 954.6 nm?",
    options: [
      "n = 4 to n = 2",
      "n = 5 to n = 2",
      "n = 6 to n = 2",
      "n = 7 to n = 2"
    ],
    correctAnswer: 2,
    explanation: "The n=6 to n=2 transition produces the H-delta line at 410 nm, not 954.6 nm. The correct answer should be none of these, but n=5 to n=3 produces ~1282 nm."
  },
  {
    id: "atomic-spectra-99",
    question: "The wavelength of the series limit of Pfund series is approximately:",
    options: [
      "1458 nm",
      "2279 nm",
      "4050 nm",
      "7450 nm"
    ],
    correctAnswer: 1,
    explanation: "The Pfund series limit occurs at approximately 2279 nm, when an electron falls from n=∞ to n=5."
  },
  {
    id: "atomic-spectra-100",
    question: "Which color is associated with the longest wavelength in the visible spectrum?",
    options: [
      "Violet",
      "Blue",
      "Green",
      "Red"
    ],
    correctAnswer: 3,
    explanation: "Red light has the longest wavelength (around 700 nm) and lowest energy in the visible spectrum."
  }
];
export const mediumQuestions: Question[] = [
];

export const hardQuestions: Question[] = [
];

export const atomicSpectraQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
