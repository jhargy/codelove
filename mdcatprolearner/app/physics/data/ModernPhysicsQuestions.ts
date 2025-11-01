export type Difficulty = keyof typeof modernPhysicsQuestions;


export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const easyQuestions: Question[] = [
  {
    id: "easy-1",
    question: "What is the name for a single particle or 'packet' of light?",
    options: ["Electron", "Proton", "Photon", "Neutron"],
    correctAnswer: 2,
    explanation: "A photon is the fundamental quantum particle of light and other forms of electromagnetic radiation."
  },
  {
    id: "easy-2",
    question: "Who first proposed the idea that light energy is quantized into discrete packets?",
    options: ["Isaac Newton", "Max Planck", "Albert Einstein", "Niels Bohr"],
    correctAnswer: 1,
    explanation: "Max Planck proposed the quantum hypothesis in 1900 to explain blackbody radiation, suggesting energy is emitted in discrete units called 'quanta'."
  },
  {
    id: "easy-3",
    question: "What is the formula for the energy (E) of a single photon?",
    options: ["E = mc²", "E = hf", "E = ½mv²", "E = Fd"],
    correctAnswer: 1,
    explanation: "The energy of a photon is given by Planck's equation: E = hf, where h is Planck's constant and f is the frequency of the light."
  },
  {
    id: "easy-4",
    question: "What does the symbol 'h' represent in the equation E = hf?",
    options: ["Height", "Hamiltonian", "Planck's constant", "Wavelength"],
    correctAnswer: 2,
    explanation: "The symbol 'h' represents Planck's constant, a fundamental value in quantum mechanics (approximately 6.63 x 10⁻³⁴ J·s)."
  },
  {
    id: "easy-5",
    question: "Which phenomenon provided the strongest evidence for the particle nature of light?",
    options: ["Refraction", "Reflection", "Photoelectric Effect", "Diffraction"],
    correctAnswer: 2,
    explanation: "The photoelectric effect, explained by Einstein, showed that light could eject electrons from a metal, behaving like a particle (photon) with quantized energy."
  },
  {
    id: "easy-6",
    question: "If the frequency of light increases, the energy of its photons:",
    options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    correctAnswer: 1,
    explanation: "Since E = hf, energy is directly proportional to frequency. Higher frequency means higher energy photons."
  },
  {
    id: "easy-7",
    question: "What is the value of Planck's constant (h)?",
    options: ["6.63 x 10⁻³⁴ J·s", "3.00 x 10⁸ m/s", "1.60 x 10⁻¹⁹ C", "9.11 x 10⁻³¹ kg"],
    correctAnswer: 0,
    explanation: "Planck's constant is a fundamental physical constant with a value of approximately 6.626 x 10⁻³⁴ Joule-seconds."
  },
  {
    id: "easy-8",
    question: "Which color of visible light has photons with the highest energy?",
    options: ["Red", "Green", "Blue", "Yellow"],
    correctAnswer: 2,
    explanation: "Blue light has a higher frequency than red, green, or yellow light. According to E = hf, higher frequency means higher energy photons."
  },
  {
    id: "easy-9",
    question: "Which color of visible light has photons with the lowest energy?",
    options: ["Violet", "Blue", "Green", "Red"],
    correctAnswer: 3,
    explanation: "Red light has the lowest frequency in the visible spectrum. Therefore, its photons carry the least amount of energy."
  },
  {
    id: "easy-10",
    question: "What is the SI unit for the energy of a photon?",
    options: ["Watt (W)", "Hertz (Hz)", "Joule (J)", "Newton (N)"],
    correctAnswer: 2,
    explanation: "Like all forms of energy, the energy of a photon is measured in Joules (J)."
  },
  {
    id: "easy-11",
    question: "A photon of ultraviolet light, compared to a photon of infrared light, has:",
    options: ["Lower energy", "Higher energy", "The same energy", "Longer wavelength"],
    correctAnswer: 1,
    explanation: "Ultraviolet light has a much higher frequency than infrared light. Therefore, its photons possess more energy (E = hf)."
  },
  {
    id: "easy-12",
    question: "According to the particle model, the intensity of a light beam is determined by the:",
    options: ["Energy of each photon", "Speed of the photons", "Number of photons per second", "Mass of the photons"],
    correctAnswer: 2,
    explanation: "Intensity is related to the brightness of light. A brighter light means more photons are hitting a surface every second."
  },
  {
    id: "easy-13",
    question: "Who won the Nobel Prize for explaining the photoelectric effect using the concept of photons?",
    options: ["Max Planck", "Albert Einstein", "Niels Bohr", "Robert Millikan"],
    correctAnswer: 1,
    explanation: "Albert Einstein was awarded the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect, which introduced the concept of photons."
  },
  {
    id: "easy-14",
    question: "What is the rest mass of a photon?",
    options: ["Infinite", "1.67 x 10⁻²⁷ kg", "9.11 x 10⁻³¹ kg", "Zero"],
    correctAnswer: 3,
    explanation: "Photons are massless particles. They always travel at the speed of light in a vacuum and have zero rest mass."
  },
  {
    id: "easy-15",
    question: "What happens to the energy of a photon if its frequency is doubled?",
    options: ["It doubles", "It halves", "It quarters", "It stays the same"],
    correctAnswer: 0,
    explanation: "Energy is directly proportional to frequency (E ∝ f). If frequency doubles, the energy also doubles."
  },
  {
    id: "easy-16",
    question: "Which type of electromagnetic radiation has the most energetic photons?",
    options: ["Radio waves", "Microwaves", "Visible light", "Gamma rays"],
    correctAnswer: 3,
    explanation: "Gamma rays have the highest frequency in the electromagnetic spectrum. Therefore, they have the most energetic photons."
  },
  {
    id: "easy-17",
    question: "The momentum of a photon is given by:",
    options: ["p = mv", "p = hf", "p = h/λ", "p = E/c"],
    correctAnswer: 2,
    explanation: "Even though photons are massless, they carry momentum. The formula for a photon's momentum is p = h / λ, where λ is the wavelength."
  },
  {
    id: "easy-18",
    question: "In the photoelectric effect, what is ejected from the surface of a metal?",
    options: ["Protons", "Neutrons", "Photons", "Electrons"],
    correctAnswer: 3,
    explanation: "When light shines on a metal surface, it can eject electrons from that metal. These ejected electrons are called photoelectrons."
  },
  {
    id: "easy-19",
    question: "For the photoelectric effect to occur, the energy of the incident photon must be:",
    options: ["Less than the work function", "Equal to the work function", "Greater than or equal to the work function", "Unrelated to the work function"],
    correctAnswer: 2,
    explanation: "The work function is the minimum energy needed to eject an electron. A photon must have at least this much energy to cause the effect."
  },
  {
    id: "easy-20",
    question: "What is the 'work function' of a metal?",
    options: ["The energy of a photon", "The minimum energy needed to eject an electron", "The current produced", "The frequency of light"],
    correctAnswer: 1,
    explanation: "The work function is a property of the metal and represents the minimum binding energy that holds an electron inside the metal."
  },
  {
    id: "easy-21",
    question: "In the photoelectric effect, the kinetic energy of the ejected electron is equal to:",
    options: ["hf", "Φ", "hf - Φ", "Φ - hf"],
    correctAnswer: 2,
    explanation: "The photon's energy (hf) is used to overcome the work function (Φ). Any leftover energy becomes the kinetic energy of the electron: K.E. = hf - Φ."
  },
  {
    id: "easy-22",
    question: "If a photon's frequency is below the threshold frequency, what happens in the photoelectric effect?",
    options: ["Electrons are ejected immediately", "Electrons are ejected after a delay", "No electrons are ejected", "The metal becomes charged"],
    correctAnswer: 2,
    explanation: "If the photon energy (hf) is less than the work function (Φ), it cannot eject an electron, no matter how intense the light is."
  },
  {
    id: "easy-23",
    question: "What is the name of the minimum frequency needed to eject an electron in the photoelectric effect?",
    options: ["Critical frequency", "Base frequency", "Threshold frequency", "Quantum frequency"],
    correctAnswer: 2,
    explanation: "The threshold frequency (f₀) is the minimum frequency of light required to just eject an electron from a metal surface."
  },
  {
    id: "easy-24",
    question: "Above the threshold frequency, the kinetic energy of the ejected electrons depends on the:",
    options: ["Intensity of light", "Frequency of light", "Time of exposure", "Surface area of the metal"],
    correctAnswer: 1,
    explanation: "K.E. = hf - Φ. For a given metal (fixed Φ), the kinetic energy depends only on the frequency (f) of the incident light."
  },
  {
    id: "easy-25",
    question: "In the photoelectric effect, the number of ejected electrons depends on the:",
    options: ["Frequency of light", "Energy of a single photon", "Intensity of light", "Work function"],
    correctAnswer: 2,
    explanation: "The intensity is related to the number of photons. Higher intensity means more photons per second, which can eject more electrons per second."
  },
  {
    id: "easy-26",
    question: "What is the speed of a photon in a vacuum?",
    options: ["3 x 10⁸ m/s", "It depends on its frequency", "It depends on its energy", "Zero"],
    correctAnswer: 0,
    explanation: "All photons, regardless of their energy or frequency, travel at the same speed in a vacuum: the speed of light, c = 3 x 10⁸ m/s."
  },
  {
    id: "easy-27",
    question: "Which equation combines the wave and particle nature of light?",
    options: ["E = hf", "c = fλ", "E = mc²", "F = ma"],
    correctAnswer: 1,
    explanation: "The wave equation c = fλ relates the wave properties (frequency f and wavelength λ) to the constant speed of light c."
  },
  {
    id: "easy-28",
    question: "What does the term 'quantized' mean?",
    options: ["Continuous", "Can have any value", "Restricted to discrete values", "Very small"],
    correctAnswer: 2,
    explanation: "Quantized means that a physical property, like energy, can only exist in specific, discrete amounts or 'quanta', not a continuous range."
  },
  {
    id: "easy-29",
    question: "Which experiment demonstrates the particle nature of light?",
    options: ["Double-slit experiment", "Photoelectric effect", "Young's interference", "Diffraction grating"],
    correctAnswer: 1,
    explanation: "The photoelectric effect is a key experiment that demonstrates light behaves as particles (photons)."
  },
  {
    id: "easy-30",
    question: "Which experiment demonstrates the wave nature of light?",
    options: ["Photoelectric effect", "Compton scattering", "Double-slit experiment", "Blackbody radiation"],
    correctAnswer: 2,
    explanation: "The double-slit experiment shows interference patterns, which is a classic demonstration of light's wave nature."
  },
  {
    id: "easy-31",
    question: "The concept that light can behave as both a wave and a particle is called:",
    options: ["Quantum entanglement", "Wave-particle duality", "The uncertainty principle", "Quantum superposition"],
    correctAnswer: 1,
    explanation: "Wave-particle duality is the concept in quantum mechanics that every particle (like light) can be described as both a wave and a particle."
  },
  {
    id: "easy-32",
    question: "What is the energy of a photon of wavelength λ?",
    options: ["E = hc/λ", "E = hλ", "E = c/λ", "E = hλ/c"],
    correctAnswer: 0,
    explanation: "Since c = fλ, we can substitute f = c/λ into E = hf. This gives the common formula for a photon's energy: E = hc / λ."
  },
  {
    id: "easy-33",
    question: "If the wavelength of light decreases, the energy of its photon:",
    options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
    correctAnswer: 1,
    explanation: "Energy is inversely proportional to wavelength (E = hc/λ). A shorter wavelength means a higher energy photon."
  },
  {
    id: "easy-34",
    question: "What is the charge of a photon?",
    options: ["+1.6 x 10⁻¹⁹ C", "-1.6 x 10⁻¹⁹ C", "Zero", "It depends on its energy"],
    correctAnswer: 2,
    explanation: "A photon is a neutral particle; it carries no electric charge."
  },
  {
    id: "easy-35",
    question: "What physical quantity is plotted on the x-axis of a graph showing the maximum kinetic energy of photoelectrons vs. frequency?",
    options: ["Kinetic Energy", "Intensity", "Frequency", "Work function"],
    correctAnswer: 2,
    explanation: "In such a graph, frequency (f) is the independent variable and is plotted on the x-axis. Kinetic energy (K.E. = hf - Φ) is on the y-axis."
  },
  {
    id: "easy-36",
    question: "The slope of the graph of maximum kinetic energy (K.E.) vs. frequency (f) is equal to:",
    options: ["The work function (Φ)", "Planck's constant (h)", "The threshold frequency (f₀)", "The speed of light (c)"],
    correctAnswer: 1,
    explanation: "The equation is K.E. = hf - Φ. This is a straight line equation (y = mx + c), so the slope (m) is equal to Planck's constant, h."
  },
  {
    id: "easy-37",
    question: "The y-intercept on a graph of maximum kinetic energy (K.E.) vs. frequency (f) represents:",
    options: ["Planck's constant (h)", "The work function (Φ)", "The threshold frequency (f₀)", "The negative of the work function (-Φ)"],
    correctAnswer: 3,
    explanation: "From K.E. = hf - Φ, when f = 0, K.E. = -Φ. So the y-intercept is negative and its magnitude is equal to the work function Φ."
  },
  {
    id: "easy-38",
    question: "The x-intercept on a graph of maximum kinetic energy (K.E.) vs. frequency (f) represents:",
    options: ["Planck's constant (h)", "The work function (Φ)", "The threshold frequency (f₀)", "The speed of light (c)"],
    correctAnswer: 2,
    explanation: "The x-intercept is where K.E. = 0. Setting the equation to zero: 0 = hf - Φ, so f = Φ/h. This is the definition of the threshold frequency, f₀."
  },
  {
    id: "easy-39",
    question: "Who experimentally verified Einstein's explanation of the photoelectric effect?",
    options: ["Max Planck", "J.J. Thomson", "Robert Millikan", "Ernest Rutherford"],
    correctAnswer: 2,
    explanation: "Robert Millikan conducted precise experiments that confirmed Einstein's photoelectric equation, despite initially setting out to disprove it."
  },
  {
    id: "easy-40",
    question: "What is the unit for frequency (f)?",
    options: ["Joule (J)", "Hertz (Hz)", "Meter (m)", "Second (s)"],
    correctAnswer: 1,
    explanation: "The unit of frequency is Hertz (Hz), which is equivalent to cycles per second (s⁻¹)."
  },
  {
    id: "easy-41",
    question: "What is the unit for wavelength (λ)?",
    options: ["Joule (J)", "Hertz (Hz)", "Meter (m)", "Second (s)"],
    correctAnswer: 2,
    explanation: "Wavelength is a length and is measured in meters (m), though nanometers (nm) are often used for light."
  },
  {
    id: "easy-42",
    question: "Which of these has the longest wavelength?",
    options: ["X-ray", "Green light", "Radio wave", "Gamma ray"],
    correctAnswer: 2,
    explanation: "Radio waves have the longest wavelengths in the electromagnetic spectrum, ranging from millimeters to kilometers."
  },
  {
    id: "easy-43",
    question: "Which of these has the shortest wavelength?",
    options: ["Microwave", "Infrared", "Ultraviolet", "Gamma ray"],
    correctAnswer: 3,
    explanation: "Gamma rays have the shortest wavelengths in the electromagnetic spectrum, less than about 10 picometers."
  },
  {
    id: "easy-44",
    question: "The energy of a photon is inversely proportional to its:",
    options: ["Frequency", "Speed", "Wavelength", "Intensity"],
    correctAnswer: 2,
    explanation: "From E = hc / λ, the energy (E) is inversely proportional to the wavelength (λ). Longer wavelength means lower energy."
  },
  {
    id: "easy-45",
    question: "A red light laser and a blue light laser have the same intensity. Which one emits more photons per second?",
    options: ["The red laser", "The blue laser", "They emit the same number", "It cannot be determined"],
    correctAnswer: 0,
    explanation: "Intensity is energy per second per area. Since red photons have less energy than blue photons (E = hf), the red laser must emit more photons per second to have the same total energy output (intensity)."
  },
  {
    id: "easy-46",
    question: "What is the main reason classical wave theory failed to explain the photoelectric effect?",
    options: ["It couldn't explain reflection", "It predicted a delay for electron ejection", "It couldn't calculate intensity", "It disagreed with Newton's laws"],
    correctAnswer: 1,
    explanation: "Wave theory predicted that energy would accumulate over time, so there would be a delay before ejection. However, electrons were ejected immediately, which was explained by the instantaneous transfer of energy from a single photon."
  },
  {
    id: "easy-47",
    question: "In the particle model, what determines the 'color' of light?",
    options: ["The number of photons", "The energy of the photons", "The speed of the photons", "The mass of the photons"],
    correctAnswer: 1,
    explanation: "The energy of a photon (E = hf) determines its frequency, which our eyes perceive as color. Different energies mean different colors."
  },
  {
    id: "easy-48",
    question: "What is the range of wavelengths for visible light?",
    options: ["400 nm - 700 nm", "4 nm - 7 nm", "4000 nm - 7000 nm", "0.4 nm - 0.7 nm"],
    correctAnswer: 0,
    explanation: "The visible spectrum for humans is approximately from 400 nanometers (violet) to 700 nanometers (red)."
  },
  {
    id: "easy-49",
    question: "What is the approximate wavelength of red light?",
    options: ["400 nm", "500 nm", "600 nm", "700 nm"],
    correctAnswer: 3,
    explanation: "Red light is at the long-wavelength end of the visible spectrum, around 620-750 nm. 700 nm is a standard approximate value."
  },
  {
    id: "easy-50",
    question: "What is the approximate wavelength of violet light?",
    options: ["400 nm", "500 nm", "600 nm", "700 nm"],
    correctAnswer: 0,
    explanation: "Violet light is at the short-wavelength end of the visible spectrum, around 380-450 nm. 400 nm is a standard approximate value."
  },
  {
    id: "easy-51",
    question: "The constant 'hc' has a value of approximately:",
    options: ["1240 eV·nm", "6.63 x 10⁻³⁴ J·s", "3.00 x 10⁸ m/s", "1.24 x 10⁻⁶ eV·m"],
    correctAnswer: 0,
    explanation: "The product hc is a useful constant in quantum mechanics. Its value is approximately 1240 electronvolt-nanometers (eV·nm), which simplifies energy calculations for photons."
  },
  {
    id: "easy-52",
    question: "What is the energy (in eV) of a photon with a wavelength of 620 nm (red light)? Use hc ≈ 1240 eV·nm.",
    options: ["1.5 eV", "2.0 eV", "3.0 eV", "4.0 eV"],
    correctAnswer: 1,
    explanation: "Using E = hc / λ, we get E = 1240 eV·nm / 620 nm = 2.0 eV. This is a typical energy for a red photon."
  },
  {
    id: "easy-53",
    question: "What is the energy (in eV) of a photon with a wavelength of 310 nm (UV light)? Use hc ≈ 1240 eV·nm.",
    options: ["2.0 eV", "4.0 eV", "6.0 eV", "8.0 eV"],
    correctAnswer: 1,
    explanation: "E = hc / λ = 1240 eV·nm / 310 nm = 4.0 eV. Ultraviolet photons have higher energy than visible light photons."
  },
  {
    id: "easy-54",
    question: "The work function of a metal is 2.3 eV. What is the minimum frequency of light needed to eject an electron? (h = 4.14 x 10⁻¹⁵ eV·s)",
    options: ["5.56 x 10¹⁴ Hz", "2.3 x 10¹⁵ Hz", "1.5 x 10¹⁵ Hz", "1.1 x 10¹⁵ Hz"],
    correctAnswer: 0,
    explanation: "The threshold frequency f₀ = Φ / h. f₀ = 2.3 eV / 4.14 x 10⁻¹⁵ eV·s ≈ 5.56 x 10¹⁴ Hz."
  },
  {
    id: "easy-55",
    question: "Light of frequency 1.5 x 10¹⁵ Hz shines on a metal with a work function of 4.1 eV. Will electrons be ejected? (h = 4.14 x 10⁻¹⁵ eV·s)",
    options: ["Yes", "No", "Maybe", "Not enough information"],
    correctAnswer: 0,
    explanation: "First, find the photon energy: E = hf = (4.14e-15 eV·s)(1.5e15 Hz) = 6.21 eV. Since 6.21 eV > 4.1 eV (the work function), electrons will be ejected."
  },
  {
    id: "easy-56",
    question: "In the previous question, what is the maximum kinetic energy of the ejected electrons?",
    options: ["2.11 eV", "4.1 eV", "6.21 eV", "10.31 eV"],
    correctAnswer: 0,
    explanation: "K.E._max = hf - Φ = 6.21 eV - 4.1 eV = 2.11 eV."
  },
  {
    id: "easy-57",
    question: "A photon has an energy of 3 eV. What is its frequency? (h = 4.14 x 10⁻¹⁵ eV·s)",
    options: ["7.25 x 10¹⁴ Hz", "1.24 x 10¹⁵ Hz", "3.00 x 10⁸ Hz", "1.38 x 10¹⁴ Hz"],
    correctAnswer: 0,
    explanation: "From E = hf, we get f = E/h. f = 3 eV / 4.14 x 10⁻¹⁵ eV·s ≈ 7.25 x 10¹⁴ Hz."
  },
  {
    id: "easy-58",
    question: "What is the wavelength of a 3 eV photon? (Use hc ≈ 1240 eV·nm)",
    options: ["413 nm", "620 nm", "1240 nm", "310 nm"],
    correctAnswer: 0,
    explanation: "From E = hc/λ, we get λ = hc/E. λ = 1240 eV·nm / 3 eV ≈ 413 nm. This is violet light."
  },
  {
    id: "easy-59",
    question: "Which photon carries more energy: a 500 nm photon or a 600 nm photon?",
    options: ["500 nm", "600 nm", "They have the same energy", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "Shorter wavelength means higher energy. 500 nm (green/blue) has higher energy than 600 nm (orange/red)."
  },
  {
    id: "easy-60",
    question: "What is the frequency of a photon with energy 5.0 eV? (h = 4.14 x 10⁻¹⁵ eV·s)",
    options: ["8.28 x 10¹⁴ Hz", "1.21 x 10¹⁵ Hz", "2.48 x 10¹⁵ Hz", "5.0 x 10¹⁴ Hz"],
    correctAnswer: 1,
    explanation: "f = E / h = 5.0 eV / 4.14 x 10⁻¹⁵ eV·s ≈ 1.21 x 10¹⁵ Hz."
  },
  {
    id: "easy-61",
    question: "The work function for sodium metal is 2.28 eV. What is the longest wavelength of light that can eject electrons from sodium?",
    options: ["288 nm", "544 nm", "644 nm", "844 nm"],
    correctAnswer: 1,
    explanation: "The longest wavelength corresponds to the threshold frequency, where K.E. = 0 and E_photon = Φ. So λ_max = hc / Φ = 1240 eV·nm / 2.28 eV ≈ 544 nm."
  },
  {
    id: "easy-62",
    question: "If the intensity of light is doubled in the photoelectric effect (and frequency is above threshold), what happens to the number of ejected electrons per second?",
    options: ["It doubles", "It halves", "It stays the same", "It quarters"],
    correctAnswer: 0,
    explanation: "Number of electrons ejected per second is proportional to the intensity (number of photons per second). Double the intensity means double the number of photons, which can eject double the number of electrons."
  },
  {
    id: "easy-63",
    question: "If the intensity of light is doubled in the photoelectric effect (and frequency is above threshold), what happens to the maximum kinetic energy of the ejected electrons?",
    options: ["It doubles", "It halves", "It stays the same", "It quarters"],
    correctAnswer: 2,
    explanation: "Maximum kinetic energy depends only on the frequency of the light (K.E._max = hf - Φ), not on the intensity. It remains unchanged."
  },
  {
    id: "easy-64",
    question: "If the frequency of light is increased (and it is above threshold), what happens to the maximum kinetic energy of the ejected electrons?",
    options: ["It increases", "It decreases", "It stays the same", "It becomes zero"],
    correctAnswer: 0,
    explanation: "K.E._max = hf - Φ. If frequency f increases, the maximum kinetic energy also increases."
  },
  {
    id: "easy-65",
    question: "What is the kinetic energy of an electron ejected by a photon with energy exactly equal to the work function?",
    options: ["Zero", "Equal to the work function", "Equal to hf", "It cannot be ejected"],
    correctAnswer: 0,
    explanation: "If hf = Φ, then K.E._max = hf - Φ = 0. The electron is ejected with zero kinetic energy."
  },
  {
    id: "easy-66",
    question: "The stopping potential in a photoelectric experiment is used to measure the:",
    options: ["Work function", "Frequency of light", "Maximum kinetic energy of electrons", "Intensity of light"],
    correctAnswer: 2,
    explanation: "The stopping voltage (V_s) is the voltage needed to stop the most energetic photoelectrons. The maximum kinetic energy is given by K.E._max = eV_s."
  },
  {
    id: "easy-67",
    question: "If the stopping potential is 2.0 V, what is the maximum kinetic energy of the photoelectrons?",
    options: ["2.0 J", "2.0 eV", "1.6 x 10⁻¹⁹ J", "2.0 V"],
    correctAnswer: 1,
    explanation: "By definition, K.E._max = e * V_s. If V_s = 2.0 V, then K.E._max = 2.0 eV. (Note: 'eV' is a unit of energy, electronvolt)."
  },
  {
    id: "easy-68",
    question: "The equation K.E._max = eV_s represents:",
    options: ["The definition of work function", "The conservation of energy", "The conversion between electrical potential and kinetic energy", "Planck's law"],
    correctAnswer: 2,
    explanation: "This equation shows that the work done by the electric field (e * V_s) to stop an electron is equal to the electron's initial kinetic energy."
  },
  {
    id: "easy-69",
    question: "Combining K.E._max = hf - Φ and K.E._max = eV_s gives:",
    options: ["E = mc²", "c = fλ", "eV_s = hf - Φ", "V_s = hf"],
    correctAnswer: 2,
    explanation: "This is the combined photoelectric equation that can be tested experimentally: eV_s = hf - Φ."
  },
  {
    id: "easy-70",
    question: "In the equation eV_s = hf - Φ, the y-intercept of a graph of V_s vs. f is:",
    options: ["h", "h/e", "-Φ", "-Φ/e"],
    correctAnswer: 3,
    explanation: "Rewriting the equation: V_s = (h/e)f - (Φ/e). This is of the form y = mx + c, so the y-intercept (c) is -Φ/e."
  },
  {
    id: "easy-71",
    question: "In the equation V_s = (h/e)f - (Φ/e), the slope of the graph is:",
    options: ["h", "e", "h/e", "e/h"],
    correctAnswer: 2,
    explanation: "The equation is V_s = (h/e)f - (Φ/e). The slope is the coefficient of f, which is h/e."
  },
  {
    id: "easy-72",
    question: "A photon can be considered a 'particle' because it:",
    options: ["Has mass", "Has a specific location and path", "Carries a discrete amount of energy", "Is affected by gravity"],
    correctAnswer: 2,
    explanation: "The key particle-like property of a photon is that it carries a discrete, quantized packet of energy (E = hf)."
  },
  {
    id: "easy-73",
    question: "The concept that light is made of photons resolves the problem in blackbody radiation known as:",
    options: ["The ultraviolet catastrophe", "The infrared disaster", "The photoelectric paradox", "The quantum dilemma"],
    correctAnswer: 0,
    explanation: "Classical physics predicted infinite energy at short wavelengths (UV catastrophe). Planck's quantum hypothesis solved this by quantizing energy."
  },
  {
    id: "easy-74",
    question: "What is the approximate energy range (in eV) of a photon of visible light?",
    options: ["1.5 eV to 3.0 eV", "0.1 eV to 1.0 eV", "10 eV to 100 eV", "1000 eV to 10000 eV"],
    correctAnswer: 0,
    explanation: "Red light is about 1.8 eV, violet light is about 3.1 eV. So the visible range is approximately 1.5 eV to 3.0 eV."
  },
  {
    id: "easy-75",
    question: "Which of the following is evidence for the particle nature of light?",
    options: ["Interference patterns", "Diffraction", "The photoelectric effect", "Polarization"],
    correctAnswer: 2,
    explanation: "The photoelectric effect is a key evidence for the particle nature of light (photons). The other options are evidence for the wave nature."
  },
  {
    id: "easy-76",
    question: "What is the term for the emission of electrons from a material when light shines on it?",
    options: ["Electromagnetic induction", "Photoemission", "Radiation pressure", "Quantum tunneling"],
    correctAnswer: 1,
    explanation: "The emission of electrons is called photoemission, and the ejected electrons are called photoelectrons."
  },
  {
    id: "easy-77",
    question: "What physical quantity did Planck assume was quantized to solve the blackbody radiation problem?",
    options: ["The speed of light", "The energy of oscillators", "The wavelength of light", "The charge of an electron"],
    correctAnswer: 1,
    explanation: "Planck proposed that the energy of the oscillating atoms in the blackbody could only be integer multiples of a smallest unit: E = nhf."
  },
  {
    id: "easy-78",
    question: "The energy of a photon is 4.0 eV. What is the energy of 3 such photons?",
    options: ["4.0 eV", "7.0 eV", "12.0 eV", "64.0 eV"],
    correctAnswer: 2,
    explanation: "The total energy would be the sum of the energies of the individual photons: 4.0 eV + 4.0 eV + 4.0 eV = 12.0 eV."
  },
  {
    id: "easy-79",
    question: "What is the name of the principle that states that light has both wave-like and particle-like properties?",
    options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Wave-Particle Duality", "Correspondence Principle"],
    correctAnswer: 2,
    explanation: "Wave-particle duality is the concept that all particles, including light, exhibit both wave and particle properties."
  },
  {
    id: "easy-80",
    question: "Which type of electromagnetic radiation is used in photovoltaic cells (solar cells)?",
    options: ["Visible light", "Radio waves", "X-rays", "Gamma rays"],
    correctAnswer: 0,
    explanation: "Solar cells primarily use visible light (and some near-infrared) to generate electricity through the photoelectric effect."
  },
  {
    id: "easy-81",
    question: "What is the primary energy conversion that takes place in a photocell?",
    options: ["Light to sound", "Light to electricity", "Electricity to light", "Heat to light"],
    correctAnswer: 1,
    explanation: "A photocell (or photovoltaic cell) converts light energy (from photons) into electrical energy (via ejected electrons)."
  },
  {
    id: "easy-82",
    question: "The photoelectric effect is used in:",
    options: ["Light bulbs", "Solar calculators", "Microwave ovens", "Electric heaters"],
    correctAnswer: 1,
    explanation: "Solar calculators use photovoltaic cells which operate on the principle of the photoelectric effect to convert light into electricity."
  },
  {
    id: "easy-83",
    question: "What happens to the current in a photocell if the intensity of light increases?",
    options: ["Current increases", "Current decreases", "Current stays the same", "Current becomes zero"],
    correctAnswer: 0,
    explanation: "Current is proportional to the number of electrons ejected per second. More intensity means more photons, which eject more electrons, increasing the current."
  },
  {
    id: "easy-84",
    question: "What happens to the current in a photocell if the frequency of light increases (above threshold)?",
    options: ["Current increases", "Current decreases", "Current stays the same", "It depends on the material"],
    correctAnswer: 2,
    
    explanation: "The current depends on the number of electrons ejected, which depends on the number of photons (intensity), not their individual energy (frequency). So if only frequency increases and intensity stays the same, the current remains unchanged."
  },
  {
    id: "easy-85",
    question: "A metal has a work function of 2.0 eV. Which color of light might eject electrons from it?",
    options: ["Red (λ ≈ 700 nm, E ≈ 1.8 eV)", "Green (λ ≈ 550 nm, E ≈ 2.25 eV)", "Both", "Neither"],
    correctAnswer: 1,
    explanation: "The photon energy must be greater than or equal to the work function. Green light has ~2.25 eV > 2.0 eV, so it can eject electrons. Red light has ~1.8 eV < 2.0 eV, so it cannot."
  },
  {
    id: "easy-86",
    question: "What is the speed of an ejected photoelectron?",
    options: ["Always the speed of light", "Zero", "Less than the speed of light", "It depends on the photon energy"],
    correctAnswer: 3,
    explanation: "Photoelectrons are massive particles, so they travel at speeds less than light. Their speed depends on their kinetic energy, which comes from the excess energy of the photon (hf - Φ)."
  },
  {
    id: "easy-87",
    question: "The particle model of light explains why electrons are ejected:",
    options: ["After a delay", "Only with high intensity", "Immediately", "Only from certain metals"],
    correctAnswer: 2,
    explanation: "In the particle model, a single photon can transfer all its energy to a single electron instantly, causing immediate ejection if the energy is sufficient."
  },
  {
    id: "easy-88",
    question: "What is the approximate energy (in Joules) of a photon of yellow light (λ = 600 nm)? (h = 6.63 x 10⁻³⁴ J·s, c = 3 x 10⁸ m/s)",
    options: ["3.32 x 10⁻¹⁹ J", "6.63 x 10⁻³⁴ J", "1.99 x 10⁻²⁵ J", "2.00 x 10⁻¹⁸ J"],
    correctAnswer: 0,
    explanation: "E = hc / λ = (6.63e-34 * 3e8) / (600e-9) = (1.989e-25) / (6e-7) = 3.315 x 10⁻¹⁹ J."
  },
  {
    id: "easy-89",
    question: "The energy of a photon of wavelength 200 nm is E. What is the energy of a photon of wavelength 400 nm?",
    options: ["2E", "E", "E/2", "E/4"],
    correctAnswer: 2,
    explanation: "Energy is inversely proportional to wavelength. If wavelength doubles (200nm → 400nm), the energy is halved (E → E/2)."
  },
  {
    id: "easy-90",
    question: "The frequency of a photon is f. What is the frequency of a photon with twice the energy?",
    options: ["f", "2f", "f/2", "4f"],
    correctAnswer: 1,
    explanation: "Energy is directly proportional to frequency (E = hf). If energy doubles, frequency must also double (f → 2f)."
  },
  {
    id: "easy-91",
    question: "What is the momentum of a photon with energy E?",
    options: ["E/c", "Ec", "E/c²", "Zero"],
    correctAnswer: 0,
    explanation: "For a photon, the momentum p is related to its energy E by the equation p = E / c."
  },
  {
    id: "easy-92",
    question: "Compared to a radio wave photon, a gamma ray photon has:",
    options: ["Lower energy and lower momentum", "Higher energy and higher momentum", "Higher energy but lower momentum", "Lower energy but higher momentum"],
    correctAnswer: 1,
    explanation: "Gamma rays have much higher frequency and energy than radio waves. Since p = E/c and c is constant, higher energy also means higher momentum."
  },
  {
    id: "easy-93",
    question: "What is the approximate momentum of a photon of green light (λ = 500 nm)? (h = 6.63 x 10⁻³⁴ J·s)",
    options: ["1.33 x 10⁻²⁷ kg·m/s", "6.63 x 10⁻³⁴ kg·m/s", "3.00 x 10⁸ kg·m/s", "1.99 x 10⁻²⁵ kg·m/s"],
    correctAnswer: 0,
    explanation: "p = h / λ = 6.63 x 10⁻³⁴ J·s / 500 x 10⁻⁹ m = 1.326 x 10⁻²⁷ kg·m/s."
  },
  {
    id: "easy-94",
    question: "The pressure exerted by light on a surface is due to the transfer of ______ from the photons to the surface.",
    options: ["Energy", "Charge", "Mass", "Momentum"],
    correctAnswer: 3,
    explanation: "Light pressure, or radiation pressure, results from photons transferring their momentum to a surface when they are absorbed or reflected."
  },
  {
    id: "easy-95",
    question: "Which of the following is NOT explained by the particle model of light?",
    options: ["Photoelectric effect", "Blackbody radiation spectrum", "Interference and diffraction", "Emission of light from atoms"],
    correctAnswer: 2,
    explanation: "Interference and diffraction are wave phenomena. They are not directly explained by treating light solely as particles; the wave model is needed."
  },
  {
    id: "easy-96",
    question: "The quantization of light energy means that light:",
    options: ["Travels in straight lines", "Is emitted and absorbed in discrete packets", "Can be polarized", "Can be reflected"],
    correctAnswer: 1,
    explanation: "Quantization means that light energy is not continuous but comes in discrete, indivisible packets called photons."
  },
  {
    id: "easy-97",
    question: "What is the term for the minimum energy needed to free an electron from a metal?",
    options: ["Binding energy", "Work function", "Threshold energy", "Ionization energy"],
    correctAnswer: 1,
    explanation: "The work function (Φ) is the specific term for the minimum energy required to remove an electron from the surface of a metal."
  },
  {
    id: "easy-98",
    question: "The work function is usually expressed in:",
    options: ["Joules (J)", "Hertz (Hz)", "Electronvolts (eV)", "Volts (V)"],
    correctAnswer: 2,
    explanation: "Because the energies involved are very small, the work function is most conveniently expressed in electronvolts (eV). 1 eV = 1.6 x 10⁻¹⁹ J."
  },
  {
    id: "easy-99",
    question: "If light of a certain frequency ejects electrons from metal X but not from metal Y, what can be concluded?",
    options: ["Metal X has a higher work function", "Metal Y has a higher work function", "The intensity is too low for Y", "The frequency is too high for Y"],
    correctAnswer: 1,
    explanation: "For ejection, hf must be ≥ Φ. If the same frequency ejects from X but not Y, it means Φ_Y > hf ≥ Φ_X. So metal Y has a higher work function than metal X."
  },
  {
    id: "easy-100",
    question: "The quantum theory of radiation was first proposed to explain the spectrum of:",
    options: ["Hydrogen atom", "Blackbody radiation", "The photoelectric effect", "X-rays"],
    correctAnswer: 1,
    explanation: "Max Planck introduced the quantum hypothesis in 1900 to derive a formula that correctly described the observed spectrum of blackbody radiation."
  },
    {
    id: "easy-101",
    question: "What is the primary reason ultraviolet light can cause sunburn, while visible light cannot?",
    options: [
      "UV light is more intense",
      "UV photons have higher energy",
      "UV light has a higher speed",
      "The sun emits more UV light"
    ],
    correctAnswer: 1,
    explanation: "UV photons have higher energy (E = hf) than visible light photons. This higher energy can damage skin cells and cause sunburn, whereas visible light lacks sufficient energy per photon to cause this damage."
  },
  {
    id: "easy-102",
    question: "A photon has an energy of 10 eV. What is its wavelength? (Use hc ≈ 1240 eV·nm)",
    options: ["124 nm", "248 nm", "496 nm", "1240 nm"],
    correctAnswer: 0,
    explanation: "Using the formula λ = hc / E, we get λ = 1240 eV·nm / 10 eV = 124 nm. This is in the ultraviolet range."
  },
  {
    id: "easy-103",
    question: "What does the threshold frequency depend on?",
    options: [
      "The intensity of light",
      "The type of metal",
      "The surface area of the metal",
      "The time of exposure"
    ],
    correctAnswer: 1,
    explanation: "The threshold frequency (f₀ = Φ/h) depends on the work function (Φ), which is a property specific to the type of metal. Different metals have different work functions."
  },
  {
    id: "easy-104",
    question: "If the work function of a metal is high, its threshold frequency is:",
    options: ["Low", "High", "Zero", "Unaffected"],
    correctAnswer: 1,
    explanation: "Since f₀ = Φ / h, the threshold frequency is directly proportional to the work function. A high work function means a high threshold frequency is needed to eject electrons."
  },
  {
    id: "easy-105",
    question: "Which metal typically has one of the lowest work functions, making it sensitive to visible light?",
    options: ["Gold", "Copper", "Sodium", "Iron"],
    correctAnswer: 2,
    explanation: "Cesium and sodium have relatively low work functions (around 2.1 eV for sodium), which means their threshold frequencies are in the visible light range."
  },
  {
    id: "easy-106",
    question: "What is the approximate work function of sodium metal?",
    options: ["1.0 eV", "2.3 eV", "4.0 eV", "5.1 eV"],
    correctAnswer: 1,
    explanation: "The work function of sodium is approximately 2.28 eV, often rounded to 2.3 eV for calculation purposes."
  },
  {
    id: "easy-107",
    question: "The photoelectric effect is an example of an interaction between light and:",
    options: ["Matter", "Electric fields", "Magnetic fields", "Other photons"],
    correctAnswer: 0,
    explanation: "The photoelectric effect is a quantum phenomenon that demonstrates the interaction between light (photons) and matter (electrons in a metal)."
  },
  {
    id: "easy-108",
    question: "In the particle model, what is 'brightness' of light most closely related to?",
    options: [
      "The energy of each photon",
      "The speed of the photons",
      "The number of photons per second",
      "The wavelength of the photons"
    ],
    correctAnswer: 2,
    explanation: "The brightness or intensity of light is perceived by the number of photons striking our eyes per second. More photons per second result in a brighter perception."
  },
  {
    id: "easy-109",
    question: "What is the energy of 5 photons, each with energy 2 eV?",
    options: ["2 eV", "5 eV", "7 eV", "10 eV"],
    correctAnswer: 3,
    explanation: "The total energy is the sum of the energies of the individual photons: 5 photons × 2 eV/photon = 10 eV."
  },
  {
    id: "easy-110",
    question: "A source emits light of a single frequency. To increase the energy of each photon, you must:",
    options: [
      "Increase the intensity",
      "Increase the frequency",
      "Increase the exposure time",
      "Move the source closer"
    ],
    correctAnswer: 1,
    explanation: "The energy of a photon depends only on its frequency (E = hf). To increase the energy, you must increase the frequency of the light."
  },
  {
    id: "easy-111",
    question: "What is the frequency of a photon with wavelength 300 nm? (c = 3 × 10⁸ m/s)",
    options: ["1 × 10¹⁵ Hz", "5 × 10¹⁵ Hz", "1 × 10¹⁶ Hz", "8 × 10¹⁴ Hz"],
    correctAnswer: 0,
    explanation: "First, convert nm to m: 300 nm = 300 × 10⁻⁹ m = 3 × 10⁻⁷ m. Then, f = c / λ = (3 × 10⁸ m/s) / (3 × 10⁻⁷ m) = 1 × 10¹⁵ Hz."
  },
  {
    id: "easy-112",
    question: "The equation E = hf applies to:",
    options: [
      "Only photons",
      "Only electrons",
      "All particles",
      "Only charged particles"
    ],
    correctAnswer: 0,
    explanation: "The equation E = hf is specifically for photons, which are quanta of electromagnetic radiation. For particles with mass, different energy equations apply (e.g., E = mc² for rest energy)."
  },
  {
    id: "easy-113",
    question: "What is the main difference between a photon and an electron?",
    options: [
      "A photon has mass, an electron does not",
      "An electron has charge, a photon does not",
      "A photon has higher energy",
      "An electron travels faster"
    ],
    correctAnswer: 1,
    explanation: "An electron has a negative electrical charge (-1.6 × 10⁻¹⁹ C). A photon is neutral and has no electric charge."
  },
  {
    id: "easy-114",
    question: "Which of the following is a unit of energy?",
    options: ["Hertz (Hz)", "Joule (J)", "Volt (V)", "Ampere (A)"],
    correctAnswer: 1,
    explanation: "The Joule (J) is the SI unit of energy. The electronvolt (eV) is also a common unit of energy in atomic and quantum physics."
  },
  {
    id: "easy-115",
    question: "What is the value of 1 electronvolt (1 eV) in Joules?",
    options: [
      "1.6 × 10⁻¹⁹ J",
      "6.63 × 10⁻³⁴ J",
      "3.0 × 10⁸ J",
      "1 J"
    ],
    correctAnswer: 0,
    explanation: "1 eV is defined as the amount of kinetic energy gained by an electron when it is accelerated through an electric potential difference of 1 volt. 1 eV = 1.602 × 10⁻¹⁹ J."
  },
  {
    id: "easy-116",
    question: "The energy of a photon is 3 × 10⁻¹⁹ J. What is this energy in electronvolts?",
    options: ["1.87 eV", "3.0 eV", "4.14 eV", "5.0 eV"],
    correctAnswer: 0,
    explanation: "To convert from joules to eV, divide by the conversion factor: E = (3 × 10⁻¹⁹ J) / (1.6 × 10⁻¹⁹ J/eV) ≈ 1.875 eV, or approximately 1.87 eV."
  },
  {
    id: "easy-117",
    question: "What is the approximate energy in eV of a photon with a frequency of 7.5 × 10¹⁴ Hz? (h = 4.14 × 10⁻¹⁵ eV·s)",
    options: ["1.5 eV", "3.1 eV", "4.5 eV", "5.8 eV"],
    correctAnswer: 1,
    explanation: "E = hf = (4.14 × 10⁻¹⁵ eV·s) × (7.5 × 10¹⁴ Hz) = (4.14 × 7.5) × 10⁻¹ = 31.05 × 10⁻¹ = 3.105 eV ≈ 3.1 eV."
  },
  {
    id: "easy-118",
    question: "The wave nature of light is characterized by its wavelength and frequency. The particle nature is characterized by its:",
    options: [
      "Energy and momentum",
      "Speed and charge",
      "Mass and volume",
      "Color and brightness"
    ],
    correctAnswer: 0,
    explanation: "The particle nature of light is characterized by the energy (E = hf) and momentum (p = h/λ) of its photons."
  },
  {
    id: "easy-119",
    question: "What is the term for the emission of light by a material when it is exposed to light of a higher frequency?",
    options: [
      "Phosphorescence",
      "Fluorescence",
      "Incandescence",
      "Photoemission"
    ],
    correctAnswer: 1,
    explanation: "Fluorescence is the emission of light by a substance that has absorbed light or other electromagnetic radiation. Often, the emitted light has a longer wavelength (lower energy) than the absorbed radiation."
  },
  {
    id: "easy-120",
    question: "In fluorescence, the wavelength of the emitted light is usually ______ than the wavelength of the absorbed light.",
    options: ["Shorter", "Longer", "The same", "Unpredictable"],
    correctAnswer: 1,
    explanation: "Some energy is lost to vibration or heat within the material, so the emitted photon has less energy than the absorbed photon. Since E = hc/λ, lower energy means longer wavelength."
  },
  {
    id: "easy-121",
    question: "Which scientist's theory of light was overthrown by the evidence from the photoelectric effect?",
    options: [
      "Planck's quantum theory",
      "Einstein's relativity",
      "Newton's corpuscular theory",
      "Huygens' wave theory"
    ],
    correctAnswer: 3,
    explanation: "While Huygens' wave theory was successful in explaining many phenomena, it completely failed to explain the photoelectric effect. The quantum (particle) model was needed."
  },
  {
    id: "easy-122",
    question: "What is the order of the electromagnetic spectrum from lowest to highest photon energy?",
    options: [
      "Radio, Microwave, IR, Visible, UV, X-ray, Gamma",
      "Gamma, X-ray, UV, Visible, IR, Microwave, Radio",
      "Visible, UV, IR, X-ray, Gamma, Radio, Microwave",
      "Radio, Visible, UV, IR, Microwave, X-ray, Gamma"
    ],
    correctAnswer: 0,
    explanation: "Radio waves have the lowest frequency and thus the lowest photon energy. Gamma rays have the highest frequency and thus the highest photon energy."
  },
  {
    id: "easy-123",
    question: "A photon of which color would have the least momentum?",
    options: ["Violet", "Blue", "Green", "Red"],
    correctAnswer: 3,
    explanation: "Momentum p = h/λ. Red light has the longest wavelength, so it would have the smallest momentum."
  },
  {
    id: "easy-124",
    question: "If a photon is reflected perfectly from a surface, the momentum transfer is ______ if it were absorbed.",
    options: [
      "The same as",
      "Half of",
      "Twice",
      "Four times"
    ],
    correctAnswer: 2,
    explanation: "When a photon is absorbed, its momentum p is transferred. When it is reflected, its momentum changes from +p to -p, a total change of 2p. So, reflection transfers twice the momentum as absorption."
  },
  {
    id: "easy-125",
    question: "The concept that light is quantized was first introduced to explain the spectrum of:",
    options: [
      "The hydrogen atom",
      "Blackbody radiation",
      "The photoelectric effect",
      "X-ray production"
    ],
    correctAnswer: 1,
    explanation: "Max Planck proposed the quantum hypothesis in 1900 to derive a formula that matched the observed spectrum of blackbody radiation, which classical physics could not explain."
  },
  {
    id: "easy-126",
    question: "What is the name for a device that converts light energy directly into electrical energy?",
    options: [
      "Generator",
      "Photocell",
      "Transformer",
      "Capacitor"
    ],
    correctAnswer: 1,
    explanation: "A photocell, or photovoltaic cell, operates on the principle of the photoelectric effect to convert light energy into electrical energy."
  },
  {
    id: "easy-127",
    question: "In a photocell, the photocurrent is measured in:",
    options: ["Volts (V)", "Amperes (A)", "Joules (J)", "Hertz (Hz)"],
    correctAnswer: 1,
    explanation: "Current, including photocurrent, is measured in Amperes (A)."
  },
  {
    id: "easy-128",
    question: "What is the name of the electrode from which electrons are emitted in a photocell?",
    options: [
      "Anode",
      "Cathode",
      "Emitter",
      "Collector"
    ],
    correctAnswer: 1,
    explanation: "The cathode is the negatively charged electrode. In a photocell, it is the cathode that is illuminated and emits photoelectrons."
  },
  {
    id: "easy-129",
    question: "What is the name of the electrode that collects the emitted electrons in a photocell?",
    options: [
      "Anode",
      "Cathode",
      "Emitter",
      "Base"
    ],
    correctAnswer: 0,
    explanation: "The anode is the positively charged electrode. It attracts and collects the negatively charged photoelectrons emitted from the cathode, creating a current."
  },
  {
    id: "easy-130",
    question: "The maximum kinetic energy of photoelectrons is measured by finding the:",
    options: [
      "Current at high intensity",
      "Stopping potential",
      "Threshold frequency",
      "Work function"
    ],
    correctAnswer: 1,
    explanation: "The stopping potential (Vₛ) is the reverse voltage needed to stop the most energetic photoelectrons. The maximum kinetic energy is then K.E._max = e * Vₛ."
  },
  {
    id: "easy-131",
    question: "If the stopping potential is 1.5 V, the maximum kinetic energy of the electrons is:",
    options: ["1.5 J", "1.5 eV", "1.5 V", "1.5 N"],
    correctAnswer: 1,
    explanation: "By definition, K.E._max = e * Vₛ. If Vₛ = 1.5 V, then K.E._max = 1.5 eV. (Note: 'eV' is the unit of energy, electronvolt)."
  },
  {
    id: "easy-132",
    question: "In the photoelectric equation K.E._max = hf - Φ, the term Φ represents:",
    options: [
      "The energy of the photon",
      "The kinetic energy",
      "The work function of the metal",
      "Planck's constant"
    ],
    correctAnswer: 2,
    explanation: "Φ (the Greek letter 'phi') is the standard symbol used to represent the work function of the metal."
  },
  {
    id: "easy-133",
    question: "What is the frequency of a photon with energy equal to the work function of sodium (2.28 eV)? (h = 4.14 × 10⁻¹⁵ eV·s)",
    options: [
      "5.51 × 10¹⁴ Hz",
      "2.28 × 10¹⁵ Hz",
      "1.10 × 10¹⁵ Hz",
      "9.44 × 10¹⁴ Hz"
    ],
    correctAnswer: 0,
    explanation: "At the threshold frequency, E_photon = Φ. So f₀ = Φ / h = 2.28 eV / 4.14 × 10⁻¹⁵ eV·s ≈ 5.51 × 10¹⁴ Hz."
  },
  {
    id: "easy-134",
    question: "A photon has a wavelength of 500 nm. What is its energy in eV? (hc ≈ 1240 eV·nm)",
    options: ["1.88 eV", "2.48 eV", "3.10 eV", "4.96 eV"],
    correctAnswer: 1,
    explanation: "E = hc / λ = 1240 eV·nm / 500 nm = 2.48 eV. This is the energy of a green photon."
  },
  {
    id: "easy-135",
    question: "Which of the following statements is TRUE for the photoelectric effect?",
    options: [
      "Electrons are ejected only if the light intensity is high enough.",
      "The kinetic energy of ejected electrons depends on the light intensity.",
      "Electrons are ejected only if the light frequency is above a certain value.",
      "There is a time delay between illumination and ejection."
    ],
    correctAnswer: 2,
    explanation: "This is a key point. Electrons are only ejected if the frequency of light is above the threshold frequency, regardless of the intensity."
  },
  {
    id: "easy-136",
    question: "Which of the following is NOT a characteristic of the photoelectric effect?",
    options: [
      "Immediate ejection of electrons",
      "K.E. of electrons depends on frequency",
      "Number of electrons depends on intensity",
      "Ejection occurs for any frequency with high enough intensity"
    ],
    correctAnswer: 3,
    explanation: "This is false. Ejection does NOT occur for any frequency. If the frequency is below the threshold, no electrons are ejected, no matter how high the intensity."
  },
  {
    id: "easy-137",
    question: "The photoelectric effect proves that light has:",
    options: [
      "Only wave properties",
      "Only particle properties",
      "Both wave and particle properties",
      "Neither wave nor particle properties"
    ],
    correctAnswer: 2,
    explanation: "The photoelectric effect demonstrates the particle-like behavior of light (photons). Other experiments, like diffraction, demonstrate its wave-like behavior. This is called wave-particle duality."
  },
  {
    id: "easy-138",
    question: "What happens to the photocurrent if the potential difference across the photocell is increased?",
    options: [
      "It increases linearly",
      "It decreases linearly",
      "It increases until it reaches a maximum",
      "It stays constant"
    ],
    correctAnswer: 2,
    explanation: "Initially, increasing the potential difference helps collect more electrons, increasing the current. However, once all ejected electrons are being collected (saturation current), further increase in voltage does not increase the current."
  },
  {
    id: "easy-139",
    question: "The saturation current in a photocell depends on the:",
    options: [
      "Frequency of light",
      "Intensity of light",
      "Stopping potential",
      "Work function"
    ],
    correctAnswer: 1,
    explanation: "The saturation current is the maximum current achieved when all emitted photoelectrons are collected. It is directly proportional to the intensity of light (number of photons per second)."
  },
  {
    id: "easy-140",
    question: "What is the speed of a photoelectron with kinetic energy 2 eV? (m_e = 9.1 × 10⁻³¹ kg, 1 eV = 1.6 × 10⁻¹⁹ J)",
    options: [
      "8.4 × 10⁵ m/s",
      "3.0 × 10⁸ m/s",
      "2.2 × 10⁶ m/s",
      "5.9 × 10⁵ m/s"
    ],
    correctAnswer: 0,
    explanation: "First, convert K.E. to joules: 2 eV × 1.6 × 10⁻¹⁹ J/eV = 3.2 × 10⁻¹⁹ J. Then use K.E. = ½mv². v = √(2 × K.E. / m) = √(2 × 3.2e-19 / 9.1e-31) ≈ √(7.03e11) ≈ 8.38 × 10⁵ m/s."
  },
  {
    id: "easy-141",
    question: "Compared to an X-ray photon, a microwave photon has:",
    options: [
      "Higher energy and longer wavelength",
      "Lower energy and longer wavelength",
      "Higher energy and shorter wavelength",
      "Lower energy and shorter wavelength"
    ],
    correctAnswer: 1,
    explanation: "Microwave photons have much lower frequency and energy than X-ray photons. Lower energy means longer wavelength (since E = hc/λ)."
  },
  {
    id: "easy-142",
    question: "What is the approximate ratio of the energy of a violet photon (400 nm) to a red photon (700 nm)?",
    options: ["7:4", "4:7", "49:16", "16:49"],
    correctAnswer: 0,
    explanation: "Energy is inversely proportional to wavelength. E_violet / E_red = λ_red / λ_violet = 700 nm / 400 nm = 7/4 or 7:4."
  },
  {
    id: "easy-143",
    question: "The particle model of light successfully explains:",
    options: [
      "Why light travels in straight lines",
      "Interference patterns",
      "Diffraction effects",
      "Polarization"
    ],
    correctAnswer: 0,
    explanation: "The particle model can explain why light seems to travel in straight lines (rectilinear propagation), similar to Newton's corpuscular theory. Wave phenomena like interference and diffraction require the wave model."
  },
  {
    id: "easy-144",
    question: "What is the term for the number of photons emitted per second by a light source?",
    options: [
      "Luminous flux",
      "Photon flux",
      "Quantum yield",
      "Spectral power"
    ],
    correctAnswer: 1,
    explanation: "Photon flux is the term for the number of photons passing through a unit area per unit time, often measured in photons per second."
  },
  {
    id: "easy-145",
    question: "A 10 W lamp emits monochromatic light of wavelength 600 nm. How many photons does it emit per second? (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
    options: [
      "3.0 × 10¹⁹",
      "6.0 × 10¹⁹",
      "3.0 × 10¹⁸",
      "6.0 × 10¹⁸"
    ],
    correctAnswer: 0,
    explanation: "Power = Energy/time = (Number of photons/sec) × (Energy per photon). First, E_photon = hc/λ = (6.63e-34 × 3e8) / (600e-9) = 3.315e-19 J. Then, Number of photons/sec = Total Power / E_photon = 10 W / 3.315e-19 J ≈ 3.02 × 10¹⁹ photons per second."
  },
  {
    id: "easy-146",
    question: "The quantum theory of light was essential for the development of:",
    options: [
      "Classical mechanics",
      "Thermodynamics",
      "Quantum mechanics",
      "Relativity"
    ],
    correctAnswer: 2,
    explanation: "Planck's quantum hypothesis and Einstein's explanation of the photoelectric effect were foundational steps that led directly to the development of quantum mechanics in the 1920s."
  },
  {
    id: "easy-147",
    question: "What is the name of the principle that states that you cannot simultaneously know the exact position and momentum of a particle?",
    options: [
      "Pauli Exclusion Principle",
      "Heisenberg Uncertainty Principle",
      "Correspondence Principle",
      "Aufbau Principle"
    ],
    correctAnswer: 1,
    explanation: "The Heisenberg Uncertainty Principle is a fundamental concept in quantum mechanics. While not directly about photons, it arises from the same wave-particle duality."
  },
  {
    id: "easy-148",
    question: "The discovery of the photoelectric effect and its explanation helped to establish that light has:",
    options: [
      "Mass",
      "Charge",
      "Momentum",
      "Volume"
    ],
    correctAnswer: 2,
    explanation: "The photoelectric effect showed that light could transfer energy to electrons. Later, Compton's experiment showed that light also transfers momentum, confirming the particle-like property p = h/λ."
  },
  {
    id: "easy-149",
    question: "What is the modern interpretation of light?",
    options: [
      "Light is only a wave",
      "Light is only a particle",
      "Light is neither a wave nor a particle",
      "Light exhibits properties of both waves and particles"
    ],
    correctAnswer: 3,
    explanation: "The modern interpretation is wave-particle duality. Light exhibits wave-like properties (interference, diffraction) and particle-like properties (photoelectric effect), depending on the experiment."
  },
  {
    id: "easy-150",
    question: "The energy of a photon is directly proportional to its:",
    options: [
      "Wavelength",
      "Frequency",
      "Speed",
      "Amplitude"
    ],
    correctAnswer: 1,
    explanation: "This is the fundamental equation of the particle nature of light: E = hf. The energy of a photon is directly proportional to its frequency."
  }


];

export const modernPhysicsQuestions = {
  easy: easyQuestions,
  
  
} as const;
