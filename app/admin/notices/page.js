import React from 'react'
import NoticeParent from '@/app/components/Notice/NoticeParent'
import injectToken from "@/app/actions";
import { getAllNotice } from "@/app/lib/services/notice/notice";
import { getCollege, getCollegeDetails } from '@/app/lib/services/colleges/collegeservices';
import { loadProfile } from '@/app/lib/services/user/userServices';
export default async function page() {
  const isFailed = await injectToken();

  const profie = await loadProfile();
  const clientProps = {};
  clientProps.isFailed = isFailed;
  let college = await getCollegeDetails();
  let collegeUuid = college.uuid
  if (!isFailed) {
    let colleges = [];
    
    if (profie?.userType === "ADMIN") {
     
      collegeUuid = "";
      colleges = await getCollege();
      clientProps.colleges = colleges.map(({ uuid, name }) => ({
        value: uuid,
        label: name,
      }));

    }
    clientProps.noticeList = await getAllNotice(collegeUuid);
    clientProps.isFailed = false;
    clientProps.profie = profie;
    clientProps.collegeUuid = collegeUuid;
  }
  return (
    <div><NoticeParent clientProps={clientProps} /></div>
  )
}
