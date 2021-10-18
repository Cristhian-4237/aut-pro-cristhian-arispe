import {sayHi} from './sayHello.js';
import {calculateAge} from './userAge.js';
import {user_Name, last_Name, birth_Year} from './userData.js';

//sayHi('Cristhian', 'Arispe');
//calculateAge(1989);
//console.log(user_Name, last_Name, birth_Year);
sayHi(user_Name, last_Name);
calculateAge(birth_Year);
