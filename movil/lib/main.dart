import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:movil/src/routes/routes.dart';
 
void main() => runApp(MyApp());
 
class MyApp extends StatelessWidget {

  final routes = Routes();

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        
      ],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        initialRoute: '/',
        routes: routes.getAllRoutes()
      ),
    );
  }
}