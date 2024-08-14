import React from 'react'
import EventParentForm from '@/app/components/Event/EventParentForm'
import injectToken from "@/app/actions";
import { getCareer } from '@/app/lib/services/careers/careers';
import CareerParent from '@/app/components/Career/CareerParentForm';

export default async function page() {
  const isFailed = await injectToken();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  clientProps.events = await getCareer();
  clientProps.isFailed = false;
  

  return (
    <div><CareerParent clientProps={clientProps}/></div>
  )
}
