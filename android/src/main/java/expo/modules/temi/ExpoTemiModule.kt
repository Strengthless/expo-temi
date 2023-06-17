package expo.modules.temi

import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoTemiModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoTemi")

    Events("onChangeTheme")

    Function("setTheme") { theme: String ->
      getPreferences().edit().putString("theme", theme).commit()
      this@ExpoTemiModule.sendEvent("onChangeTheme", bundleOf("theme" to theme))
    }

    Function("getTheme") {
      return@Function getPreferences().getString("theme", "system")
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".temi", Context.MODE_PRIVATE)
  }
}