import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response)=> { //using the Request and Response interface from express
  res.send(`
  <form method='POST'>
    <div>
      <label>Email</label>
      <input name='email' />
    </div>
    <div>
      <label>Password </label>
      <input name='password' type='password' />
    </div>
    <button>Submit</button>
  </form>
  `)
})

export { router };