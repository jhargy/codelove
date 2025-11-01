export type Difficulty = keyof typeof fluidynamicsQuestions;

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
    question: "Terminal velocity is reached when:",
    options: [
      "Gravitational force equals drag force",
      "Drag force becomes zero",
      "Gravitational force becomes maximum",
      "The object stops accelerating"
    ],
    correctAnswer: 0,
    explanation: "Terminal velocity occurs when the downward gravitational force equals the upward drag force, resulting in zero net force and constant velocity."
  },
  {
    id: "easy-2",
    question: "What is fluid drag?",
    options: [
      "The force that opposes motion through a fluid",
      "The force that accelerates objects in fluids",
      "The weight of the fluid itself",
      "The pressure difference in fluids"
    ],
    correctAnswer: 0,
    explanation: "Fluid drag is the resistance force that acts opposite to the direction of motion when an object moves through a fluid."
  },
  {
    id: "easy-3",
    question: "Streamline flow is characterized by:",
    options: [
      "Smooth, orderly layers of fluid",
      "Chaotic, irregular motion",
      "Rapid mixing of fluid layers",
      "Formation of eddies and vortices"
    ],
    correctAnswer: 0,
    explanation: "In streamline (laminar) flow, fluid particles move in smooth, parallel layers with no disruption between them."
  },
  {
    id: "easy-4",
    question: "An ideal fluid is assumed to be:",
    options: [
      "Incompressible and non-viscous",
      "Compressible and viscous",
      "Only incompressible",
      "Only non-viscous"
    ],
    correctAnswer: 0,
    explanation: "An ideal fluid is theoretical and assumed to be incompressible (constant density) and non-viscous (no internal friction)."
  },
  {
    id: "easy-5",
    question: "Turbulent flow occurs when:",
    options: [
      "Fluid velocity exceeds a critical value",
      "Fluid viscosity is very low",
      "The flow is very slow",
      "The fluid is highly compressible"
    ],
    correctAnswer: 0,
    explanation: "Turbulent flow begins when the fluid velocity surpasses a critical value, causing chaotic motion with eddies and mixing."
  },
  {
    id: "easy-6",
    question: "The equation of continuity is based on:",
    options: [
      "Conservation of mass",
      "Conservation of energy",
      "Conservation of momentum",
      "Conservation of charge"
    ],
    correctAnswer: 0,
    explanation: "The equation of continuity (A₁v₁ = A₂v₂) expresses the principle of conservation of mass for fluid flow."
  },
  {
    id: "easy-7",
    question: "According to Bernoulli's principle, where speed is higher:",
    options: [
      "Pressure is lower",
      "Pressure is higher",
      "Density increases",
      "Temperature increases"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's principle states that in a flowing fluid, regions of higher fluid speed have lower pressure."
  },
  {
    id: "easy-8",
    question: "What happens to fluid speed when it enters a narrower pipe?",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 0,
    explanation: "According to the equation of continuity, fluid speed increases when it flows into a narrower section to maintain constant flow rate."
  },
  {
    id: "easy-9",
    question: "Viscosity is a measure of:",
    options: [
      "A fluid's resistance to flow",
      "A fluid's density",
      "A fluid's compressibility",
      "A fluid's temperature"
    ],
    correctAnswer: 0,
    explanation: "Viscosity quantifies a fluid's internal resistance to flow or its 'thickness'."
  },
  {
    id: "easy-10",
    question: "Which factor does NOT affect drag force?",
    options: [
      "Color of the object",
      "Size and shape of object",
      "Fluid density",
      "Object's velocity"
    ],
    correctAnswer: 0,
    explanation: "Drag force depends on object size/shape, fluid density, velocity, and viscosity, but not on the object's color."
  },
  {
    id: "easy-11",
    question: "For incompressible flow, what remains constant?",
    options: [
      "Density",
      "Velocity",
      "Pressure",
      "Temperature"
    ],
    correctAnswer: 0,
    explanation: "In incompressible flow, the fluid density remains constant regardless of pressure changes."
  },
  {
    id: "easy-12",
    question: "What is the SI unit of viscosity?",
    options: [
      "Pascal-second (Pa·s)",
      "Newton (N)",
      "Joule (J)",
      "Watt (W)"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of viscosity is Pascal-second (Pa·s), which equals 1 N·s/m²."
  },
  {
    id: "easy-13",
    question: "Which flow is more common in practical applications?",
    options: [
      "Turbulent flow",
      "Laminar flow",
      "Both equally common",
      "Neither is common"
    ],
    correctAnswer: 0,
    explanation: "Turbulent flow is more common in practical applications like water pipes, blood flow, and air movement around vehicles."
  },
  {
    id: "easy-14",
    question: "The equation A₁v₁ = A₂v₂ applies to:",
    options: [
      "Ideal, incompressible fluids",
      "All fluids regardless of properties",
      "Only gases",
      "Only viscous fluids"
    ],
    correctAnswer: 0,
    explanation: "The equation of continuity (A₁v₁ = A₂v₂) is valid for ideal fluids that are incompressible."
  },
  {
    id: "easy-15",
    question: "Bernoulli's equation relates:",
    options: [
      "Pressure, velocity, and height",
      "Density, temperature, and volume",
      "Mass, acceleration, and force",
      "Time, distance, and speed"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation describes the relationship between pressure, fluid velocity, and elevation height in a flowing fluid."
  },
  {
    id: "easy-16",
    question: "What creates lift on an airplane wing?",
    options: [
      "Pressure difference due to air speed variation",
      "The weight of the airplane",
      "The engine thrust only",
      "The shape of wing alone"
    ],
    correctAnswer: 0,
    explanation: "Lift is created by the pressure difference between the upper and lower surfaces of the wing, resulting from different air speeds (Bernoulli's principle)."
  },
  {
    id: "easy-17",
    question: "As a skydiver falls, their acceleration decreases because:",
    options: [
      "Drag force increases with velocity",
      "Gravity decreases with height",
      "Air density decreases",
      "Their mass decreases"
    ],
    correctAnswer: 0,
    explanation: "As velocity increases, drag force increases until it balances the weight, reducing acceleration to zero at terminal velocity."
  },
  {
    id: "easy-18",
    question: "In a horizontal pipe, where the cross-section is reduced:",
    options: [
      "Velocity increases, pressure decreases",
      "Velocity decreases, pressure increases",
      "Both velocity and pressure increase",
      "Both velocity and pressure decrease"
    ],
    correctAnswer: 0,
    explanation: "According to Bernoulli's principle, in a horizontal pipe, reduced cross-section leads to increased velocity and decreased pressure."
  },
  {
    id: "easy-19",
    question: "What is Stokes' law used for?",
    options: [
      "Calculating drag on small spheres in viscous fluid",
      "Measuring fluid density",
      "Calculating pressure in pipes",
      "Determining flow rate"
    ],
    correctAnswer: 0,
    explanation: "Stokes' law calculates the drag force on small spherical objects moving through viscous fluids at low Reynolds numbers."
  },
  {
    id: "easy-20",
    question: "The Reynolds number determines:",
    options: [
      "Whether flow is laminar or turbulent",
      "The density of a fluid",
      "The viscosity of a fluid",
      "The pressure in a fluid"
    ],
    correctAnswer: 0,
    explanation: "The Reynolds number is a dimensionless quantity that predicts whether fluid flow will be laminar or turbulent."
  },
  {
    id: "easy-21",
    question: "Which has higher terminal velocity?",
    options: [
      "A heavy object with small area",
      "A light object with large area",
      "A heavy object with large area",
      "A light object with small area"
    ],
    correctAnswer: 0,
    explanation: "Heavier objects with smaller cross-sectional areas experience higher terminal velocities because they need higher speeds for drag to balance their weight."
  },
  {
    id: "easy-22",
    question: "What happens to drag force if velocity doubles?",
    options: [
      "It quadruples (approximately)",
      "It doubles",
      "It halves",
      "It stays the same"
    ],
    correctAnswer: 0,
    explanation: "Drag force is proportional to the square of velocity (F ∝ v²), so doubling velocity quadruples the drag force."
  },
  {
    id: "easy-23",
    question: "In blood vessels, Bernoulli's effect explains:",
    options: [
      "Pressure drops at constrictions",
      "Increased blood density in arteries",
      "Decreased blood velocity in capillaries",
      "Constant pressure throughout circulatory system"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's principle explains why blood pressure decreases at constrictions where flow velocity increases."
  },
  {
    id: "easy-24",
    question: "Which fluid property is most important for determining drag?",
    options: [
      "Viscosity",
      "Color",
      "Temperature",
      "Transparency"
    ],
    correctAnswer: 0,
    explanation: "Viscosity is the fluid property that primarily determines the drag force on objects moving through it."
  },
  {
    id: "easy-25",
    question: "What remains constant in steady flow?",
    options: [
      "Velocity at each point",
      "Pressure throughout",
      "Density at each point",
      "Temperature throughout"
    ],
    correctAnswer: 0,
    explanation: "In steady flow, the velocity at each point remains constant over time, though it may vary from point to point."
  },
  {
    id: "easy-26",
    question: "Why does smoke initially rise in a smooth column?",
    options: [
      "Laminar flow",
      "Turbulent flow",
      "High viscosity",
      "Low temperature"
    ],
    correctAnswer: 0,
    explanation: "Smoke initially rises in a smooth column due to laminar flow before transitioning to turbulence at higher velocities."
  },
  {
    id: "easy-27",
    question: "What is the effect of increased viscosity on terminal velocity?",
    options: [
      "Decreases it",
      "Increases it",
      "No effect",
      "Makes it unpredictable"
    ],
    correctAnswer: 0,
    explanation: "Higher viscosity increases drag force, which reduces the terminal velocity of objects falling through the fluid."
  },
  {
    id: "easy-28",
    question: "In the equation of continuity, A represents:",
    options: [
      "Cross-sectional area",
      "Acceleration",
      "Amplitude",
      "Angular momentum"
    ],
    correctAnswer: 0,
    explanation: "In the equation of continuity (A₁v₁ = A₂v₂), A represents the cross-sectional area of the pipe or conduit."
  },
  {
    id: "easy-29",
    question: "Bernoulli's equation applies to:",
    options: [
      "Ideal fluids in steady flow",
      "All fluids in any condition",
      "Only gases",
      "Only liquids"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation applies to ideal fluids (incompressible, non-viscous) in steady flow along a streamline."
  },
  {
    id: "easy-30",
    question: "What causes a venturi effect?",
    options: [
      "Constriction in flow path",
      "Increase in fluid temperature",
      "Decrease in fluid density",
      "Change in fluid color"
    ],
    correctAnswer: 0,
    explanation: "The venturi effect is the reduction in fluid pressure that results when a fluid flows through a constricted section of pipe."
  },
  {
    id: "easy-31",
    question: "Which has the greatest effect on terminal velocity?",
    options: [
      "Cross-sectional area",
      "Color of object",
      "Surface roughness",
      "Temperature of fluid"
    ],
    correctAnswer: 0,
    explanation: "Cross-sectional area significantly affects terminal velocity because drag force is directly proportional to it."
  },
  {
    id: "easy-32",
    question: "What is the shape of objects designed to minimize drag?",
    options: [
      "Streamlined",
      "Square",
      "Flat",
      "Irregular"
    ],
    correctAnswer: 0,
    explanation: "Streamlined shapes (teardrop or airfoil shapes) are designed to minimize drag by reducing turbulence."
  },
  {
    id: "easy-33",
    question: "In a river, where is the flow fastest?",
    options: [
      "Where it's deepest and narrowest",
      "Where it's widest and shallowest",
      "Near the banks",
      "At the surface only"
    ],
    correctAnswer: 0,
    explanation: "According to the equation of continuity, flow is fastest where the cross-sectional area is smallest (deep and narrow sections)."
  },
  {
    id: "easy-34",
    question: "What does Bernoulli's equation conserve?",
    options: [
      "Energy",
      "Mass",
      "Momentum",
      "Density"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation is essentially a statement of energy conservation for flowing fluids."
  },
  {
    id: "easy-35",
    question: "Which flow has higher friction losses?",
    options: [
      "Turbulent flow",
      "Laminar flow",
      "Both have equal losses",
      "Neither has losses"
    ],
    correctAnswer: 0,
    explanation: "Turbulent flow has higher friction losses due to the chaotic motion and increased interaction between fluid layers."
  },
  {
    id: "easy-36",
    question: "What happens to pressure when fluid speed increases?",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 0,
    explanation: "According to Bernoulli's principle, pressure decreases when fluid speed increases, assuming constant height."
  },
  {
    id: "easy-37",
    question: "Which is an example of laminar flow?",
    options: [
      "Slow-moving honey",
      "Whitewater rapids",
      "Smoke from a fire",
      "Water from a tap"
    ],
    correctAnswer: 0,
    explanation: "Slow-moving viscous fluids like honey typically exhibit laminar flow due to their high viscosity and low velocity."
  },
  {
    id: "easy-38",
    question: "What does a pitot tube measure?",
    options: [
      "Fluid velocity",
      "Fluid viscosity",
      "Fluid density",
      "Fluid temperature"
    ],
    correctAnswer: 0,
    explanation: "A pitot tube measures fluid velocity by comparing stagnation pressure to static pressure using Bernoulli's principle."
  },
  {
    id: "easy-39",
    question: "Why do golfers dimple golf balls?",
    options: [
      "To reduce drag",
      "To increase weight",
      "To improve grip",
      "To make them colorful"
    ],
    correctAnswer: 0,
    explanation: "Dimples on golf balls create turbulent boundary layers that reduce drag by delaying flow separation."
  },
  {
    id: "easy-40",
    question: "What is the driving force for fluid flow?",
    options: [
      "Pressure difference",
      "Temperature difference",
      "Density difference",
      "Color difference"
    ],
    correctAnswer: 0,
    explanation: "Fluids flow from regions of higher pressure to regions of lower pressure due to pressure differences."
  },
  {
    id: "easy-41",
    question: "Which has higher viscosity?",
    options: [
      "Honey",
      "Water",
      "Air",
      "Gasoline"
    ],
    correctAnswer: 0,
    explanation: "Honey has much higher viscosity than water, air, or gasoline, meaning it flows more slowly and resists deformation."
  },
  {
    id: "easy-42",
    question: "What is the effect of temperature on gas viscosity?",
    options: [
      "Increases with temperature",
      "Decreases with temperature",
      "No effect",
      "Becomes zero at high temperature"
    ],
    correctAnswer: 0,
    explanation: "Unlike liquids, gas viscosity increases with temperature because higher temperatures increase molecular collisions."
  },
  {
    id: "easy-43",
    question: "In a flowing fluid, what is constant along a streamline?",
    options: [
      "Bernoulli's constant",
      "Density",
      "Temperature",
      "Viscosity"
    ],
    correctAnswer: 0,
    explanation: "For an ideal fluid in steady flow, the sum of pressure, kinetic energy, and potential energy per unit volume (Bernoulli's constant) remains constant along a streamline."
  },
  {
    id: "easy-44",
    question: "What creates drag force?",
    options: [
      "Fluid resistance to motion",
      "Gravitational pull",
      "Electromagnetic forces",
      "Nuclear forces"
    ],
    correctAnswer: 0,
    explanation: "Drag force is created by the resistance a fluid offers to objects moving through it, due to viscosity and pressure differences."
  },
  {
    id: "easy-45",
    question: "Which flows faster through the same pipe?",
    options: [
      "Water",
      "Honey",
      "Both same speed",
      "Depends on temperature"
    ],
    correctAnswer: 0,
    explanation: "Water flows faster than honey through the same pipe under the same pressure difference because it has lower viscosity."
  },
  {
    id: "easy-46",
    question: "What is the purpose of a spoiler on a car?",
    options: [
      "Increase drag for better traction",
      "Decrease drag for higher speed",
      "Improve fuel efficiency",
      "Make the car look stylish"
    ],
    correctAnswer: 0,
    explanation: "Spoilers increase drag and downforce, improving traction and stability at high speeds by preventing lift."
  },
  {
    id: "easy-47",
    question: "Which fluid property remains constant in incompressible flow?",
    options: [
      "Density",
      "Velocity",
      "Pressure",
      "Viscosity"
    ],
    correctAnswer: 0,
    explanation: "In incompressible flow, density remains constant regardless of changes in pressure or other variables."
  },
  {
    id: "easy-48",
    question: "What does a manometer measure?",
    options: [
      "Pressure difference",
      "Flow velocity",
      "Fluid viscosity",
      "Flow rate"
    ],
    correctAnswer: 0,
    explanation: "A manometer measures pressure difference by comparing the heights of liquid columns in connected tubes."
  },
  {
    id: "easy-49",
    question: "Why does water flow faster when you put your thumb over a hose?",
    options: [
      "Reduced cross-sectional area",
      "Increased pressure",
      "Decreased viscosity",
      "Increased temperature"
    ],
    correctAnswer: 0,
    explanation: "Partially covering the hose reduces the cross-sectional area, increasing velocity to maintain constant flow rate (equation of continuity)."
  },
  {
    id: "easy-50",
    question: "What is the primary cause of drag in high-speed flow?",
    options: [
      "Pressure difference",
      "Skin friction",
      "Fluid compression",
      "Temperature change"
    ],
    correctAnswer: 0,
    explanation: "At high speeds, pressure drag (due to pressure differences between front and back) dominates over skin friction drag."
  },
  {
    id: "easy-51",
    question: "Which has lower terminal velocity in air?",
    options: [
      "A parachute",
      "A rock",
      "A metal ball",
      "A pencil"
    ],
    correctAnswer: 0,
    explanation: "A parachute has large surface area and light weight, resulting in low terminal velocity compared to dense, compact objects."
  },
  {
    id: "easy-52",
    question: "What is the effect of streamlining?",
    options: [
      "Reduces drag",
      "Increases drag",
      "Increases weight",
      "Decreases density"
    ],
    correctAnswer: 0,
    explanation: "Streamlining reduces drag by allowing fluid to flow smoothly around an object, minimizing turbulence and flow separation."
  },
  {
    id: "easy-53",
    question: "In a blood vessel, if diameter decreases, flow velocity:",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Becomes zero"
    ],
    correctAnswer: 0,
    explanation: "According to the equation of continuity, when cross-sectional area decreases (smaller diameter), flow velocity increases to maintain constant flow rate."
  },
  {
    id: "easy-54",
    question: "What is the condition for applying Bernoulli's equation?",
    options: [
      "Steady flow of ideal fluid",
      "Turbulent flow of real fluid",
      "Compressible flow",
      "Unsteady flow"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation applies to steady flow of ideal fluids (incompressible and non-viscous) along a streamline."
  },
  {
    id: "easy-55",
    question: "Which is NOT a type of drag?",
    options: [
      "Magnetic drag",
      "Skin friction drag",
      "Form drag",
      "Wave drag"
    ],
    correctAnswer: 0,
    explanation: "Magnetic drag is not a fluid dynamics concept. The main types of drag in fluids are skin friction, form, and wave drag."
  },
  {
    id: "easy-56",
    question: "What happens to flow rate if pipe diameter doubles?",
    options: [
      "Increases by factor of 16",
      "Doubles",
      "Halves",
      "Quadruples"
    ],
    correctAnswer: 0,
    explanation: "Flow rate is proportional to area, which is proportional to diameter squared. Doubling diameter quadruples area, but for same velocity, flow rate increases 4 times. Actually, if pressure difference is constant, flow rate increases by factor of 16 (Poiseuille's law)."
  },
  {
    id: "easy-57",
    question: "Why do birds fly in V formation?",
    options: [
      "To reduce drag",
      "To look organized",
      "To communicate better",
      "To increase speed"
    ],
    correctAnswer: 0,
    explanation: "Birds fly in V formation to reduce induced drag by taking advantage of upwash from the wingtip vortices of the bird ahead."
  },
  {
    id: "easy-58",
    question: "What is the unit of flow rate?",
    options: [
      "m³/s",
      "m/s",
      "N/m²",
      "kg/m³"
    ],
    correctAnswer: 0,
    explanation: "Flow rate (volume per time) is measured in cubic meters per second (m³/s) in SI units."
  },
  {
    id: "easy-59",
    question: "Which fluid would have the lowest drag?",
    options: [
      "Air",
      "Water",
      "Honey",
      "Motor oil"
    ],
    correctAnswer: 0,
    explanation: "Air has the lowest viscosity among these fluids, resulting in the lowest drag force for the same object at the same velocity."
  },
  {
    id: "easy-60",
    question: "What is the principle behind a perfume atomizer?",
    options: [
      "Bernoulli's principle",
      "Archimedes' principle",
      "Pascal's principle",
      "Newton's third law"
    ],
    correctAnswer: 0,
    explanation: "Perfume atomizers use Bernoulli's principle - air blown over a tube creates low pressure, drawing perfume up and breaking it into droplets."
  },
  {
    id: "easy-61",
    question: "Which factor increases the Reynolds number?",
    options: [
      "Higher velocity",
      "Higher viscosity",
      "Lower density",
      "Smaller length scale"
    ],
    correctAnswer: 0,
    explanation: "Reynolds number increases with higher velocity, lower viscosity, higher density, and larger length scales."
  },
  {
    id: "easy-62",
    question: "What is the effect of turbulence on mixing?",
    options: [
      "Increases mixing",
      "Decreases mixing",
      "No effect on mixing",
      "Prevents mixing"
    ],
    correctAnswer: 0,
    explanation: "Turbulence greatly enhances mixing due to the chaotic motion and eddies that bring fluid particles from different regions together."
  },
  {
    id: "easy-63",
    question: "Why does a curve ball curve?",
    options: [
      "Pressure difference due to spin",
      "Gravitational pull",
      "Wind resistance",
      "Magnus effect"
    ],
    correctAnswer: 0,
    explanation: "A spinning ball creates a pressure difference between sides due to the Magnus effect, causing it to curve in the direction of lower pressure."
  },
  {
    id: "easy-64",
    question: "What is the primary force that causes raindrops to reach terminal velocity?",
    options: [
      "Gravity",
      "Air pressure",
      "Wind",
      "Surface tension"
    ],
    correctAnswer: 0,
    explanation: "Gravity is the downward force that causes raindrops to accelerate until drag force balances it at terminal velocity."
  },
  {
    id: "easy-65",
    question: "Which has the greatest effect on drag?",
    options: [
      "Object's shape",
      "Object's color",
      "Object's temperature",
      "Object's material"
    ],
    correctAnswer: 0,
    explanation: "The shape of an object has the greatest effect on drag because it determines how fluid flows around it and where separation occurs."
  },
  {
    id: "easy-66",
    question: "What is the purpose of a wind tunnel?",
    options: [
      "Test aerodynamic properties",
      "Generate electricity",
      "Measure wind speed",
      "Create ventilation"
    ],
    correctAnswer: 0,
    explanation: "Wind tunnels are used to test the aerodynamic properties of objects by studying airflow patterns around them."
  },
  {
    id: "easy-67",
    question: "Which flow has parabolic velocity profile?",
    options: [
      "Laminar flow in pipes",
      "Turbulent flow in pipes",
      "Flow around spheres",
      "Flow in open channels"
    ],
    correctAnswer: 0,
    explanation: "Laminar flow in pipes has a parabolic velocity profile with maximum speed at the center and zero at the walls."
  },
  {
    id: "easy-68",
    question: "What happens to drag when surface roughness increases?",
    options: [
      "Increases",
      "Decreases",
      "No effect",
      "Becomes zero"
    ],
    correctAnswer: 0,
    explanation: "Increased surface roughness generally increases drag by promoting turbulence and flow separation."
  },
  {
    id: "easy-69",
    question: "Why is laminar flow preferred in some applications?",
    options: [
      "Lower energy losses",
      "Higher mixing efficiency",
      "Easier to achieve",
      "Higher speed"
    ],
    correctAnswer: 0,
    explanation: "Laminar flow has lower friction losses and is therefore more energy-efficient for fluid transport."
  },
  {
    id: "easy-70",
    question: "What is the Magnus effect?",
    options: [
      "Lift force on spinning objects",
      "Drag force on stationary objects",
      "Pressure increase in fluids",
      "Viscosity change with temperature"
    ],
    correctAnswer: 0,
    explanation: "The Magnus effect is the lift force generated when a spinning object moves through a fluid, due to pressure differences caused by rotation."
  },
  {
    id: "easy-71",
    question: "Which has higher terminal velocity in water?",
    options: [
      "A steel ball",
      "A plastic ball",
      "A wooden ball",
      "A rubber ball"
    ],
    correctAnswer: 0,
    explanation: "A steel ball has higher density and weight for its size, resulting in higher terminal velocity compared to lighter balls of similar size."
  },
  {
    id: "easy-72",
    question: "What is the effect of temperature on liquid viscosity?",
    options: [
      "Decreases with temperature",
      "Increases with temperature",
      "No effect",
      "Becomes zero at high temperature"
    ],
    correctAnswer: 0,
    explanation: "Liquid viscosity decreases with increasing temperature because higher thermal energy reduces intermolecular forces."
  },
  {
    id: "easy-73",
    question: "Why do swimmers wear streamlined caps?",
    options: [
      "To reduce drag",
      "To keep hair dry",
      "To stay warm",
      "To be visible"
    ],
    correctAnswer: 0,
    explanation: "Streamlined caps reduce drag by creating a smooth surface that allows water to flow over the head with less resistance."
  },
  {
    id: "easy-74",
    question: "What is the condition for terminal velocity?",
    options: [
      "Net force = 0",
      "Velocity = 0",
      "Acceleration = 0",
      "Drag force = 0"
    ],
    correctAnswer: 0,
    explanation: "At terminal velocity, the net force is zero (drag force equals weight), resulting in constant velocity with no acceleration."
  },
  {
    id: "easy-75",
    question: "Which is an example of Bernoulli's principle?",
    options: [
      "Airplane wing lift",
      "Hot air balloon rise",
      "Submarine diving",
      "Ship floating"
    ],
    correctAnswer: 0,
    explanation: "Airplane wing lift is created by Bernoulli's principle - faster air flow over the curved upper surface creates lower pressure than the bottom surface."
  },
  {
    id: "easy-76",
    question: "What is the primary factor determining flow regime?",
    options: [
      "Reynolds number",
      "Fluid color",
      "Pipe material",
      "Temperature gradient"
    ],
    correctAnswer: 0,
    explanation: "The Reynolds number (Re = ρVD/μ) is the primary dimensionless parameter that determines whether flow is laminar or turbulent."
  },
  {
    id: "easy-77",
    question: "Why does water come out faster from a smaller hole?",
    options: [
      "Higher velocity due to continuity",
      "Higher pressure",
      "Lower viscosity",
      "Gravity effect"
    ],
    correctAnswer: 0,
    explanation: "According to the equation of continuity, water velocity increases through smaller openings to maintain constant flow rate."
  },
  {
    id: "easy-78",
    question: "What is the effect of adding particles to a fluid?",
    options: [
      "Increases viscosity",
      "Decreases viscosity",
      "No effect on viscosity",
      "Makes it compressible"
    ],
    correctAnswer: 0,
    explanation: "Adding particles to a fluid generally increases its viscosity by interfering with the smooth flow of fluid layers."
  },
  {
    id: "easy-79",
    question: "Which has the most streamlined shape?",
    options: [
      "Airfoil",
      "Cube",
      "Sphere",
      "Cylinder"
    ],
    correctAnswer: 0,
    explanation: "An airfoil (wing shape) is specifically designed to be streamlined for efficient airflow with minimal drag."
  },
  {
    id: "easy-80",
    question: "What is the purpose of a diffuser in a car?",
    options: [
      "Reduce drag and increase downforce",
      "Increase engine power",
      "Improve fuel efficiency",
      "Enhance cooling"
    ],
    correctAnswer: 0,
    explanation: "A diffuser reduces drag and increases downforce by accelerating airflow underneath the car, creating lower pressure."
  },
  {
    id: "easy-81",
    question: "Which fluid would have the highest terminal velocity for the same object?",
    options: [
      "Air",
      "Water",
      "Oil",
      "Honey"
    ],
    correctAnswer: 0,
    explanation: "Air has the lowest viscosity and density, resulting in the lowest drag force and highest terminal velocity for the same object."
  },
  {
    id: "easy-82",
    question: "What is the principle behind a venturi meter?",
    options: [
      "Bernoulli's principle",
      "Pascal's principle",
      "Archimedes' principle",
      "Newton's law"
    ],
    correctAnswer: 0,
    explanation: "Venturi meters measure flow rate using Bernoulli's principle - pressure decreases where velocity increases in a constriction."
  },
  {
    id: "easy-83",
    question: "Why do cyclists crouch low?",
    options: [
      "To reduce drag",
      "To lower center of gravity",
      "To rest muscles",
      "To see better"
    ],
    correctAnswer: 0,
    explanation: "Cyclists crouch low to reduce their frontal area and make a more streamlined shape, significantly reducing air drag."
  },
  {
    id: "easy-84",
    question: "What is the effect of humidity on air density?",
    options: [
      "Decreases density",
      "Increases density",
      "No effect",
      "Makes it variable"
    ],
    correctAnswer: 0,
    explanation: "Humid air is less dense than dry air because water molecules are lighter than nitrogen and oxygen molecules they replace."
  },
  {
    id: "easy-85",
    question: "Which has higher drag coefficient?",
    options: [
      "Flat plate perpendicular to flow",
      "Streamlined body",
      "Sphere",
      "Airfoil"
    ],
    correctAnswer: 0,
    explanation: "A flat plate perpendicular to flow has a very high drag coefficient (about 1.28) due to complete flow separation and large pressure drag."
  },
  {
    id: "easy-86",
    question: "What is the primary energy loss in pipe flow?",
    options: [
      "Friction",
      "Heat transfer",
      "Sound production",
      "Light emission"
    ],
    correctAnswer: 0,
    explanation: "The primary energy loss in pipe flow is due to friction between the fluid and pipe walls and within the fluid itself."
  },
  {
    id: "easy-87",
    question: "Why do boats have pointed bows?",
    options: [
      "To reduce water resistance",
      "To increase storage space",
      "To improve stability",
      "To look traditional"
    ],
    correctAnswer: 0,
    explanation: "Pointed bows are streamlined to reduce drag by allowing water to flow smoothly around the hull with minimal turbulence."
  },
  {
    id: "easy-88",
    question: "What is the effect of increasing viscosity on Reynolds number?",
    options: [
      "Decreases it",
      "Increases it",
      "No effect",
      "Makes it unpredictable"
    ],
    correctAnswer: 0,
    explanation: "Reynolds number Re = ρVD/μ, so increasing viscosity (μ) decreases the Reynolds number."
  },
  {
    id: "easy-89",
    question: "Which is NOT an assumption of ideal fluid?",
    options: [
      "High viscosity",
      "Incompressible",
      "Non-viscous",
      "Steady flow"
    ],
    correctAnswer: 0,
    explanation: "Ideal fluids are assumed to have zero viscosity (non-viscous), not high viscosity."
  },
  {
    id: "easy-90",
    question: "Why does a ping pong ball float in an air stream?",
    options: [
      "Bernoulli's principle",
      "Gravity cancellation",
      "Surface tension",
      "Magnus effect"
    ],
    correctAnswer: 0,
    explanation: "Fast-moving air creates low pressure above the ball (Bernoulli's principle), while higher pressure below supports it against gravity."
  },
  {
    id: "easy-91",
    question: "What is the primary factor in blood pressure measurement?",
    options: [
      "Fluid pressure",
      "Flow velocity",
      "Vessel diameter",
      "Blood viscosity"
    ],
    correctAnswer: 0,
    explanation: "Blood pressure measurement primarily measures the fluid pressure exerted by blood on artery walls."
  },
  {
    id: "easy-92",
    question: "Which has lower drag?",
    options: [
      "Streamlined shape",
      "Bluff body",
      "Flat plate",
      "Cube"
    ],
    correctAnswer: 0,
    explanation: "Streamlined shapes have much lower drag coefficients compared to bluff bodies, flat plates, or cubes."
  },
  {
    id: "easy-93",
    question: "What is the effect of altitude on air density?",
    options: [
      "Decreases with altitude",
      "Increases with altitude",
      "No effect",
      "Varies randomly"
    ],
    correctAnswer: 0,
    explanation: "Air density decreases with increasing altitude due to lower atmospheric pressure."
  },
  {
    id: "easy-94",
    question: "Why are racing cars low to the ground?",
    options: [
      "Reduce drag and improve stability",
      "Increase visibility",
      "Easier to enter",
      "Regulation requirement"
    ],
    correctAnswer: 0,
    explanation: "Low profile reduces drag and improves stability by minimizing airflow underneath and lowering the center of gravity."
  },
  {
    id: "easy-95",
    question: "What is the primary force in sedimentation?",
    options: [
      "Gravity",
      "Drag",
      "Buoyancy",
      "Centrifugal force"
    ],
    correctAnswer: 0,
    explanation: "Sedimentation is primarily driven by gravity, which causes particles to settle through a fluid."
  },
  {
    id: "easy-96",
    question: "Which has higher terminal velocity in air?",
    options: [
      "A raindrop",
      "A snowflake",
      "A feather",
      "A piece of paper"
    ],
    correctAnswer: 0,
    explanation: "Raindrops have higher terminal velocity than snowflakes, feathers, or paper because they are more dense and have smaller area-to-mass ratios."
  },
  {
    id: "easy-97",
    question: "What is the purpose of a wind turbine?",
    options: [
      "Convert wind energy to electricity",
      "Measure wind speed",
      "Create wind",
      "Reduce wind speed"
    ],
    correctAnswer: 0,
    explanation: "Wind turbines convert the kinetic energy of wind into electrical energy through aerodynamic forces on their blades."
  },
  {
    id: "easy-98",
    question: "Which flow has uniform velocity profile?",
    options: [
      "Plug flow",
      "Parabolic flow",
      "Turbulent flow",
      "Laminar flow"
    ],
    correctAnswer: 0,
    explanation: "Plug flow has a uniform velocity profile across the entire cross-section, unlike parabolic (laminar) or turbulent flow profiles."
  },
  {
    id: "easy-99",
    question: "What is the effect of adding a lubricant?",
    options: [
      "Reduces friction",
      "Increases friction",
      "No effect on friction",
      "Changes color"
    ],
    correctAnswer: 0,
    explanation: "Lubricants reduce friction between surfaces by forming a slippery layer that minimizes direct contact."
  },
  {
    id: "easy-100",
    question: "Why do airplanes have winglets?",
    options: [
      "Reduce induced drag",
      "Increase lift",
      "Improve appearance",
      "Store fuel"
    ],
    correctAnswer: 0,
    explanation: "Winglets reduce induced drag by minimizing wingtip vortices, which are a major source of drag in aircraft."
  }
];

export const mediumQuestions: Question[] = [
  {
    id: "medium-1",
    question: "The terminal velocity of a spherical particle falling through a viscous fluid is directly proportional to:",
    options: [
      "Square of its radius",
      "Cube of its radius",
      "Square root of its radius",
      "Inverse of its radius"
    ],
    correctAnswer: 0,
    explanation: "According to Stokes' law, terminal velocity v ∝ r², where r is the radius of the spherical particle."
  },
  {
    id: "medium-2",
    question: "For a fluid flowing through a pipe of variable cross-section, the product of area and velocity remains constant. This is due to:",
    options: [
      "Conservation of energy",
      "Conservation of mass",
      "Conservation of momentum",
      "Bernoulli's principle"
    ],
    correctAnswer: 1,
    explanation: "The equation of continuity (A₁v₁ = A₂v₂) is based on the principle of conservation of mass."
  },
  {
    id: "medium-3",
    question: "The Reynolds number for fluid flow in a pipe is given by Re = ρVD/μ. What does V represent in this equation?",
    options: [
      "Volume flow rate",
      "Average velocity",
      "Kinematic viscosity",
      "Velocity gradient"
    ],
    correctAnswer: 1,
    explanation: "In the Reynolds number formula, V represents the average velocity of the fluid flow."
  },
  {
    id: "medium-4",
    question: "Which of the following factors does NOT affect the drag force on an object moving through a fluid?",
    options: [
      "Color of the object",
      "Velocity of the object",
      "Density of the fluid",
      "Viscosity of the fluid"
    ],
    correctAnswer: 0,
    explanation: "Drag force depends on velocity, fluid density, viscosity, and object shape/size, but not on the object's color."
  },
  {
    id: "medium-5",
    question: "When a fluid flows through a constriction in a pipe, the pressure:",
    options: [
      "Increases and velocity decreases",
      "Decreases and velocity increases",
      "Increases and velocity increases",
      "Decreases and velocity decreases"
    ],
    correctAnswer: 1,
    explanation: "According to Bernoulli's principle, when a fluid flows through a constriction, velocity increases and pressure decreases."
  },
  {
    id: "medium-6",
    question: "The transition from laminar to turbulent flow in a pipe occurs at a critical Reynolds number of approximately:",
    options: [
      "2300",
      "1000",
      "5000",
      "10000"
    ],
    correctAnswer: 0,
    explanation: "For flow in circular pipes, the transition from laminar to turbulent flow typically occurs around Re ≈ 2300."
  },
  {
    id: "medium-7",
    question: "Which of the following is NOT an assumption in the derivation of Bernoulli's equation?",
    options: [
      "The fluid is viscous",
      "The flow is steady",
      "The fluid is incompressible",
      "The flow is along a streamline"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation assumes the fluid is ideal (non-viscous), incompressible, and the flow is steady and along a streamline."
  },
  {
    id: "medium-8",
    question: "The drag force on a spherical object moving through a viscous fluid at low Reynolds number is given by:",
    options: [
      "F = 6πηrv",
      "F = ½CρAv²",
      "F = ρVg",
      "F = μA(dv/dy)"
    ],
    correctAnswer: 0,
    explanation: "Stokes' law states that for a sphere at low Reynolds number, drag force F = 6πηrv, where η is viscosity, r is radius, and v is velocity."
  },
  {
    id: "medium-9",
    question: "The coefficient of viscosity (η) for a fluid is defined as the ratio of:",
    options: [
      "Shear stress to velocity gradient",
      "Shear stress to shear strain",
      "Pressure to volume change",
      "Force to acceleration"
    ],
    correctAnswer: 0,
    explanation: "Coefficient of viscosity η = shear stress / velocity gradient, according to Newton's law of viscosity."
  },
  {
    id: "medium-10",
    question: "In which of the following cases is the flow most likely to be turbulent?",
    options: [
      "Honey flowing slowly through a pipe",
      "Water flowing rapidly through a rough pipe",
      "Air flowing slowly over a smooth surface",
      "Oil flowing through a narrow tube"
    ],
    correctAnswer: 1,
    explanation: "Turbulent flow is favored by high velocity, low viscosity, high density, and rough surfaces."
  },
  {
    id: "medium-11",
    question: "The Magnus effect is responsible for:",
    options: [
      "The curved path of a spinning ball",
      "The lift on an airplane wing",
      "The drag on a moving car",
      "The flow of blood in arteries"
    ],
    correctAnswer: 0,
    explanation: "The Magnus effect explains why spinning balls curve in flight due to pressure differences caused by rotation."
  },
  {
    id: "medium-12",
    question: "Which of the following has the highest viscosity?",
    options: [
      "Water",
      "Air",
      "Honey",
      "Alcohol"
    ],
    correctAnswer: 2,
    explanation: "Honey has much higher viscosity than water, air, or alcohol due to its thick, sticky nature."
  },
  {
    id: "medium-13",
    question: "The terminal velocity of a raindrop increases with:",
    options: [
      "Increasing size of the drop",
      "Decreasing size of the drop",
      "Increasing air density",
      "Decreasing gravitational acceleration"
    ],
    correctAnswer: 0,
    explanation: "Larger raindrops have higher terminal velocities because their weight increases more rapidly than drag force as size increases."
  },
  {
    id: "medium-14",
    question: "Bernoulli's equation for horizontal flow reduces to:",
    options: [
      "P + ½ρv² = constant",
      "P + ρgh = constant",
      "½ρv² + ρgh = constant",
      "P + ρgh + ½ρv² = constant"
    ],
    correctAnswer: 0,
    explanation: "For horizontal flow (h = constant), Bernoulli's equation simplifies to P + ½ρv² = constant."
  },
  {
    id: "medium-15",
    question: "The SI unit of coefficient of viscosity is:",
    options: [
      "Pascal-second",
      "Newton-meter",
      "Joule-second",
      "Kilogram-meter/second"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of viscosity is Pascal-second (Pa·s), which is equivalent to N·s/m²."
  },
  {
    id: "medium-16",
    question: "The drag force on an object moving through a fluid at high speed is approximately proportional to:",
    options: [
      "Square of the velocity",
      "Square root of the velocity",
      "Cube of the velocity",
      "Inverse of the velocity"
    ],
    correctAnswer: 0,
    explanation: "At high Reynolds numbers, drag force is approximately proportional to the square of the velocity (F ∝ v²)."
  },
  {
    id: "medium-17",
    question: "Which of the following is an example of laminar flow?",
    options: [
      "Smoke rising slowly from a cigarette",
      "Water flowing from a tap at high speed",
      "Air flow around a speeding car",
      "Whitewater rapids in a river"
    ],
    correctAnswer: 0,
    explanation: "Smoke rising slowly from a cigarette initially exhibits laminar flow before transitioning to turbulence."
  },
  {
    id: "medium-18",
    question: "The velocity profile for laminar flow in a circular pipe is:",
    options: [
      "Parabolic",
      "Uniform",
      "Linear",
      "Exponential"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow in a circular pipe, the velocity profile is parabolic with maximum velocity at the center."
  },
  {
    id: "medium-19",
    question: "The continuity equation for an incompressible fluid is based on:",
    options: [
      "Conservation of mass",
      "Conservation of energy",
      "Conservation of momentum",
      "Newton's second law"
    ],
    correctAnswer: 0,
    explanation: "The continuity equation (A₁v₁ = A₂v₂) expresses the principle of conservation of mass for fluid flow."
  },
  {
    id: "medium-20",
    question: "Which of the following factors increases the likelihood of turbulent flow?",
    options: [
      "High fluid velocity",
      "High fluid viscosity",
      "Small characteristic length",
      "Smooth surface"
    ],
    correctAnswer: 0,
    explanation: "Turbulent flow is more likely at high fluid velocities, low viscosities, large characteristic lengths, and rough surfaces."
  },
  {
    id: "medium-21",
    question: "The pressure difference between two points in a fluid is measured by:",
    options: [
      "Manometer",
      "Barometer",
      "Hydrometer",
      "Hygrometer"
    ],
    correctAnswer: 0,
    explanation: "A manometer is specifically designed to measure pressure differences in fluids."
  },
  {
    id: "medium-22",
    question: "The kinetic energy per unit volume of a fluid is given by:",
    options: [
      "½ρv²",
      "ρgh",
      "P",
      "ρv"
    ],
    correctAnswer: 0,
    explanation: "Kinetic energy per unit volume = ½mv²/V = ½ρv², where ρ is density and v is velocity."
  },
  {
    id: "medium-23",
    question: "Which of the following statements about viscosity is TRUE?",
    options: [
      "Viscosity of liquids decreases with temperature",
      "Viscosity of gases increases with temperature",
      "Viscosity is independent of temperature",
      "Viscosity of liquids increases with temperature"
    ],
    correctAnswer: 0,
    explanation: "Viscosity of liquids decreases with increasing temperature, while viscosity of gases increases with temperature."
  },
  {
    id: "medium-24",
    question: "The principle behind the working of a venturimeter is:",
    options: [
      "Bernoulli's principle",
      "Pascal's principle",
      "Archimedes' principle",
      "Newton's third law"
    ],
    correctAnswer: 0,
    explanation: "A venturimeter works on Bernoulli's principle, which relates pressure and velocity in a flowing fluid."
  },
  {
    id: "medium-25",
    question: "The terminal velocity of a falling sphere in a viscous fluid depends on:",
    options: [
      "All of the above",
      "Radius of the sphere",
      "Density difference between sphere and fluid",
      "Viscosity of the fluid"
    ],
    correctAnswer: 0,
    explanation: "Terminal velocity depends on sphere radius, density difference, fluid viscosity, and gravitational acceleration."
  },
  {
    id: "medium-26",
    question: "Which of the following has the lowest coefficient of viscosity?",
    options: [
      "Air",
      "Water",
      "Olive oil",
      "Glycerine"
    ],
    correctAnswer: 0,
    explanation: "Air has the lowest viscosity among these options, followed by water, olive oil, and glycerine."
  },
  {
    id: "medium-27",
    question: "The flow of blood in arteries is generally:",
    options: [
      "Pulsatile and may be turbulent",
      "Steady and laminar",
      "Always turbulent",
      "Always laminar"
    ],
    correctAnswer: 0,
    explanation: "Blood flow in arteries is pulsatile due to heartbeats and can become turbulent in certain conditions."
  },
  {
    id: "medium-28",
    question: "The drag force on a skydiver before opening the parachute is primarily due to:",
    options: [
      "Pressure drag",
      "Skin friction",
      "Wave drag",
      "Induced drag"
    ],
    correctAnswer: 0,
    explanation: "For bluff bodies like a falling human, pressure drag (form drag) dominates over skin friction drag."
  },
  {
    id: "medium-29",
    question: "Which of the following is a dimensionless number?",
    options: [
      "Reynolds number",
      "Viscosity",
      "Density",
      "Velocity"
    ],
    correctAnswer: 0,
    explanation: "Reynolds number (Re = ρVD/μ) is dimensionless as all units cancel out."
  },
  {
    id: "medium-30",
    question: "The velocity of fluid at the walls of a pipe in laminar flow is:",
    options: [
      "Zero",
      "Maximum",
      "Equal to the average velocity",
      "Half the maximum velocity"
    ],
    correctAnswer: 0,
    explanation: "In laminar flow through a pipe, the fluid velocity is zero at the pipe walls due to the no-slip condition."
  },
  {
    id: "medium-31",
    question: "The hydraulic press works on:",
    options: [
      "Pascal's principle",
      "Bernoulli's principle",
      "Archimedes' principle",
      "Newton's law"
    ],
    correctAnswer: 0,
    explanation: "Hydraulic press operates on Pascal's principle, which states that pressure applied to a confined fluid is transmitted undiminished."
  },
  {
    id: "medium-32",
    question: "The coefficient of viscosity for an ideal fluid is:",
    options: [
      "Zero",
      "Infinite",
      "Equal to 1",
      "Dependent on temperature"
    ],
    correctAnswer: 0,
    explanation: "An ideal fluid is assumed to be non-viscous, so its coefficient of viscosity is zero."
  },
  {
    id: "medium-33",
    question: "The Reynolds number is used to predict:",
    options: [
      "Type of flow (laminar or turbulent)",
      "Velocity of flow",
      "Pressure difference",
      "Viscosity of fluid"
    ],
    correctAnswer: 0,
    explanation: "The Reynolds number helps predict whether flow will be laminar or turbulent."
  },
  {
    id: "medium-34",
    question: "The terminal velocity of a falling object is reached when:",
    options: [
      "Weight = Drag force",
      "Weight > Drag force",
      "Weight < Drag force",
      "Drag force = 0"
    ],
    correctAnswer: 0,
    explanation: "Terminal velocity occurs when the downward weight force equals the upward drag force."
  },
  {
    id: "medium-35",
    question: "Which of the following fluids is compressible?",
    options: [
      "Gases",
      "Liquids",
      "Ideal fluids",
      "All of the above"
    ],
    correctAnswer: 0,
    explanation: "Gases are compressible, while liquids are generally considered incompressible for most fluid dynamics applications."
  },
  {
    id: "medium-36",
    question: "The pressure at a point in a fluid at rest depends on:",
    options: [
      "Depth and density of fluid",
      "Surface area",
      "Volume of fluid",
      "Shape of container"
    ],
    correctAnswer: 0,
    explanation: "For a fluid at rest, pressure at a point depends on depth and fluid density (P = P₀ + ρgh)."
  },
  {
    id: "medium-37",
    question: "The velocity of efflux from a small hole in a tank is given by:",
    options: [
      "v = √(2gh)",
      "v = 2gh",
      "v = gh",
      "v = √(gh)"
    ],
    correctAnswer: 0,
    explanation: "Torricelli's theorem states that the velocity of efflux is v = √(2gh), where h is the height of fluid above the hole."
  },
  {
    id: "medium-38",
    question: "Which of the following is NOT a type of drag force?",
    options: [
      "Gravitational drag",
      "Skin friction drag",
      "Form drag",
      "Wave drag"
    ],
    correctAnswer: 0,
    explanation: "Gravitational drag is not a recognized type of drag force in fluid dynamics."
  },
  {
    id: "medium-39",
    question: "The principle of continuity applies to:",
    options: [
      "Incompressible fluids",
      "Compressible fluids",
      "Ideal fluids only",
      "All fluids"
    ],
    correctAnswer: 0,
    explanation: "The simple form of continuity equation (A₁v₁ = A₂v₂) applies specifically to incompressible fluids."
  },
  {
    id: "medium-40",
    question: "The viscosity of a fluid is a measure of its:",
    options: [
      "Resistance to flow",
      "Density",
      "Compressibility",
      "Surface tension"
    ],
    correctAnswer: 0,
    explanation: "Viscosity quantifies a fluid's internal resistance to flow or its 'thickness'."
  },
  {
    id: "medium-41",
    question: "Which of the following will increase the rate of flow through a pipe?",
    options: [
      "Increasing pressure difference",
      "Increasing pipe length",
      "Increasing fluid viscosity",
      "Decreasing pipe radius"
    ],
    correctAnswer: 0,
    explanation: "According to Poiseuille's law, flow rate is directly proportional to the pressure difference."
  },
  {
    id: "medium-42",
    question: "The Magnus effect is caused by:",
    options: [
      "Difference in pressure on opposite sides of a spinning object",
      "Difference in temperature",
      "Difference in density",
      "Difference in viscosity"
    ],
    correctAnswer: 0,
    explanation: "The Magnus effect results from pressure differences on opposite sides of a spinning object due to unequal fluid velocities."
  },
  {
    id: "medium-43",
    question: "The drag force on an object is minimized by:",
    options: [
      "Streamlining",
      "Increasing surface roughness",
      "Increasing cross-sectional area",
      "Decreasing velocity"
    ],
    correctAnswer: 0,
    explanation: "Streamlining reduces drag by allowing smooth airflow and minimizing flow separation."
  },
  {
    id: "medium-44",
    question: "The velocity gradient in a fluid is a measure of:",
    options: [
      "Rate of change of velocity with distance",
      "Rate of change of pressure with distance",
      "Rate of change of density with distance",
      "Rate of change of temperature with distance"
    ],
    correctAnswer: 0,
    explanation: "Velocity gradient (dv/dy) represents how velocity changes with perpendicular distance in a fluid."
  },
  {
    id: "medium-45",
    question: "Which of the following is an example of turbulent flow?",
    options: [
      "Water flowing rapidly over rocks",
      "Honey dripping slowly",
      "Blood flow in capillaries",
      "Oil flowing in a thin tube"
    ],
    correctAnswer: 0,
    explanation: "Water flowing rapidly over rocks exhibits turbulent flow with eddies and mixing."
  },
  {
    id: "medium-46",
    question: "The pressure energy per unit volume of a fluid is:",
    options: [
      "P",
      "ρgh",
      "½ρv²",
      "ρv"
    ],
    correctAnswer: 0,
    explanation: "Pressure energy per unit volume is simply the pressure P."
  },
  {
    id: "medium-47",
    question: "The terminal velocity of a falling sphere is directly proportional to:",
    options: [
      "Square of its radius",
      "Cube of its radius",
      "Square root of its radius",
      "Inverse of its radius"
    ],
    correctAnswer: 0,
    explanation: "From Stokes' law, terminal velocity v ∝ r² for a sphere falling through a viscous fluid."
  },
  {
    id: "medium-48",
    question: "Which of the following fluids has the highest Reynolds number for the same flow conditions?",
    options: [
      "Air",
      "Water",
      "Oil",
      "Glycerine"
    ],
    correctAnswer: 0,
    explanation: "Air has the lowest viscosity, so for the same flow conditions, it will have the highest Reynolds number."
  },
  {
    id: "medium-49",
    question: "The principle behind the atomizer is:",
    options: [
      "Bernoulli's principle",
      "Pascal's principle",
      "Archimedes' principle",
      "Newton's law of viscosity"
    ],
    correctAnswer: 0,
    explanation: "Atomizers work on Bernoulli's principle - high air velocity creates low pressure, drawing liquid up and breaking it into droplets."
  },
  {
    id: "medium-50",
    question: "The drag force on an object moving through a fluid does NOT depend on:",
    options: [
      "Color of the object",
      "Velocity of the object",
      "Density of the fluid",
      "Shape of the object"
    ],
    correctAnswer: 0,
    explanation: "Drag force depends on velocity, fluid density, object shape/size, and fluid viscosity, but not on the object's color."
  },
  {
    id: "medium-51",
    question: "The velocity profile in turbulent flow is:",
    options: [
      "Flatter than in laminar flow",
      "More parabolic than in laminar flow",
      "The same as in laminar flow",
      "Completely random"
    ],
    correctAnswer: 0,
    explanation: "In turbulent flow, the velocity profile is flatter due to enhanced mixing across the pipe."
  },
  {
    id: "medium-52",
    question: "Which of the following is a unit of kinematic viscosity?",
    options: [
      "Stoke",
      "Pascal",
      "Poise",
      "Newton"
    ],
    correctAnswer: 0,
    explanation: "Stoke is the unit of kinematic viscosity (ν = η/ρ), while poise is the unit of dynamic viscosity."
  },
  {
    id: "medium-53",
    question: "The pressure at the throat of a venturimeter is:",
    options: [
      "Less than the inlet pressure",
      "More than the inlet pressure",
      "Equal to the inlet pressure",
      "Zero"
    ],
    correctAnswer: 0,
    explanation: "In a venturimeter, pressure decreases at the constriction (throat) where velocity increases."
  },
  {
    id: "medium-54",
    question: "The coefficient of viscosity for water at room temperature is approximately:",
    options: [
      "0.001 Pa·s",
      "0.01 Pa·s",
      "0.1 Pa·s",
      "1 Pa·s"
    ],
    correctAnswer: 0,
    explanation: "The viscosity of water at 20°C is approximately 0.001 Pa·s or 1 centipoise."
  },
  {
    id: "medium-55",
    question: "Which of the following statements about Bernoulli's equation is TRUE?",
    options: [
      "It represents conservation of energy",
      "It represents conservation of mass",
      "It represents conservation of momentum",
      "It represents Newton's second law"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation is essentially a statement of energy conservation for flowing fluids."
  },
  {
    id: "medium-56",
    question: "The terminal velocity of a falling object can be increased by:",
    options: [
      "Increasing its density",
      "Decreasing its density",
      "Increasing fluid viscosity",
      "Decreasing fluid density"
    ],
    correctAnswer: 0,
    explanation: "Increasing the object's density increases its weight, leading to higher terminal velocity."
  },
  {
    id: "medium-57",
    question: "The flow of blood in capillaries is generally:",
    options: [
      "Laminar",
      "Turbulent",
      "Transitional",
      "Intermittent"
    ],
    correctAnswer: 0,
    explanation: "Due to small diameter and low velocity, blood flow in capillaries is typically laminar."
  },
  {
    id: "medium-58",
    question: "Which of the following has the highest drag coefficient?",
    options: [
      "Flat plate perpendicular to flow",
      "Streamlined body",
      "Sphere",
      "Airfoil"
    ],
    correctAnswer: 0,
    explanation: "A flat plate perpendicular to flow has a very high drag coefficient (about 1.28) due to complete flow separation."
  },
  {
    id: "medium-59",
    question: "The Reynolds number for flow in a pipe is given by:",
    options: [
      "Re = ρVD/μ",
      "Re = ρV/μ",
      "Re = VD/μ",
      "Re = ρD/μV"
    ],
    correctAnswer: 0,
    explanation: "The correct formula for Reynolds number in pipe flow is Re = ρVD/μ, where D is pipe diameter."
  },
  {
    id: "medium-60",
    question: "The velocity of fluid at the center of a pipe in laminar flow is:",
    options: [
      "Maximum",
      "Minimum",
      "Zero",
      "Equal to the average velocity"
    ],
    correctAnswer: 0,
    explanation: "In laminar flow through a pipe, velocity is maximum at the center and zero at the walls."
  },
  {
    id: "medium-61",
    question: "Which of the following is NOT a assumption of Bernoulli's equation?",
    options: [
      "The fluid is viscous",
      "The flow is steady",
      "The fluid is incompressible",
      "The flow is along a streamline"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli's equation assumes the fluid is ideal (non-viscous), incompressible, and the flow is steady and along a streamline."
  },
  {
    id: "medium-62",
    question: "The drag force on a sphere at high Reynolds number is approximately proportional to:",
    options: [
      "v²",
      "v",
      "√v",
      "1/v"
    ],
    correctAnswer: 0,
    explanation: "At high Reynolds numbers, drag force is approximately proportional to the square of velocity (F ∝ v²)."
  },
  {
    id: "medium-63",
    question: "The SI unit of dynamic viscosity is:",
    options: [
      "Pa·s",
      "m²/s",
      "N/m",
      "kg/m³"
    ],
    correctAnswer: 0,
    explanation: "The SI unit of dynamic viscosity is Pascal-second (Pa·s)."
  },
  {
    id: "medium-64",
    question: "Which of the following factors decreases the Reynolds number?",
    options: [
      "Increasing viscosity",
      "Increasing velocity",
      "Increasing density",
      "Increasing diameter"
    ],
    correctAnswer: 0,
    explanation: "Reynolds number Re = ρVD/μ, so increasing viscosity (μ) decreases the Reynolds number."
  },
  {
    id: "medium-65",
    question: "The principle behind the working of a pitot tube is:",
    options: [
      "Bernoulli's principle",
      "Pascal's principle",
      "Archimedes' principle",
      "Newton's law of viscosity"
    ],
    correctAnswer: 0,
    explanation: "Pitot tubes measure fluid velocity using Bernoulli's principle by comparing stagnation and static pressures."
  },
  {
    id: "medium-66",
    question: "The terminal velocity of a falling object is reached when:",
    options: [
      "Acceleration becomes zero",
      "Velocity becomes zero",
      "Drag force becomes zero",
      "Weight becomes zero"
    ],
    correctAnswer: 0,
    explanation: "At terminal velocity, acceleration becomes zero as net force becomes zero."
  },
  {
    id: "medium-67",
    question: "Which of the following fluids is considered incompressible?",
    options: [
      "Water",
      "Air",
      "Steam",
      "All gases"
    ],
    correctAnswer: 0,
    explanation: "Liquids like water are generally considered incompressible, while gases are compressible."
  },
  {
    id: "medium-68",
    question: "The pressure at a depth h in a fluid of density ρ is given by:",
    options: [
      "P = P₀ + ρgh",
      "P = P₀ - ρgh",
      "P = ρgh",
      "P = P₀/ρgh"
    ],
    correctAnswer: 0,
    explanation: "The pressure at depth h in a fluid is P = P₀ + ρgh, where P₀ is the surface pressure."
  },
  {
    id: "medium-69",
    question: "The velocity of efflux from an orifice is independent of:",
    options: [
      "The density of the fluid",
      "The height of fluid above the orifice",
      "The gravitational acceleration",
      "The size of the orifice"
    ],
    correctAnswer: 0,
    explanation: "According to Torricelli's theorem, v = √(2gh), which is independent of fluid density."
  },
  {
    id: "medium-70",
    question: "Which of the following is a type of drag force?",
    options: [
      "Form drag",
      "Gravitational drag",
      "Magnetic drag",
      "Electrical drag"
    ],
    correctAnswer: 0,
    explanation: "Form drag (pressure drag) is a type of drag force in fluid dynamics."
  },
  {
    id: "medium-71",
    question: "The principle of continuity applies to:",
    options: [
      "Steady flow",
      "Unsteady flow",
      "Both steady and unsteady flow",
      "Neither steady nor unsteady flow"
    ],
    correctAnswer: 0,
    explanation: "The simple form of continuity equation (A₁v₁ = A₂v₂) applies to steady flow conditions."
  },
  {
    id: "medium-72",
    question: "The viscosity of a gas increases with temperature because:",
    options: [
      "Molecular collisions increase",
      "Molecular collisions decrease",
      "Density increases",
      "Density decreases"
    ],
    correctAnswer: 0,
    explanation: "Gas viscosity increases with temperature because higher temperatures increase molecular collisions and momentum transfer."
  },
  {
    id: "medium-73",
    question: "Which of the following will decrease the rate of flow through a pipe?",
    options: [
      "Increasing pipe length",
      "Increasing pressure difference",
      "Increasing pipe radius",
      "Decreasing fluid viscosity"
    ],
    correctAnswer: 0,
    explanation: "According to Poiseuille's law, flow rate is inversely proportional to pipe length."
  },
  {
    id: "medium-74",
    question: "The Magnus effect causes a spinning ball to curve due to:",
    options: [
      "Pressure difference on opposite sides",
      "Temperature difference",
      "Density difference",
      "Viscosity difference"
    ],
    correctAnswer: 0,
    explanation: "The Magnus effect creates a pressure difference on opposite sides of a spinning ball, causing it to curve."
  },
  {
    id: "medium-75",
    question: "The drag force on an object is maximized by:",
    options: [
      "Increasing surface roughness",
      "Streamlining",
      "Decreasing cross-sectional area",
      "Decreasing velocity"
    ],
    correctAnswer: 0,
    explanation: "Surface roughness increases drag by promoting turbulence and flow separation."
  },
  {
    id: "medium-76",
    question: "The velocity gradient in a fluid is also known as:",
    options: [
      "Rate of shear strain",
      "Rate of compression",
      "Rate of expansion",
      "Rate of rotation"
    ],
    correctAnswer: 0,
    explanation: "Velocity gradient (dv/dy) represents the rate of shear strain in a fluid."
  },
  {
    id: "medium-77",
    question: "Which of the following is an example of laminar flow?",
    options: [
      "Blood flow in capillaries",
      "Waterfall",
      "Smoke from a chimney",
      "River rapids"
    ],
    correctAnswer: 0,
    explanation: "Blood flow in capillaries is typically laminar due to small diameter and low velocity."
  },
  {
    id: "medium-78",
    question: "The potential energy per unit volume of a fluid is:",
    options: [
      "ρgh",
      "P",
      "½ρv²",
      "ρv"
    ],
    correctAnswer: 0,
    explanation: "Potential energy per unit volume = mgh/V = ρgh."
  },
  {
    id: "medium-79",
    question: "The terminal velocity of a falling sphere is inversely proportional to:",
    options: [
      "Viscosity of the fluid",
      "Density of the sphere",
      "Gravitational acceleration",
      "Radius of the sphere"
    ],
    correctAnswer: 0,
    explanation: "From Stokes' law, terminal velocity v ∝ 1/η, where η is the fluid viscosity."
  },
  {
    id: "medium-80",
    question: "Which of the following fluids has the lowest Reynolds number for the same flow conditions?",
    options: [
      "Glycerine",
      "Water",
      "Air",
      "Alcohol"
    ],
    correctAnswer: 0,
    explanation: "Glycerine has the highest viscosity, so for the same flow conditions, it will have the lowest Reynolds number."
  },
  {
    id: "medium-81",
    question: "The principle behind the carburetor is:",
    options: [
      "Bernoulli's principle",
      "Pascal's principle",
      "Archimedes' principle",
      "Newton's law of viscosity"
    ],
    correctAnswer: 0,
    explanation: "Carburetors work on Bernoulli's principle - air flow creates low pressure, drawing fuel into the airstream."
  },
  {
    id: "medium-82",
    question: "The drag force on an object moving through a fluid depends on:",
    options: [
      "All of the above",
      "Velocity of the object",
      "Density of the fluid",
      "Shape of the object"
    ],
    correctAnswer: 0,
    explanation: "Drag force depends on velocity, fluid density, object shape/size, and fluid viscosity."
  },
  {
    id: "medium-83",
    question: "The velocity profile in laminar flow is:",
    options: [
      "Parabolic",
      "Flat",
      "Linear",
      "Random"
    ],
    correctAnswer: 0,
    explanation: "In laminar flow through a pipe, the velocity profile is parabolic."
  },
  {
    id: "medium-84",
    question: "Which of the following is a unit of dynamic viscosity?",
    options: [
      "Poise",
      "Stoke",
      "Pascal",
      "Newton"
    ],
    correctAnswer: 0,
    explanation: "Poise is the unit of dynamic viscosity, while stoke is the unit of kinematic viscosity."
  },
  {
    id: "medium-85",
    question: "The pressure at the inlet of a venturimeter is:",
    options: [
      "Greater than at the throat",
      "Less than at the throat",
      "Equal to at the throat",
      "Zero"
    ],
    correctAnswer: 0,
    explanation: "In a venturimeter, pressure is higher at the inlet than at the constricted throat."
  },
  {
    id: "medium-86",
    question: "The coefficient of viscosity for air at room temperature is approximately:",
    options: [
      
      "0.0002 Pa·s",
      "0.00002 Pa·s",
      "0.002 Pa·s",
      "0.02 Pa·s"
    ],
    correctAnswer: 1,
    explanation: "The viscosity of air at 20°C is approximately 1.8 × 10⁻⁵ Pa·s or 0.000018 Pa·s."
  },
  {
    id: "medium-87",
    question: "Which of the following statements about the equation of continuity is TRUE?",
    options: [
      "It represents conservation of mass",
      "It represents conservation of energy",
      "It represents conservation of momentum",
      "It represents Newton's second law"
    ],
    correctAnswer: 0,
    explanation: "The equation of continuity (A₁v₁ = A₂v₂) represents conservation of mass for fluid flow."
  },
  {
    id: "medium-88",
    question: "The terminal velocity of a falling object can be decreased by:",
    options: [
     
      "Increasing object density",
      "Decreasing fluid density",
       "Increasing fluid viscosity",
      "Increasing object size"
    ],
    correctAnswer: 2,
    explanation: "Increasing fluid viscosity increases drag force, which decreases terminal velocity."
  },
  {
    id: "medium-89",
    question: "The flow of blood in large arteries may become turbulent due to:",
    options: [
      "Low velocity",
      "Small diameter",
      "Low viscosity",
       "High velocity"
    ],
    correctAnswer: 3,
    explanation: "In large arteries, high velocity during systole can cause transition to turbulent flow."
  },
  {
    id: "medium-90",
    question: "Which of the following has the lowest drag coefficient?",
    options: [
      "Streamlined body",
      "Flat plate perpendicular to flow",
      "Sphere",
      "Cylinder"
    ],
    correctAnswer: 0,
    explanation: "Streamlined bodies have the lowest drag coefficients due to minimized flow separation."
  },
  {
    id: "medium-91",
    question: "The Reynolds number for flow between parallel plates is given by:",
    options: [
      "Re = ρV/μ",
      "Re = ρVh/μ",
      "Re = Vh/μ",
      "Re = ρh/μV"
    ],
    correctAnswer: 1,
    explanation: "For flow between parallel plates, Re = ρVh/μ, where h is the distance between plates."
  },
  {
    id: "medium-92",
    question: "The velocity of fluid at the center of a pipe in turbulent flow is:",
    options: [
      "Close to the maximum velocity",
      "Zero",
      "Equal to the average velocity",
      "Less than the average velocity"
    ],
    correctAnswer: 0,
    explanation: "In turbulent flow, the velocity profile is relatively flat, so center velocity is close to the maximum."
  },
  {
    id: "medium-93",
    question: "Which of the following is an assumption of Bernoulli's equation?",
    options: [
      "The fluid is viscous",
      "The flow is unsteady",
        "The fluid is non-viscous",
      "The fluid is compressible"
    ],
    correctAnswer: 2,
    explanation: "Bernoulli's equation assumes the fluid is ideal (non-viscous), incompressible, and the flow is steady."
  },
  {
    id: "medium-94",
    question: "The drag force on a sphere at low Reynolds number is proportional to:",
    options: [
      "v",
      "v²",
      "√v",
      "1/v"
    ],
    correctAnswer: 0,
    explanation: "At low Reynolds numbers (Stokes' flow), drag force is proportional to velocity (F ∝ v)."
  },
  {
    id: "medium-95",
    question: "The SI unit of kinematic viscosity is:",
    options: [
      "Pa·s",
      "N/m",
      "kg/m³",
       "m²/s"
    ],
    correctAnswer: 3,
    explanation: "The SI unit of kinematic viscosity is m²/s."
  },
  {
    id: "medium-96",
    question: "Which of the following factors increases the Reynolds number?",
    options: [
      "Increasing viscosity",
      "Increasing velocity",
      "Decreasing density",
      "Decreasing diameter"
    ],
    correctAnswer: 1,
    explanation: "Reynolds number Re = ρVD/μ, so increasing velocity (V) increases the Reynolds number."
  },
  {
    id: "medium-97",
    question: "The principle behind the working of an airfoil is:",
    options: [
      "Bernoulli's principle",
      "Pascal's principle",
      "Archimedes' principle",
      "Newton's law of viscosity"
    ],
    correctAnswer: 0,
    explanation: "Airfoils generate lift based on Bernoulli's principle - faster airflow over the curved upper surface creates lower pressure."
  },
  {
    id: "medium-98",
    question: "The terminal velocity of a falling object is:",
    options: [
      "Constant",
      "Increasing",
      "Decreasing",
      "Zero"
    ],
    correctAnswer: 0,
    explanation: "At terminal velocity, the object falls at constant speed with zero acceleration."
  },
  {
    id: "medium-99",
    question: "Which of the following fluids is compressible?",
    options: [
     
      "All liquids",
      "Water",
       "All gases",
      "Oil"
    ],
    correctAnswer: 2,
    explanation: "Gases are compressible, while liquids are generally considered incompressible."
  },
  {
    id: "medium-100",
    question: "The pressure difference between two points in a fluid flowing horizontally is related to:",
    options: [
      "Height difference",
       "Velocity difference",
      "Density difference",
      "Viscosity difference"
    ],
    correctAnswer: 1,
    explanation: "For horizontal flow, Bernoulli's equation gives P₁ - P₂ = ½ρ(v₂² - v₁²), so pressure difference relates to velocity difference."
  }
];
export const hardQuestions: Question[] = [
  {
    id: "hard-1",
    question: "For a spherical particle falling through a viscous fluid, the terminal velocity is proportional to the square of its radius. This relationship is derived from:",
    options: [
      "Newton's law of viscosity",
      "Stokes' law",
      "Bernoulli's theorem",
      "Equation of continuity"
    ],
    correctAnswer: 1,
    explanation: "Stokes' law states that drag force F = 6πηrv, and at terminal velocity, this equals the weight, leading to v ∝ r²."
  },
  {
    id: "hard-2",
    question: "The Reynolds number for flow in a pipe is given by Re = ρVD/μ. If the diameter is doubled while keeping velocity constant, how does Re change?",
    options: [
      "Doubles",
      "Halves",
      "Quadruples",
      "Remains same"
    ],
    correctAnswer: 0,
    explanation: "Re ∝ D, so doubling diameter doubles the Reynolds number when velocity is constant."
  },
  {
    id: "hard-3",
    question: "In turbulent flow through a pipe, the velocity profile is relatively flat because:",
    options: [
      "Eddy mixing equalizes velocities",
      "Viscosity increases toward center",
      "Pressure gradient is uniform",
      "Density decreases toward walls"
    ],
    correctAnswer: 0,
    explanation: "Turbulent eddies cause intense mixing across the pipe, making the velocity profile flatter than in laminar flow."
  },
  {
    id: "hard-4",
    question: "The drag coefficient for a sphere in a fluid depends primarily on:",
    options: [
      "Reynolds number",
      "Froude number",
      "Mach number",
      "Weber number"
    ],
    correctAnswer: 0,
    explanation: "The drag coefficient for spheres is primarily a function of Reynolds number, varying significantly with flow regime."
  },
  {
    id: "hard-5",
    question: "For a fluid flowing through a horizontal pipe with a constriction, the pressure difference between the wide and narrow sections can be used to measure:",
    options: [
      "Flow rate",
      "Fluid density",
      "Viscosity",
      "Surface tension"
    ],
    correctAnswer: 0,
    explanation: "Venturimeters use the pressure difference between sections of different diameters to calculate flow rate using Bernoulli's principle."
  },
  {
    id: "hard-6",
    question: "The critical Reynolds number for flow in a pipe is approximately 2300. This value:",
    options: [
      "Is valid for smooth pipes only",
      "Depends on pipe material",
      "Is universal for all fluids",
      "Varies with temperature"
    ],
    correctAnswer: 0,
    explanation: "The critical Reynolds number of 2300 is for smooth pipes; rough pipes may transition at lower Re values."
  },
  {
    id: "hard-7",
    question: "In the derivation of Bernoulli's equation, the term ½ρv² represents:",
    options: [
      "Kinetic energy per unit volume",
      "Potential energy per unit volume",
      "Pressure energy per unit volume",
      "Total energy per unit volume"
    ],
    correctAnswer: 0,
    explanation: "The term ½ρv² represents kinetic energy per unit volume in Bernoulli's equation."
  },
  {
    id: "hard-8",
    question: "For a given flow rate, the pressure drop in a pipe is proportional to:",
    options: [
      "The fourth power of pipe diameter",
      "The square of pipe diameter",
      "The inverse of pipe diameter",
      "The inverse square of pipe diameter"
    ],
    correctAnswer: 3,
    explanation: "According to Poiseuille's law, pressure drop ΔP ∝ 1/D⁴ for a given flow rate in laminar flow."
  },
  {
    id: "hard-9",
    question: "The velocity distribution for laminar flow between two parallel plates is:",
    options: [
      "Parabolic",
      "Linear",
      "Uniform",
      "Logarithmic"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow between parallel plates, the velocity profile is parabolic, with maximum velocity at the center."
  },
  {
    id: "hard-10",
    question: "The boundary layer thickness in fluid flow:",
    options: [
      "Increases with distance from leading edge",
      "Decreases with distance from leading edge",
      "Remains constant along the surface",
      "Is independent of fluid viscosity"
    ],
    correctAnswer: 0,
    explanation: "Boundary layer thickness increases with distance from the leading edge due to viscous diffusion."
  },
  {
    id: "hard-11",
    question: "For flow over a flat plate, transition from laminar to turbulent boundary layer occurs at a Reynolds number of approximately:",
    options: [
      "5 × 10⁵",
      "2300",
      "10⁴",
      "10⁶"
    ],
    correctAnswer: 0,
    explanation: "Transition from laminar to turbulent boundary layer typically occurs at Rex ≈ 5 × 10⁵ for flow over a flat plate."
  },
  {
    id: "hard-12",
    question: "The drag force on a very smooth sphere at very low Reynolds number (Re < 1) is given by:",
    options: [
      "F = 6πηrv",
      "F = ½CρAv²",
      "F = ρVg",
      "F = μA(dv/dy)"
    ],
    correctAnswer: 0,
    explanation: "At very low Re (creeping flow), Stokes' law applies: F = 6πηrv."
  },
  {
    id: "hard-13",
    question: "The velocity potential function exists for:",
    options: [
      "Irrotational flow",
      "Rotational flow",
      "Compressible flow",
      "Turbulent flow"
    ],
    correctAnswer: 0,
    explanation: "Velocity potential function φ exists only for irrotational flow (∇×V = 0)."
  },
  {
    id: "hard-14",
    question: "The stream function for a two-dimensional flow:",
    options: [
      "Satisfies continuity equation",
      "Is defined only for irrotational flow",
      "Is always equal to velocity potential",
      "Exists only for compressible flow"
    ],
    correctAnswer: 0,
    explanation: "The stream function ψ automatically satisfies the continuity equation for 2D incompressible flow."
  },
  {
    id: "hard-15",
    question: "For a fluid particle in irrotational flow, the:",
    options: [
      "Vorticity is zero",
      "Vorticity is maximum",
      "Velocity gradient is zero",
      "Pressure is constant"
    ],
    correctAnswer: 0,
    explanation: "In irrotational flow, vorticity (∇×V) = 0 by definition."
  },
  {
    id: "hard-16",
    question: "The Navier-Stokes equations represent:",
    options: [
      "Conservation of momentum",
      "Conservation of mass",
      "Conservation of energy",
      "Equation of state"
    ],
    correctAnswer: 0,
    explanation: "The Navier-Stokes equations are the differential form of Newton's second law (conservation of momentum) for fluid flow."
  },
  {
    id: "hard-17",
    question: "For fully developed laminar flow in a pipe, the friction factor f is related to Reynolds number by:",
    options: [
      "f = 64/Re",
      "f = 16/Re",
      "f = 0.316/Re⁰.²⁵",
      "f = 0.184/Re⁰.²"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow in pipes, the friction factor f = 64/Re (Hagen-Poiseuille flow)."
  },
  {
    id: "hard-18",
    question: "The Moody chart gives the friction factor as a function of:",
    options: [
      "Reynolds number and relative roughness",
      "Reynolds number and Mach number",
      "Froude number and relative roughness",
      "Weber number and Reynolds number"
    ],
    correctAnswer: 0,
    explanation: "The Moody chart plots friction factor against Reynolds number with relative roughness (ε/D) as a parameter."
  },
  {
    id: "hard-19",
    question: "The boundary layer separation occurs when:",
    options: [
      "Adverse pressure gradient is strong enough",
      "Favorable pressure gradient exists",
      "Velocity is maximum",
      "Viscosity is very low"
    ],
    correctAnswer: 0,
    explanation: "Boundary layer separation occurs when the adverse pressure gradient is strong enough to cause flow reversal."
  },
  {
    id: "hard-20",
    question: "The Kármán vortex street is formed:",
    options: [
      "Behind bluff bodies at certain Re",
      "In front of streamlined bodies",
      "In fully developed pipe flow",
      "In boundary layers only"
    ],
    correctAnswer: 0,
    explanation: "Kármán vortex street is an alternating pattern of vortices shed behind bluff bodies at intermediate Reynolds numbers."
  },
  {
    id: "hard-21",
    question: "The Froude number is important in flows where:",
    options: [
      "Gravity forces are significant",
      "Compressibility effects dominate",
      "Surface tension is important",
      "Viscous forces dominate"
    ],
    correctAnswer: 0,
    explanation: "Froude number Fr = V/√(gL) is important when gravity forces are significant, as in open channel flow."
  },
  {
    id: "hard-22",
    question: "The Weber number represents the ratio of:",
    options: [
      "Inertial forces to surface tension forces",
      "Inertial forces to viscous forces",
      "Inertial forces to gravitational forces",
      "Pressure forces to viscous forces"
    ],
    correctAnswer: 0,
    explanation: "Weber number We = ρV²L/σ represents the ratio of inertial forces to surface tension forces."
  },
  {
    id: "hard-23",
    question: "The Mach number is defined as the ratio of:",
    options: [
      "Flow velocity to speed of sound",
      "Inertial forces to viscous forces",
      "Pressure forces to inertial forces",
      "Gravity forces to inertial forces"
    ],
    correctAnswer: 0,
    explanation: "Mach number M = V/c, where c is the speed of sound in the fluid."
  },
  {
    id: "hard-24",
    question: "For compressible flow, the continuity equation becomes:",
    options: [
      "∂ρ/∂t + ∇·(ρV) = 0",
      "∇·V = 0",
      "Dρ/Dt = 0",
      "ρ = constant"
    ],
    correctAnswer: 0,
    explanation: "For compressible flow, the continuity equation is ∂ρ/∂t + ∇·(ρV) = 0."
  },
  {
    id: "hard-25",
    question: "In a shock wave, the flow properties change:",
    options: [
      "Discontinuously",
      "Gradually",
      "Linearly",
      "Sinusoidally"
    ],
    correctAnswer: 0,
    explanation: "Across a shock wave, flow properties change discontinuously over a very small distance."
  },
  {
    id: "hard-26",
    question: "The Prandtl number is the ratio of:",
    options: [
      "Momentum diffusivity to thermal diffusivity",
      "Thermal diffusivity to momentum diffusivity",
      "Momentum diffusivity to mass diffusivity",
      "Viscosity to density"
    ],
    correctAnswer: 0,
    explanation: "Prandtl number Pr = ν/α = (momentum diffusivity)/(thermal diffusivity)."
  },
  {
    id: "hard-27",
    question: "The Grashof number is important in:",
    options: [
      "Natural convection",
      "Forced convection",
      "Compressible flow",
      "Turbulent flow"
    ],
    correctAnswer: 0,
    explanation: "Grashof number Gr represents the ratio of buoyancy forces to viscous forces and is important in natural convection."
  },
  {
    id: "hard-28",
    question: "The Nusselt number represents:",
    options: [
      "Dimensionless heat transfer coefficient",
      "Dimensionless pressure drop",
      "Dimensionless velocity",
      "Dimensionless temperature"
    ],
    correctAnswer: 0,
    explanation: "Nusselt number Nu = hL/k is the dimensionless heat transfer coefficient."
  },
  {
    id: "hard-29",
    question: "For flow over a flat plate, the average Nusselt number in laminar flow is proportional to:",
    options: [
      "Re⁰.⁵",
      "Re",
      "Re²",
      "Re⁰.²"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow over a flat plate, Nu ∝ Re⁰.⁵ (boundary layer theory)."
  },
  {
    id: "hard-30",
    question: "The Stanton number is defined as:",
    options: [
      "Nu/(Re·Pr)",
      "Re·Pr/Nu",
      "Nu·Pr/Re",
      "Re/(Nu·Pr)"
    ],
    correctAnswer: 0,
    explanation: "Stanton number St = Nu/(Re·Pr) = h/(ρCpV)."
  },
  {
    id: "hard-31",
    question: "The Darcy-Weisbach equation for head loss in pipes is:",
    options: [
      "h_f = f(L/D)(V²/2g)",
      "h_f = 32μLV/(ρgD²)",
      "h_f = KV²/2g",
      "h_f = 4f(L/D)(V²/2g)"
    ],
    correctAnswer: 0,
    explanation: "Darcy-Weisbach equation: h_f = f(L/D)(V²/2g), where f is friction factor."
  },
  {
    id: "hard-32",
    question: "For laminar flow in a pipe, the friction factor f:",
    options: [
      "Is independent of relative roughness",
      "Depends strongly on relative roughness",
      "Is proportional to Re",
      "Is always constant"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow, f = 64/Re, which is independent of pipe roughness."
  },
  {
    id: "hard-33",
    question: "The velocity defect law describes:",
    options: [
      "Velocity distribution in turbulent boundary layers",
      "Velocity in potential flow",
      "Velocity in laminar flow",
      "Velocity in compressible flow"
    ],
    correctAnswer: 0,
    explanation: "The velocity defect law (U_max - U)/u* = f(y/δ) describes the velocity distribution in turbulent boundary layers."
  },
  {
    id: "hard-34",
    question: "The law of the wall describes:",
    options: [
      "Velocity distribution near a wall in turbulent flow",
      "Velocity in potential flow",
      "Velocity in laminar flow",
      "Pressure distribution in boundary layers"
    ],
    correctAnswer: 0,
    explanation: "The law of the wall describes the velocity distribution in the inner region of turbulent boundary layers."
  },
  {
    id: "hard-35",
    question: "The Kolmogorov scale in turbulence represents:",
    options: [
      "The smallest scales of turbulent motion",
      "The largest scales of turbulent motion",
      "The mean flow scale",
      "The boundary layer thickness"
    ],
    correctAnswer: 0,
    explanation: "Kolmogorov scale η = (ν³/ε)^¼ represents the smallest scales where viscosity dissipates turbulent energy."
  },
  {
    id: "hard-36",
    question: "The turbulent kinetic energy k is defined as:",
    options: [
      "½(u'² + v'² + w'²)",
      "u'v'",
      "u'²",
      "(u'² + v'² + w'²)"
    ],
    correctAnswer: 0,
    explanation: "Turbulent kinetic energy k = ½(u'² + v'² + w'²), where u', v', w' are fluctuating velocity components."
  },
  {
    id: "hard-37",
    question: "The Reynolds stress in turbulent flow represents:",
    options: [
      "Momentum transfer by turbulent fluctuations",
      "Viscous stress",
      "Pressure stress",
      "Gravitational stress"
    ],
    correctAnswer: 0,
    explanation: "Reynolds stress -ρu'v' represents momentum transfer due to turbulent fluctuations."
  },
  {
    id: "hard-38",
    question: "The mixing length theory was proposed by:",
    options: [
      "Prandtl",
      "Reynolds",
      "Kármán",
      "Taylor"
    ],
    correctAnswer: 0,
    explanation: "The mixing length theory for turbulent flow was proposed by Ludwig Prandtl."
  },
  {
    id: "hard-39",
    question: "The von Kármán constant in turbulent flow has a value of approximately:",
    options: [
      "0.4",
      "1.0",
      "0.1",
      "2.0"
    ],
    correctAnswer: 0,
    explanation: "The von Kármán constant κ ≈ 0.4 appears in the logarithmic law of the wall."
  },
  {
    id: "hard-40",
    question: "The drag crisis for a sphere occurs when:",
    options: [
      "Boundary layer transitions to turbulent",
      "Flow becomes completely laminar",
      "Reynolds number is very low",
      "Surface is very rough"
    ],
    correctAnswer: 0,
    explanation: "Drag crisis occurs when boundary layer transitions to turbulent, delaying separation and reducing drag."
  },
  {
    id: "hard-41",
    question: "The Stokes stream function for axisymmetric flow satisfies:",
    options: [
      "Continuity equation automatically",
      "Momentum equation automatically",
      "Energy equation automatically",
      "All equations automatically"
    ],
    correctAnswer: 0,
    explanation: "The Stokes stream function for axisymmetric flow automatically satisfies the continuity equation."
  },
  {
    id: "hard-42",
    question: "For potential flow around a cylinder, the pressure coefficient at the stagnation point is:",
    options: [
      "1",
      "0",
      "-1",
      "2"
    ],
    correctAnswer: 0,
    explanation: "At stagnation point, V=0, so Cp = (P-P∞)/(½ρV∞²) = 1."
  },
  {
    id: "hard-43",
    question: "The d'Alembert's paradox states that:",
    options: [
      "There is no drag in ideal fluid flow",
      "There is no lift in ideal fluid flow",
      "There is no pressure variation",
      "There is no velocity variation"
    ],
    correctAnswer: 0,
    explanation: "d'Alembert's paradox: In ideal fluid flow around a body, the drag force is zero, contradicting real fluid behavior."
  },
  {
    id: "hard-44",
    question: "The Kutta-Joukowski theorem gives:",
    options: [
      "Lift per unit span for an airfoil",
      "Drag for a sphere",
      "Pressure distribution around cylinder",
      "Velocity potential for source flow"
    ],
    correctAnswer: 0,
    explanation: "Kutta-Joukowski theorem: Lift per unit span L' = ρV∞Γ, where Γ is circulation."
  },
  {
    id: "hard-45",
    question: "The Blasius solution is for:",
    options: [
      "Laminar boundary layer on flat plate",
      "Turbulent boundary layer",
      "Pipe flow",
      "Jet flow"
    ],
    correctAnswer: 0,
    explanation: "Blasius solution provides the velocity distribution in laminar boundary layer on a flat plate."
  },
  {
    id: "hard-46",
    question: "The displacement thickness δ* of a boundary layer is defined as:",
    options: [
      "The distance by which streamlines are displaced outward",
      "The boundary layer thickness",
      "The momentum thickness",
      "The energy thickness"
    ],
    correctAnswer: 0,
    explanation: "Displacement thickness δ* is the distance by which the external streamlines are displaced due to boundary layer formation."
  },
  {
    id: "hard-47",
    question: "The momentum thickness θ of a boundary layer represents:",
    options: [
      "The loss of momentum flux due to boundary layer",
      "The boundary layer thickness",
      "The displacement effect",
      "The energy loss"
    ],
    correctAnswer: 0,
    explanation: "Momentum thickness θ represents the loss of momentum flux due to the presence of boundary layer."
  },
  {
    id: "hard-48",
    question: "The shape factor H for boundary layers is defined as:",
    options: [
      "δ*/θ",
      "θ/δ*",
      "δ/δ*",
      "δ/θ"
    ],
    correctAnswer: 0,
    explanation: "Shape factor H = δ*/θ indicates the fullness of the velocity profile."
  },
  {
    id: "hard-49",
    question: "For laminar boundary layers, the shape factor H is approximately:",
    options: [
      "2.6",
      "1.0",
      "1.4",
      "3.5"
    ],
    correctAnswer: 0,
    explanation: "For laminar boundary layers, the shape factor H ≈ 2.6."
  },
  {
    id: "hard-50",
    question: "The von Kármán momentum integral equation is used for:",
    options: [
      "Approximate boundary layer calculations",
      "Exact solution of Navier-Stokes equations",
      "Potential flow calculations",
      "Turbulence modeling"
    ],
    correctAnswer: 0,
    explanation: "The von Kármán momentum integral equation provides an approximate method for boundary layer calculations."
  },
  {
    id: "hard-51",
    question: "The Eckert number represents the ratio of:",
    options: [
      "Kinetic energy to enthalpy difference",
      "Inertial forces to viscous forces",
      "Pressure forces to viscous forces",
      "Gravity forces to inertial forces"
    ],
    correctAnswer: 0,
    explanation: "Eckert number Ec = V²/(CpΔT) represents the ratio of kinetic energy to enthalpy difference."
  },
  {
    id: "hard-52",
    question: "The Lewis number is the ratio of:",
    options: [
      "Thermal diffusivity to mass diffusivity",
      "Mass diffusivity to thermal diffusivity",
      "Momentum diffusivity to thermal diffusivity",
      "Thermal diffusivity to momentum diffusivity"
    ],
    correctAnswer: 0,
    explanation: "Lewis number Le = α/D = (thermal diffusivity)/(mass diffusivity)."
  },
  {
    id: "hard-53",
    question: "The Schmidt number is the ratio of:",
    options: [
      "Momentum diffusivity to mass diffusivity",
      "Mass diffusivity to momentum diffusivity",
      "Thermal diffusivity to mass diffusivity",
      "Mass diffusivity to thermal diffusivity"
    ],
    correctAnswer: 0,
    explanation: "Schmidt number Sc = ν/D = (momentum diffusivity)/(mass diffusivity)."
  },
  {
    id: "hard-54",
    question: "The Sherwood number represents:",
    options: [
      "Dimensionless mass transfer coefficient",
      "Dimensionless heat transfer coefficient",
      "Dimensionless velocity",
      "Dimensionless concentration"
    ],
    correctAnswer: 0,
    explanation: "Sherwood number Sh = kL/D is the dimensionless mass transfer coefficient."
  },
  {
    id: "hard-55",
    question: "For flow over a flat plate, the average Sherwood number in laminar flow is proportional to:",
    options: [
      "Re⁰.⁵Sc⁰.³³",
      "ReSc",
      "Re²Sc",
      "Re⁰.⁵Sc"
    ],
    correctAnswer: 0,
    explanation: "For laminar flow over flat plate, Sh ∝ Re⁰.⁵Sc⁰.³³ (analogous to heat transfer correlation)."
  },
  {
    id: "hard-56",
    question: "The Rayleigh number is defined as:",
    options: [
      "Gr·Pr",
      "Gr/Pr",
      "Re·Pr",
      "Re/Pr"
    ],
    correctAnswer: 0,
    explanation: "Rayleigh number Ra = Gr·Pr is used in natural convection problems."
  },
  {
    id: "hard-57",
    question: "The critical Rayleigh number for onset of convection in a horizontal fluid layer is approximately:",
    options: [
      "1708",
      "1000",
      "2300",
      "5000"
    ],
    correctAnswer: 0,
    explanation: "The critical Rayleigh number for onset of Benard convection is Rac ≈ 1708."
  },
  {
    id: "hard-58",
    question: "The Biot number represents the ratio of:",
    options: [
      "Internal conduction resistance to external convection resistance",
      "External convection resistance to internal conduction resistance",
      "Inertial forces to viscous forces",
      "Heat capacity rates"
    ],
    correctAnswer: 0,
    explanation: "Biot number Bi = hL/k represents the ratio of internal conduction resistance to external convection resistance."
  },
  {
    id: "hard-59",
    question: "The Fourier number represents:",
    options: [
      "Dimensionless time",
      "Dimensionless temperature",
      "Dimensionless velocity",
      "Dimensionless pressure"
    ],
    correctAnswer: 0,
    explanation: "Fourier number Fo = αt/L² is dimensionless time in transient conduction problems."
  },
  {
    id: "hard-60",
    question: "The Peclet number is defined as:",
    options: [
      "Re·Pr",
      "Re/Pr",
      "Gr·Pr",
      "Gr/Pr"
    ],
    correctAnswer: 0,
    explanation: "Peclet number Pe = Re·Pr = VL/α represents the ratio of convective to conductive heat transfer."
  },
  {
    id: "hard-61",
    question: "For fully developed laminar flow in a pipe, the Nusselt number is constant and equal to:",
    options: [
      "4.36 for constant heat flux",
      "3.66 for constant wall temperature",
      "0.023Re⁰.⁸Pr⁰.⁴",
      "0.125fRe"
    ],
    correctAnswer: 0,
    explanation: "For fully developed laminar flow in circular pipe with constant heat flux, Nu = 4.36."
  },
  {
    id: "hard-62",
    question: "The Graetz number is defined as:",
    options: [
      "Re·Pr·D/L",
      "Re·Pr·L/D",
      "Re·Pr",
      "Re/DL"
    ],
    correctAnswer: 0,
    explanation: "Graetz number Gz = Re·Pr·D/L is used in entrance region heat transfer problems."
  },
  {
    id: "hard-63",
    question: "The effectiveness-NTU method is used for:",
    options: [
      "Heat exchanger analysis",
      "Boundary layer calculations",
      "Turbulence modeling",
      "Potential flow analysis"
    ],
    correctAnswer: 0,
    explanation: "The effectiveness-NTU method is used for heat exchanger analysis and design."
  },
  {
    id: "hard-64",
    question: "The log mean temperature difference (LMTD) is used for:",
    options: [
      "Heat exchanger analysis",
      "Boundary layer calculations",
      "Turbulence modeling",
      "Potential flow analysis"
    ],
    correctAnswer: 0,
    explanation: "LMTD is used in heat exchanger analysis to calculate the driving temperature difference."
  },
  {
    id: "hard-65",
    question: "For a counterflow heat exchanger, the effectiveness:",
    options: [
      "Can approach 1",
      "Is always less than 0.5",
      "Is independent of NTU",
      "Is always 0"
    ],
    correctAnswer: 0,
    explanation: "For counterflow heat exchangers, the effectiveness can approach 1 as NTU increases."
  },
  {
    id: "hard-66",
    question: "The Buckingham Pi theorem is used for:",
    options: [
      "Dimensional analysis",
      "Solving differential equations",
      "Turbulence modeling",
      "Boundary layer calculations"
    ],
    correctAnswer: 0,
    explanation: "Buckingham Pi theorem provides a method for dimensional analysis to determine dimensionless groups."
  },
  {
    id: "hard-67",
    question: "The Rayleigh scattering is proportional to:",
    options: [
      "1/λ⁴",
      "λ⁴",
      "1/λ",
      "λ"
    ],
    correctAnswer: 0,
    explanation: "Rayleigh scattering intensity ∝ 1/λ⁴, which is why the sky appears blue."
  },
  {
    id: "hard-68",
    question: "The Knudsen number represents the ratio of:",
    options: [
      "Mean free path to characteristic length",
      "Characteristic length to mean free path",
      "Viscous forces to inertial forces",
      "Inertial forces to viscous forces"
    ],
    correctAnswer: 0,
    explanation: "Knudsen number Kn = λ/L, where λ is mean free path and L is characteristic length."
  },
  {
    id: "hard-69",
    question: "For Knudsen number > 10, the flow is considered:",
    options: [
      "Free molecular flow",
      "Continuum flow",
      "Slip flow",
      "Transition flow"
    ],
    correctAnswer: 0,
    explanation: "For Kn > 10, the flow is free molecular flow where continuum assumptions break down."
  },
  {
    id: "hard-70",
    question: "The Stokes number represents the ratio of:",
    options: [
      "Particle response time to flow time scale",
      "Flow time scale to particle response time",
      "Inertial forces to viscous forces",
      "Viscous forces to inertial forces"
    ],
    correctAnswer: 0,
    explanation: "Stokes number St = τ_p/τ_f, where τ_p is particle response time and τ_f is flow time scale."
  },
  {
    id: "hard-71",
    question: "The Weber number becomes important when:",
    options: [
      "Surface tension effects are significant",
      "Compressibility effects are important",
      "Gravity effects dominate",
      "Viscous effects are strong"
    ],
    correctAnswer: 0,
    explanation: "Weber number We = ρV²L/σ is important when surface tension effects are significant."
  },
  {
    id: "hard-72",
    question: "The capillary number represents the ratio of:",
    options: [
      "Viscous forces to surface tension forces",
      "Surface tension forces to viscous forces",
      "Inertial forces to surface tension forces",
      "Surface tension forces to inertial forces"
    ],
    correctAnswer: 0,
    explanation: "Capillary number Ca = μV/σ represents the ratio of viscous forces to surface tension forces."
  },
  {
    id: "hard-73",
    question: "The Marangoni effect is caused by:",
    options: [
      "Surface tension gradients",
      "Temperature gradients",
      "Pressure gradients",
      "Velocity gradients"
    ],
    correctAnswer: 0,
    explanation: "Marangoni effect is fluid flow driven by surface tension gradients, often caused by temperature or concentration gradients."
  },
  {
    id: "hard-74",
    question: "The Eötvös number represents the ratio of:",
    options: [
      "Gravity forces to surface tension forces",
      "Surface tension forces to gravity forces",
      "Inertial forces to surface tension forces",
      "Surface tension forces to inertial forces"
    ],
    correctAnswer: 0,
    explanation: "Eötvös number Eo = ΔρgL²/σ represents the ratio of gravity forces to surface tension forces."
  },
  {
    id: "hard-75",
    question: "The Morton number is defined as:",
    options: [
      "gμ⁴Δρ/(ρ²σ³)",
      "ρσ³/(gμ⁴Δρ)",
      "gρ²σ³/(μ⁴Δρ)",
      "Δρσ³/(gρ²μ⁴)"
    ],
    correctAnswer: 0,
    explanation: "Morton number Mo = gμ⁴Δρ/(ρ²σ³) is used in bubble and drop dynamics."
  },
  {
    id: "hard-76",
    question: "The Ohnesorge number represents the ratio of:",
    options: [
      "Viscous forces to inertial and surface tension forces",
      "Inertial forces to viscous forces",
      "Surface tension forces to viscous forces",
      "Gravity forces to surface tension forces"
    ],
    correctAnswer: 0,
    explanation: "Ohnesorge number Oh = μ/√(ρσL) relates viscous forces to inertial and surface tension forces."
  },
  {
    id: "hard-77",
    question: "The Dean number is used for flow in:",
    options: [
      "Curved pipes",
      "Straight pipes",
      "Flat plates",
      "Cylinders"
    ],
    correctAnswer: 0,
    explanation: "Dean number Dn = Re√(D/R) is used for flow in curved pipes, where R is radius of curvature."
  },
  {
    id: "hard-78",
    question: "The Taylor number is important in:",
    options: [
      "Taylor-Couette flow between rotating cylinders",
      "Pipe flow",
      "Boundary layer flow",
      "Jet flow"
    ],
    correctAnswer: 0,
    explanation: "Taylor number Ta is used in Taylor-Couette flow between rotating concentric cylinders."
  },
  {
    id: "hard-79",
    question: "The Rossby number represents the ratio of:",
    options: [
      "Inertial forces to Coriolis forces",
      "Coriolis forces to inertial forces",
      "Pressure forces to Coriolis forces",
      "Coriolis forces to pressure forces"
    ],
    correctAnswer: 0,
    explanation: "Rossby number Ro = V/(fL) represents the ratio of inertial forces to Coriolis forces (f is Coriolis parameter)."
  },
  {
    id: "hard-80",
    question: "The Ekman number represents the ratio of:",
    options: [
      "Viscous forces to Coriolis forces",
      "Coriolis forces to viscous forces",
      "Inertial forces to Coriolis forces",
      "Coriolis forces to inertial forces"
    ],
    correctAnswer: 0,
    explanation: "Ekman number E = ν/(fL²) represents the ratio of viscous forces to Coriolis forces."
  },
  {
    id: "hard-81",
    question: "The magnetic Reynolds number represents the ratio of:",
    options: [
      "Magnetic advection to magnetic diffusion",
      "Magnetic diffusion to magnetic advection",
      "Lorentz force to inertial force",
      "Inertial force to Lorentz force"
    ],
    correctAnswer: 0,
    explanation: "Magnetic Reynolds number Rem = VL/η, where η is magnetic diffusivity."
  },
  {
    id: "hard-82",
    question: "The Hartmann number represents the ratio of:",
    options: [
      "Lorentz force to viscous force",
      "Viscous force to Lorentz force",
      "Inertial force to Lorentz force",
      "Lorentz force to inertial force"
    ],
    correctAnswer: 0,
    explanation: "Hartmann number Ha = BL√(σ/μ) represents the ratio of Lorentz force to viscous force in MHD."
  },
  {
    id: "hard-83",
    question: "The Richardson number represents the ratio of:",
    options: [
      "Buoyancy forces to inertial forces",
      "Inertial forces to buoyancy forces",
      "Viscous forces to buoyancy forces",
      "Buoyancy forces to viscous forces"
    ],
    correctAnswer: 0,
    explanation: "Richardson number Ri = gβΔTL/V² represents the ratio of buoyancy forces to inertial forces."
  },
  {
    id: "hard-84",
    question: "The Froude number in stratified flows is defined as:",
    options: [
      "V/√(g'L)",
      "V/√(gL)",
      "√(gL)/V",
      "√(g'L)/V"
    ],
    correctAnswer: 0,
    explanation: "For stratified flows, Froude number Fr = V/√(g'L), where g' = gΔρ/ρ is reduced gravity."
  },
  {
    id: "hard-85",
    question: "The Reynolds stress tensor in turbulent flow has:",
    options: [
      "6 independent components",
      "3 independent components",
      "9 independent components",
      "1 independent component"
    ],
    correctAnswer: 0,
    explanation: "The Reynolds stress tensor is symmetric and has 6 independent components."
  },
  {
    id: "hard-86",
    question: "The Kolmogorov -5/3 law describes:",
    options: [
      "Energy spectrum in inertial subrange",
      "Velocity distribution in boundary layer",
      "Pressure distribution in pipes",
      "Temperature distribution in jets"
    ],
    correctAnswer: 0,
    explanation: "Kolmogorov -5/3 law: E(k) ∝ ε²/³k⁻⁵/³ in the inertial subrange of turbulence."
  },
  {
    id: "hard-87",
    question: "The Taylor microscale in turbulence represents:",
    options: [
      "The scale where dissipation begins",
      "The largest scale",
      "The smallest scale",
      "The mean flow scale"
    ],
    correctAnswer: 0,
    explanation: "Taylor microscale λ represents the scale where dissipation begins to become important."
  },
  {
    id: "hard-88",
    question: "The integral scale in turbulence represents:",
    options: [
      "The largest energy-containing eddies",
      "The smallest dissipative eddies",
      "The mean flow scale",
      "The Kolmogorov scale"
    ],
    correctAnswer: 0,
    explanation: "Integral scale L represents the size of the largest energy-containing eddies."
  },
  {
    id: "hard-89",
    question: "The turbulence intensity is defined as:",
    options: [
      "u'/U",
      "U/u'",
      "u'²/U",
      "U²/u'"
    ],
    correctAnswer: 0,
    explanation: "Turbulence intensity I = u'/U, where u' is RMS fluctuating velocity and U is mean velocity."
  },
  {
    id: "hard-90",
    question: "The k-ε turbulence model solves transport equations for:",
    options: [
      "Turbulent kinetic energy and its dissipation rate",
      "Mean velocity and pressure",
      "Reynolds stresses",
      "Vorticity and stream function"
    ],
    correctAnswer: 0,
    explanation: "The k-ε model solves transport equations for turbulent kinetic energy k and its dissipation rate ε."
  },
  {
    id: "hard-91",
    question: "The RNG k-ε model is:",
    options: [
      "A refinement of standard k-ε model",
      "A completely different model",
      "Used only for laminar flow",
      "Used only for compressible flow"
    ],
    correctAnswer: 0,
    explanation: "RNG (Renormalization Group) k-ε model is a refinement of the standard k-ε model with better theoretical foundation."
  },
  {
    id: "hard-92",
    question: "The Large Eddy Simulation (LES) approach:",
    options: [
      "Resolves large eddies and models small eddies",
      "Resolves all eddies",
      "Models all eddies",
      "Is only for laminar flow"
    ],
    correctAnswer: 0,
    explanation: "LES resolves large energy-containing eddies directly and models the smaller universal eddies."
  },
  {
    id: "hard-93",
    question: "Direct Numerical Simulation (DNS) of turbulence:",
    options: [
      "Resolves all scales of motion",
      "Models all scales of motion",
      "Resolves only large scales",
      "Is only for laminar flow"
    ],
    correctAnswer: 0,
    explanation: "DNS resolves all scales of turbulent motion without any modeling, but is computationally expensive."
  },
  {
    id: "hard-94",
    question: "The Smagorinsky model is used in:",
    options: [
      "LES for subgrid-scale modeling",
      "DNS for turbulence calculation",
      "RANS models for eddy viscosity",
      "Potential flow calculations"
    ],
    correctAnswer: 0,
    explanation: "Smagorinsky model is a subgrid-scale model used in Large Eddy Simulation."
  },
  {
    id: "hard-95",
    question: "The Baldwin-Lomax model is:",
    options: [
      "An algebraic turbulence model",
      "A two-equation model",
      "A Reynolds stress model",
      "A LES model"
    ],
    correctAnswer: 0,
    explanation: "Baldwin-Lomax model is an algebraic (zero-equation) turbulence model often used for boundary layers."
  },
  {
    id: "hard-96",
    question: "The Spalart-Allmaras model solves a transport equation for:",
    options: [
      "Modified turbulent viscosity",
      "Turbulent kinetic energy",
      "Dissipation rate",
      "Reynolds stresses"
    ],
    correctAnswer: 0,
    explanation: "Spalart-Allmaras model solves a transport equation for a modified turbulent viscosity variable."
  },
  {
    id: "hard-97",
    question: "The v²-f model is:",
    options: [
      "A four-equation turbulence model",
      "A one-equation model",
      "A two-equation model",
      "An algebraic model"
    ],
    correctAnswer: 0,
    explanation: "v²-f model is a four-equation turbulence model that solves for k, ε, v², and f."
  },
  {
    id: "hard-98",
    question: "The Reynolds Stress Model (RSM):",
    options: [
      "Solves transport equations for all Reynolds stresses",
      "Uses eddy viscosity hypothesis",
      "Is an algebraic model",
      "Is only for laminar flow"
    ],
    correctAnswer: 0,
    explanation: "RSM solves transport equations for all components of the Reynolds stress tensor, avoiding eddy viscosity assumption."
  },
  {
    id: "hard-99",
    question: "The law of the wall for smooth surfaces is:",
    options: [
      "u⁺ = (1/κ) ln(y⁺) + B",
      "u⁺ = y⁺",
      "u⁺ = constant",
      "u⁺ = y⁺²"
    ],
    correctAnswer: 0,
    explanation: "The logarithmic law of the wall: u⁺ = (1/κ) ln(y⁺) + B, where κ ≈ 0.4, B ≈ 5.0-5.5."
  },
  {
    id: "hard-100",
    question: "The wake function in turbulent boundary layers:",
    options: [
      "Accounts for deviation from log law",
      "Describes the viscous sublayer",
      "Is used only in laminar flow",
      "Describes potential flow"
    ],
    correctAnswer: 0,
    explanation: "The wake function Π(x) accounts for the deviation from the logarithmic law in the outer part of turbulent boundary layers."
  }
];
export const fluidynamicsQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions,
} as const;
