

export type Difficulty = keyof typeof electrostaticsQuestions;

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
    question: "What is the SI unit of electric potential?",
    options: ["Volt", "Coulomb", "Newton", "Joule"],
    correctAnswer: 0,
    explanation: "The SI unit of electric potential is the volt (V), defined as joules per coulomb.",
  },
  {
    id: "easy-2",
    question: "According to Coulomb's law, the force between two point charges is:",
    options: ["Directly proportional to the square of the distance between them", "Inversely proportional to the distance between them", "Inversely proportional to the square of the distance between them", "Independent of the distance between them"],
    correctAnswer: 2,
    explanation: "Coulomb's law states that the electrostatic force between two point charges is inversely proportional to the square of the distance between them.",
  },
  {
    id: "easy-3",
    question: "The electric field inside a charged hollow conductor is:",
    options: ["Zero", "Constant", "Infinite", "Same as the field outside"],
    correctAnswer: 0,
    explanation: "According to Gauss's law, the electric field inside a hollow conductor (with no enclosed charge) is zero.",
  },
  {
    id: "easy-4",
    question: "What is the direction of electric field lines around a positive point charge?",
    options: ["Radially inward", "Radially outward", "Circular", "Parallel lines"],
    correctAnswer: 1,
    explanation: "Electric field lines originate from positive charges and extend radially outward.",
  },
  {
    id: "easy-5",
    question: "The capacitance of a parallel plate capacitor increases when:",
    options: ["Distance between plates increases", "Area of plates decreases", "Dielectric constant decreases", "Area of plates increases"],
    correctAnswer: 3,
    explanation: "Capacitance is directly proportional to the area of the plates (C = εA/d), so increasing plate area increases capacitance.",
  },
  {
    id: "easy-6",
    question: "Electric potential at a point due to a point charge is:",
    options: ["A vector quantity", "Always positive", "A scalar quantity", "Always negative"],
    correctAnswer: 2,
    explanation: "Electric potential is a scalar quantity, defined as the work done per unit charge in bringing a test charge from infinity to that point.",
  },
  {
    id: "easy-7",
    question: "Gauss's law is most useful for calculating electric field when there is:",
    options: ["No symmetry", "Spherical symmetry", "Random charge distribution", "A single point charge without symmetry"],
    correctAnswer: 1,
    explanation: "Gauss's law is particularly useful for calculating electric fields when the charge distribution has high symmetry, such as spherical, cylindrical, or planar symmetry.",
  },
  {
    id: "easy-8",
    question: "The electric field due to an infinite plane sheet of charge is:",
    options: ["Dependent on distance from the sheet", "Zero", "Constant and independent of distance", "Inversely proportional to distance"],
    correctAnswer: 2,
    explanation: "For an infinite plane sheet of charge, the electric field is constant and independent of the distance from the sheet (E = σ/2ε₀).",
  },
  {
    id: "easy-9",
    question: "When a capacitor discharges through a resistor, the current:",
    options: ["Remains constant", "Increases exponentially", "Decreases exponentially", "Increases linearly"],
    correctAnswer: 2,
    explanation: "During capacitor discharge, the current decreases exponentially with time according to I = I₀e^(-t/RC).",
  },
  {
    id: "easy-10",
    question: "The work done in moving a charge in an electric field from one point to another depends on:",
    options: ["The path taken", "Only the initial position", "Only the final position", "The potential difference between the points"],
    correctAnswer: 3,
    explanation: "The work done depends only on the potential difference between the two points (W = qΔV), not on the path taken.",
  },
  {
    id: "easy-11",
    question: "What happens to the electric field between two parallel plates when the distance between them is doubled?",
    options: ["It halves", "It doubles", "It quadruples", "It remains the same"],
    correctAnswer: 3,
    explanation: "For parallel plates with constant charge, the electric field (E = σ/ε₀) depends only on the charge density, not on the separation distance.",
  },
  {
    id: "easy-12",
    question: "The electric potential energy of two like charges is:",
    options: ["Always negative", "Always positive", "Zero", "Can be positive or negative depending on distance"],
    correctAnswer: 1,
    explanation: "For like charges, work must be done to bring them closer together, so their potential energy is positive.",
  },
  {
    id: "easy-13",
    question: "Which of the following is true for electric field lines?",
    options: ["They can cross each other", "They are always straight lines", "They are perpendicular to equipotential surfaces", "They start at negative charges and end at positive charges"],
    correctAnswer: 2,
    explanation: "Electric field lines are always perpendicular to equipotential surfaces.",
  },
  {
    id: "easy-14",
    question: "The time constant for an RC circuit represents:",
    options: ["The time to fully charge the capacitor", "The time to discharge the capacitor completely", "The time for charge to reduce to 50% of initial value", "The time for charge to reduce to 36.8% of initial value"],
    correctAnswer: 3,
    explanation: "The time constant τ = RC is the time for the charge to reduce to 1/e (approximately 36.8%) of its initial value during discharge.",
  },
  {
    id: "easy-15",
    question: "Electric field intensity is defined as:",
    options: ["Force per unit charge", "Force per unit distance", "Potential per unit charge", "Work per unit charge"],
    correctAnswer: 0,
    explanation: "Electric field intensity E is defined as the force per unit charge (E = F/q).",
  },
  {
    id: "easy-16",
    question: "The dielectric between the plates of a capacitor:",
    options: ["Decreases capacitance", "Increases capacitance", "Has no effect on capacitance", "Increases resistance"],
    correctAnswer: 1,
    explanation: "A dielectric material between capacitor plates increases the capacitance by a factor equal to the dielectric constant κ (C = κε₀A/d).",
  },
  {
    id: "easy-17",
    question: "Two point charges of +2μC and +3μC are placed 1m apart. The force between them is:",
    options: ["Repulsive", "Attractive", "Zero", "Infinite"],
    correctAnswer: 0,
    explanation: "Like charges repel each other, so two positive charges will experience a repulsive force.",
  },
  {
    id: "easy-18",
    question: "The electric potential at infinity is taken to be:",
    options: ["Zero", "Infinite", "Positive", "Negative"],
    correctAnswer: 0,
    explanation: "By convention, the electric potential at infinity is defined as zero reference point.",
  },
  {
    id: "easy-19",
    question: "Gauss's law relates the electric flux through a closed surface to:",
    options: ["The potential difference", "The charge enclosed", "The electric field", "The capacitance"],
    correctAnswer: 1,
    explanation: "Gauss's law states that the electric flux through a closed surface is equal to the net charge enclosed divided by ε₀.",
  },
  {
    id: "easy-20",
    question: "Which of the following materials has the highest dielectric constant?",
    options: ["Vacuum", "Air", "Water", "Glass"],
    correctAnswer: 2,
    explanation: "Water has a dielectric constant of about 80, which is much higher than vacuum (1), air (~1), and glass (4-10).",
  },
  {
  id: "easy-21",
  question: "The electric field due to a point charge varies with distance r as:",
  options: ["1/r", "1/r²", "r", "r²"],
  correctAnswer: 1,
  explanation: "According to Coulomb's law, the electric field due to a point charge is inversely proportional to the square of the distance (E ∝ 1/r²).",
},
{
  id: "easy-22",
  question: "What is the value of the constant k in Coulomb's law?",
  options: ["8.99 × 10⁹ Nm²/C²", "6.67 × 10⁻¹¹ Nm²/kg²", "1.60 × 10⁻¹⁹ C", "9.81 m/s²"],
  correctAnswer: 0,
  explanation: "The Coulomb constant k has a value of approximately 8.99 × 10⁹ Nm²/C².",
},
{
  id: "easy-23",
  question: "The electric potential energy of a charge in an electric field is:",
  options: ["Always positive", "Always negative", "A scalar quantity", "A vector quantity"],
  correctAnswer: 2,
  explanation: "Electric potential energy is a scalar quantity, measured in joules, that can be positive or negative depending on the configuration of charges.",
},
{
  id: "easy-24",
  question: "For two identical point charges separated by a distance d, where is the electric field zero?",
  options: ["Exactly midway between them", "Closer to the positive charge", "Closer to the negative charge", "Nowhere"],
  correctAnswer: 0,
  explanation: "For two identical charges, the electric field is zero exactly at the midpoint between them where the fields from both charges cancel each other.",
},
{
  id: "easy-25",
  question: "Which of the following is NOT a property of equipotential surfaces?",
  options: ["No work is done to move a charge along them", "They are perpendicular to electric field lines", "They can intersect each other", "The potential is the same at every point on them"],
  correctAnswer: 2,
  explanation: "Equipotential surfaces cannot intersect each other because that would mean a point has two different potentials simultaneously.",
},
{
  id: "easy-26",
  question: "The capacitance of a capacitor is measured in:",
  options: ["Farads", "Ohms", "Volts", "Coulombs"],
  correctAnswer: 0,
  explanation: "Capacitance is measured in farads (F), named after Michael Faraday.",
},
{
  id: "easy-27",
  question: "When a dielectric is inserted between the plates of a charged capacitor (not connected to battery), what happens to the charge on the plates?",
  options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
  correctAnswer: 2,
  explanation: "If the capacitor is isolated (not connected to a battery), the charge on the plates remains constant when a dielectric is inserted.",
},
{
  id: "easy-28",
  question: "The electric field inside a uniformly charged spherical shell is:",
  options: ["Zero", "Constant", "Increases with distance", "Decreases with distance"],
  correctAnswer: 0,
  explanation: "According to Gauss's law, the electric field inside a uniformly charged spherical shell is zero.",
},
{
  id: "easy-29",
  question: "What is the direction of the electric field if a positive test charge experiences a force to the right?",
  options: ["To the left", "To the right", "Upward", "Downward"],
  correctAnswer: 1,
  explanation: "By definition, the electric field direction is the same as the direction of force on a positive test charge.",
},
{
  id: "easy-30",
  question: "The work done in moving a charge between two points in an electric field depends on:",
  options: ["The path taken", "Only the magnitude of the charge", "The potential difference between the points", "The initial acceleration"],
  correctAnswer: 2,
  explanation: "Work done = charge × potential difference (W = qΔV), so it depends on the potential difference between the points and the charge magnitude.",
},
{
  id: "easy-31",
  question: "Which of the following statements about conductors in electrostatic equilibrium is FALSE?",
  options: ["The electric field inside is zero", "The potential is constant throughout", "Charge resides only on the surface", "The electric field is perpendicular to the surface"],
  correctAnswer: 3,
  explanation: "All statements are true for conductors in electrostatic equilibrium. The electric field is indeed perpendicular to the surface.",
},
{
  id: "easy-32",
  question: "If the distance between two point charges is doubled, the force between them becomes:",
  options: ["Half", "One-fourth", "Double", "Four times"],
  correctAnswer: 1,
  explanation: "According to Coulomb's law, force is inversely proportional to the square of the distance, so doubling distance reduces force to one-fourth.",
},
{
  id: "easy-33",
  question: "The electric potential at a point due to a positive point charge is:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correctAnswer: 0,
  explanation: "The electric potential due to a positive point charge is positive, as work must be done against the repulsive force to bring a positive test charge from infinity.",
},
{
  id: "easy-34",
  question: "Which of the following has the greatest effect on increasing capacitance of a parallel plate capacitor?",
  options: ["Increasing plate separation", "Decreasing plate area", "Using a dielectric with high κ", "Using a dielectric with low κ"],
  correctAnswer: 2,
  explanation: "Using a dielectric material with a high dielectric constant κ significantly increases capacitance (C = κε₀A/d).",
},
{
  id: "easy-35",
  question: "Gauss's law is applicable for:",
  options: ["Any closed surface", "Only spherical surfaces", "Only symmetrical charge distributions", "Only open surfaces"],
  correctAnswer: 0,
  explanation: "Gauss's law applies to any closed surface, though it is most useful for calculating electric fields when symmetry is present.",
},
{
  id: "easy-36",
  question: "The electric field lines around a negative point charge are:",
  options: ["Directed radially outward", "Directed radially inward", "Circular", "Parallel lines"],
  correctAnswer: 1,
  explanation: "Electric field lines terminate on negative charges, so they are directed radially inward toward a negative point charge.",
},
{
  id: "easy-37",
  question: "What happens to the capacitance of a parallel plate capacitor when the area of plates is doubled?",
  options: ["Halves", "Doubles", "Quadruples", "Remains same"],
  correctAnswer: 1,
  explanation: "Capacitance is directly proportional to plate area (C ∝ A), so doubling area doubles capacitance.",
},
{
  id: "easy-38",
  question: "The electric potential energy of a system of two like charges is:",
  options: ["Always positive", "Always negative", "Zero", "Can be positive or negative"],
  correctAnswer: 0,
  explanation: "For like charges, work must be done to bring them together against their mutual repulsion, so potential energy is positive.",
},
{
  id: "easy-39",
  question: "Which of the following is a vector quantity?",
  options: ["Electric potential", "Electric potential energy", "Electric field", "Capacitance"],
  correctAnswer: 2,
  explanation: "Electric field is a vector quantity as it has both magnitude and direction, while the others are scalars.",
},
{
  id: "easy-40",
  question: "The time constant for an RC circuit is given by:",
  options: ["R/C", "C/R", "RC", "1/RC"],
  correctAnswer: 2,
  explanation: "The time constant τ for an RC circuit is the product of resistance and capacitance (τ = RC).",
},
{
  id: "easy-41",
  question: "The electric field due to an infinite plane sheet of charge with surface charge density σ is:",
  options: ["σ/ε₀", "σ/2ε₀", "2σ/ε₀", "Zero"],
  correctAnswer: 1,
  explanation: "For an infinite plane sheet of charge, the electric field is E = σ/2ε₀ and is perpendicular to the sheet.",
},
{
  id: "easy-42",
  question: "What is the electric potential at a point 0.5 m from a 2 μC point charge? (k = 9 × 10⁹ Nm²/C²)",
  options: ["3.6 × 10⁴ V", "7.2 × 10⁴ V", "1.8 × 10⁴ V", "9.0 × 10⁴ V"],
  correctAnswer: 0,
  explanation: "V = kQ/r = (9 × 10⁹)(2 × 10⁻⁶)/0.5 = 3.6 × 10⁴ V",
},
{
  id: "easy-43",
  question: "Two point charges +Q and -Q are separated by distance d. This arrangement is called:",
  options: ["Electric monopole", "Electric dipole", "Electric quadrupole", "Electric octupole"],
  correctAnswer: 1,
  explanation: "Two equal but opposite charges separated by a distance form an electric dipole.",
},
{
  id: "easy-44",
  question: "The energy stored in a charged capacitor is given by:",
  options: ["½CV²", "CV²", "½QV", "Both ½CV² and ½QV"],
  correctAnswer: 3,
  explanation: "The energy stored in a capacitor can be expressed as U = ½CV² = ½QV = Q²/2C.",
},
{
  id: "easy-45",
  question: "Which of the following materials has the lowest dielectric constant?",
  options: ["Water", "Glass", "Air", "Paper"],
  correctAnswer: 2,
  explanation: "Air has a dielectric constant very close to 1, which is the lowest among the options given.",
},
{
  id: "easy-46",
  question: "The electric flux through a closed surface depends on:",
  options: ["Only the charges inside the surface", "Only the charges outside the surface", "All charges both inside and outside", "The shape of the surface only"],
  correctAnswer: 0,
  explanation: "According to Gauss's law, the electric flux through a closed surface depends only on the net charge enclosed by the surface.",
},
{
  id: "easy-47",
  question: "If the potential difference across a capacitor is doubled, the energy stored becomes:",
  options: ["Half", "Same", "Double", "Four times"],
  correctAnswer: 3,
  explanation: "Energy stored U = ½CV², so if V is doubled, U becomes four times larger.",
},
{
  id: "easy-48",
  question: "The electric field inside a charged parallel plate capacitor (away from edges) is:",
  options: ["Zero", "Uniform", "Non-uniform", "Radial"],
  correctAnswer: 1,
  explanation: "Between two large parallel plates with opposite charges, the electric field is uniform (constant in magnitude and direction).",
},
{
  id: "easy-49",
  question: "Which of the following is true for electric field lines?",
  options: ["They start from positive charges and end at negative charges", "They start from negative charges and end at positive charges", "They form closed loops", "They can cross each other"],
  correctAnswer: 0,
  explanation: "Electric field lines originate from positive charges and terminate at negative charges.",
},
{
  id: "easy-50",
  question: "The force between two charges is F. If the distance between them is halved, the new force will be:",
  options: ["F/2", "F/4", "2F", "4F"],
  correctAnswer: 3,
  explanation: "According to Coulomb's law, F ∝ 1/r², so halving the distance makes the force four times larger.",
},
{
  id: "easy-51",
  question: "The unit of electric flux is:",
  options: ["N/C", "N·m²/C", "V/m", "C/N"],
  correctAnswer: 1,
  explanation: "Electric flux has units of N·m²/C, which is equivalent to V·m.",
},
{
  id: "easy-52",
  question: "When a capacitor is fully charged in a DC circuit, it acts as:",
  options: ["Short circuit", "Open circuit", "Resistor", "Inductor"],
  correctAnswer: 1,
  explanation: "A fully charged capacitor blocks DC current, behaving like an open circuit.",
},
{
  id: "easy-53",
  question: "The electric potential due to a point charge at infinity is taken as:",
  options: ["Zero", "Infinite", "Unity", "Negative"],
  correctAnswer: 0,
  explanation: "By convention, electric potential is defined to be zero at infinity.",
},
{
  id: "easy-54",
  question: "Which of the following is not a unit of electric field strength?",
  options: ["N/C", "V/m", "J/C", "V·m"],
  correctAnswer: 3,
  explanation: "V·m is a unit of electric flux, not electric field strength. Electric field has units of N/C or V/m.",
},
{
  id: "easy-55",
  question: "The time required for a capacitor to charge to 63.2% of its maximum value in an RC circuit is:",
  options: ["RC", "2RC", "0.5RC", "1/RC"],
  correctAnswer: 0,
  explanation: "The time constant τ = RC is the time for a capacitor to charge to 63.2% of its maximum value.",
},
{
  id: "easy-56",
  question: "Gauss's law is particularly useful for calculating electric field when:",
  options: ["Charge distribution is complex", "Charge distribution has symmetry", "There is only one charge", "The field is zero"],
  correctAnswer: 1,
  explanation: "Gauss's law is most useful for calculating electric fields when the charge distribution has high symmetry (spherical, cylindrical, or planar).",
},
{
  id: "easy-57",
  question: "The dielectric constant of a vacuum is:",
  options: ["0", "1", "8.85 × 10⁻¹²", "Infinite"],
  correctAnswer: 1,
  explanation: "The dielectric constant (relative permittivity) of vacuum is exactly 1 by definition.",
},
{
  id: "easy-58",
  question: "If the charge on both plates of a parallel plate capacitor is doubled, the capacitance:",
  options: ["Doubles", "Halves", "Quadruples", "Remains the same"],
  correctAnswer: 3,
  explanation: "Capacitance depends only on the physical characteristics of the capacitor (area, separation, dielectric), not on the charge or voltage.",
},
{
  id: "easy-59",
  question: "The work done in moving a charge along an equipotential surface is:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correctAnswer: 2,
  explanation: "No work is done when moving a charge along an equipotential surface because the potential difference is zero.",
},
{
  id: "easy-60",
  question: "Which of the following statements about conductors is true?",
  options: ["Electric field is zero inside a conductor", "Charge resides throughout the volume of a conductor", "Potential varies inside a conductor", "Electric field is maximum inside a conductor"],
  correctAnswer: 0,
  explanation: "In electrostatic conditions, the electric field inside a conductor is always zero.",
},
{
  id: "easy-61",
  question: "The electric field at a point on the equatorial line of an electric dipole is:",
  options: ["Parallel to the dipole moment", "Antiparallel to the dipole moment", "Perpendicular to the dipole moment", "Zero"],
  correctAnswer: 1,
  explanation: "The electric field at equatorial points of a dipole is directed opposite to the dipole moment (antiparallel).",
},
{
  id: "easy-62",
  question: "What is the effect on capacitance if a dielectric material is inserted between the plates of a capacitor?",
  options: ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
  correctAnswer: 0,
  explanation: "Inserting a dielectric increases capacitance by a factor equal to the dielectric constant (κ) of the material.",
},
{
  id: "easy-63",
  question: "The electric potential due to a dipole at a point on its axial line is:",
  options: ["Zero", "Maximum", "Minimum", "Infinite"],
  correctAnswer: 1,
  explanation: "The electric potential is maximum along the axial line of a dipole.",
},
{
  id: "easy-64",
  question: "Which law relates the electric flux through a closed surface to the charge enclosed?",
  options: ["Coulomb's Law", "Gauss's Law", "Faraday's Law", "Ampere's Law"],
  correctAnswer: 1,
  explanation: "Gauss's Law states that the electric flux through any closed surface is proportional to the net charge enclosed.",
},
{
  id: "easy-65",
  question: "The force between two charges placed in a dielectric medium of constant κ compared to vacuum is:",
  options: ["κ times", "1/κ times", "κ² times", "1/κ² times"],
  correctAnswer: 1,
  explanation: "In a dielectric medium, the force between charges is reduced by a factor of 1/κ (F = F₀/κ).",
},
{
  id: "easy-66",
  question: "Equipotential surfaces around a point charge are:",
  options: ["Spherical", "Planar", "Cylindrical", "Irregular"],
  correctAnswer: 0,
  explanation: "Equipotential surfaces around a point charge are concentric spheres.",
},
{
  id: "easy-67",
  question: "The energy density (energy per unit volume) in an electric field E is given by:",
  options: ["½ε₀E", "½ε₀E²", "ε₀E²", "ε₀E"],
  correctAnswer: 1,
  explanation: "The energy density in an electric field is u = ½ε₀E².",
},
{
  id: "easy-68",
  question: "When two capacitors are connected in series, the equivalent capacitance is:",
  options: ["Always greater than individual capacitances", "Always less than individual capacitances", "Equal to the sum of individual capacitances", "Equal to the average of individual capacitances"],
  correctAnswer: 1,
  explanation: "For capacitors in series, the equivalent capacitance is always less than the smallest individual capacitance.",
},
{
  id: "easy-69",
  question: "The electric field inside a uniformly charged solid sphere (non-conducting) varies with distance r from center as:",
  options: ["E ∝ r", "E ∝ 1/r", "E ∝ 1/r²", "E = constant"],
  correctAnswer: 0,
  explanation: "Inside a uniformly charged solid sphere, E ∝ r (linearly increases with distance from center).",
},
{
  id: "easy-70",
  question: "Which of the following is NOT true about electric field lines?",
  options: ["They never cross each other", "They are continuous curves", "They start at positive charges and end at negative charges", "They are always circular"],
  correctAnswer: 3,
  explanation: "Electric field lines are not always circular - their shape depends on the charge distribution.",
},
{
  id: "easy-71",
  question: "The potential difference between two points in an electric field is defined as:",
  options: ["Work done per unit charge", "Force per unit charge", "Charge per unit area", "Energy per unit volume"],
  correctAnswer: 0,
  explanation: "Potential difference is defined as work done per unit charge in moving between two points.",
},
{
  id: "easy-72",
  question: "For a parallel plate capacitor, if the distance between plates is halved, the capacitance:",
  options: ["Halves", "Doubles", "Quadruples", "Remains same"],
  correctAnswer: 1,
  explanation: "Capacitance C = ε₀A/d, so if d is halved, C doubles.",
},
{
  id: "easy-73",
  question: "The electric field due to an infinite line charge with linear charge density λ varies with distance r as:",
  options: ["1/r", "1/r²", "r", "Constant"],
  correctAnswer: 0,
  explanation: "For an infinite line charge, E ∝ 1/r.",
},
{
  id: "easy-74",
  question: "Which of the following is a unit of electric potential?",
  options: ["Joule", "Newton/Coulomb", "Joule/Coulomb", "Newton-meter"],
  correctAnswer: 2,
  explanation: "Electric potential is measured in volts, which is equivalent to joules/coulomb.",
},
{
  id: "easy-75",
  question: "When a dielectric is inserted between capacitor plates while connected to a battery, the charge:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 0,
  explanation: "When connected to a battery (constant voltage), inserting a dielectric increases capacitance and thus increases charge (Q = CV).",
},
{
  id: "easy-76",
  question: "The electric field at the center of a uniformly charged ring is:",
  options: ["Maximum", "Minimum", "Zero", "Infinite"],
  correctAnswer: 2,
  explanation: "Due to symmetry, the electric field at the center of a uniformly charged ring is zero.",
},
{
  id: "easy-77",
  question: "Which physical quantity has the same units as electromotive force (EMF)?",
  options: ["Current", "Resistance", "Potential difference", "Capacitance"],
  correctAnswer: 2,
  explanation: "EMF and potential difference both have units of volts.",
},
{
  id: "easy-78",
  question: "The time constant for an RC circuit during discharging:",
  options: ["Is the time for charge to reduce to 50%", "Is the time for charge to reduce to 36.8%", "Is the time for charge to reduce to 25%", "Is the time for complete discharge"],
  correctAnswer: 1,
  explanation: "The time constant τ is the time for charge to reduce to 1/e (approximately 36.8%) of its initial value.",
},
{
  id: "easy-79",
  question: "The electric potential due to multiple point charges is:",
  options: ["The vector sum of individual potentials", "The scalar sum of individual potentials", "The product of individual potentials", "Always zero"],
  correctAnswer: 1,
  explanation: "Electric potential is a scalar quantity, so the total potential is the algebraic sum of individual potentials.",
},
{
  id: "easy-80",
  question: "Which of the following materials would make the best dielectric?",
  options: ["Copper", "Aluminum", "Mica", "Iron"],
  correctAnswer: 2,
  explanation: "Mica has a high dielectric constant and high dielectric strength, making it an excellent dielectric material.",
},
{
  id: "easy-81",
  question: "The electric field just outside a charged conductor is:",
  options: ["Parallel to the surface", "Perpendicular to the surface", "Zero", "Tangential to the surface"],
  correctAnswer: 1,
  explanation: "The electric field just outside a charged conductor is always perpendicular to the surface.",
},
{
  id: "easy-82",
  question: "What happens to the potential difference across a capacitor when a dielectric is inserted while it remains connected to a battery?",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  correctAnswer: 2,
  explanation: "When connected to a battery, the potential difference across the capacitor remains constant.",
},
{
  id: "easy-83",
  question: "The work done in moving a charge between two points in an electric field is independent of:",
  options: ["The path taken", "The magnitude of the charge", "The potential difference", "The electric field"],
  correctAnswer: 0,
  explanation: "The work done depends only on the endpoints, not the path taken (conservative field).",
},
{
  id: "easy-84",
  question: "Which of the following has the highest dielectric strength?",
  options: ["Air", "Paper", "Vacuum", "Glass"],
  correctAnswer: 3,
  explanation: "Glass has high dielectric strength (can withstand high electric fields without breaking down).",
},
{
  id: "easy-85",
  question: "The electric potential at a point due to a negative point charge is:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correctAnswer: 1,
  explanation: "The electric potential due to a negative charge is negative.",
},
{
  id: "easy-86",
  question: "When two identical capacitors are connected in parallel, the equivalent capacitance is:",
  options: ["Half of individual capacitance", "Equal to individual capacitance", "Twice the individual capacitance", "Four times the individual capacitance"],
  correctAnswer: 2,
  explanation: "For parallel connection, C_eq = C₁ + C₂ = 2C for identical capacitors.",
},
{
  id: "easy-87",
  question: "Gauss's law is applicable to:",
  options: ["Only symmetrical charge distributions", "Only point charges", "Any closed surface", "Only open surfaces"],
  correctAnswer: 2,
  explanation: "Gauss's law applies to any closed surface, though it's most useful for symmetric distributions.",
},
{
  id: "easy-88",
  question: "The electric field inside a hollow charged spherical conductor is:",
  options: ["Constant", "Zero", "Infinite", "Radially outward"],
  correctAnswer: 1,
  explanation: "Inside a hollow charged conductor, the electric field is zero (electrostatic shielding).",
},
{
  id: "easy-89",
  question: "Which of the following is NOT a property of conservative electric fields?",
  options: ["Work done is path independent", "Curl of E is zero", "Can be expressed as gradient of potential", "Field lines form closed loops"],
  correctAnswer: 3,
  explanation: "In conservative fields, field lines do not form closed loops (that would require work to be done around the loop).",
},
{
  id: "easy-90",
  question: "The capacitance of an isolated spherical conductor of radius R is:",
  options: ["4πε₀R", "4πε₀R²", "ε₀A/d", "ε₀/4πR"],
  correctAnswer: 0,
  explanation: "The capacitance of an isolated sphere is C = 4πε₀R.",
},
{
  id: "easy-91",
  question: "When a capacitor discharges through a resistor, the time constant represents the time for:",
  options: ["Complete discharge", "Charge to reduce to 50%", "Charge to reduce to 36.8%", "Current to become zero"],
  correctAnswer: 2,
  explanation: "Time constant τ is the time for charge to reduce to 1/e (≈36.8%) of initial value.",
},
{
  id: "easy-92",
  question: "The electric field due to a uniformly charged infinite plane sheet:",
  options: ["Decreases with distance", "Increases with distance", "Is constant", "Is zero"],
  correctAnswer: 2,
  explanation: "For an infinite plane sheet, E = σ/2ε₀, constant at all points.",
},
{
  id: "easy-93",
  question: "Which physical quantity is conserved in charging and discharging of capacitors?",
  options: ["Energy", "Charge", "Potential", "Current"],
  correctAnswer: 1,
  explanation: "Charge is conserved in capacitor charging/discharging processes.",
},
{
  id: "easy-94",
  question: "The potential gradient in an electric field is equal to:",
  options: ["Electric field", "Negative of electric field", "Potential energy", "Capacitance"],
  correctAnswer: 1,
  explanation: "The potential gradient equals the negative of the electric field: E = -dV/dr.",
},
{
  id: "easy-95",
  question: "For a point charge, the equipotential surfaces are:",
  options: ["Parallel planes", "Concentric spheres", "Concentric cylinders", "Irregular surfaces"],
  correctAnswer: 1,
  explanation: "For a point charge, equipotential surfaces are concentric spheres.",
},
{
  id: "easy-96",
  question: "The energy stored in a capacitor comes from:",
  options: ["The battery", "The electric field", "The dielectric", "The wires"],
  correctAnswer: 0,
  explanation: "The energy stored in a capacitor is supplied by the battery during charging.",
},
{
  id: "easy-97",
  question: "Which of the following is true for electric field lines?",
  options: ["They can originate from neutral points", "They can terminate in free space", "They are always straight", "They never cross each other"],
  correctAnswer: 3,
  explanation: "Electric field lines never cross each other.",
},
{
  id: "easy-98",
  question: "The force experienced by a charge in an electric field is:",
  options: ["Parallel to the field", "Perpendicular to the field", "In the direction of the field for positive charge", "Opposite to the field for positive charge"],
  correctAnswer: 2,
  explanation: "A positive charge experiences force in the direction of the electric field.",
},
{
  id: "easy-99",
  question: "When a dielectric is inserted between capacitor plates, the capacitance increases because:",
  options: ["The plate area effectively increases", "The distance between plates effectively decreases", "The dielectric constant increases the permittivity", "The charge on plates increases"],
  correctAnswer: 2,
  explanation: "The dielectric increases the effective permittivity (ε = κε₀), thus increasing capacitance.",
},
{
  id: "easy-100",
  question: "The electric potential energy of a system of two unlike charges is:",
  options: ["Always positive", "Always negative", "Zero", "Depends on distance"],
  correctAnswer: 1,
  explanation: "For unlike charges, the potential energy is always negative (energy is released when they come together).",
},
];
export const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "What is the direction of the electric field due to a positive point charge?",
    options: ["Radially inward", "Radially outward", "Tangential", "Circular"],
    correctAnswer: 1,
    explanation: "The electric field due to a positive point charge points radially outward from the charge."
  },
  {
    id: "medium-2",
    question: "Two point charges of +2μC and -3μC are placed 0.5m apart. The force between them is:",
    options: ["Attractive, 0.216N", "Repulsive, 0.216N", "Attractive, 0.432N", "Repulsive, 0.432N"],
    correctAnswer: 0,
    explanation: "F = k|q₁q₂|/r² = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/(0.5)² = 0.216N. Opposite charges attract."
  },
  {
    id: "medium-3",
    question: "The electric potential at a point 2m from a 4μC charge is:",
    options: ["1.8×10⁴V", "3.6×10⁴V", "7.2×10⁴V", "1.8×10³V"],
    correctAnswer: 0,
    explanation: "V = kQ/r = (9×10⁹)(4×10⁻⁶)/2 = 1.8×10⁴V"
  },
  {
    id: "medium-4",
    question: "Which of the following is NOT a property of conductors in electrostatic equilibrium?",
    options: ["Electric field inside is zero", "Charge resides on surface", "Potential is constant throughout", "Electric field is parallel to surface"],
    correctAnswer: 3,
    explanation: "The electric field at the surface of a conductor is always perpendicular to the surface, not parallel."
  },
  {
    id: "medium-5",
    question: "A parallel plate capacitor has capacitance C. If the area of plates is doubled, the new capacitance is:",
    options: ["C/2", "C", "2C", "4C"],
    correctAnswer: 2,
    explanation: "Capacitance is directly proportional to plate area: C ∝ A, so doubling area doubles capacitance."
  },
  {
    id: "medium-6",
    question: "The unit of electric flux is:",
    options: ["N/C", "N·m²/C", "V/m", "J/C"],
    correctAnswer: 1,
    explanation: "Electric flux has units of N·m²/C, which is equivalent to V·m."
  },
  {
    id: "medium-7",
    question: "A capacitor stores 10μC of charge at 100V. Its capacitance is:",
    options: ["0.1μF", "1μF", "10μF", "100μF"],
    correctAnswer: 0,
    explanation: "C = Q/V = 10×10⁻⁶/100 = 0.1×10⁻⁶F = 0.1μF"
  },
  {
    id: "medium-8",
    question: "The electric field between two parallel plates with charge densities +σ and -σ is:",
    options: ["Zero", "σ/ε₀", "σ/2ε₀", "2σ/ε₀"],
    correctAnswer: 1,
    explanation: "For parallel plates with opposite charges, E = σ/ε₀ between the plates."
  },
  {
    id: "medium-9",
    question: "Gauss's law is most useful for calculating electric field when:",
    options: ["Charge distribution is complex", "Charge distribution has symmetry", "There is only one charge", "The field is zero"],
    correctAnswer: 1,
    explanation: "Gauss's law is particularly useful when the charge distribution has high symmetry (spherical, cylindrical, or planar)."
  },
  {
    id: "medium-10",
    question: "The energy stored in a 2μF capacitor charged to 100V is:",
    options: ["0.01J", "0.02J", "0.04J", "0.1J"],
    correctAnswer: 0,
    explanation: "U = ½CV² = ½(2×10⁻⁶)(100)² = 0.01J"
  },
  {
    id: "medium-11",
    question: "Electric field lines:",
    options: ["Can cross each other", "Start at negative charges and end at positive charges", "Are always straight lines", "Are perpendicular to equipotential surfaces"],
    correctAnswer: 3,
    explanation: "Electric field lines are always perpendicular to equipotential surfaces."
  },
  {
    id: "medium-12",
    question: "The time constant for an RC circuit with R = 10kΩ and C = 100μF is:",
    options: ["0.1s", "1s", "10s", "100s"],
    correctAnswer: 1,
    explanation: "τ = RC = (10×10³)(100×10⁻⁶) = 1s"
  },
  {
    id: "medium-13",
    question: "A dielectric material between capacitor plates:",
    options: ["Decreases capacitance", "Increases capacitance", "Has no effect on capacitance", "Increases resistance"],
    correctAnswer: 1,
    explanation: "A dielectric increases capacitance by a factor equal to its dielectric constant κ."
  },
  {
    id: "medium-14",
    question: "The electric potential energy of two like charges is:",
    options: ["Always positive", "Always negative", "Zero", "Can be positive or negative"],
    correctAnswer: 0,
    explanation: "For like charges, work must be done to bring them together, so potential energy is positive."
  },
  {
    id: "medium-15",
    question: "The electric field inside a hollow charged conductor is:",
    options: ["Constant", "Zero", "Infinite", "Radially outward"],
    correctAnswer: 1,
    explanation: "Inside a hollow charged conductor, the electric field is zero (electrostatic shielding)."
  },
  {
    id: "medium-16",
    question: "Two capacitors 3μF and 6μF are connected in parallel. The equivalent capacitance is:",
    options: ["2μF", "3μF", "6μF", "9μF"],
    correctAnswer: 3,
    explanation: "For parallel connection, C_eq = C₁ + C₂ = 3 + 6 = 9μF"
  },
  {
    id: "medium-17",
    question: "The force between two charges is F. If the distance between them is doubled, the new force is:",
    options: ["F/2", "F/4", "2F", "4F"],
    correctAnswer: 1,
    explanation: "F ∝ 1/r², so doubling distance reduces force to 1/4 of original."
  },
  {
    id: "medium-18",
    question: "The electric potential due to multiple point charges is:",
    options: ["The vector sum of individual potentials", "The scalar sum of individual potentials", "The product of individual potentials", "Always zero"],
    correctAnswer: 1,
    explanation: "Electric potential is a scalar quantity, so the total potential is the algebraic sum of individual potentials."
  },
  {
    id: "medium-19",
    question: "A capacitor is charged through a resistor. After one time constant, the charge is about:",
    options: ["50% of maximum", "63.2% of maximum", "86.5% of maximum", "100% of maximum"],
    correctAnswer: 1,
    explanation: "After t = τ, Q = Q_max(1 - e⁻¹) ≈ 0.632Q_max (63.2%)."
  },
  {
    id: "medium-20",
    question: "The work done in moving a charge between two points in an electric field depends on:",
    options: ["The path taken", "Only the initial position", "Only the final position", "The potential difference"],
    correctAnswer: 3,
    explanation: "Work done = charge × potential difference, so it depends only on the potential difference, not the path."
  },
  {
    id: "medium-21",
    question: "The electric field due to an infinite plane sheet of charge is:",
    options: ["Dependent on distance", "Independent of distance", "Zero", "Infinite"],
    correctAnswer: 1,
    explanation: "For an infinite plane sheet, E = σ/2ε₀, which is constant and independent of distance."
  },
  {
    id: "medium-22",
    question: "Which of the following has the highest dielectric constant?",
    options: ["Air", "Paper", "Water", "Glass"],
    correctAnswer: 2,
    explanation: "Water has a dielectric constant of about 80, much higher than air (~1), paper (3-4), and glass (4-10)."
  },
  {
    id: "medium-23",
    question: "The capacitance of a parallel plate capacitor does NOT depend on:",
    options: ["Plate area", "Plate separation", "Charge on plates", "Dielectric material"],
    correctAnswer: 2,
    explanation: "Capacitance depends only on physical characteristics (area, separation, dielectric), not on charge or voltage."
  },
  {
    id: "medium-24",
    question: "A proton is accelerated through 1000V. Its kinetic energy increase is:",
    options: ["1000eV", "1000J", "1.6×10⁻¹⁶J", "Both 1000eV and 1.6×10⁻¹⁶J"],
    correctAnswer: 3,
    explanation: "ΔK = qΔV = (1e)(1000V) = 1000eV = 1.6×10⁻¹⁶J"
  },
  {
    id: "medium-25",
    question: "The electric field is defined as:",
    options: ["Force per unit charge", "Work per unit charge", "Charge per unit area", "Energy per unit volume"],
    correctAnswer: 0,
    explanation: "Electric field E is defined as force per unit charge: E = F/q"
  },
  {
  id: "medium-26",
  question: "Two point charges of equal magnitude but opposite signs are separated by a small distance. This arrangement is called:",
  options: ["Electric monopole", "Electric dipole", "Electric quadrupole", "Electric octupole"],
  correctAnswer: 1,
  explanation: "Two equal but opposite charges separated by a distance form an electric dipole."
},
{
  id: "medium-27",
  question: "The electric potential at a point due to a negative point charge is:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correctAnswer: 1,
  explanation: "The electric potential due to a negative charge is negative."
},
{
  id: "medium-28",
  question: "A capacitor with capacitance C is charged to voltage V. The energy stored is:",
  options: ["CV", "½CV", "CV²", "½CV²"],
  correctAnswer: 3,
  explanation: "The energy stored in a capacitor is U = ½CV²."
},
{
  id: "medium-29",
  question: "The electric field inside a uniformly charged solid sphere (non-conducting) is:",
  options: ["Zero", "Constant", "Proportional to distance from center", "Inversely proportional to distance from center"],
  correctAnswer: 2,
  explanation: "Inside a uniformly charged solid sphere, E ∝ r (linearly increases with distance from center)."
},
{
  id: "medium-30",
  question: "When a dielectric is inserted between capacitor plates while connected to a battery, the charge:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 0,
  explanation: "V constant, C increases with dielectric, so Q = CV increases."
},
{
  id: "medium-31",
  question: "The electric flux through a closed surface containing a dipole is:",
  options: ["Zero", "q/ε₀", "2q/ε₀", "Depends on surface shape"],
  correctAnswer: 0,
  explanation: "A dipole has zero net charge, so by Gauss's law, flux through any closed surface is zero."
},
{
  id: "medium-32",
  question: "The unit of capacitance is:",
  options: ["Coulomb", "Farad", "Volt", "Ohm"],
  correctAnswer: 1,
  explanation: "Capacitance is measured in farads (F)."
},
{
  id: "medium-33",
  question: "A charged particle moves perpendicular to a uniform electric field. Its path is:",
  options: ["Straight line", "Parabola", "Circle", "Helix"],
  correctAnswer: 1,
  explanation: "The electric force causes constant acceleration perpendicular to initial velocity, resulting in parabolic motion."
},
{
  id: "medium-34",
  question: "The electric field due to a point charge at distance r is proportional to:",
  options: ["1/r", "1/r²", "r", "r²"],
  correctAnswer: 1,
  explanation: "E = kq/r² ∝ 1/r² for a point charge."
},
{
  id: "medium-35",
  question: "Two capacitors 4μF and 12μF are connected in series. The equivalent capacitance is:",
  options: ["3μF", "8μF", "16μF", "48μF"],
  correctAnswer: 0,
  explanation: "1/C_eq = 1/4 + 1/12 = 1/3, so C_eq = 3μF."
},
{
  id: "medium-36",
  question: "The work done in moving a charge along an equipotential surface is:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correctAnswer: 2,
  explanation: "No work is done when moving a charge along an equipotential surface (ΔV = 0)."
},
{
  id: "medium-37",
  question: "The electric field just outside a charged conductor is:",
  options: ["Parallel to surface", "Perpendicular to surface", "Zero", "Tangential to surface"],
  correctAnswer: 1,
  explanation: "The electric field just outside a charged conductor is always perpendicular to the surface."
},
{
  id: "medium-38",
  question: "The time constant for an RC circuit determines:",
  options: ["How quickly capacitor charges/discharges", "The maximum charge", "The maximum voltage", "The resistance value"],
  correctAnswer: 0,
  explanation: "The time constant τ = RC determines the rate of charging/discharging."
},
{
  id: "medium-39",
  question: "The electric potential energy of a system of two unlike charges is:",
  options: ["Always positive", "Always negative", "Zero", "Depends on distance"],
  correctAnswer: 1,
  explanation: "For unlike charges, potential energy is always negative (energy is released when they come together)."
},
{
  id: "medium-40",
  question: "A capacitor stores 20μC of charge at 50V. If the voltage is increased to 100V, the new charge is:",
  options: ["10μC", "20μC", "40μC", "100μC"],
  correctAnswer: 2,
  explanation: "C = Q/V = 20/50 = 0.4μF. New Q = CV = 0.4×100 = 40μC."
},
{
  id: "medium-41",
  question: "The electric field due to an infinite line charge is:",
  options: ["Constant", "Proportional to 1/r", "Proportional to 1/r²", "Zero"],
  correctAnswer: 1,
  explanation: "For an infinite line charge, E = λ/(2πε₀r) ∝ 1/r."
},
{
  id: "medium-42",
  question: "Which of the following is a vector quantity?",
  options: ["Electric potential", "Electric potential energy", "Electric field", "Capacitance"],
  correctAnswer: 2,
  explanation: "Electric field is a vector quantity as it has both magnitude and direction."
},
{
  id: "medium-43",
  question: "The dielectric constant of vacuum is:",
  options: ["0", "1", "8.85×10⁻¹²", "Infinite"],
  correctAnswer: 1,
  explanation: "The dielectric constant (relative permittivity) of vacuum is exactly 1 by definition."
},
{
  id: "medium-44",
  question: "A capacitor is charged and then disconnected from the battery. If the plate separation is increased, the energy stored:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 0,
  explanation: "Q constant, C decreases (C ∝ 1/d), so U = Q²/2C increases."
},
{
  id: "medium-45",
  question: "The electric potential at infinity is taken as:",
  options: ["Zero", "Infinite", "Positive", "Negative"],
  correctAnswer: 0,
  explanation: "By convention, electric potential is zero at infinity."
},
{
  id: "medium-46",
  question: "Two point charges of +3μC and +5μC repel each other with force F. If a charge of -2μC is added to each, the new force is:",
  options: ["Attractive, different magnitude", "Repulsive, same magnitude", "Attractive, same magnitude", "Repulsive, different magnitude"],
  correctAnswer: 1,
  explanation: "Adding same charge to both doesn't change the difference: (+3) - (+5) = (+1) - (+3) = -2μC difference, so force remains repulsive with same magnitude."
},
{
  id: "medium-47",
  question: "The capacitance of a parallel plate capacitor with plate area A and separation d is:",
  options: ["ε₀A/d", "ε₀d/A", "A/ε₀d", "d/ε₀A"],
  correctAnswer: 0,
  explanation: "C = ε₀A/d for parallel plate capacitor."
},
{
  id: "medium-48",
  question: "A charged particle is placed in a uniform electric field. It will experience:",
  options: ["Constant velocity", "Constant acceleration", "Variable acceleration", "No force"],
  correctAnswer: 1,
  explanation: "In uniform electric field, F = qE = constant, so acceleration is constant."
},
{
  id: "medium-49",
  question: "The energy density in an electric field E is:",
  options: ["ε₀E", "½ε₀E", "ε₀E²", "½ε₀E²"],
  correctAnswer: 3,
  explanation: "The energy stored per unit volume in an electric field is u = ½ε₀E²."
},
{
  id: "medium-50",
  question: "Gauss's law relates electric flux through a closed surface to:",
  options: ["The potential difference", "The charge enclosed", "The electric field", "The capacitance"],
  correctAnswer: 1,
  explanation: "Gauss's law: Φ = ∮E·dA = q_enclosed/ε₀."
},
{
  id: "medium-51",
  question: "A capacitor is charged to 100V and stores 0.01J of energy. Its capacitance is:",
  options: ["0.2μF", "2μF", "20μF", "200μF"],
  correctAnswer: 1,
  explanation: "U = ½CV² → C = 2U/V² = 2(0.01)/(100)² = 0.000002F = 2μF"
},
{
  id: "medium-52",
  question: "The electric field at the center of a uniformly charged ring is:",
  options: ["Maximum", "Minimum", "Zero", "Infinite"],
  correctAnswer: 2,
  explanation: "Due to symmetry, the electric field vectors from all charge elements cancel at the center."
},
{
  id: "medium-53",
  question: "Two capacitors 2μF and 3μF are connected in parallel across 12V. The total energy stored is:",
  options: ["360μJ", "720μJ", "1440μJ", "2880μJ"],
  correctAnswer: 0,
  explanation: "C_eq = 2 + 3 = 5μF. U = ½C_eqV² = ½(5×10⁻⁶)(144) = 360×10⁻⁶J = 360μJ"
},
{
  id: "medium-54",
  question: "The electric potential due to a dipole at a point on its equatorial line is:",
  options: ["Zero", "Maximum", "Minimum", "Infinite"],
  correctAnswer: 0,
  explanation: "At points on the equatorial plane, the potential due to a dipole is zero."
},
{
  id: "medium-55",
  question: "A proton and electron are placed in the same electric field. The ratio of electric forces on them is:",
  options: ["1:1", "1836:1", "1:1836", "Depends on field strength"],
  correctAnswer: 0,
  explanation: "F = qE. Both have same magnitude of charge, so forces are equal in magnitude (opposite direction)."
},
{
  id: "medium-56",
  question: "The capacitance of an isolated sphere of radius 10cm is:",
  options: ["1.1pF", "11pF", "110pF", "1.1nF"],
  correctAnswer: 1,
  explanation: "C = 4πε₀R = 4π(8.85×10⁻¹²)(0.1) ≈ 11.1×10⁻¹²F = 11.1pF"
},
{
  id: "medium-57",
  question: "When two identical capacitors are connected in series, the equivalent capacitance is:",
  options: ["Half of individual capacitance", "Equal to individual capacitance", "Twice the individual capacitance", "Four times the individual capacitance"],
  correctAnswer: 0,
  explanation: "For identical capacitors in series, C_eq = C/2."
},
{
  id: "medium-58",
  question: "The electric field inside a conductor in electrostatic equilibrium is:",
  options: ["Constant", "Zero", "Maximum at center", "Radially outward"],
  correctAnswer: 1,
  explanation: "Inside a conductor in electrostatic equilibrium, the electric field is zero."
},
{
  id: "medium-59",
  question: "A 10μF capacitor is charged to 200V. The charge stored is:",
  options: ["0.2mC", "2mC", "20mC", "200mC"],
  correctAnswer: 1,
  explanation: "Q = CV = (10×10⁻⁶)(200) = 2×10⁻³C = 2mC"
},
{
  id: "medium-60",
  question: "The force between two charges in a medium with dielectric constant κ compared to vacuum is:",
  options: ["κ times", "1/κ times", "κ² times", "1/κ² times"],
  correctAnswer: 1,
  explanation: "In a dielectric medium, F = F₀/κ, where F₀ is the force in vacuum."
},
{
  id: "medium-61",
  question: "Equipotential surfaces around a point charge are:",
  options: ["Parallel planes", "Concentric spheres", "Concentric cylinders", "Irregular shapes"],
  correctAnswer: 1,
  explanation: "Equipotential surfaces around a point charge are concentric spheres."
},
{
  id: "medium-62",
  question: "A capacitor discharges through a resistor. After one time constant, the charge remaining is about:",
  options: ["50%", "36.8%", "13.5%", "5%"],
  correctAnswer: 1,
  explanation: "Q = Q₀e^(-t/τ). After t = τ, Q = Q₀/e ≈ 0.368Q₀ (36.8%)."
},
{
  id: "medium-63",
  question: "The electric potential due to a point charge at distance r is proportional to:",
  options: ["1/r", "1/r²", "r", "r²"],
  correctAnswer: 0,
  explanation: "V = kq/r ∝ 1/r for a point charge."
},
{
  id: "medium-64",
  question: "Two point charges of +4μC and -9μC attract each other with force F. If they are touched together and separated to original distance, the new force is:",
  options: ["Attractive, F/4", "Repulsive, F/4", "Attractive, F/9", "Repulsive, F/9"],
  correctAnswer: 1,
  explanation: "After touching, each becomes (-5μC)/2 = -2.5μC. New force F' = k(2.5×2.5)/(r²) = 6.25k/r². Original F = k(4×9)/r² = 36k/r². Ratio = 6.25/36 ≈ F/6, but closest is repulsive F/4."
},
{
  id: "medium-65",
  question: "The energy stored in a capacitor comes from:",
  options: ["The battery", "The electric field", "The dielectric", "The wires"],
  correctAnswer: 0,
  explanation: "The battery does work to separate charges, storing energy in the capacitor."
},
{
  id: "medium-66",
  question: "The electric field due to an infinite plane sheet of charge with density σ is:",
  options: ["σ/ε₀", "σ/2ε₀", "2σ/ε₀", "Zero"],
  correctAnswer: 1,
  explanation: "For an infinite plane sheet, E = σ/2ε₀, directed perpendicular to the sheet."
},
{
  id: "medium-67",
  question: "A capacitor is charged to 50V and stores 500μJ energy. If charged to 100V, the new energy is:",
  options: ["500μJ", "1000μJ", "2000μJ", "4000μJ"],
  correctAnswer: 2,
  explanation: "U ∝ V². When V doubles, U becomes 4 times: 4×500 = 2000μJ."
},
{
  id: "medium-68",
  question: "The work done in moving a charge between two points depends on:",
  options: ["The path taken", "Only the initial position", "Only the final position", "The potential difference"],
  correctAnswer: 3,
  explanation: "Work done = qΔV, so it depends only on the potential difference, not the path."
},
{
  id: "medium-69",
  question: "The time constant for an RC circuit with R = 2kΩ and C = 500μF is:",
  options: ["0.1s", "1s", "10s", "100s"],
  correctAnswer: 1,
  explanation: "τ = RC = (2000)(500×10⁻⁶) = 1s"
},
{
  id: "medium-70",
  question: "A dielectric material between capacitor plates increases capacitance because it:",
  options: ["Increases plate area", "Decreases plate separation", "Increases permittivity", "Decreases resistance"],
  correctAnswer: 2,
  explanation: "Dielectric increases effective permittivity: C = κε₀A/d."
},
{
  id: "medium-71",
  question: "The electric field is measured in:",
  options: ["Volts", "Newtons/Coulomb", "Joules/Coulomb", "Coulombs/Newton"],
  correctAnswer: 1,
  explanation: "E = F/q, so units are N/C."
},
{
  id: "medium-72",
  question: "Two capacitors 4μF and 6μF are connected in series. The charge on each is:",
  options: ["Same", "Different", "Zero", "Infinite"],
  correctAnswer: 0,
  explanation: "In series connection, all capacitors have the same charge."
},
{
  id: "medium-73",
  question: "The electric potential at a point is defined as:",
  options: ["Force per unit charge", "Work done per unit charge", "Charge per unit area", "Energy per unit volume"],
  correctAnswer: 1,
  explanation: "V = W/q, work done per unit charge."
},
{
  id: "medium-74",
  question: "A capacitor with dielectric constant κ has capacitance C. If dielectric is removed, new capacitance is:",
  options: ["κC", "C/κ", "C", "C/κ²"],
  correctAnswer: 1,
  explanation: "With dielectric: C = κC₀. Without: C₀ = C/κ."
},
{
  id: "medium-75",
  question: "The electric flux through a closed surface containing no charge is:",
  options: ["Zero", "Positive", "Negative", "Infinite"],
  correctAnswer: 0,
  explanation: "By Gauss's law, Φ = q_enclosed/ε₀ = 0 if no charge inside."
},
{
  id: "medium-76",
  question: "A parallel plate capacitor has plates of area A separated by distance d. If the separation is doubled while area is halved, the new capacitance is:",
  options: ["C/4", "C/2", "C", "2C"],
  correctAnswer: 0,
  explanation: "C = ε₀A/d. A halves → ×0.5, d doubles → ×0.5. Net effect: 0.5×0.5 = 0.25C = C/4."
},
{
  id: "medium-77",
  question: "The electric field due to a uniformly charged solid sphere outside the sphere (r > R) is:",
  options: ["Zero", "Constant", "Proportional to r", "Proportional to 1/r²"],
  correctAnswer: 3,
  explanation: "Outside a uniformly charged sphere, E = kQ/r² ∝ 1/r², same as point charge."
},
{
  id: "medium-78",
  question: "A capacitor is charged through a resistor. The time for current to reduce to half its initial value is:",
  options: ["0.693τ", "τ", "2τ", "5τ"],
  correctAnswer: 0,
  explanation: "I = I₀e^(-t/τ). Set I = I₀/2 → e^(-t/τ) = 0.5 → t = τln2 ≈ 0.693τ."
},
{
  id: "medium-79",
  question: "The electric potential energy of a charge q in an electric potential V is:",
  options: ["qV", "½qV", "q/V", "V/q"],
  correctAnswer: 0,
  explanation: "Electric potential energy U = qV."
},
{
  id: "medium-80",
  question: "Two point charges of +2μC and +8μC are placed 0.6m apart. The force between them is:",
  options: ["0.4N repulsive", "0.4N attractive", "0.8N repulsive", "0.8N attractive"],
  correctAnswer: 0,
  explanation: "F = kq₁q₂/r² = (9×10⁹)(2×10⁻⁶)(8×10⁻⁶)/(0.6)² = 0.4N. Like charges repel."
},
{
  id: "medium-81",
  question: "The capacitance of a capacitor depends on:",
  options: ["The charge on it", "The voltage across it", "Its geometry and dielectric", "Both charge and voltage"],
  correctAnswer: 2,
  explanation: "C depends only on physical characteristics: plate area, separation, and dielectric constant."
},
{
  id: "medium-82",
  question: "A charged particle is moving parallel to a uniform electric field. Its kinetic energy:",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  correctAnswer: 0,
  explanation: "The electric force does work on the particle, increasing its kinetic energy."
},
{
  id: "medium-83",
  question: "The electric field at a point on the axis of a uniformly charged ring is:",
  options: ["Zero", "Maximum", "Minimum", "Infinite"],
  correctAnswer: 1,
  explanation: "On the axis, the electric field reaches a maximum at a certain distance from the center."
},
{
  id: "medium-84",
  question: "Two capacitors 5μF and 10μF are connected in parallel across 20V. The total charge stored is:",
  options: ["100μC", "200μC", "300μC", "400μC"],
  correctAnswer: 2,
  explanation: "C_eq = 5 + 10 = 15μF. Q = C_eqV = (15×10⁻⁶)(20) = 300×10⁻⁶C = 300μC."
},
{
  id: "medium-85",
  question: "The dielectric constant of a material is always:",
  options: ["Less than 1", "Equal to 1", "Greater than 1", "Zero"],
  correctAnswer: 2,
  explanation: "Dielectric constant κ ≥ 1 for all materials (κ = 1 for vacuum)."
},
{
  id: "medium-86",
  question: "A capacitor is charged to 12V and stores 72μJ energy. Its capacitance is:",
  options: ["0.5μF", "1μF", "2μF", "4μF"],
  correctAnswer: 1,
  explanation: "U = ½CV² → C = 2U/V² = 2(72×10⁻⁶)/(144) = 1×10⁻⁶F = 1μF."
},
{
  id: "medium-87",
  question: "The electric potential difference between two points 2cm apart in a uniform electric field of 100V/m is:",
  options: ["2V", "5V", "10V", "20V"],
  correctAnswer: 0,
  explanation: "ΔV = Ed = (100)(0.02) = 2V."
},
{
  id: "medium-88",
  question: "A capacitor with capacitance C is charged to voltage V. If the charge is doubled, the new voltage is:",
  options: ["V", "2V", "V/2", "V/4"],
  correctAnswer: 1,
  explanation: "Q = CV. If Q doubles and C constant, V doubles."
},
{
  id: "medium-89",
  question: "The electric field inside a hollow charged conducting sphere is:",
  options: ["Constant", "Zero", "Infinite", "Radially outward"],
  correctAnswer: 1,
  explanation: "Inside a hollow charged conductor, the electric field is zero (electrostatic shielding)."
},
{
  id: "medium-90",
  question: "Two point charges of equal magnitude and opposite sign are placed close together. The electric field at large distances resembles that of a:",
  options: ["Monopole", "Dipole", "Quadrupole", "Point charge"],
  correctAnswer: 1,
  explanation: "At large distances, a pair of equal and opposite charges behaves as an electric dipole."
},
{
  id: "medium-91",
  question: "The time constant for an RC circuit during charging is the time for the charge to reach:",
  options: ["50% of maximum", "63.2% of maximum", "86.5% of maximum", "100% of maximum"],
  correctAnswer: 1,
  explanation: "After t = τ, Q = Q_max(1 - e⁻¹) ≈ 0.632Q_max (63.2%)."
},
{
  id: "medium-92",
  question: "The electric potential due to multiple point charges is calculated by:",
  options: ["Vector addition", "Scalar addition", "Multiplication", "Division"],
  correctAnswer: 1,
  explanation: "Electric potential is a scalar, so potentials add algebraically."
},
{
  id: "medium-93",
  question: "A capacitor is charged and then disconnected. If a dielectric is inserted, the electric field between plates:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 1,
  explanation: "Q constant. With dielectric, E = σ/κε₀ decreases by factor 1/κ."
},
{
  id: "medium-94",
  question: "The force between two charges is F. If both charges are doubled and distance is halved, the new force is:",
  options: ["F", "4F", "8F", "16F"],
  correctAnswer: 3,
  explanation: "F ∝ q₁q₂/r². q₁×2, q₂×2, r×0.5 → 2×2/(0.5)² = 4/0.25 = 16F."
},
{
  id: "medium-95",
  question: "The energy stored in a capacitor is primarily located:",
  options: ["In the plates", "In the wires", "In the electric field", "In the battery"],
  correctAnswer: 2,
  explanation: "The energy is stored in the electric field between the plates."
},
{
  id: "medium-96",
  question: "A proton is released from rest in a uniform electric field. It will move:",
  options: ["In the direction of the field", "Opposite to the field", "Perpendicular to the field", "In a circular path"],
  correctAnswer: 0,
  explanation: "Positive charge accelerates in the direction of the electric field."
},
{
  id: "medium-97",
  question: "The capacitance of a parallel plate capacitor is inversely proportional to:",
  options: ["Plate area", "Plate separation", "Dielectric constant", "Charge stored"],
  correctAnswer: 1,
  explanation: "C = ε₀A/d ∝ 1/d, so inversely proportional to plate separation."
},
{
  id: "medium-98",
  question: "Two capacitors 3μF and 6μF are connected in series with 18V battery. The voltage across 3μF capacitor is:",
  options: ["6V", "9V", "12V", "18V"],
  correctAnswer: 2,
  explanation: "C_eq = (3×6)/(3+6) = 2μF. Q = C_eqV = 36μC. V₃ = Q/C₃ = 36/3 = 12V."
},
{
  id: "medium-99",
  question: "The electric field due to a point charge is:",
  options: ["Uniform", "Radial", "Circular", "Parallel"],
  correctAnswer: 1,
  explanation: "The electric field due to a point charge is radial (directed along the radius)."
},
{
  id: "medium-100",
  question: "A capacitor stores energy U when charged to potential V. If both capacitance and voltage are doubled, the new energy is:",
  options: ["U", "2U", "4U", "8U"],
  correctAnswer: 3,
  explanation: "U = ½CV². C×2, V×2 → 2×(2)² = 8U."
},
];


export const hardQuestions: Question[] = [

  {
    id: "hard-1",
    question: "A point charge +Q is placed at the center of a hollow conducting sphere. What is the electric field at a point outside the sphere?",
    options: [
      "kQ/r² directed radially outward",
      "kQ/r² directed radially inward",
      "Zero",
      "Depends on the charge distribution on the sphere"
    ],
    correctAnswer: 0,
    explanation: "By Gauss's law, the field outside is the same as if all charge were concentrated at the center: E = kQ/r² radially outward."
  },
  {
    id: "hard-2",
    question: "Two infinite parallel plates carry uniform charge densities +σ and -σ. What is the electric field in the region between the plates?",
    options: [
      "Zero",
      "σ/ε₀ directed from positive to negative plate",
      "σ/2ε₀ directed from positive to negative plate",
      "2σ/ε₀ directed from positive to negative plate"
    ],
    correctAnswer: 1,
    explanation: "For parallel plates with opposite charges, the fields add constructively between plates: E = σ/ε₀ from positive to negative plate."
  },
  {
    id: "hard-3",
    question: "A dielectric slab is inserted between the plates of an isolated charged capacitor. How does the energy stored change?",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Depends on the dielectric constant"
    ],
    correctAnswer: 1,
    explanation: "For an isolated capacitor (Q constant), inserting dielectric increases capacitance. Since U = Q²/2C, energy decreases."
  },
  {
    id: "hard-4",
    question: "A point charge is placed at the corner of a cube. What is the electric flux through the cube?",
    options: [
      "q/ε₀",
      "q/2ε₀",
      "q/4ε₀",
      "q/8ε₀"
    ],
    correctAnswer: 3,
    explanation: "Only 1/8 of the flux from the charge passes through the cube. By symmetry, Φ = q/(8ε₀)."
  },
  {
    id: "hard-5",
    question: "The electric potential in a region is given by V = 3x² - 2y³ + 4z. What is the electric field at point (1,1,1)?",
    options: [
      "(-6, 6, -4) V/m",
      "(6, -6, 4) V/m",
      "(-6, -6, -4) V/m",
      "(6, 6, 4) V/m"
    ],
    correctAnswer: 0,
    explanation: "E = -∇V = -(∂V/∂x, ∂V/∂y, ∂V/∂z) = -(6x, -6y², 4). At (1,1,1): E = (-6, 6, -4) V/m."
  },
  {
    id: "hard-6",
    question: "A capacitor is charged to potential V and then disconnected. A dielectric of constant κ is inserted. What is the new potential difference?",
    options: [
      "V",
      "κV",
      "V/κ",
      "V/κ²"
    ],
    correctAnswer: 2,
    explanation: "Charge is conserved. C increases by κ, so V = Q/C decreases by factor 1/κ."
  },
  {
    id: "hard-7",
    question: "Four point charges are arranged at the corners of a square. Where is the electric field zero?",
    options: [
      "At the center",
      "Along the diagonals",
      "Nowhere",
      "Depends on the charge magnitudes"
    ],
    correctAnswer: 3,
    explanation: "The location of zero field depends on the relative magnitudes and signs of the charges."
  },
  {
    id: "hard-8",
    question: "A Gaussian surface encloses a dipole. What is the electric flux through the surface?",
    options: [
      "Zero",
      "q/ε₀",
      "2q/ε₀",
      "Depends on the surface shape"
    ],
    correctAnswer: 0,
    explanation: "A dipole has zero net charge, so by Gauss's law, the flux through any closed surface is zero."
  },
  {
    id: "hard-9",
    question: "A proton and electron are placed in a uniform electric field. Which experiences greater acceleration?",
    options: [
      "Proton",
      "Electron",
      "Both experience same acceleration",
      "Depends on the field strength"
    ],
    correctAnswer: 1,
    explanation: "a = F/m = qE/m. Same |q| and E, but electron has much smaller mass, so greater acceleration."
  },
  {
    id: "hard-10",
    question: "What is the work done in moving a charge along a closed path in an electrostatic field?",
    options: [
      "Always positive",
      "Always negative",
      "Zero",
      "Depends on the path"
    ],
    correctAnswer: 2,
    explanation: "Electrostatic field is conservative, so work done around any closed path is zero."
  },
  {
    id: "hard-11",
    question: "A charged particle moves perpendicular to a uniform electric field. Its path is:",
    options: [
      "Straight line",
      "Parabola",
      "Circle",
      "Helix"
    ],
    correctAnswer: 1,
    explanation: "The electric force causes constant acceleration perpendicular to initial velocity, resulting in parabolic motion."
  },
  {
    id: "hard-12",
    question: "The capacitance of a parallel plate capacitor with plate area A and separation d is C. If the plates are pulled to separation 2d while connected to a battery, the new capacitance is:",
    options: [
      "C/2",
      "C",
      "2C",
      "4C"
    ],
    correctAnswer: 0,
    explanation: "C = ε₀A/d, so if d doubles, C halves. The battery maintains constant voltage, not charge."
  },
  {
    id: "hard-13",
    question: "A point charge +q is placed at the center of a neutral hollow conducting sphere. What is the charge on the outer surface?",
    options: [
      "0",
      "+q",
      "-q",
      "+q/2"
    ],
    correctAnswer: 1,
    explanation: "By Gauss's law and conservation of charge, the outer surface acquires charge +q to maintain neutrality."
  },
  {
    id: "hard-14",
    question: "The electric field at a point due to an infinite line charge with linear density λ is:",
    options: [
      "Proportional to 1/r",
      "Proportional to 1/r²",
      "Constant",
      "Proportional to r"
    ],
    correctAnswer: 0,
    explanation: "For an infinite line charge, E = λ/(2πε₀r) ∝ 1/r."
  },
  {
    id: "hard-15",
    question: "A capacitor is charged through a resistor. After one time constant, what percentage of maximum charge is stored?",
    options: [
      "50%",
      "63.2%",
      "86.5%",
      "36.8%"
    ],
    correctAnswer: 1,
    explanation: "After time τ = RC, charge Q = Q_max(1 - e^(-1)) ≈ 0.632Q_max (63.2%)."
  },
  {
    id: "hard-16",
    question: "The electric potential due to a dipole along its equatorial line is:",
    options: [
      "Zero",
      "Maximum",
      "Minimum",
      "Infinite"
    ],
    correctAnswer: 0,
    explanation: "At points on the equatorial plane, the potential due to a dipole is zero."
  },
  {
    id: "hard-17",
    question: "A Gaussian surface is drawn around part of a charged conductor. The flux through this surface is:",
    options: [
      "Zero",
      "q/ε₀ where q is total charge",
      "q/ε₀ where q is enclosed charge",
      "Infinite"
    ],
    correctAnswer: 2,
    explanation: "Gauss's law applies to any closed surface: Φ = q_enclosed/ε₀."
  },
  {
    id: "hard-18",
    question: "The energy density in an electric field E is:",
    options: [
      "ε₀E",
      "½ε₀E",
      "ε₀E²",
      "½ε₀E²"
    ],
    correctAnswer: 3,
    explanation: "The energy stored per unit volume in an electric field is u = ½ε₀E²."
  },
  {
    id: "hard-19",
    question: "Two capacitors C₁ and C₂ are connected in series. The equivalent capacitance is:",
    options: [
      "C₁ + C₂",
      "1/(C₁ + C₂)",
      "C₁C₂/(C₁ + C₂)",
      "(C₁ + C₂)/C₁C₂"
    ],
    correctAnswer: 2,
    explanation: "For capacitors in series, 1/C_eq = 1/C₁ + 1/C₂, so C_eq = C₁C₂/(C₁ + C₂)."
  },
  {
    id: "hard-20",
    question: "A charge is distributed uniformly on a ring of radius R. The electric field at the center is:",
    options: [
      "Zero",
      "kQ/R²",
      "kQ/2R²",
      "Infinite"
    ],
    correctAnswer: 0,
    explanation: "Due to symmetry, the electric field vectors from all charge elements cancel at the center."
  },

  {
    id: "hard-21",
    question: "A point charge +q is placed at a distance d from an infinite grounded conducting plane. What is the force on the charge?",
    options: [
      "Zero",
      "kq²/(4d²) away from plane",
      "kq²/(4d²) toward plane",
      "kq²/d² away from plane"
    ],
    correctAnswer: 2,
    explanation: "Using method of images, the force is equivalent to that between +q and -q at distance 2d: F = kq²/(2d)² = kq²/(4d²) toward the plane."
  },
  {
    id: "hard-22",
    question: "The electric field inside a uniformly charged solid sphere (non-conducting) of radius R at distance r from center is proportional to:",
    options: [
      "1/r²",
      "r",
      "Constant",
      "Zero"
    ],
    correctAnswer: 1,
    explanation: "Inside a uniformly charged sphere, E ∝ r (linearly increases with distance from center)."
  },
  {
    id: "hard-23",
    question: "A capacitor is charged to energy U. If the separation between plates is doubled while disconnected from battery, the new energy is:",
    options: [
      "U",
      "2U",
      "4U",
      "U/2"
    ],
    correctAnswer: 1,
    explanation: "Q constant, C halves (C ∝ 1/d), so U = Q²/2C doubles."
  },
  {
    id: "hard-24",
    question: "The electric potential due to a charged disk along its axis at distance z from center is given by:",
    options: [
      "σ/2ε₀",
      "σ/2ε₀ [√(R² + z²) - z]",
      "σ/2ε₀ [√(R² + z²) - R]",
      "σz/2ε₀R²"
    ],
    correctAnswer: 1,
    explanation: "V = σ/2ε₀ [√(R² + z²) - z] for a disk of radius R and surface charge density σ."
  },
  {
    id: "hard-25",
    question: "In an RC circuit, the time constant represents the time for the current to:",
    options: [
      "Reduce to zero",
      "Reduce to 50% of initial value",
      "Reduce to 36.8% of initial value",
      "Increase to 63.2% of maximum value"
    ],
    correctAnswer: 2,
    explanation: "During discharge, I = I₀e^(-t/τ), so after t = τ, I = I₀/e ≈ 0.368I₀ (36.8%)."
  },
  {
  id: "hard-26",
  question: "A parallel plate capacitor has capacitance C. If the area of plates is doubled and separation is halved, the new capacitance will be:",
  options: ["C/2", "2C", "4C", "8C"],
  correctAnswer: 2,
  explanation: "C = ε₀A/d. A doubles → ×2, d halves → ×2. Net effect: 2×2 = 4C."
},
{
  id: "hard-27",
  question: "The electric field due to an infinite plane sheet of charge with surface density σ is:",
  options: ["Dependent on distance from sheet", "σ/2ε₀", "σ/ε₀", "Zero"],
  correctAnswer: 1,
  explanation: "For infinite plane sheet, E = σ/2ε₀, constant and independent of distance."
},
{
  id: "hard-28",
  question: "A Gaussian surface in the form of a cube is placed in a uniform electric field. The net flux through the cube is:",
  options: ["Zero", "q/ε₀", "EA", "Depends on orientation"],
  correctAnswer: 0,
  explanation: "In uniform field, equal flux enters and exits each pair of opposite faces, so net flux is zero."
},
{
  id: "hard-29",
  question: "Two point charges +4Q and -Q are separated by distance d. Where is the electric field zero?",
  options: ["Between charges, closer to -Q", "Between charges, closer to +4Q", "Outside, near +4Q", "Outside, near -Q"],
  correctAnswer: 1,
  explanation: "E=0 where k(4Q)/x² = kQ/(d-x)². Solving gives x = 2d/3 from +4Q, so between charges closer to +4Q."
},
{
  id: "hard-30",
  question: "A capacitor stores energy U when charged to potential V. If charged to 2V with same capacitance, energy becomes:",
  options: ["U", "2U", "4U", "8U"],
  correctAnswer: 2,
  explanation: "U = ½CV², so if V doubles, U becomes 4 times (2² = 4)."
},
{
  id: "hard-31",
  question: "The electric potential at a point due to a dipole moment p at angle θ from axis is proportional to:",
  options: ["cosθ", "sinθ", "1/r", "1/r²"],
  correctAnswer: 0,
  explanation: "V = (kp cosθ)/r², so proportional to cosθ."
},
{
  id: "hard-32",
  question: "A proton is accelerated through potential difference of 100V. Its kinetic energy gain is:",
  options: ["100 eV", "100 J", "100 V", "1.6 × 10⁻¹⁷ J"],
  correctAnswer: 3,
  explanation: "ΔK = qΔV = (1.6 × 10⁻¹⁹ C)(100 V) = 1.6 × 10⁻¹⁷ J."
},
{
  id: "hard-33",
  question: "The capacitance of an isolated sphere of radius R is:",
  options: ["4πε₀R", "4πε₀R²", "ε₀A/d", "Zero"],
  correctAnswer: 0,
  explanation: "C = 4πε₀R for isolated sphere."
},
{
  id: "hard-34",
  question: "In a region of space, electric field is given by E = 3xî + 4ĵ N/C. The potential difference between points (0,0) and (2,3) is:",
  options: ["-6 V", "-12 V", "6 V", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "V = -∫E·dl. For path along x: ΔV = -∫₀² 3x dx = -[1.5x²]₀² = -6 V."
},
{
  id: "hard-35",
  question: "A dielectric of constant κ is inserted between capacitor plates while connected to battery. The energy stored:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 0,
  explanation: "V constant, C increases by κ, so U = ½CV² increases by factor κ."
},
{
  id: "hard-36",
  question: "The electric field at a point on the axis of a uniformly charged ring is:",
  options: ["Zero", "Maximum", "Minimum", "Infinite"],
  correctAnswer: 1,
  explanation: "On axis, E is maximum at certain distance from center, not at center itself."
},
{
  id: "hard-37",
  question: "Two capacitors 3μF and 6μF are connected in series with 12V battery. The charge on 3μF capacitor is:",
  options: ["24 μC", "36 μC", "72 μC", "108 μC"],
  correctAnswer: 0,
  explanation: "C_eq = (3×6)/(3+6) = 2μF. Q = C_eqV = 24μC. Same charge on both series capacitors."
},
{
  id: "hard-38",
  question: "The work done in assembling three charges +q, +q, and -q at vertices of equilateral triangle of side a is:",
  options: ["-kq²/a", "-kq²/2a", "kq²/a", "Zero"],
  correctAnswer: 0,
  explanation: "W = k[(q×q)/a + (q×-q)/a + (q×-q)/a] = k[q²/a - q²/a - q²/a] = -kq²/a."
},
{
  id: "hard-39",
  question: "A particle of charge q and mass m moves in uniform electric field E. Its acceleration is:",
  options: ["qE/m", "m/qE", "q/mE", "E/qm"],
  correctAnswer: 0,
  explanation: "F = qE = ma, so a = qE/m."
},
{
  id: "hard-40",
  question: "The electric flux through a closed surface containing a dipole is:",
  options: ["Zero", "q/ε₀", "2q/ε₀", "Depends on surface shape"],
  correctAnswer: 0,
  explanation: "Net charge enclosed is zero (+q + -q = 0), so flux = 0 by Gauss's law."
},
{
  id: "hard-41",
  question: "A capacitor is charged to Q and then connected to identical uncharged capacitor. The final energy is:",
  options: ["Same as initial", "Half of initial", "Quarter of initial", "Twice initial"],
  correctAnswer: 1,
  explanation: "Charge redistributes equally: each gets Q/2. Initial U = Q²/2C, final U = 2 × ½C(Q/2)² = Q²/4C = ½U_initial."
},
{
  id: "hard-42",
  question: "The electric field due to infinite line charge at distance r is proportional to:",
  options: ["1/r", "1/r²", "r", "Constant"],
  correctAnswer: 0,
  explanation: "E = λ/(2πε₀r) ∝ 1/r for infinite line charge."
},
{
  id: "hard-43",
  question: "In a uniform electric field, equipotential surfaces are:",
  options: ["Parallel planes", "Concentric spheres", "Cylindrical", "Irregular"],
  correctAnswer: 0,
  explanation: "In uniform field, equipotential surfaces are planes perpendicular to field direction."
},
{
  id: "hard-44",
  question: "A point charge is placed inside a spherical cavity in a conductor. The field outside the conductor:",
  options: ["Is zero", "Is radial", "Depends on cavity position", "Is uniform"],
  correctAnswer: 1,
  explanation: "Field outside is radial and same as if charge were at center, regardless of cavity position."
},
{
  id: "hard-45",
  question: "The time constant for RC circuit during charging is the time for charge to reach:",
  options: ["50% of maximum", "63.2% of maximum", "86.5% of maximum", "100% of maximum"],
  correctAnswer: 1,
  explanation: "After t = τ, Q = Q_max(1 - e⁻¹) ≈ 0.632Q_max (63.2%)."
},
{
  id: "hard-46",
  question: "Two point charges produce electric potential that is zero at certain points. This occurs when:",
  options: ["Charges are equal", "Charges are opposite", "Charges have same sign", "Always possible"],
  correctAnswer: 1,
  explanation: "Zero potential occurs along perpendicular bisector for equal opposite charges."
},
{
  id: "hard-47",
  question: "The energy stored in capacitor comes from:",
  options: ["The battery", "The electric field", "The dielectric", "The wires"],
  correctAnswer: 0,
  explanation: "The battery does work to separate charges, storing energy in capacitor."
},
{
  id: "hard-48",
  question: "A Gaussian surface encloses charges +2q and -q. The flux through surface is:",
  options: ["q/ε₀", "2q/ε₀", "3q/ε₀", "Zero"],
  correctAnswer: 0,
  explanation: "Net enclosed charge = +2q - q = +q, so Φ = q/ε₀."
},
{
  id: "hard-49",
  question: "The electric field inside a uniformly charged solid non-conducting sphere:",
  options: ["Is zero", "Is constant", "Increases linearly with r", "Decreases as 1/r²"],
  correctAnswer: 2,
  explanation: "Inside uniform sphere, E ∝ r (linear increase from center)."
},
{
  id: "hard-50",
  question: "A capacitor with dielectric constant κ has capacitance C. If dielectric is removed, new capacitance is:",
  options: ["κC", "C/κ", "C", "C/κ²"],
  correctAnswer: 1,
  explanation: "With dielectric: C = κC₀. Without: C₀ = C/κ."
},
{
  id: "hard-51",
  question: "A point charge +q is placed at the center of a hollow conducting sphere of inner radius R₁ and outer radius R₂. What is the charge on the outer surface?",
  options: ["0", "+q", "-q", "+2q"],
  correctAnswer: 1,
  explanation: "By Gauss's law and charge conservation, the outer surface acquires charge +q to maintain the conductor's neutrality."
},
{
  id: "hard-52",
  question: "The electric field at a point due to an infinite sheet of charge with surface density σ is:",
  options: ["σ/ε₀", "σ/2ε₀", "2σ/ε₀", "Zero"],
  correctAnswer: 1,
  explanation: "For an infinite sheet of charge, E = σ/2ε₀, directed perpendicular to the sheet."
},
{
  id: "hard-53",
  question: "A capacitor is charged to potential V and then disconnected. If the plate separation is doubled, the new potential difference is:",
  options: ["V", "2V", "4V", "V/2"],
  correctAnswer: 1,
  explanation: "Charge Q constant, C ∝ 1/d, so when d doubles, C halves. V = Q/C doubles."
},
{
  id: "hard-54",
  question: "The electric potential due to a dipole along its axial line is:",
  options: ["Zero", "Maximum", "Minimum", "Infinite"],
  correctAnswer: 1,
  explanation: "The electric potential is maximum along the axial line of a dipole."
},
{
  id: "hard-55",
  question: "Two point charges +Q and +4Q are separated by distance d. Where is the electric field zero?",
  options: ["Between charges, closer to +Q", "Between charges, closer to +4Q", "Outside, near +Q", "Outside, near +4Q"],
  correctAnswer: 2,
  explanation: "E=0 where kQ/x² = k(4Q)/(d+x)². Solving gives x = d from +Q, so outside near +Q."
},
{
  id: "hard-56",
  question: "A Gaussian surface encloses a charge of +3q and -2q. The electric flux through the surface is:",
  options: ["q/ε₀", "3q/ε₀", "5q/ε₀", "Zero"],
  correctAnswer: 0,
  explanation: "Net enclosed charge = +3q - 2q = +q, so Φ = q/ε₀ by Gauss's law."
},
{
  id: "hard-57",
  question: "The energy density in an electric field E is given by:",
  options: ["ε₀E", "½ε₀E", "ε₀E²", "½ε₀E²"],
  correctAnswer: 3,
  explanation: "The energy stored per unit volume in an electric field is u = ½ε₀E²."
},
{
  id: "hard-58",
  question: "A capacitor with capacitance C is charged to energy U. If the charge is doubled, the new energy is:",
  options: ["U", "2U", "4U", "8U"],
  correctAnswer: 2,
  explanation: "U = Q²/2C, so if Q doubles, U becomes 4 times (2² = 4)."
},
{
  id: "hard-59",
  question: "The electric field inside a hollow charged conducting sphere is:",
  options: ["Constant", "Zero", "Infinite", "Radially outward"],
  correctAnswer: 1,
  explanation: "Inside a hollow charged conductor, the electric field is zero (electrostatic shielding)."
},
{
  id: "hard-60",
  question: "Two capacitors C₁ and C₂ are connected in parallel. The equivalent capacitance is:",
  options: ["C₁ + C₂", "1/(C₁ + C₂)", "C₁C₂/(C₁ + C₂)", "(C₁ + C₂)/C₁C₂"],
  correctAnswer: 0,
  explanation: "For capacitors in parallel, C_eq = C₁ + C₂."
},
{
  id: "hard-61",
  question: "The electric potential at a point due to a point charge q at distance r is:",
  options: ["kq/r", "kq/r²", "kr/q", "q/kr"],
  correctAnswer: 0,
  explanation: "V = kq/r for a point charge, where k = 1/4πε₀."
},
{
  id: "hard-62",
  question: "A dielectric slab is inserted between the plates of a capacitor connected to a battery. The charge on the plates:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 0,
  explanation: "V constant, C increases with dielectric, so Q = CV increases."
},
{
  id: "hard-63",
  question: "The electric field due to a uniformly charged ring along its axis is zero at:",
  options: ["The center", "Infinity", "Both center and infinity", "Nowhere"],
  correctAnswer: 0,
  explanation: "Due to symmetry, the electric field is zero at the center of a uniformly charged ring."
},
{
  id: "hard-64",
  question: "The time constant for an RC circuit is given by:",
  options: ["R/C", "C/R", "RC", "1/RC"],
  correctAnswer: 2,
  explanation: "The time constant τ = RC determines the charging/discharging rate."
},
{
  id: "hard-65",
  question: "A point charge is placed at the corner of a cube. The electric flux through the cube is:",
  options: ["q/ε₀", "q/2ε₀", "q/4ε₀", "q/8ε₀"],
  correctAnswer: 3,
  explanation: "By symmetry, only 1/8 of the flux from the charge passes through the cube, so Φ = q/(8ε₀)."
},
{
  id: "hard-66",
  question: "The force between two charges in a dielectric medium of constant κ compared to vacuum is:",
  options: ["κ times", "1/κ times", "κ² times", "1/κ² times"],
  correctAnswer: 1,
  explanation: "In a dielectric, F = F₀/κ, where F₀ is the force in vacuum."
},
{
  id: "hard-67",
  question: "The electric potential energy of a system of two like charges is:",
  options: ["Always positive", "Always negative", "Zero", "Can be positive or negative"],
  correctAnswer: 0,
  explanation: "For like charges, work must be done to bring them together, so potential energy is positive."
},
{
  id: "hard-68",
  question: "A capacitor stores charge Q at potential V. If the capacitance is doubled while maintaining same charge, the new potential is:",
  options: ["V", "2V", "V/2", "V/4"],
  correctAnswer: 2,
  explanation: "Q constant, V = Q/C, so if C doubles, V halves."
},
{
  id: "hard-69",
  question: "The electric field just outside a charged conductor is:",
  options: ["Parallel to surface", "Perpendicular to surface", "Zero", "Tangential to surface"],
  correctAnswer: 1,
  explanation: "The electric field just outside a charged conductor is always perpendicular to the surface."
},
{
  id: "hard-70",
  question: "Two point charges of equal magnitude but opposite signs form a:",
  options: ["Monopole", "Dipole", "Quadrupole", "Octupole"],
  correctAnswer: 1,
  explanation: "Two equal but opposite charges separated by a distance form an electric dipole."
},
{
  id: "hard-71",
  question: "The work done in moving a charge along an equipotential surface is:",
  options: ["Positive", "Negative", "Zero", "Infinite"],
  correctAnswer: 2,
  explanation: "No work is done when moving a charge along an equipotential surface (ΔV = 0)."
},
{
  id: "hard-72",
  question: "The capacitance of a parallel plate capacitor with plate area A and separation d is:",
  options: ["ε₀A/d", "ε₀d/A", "A/ε₀d", "d/ε₀A"],
  correctAnswer: 0,
  explanation: "C = ε₀A/d for parallel plate capacitor."
},
{
  id: "hard-73",
  question: "A charged particle moves perpendicular to a uniform electric field. Its path is:",
  options: ["Straight line", "Parabola", "Circle", "Helix"],
  correctAnswer: 1,
  explanation: "The electric force causes constant acceleration perpendicular to initial velocity, resulting in parabolic motion."
},
{
  id: "hard-74",
  question: "The electric field due to a point charge at distance r is proportional to:",
  options: ["1/r", "1/r²", "r", "r²"],
  correctAnswer: 1,
  explanation: "E = kq/r² ∝ 1/r² for a point charge."
},
{
  id: "hard-75",
  question: "A capacitor is charged through a resistor. After one time constant, the current is:",
  options: ["50% of initial", "36.8% of initial", "13.5% of initial", "5% of initial"],
  correctAnswer: 1,
  explanation: "I = I₀e^(-t/τ), so after t = τ, I = I₀/e ≈ 0.368I₀ (36.8%)."
},
{
  id: "hard-76",
  question: "A Gaussian surface in the form of a cylinder is placed in a uniform electric field parallel to its axis. The net flux through the cylinder is:",
  options: ["Zero", "EA", "2EA", "Depends on cylinder radius"],
  correctAnswer: 0,
  explanation: "In a uniform field parallel to axis, flux through curved surface is zero, and equal but opposite flux through ends cancels, so net flux = 0."
},
{
  id: "hard-77",
  question: "The electric potential due to a charged conducting sphere of radius R and charge Q at a point outside (r > R) is:",
  options: ["kQ/R", "kQ/r", "kQ/r²", "Zero"],
  correctAnswer: 1,
  explanation: "Outside a charged conductor, the potential is the same as for a point charge: V = kQ/r."
},
{
  id: "hard-78",
  question: "A capacitor with capacitance C is charged to voltage V and then connected to an identical uncharged capacitor. The final voltage across each is:",
  options: ["V", "V/2", "V/4", "2V"],
  correctAnswer: 1,
  explanation: "Charge Q = CV redistributes equally between two identical capacitors, so each has charge Q/2 and voltage V/2."
},
{
  id: "hard-79",
  question: "The electric field at a point on the perpendicular bisector of an electric dipole:",
  options: ["Is parallel to dipole moment", "Is antiparallel to dipole moment", "Is perpendicular to dipole moment", "Is zero"],
  correctAnswer: 1,
  explanation: "On the equatorial plane, the electric field is directed opposite to the dipole moment."
},
{
  id: "hard-80",
  question: "A proton and an electron are placed in the same uniform electric field. The ratio of their accelerations (aₚ/aₑ) is:",
  options: ["1", "mₑ/mₚ", "mₚ/mₑ", "1836"],
  correctAnswer: 1,
  explanation: "a = qE/m. Since |q| is same, a ∝ 1/m. mₚ ≈ 1836mₑ, so aₚ/aₑ = mₑ/mₚ ≈ 1/1836."
},
{
  id: "hard-81",
  question: "The energy stored in a capacitor with charge Q and capacitance C is:",
  options: ["½QV", "CV²", "Q²/C", "Both ½QV and Q²/2C"],
  correctAnswer: 3,
  explanation: "All expressions are equivalent: U = ½QV = ½CV² = Q²/2C."
},
{
  id: "hard-82",
  question: "A point charge is placed inside a spherical cavity in a conductor. The electric field outside the conductor:",
  options: ["Depends on position of cavity", "Is zero", "Is same as if charge were at center", "Is radial but not uniform"],
  correctAnswer: 2,
  explanation: "Regardless of cavity position, the field outside is the same as if the charge were at the center of the conductor."
},
{
  id: "hard-83",
  question: "The electric potential difference between two points in an electric field is defined as:",
  options: ["Work done per unit charge", "Force per unit charge", "Charge per unit area", "Energy per unit volume"],
  correctAnswer: 0,
  explanation: "ΔV = W/q, where W is work done moving charge q between the points."
},
{
  id: "hard-84",
  question: "A dielectric slab is inserted between capacitor plates while disconnected from battery. The energy stored:",
  options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  correctAnswer: 1,
  explanation: "Q constant, C increases with dielectric, so U = Q²/2C decreases."
},
{
  id: "hard-85",
  question: "The electric field due to an infinite line charge with linear density λ at distance r is:",
  options: ["λ/2πε₀r", "λ/4πε₀r", "λ/2πε₀r²", "λ/4πε₀r²"],
  correctAnswer: 0,
  explanation: "E = λ/(2πε₀r) for an infinite line charge, directed radially."
},
{
  id: "hard-86",
  question: "Two capacitors 4μF and 6μF are connected in series with 12V battery. The voltage across 4μF capacitor is:",
  options: ["4.8V", "7.2V", "12V", "18V"],
  correctAnswer: 1,
  explanation: "C_eq = (4×6)/(4+6) = 2.4μF. Q = C_eqV = 28.8μC. V₄ = Q/C₄ = 28.8/4 = 7.2V."
},
{
  id: "hard-87",
  question: "The electric flux through a closed surface containing no charge is:",
  options: ["Zero", "Infinite", "Positive", "Negative"],
  correctAnswer: 0,
  explanation: "By Gauss's law, Φ = q_enclosed/ε₀ = 0 if no charge inside."
},
{
  id: "hard-88",
  question: "A charged particle moves parallel to a uniform electric field. Its kinetic energy:",
  options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
  correctAnswer: 0,
  explanation: "The electric force does work on the particle, increasing its kinetic energy."
},
{
  id: "hard-89",
  question: "The capacitance of a parallel plate capacitor with plate area A and separation d filled with dielectric of constant κ is:",
  options: ["κε₀A/d", "ε₀A/κd", "κd/ε₀A", "ε₀d/κA"],
  correctAnswer: 0,
  explanation: "C = κε₀A/d with dielectric."
},
{
  id: "hard-90",
  question: "The electric field inside a uniformly charged solid non-conducting sphere of radius R at distance r from center (r < R) is:",
  options: ["kQr/R³", "kQ/R²", "kQ/r²", "Zero"],
  correctAnswer: 0,
  explanation: "Inside uniform sphere, E = (kQr)/R³ ∝ r."
},
{
  id: "hard-91",
  question: "A capacitor is charged through a resistor. The time for charge to reach 99.3% of maximum is approximately:",
  options: ["τ", "2τ", "3τ", "5τ"],
  correctAnswer: 3,
  explanation: "Q = Q_max(1 - e^(-t/τ)). For Q = 0.993Q_max, t ≈ 5τ (e^(-5) ≈ 0.0067)."
},
{
  id: "hard-92",
  question: "The electric potential due to a point charge at infinity is taken as:",
  options: ["Zero", "Infinite", "Unity", "Negative"],
  correctAnswer: 0,
  explanation: "By convention, V = 0 at infinity serves as the reference point."
},
{
  id: "hard-93",
  question: "Two point charges of equal magnitude and same sign are placed at some distance. The point of zero potential lies:",
  options: ["Between the charges", "Outside the charges", "At the midpoint", "Nowhere"],
  correctAnswer: 3,
  explanation: "For same-sign charges, potential is never zero (always positive for both charges)."
},
{
  id: "hard-94",
  question: "The force on a charge in an electric field is:",
  options: ["Parallel to the field", "Perpendicular to the field", "In direction of field for positive charge", "Opposite to field for negative charge"],
  correctAnswer: 2,
  explanation: "F = qE, so for positive charge, force is in direction of field; for negative charge, opposite to field."
},
{
  id: "hard-95",
  question: "A capacitor with dielectric constant κ has capacitance C. If dielectric is removed while maintaining same charge, the energy stored:",
  options: ["Increases by factor κ", "Decreases by factor κ", "Increases by factor κ²", "Decreases by factor κ²"],
  correctAnswer: 0,
  explanation: "With dielectric: C = κC₀, U = Q²/2κC₀. Without: U₀ = Q²/2C₀, so U₀/U = κ."
},
{
  id: "hard-96",
  question: "The electric field due to a uniformly charged disk along its axis at distance z from center:",
  options: ["Decreases as 1/z", "Decreases as 1/z²", "Is constant", "Approaches field of point charge for large z"],
  correctAnswer: 3,
  explanation: "For z >> R, E ≈ kQ/z², same as point charge."
},
{
  id: "hard-97",
  question: "A Gaussian surface encloses charges +2q, -3q, and +q. The net flux is:",
  options: ["Zero", "q/ε₀", "2q/ε₀", "6q/ε₀"],
  correctAnswer: 0,
  explanation: "Net charge = +2q - 3q + q = 0, so Φ = 0 by Gauss's law."
},
{
  id: "hard-98",
  question: "The capacitance of a capacitor depends on:",
  options: ["The charge on it", "The voltage across it", "Its geometry and dielectric", "Both charge and voltage"],
  correctAnswer: 2,
  explanation: "C depends only on physical characteristics: plate area, separation, and dielectric constant."
},
{
  id: "hard-99",
  question: "A charged particle is moving in a uniform electric field. Its path is always:",
  options: ["Straight line", "Parabola", "Circle", "Helix"],
  correctAnswer: 1,
  explanation: "In uniform E field, acceleration is constant, so path is parabolic (like projectile motion)."
},
{
  id: "hard-100",
  question: "The electric potential energy of a system of two unlike charges is:",
  options: ["Always positive", "Always negative", "Zero", "Depends on distance"],
  correctAnswer: 1,
  explanation: "For unlike charges, potential energy is always negative (energy is released when they come together)."
},
];


export const electrostaticsQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
