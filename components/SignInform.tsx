import React from "react"
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { supabase } from 
import { useRouter } from "next/router"
import Link from "next/link"
import { FloatingLabelWithIcon } from "./ui/FloatingLabelWithIcon"
import { button } from './ui/button'

interface SignInFormData {
    accountNumber: string;
    email: string; 
    password: string; 
}

const SignInform: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    //I'm in the register and handlesummit part

  return (
    <div>SignInform</div>
  )
}

export default SignInform