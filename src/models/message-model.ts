import db from "../config/db-config"

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize"

interface Message
  extends Model<InferAttributes<Message>, InferCreationAttributes<Message>> {
  id?: string
  template_name: string
  position: number
}
const MessageModel = db.define<Message>("message_flow", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  template_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

export default MessageModel
