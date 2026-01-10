import jwt from 'jsonwebtoken'

export const genarateAccessToken=(payload)=>{
 return jwt.sign(payload, '4c2994a0131517fefbc327addc9f1f8b',
    {expiresIn:"15m"}
 )
}

export const genarateRefreshToken=(payload)=>{
    return jwt.sign(payload, '4c2994a0131517fefbc327addc9f1f8b',
    {expiresIn:"7d"})
}

