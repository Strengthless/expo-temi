package expo.modules.temi

import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import com.robotemi.sdk.*
import com.robotemi.sdk.Robot.*
import com.robotemi.sdk.Robot.Companion.getInstance
import com.robotemi.sdk.TtsRequest.Companion.create
import com.robotemi.sdk.voice.ITtsService
import com.robotemi.sdk.voice.model.TtsVoice
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

    Function("speak") { text: String ->
      var robot = Robot.getInstance()
      val ttsRequest = TtsRequest.create(speech = text, language = TtsRequest.Language.ZH_HK, isShowOnConversationLayer = false)
      robot.speak(ttsRequest)
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".temi", Context.MODE_PRIVATE)
  }
}