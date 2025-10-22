import dotenv from "dotenv";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../db/connection");

dotenv.config();