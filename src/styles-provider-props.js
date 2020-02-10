import { jssPreset } from "@material-ui/styles"
import { create } from "jss"

const stylesProviderProps = {
  jss: create({ ...jssPreset(), insertionPoint: "mui-indject-first" }),
}

export default stylesProviderProps
