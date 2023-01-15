
import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'

const Messages = () => {
    return (
        <div className={classes.messageWrapper}>
            <ul className={classes.dialogList}>
                <dl className={classes.title}>DIALOGS</dl>
                <DialogList dialogName="Andrey "/>
                <DialogList dialogName="Dima" />
                <DialogList dialogName="Alex" />
                <DialogList dialogName="Anastasiia" />
                <DialogList dialogName="Jake" />
                <DialogList dialogName="Molly" />
                <DialogList dialogName="Arianna" />
                <DialogList dialogName="Avery" />
                <DialogList dialogName="Gabriella" />
                <DialogList dialogName="User not found" />
            </ul>
            <ul className={classes.messageList}>
                <MessageItem message='Hello' name='Anastasiia' />
                <MessageItem message='Hi!' name='Me' />
                <MessageItem message='How are you?' name='Anastasiia' />
                <MessageItem message='I am fine! What about you?' name='Me' />
                <MessageItem message='I am fine too, thanks.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cupiditate nemo quaerat, praesentium ipsa similique quo ab, quibusdam non sapiente eius asperiores recusandae soluta! Repudiandae nisi omnis voluptatum, architecto recusandae consequuntur natus eaque unde culpa quos sit ut, hic sapiente cum obcaecati perferendis delectus nihil magni facere quod odit. Corporis enim illum dolorum unde nostrum eum, architecto atque placeat, natus libero error voluptas tempore itaque. Iste dolores officiis dignissimos nostrum voluptatibus qui esse architecto corrupti expedita facilis libero eius similique, nisi impedit? Facilis dolore aliquid corrupti ipsam iusto? Placeat, facilis aliquam recusandae, velit cupiditate inventore quasi architecto libero impedit quisquam eligendi, assumenda rerum iure corrupti ipsa reprehenderit saepe provident vero est sunt sit nisi eum iusto exercitationem! Neque quidem nostrum impedit, debitis obcaecati ab, placeat nihil non veniam quis iste ut numquam architecto cupiditate, natus ducimus perferendis incidunt eveniet dolor? A explicabo suscipit hic? Asperiores ipsa rem doloremque necessitatibus magni commodi ullam eveniet eos, distinctio repudiandae iusto dolorum maxime quod odit quibusdam! Temporibus ex sapiente labore vel quibusdam ipsum eius! In consectetur iure nesciunt, voluptatem odio ipsam pariatur non. Eligendi repellat architecto officia laudantium harum itaque labore culpa fugit quidem fuga. Blanditiis eaque non voluptatibus odio, necessitatibus fugit voluptate vero.
' name='Anastasiia' />


            </ul>
        </div>
    )
}

export default Messages;