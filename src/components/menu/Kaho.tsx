import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Kaho() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(カットなし、SHブロー* ¥2,200)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>一般カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,950</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生カット</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込み</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生以下</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー込み</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>Fカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥550</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>根本のみのカラーです</td>
            <td className={styles.menuTableTd}>¥4,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フルカラー</th>
            <td className={styles.menuTableTd}>全体のカラーです</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントカラー</th>
            <td className={styles.menuTableTd}>
              部分カラーです。カットなし、シャンプー・ブロー別
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>特殊カラー</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>Wカラー</th>
            <td className={styles.menuTableTd}>
              全体のブリーチ+オンカラーです
            </td>
            <td className={styles.menuTableTd}>¥13,200</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ケアブリーチ</th>
            <td className={styles.menuTableTd}>
              ダメージを抑えたブリーチを使用します(オンカラー込み)
            </td>
            <td className={styles.menuTableTd}>¥15,400</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ブリーチリタッチ</th>
            <td className={styles.menuTableTd}>根本のブリーチ+オンカラー</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>オンカラー</th>
            <td className={styles.menuTableTd}>2回染める場合のカラーです</td>
            <td className={styles.menuTableTd}>¥0</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>イヤリングカラー</th>
            <td className={styles.menuTableTd}>耳上のみのカラーです</td>
            <td className={styles.menuTableTd}>¥0</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト(5枚)</th>
            <td className={styles.menuTableTd}>
              オンカラーは別途料金が必要です
            </td>
            <td className={styles.menuTableTd}>¥0</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハイライト・ローライト(15枚)</th>
            <td className={styles.menuTableTd}>
              オンカラーは別途料金が必要です
            </td>
            <td className={styles.menuTableTd}>¥0</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハイライト・ローライト(20枚)</th>
            <td className={styles.menuTableTd}>
              オンカラーは別途料金が必要です
            </td>
            <td className={styles.menuTableTd}>¥0</td>
            <td className={styles.menuTableTd}>0分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>
        前処理剤にこだわり、髪への負担をなるべく少なく施術します。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ</th>
            <td className={styles.menuTableTd}>通常のパーマです</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>特殊パーマ</th>
            <td className={styles.menuTableTd}>
              ツイスト・スパイラルなどを含む特殊なパーマです
            </td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントパーマ</th>
            <td className={styles.menuTableTd}>部分的なパーマです</td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ストレート</h2>
      <p className={styles.menuDetail}>(カットなし、SHブロー + ¥2,200)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正</th>
            <td className={styles.menuTableTd}>全体の縮毛矯正です</td>
            <td className={styles.menuTableTd}>¥13,200</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ポイント矯正</th>
            <td className={styles.menuTableTd}>部分的な縮毛矯正です</td>
            <td className={styles.menuTableTd}>¥6,600</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>パーマ落とし</th>
            <td className={styles.menuTableTd}>
              一度パーマを行った毛髪からカールを取り除きます
            </td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <p className={styles.menuDetail}>(カットなし、SHブロー + ¥2,200)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クイックトリートメント</th>
            <td className={styles.menuTableTd}>
              外部補修中心のトリートメントです
            </td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>システムトリートメント</th>
            <td className={styles.menuTableTd}>
              4stepで外部補修と内部補修をします
            </td>
            <td className={styles.menuTableTd}>¥0</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <p className={styles.menuDetail}>(カットなし、SHブロー + ¥2,200)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ヘッドスパ15分</th>
            <td className={styles.menuTableTd}>(所要時間は60分です)</td>
            <td className={styles.menuTableTd}>¥1,870</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ヘッドスパ30分</th>
            <td className={styles.menuTableTd}>(所要時間は90分です)</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ヘッドスパ60分</th>
            <td className={styles.menuTableTd}>(所要時間は120分です)</td>
            <td className={styles.menuTableTd}>¥7,700</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>セットメニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              似合わせカット+クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>(所要時間は90分です)</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カラー+トリートメント</th>
            <td className={styles.menuTableTd}>(所要時間は150分です)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              フルカラー+クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>
              長さ料金あり　M＋¥1100 L＋¥2200
              <br />
              シャンプー・ブロー込み
            </td>
            <td className={styles.menuTableTd}>¥9,900〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット+カラー+トリートメント</th>
            <td className={styles.menuTableTd}>(所要時間は180分です)</td>
            <td className={styles.menuTableTd}>¥12,650</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット＋カラー＋クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>(所要時間は90分です)</td>
            <td className={styles.menuTableTd}>¥12,650〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット＋デザインカラー＋トリートメント
            </th>
            <td className={styles.menuTableTd}>(所要時間は270分です)</td>
            <td className={styles.menuTableTd}>¥19,250</td>
            <td className={styles.menuTableTd}>270分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ヘアセット</th>
            <td className={styles.menuTableTd}>
              要相談
              <br />
              10時より前は早朝料金をいただいております。
              <br />
              30分毎につき+¥1100
            </td>
            <td className={styles.menuTableTd}>¥4,400</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>シャンプーブロー</th>
            <td className={styles.menuTableTd}>
              シャンプーブローのみのmenuです。
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>長さ料金</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>
              髪の長さ、毛量によって変動します。
            </td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>0</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>
              髪の長さ、毛量によって変動します。
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>0</td>
          </tr>
        </tbody>
      </table>

      {/* <h2 className={styles.menuTitle}>複合メニュー</h2>
      <p className={styles.menuDetail}>特にご要望の多い複数メニューです。</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + オーガニックカラー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥13,750</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + イルミナカラー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥14,850</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + オーガニックリタッチカラー
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥11,550</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥14,850〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + 髪質改善トリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥20,350〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + イヤリングカラー
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥17,050〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + インナーダブルカラー
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥19,250〜</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ダブルカラー</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥21,450〜</td>
            <td className={styles.menuTableTd}>240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + ポイントハイライト
            </th>
            <td className={styles.menuTableTd}>(5枚)</td>
            <td className={styles.menuTableTd}>¥14,850〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー + ハーフハイライト
            </th>
            <td className={styles.menuTableTd}>(15枚)</td>
            <td className={styles.menuTableTd}>¥17,050〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + カラー フルハイライト
            </th>
            <td className={styles.menuTableTd}>(30枚)</td>
            <td className={styles.menuTableTd}>¥21,450〜</td>
            <td className={styles.menuTableTd}>180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + パーマ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥12,320</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 特殊パーマ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥14,850</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + チューニング</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + 縮毛矯正</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥22,770</td>
            <td className={styles.menuTableTd}>210分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ストレートパーマ</th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥12,650</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + クイックトリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥6,050</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              カット + 髪質改善トリートメント
            </th>
            <td className={styles.menuTableTd}>(詳細)</td>
            <td className={styles.menuTableTd}>¥11,550</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(5分)</td>
            <td className={styles.menuTableTd}>¥5,500</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(15分)</td>
            <td className={styles.menuTableTd}>¥6,490</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(25分)</td>
            <td className={styles.menuTableTd}>¥8,800</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(35分)</td>
            <td className={styles.menuTableTd}>¥9,900</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(45分)</td>
            <td className={styles.menuTableTd}>¥11,000</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>カット + ヘッドスパ</th>
            <td className={styles.menuTableTd}>(55分)</td>
            <td className={styles.menuTableTd}>¥12,100</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
      </table> */}
      <div className={styles.kuchikomi}>
        <div className={styles.kuchikomiImage}>
          <Link href="https://g.page/r/CQPgESBuoBhVEAI/review" passHref>
            <Image
              src={"/media/kuchikomi_01.png"}
              alt={"口コミのご協力をお願いします。"}
              objectFit="contain"
              width={500}
              height={500}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
