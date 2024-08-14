import React from "react";
import NewsParentForm from "@/app/components/News/NewsParentForm";
import injectToken from "@/app/actions";
import { getAllNews } from "@/app/lib/services/news/news";
import { getCollege, getCollegeDetails } from '@/app/lib/services/colleges/collegeservices';

import { loadProfile } from "@/app/lib/services/user/userServices";
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
    clientProps.newsList = await getAllNews(collegeUuid);
    clientProps.isFailed = false;
    clientProps.profie = profie;
    clientProps.collegeUuid = collegeUuid;
  }

  return (
    <div>
      <NewsParentForm clientProps={clientProps} />
    </div>
  );
}
