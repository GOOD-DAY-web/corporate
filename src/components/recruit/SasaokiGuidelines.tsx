// 各店舗の募集要項は先ず同階層にあるRecruitment.tsxに出力してください。
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Recruit/Recruit.module.scss";

export default function SasaokiGuidelines() {
  return (
    <>
      <div className={styles.mainArea}>
        <h2>倉敷笹沖店</h2>
        <table>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>
                募集要項(GOOD-DAY倉敷笹沖店)
              </th>
              <td className={styles.menuTableTd}>
                ※こちらの募集要項は倉敷笹沖店の内容です。
                <br />
                <br />
                その他店舗の募集要項については、条件、内容が異なる場合がございます。
                <br />
                <br />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>雇用形態</th>
              <td className={styles.menuTableTd}>フリーランス</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>募集職種・技術ランク</th>
              <td className={styles.menuTableTd}>
                スタイリスト
                <br />
                <br />
                ※アシスタントの募集は行っておりません。
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>勤務先・アクセス</th>
              <td className={styles.menuTableTd}>〒710-0834 倉敷市笹沖580-6</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>必須免許・資格</th>
              <td className={styles.menuTableTd}>美容師免許</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>こだわり</th>
              <td className={styles.menuTableTd}>
                店舗が綺麗(2023年秋Open予定)、個室あり、入店時の検温・消毒、独立支援制度、確定申告のサポート(青色申告)、技術講習会、集客勉強会、ブランクOK、副業・WワークOK、車通勤OK、バイク通勤OK、土日休み可能、勤務時間を自由に設定可能
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>報酬</th>
              <td className={styles.menuTableTd}>月に2回（売り上げの70%）</td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>休日</th>
              <td className={styles.menuTableTd}>
                定休日：無休
                <br />
                休　日：勤務時間自由に設定可能
                <br />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>貸与・支給品</th>
              <td className={styles.menuTableTd}>
                ワゴン(1台)、スタイリスト専用ロッカー(1台)
                <br />
                <br />
                ※先着5名様までスタートアップセットをプレゼント!!
                <br />
                <br />
                ※施術に使用する道具・商材については各自ご準備ください。
                <br />
                <br />
                ※ご自身で使いやすい薬剤をご持参ください。(持込料は無し)
                <br />
                <br />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>会費</th>
              <td className={styles.menuTableTd}>
                coming soon
                <br />
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTableTr}>
              <th className={styles.menuTableTh}>GOOD-DAYのメリット</th>
              <td className={styles.menuTableTd}>
                開業資金・リスクを抑えながら、独立することができます。
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTablLast}>
              <th className={styles.menuTableTh}>応募方法</th>
              <td className={styles.menuTableTd}>
                <Link
                  href={"https://page.line.me/153jsnax?openQrModal=true"}
                  passHref
                >
                  LINE公式アカウント
                </Link>
                からお問合せください。
                <br />
                <br />
                <div>
                  <Link
                    href={"https://page.line.me/153jsnax?openQrModal=true"}
                    passHref
                  >
                    <Image
                      className={styles.qrImage}
                      src={"/media/QR_LINE.png"}
                      alt={"LINE公式アカウントはこちら"}
                      width={240}
                      height={240}
                    />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className={styles.menuTabl}>
              <th className={styles.menuTableTh}>サロン見学</th>
              <td className={styles.menuTableTd}>
                <span className={styles.textBold}>サロン見学について</span>
                <br />
                <br />
                <span className={styles.fontColorRed}>
                  ※笹沖店は現在建築中のため、施工完了までは他店での見学になります
                </span>
                <br />
                <br />
                ご希望のサロン見学の日程を第一希望から第三希望までご検討ください。
                <br />
                <br />
                【例】
                <br />
                見学希望店舗: 倉敷笹沖店
                <br />
                ①4月12日(月) 10:00〜
                <br />
                ②4月13日(火) 11:00〜
                <br />
                ③4月14日(水) 12:00〜
                <br />
                <br />
                ※倉敷笹沖店のサロン見学は随時受け付けております。公式LINEよりご連絡ください。
                <br />
                <br />
                ※上記例を参考に、日付、曜日、お時間をお知らせいただけるとスムーズです。
                <br />
                <br />
                ※ご応募については、
                <span className={styles.fontColorRed}>
                  必ず求職者ご本人様がご連絡ください。
                </span>
                代理の方や、業者の方の場合、正確なご案内ができない場合がございます。スムーズなご案内にご協力お願いします。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
