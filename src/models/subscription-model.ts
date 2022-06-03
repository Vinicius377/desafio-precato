import db from "../config/db-config"

import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize"

interface Subscription
  extends Model<
    InferAttributes<Subscription>,
    InferCreationAttributes<Subscription>
  > {
  id?: string
  name: string
  subscription_date?: Date
  last_message: number
  active?: boolean
  email: string
}
const SubscriptionModel = db.define<Subscription>("subscription", {
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subscription_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  last_message: {
    type: DataTypes.INTEGER,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
})

export default SubscriptionModel
