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
import com.robotemi.sdk.navigation.model.*
import com.robotemi.sdk.map.*
import com.robotemi.sdk.navigation.model.SpeedLevel
import com.robotemi.sdk.navigation.model.Position 
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoTemiModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoTemi")

    Function("speak") { text: String ->
      var robot = Robot.getInstance()
      val ttsRequest = TtsRequest.create(speech = text, language = TtsRequest.Language.EN_US, isShowOnConversationLayer = false)
      robot.speak(ttsRequest)
    }

    Function("getMapList") {
      Robot.getInstance().getMapList()
    }

    Function("loadMap") { mapID: String ->
      Robot.getInstance().loadMap(mapID)
    }

    Function("getMapData") {
      return@Function Robot.getInstance().getMapData()
    }

    Function("goToPosition") { x: Float, y: Float, yaw: Float, tiltAngle: Int, backwards: Boolean, noByPass: Boolean, speedLevel: SpeedLevel ->
      var robot = Robot.getInstance()
      var position = Position(x, y, yaw, tiltAngle)
      robot.goToPosition(position, backwards, noByPass, speedLevel)
    }

    Function("setKioskModeOn") {on: Boolean ->
      var robot = Robot.getInstance()
      robot.setKioskModeOn(on)
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".temi", Context.MODE_PRIVATE)
  }
}
