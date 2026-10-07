export const BUSINESS = {
  name: 'AColeman Heating and Cooling',
  category: 'Heating Contractor',
  address: '2409 W Dugdale Rd',
  city: 'Waukegan',
  state: 'IL',
  zip: '60085',
  country: 'United States',
  phone: '224-659-6849',
  phoneLink: 'tel:2246596849',
  website: 'https://acolemanhvac.com/',
  mapsLink: 'https://maps.app.goo.gl/8DXZ7qq5QuxvqXbSA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.2872402293356!2d-87.86604088827738!3d42.336398971075035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f93b24877942d%3A0x98f471dcd7170030!2sAColeman%20Heating%20and%20Cooling!5m0!3m2!1sen!2sin!4v1791348234728!5m2!1sen!2sin',
};

export const IMAGES = {
  heroTech: 'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1920',
  techInspect: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=1200',
  techRepair: 'https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1200',
  techRooftop: 'https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg?auto=compress&cs=tinysrgb&w=1200',
  techWall: 'https://images.pexels.com/photos/7347538/pexels-photo-7347538.jpeg?auto=compress&cs=tinysrgb&w=1200',
  techCircuit: 'https://images.pexels.com/photos/10699352/pexels-photo-10699352.jpeg?auto=compress&cs=tinysrgb&w=1200',
  furnaceFlame: 'https://images.pexels.com/photos/6854973/pexels-photo-6854973.jpeg?auto=compress&cs=tinysrgb&w=1200',
  fireplace: 'https://images.pexels.com/photos/7790664/pexels-photo-7790664.jpeg?auto=compress&cs=tinysrgb&w=1200',
  heatPump: 'https://images.pexels.com/photos/20046689/pexels-photo-20046689.jpeg?auto=compress&cs=tinysrgb&w=1200',
  livingRoom: 'https://images.pexels.com/photos/11296142/pexels-photo-11296142.jpeg?auto=compress&cs=tinysrgb&w=1200',
  livingRoom2: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1200',
  livingRoom3: 'https://images.pexels.com/photos/6580225/pexels-photo-6580225.jpeg?auto=compress&cs=tinysrgb&w=1200',
  family: 'https://images.pexels.com/photos/3875141/pexels-photo-3875141.jpeg?auto=compress&cs=tinysrgb&w=1200',
  acOutdoor: 'https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?auto=compress&cs=tinysrgb&w=1200',
  acUnit: 'https://images.pexels.com/photos/27134985/pexels-photo-27134985.jpeg?auto=compress&cs=tinysrgb&w=1200',
  thermostat: 'https://images.pexels.com/photos/7616651/pexels-photo-7616651.jpeg?auto=compress&cs=tinysrgb&w=1200',
  thermostatHand: 'https://images.pexels.com/photos/36818203/pexels-photo-36818203.jpeg?auto=compress&cs=tinysrgb&w=1200',
  thermostatAdjust: 'https://images.pexels.com/photos/36077581/pexels-photo-36077581.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ductwork: 'https://images.pexels.com/photos/30749458/pexels-photo-30749458.jpeg?auto=compress&cs=tinysrgb&w=1200',
  airDuct: 'https://images.pexels.com/photos/11538226/pexels-photo-11538226.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ventilation: 'https://images.pexels.com/photos/32032996/pexels-photo-32032996.jpeg?auto=compress&cs=tinysrgb&w=1200',
  winterHouse: 'https://images.pexels.com/photos/30731294/pexels-photo-30731294.jpeg?auto=compress&cs=tinysrgb&w=1200',
  winterHouse2: 'https://images.pexels.com/photos/6944210/pexels-photo-6944210.jpeg?auto=compress&cs=tinysrgb&w=1200',
  electricalPanel: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&w=1200',
  electricalWiring: 'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1200',
  electricalBreaker: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tools: 'https://images.pexels.com/photos/6720531/pexels-photo-6720531.jpeg?auto=compress&cs=tinysrgb&w=1200',
  neighborhood: 'https://images.pexels.com/photos/667221/pexels-photo-667221.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortName: string;
  category: 'Heating' | 'Cooling' | 'HVAC';
  icon: string;
  image: string;
  alt: string;
  shortDescription: string;
  cta: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  intro: string;
  problems: string[];
  symptoms: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'heating-repair',
    name: 'Heating Repair',
    shortName: 'Heating Repair',
    category: 'Heating',
    icon: 'Flame',
    image: IMAGES.furnaceFlame,
    alt: 'Furnace flame burning in a residential heating system in Waukegan IL',
    shortDescription:
      'Fast, thorough heating repair for furnaces and heating systems that have stopped working or are not performing the way they should.',
    cta: 'Explore Heating Repair',
    titleTag: 'Heating Repair Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'Heating repair in Waukegan, IL. AColeman Heating and Cooling diagnoses and repairs furnaces and heating systems that are not producing heat or are running poorly. Call 224-659-6849.',
    h1: 'Heating Repair in Waukegan, IL',
    intro:
      'When your heating system stops working during a cold Illinois winter, you need a reliable HVAC contractor who can diagnose the problem and get your heat back on. AColeman Heating and Cooling provides heating repair services for homes throughout Waukegan and the surrounding communities. Whether your furnace has stopped producing heat, is making unusual noises, or is short-cycling, we work through the problem methodically to identify the cause and perform the appropriate repair.',
    problems: [
      'Furnace not heating or producing only lukewarm air',
      'Weak airflow from supply vents throughout the home',
      'Strange furnace noises such as banging, rattling, or squealing',
      'Frequent cycling on and off without reaching the set temperature',
      'Thermostat not communicating with the heating system',
      'Uneven heating across different rooms and floors',
      'Heating system will not start or respond to thermostat commands',
      'Unexpected heating performance issues or sudden changes',
    ],
    symptoms: [
      {
        title: 'No Heat or Insufficient Heat',
        description:
          'If your furnace is running but the air coming from your vents is cold or only slightly warm, the problem could be a faulty igniter, a blocked burner, a heat exchanger issue, or a thermostat communication failure.',
      },
      {
        title: 'Unusual Noises',
        description:
          'Banging, rattling, squealing, or grinding sounds from your furnace typically point to a mechanical problem such as a worn blower motor, loose components, a cracked heat exchanger, or ignition issues.',
      },
      {
        title: 'Short Cycling',
        description:
          'A furnace that turns on and off frequently without completing a full heating cycle may have a dirty flame sensor, an overheating problem, or an incorrectly sized system that needs professional evaluation.',
      },
      {
        title: 'Pilot Light or Ignition Problems',
        description:
          'If your pilot light keeps going out or your electronic ignition fails to light the burners, the heating system cannot produce heat. This may be caused by a faulty thermocouple, gas valve, or ignition control.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call 224-659-6849 and describe the heating problem you are experiencing. We will ask questions to understand the symptoms and schedule a service visit.',
      },
      {
        title: 'Diagnose',
        description:
          'We inspect the heating system, identify the cause of the problem, and explain what is happening so you understand the repair that is needed.',
      },
      {
        title: 'Repair',
        description:
          'We perform the repair using the appropriate parts and procedures, test the system to confirm it is operating correctly, and answer any questions you have.',
      },
    ],
    faqs: [
      {
        q: 'What are the most common heating repair problems in Waukegan?',
        a: 'The most common heating repair issues we see include furnaces that will not start, insufficient heat production, short cycling, faulty igniters or pilot lights, and thermostat communication problems. Illinois winters put heavy demand on heating systems, so these issues are common during peak heating season.',
      },
      {
        q: 'Should I repair or replace my furnace?',
        a: 'That depends on the nature of the problem, the condition of the system, and the cost of the repair compared to a replacement. We diagnose the issue first and explain your options so you can make an informed decision. We do not recommend unnecessary replacements.',
      },
      {
        q: 'How do I know if my heating system needs professional attention?',
        a: 'If your heating system is not reaching the set temperature, making unusual noises, cycling frequently, or not starting at all, it likely needs professional diagnosis. Waiting can lead to further damage, especially during cold weather.',
      },
    ],
  },
  {
    slug: 'furnace-repair',
    name: 'Furnace Repair',
    shortName: 'Furnace Repair',
    category: 'Heating',
    icon: 'Flame',
    image: IMAGES.fireplace,
    alt: 'Close-up of warm fire inside a furnace, representing furnace repair service in Waukegan IL',
    shortDescription:
      'Targeted furnace repair for ignition problems, blower issues, heat exchanger concerns, and any furnace that is not heating properly.',
    cta: 'Explore Furnace Repair',
    titleTag: 'Furnace Repair Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'Furnace repair in Waukegan, IL. AColeman Heating and Cooling fixes furnaces that will not start, are short cycling, making noise, or not producing heat. Call 224-659-6849.',
    h1: 'Furnace Repair in Waukegan, IL',
    intro:
      'A malfunctioning furnace during an Illinois winter is more than an inconvenience — it can affect the safety and comfort of your entire household. AColeman Heating and Cooling provides furnace repair services that focus on identifying the specific component or condition causing the problem. From ignition failures to blower motor issues, we work through each furnace system systematically to restore proper operation.',
    problems: [
      'Furnace will not turn on or respond to the thermostat',
      'Pilot light keeps going out or electronic ignition fails',
      'Blower motor runs continuously or not at all',
      'Furnace produces cold or lukewarm air',
      'Cracked or damaged heat exchanger detected during inspection',
      'Flame sensor is dirty or malfunctioning, causing shutdown',
      'Gas valve or burner problems preventing proper combustion',
      'Furnace short cycles or runs inefficiently',
    ],
    symptoms: [
      {
        title: 'Furnace Will Not Start',
        description:
          'If your furnace does not respond when the thermostat calls for heat, the problem may be a tripped breaker, a faulty ignition system, a bad limit switch, or a control board failure. We test each component to find the root cause.',
      },
      {
        title: 'Blower Motor Issues',
        description:
          'A blower motor that runs continuously, does not start, or makes humming noises can indicate a failing motor, a bad capacitor, or a stuck relay. Proper diagnosis prevents unnecessary part replacement.',
      },
      {
        title: 'Heat Exchanger Concerns',
        description:
          'A cracked heat exchanger can allow combustion gases into your home. If we identify this during a repair visit, we explain the situation clearly and discuss the appropriate next steps.',
      },
      {
        title: 'Flame Sensor Problems',
        description:
          'A dirty or failing flame sensor is one of the most common reasons a furnace shuts down shortly after starting. Cleaning or replacing the sensor typically resolves the issue.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us and describe the furnace symptoms. We will schedule a diagnostic visit at a time that works for you.',
      },
      {
        title: 'Diagnose',
        description:
          'We inspect the furnace components, test the ignition system, blower, heat exchanger, and controls, and explain what we find.',
      },
      {
        title: 'Repair',
        description:
          'We perform the necessary furnace repair, test the system under normal operating conditions, and confirm the problem is resolved.',
      },
    ],
    faqs: [
      {
        q: 'Why does my furnace keep shutting off after a few seconds?',
        a: 'This is frequently caused by a dirty or faulty flame sensor. The sensor detects whether the burner flame is lit and shuts off the gas if it cannot confirm the flame. Cleaning or replacing the flame sensor usually resolves this issue.',
      },
      {
        q: 'What causes a furnace to blow cold air?',
        a: 'A furnace blowing cold air may have an ignition failure, a gas supply issue, a faulty limit switch, or a problem with the heat exchanger. Proper diagnosis is needed to determine which component is responsible.',
      },
      {
        q: 'How long does a furnace repair take?',
        a: 'Most furnace repairs can be completed during a single visit once the problem has been diagnosed. The exact time depends on the specific component involved and whether parts need to be sourced.',
      },
    ],
  },
  {
    slug: 'heating-installation',
    name: 'Heating Installation',
    shortName: 'Heating Installation',
    category: 'Heating',
    icon: 'ThermometerSun',
    image: IMAGES.heatPump,
    alt: 'Heat pump system installed indoors, representing heating installation in Waukegan IL',
    shortDescription:
      'Professional heating installation for new systems and replacements, ensuring proper sizing, setup, and startup for reliable performance.',
    cta: 'Explore Heating Installation',
    titleTag: 'Heating Installation Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'Heating installation in Waukegan, IL. AColeman Heating and Cooling installs and replaces heating systems with attention to proper sizing, setup, and startup. Call 224-659-6849.',
    h1: 'Heating Installation in Waukegan, IL',
    intro:
      'A properly installed heating system is the foundation of reliable winter comfort. AColeman Heating and Cooling provides heating installation services for new construction, system replacements, and upgrades throughout Waukegan. We focus on correct system sizing, proper connections, and thorough startup testing so your new heating system operates the way it should from day one.',
    problems: [
      'Old furnace that needs replacement due to age or repeated breakdowns',
      'Heating system that is incorrectly sized for the home',
      'New construction requiring a complete heating system installation',
      'Upgrading to a more efficient heating system',
      'Heating system damaged beyond repair',
      'Uneven heating caused by improperly installed ductwork or equipment',
      'Replacing a system that has a cracked heat exchanger',
      'Building addition or renovation requiring new heating equipment',
    ],
    symptoms: [
      {
        title: 'Frequent Breakdowns',
        description:
          'If your current heating system requires repeated repairs, replacement may be more practical than continuing to invest in an aging unit. We assess the condition of your system and explain your options.',
      },
      {
        title: 'Rising Energy Bills',
        description:
          'An aging or improperly sized heating system can cause energy bills to climb. A new, correctly sized installation can improve efficiency and comfort.',
      },
      {
        title: 'Uneven Heating',
        description:
          'If some rooms are consistently colder than others, the issue may be related to system sizing, ductwork, or the installation itself. We evaluate the entire heating setup.',
      },
      {
        title: 'System Age',
        description:
          'Heating systems that have been in service for many years may no longer operate reliably or efficiently. We can help evaluate whether replacement makes sense for your situation.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us to discuss your heating installation needs. We will schedule a visit to assess your home and current system.',
      },
      {
        title: 'Evaluate',
        description:
          'We inspect your home, evaluate heating requirements, and discuss appropriate system options based on your needs.',
      },
      {
        title: 'Install',
        description:
          'We install the new heating system, connect all components properly, test the startup, and confirm everything is operating correctly before we leave.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if I need a new heating system?',
        a: 'Signs that you may need a replacement include frequent breakdowns, rising energy bills, uneven heating, and a system that no longer responds well to repairs. We evaluate your current system and provide honest guidance.',
      },
      {
        q: 'What size heating system do I need?',
        a: 'Heating system sizing depends on your home size, insulation, window placement, and other factors. An oversized or undersized system can cause comfort and efficiency problems. We evaluate your home to determine the appropriate capacity.',
      },
      {
        q: 'How long does a heating installation take?',
        a: 'A standard heating installation is typically completed in one day, though the exact timeline depends on the complexity of the installation and any ductwork or electrical work that is needed.',
      },
    ],
  },
  {
    slug: 'air-conditioning-repair',
    name: 'Air Conditioning Repair',
    shortName: 'AC Repair',
    category: 'Cooling',
    icon: 'Snowflake',
    image: IMAGES.acOutdoor,
    alt: 'Air conditioner condenser unit outside a home, representing AC repair in Waukegan IL',
    shortDescription:
      'AC repair for systems blowing warm air, not cooling properly, making noise, or not starting at all during the summer heat.',
    cta: 'Explore AC Repair',
    titleTag: 'Air Conditioning Repair Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'AC repair in Waukegan, IL. AColeman Heating and Cooling fixes air conditioners blowing warm air, short cycling, making noise, or not starting. Call 224-659-6849.',
    h1: 'Air Conditioning Repair in Waukegan, IL',
    intro:
      'A broken air conditioner during an Illinois summer makes your home uncomfortable quickly. AColeman Heating and Cooling provides air conditioning repair services that focus on identifying the specific problem affecting your cooling system. Whether your AC is blowing warm air, short cycling, or not starting at all, we work through the system to find and fix the issue.',
    problems: [
      'AC blowing warm air or not cooling the home',
      'Weak airflow from supply vents',
      'Air conditioner not starting or responding to the thermostat',
      'Strange noises from the indoor or outdoor unit',
      'Frequent cycling on and off',
      'Uneven cooling across different rooms',
      'Refrigerant leak or low refrigerant charge',
      'Frozen evaporator coil or condensate drainage problems',
    ],
    symptoms: [
      {
        title: 'Warm Air from Vents',
        description:
          'If your AC is running but blowing warm air, the problem may be low refrigerant, a compressor issue, a dirty condenser coil, or a refrigerant leak. We test the system to find the cause.',
      },
      {
        title: 'AC Will Not Start',
        description:
          'An air conditioner that does not respond to the thermostat may have a tripped breaker, a faulty capacitor, a bad contactor, or a control board failure. We test each component to identify the problem.',
      },
      {
        title: 'Short Cycling',
        description:
          'An AC that turns on and off frequently may be overheating, have a dirty air filter, a refrigerant issue, or an improperly sized system. Short cycling reduces efficiency and can damage the compressor.',
      },
      {
        title: 'Frozen Coil',
        description:
          'A frozen evaporator coil typically indicates restricted airflow or a refrigerant problem. Running the system with a frozen coil can cause damage, so professional diagnosis is important.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call 224-659-6849 and describe the AC problem. We will schedule a service visit to diagnose the issue.',
      },
      {
        title: 'Diagnose',
        description:
          'We inspect the indoor and outdoor units, test the refrigerant charge, electrical components, and airflow, and explain what we find.',
      },
      {
        title: 'Repair',
        description:
          'We perform the necessary AC repair, test the system under normal conditions, and confirm the cooling problem is resolved.',
      },
    ],
    faqs: [
      {
        q: 'Why is my AC blowing warm air?',
        a: 'Warm air from your AC vents can be caused by low refrigerant, a refrigerant leak, a compressor problem, a dirty condenser coil, or a thermostat issue. We diagnose the specific cause and perform the appropriate repair.',
      },
      {
        q: 'How do I know if my AC has a refrigerant leak?',
        a: 'Signs of a refrigerant leak include warm air from vents, hissing sounds near the indoor unit, ice on the refrigerant lines, and higher energy bills. Refrigerant leaks require professional repair and recharging.',
      },
      {
        q: 'Should I turn off my AC if it is not cooling?',
        a: 'If your air conditioner is running but not cooling, or if you notice ice on the coils or refrigerant lines, turn the system off to prevent further damage and call for professional repair.',
      },
    ],
  },
  {
    slug: 'ac-installation',
    name: 'AC Installation',
    shortName: 'AC Installation',
    category: 'Cooling',
    icon: 'Wind',
    image: IMAGES.acUnit,
    alt: 'Air conditioner unit mounted on a building exterior, representing AC installation in Waukegan IL',
    shortDescription:
      'Professional air conditioning installation for new systems and replacements, with proper sizing, setup, and testing for reliable cooling.',
    cta: 'Explore AC Installation',
    titleTag: 'AC Installation Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'AC installation in Waukegan, IL. AColeman Heating and Cooling installs and replaces air conditioning systems with attention to proper sizing and setup. Call 224-659-6849.',
    h1: 'AC Installation in Waukegan, IL',
    intro:
      'A correctly installed air conditioning system is essential for reliable summer comfort in Waukegan. AColeman Heating and Cooling provides AC installation services for new homes, system replacements, and upgrades. We focus on proper sizing, correct refrigerant charge, and thorough startup testing so your new cooling system performs the way it should.',
    problems: [
      'Old air conditioner that needs replacement due to age or repeated repairs',
      'AC system that is incorrectly sized for the home',
      'New construction requiring a complete cooling system installation',
      'Upgrading to a more efficient air conditioning system',
      'Air conditioner damaged beyond repair',
      'Uneven cooling caused by improperly installed equipment',
      'Replacing a system with a failed compressor',
      'Home renovation requiring new cooling equipment',
    ],
    symptoms: [
      {
        title: 'Frequent AC Repairs',
        description:
          'If your air conditioner requires repeated repairs, replacement may be more practical. We assess the condition of your system and explain your options honestly.',
      },
      {
        title: 'Insufficient Cooling',
        description:
          'An AC that cannot keep up with cooling demand may be undersized, aging, or improperly installed. We evaluate your home and cooling requirements to determine the right solution.',
      },
      {
        title: 'High Energy Bills',
        description:
          'An aging or incorrectly sized AC system can cause energy bills to rise. A new, properly sized installation can improve efficiency and reduce operating costs.',
      },
      {
        title: 'System Age',
        description:
          'Air conditioning systems that have been in service for many years may no longer cool reliably or efficiently. We can help evaluate whether replacement makes sense.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us to discuss your AC installation needs. We will schedule a visit to assess your home and current system.',
      },
      {
        title: 'Evaluate',
        description:
          'We inspect your home, evaluate cooling requirements, and discuss appropriate system options based on your needs.',
      },
      {
        title: 'Install',
        description:
          'We install the new air conditioning system, connect all components, charge the refrigerant properly, test the startup, and confirm proper operation.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if I need a new air conditioner?',
        a: 'Common signs include frequent breakdowns, insufficient cooling, rising energy bills, and a system that no longer responds well to repairs. We evaluate your current AC and provide straightforward guidance.',
      },
      {
        q: 'What size air conditioner do I need?',
        a: 'AC sizing depends on your home size, insulation, window placement, sun exposure, and other factors. An oversized system short cycles and an undersized system cannot keep up. We evaluate your home to determine the correct capacity.',
      },
      {
        q: 'How long does an AC installation take?',
        a: 'A standard AC installation is usually completed in one day. The exact timeline depends on the complexity of the installation and whether any ductwork modifications are needed.',
      },
    ],
  },
  {
    slug: 'hvac-maintenance',
    name: 'HVAC Maintenance',
    shortName: 'HVAC Maintenance',
    category: 'HVAC',
    icon: 'Wrench',
    image: IMAGES.techInspect,
    alt: 'HVAC technician inspecting an outdoor unit during maintenance in Waukegan IL',
    shortDescription:
      'Preventive HVAC maintenance to keep your heating and cooling systems running efficiently and catch small problems before they become major repairs.',
    cta: 'View HVAC Maintenance',
    titleTag: 'HVAC Maintenance Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'HVAC maintenance in Waukegan, IL. AColeman Heating and Cooling provides preventive maintenance for heating and cooling systems to improve efficiency and reliability. Call 224-659-6849.',
    h1: 'HVAC Maintenance in Waukegan, IL',
    intro:
      'Regular HVAC maintenance helps your heating and cooling systems operate efficiently and reliably throughout the year. AColeman Heating and Cooling provides preventive maintenance services that include inspecting, cleaning, and testing system components. By addressing minor issues before they become major problems, maintenance can help extend the life of your equipment and reduce the likelihood of unexpected breakdowns.',
    problems: [
      'Heating or cooling system has not been inspected in over a year',
      'Reduced airflow or uneven heating and cooling',
      'Higher than expected energy bills',
      'System runs louder than it used to',
      'Dust or poor air quality in the home',
      'Frequent cycling or difficulty reaching set temperatures',
      'Preventive care before peak heating or cooling season',
      'General system check-up for peace of mind',
    ],
    symptoms: [
      {
        title: 'Reduced Efficiency',
        description:
          'A system that has not been maintained may work harder to achieve the same result, leading to higher energy bills and increased wear on components.',
      },
      {
        title: 'Airflow Problems',
        description:
          'Dirty filters, clogged coils, and blocked vents restrict airflow, making your system less effective and potentially causing damage over time.',
      },
      {
        title: 'Unusual Noises or Odors',
        description:
          'A system that is running louder than normal or producing unusual odors may have components that need cleaning, adjustment, or replacement.',
      },
      {
        title: 'Inconsistent Temperatures',
        description:
          'If your system struggles to maintain consistent temperatures, maintenance can help identify whether the cause is a component issue, a thermostat problem, or an airflow restriction.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us to schedule a maintenance visit. We can arrange maintenance before heating or cooling season to prepare your system.',
      },
      {
        title: 'Inspect and Clean',
        description:
          'We inspect and clean key components, replace or clean filters, check electrical connections, and test system operation.',
      },
      {
        title: 'Report',
        description:
          'We explain what we found, note any components that may need attention in the future, and answer any questions about your system.',
      },
    ],
    faqs: [
      {
        q: 'How often should I have HVAC maintenance done?',
        a: 'We recommend having your HVAC system inspected and maintained at least once a year. Many homeowners schedule maintenance twice a year — once before heating season and once before cooling season.',
      },
      {
        q: 'What does HVAC maintenance include?',
        a: 'A typical maintenance visit includes inspecting and cleaning system components, checking filters, testing electrical connections, evaluating airflow, and confirming that the system is operating correctly. We explain what we find and note any items that may need attention.',
      },
      {
        q: 'Can maintenance prevent breakdowns?',
        a: 'While no service can guarantee that a breakdown will never occur, regular maintenance helps identify and address minor issues before they lead to larger problems. This can reduce the likelihood of unexpected system failures.',
      },
    ],
  },
  {
    slug: 'hvac-diagnostics',
    name: 'HVAC Diagnostics',
    shortName: 'HVAC Diagnostics',
    category: 'HVAC',
    icon: 'Stethoscope',
    image: IMAGES.techCircuit,
    alt: 'Technician repairing an electronic circuit board, representing HVAC diagnostics in Waukegan IL',
    shortDescription:
      'Thorough HVAC diagnostics to identify the root cause of heating and cooling problems, with clear explanations of what is happening and what is needed.',
    cta: 'Explore HVAC Diagnostics',
    titleTag: 'HVAC Diagnostics Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'HVAC diagnostics in Waukegan, IL. AColeman Heating and Cooling identifies the root cause of heating and cooling system problems with thorough testing. Call 224-659-6849.',
    h1: 'HVAC Diagnostics in Waukegan, IL',
    intro:
      'When something is wrong with your heating or cooling system but the cause is not obvious, professional diagnostics are essential. AColeman Heating and Cooling provides thorough HVAC diagnostics that test system components, evaluate performance, and identify the root cause of the problem. We explain what we find in clear terms so you understand what is happening and what service is needed.',
    problems: [
      'Heating or cooling system is not performing correctly but the cause is unclear',
      'Intermittent problems that are difficult to reproduce',
      'Error codes or warning lights on a thermostat or control panel',
      'System performance has gradually declined over time',
      'Multiple symptoms that may or may not be related',
      'Second opinion on a previous diagnosis or repair recommendation',
      'Complex system with multiple components not working together',
      'Need to understand whether repair or replacement is the better option',
    ],
    symptoms: [
      {
        title: 'Unclear Performance Issues',
        description:
          'If your system is not working right but you cannot pinpoint why, a diagnostic evaluation tests each component to identify the source of the problem.',
      },
      {
        title: 'Intermittent Problems',
        description:
          'Problems that come and go can be especially frustrating. We use systematic testing to identify components that are failing intermittently before they stop working entirely.',
      },
      {
        title: 'Error Codes',
        description:
          'Modern HVAC systems may display error codes that indicate specific problems. We interpret these codes and perform the appropriate tests to confirm the diagnosis.',
      },
      {
        title: 'Declining Performance',
        description:
          'A system that has gradually become less effective may have multiple contributing factors. A thorough diagnostic identifies all of the issues affecting performance.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us and describe the symptoms you are experiencing. We will schedule a diagnostic visit.',
      },
      {
        title: 'Test',
        description:
          'We systematically test the heating or cooling system components, check performance data, and identify the root cause of the problem.',
      },
      {
        title: 'Explain',
        description:
          'We explain what we found, what is causing the problem, and what service is needed to resolve it. You will have the information you need to make an informed decision.',
      },
    ],
    faqs: [
      {
        q: 'What is the difference between diagnostics and repair?',
        a: 'Diagnostics is the process of identifying the cause of a problem. Repair is the work performed to fix it. We diagnose the issue first, explain what is needed, and then perform the repair with your approval.',
      },
      {
        q: 'How long does an HVAC diagnostic take?',
        a: 'A thorough diagnostic typically takes 45 minutes to an hour, depending on the complexity of the system and the nature of the problem. We take the time needed to identify the root cause accurately.',
      },
      {
        q: 'Can you provide a second opinion on an HVAC diagnosis?',
        a: 'Yes. If you have received a diagnosis or repair recommendation from another contractor and want a second opinion, we can independently evaluate your system and provide our own assessment.',
      },
    ],
  },
  {
    slug: 'thermostat-services',
    name: 'Thermostat Services',
    shortName: 'Thermostat Services',
    category: 'HVAC',
    icon: 'Thermostat',
    image: IMAGES.thermostat,
    alt: 'Modern digital thermostat on a wall, representing thermostat services in Waukegan IL',
    shortDescription:
      'Thermostat repair, replacement, and installation services to ensure accurate temperature control and proper communication with your HVAC system.',
    cta: 'Explore Thermostat Services',
    titleTag: 'Thermostat Services Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'Thermostat services in Waukegan, IL. AColeman Heating and Cooling repairs, replaces, and installs thermostats for accurate temperature control and HVAC communication. Call 224-659-6849.',
    h1: 'Thermostat Services in Waukegan, IL',
    intro:
      'Your thermostat is the control center for your heating and cooling system. If it is not communicating correctly with your HVAC equipment, your system may not heat or cool properly, may short cycle, or may not respond at all. AColeman Heating and Cooling provides thermostat repair, replacement, and installation services to ensure accurate temperature control and reliable system operation.',
    problems: [
      'Thermostat does not respond or display is blank',
      'Heating or cooling system does not match the thermostat setting',
      'Thermostat short cycles or runs the wrong mode',
      'Outdated thermostat that does not support programmable scheduling',
      'Inaccurate temperature readings',
      'Thermostat loses connection to the HVAC system',
      'Need a new thermostat installed with a new system',
      'Upgrading to a programmable or smart thermostat',
    ],
    symptoms: [
      {
        title: 'System Does Not Respond',
        description:
          'If your heating or cooling system does not start when the thermostat calls for it, the problem may be the thermostat, the wiring, or the HVAC control board. We test each to find the cause.',
      },
      {
        title: 'Wrong Temperature',
        description:
          'If the temperature in your home does not match the thermostat setting, the thermostat may be reading incorrectly, poorly placed, or the system may have a different problem.',
      },
      {
        title: 'Short Cycling',
        description:
          'A thermostat that is malfunctioning or poorly placed can cause the system to turn on and off too frequently, reducing efficiency and comfort.',
      },
      {
        title: 'Blank or Unresponsive Display',
        description:
          'A thermostat with a blank display may have dead batteries, a wiring problem, or a failed component. We diagnose the issue and recommend repair or replacement.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us and describe the thermostat problem. We will schedule a service visit.',
      },
      {
        title: 'Diagnose',
        description:
          'We test the thermostat, wiring, and HVAC control connections to determine whether the thermostat needs repair, replacement, or simply recalibration.',
      },
      {
        title: 'Service',
        description:
          'We repair or replace the thermostat, verify proper communication with the HVAC system, and confirm that temperature control is working correctly.',
      },
    ],
    faqs: [
      {
        q: 'Can a bad thermostat cause HVAC problems?',
        a: 'Yes. A malfunctioning thermostat can cause your system to short cycle, not start at all, run the wrong mode, or fail to reach the set temperature. Thermostat issues are a common cause of HVAC performance problems.',
      },
      {
        q: 'Should I upgrade to a programmable thermostat?',
        a: 'A programmable thermostat can help you manage heating and cooling schedules more efficiently. If your current thermostat is basic or malfunctioning, upgrading can improve comfort and energy management. We can discuss options that work with your system.',
      },
      {
        q: 'Where should a thermostat be installed?',
        a: 'A thermostat should be installed on an interior wall away from direct sunlight, drafts, doorways, and heat sources. Poor placement can cause inaccurate readings and short cycling. We ensure proper placement during installation.',
      },
    ],
  },
  {
    slug: 'hvac-system-replacement',
    name: 'HVAC System Replacement',
    shortName: 'HVAC Replacement',
    category: 'HVAC',
    icon: 'RefreshCw',
    image: IMAGES.techRooftop,
    alt: 'Technician working on a rooftop HVAC unit, representing system replacement in Waukegan IL',
    shortDescription:
      'Complete HVAC system replacement services, removing old equipment and installing new heating and cooling systems sized and configured for your home.',
    cta: 'Explore HVAC Replacement',
    titleTag: 'HVAC System Replacement Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'HVAC system replacement in Waukegan, IL. AColeman Heating and Cooling removes old HVAC equipment and installs new, properly sized systems. Call 224-659-6849.',
    h1: 'HVAC System Replacement in Waukegan, IL',
    intro:
      'When your heating and cooling system has reached the end of its useful life, a full HVAC system replacement may be the most practical option. AColeman Heating and Cooling provides complete system replacement services, from removing old equipment to installing new, properly sized systems. We focus on correct sizing, proper installation, and thorough testing so your new system provides reliable comfort for years to come.',
    problems: [
      'Both heating and cooling systems are aging and need replacement',
      'System requires increasingly frequent and expensive repairs',
      'Heating and cooling performance has declined significantly',
      'Energy bills have increased noticeably over time',
      'System uses outdated refrigerant that is no longer available',
      'Cracked heat exchanger or failed compressor requiring full replacement',
      'Home renovation or expansion requiring a larger system',
      'Desire for a more efficient, modern HVAC system',
    ],
    symptoms: [
      {
        title: 'Repeated Breakdowns',
        description:
          'A system that requires frequent repairs is often approaching the end of its service life. We assess the overall condition and help you determine whether replacement is the better investment.',
      },
      {
        title: 'Declining Performance',
        description:
          'If both your heating and cooling have become less effective over time, the system may be wearing out. A replacement can restore comfort and efficiency.',
      },
      {
        title: 'Rising Costs',
        description:
          'Older systems are less efficient and cost more to operate. A new, properly sized system can reduce energy consumption and lower utility bills.',
      },
      {
        title: 'Outdated Equipment',
        description:
          'Systems that use outdated refrigerants or are no longer supported by manufacturers may need to be replaced rather than repaired. We explain your options clearly.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us to discuss your HVAC replacement needs. We will schedule a visit to evaluate your current system and home.',
      },
      {
        title: 'Evaluate and Plan',
        description:
          'We assess your home, evaluate heating and cooling requirements, and discuss system options that fit your needs.',
      },
      {
        title: 'Replace',
        description:
          'We remove the old equipment, install the new system, connect all components, and thoroughly test the operation before we leave.',
      },
    ],
    faqs: [
      {
        q: 'How do I know if I need a full HVAC system replacement?',
        a: 'If your system is aging, requires frequent repairs, has declining performance, or uses outdated refrigerant, replacement may be the better option. We evaluate your system and provide honest guidance about whether repair or replacement makes sense.',
      },
      {
        q: 'How long does an HVAC system replacement take?',
        a: 'A standard HVAC system replacement is typically completed in one to two days, depending on the complexity of the installation and any modifications needed to ductwork or electrical connections.',
      },
      {
        q: 'Can I replace just the furnace or just the AC?',
        a: 'In some cases, individual components can be replaced. However, mismatched components can reduce efficiency and performance. We evaluate your entire system and recommend the approach that will work best for your home.',
      },
    ],
  },
  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning',
    shortName: 'Duct Cleaning',
    category: 'HVAC',
    icon: 'Wind',
    image: IMAGES.ductwork,
    alt: 'HVAC ductwork in a residential home, representing duct cleaning in Waukegan IL',
    shortDescription:
      'Professional duct cleaning to remove dust, debris, and contaminants from your HVAC ductwork, improving airflow and indoor air quality.',
    cta: 'Explore Duct Cleaning',
    titleTag: 'Duct Cleaning Waukegan IL | AColeman Heating and Cooling',
    metaDescription:
      'Duct cleaning in Waukegan, IL. AColeman Heating and Cleaning cleans HVAC ductwork to improve airflow and indoor air quality. Call 224-659-6849.',
    h1: 'Duct Cleaning in Waukegan, IL',
    intro:
      'Over time, dust, pollen, pet dander, and other contaminants accumulate inside your HVAC ductwork. AColeman Heating and Cooling provides professional duct cleaning services that remove buildup from your duct system, helping your heating and cooling system operate more efficiently and improving the air quality in your home. Whether you have noticed reduced airflow, visible dust around your vents, or simply want a cleaner system, our duct cleaning service addresses the problem thoroughly.',
    problems: [
      'Visible dust or debris around supply and return vents',
      'Reduced airflow from vents despite clean filters',
      'Dust accumulating quickly on surfaces after cleaning',
      'Musty or stale odors when the HVAC system runs',
      'Allergy symptoms worsening when the system is on',
      'Ductwork has not been cleaned in several years',
      'Recent renovation or construction that introduced dust into the ducts',
      'Uneven airflow across different rooms',
    ],
    symptoms: [
      {
        title: 'Dust Around Vents',
        description:
          'If you see dust buildup around your vent covers or dust blowing into your rooms when the system starts, your ductwork likely needs cleaning. This is a sign that debris has accumulated inside the duct system.',
      },
      {
        title: 'Reduced Airflow',
        description:
          'Ductwork that is clogged with dust and debris restricts airflow, making your heating and cooling system work harder. Cleaning the ducts can restore proper airflow and improve system performance.',
      },
      {
        title: 'Musty Odors',
        description:
          'A musty or stale smell when your HVAC system runs can indicate that contaminants have built up inside the ductwork. Professional cleaning removes the source of the odor.',
      },
      {
        title: 'Allergy Concerns',
        description:
          'If allergy symptoms seem worse indoors when the HVAC system is running, dust, pollen, and other allergens in the ductwork may be circulating through your home. Duct cleaning can help reduce these airborne irritants.',
      },
    ],
    process: [
      {
        title: 'Contact',
        description:
          'Call us to schedule a duct cleaning visit. We will ask about your system and any concerns you have about airflow or air quality.',
      },
      {
        title: 'Clean',
        description:
          'We access the ductwork, use specialized equipment to dislodge and remove dust and debris, and clean the vent covers and accessible components.',
      },
      {
        title: 'Verify',
        description:
          'We check airflow at the vents, confirm the system is operating properly, and explain what we found and removed during the cleaning.',
      },
    ],
    faqs: [
      {
        q: 'How often should I have my ducts cleaned?',
        a: 'Most homes benefit from duct cleaning every 3 to 5 years. If you have pets, allergies, or have recently completed a renovation, you may want to clean the ducts sooner. We can assess your ductwork and recommend an appropriate schedule.',
      },
      {
        q: 'Will duct cleaning improve my HVAC efficiency?',
        a: 'Yes. Dust and debris in the ductwork restrict airflow, forcing your system to work harder. Removing that buildup allows air to flow more freely, which can improve efficiency and reduce strain on your heating and cooling equipment.',
      },
      {
        q: 'How long does a duct cleaning take?',
        a: 'A typical residential duct cleaning takes 2 to 4 hours depending on the size of the home and the condition of the ductwork. We take the time needed to thoroughly clean the entire system.',
      },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  {
    name: 'Heating',
    icon: 'Flame',
    color: 'warmorange',
    services: ['heating-repair', 'furnace-repair', 'heating-installation'],
  },
  {
    name: 'Cooling',
    icon: 'Snowflake',
    color: 'coolblue',
    services: ['air-conditioning-repair', 'ac-installation'],
  },
  {
    name: 'HVAC',
    icon: 'Wrench',
    color: 'navy',
    services: [
      'hvac-maintenance',
      'hvac-diagnostics',
      'thermostat-services',
      'hvac-system-replacement',
      'duct-cleaning',
    ],
  },
] as const;

export type LocationItem = {
  slug: string;
  name: string;
  state: string;
  description: string;
  services: string[];
};

export const LOCATIONS: LocationItem[] = [
  {
    slug: 'waukegan-il',
    name: 'Waukegan',
    state: 'IL',
    description:
      'As a Waukegan-based heating contractor, AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Waukegan, Illinois and the surrounding communities. Our location on W Dugdale Rd means we are nearby when you need HVAC service.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'north-chicago-il',
    name: 'North Chicago',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in North Chicago, Illinois. Located just minutes from North Chicago, we respond quickly when you need reliable HVAC service.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'gurnee-il',
    name: 'Gurnee',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Gurnee, Illinois. Whether you live near Gurnee Mills or in a residential neighborhood, we are nearby when you need HVAC service.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'lake-forest-il',
    name: 'Lake Forest',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Lake Forest, Illinois. We serve the Lake Forest community with reliable HVAC repair and installation.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'libertyville-il',
    name: 'Libertyville',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Libertyville, Illinois. Our technicians are familiar with the homes in Libertyville and respond promptly to HVAC service calls.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'round-lake-il',
    name: 'Round Lake',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Round Lake, Illinois. We are a short drive away and ready to help with any heating or cooling need.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'zionsville-il',
    name: 'Zion',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Zion, Illinois. We serve Zion and the surrounding area with dependable HVAC repair and installation.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'park-city-il',
    name: 'Park City',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Park City, Illinois. As a nearby Waukegan-based contractor, we reach Park City quickly for HVAC service calls.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'beach-park-il',
    name: 'Beach Park',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Beach Park, Illinois. We are located just minutes away and ready to respond to your heating and cooling needs.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
  {
    slug: 'highland-park-il',
    name: 'Highland Park',
    state: 'IL',
    description:
      'AColeman Heating and Cooling provides heating repair, AC repair, installation, and HVAC maintenance services to homes and businesses in Highland Park, Illinois. We serve the Highland Park community with professional HVAC repair, installation, and maintenance.',
    services: ['heating-repair', 'air-conditioning-repair', 'hvac-maintenance'],
  },
];

export type FAQItem = {
  q: string;
  a: string;
  category: string;
};

export const FAQS: FAQItem[] = [
  {
    category: 'Heating',
    q: 'Why is my furnace not producing heat?',
    a: 'A furnace that is not producing heat may have an ignition failure, a faulty thermocouple, a gas supply issue, a tripped breaker, or a thermostat communication problem. We diagnose the specific cause and perform the appropriate repair.',
  },
  {
    category: 'Heating',
    q: 'What does it mean if my furnace is short cycling?',
    a: 'Short cycling — turning on and off frequently without completing a full heating cycle — can be caused by a dirty flame sensor, an overheating problem, a clogged air filter, or an incorrectly sized system. Professional diagnosis is needed to identify and resolve the cause.',
  },
  {
    category: 'Heating',
    q: 'Why is my furnace making strange noises?',
    a: 'Banging, rattling, squealing, or grinding noises from a furnace typically indicate a mechanical problem such as a worn blower motor, loose components, a cracked heat exchanger, or ignition issues. These sounds should be investigated promptly.',
  },
  {
    category: 'Heating',
    q: 'My heating system will not start. What should I do?',
    a: 'First, check that the thermostat is set correctly and the breaker has not tripped. If the system still does not start, turn it off and call for professional service. Running a system that is not starting properly can cause further damage.',
  },
  {
    category: 'Cooling',
    q: 'Why is my AC blowing warm air?',
    a: 'Warm air from your AC can be caused by low refrigerant, a refrigerant leak, a compressor problem, a dirty condenser coil, or a thermostat issue. We diagnose the specific cause and perform the appropriate repair.',
  },
  {
    category: 'Cooling',
    q: 'What should I do if my AC is frozen?',
    a: 'Turn the system off immediately to prevent damage to the compressor. A frozen evaporator coil typically indicates restricted airflow or a refrigerant problem. Call for professional diagnosis and repair before turning the system back on.',
  },
  {
    category: 'Cooling',
    q: 'Why is my air conditioner short cycling?',
    a: 'Short cycling can be caused by an oversized system, low refrigerant, a dirty air filter, or an electrical problem. Short cycling reduces efficiency and can damage the compressor over time, so it should be addressed promptly.',
  },
  {
    category: 'HVAC',
    q: 'How often should I have my HVAC system maintained?',
    a: 'We recommend having your HVAC system inspected and maintained at least once a year. Many homeowners schedule maintenance twice a year — once before heating season and once before cooling season — to keep both systems in good condition.',
  },
  {
    category: 'HVAC',
    q: 'What does HVAC maintenance include?',
    a: 'A typical maintenance visit includes inspecting and cleaning system components, checking or replacing filters, testing electrical connections, evaluating airflow, and confirming proper operation. We explain what we find and note any items that may need attention.',
  },
  {
    category: 'HVAC',
    q: 'How do I know if I need a new HVAC system?',
    a: 'Signs that replacement may be needed include frequent breakdowns, declining performance, rising energy bills, and a system that no longer responds well to repairs. We evaluate your system and provide honest guidance about whether repair or replacement makes sense.',
  },
  {
    category: 'Thermostats',
    q: 'Can a bad thermostat cause HVAC problems?',
    a: 'Yes. A malfunctioning thermostat can cause your system to short cycle, not start at all, run the wrong mode, or fail to reach the set temperature. Thermostat issues are a common cause of HVAC performance problems.',
  },
  {
    category: 'Thermostats',
    q: 'Where should my thermostat be installed?',
    a: 'A thermostat should be on an interior wall away from direct sunlight, drafts, doorways, and heat sources. Poor placement can cause inaccurate readings and short cycling. We ensure proper placement during installation.',
  },
  {
    category: 'Troubleshooting',
    q: 'Why is the airflow from my vents weak?',
    a: 'Weak airflow can be caused by a dirty air filter, blocked vents, ductwork leaks, a failing blower motor, or a frozen evaporator coil. We diagnose the specific cause and recommend the appropriate service.',
  },
  {
    category: 'Troubleshooting',
    q: 'What causes uneven heating or cooling in my home?',
    a: 'Uneven temperatures can be caused by ductwork issues, an improperly sized system, poor insulation, or blocked vents. We evaluate your system and home to identify the cause and recommend solutions.',
  },
  {
    category: 'Scheduling',
    q: 'How do I schedule service with AColeman Heating and Cooling?',
    a: 'Call us at 224-659-6849 to schedule a service visit. We will ask about the problem you are experiencing and arrange a time that works for you. You can also use the contact form on our website to send us a message.',
  },
  {
    category: 'Scheduling',
    q: 'What should I expect during a service visit?',
    a: 'We arrive at the scheduled time, inspect your system, diagnose the problem, and explain what we find. We perform the necessary repair or service with your approval, test the system, and answer any questions you have.',
  },
];
