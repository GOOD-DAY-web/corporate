import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Company/Company.module.scss";

export default function Nakashima() {
  return (
    <>
      <div id="Nakashima" className={styles.menu}>
        <h2 className={styles.menuTitle}>倉敷中島店</h2>
        <div className={styles.shopImg}>
          <Image
            src={"/media/GOOD-DAY_Nakashima.jpg"}
            alt={"commig soon !!"}
            objectFit="contain"
            width={1920}
            height={1060}
          />
        </div>
        <table className={styles.menuArea}>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>店舗名</th>
              <td className={styles.menuTableTd}>GOOD-DAY 倉敷中島店</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>会員募集</th>
              <td className={styles.menuTableTd}>
                現在応募は受け付けていません。
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>所在地</th>
              <td className={styles.menuTableTd}>
                〒710-0803 岡山県倉敷市中島795-1
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Tel</th>
              <td className={styles.menuTableTd}>
                <div className={styles.next}>
                  <Link href={"tel:086-454-7373"} passHref>
                    <span className={styles.nextInner}>
                      <p className={styles.nextInnerIn}>Phone Call</p>
                    </span>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>Mail</th>
              <td className={styles.menuTableTd}>gooddaybss777@gmail.com</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>代表取締役</th>
              <td className={styles.menuTableTd}>見垣 義則</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>事業内容</th>
              <td className={styles.menuTableTd}>美容業</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
