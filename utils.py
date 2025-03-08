def calculate_life_path(birthdate):
    # Remove any non-numeric characters
    numbers = ''.join(filter(str.isdigit, birthdate))
    
    # Keep reducing until we get a single digit
    while len(numbers) > 1:
        total = sum(int(digit) for digit in numbers)
        numbers = str(total)
    
    number = int(numbers)
    
    meanings = {
        1: "Natural born leader with strong independence",
        2: "Diplomatic and peaceful peacemaker",
        3: "Creative and optimistic communicator",
        4: "Practical and hardworking builder",
        5: "Freedom-loving adventurer",
        6: "Nurturing and responsible caregiver",
        7: "Spiritual and analytical seeker",
        8: "Ambitious and materialistic achiever",
        9: "Humanitarian and compassionate healer"
    }
    
    return {
        "number": number,
        "meaning": meanings.get(number, "Unknown path")
    }

def calculate_compatibility(sign1, sign2):
    # Compatibility matrix (simplified)
    elements = {
        'fire': ['Aries', 'Leo', 'Sagittarius'],
        'earth': ['Taurus', 'Virgo', 'Capricorn'],
        'air': ['Gemini', 'Libra', 'Aquarius'],
        'water': ['Cancer', 'Scorpio', 'Pisces']
    }
    
    def get_element(sign):
        for element, signs in elements.items():
            if sign in signs:
                return element
        return None
    
    element1 = get_element(sign1)
    element2 = get_element(sign2)
    
    # Calculate compatibility percentage
    if element1 == element2:
        percentage = 95
    elif (element1 == 'fire' and element2 == 'air') or (element1 == 'air' and element2 == 'fire'):
        percentage = 90
    elif (element1 == 'water' and element2 == 'earth') or (element1 == 'earth' and element2 == 'water'):
        percentage = 85
    else:
        percentage = 70
    
    return {
        "percentage": percentage,
        "message": f"These signs have a {percentage}% compatibility rate!"
    }
