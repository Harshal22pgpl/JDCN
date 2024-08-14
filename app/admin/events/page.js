import React from 'react'
import EventParentForm from '@/app/components/Event/EventParentForm'
import injectToken from "@/app/actions";
import { getEvent } from '@/app/lib/services/events/events';
import { getCollege, getCollegeDetails } from '@/app/lib/services/colleges/collegeservices';

import { loadProfile } from "@/app/lib/services/user/userServices";
export default async function page() {

  const isFailed = await injectToken();
  const profie = await loadProfile();
  console.log(profie,"profffffffile");
  const clientProps = {};
  clientProps.isFailed = isFailed;
  let college = await getCollegeDetails();
  let collegeUuid = college.uuid
  if (!isFailed) {
    let colleges = [];
    
    if (profie?.userType === "ADMIN") {
     
      collegeUuid = "";
      colleges = await getCollege();

      console.log(colleges,'hbdnmnjfgfkjghhgjgjhghjh')
      clientProps.colleges = colleges.map(({ uuid, name }) => ({
        value: uuid,
        label: name,
      }));

    }
    clientProps.events = await getEvent(collegeUuid);
    clientProps.isFailed = false;
    clientProps.profie = profie;
    clientProps.collegeUuid = collegeUuid;
  }
  return (
    <div><EventParentForm clientProps={clientProps}/></div>
  )
}
