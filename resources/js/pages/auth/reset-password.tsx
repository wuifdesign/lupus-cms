import React, { FormEventHandler, useEffect } from 'react'
import { Head, useForm } from '@inertiajs/react'
import { GuestLayout } from '@/layouts/guest-layout'
import { InputError } from '@/components/input-error'
import { InputLabel } from '@/components/input-label'
import { PrimaryButton } from '@/components/primary-button'
import { TextInput } from '@/components/text-input'
import { PageProps } from '@/types'

type ResetPasswordProps = PageProps<{ token: string; email: string }>

const ResetPassword: React.FC<ResetPasswordProps> = ({ token, email }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route('password.store'))
  }

  return (
    <GuestLayout>
      <Head title="Reset Password" />

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            isFocused={true}
            onChange={(e) => setData('password', e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

          <TextInput
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password_confirmation', e.target.value)}
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4" disabled={processing}>
            Reset Password
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  )
}

export default ResetPassword
