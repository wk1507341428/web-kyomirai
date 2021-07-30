import styles from './index.less';
import * as API from '@/request';
import { useEffect } from 'react'



export default function IndexPage() {

  const GetUsers = async () => {
    const response = await API.GetUsers()
    console.log(response, "MMMM")
  }

  useEffect(()=>{
    GetUsers()
  }, [])

  return (
    <div>
      <h1 className={styles.title}></h1>
      <div className={`mt20`}>KKK</div>
    </div>
  );
}
