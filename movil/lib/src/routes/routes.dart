import 'package:flutter/cupertino.dart';

import 'package:flutter/material.dart';
import 'package:movil/src/views/home_page.dart';

class Routes {

  Map<String, WidgetBuilder> getAllRoutes() {
    return {
      '/' : (BuildContext context) => HomePage()
    };
  }

}