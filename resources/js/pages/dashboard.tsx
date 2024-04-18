import { Head } from '@inertiajs/react'
import React from 'react'
import { AuthenticatedLayout } from '@/layouts/authenticated-layout'
import { PageProps } from '@/types'

type DashboardProps = PageProps

export const Dashboard: React.FC<DashboardProps> = ({ auth }) => {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You&lsquo;re logged in!</div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Dashboard
