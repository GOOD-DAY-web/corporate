import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Yuka() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>おすすめMenu</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + カラー</th>
            <td className={styles.menuTableTd}>
              カットとカラーのセットMenuです。
            </td>
            <td className={styles.menuTableTd}>¥11,660〜</td>
            <td className={styles.menuTableTd}>150分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + トリートメント</th>
            <td className={styles.menuTableTd}>
              カットとトリートメントのセットMenuです。
            </td>
            <td className={styles.menuTableTd}>¥7,260</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラー + トリートメント</th>
            <td className={styles.menuTableTd}>
              カラーとトリートメントのセットMenuです。
            </td>
            <td className={styles.menuTableTd}>¥11,660〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>
              白髪染め(根本リタッチ) + カット
            </th>
            <td className={styles.menuTableTd}>
              白髪染めのリタッチとカットのセットMenuです。
            </td>
            <td className={styles.menuTableTd}>¥10,560〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>
              白髪染め(根本リタッチ) + トリートメント
            </th>
            <td className={styles.menuTableTd}>
              白髪染めのリタッチとトリートメントのセットMenuです。
            </td>
            <td className={styles.menuTableTd}>¥10,560〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(シャンプー・ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>大人カット</th>
            <td className={styles.menuTableTd}>(シャンプー込)</td>
            <td className={styles.menuTableTd}>¥4,730</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生カット</th>
            <td className={styles.menuTableTd}>(シャンプー込)</td>
            <td className={styles.menuTableTd}>¥3,740</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
        {/* <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody> */}
        {/* <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生未満カット</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody> */}
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪カット</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥770</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ポイントカット</th>
            <td className={styles.menuTableTd}>
              (シャンプーなし, 襟足や刈り上げなど)
            </td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>40分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>
        ☆長さ料金あり(ショート + ¥550, ミディアム + ¥1,100, ロング + ¥1,650,
        それ以上 + ¥2,200〜)
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>前回来店から30日以内</td>
            <td className={styles.menuTableTd}>¥4,180</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>前回来店から60日以内</td>
            <td className={styles.menuTableTd}>¥4,730</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3cmまで</td>
            <td className={styles.menuTableTd}>¥5,830</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラー全体</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,930〜</td>
            <td className={styles.menuTableTd}>90分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ブリーチ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥9,130〜</td>
            <td className={styles.menuTableTd}>180分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>インナーブリーチ</th>
            <td className={styles.menuTableTd}>
              (デザインにより料金・時間変動あり)
            </td>
            <td className={styles.menuTableTd}>¥5,830〜</td>
            <td className={styles.menuTableTd}>180分〜</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハイライト、グラデーション</th>
            <td className={styles.menuTableTd}>
              (デザインにより料金・時間変動あり)
            </td>
            <td className={styles.menuTableTd}>¥7,700〜</td>
            <td className={styles.menuTableTd}>180分〜</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ(ブロー込)</h2>
      <p className={styles.menuDetail}>☆長さ内容によって＋料金あります</p>
      <p className={styles.menuDetail}>☆カット別・SB込</p>
      <p className={styles.menuDetail}>
        ☆※特殊パーマ(ツイスト、スパイラル)は扱っておりません。
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,600〜</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分パーマ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,440〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>縮毛矯正</h2>
      <p className={styles.menuDetail}>☆長さ、部分によりプラス料金あり</p>
      <p className={styles.menuDetail}>
        ショート + ¥550, ミディアム + ¥1,100, ロング + ¥1,650, それ以上
        +¥2,200〜
      </p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>縮毛矯正</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥13,750〜</td>
            <td className={styles.menuTableTd}>150分〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(4ヶ月以内)</td>
            <td className={styles.menuTableTd}>¥11,550〜</td>
            <td className={styles.menuTableTd}>120分〜240分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>前髪縮毛矯正</th>
            <td className={styles.menuTableTd}>詳細</td>
            <td className={styles.menuTableTd}>¥5,500〜</td>
            <td className={styles.menuTableTd}>90分〜120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分縮毛矯正</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥7,700〜</td>
            <td className={styles.menuTableTd}>150分〜240分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>トリキュアクイック</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー別</td>
            <td className={styles.menuTableTd}>¥2,530</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>トリキュアトリートメント</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー別</td>
            <td className={styles.menuTableTd}>¥3,300</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>高保湿トリートメント</th>
            <td className={styles.menuTableTd}>シャンプー・ブロー別</td>
            <td className={styles.menuTableTd}>¥3,850</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
      </table>

      {/* <h2 className={styles.menuTitle}>セットメニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + カラー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥11,330〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット + トリートメント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥6,930</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラー + トリートメント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥11,000〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>白髪染め + カット</th>
            <td className={styles.menuTableTd}>(根元リタッチ)</td>
            <td className={styles.menuTableTd}>¥10,230〜</td>
            <td className={styles.menuTableTd}>120分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>白髪染め + トリートメント</th>
            <td className={styles.menuTableTd}>(根元リタッチ)</td>
            <td className={styles.menuTableTd}>¥9,900〜</td>
            <td className={styles.menuTableTd}>90分</td>
          </tr>
        </tbody>
      </table> */}

      <h2 className={styles.menuTitle}>その他</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>シャンプー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>15分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>炭酸スパシャンプー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,650</td>
            <td className={styles.menuTableTd}>20分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ブロー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥1,100</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>セット</th>
            <td className={styles.menuTableTd}>
              ブロー仕上げ、コテ巻き、アイロン仕上げのみ
            </td>
            <td className={styles.menuTableTd}>¥2,200</td>
            <td className={styles.menuTableTd}>30分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>アップ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥4,400〜¥5,500</td>
            <td className={styles.menuTableTd}>60分〜</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
