import { Router } from "express"; // Import Router from express
import CORS from "cors"; // Import CORS from cors
import {StringKeys} from '../../../settings/keys/keys'; // Import keys

// Setup Router
const AccountDetails = Router(); // Create a router
AccountDetails.use(CORS({origin:StringKeys.CORS_URL})); // Use CORS

// Import All Services
import { GetProfilePic } from "../../../Services/General/File Management"; // Import File Fetch Service

// All Services
AccountDetails.get('/ProfilePic/:ProfilePicID', GetProfilePic); // Profile Pic Fetch Service

// Export Router
export default AccountDetails; // Export router