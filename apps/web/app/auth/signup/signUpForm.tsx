import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const SignUpForm = () => {
  return (
        <form >
            <div className="flex flex-col gap-2">
                <div>
                <Label >Name</Label>
                    <Input id="name" name="name" placeholder="Marcos fdsj" />
                </div>
                <div>
                    <Label>Email</Label>
                    <Input id="email" name="email" placeholder="Marcos@gmail.com" />
                </div>
                <div>
                    <Label >Password</Label>
                    <Input id="password" name="password" placeholder="password" />
                </div>
            </div>
        </form>
  )
}

export default SignUpForm