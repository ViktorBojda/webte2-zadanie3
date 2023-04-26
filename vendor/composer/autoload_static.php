<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitacdcbcbda0a19a1f536b2df05ceeb4e6
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Workerman\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Workerman\\' => 
        array (
            0 => __DIR__ . '/..' . '/workerman/workerman',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitacdcbcbda0a19a1f536b2df05ceeb4e6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitacdcbcbda0a19a1f536b2df05ceeb4e6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitacdcbcbda0a19a1f536b2df05ceeb4e6::$classMap;

        }, null, ClassLoader::class);
    }
}
