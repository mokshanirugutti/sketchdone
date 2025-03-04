import { Request, Response } from 'express'
import { generateToken } from '../config/jwtConfig'
import jwt from 'jsonwebtoken'

export const signup = async (req : Request, res : Response) => {
    res.send('signup')
    
    
}


export const login = async ( req : Request, res : Response) => {
    res.send('login')
}