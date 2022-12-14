import Link from "next/link";
import styles from "../../styles/philosophy/Philosophy.module.scss";

const Features: React.FC = () => {
  return (
    <>
      <div className={styles.features}>
        <h2 className={styles.featuresMainTitle}>Philosophy</h2>
        <p className={styles.featuresMainSubTitle}>
          GOOD-DAYが大切にしたいこと
        </p>
        <div className={styles.featuresArea}>
          <>
            <h2 className={styles.featuresTitle}>
              時代に合った新しい働き方を…
            </h2>
            <div className={styles.featuresDescription}>
              グッディは、日本にいる全ての美容師さんが「もっと自分らしく仕事を楽しんで欲しい」と考えています。
              <br />
              <br />
              美容師だけに限った話ではありませんが、事実思うように休みが取れなかったり、朝から晩まで仕事に忙殺されているのが現状です。
              <br />
              <br />
              せっかく美容師に憧れて美容業界に入っても、日々変化する生活と上手く付き合うことができず、仕事を辞める人も少なくありません。
              <br />
              <br />
              「今までこうだった」という固定概念を破壊して、「どうやったら心からもっと楽しめるか？」ということを突き詰め考えていかないと、我々は生き残っていけないのかもしれません。
              <br />
              <br />
              時代に合った新しい働き方を…
              <br />
              <br />
              グッディは、これからも美容師と美容業界に新しい関わり方を模索し続けていきます。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>ヘアサロンとの違い</h2>
            <div className={styles.featuresDescription}>
              グッディは「シェアサロン」であり、美容師さんにはフリーランスという形でお仕事をしていただきます。
              <br />
              <br />
              もう少し詳しく説明してみます。業務委託とフリーランスって何が違うのでしょうか？一見すると業務委託とフリーランスって似ているのですが、一番の違いは業務委託は契約方法、フリーランスは働き方(生き方)です。
              <br />
              <br />
              業務委託は仕事の都度契約をしながら働く契約方法で、フリーランスとは主に個人事業主のことを指しています。
              <br />
              <br />
              個人事業主である美容師さんが集まって働くヘアサロンを、弊社では「シェアサロン」と呼んでいます。
              <br />
              <br />
              また普通は一つのお店に勤めますが、フリーランスですから複数の店舗で仕事をしても問題ありません。また、もし美容師とは別の仕事をしていても副業といった形で美容師として働きたい時にだけ働くと言ったことも可能です。
              <br />
              <br />
              自己責任は伴いますが、グッディは自由な働き方ができるヘアサロンです。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>GOOD-DAYで働くメリット</h2>
            <div className={styles.featuresDescription}>
              グッディで働くメリットについてですが、ずばり「固定費をかけずに独立できる」ということです。
              <br />
              <br />
              普通、美容師が独立する場合、店舗を構えます。
              <br />
              <br />
              店舗を構えると土地、建物、設備、材料など、ある程度まとまったお金を用意しなければなりません。しかも時間も必要になりますよね。またランニングコストのように毎月決まった金額が経営費として必要になります。
              <br />
              <br />
              グッディでは、月額会費(※店舗によって金額が異なります)と、ご自身の材料費だけで独立と同じ働き方を実現することができます。(※初回登録時は入会金
              + 月額会費 が初期費用として必要になります。)
              <br />
              <br />
              もし今後独立を検討している場合、グッディで「実際に自分でお店を出した場合、こんなことをやってみたい！」ということを試す場に利用しても良いと思います。
              <br />
              <br />
              独立してから「うわ…もっと準備しておけば良かった……」となるより、独立の前にリスクを最小限に抑えてテストできたらすごいことですよね？
              <br />
              それがグッディのもう一つのメリットでもあります。
            </div>
          </>
          <>
            <h2 className={styles.featuresTitle}>業務委託との違い</h2>
            <div className={styles.featuresDescription}>
              一般的な業務委託とグッディの違いは自由度の高さと選択肢の多さです。
              <br />
              <br />
              一般的な業務委託は、「サロンのオーナーさんが、空いている席を美容師さんに貸し出して代わりに売り上げの○○%をくださいね。」という形がほとんどです。加えて、面貸しで働く美容師さんも給料ではなく自分の売り上げと席代を差し引いた金額が収入になります。
              <br />
              <br />
              ただヘアサロンの業務委託を経験した方のお話を聞く限りでは、良いことばかりではなく、美容師にとってデメリットが多いと話してくれました。
              <br />
              <br />
              朝から晩まで割り振られるお客様を、工場の作業のようにひたすらに捌く(さばく)こともあるようです。
              <br />
              <br />
              美容師の仕事の醍醐味の一つに「お客様とのコミュニケーション」が挙げられると思います。お客様からご支持をいただき、「今日はあの人が来てくれるんだ。どんなお話をしようかな？」と考えることも美容師の仕事の楽しみの一つですよね。
              <br />
              <br />
              この楽しい時間であるはずの会話が、作業を優先するあまり禁止になっているところもあるくらいです。それだけ店舗としての売り上げを優先している業務委託の店舗が多いということです。
              <br />
              <br />
              グッディの場合、勤務時間、お休み、価格設定、接客の内容、使用する薬剤・技術など、店舗に依存しません。自分で自由に選択、決定することができます。(最低限のマナーは存在します。)
              <br />
              <br />
              美容師として本来やりたかった「接客に重点を置いた営業ができる」のです。当たり前のことのように思うかもしれませんが、実は独立して初めて成せることでもあります。
              <br />
              <br />
              反面、全て自己責任になりますが、自己資金とリスクを最小限に抑えた状態で自由に決められるところは相当少ないはずです。
              <br />
              <br />
              グッディでは、美容師という職業を一生愛し続け、「美容師って最高だ」と実感してもらえる環境づくりを目指しています。
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Features;
