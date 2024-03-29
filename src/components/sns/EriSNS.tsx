import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/SNS/SNS.module.scss";

export default function EriSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link
          href={"https://beauty.hotpepper.jp/slnH000616748/stylist/T000873217/"}
          passHref
        >
          <div className={styles.blog}></div>
        </Link>
        {/* <Link href={"https://www.instagram.com/goodday_yuki/"} passHref>
          <div className={styles.instagram}></div>
        </Link> */}
        <Link
          href={"https://liff.line.me/1645278921-kWRPP32q/?accountId=467ircqt"}
          passHref
        >
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
