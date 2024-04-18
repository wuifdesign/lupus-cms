import { Head } from '@inertiajs/react'
import React from 'react'
import { AuthenticatedLayout } from '@/layouts/authenticated-layout'
import { DeleteUserForm } from '@/pages/profile/partials/delete-user-form'
import { UpdatePasswordForm } from '@/pages/profile/partials/update-password-form'
import { UpdateProfileInformationForm } from '@/pages/profile/partials/update-profile-information-form'
import { PageProps } from '@/types'

type EditProps = PageProps<{
  mustVerifyEmail: boolean
  status?: string
}>

export const Edit: React.FC<EditProps> = ({ auth, mustVerifyEmail, status }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
    >
      <Head title="Profile" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail} status={status} className="max-w-xl" />
          </div>

          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Edit
